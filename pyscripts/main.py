import os, re
from printscreen import *
import datetime

url = 'http://www.lanacion.com.ar/'

if __name__ == '__main__':
    '''
        Requirements:
        Install NodeJS
        Using Node's package manager install phantomjs: npm -g install phantomjs
        install selenium (in your virtualenv, if you are using that)
        install imageMagick
        add phantomjs to system path (on windows)
    '''

    version = datetime.datetime.now().strftime("%Y-%m-%d-%H%M%S")

    name_folder = "screens"
    folder = os.path.join(BASE_DIR, name_folder)
    crop_folder = os.path.join(BASE_DIR, "crop_%s" % name_folder)
    file_name = "LN%s.png" % version
    file_path = os.path.join(folder, file_name)
    
    if not os.path.isdir(folder):
        os.mkdir(folder)
    
    if not os.path.isdir(crop_folder):
        os.mkdir(crop_folder)

    screen_path, crop_path, thumbnail_path = get_screen_shot(
        url=url, filename=file_path,
        # crop=True, crop_replace=False,
        # crop_width=990,
        # crop_height=1000,
        thumbnail=False, thumbnail_replace=False,
        thumbnail_width=200, thumbnail_height=150,
        width=1100, height=1100,
    )