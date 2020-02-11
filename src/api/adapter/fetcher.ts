import fetch from 'isomorphic-fetch';

const wrap = async <T>(task: Promise<Response>): Promise<T> => {
    const response = await task;
    if (!response.ok) {
        throw new Error();
    }

    return await response.json();
};

const fetcher = async <T>(
    input: RequestInfo,
    init?: RequestInit,
): Promise<T> => {
    return await wrap<T>(fetch(input, init));
};

export default fetcher;
