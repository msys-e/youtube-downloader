import { YoutubeDownload } from './youtube-download/youtube-download';
import { YoutubeDataApi } from './api/youtube-data-api';
import { REQUEST_URLS } from '../download-list/list.json';

const playlistRegex = /https:\/\/www\.youtube\.com\/playlist\?list=/;
const videoRegex = /https:\/\/www\.youtube\.com\/watch\?v=/;

export class App {
    private youtubeDataApi = new YoutubeDataApi();
    private youtubeDownload = new YoutubeDownload();

    async downloadMp3(videoId: string): Promise<void> {
        const title = await this.youtubeDataApi.getVideoTitle(videoId);
        if (title !== undefined) {
            try {
                await this.youtubeDownload.downloadMP3(
                    videoId,
                    title.replace(/\//, ''),
                );
                console.log(`${title} download complet`);
            } catch (error) {
                console.log(`${title} download failed`);
            }
        }
    }

    async createDownloadList(list: string[]): Promise<string[]> {
        let downloadList: string[] = [];
        for (const item of list) {
            if (item.match(playlistRegex)) {
                downloadList = downloadList.concat(
                    await this.youtubeDataApi.getPlayListItems(
                        item.replace(playlistRegex, ''),
                    ),
                );
            } else {
                downloadList.push(item.replace(videoRegex, ''));
            }
        }
        return downloadList;
    }
}

(async (): Promise<void> => {
    const app = await new App();
    const downloadList = await app.createDownloadList(REQUEST_URLS);
    for (const id of downloadList) {
        await app.downloadMp3(id);
    }
})();
