from rembg import remove
from PIL import Image
import os
import glob

files = glob.glob('public/assets/tiles/*.png')
for file in files:
    input_image = Image.open(file)
    output_image = remove(input_image)
    output_image.save(file)
    print(f"Removed background for {file}")
