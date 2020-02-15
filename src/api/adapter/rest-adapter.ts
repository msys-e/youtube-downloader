import { CONFIG } from '../../../config/config.json';
import { PlayListResponse, SearchVideoResponse } from '../../type/rest';
import fetcher from './fetcher';

export class RestAdapter {
    getPlayListItems(playListId: string): Promise<PlayListResponse> {
        const params = new URLSearchParams({
            part: 'snippet',
            playlistId: playListId,
            maxResults: '50',
            key: CONFIG.YOUTUBE_DATA_API_TOKEN,
        });
        return fetcher<PlayListResponse>(
            `https://www.googleapis.com/youtube/v3/playlistItems?${params}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }

    searchVideoForId(id: string): Promise<SearchVideoResponse> {
        const params = new URLSearchParams({
            part: 'id',
            id: id,
            key: CONFIG.YOUTUBE_DATA_API_TOKEN,
        });
        return fetcher<SearchVideoResponse>(
            `https://www.googleapis.com/youtube/v3/videos?${params}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }
}
