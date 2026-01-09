from PIL import Image

img = Image.open("slide_1.jpg")
img.save("fixed.jpg", "JPEG")
