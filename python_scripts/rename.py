import os

folder_path = "D:\\Projects\\Eternal_Care_Home\\images\\gallery"   # path to your folder
start_index = 1  # starting number

for filename in os.listdir(folder_path):
    old_path = os.path.join(folder_path, filename)

    # skip directories
    if not os.path.isfile(old_path):
        continue

    extension = os.path.splitext(filename)[1]
    extension_1 = ".jpg"
    new_name = f"slide_{start_index}{extension_1}"
    new_path = os.path.join(folder_path, new_name)

    os.rename(old_path, new_path)
    start_index += 1

print("Renaming completed.")
