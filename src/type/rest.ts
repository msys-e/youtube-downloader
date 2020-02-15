export type PlayListResponse = {
    items: PlayListItem[];
};

export type PlayListItem = {
    snippet: {
        resourceId: {
            videoId: string;
        };
    };
};

export type PlayListRequestParams = {
    part: string;
    playlistId: string;
    maxResults: string;
    key: string;
};
}
