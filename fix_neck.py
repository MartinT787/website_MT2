from PIL import Image, ImageFilter, ImageDraw

def process_image():
    # Load original image
    img = Image.open('public/martin-thelin.jpg')
    img = img.convert('RGB')
    
    # Create a mask for the neck area
    # Coordinates: [x0, y0, x1, y1]
    # We will guess the neck area: roughly center x, lower y
    width, height = img.size
    x_center = width // 2
    
    # Let's define the bounding box for the neck
    # x: 1000 to 1500
    # y: 1950 to 2400
    bbox = [1000, 1950, 1500, 2400]
    
    # Create a blurred version of the whole image (Median filter removes hairs)
    blurred = img.filter(ImageFilter.MedianFilter(size=9))
    
    # Create a mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse(bbox, fill=255)
    
    # Soften the mask to blend nicely
    mask = mask.filter(ImageFilter.GaussianBlur(radius=50))
    
    # Composite the images
    result = Image.composite(blurred, img, mask)
    
    # Save test result
    result.save('public/martin-thelin-test.jpg')
    print("Done")

process_image()
