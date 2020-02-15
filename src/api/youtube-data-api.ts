import { RestAdapter } from './adapter/rest-adapter';

export class YoutubeDataApi {
    private restAdapter = new RestAdapter();
    async getPlayListItems(playListId: string): Promise<string[]> {
        return await (
            await this.restAdapter.getPlayListItems(playListId)
        ).items.map(item => item.snippet.resourceId.videoId);
    }

    async isVideo(id: string): Promise<boolean> {
        return (
            (await (await this.restAdapter.searchVideoForId(id)).items
                .length) !== 0
        );
    }
}
