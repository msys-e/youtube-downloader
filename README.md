# youtube-downloader

`youtube-downloader` can download mp3 from youtube URL(video url / playlist url) list

# Requirement

* [Node.js](https://nodejs.org/ja/)
* [ffmpeg](https://www.ffmpeg.org/)

# Installation

```bash
$ npm install
```

# Usage

1. get your [youtube data api token](https://developers.google.com/youtube/registering_an_application?hl=en)
1. add your token to `YOUTUBE_DATA_API_TOKEN` of ./config/config.json
1. add your request url to `REQUEST_URLS` of ./donwload-list/list.json
1. `npm run download:mp3`

# Note

Use within common sense

# License

`youtube-downloader` is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).