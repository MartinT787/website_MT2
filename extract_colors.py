import sys
from PIL import Image

def get_colors(image_path):
    img = Image.open(image_path)
    img = img.convert('RGB')
    width, height = img.size
    
    # Sample points across the width
    samples = 5
    step = width // samples
    
    colors = []
    for i in range(samples):
        x = (i * step) + (step // 2)
        y = height // 2
        r, g, b = img.getpixel((x, y))
        hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
        colors.append(hex_color.upper())
        
    return colors

if __name__ == '__main__':
    print(get_colors(sys.argv[1]))
