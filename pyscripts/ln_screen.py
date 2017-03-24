import os, re, datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

url = 'http://www.lanacion.com.ar/'
width=1100
height=1100
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


    # Start screenshot
    driver = webdriver.PhantomJS(service_log_path=os.path.join(BASE_DIR,'ghostdriver.log'))
    
    if width and height:
        driver.set_window_size(width, height)

    driver.get(url)
    
    try:
        element = WebDriverWait(driver, 10).until(
            driver.save_screenshot(file_path)
            # EC.presence_of_element_located((By.ID, "myDynamicElement"))
        )
    finally:
        driver.quit()