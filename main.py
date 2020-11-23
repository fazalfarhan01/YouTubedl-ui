from __future__ import unicode_literals

import eel
import youtube_dl


eel.init('web')

# All eel related functions goes here...
# eel.printStdout() # This is the function that prints the std out on to the app page...




@eel.expose
def processData(data):
    print(data)
    parameters = {
        "verbose": False,
        "forcefilename": True,
        "simulate": False,
        "noplaylist": True,
        "prefer_ffmpeg": True,
        "outtmpl": "%(title)s-%(release_year)s.%(ext)s",
    }

    if "video" in data["mediaType"]:
        parameters["format"] = 'bestvideo+bestaudio/best'
    else:
        parameters["format"] = 'bestaudio/best'

    if "audio" in parameters.get("format") and "video" not in parameters.get("format"):
        # To download audios in 'mp3' format only
        parameters["postprocessors"] = [
            {
                'key': 'FFmpegExtractAudio',
                'preferredcodec': data["format"],
                'preferredquality': data["quality"],
            },
        ]
    else:
        # To download video in mp4 format only
        parameters["postprocessors"] = [
            {
                'key': 'FFmpegVideoConvertor',
                'preferedformat': data["format"],
            },
        ]
    print(parameters)

    with youtube_dl.YoutubeDL(parameters) as ydl:
        ydl.download([data["url"]])
    


eel.start('index.html', block=True)
