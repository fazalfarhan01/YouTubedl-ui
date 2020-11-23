from youtube_dl import YoutubeDL

parameters = {
    "verbose": False,
    "forcefilename": True,
    # "simulate": True,
    # "writethumbnail": True,
    "noplaylist": True,
    "prefer_ffmpeg": True,
    "outtmpl":"%(title)s-%(release_year)s.%(ext)s",
    "format": 'bestvideo+bestaudio/best',
}

if "audio" in parameters.get("format") and "video" not in parameters.get("format"):
    # To download audios in 'mp3' format only
    parameters["postprocessors"] = [
        {
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '320',
        },
    ]
else:
    # To download video in mp4 format only
    parameters["postprocessors"] = [
        {
            'key': 'FFmpegVideoConvertor',
            'preferedformat': 'mp4',
        },
    ]


class Downloader (YoutubeDL):
    # Inherited from the YouTubeDL Class
    def __init__(self, params=None):
        super(Downloader, self).__init__(params)

        self.url = "https://music.youtube.com/watch?v=xCHtnu5ClnQ&feature=share"
        self.playlistUrl = "https://music.youtube.com/playlist?list=PLFkKAMLbnTTtOE1nsIbq7LEcTr2FI3H_M"

        self.extract_info(self.url)


downloader = Downloader(params=parameters)
