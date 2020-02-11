export interface PlayListResponse {
    items: ListItem[];
}

export interface ListItem {
    snippet: {
        resourceId: {
            videoId: string;
        };
    };
}

export interface PlayListRequestParams {
    part: string;
    playlistId: string;
    maxResults: string;
    key: string;
}
