from __future__ import unicode_literals

import os
userName = os.getlogin()
downloadsPath = os.path.join("C:/Users/"+userName+"/Downloads/")

import eel
import youtube_dl


eel.init('web')

# All eel related functions goes here...
# eel.printStdout() # This is the function that prints the std out on to the app page...


class MyLogger(object):
    def debug(self, msg):
        # print(msg)
        eel.printStdout(msg)
        

    def warning(self, msg):
        # print(msg)
        eel.printStdout(msg)

    def error(self, msg):
        # print(msg)
        eel.printStdout(msg)


def my_hook(d):
    if d["status"] != "finished":
        print(d["_percent_str"])
        eel.setDownloadPercent(float(d["_percent_str"].replace("%","")))
    else:
        eel.printStdout('\nDone downloading, now converting ...')


@eel.expose
def processData(data):
    # print(data)
    parameters = {
        "ffmpeg_location": "./bin",
        "verbose": False,
        "forcefilename": True,
        "simulate": False,
        "noplaylist": True,
        "prefer_ffmpeg": True,
        "outtmpl": downloadsPath+"%(title)s-%(release_year)s.%(ext)s",
        'logger': MyLogger(),
        'progress_hooks': [my_hook],
    }

    if "video" in data["mediaType"]:
        parameters["format"] = 'bestvideo[height=' + \
            data["quality"] + ']+bestaudio/best'
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
            # Tried adding support for hardware acceleration... no idea how to..
            # {
            #     "key":"-hwaccel cuda -hwaccel_output_format cuda",
            # },
        ]
    # print(parameters)

    with youtube_dl.YoutubeDL(parameters) as ydl:
        ydl.download([data["url"]])


eel.start('index.html', block=True)
