# YouTubedl-ui
This repo is for designing a gui for YouTubeDL

Check Out the [Releases](https://github.com/fazalfarhan01/YouTubedl-ui/releases)

Run the following commands in ___Powershell Admin___ to get started on windows

```POWERSHELL
python -m pip install virtualenv
```

Open the project folder and install the pre-requesites by running the following command

```POWERSHELL
virtualenv env
./env/scripts/activate

pip install -r requirements.txt
```

Then to run the program, run the following command
```POWERSHELL
python main.py
```

### Note: As of now.. The GUI and YouTubeDL are properly integrated and the default download directory is the Downloads Folder.
To Compile and obtain the exe file, run the following
```POWERSHELL
python -m eel main.py web --onefile -w --icon=web\images\favicon.ico
```
