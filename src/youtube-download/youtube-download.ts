import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';

const path = require('path').resolve('');

export class YoutubeDownload {
    async downloadMP3(videoId: string, title: string): Promise<void> {
        await ffmpeg(ytdl(videoId))
            .audioBitrate(256)
            .save(`${path}/music/${title}.mp3`);
    }
}
