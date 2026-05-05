"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: height + Math.random() * height * 0.2, // Start just below the screen so they appear quickly from the bottom
        width: 80 + Math.random() * 120,
        length: height * 2.5,
        angle: angle,
        speed: 4.0 + Math.random() * 5.0, // Greatly increased speed so they appear faster and finish faster
        opacity: 0.15 + Math.random() * 0.25,
        hue: 140 + Math.random() * 30,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 14; // Reduced from 20 (30% less beams)

    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        // Removed resetBeam function as beams should only pass once

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Soft, moody gradient with reduced lightness (40%) and lower peak opacity
            gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 40%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 70%, 40%, ${pulsingOpacity * 0.3})`
            );
            gradient.addColorStop(
                0.3,
                `hsla(${beam.hue}, 70%, 40%, ${pulsingOpacity * 0.6})`
            );
            gradient.addColorStop(
                0.5,
                `hsla(${beam.hue}, 70%, 40%, ${pulsingOpacity * 0.6})`
            );
            gradient.addColorStop(
                0.7,
                `hsla(${beam.hue}, 70%, 40%, 0)`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 40%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(35px)";

            beamsRef.current = beamsRef.current.filter((beam) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;
                
                drawBeam(ctx, beam);
                
                // Keep beam only if it hasn't completely gone off the top of the screen
                return beam.y + beam.length >= -100;
            });

            // Only continue the animation loop if there are beams left
            if (beamsRef.current.length > 0) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-primary",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(15px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-primary/20"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
