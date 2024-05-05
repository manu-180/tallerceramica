python -m venv entorno_con_3.11
 .\entorno_con_3.11\Scripts\Activate
pip install --upgrade pip
pip install -r requirements.txt
Remove-Item -Recurse -Force public
reflex init
reflex export --frontend-only
mkdir public
Expand-Archive -Path frontend.zip -DestinationPath public
Remove-Item -Force frontend.zip
deactivate