from PIL import Image

img = Image.open("../source/Ulagamayam_Logo.jpeg")
img.save("fixed.png", "JPEG")
