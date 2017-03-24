# Print Screen



## Intalación

* Clonar el repo
* Crear un virtualenv `virtualenv .venv` 
* Activar el entorno `source .venv/bin/activate`
* Instalar las dependencias `pip install -r requirements.txt`
* correr script `python main.py`


## Correr desde un crontab

Para correr desde un crontab hay que duplicar el `crontask.bash.template` en `crontask.bash` y darle permisos de ejecución `$ chmod a+x crontask.bash`

Luego solo quedaría poner los paths correspondientes en `crontask.bash` y apuntar el cron cada N tiempo a `crontask.bash`. 



## Configuración de SLIMER.js

https://slimerjs.org/download.html

sudo apt-get update
sudo apt-get install firefox
sudo apt-get install libc6 libstdc++6 libgcc1 libgtk2.0-0 libasound2 libxrender1 libdbus-glib-1-2

sudo npm install slimerjs -g
