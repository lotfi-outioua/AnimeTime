export interface AnimeDetailsStatistics {
    rank?: number | null;
    popularity?: number | null;
    rating?: number | null;
    episodes?: number | null;
}

export interface AnimeDetailsImage {
    url?: string | null;
    smallUrl?: string | null;
    largeUrl?: string | null;
}

export interface AnimeDetails {
    id: number;
    title: string;
    description: string;
    statistics: AnimeDetailsStatistics;
    image: AnimeDetailsImage;
}