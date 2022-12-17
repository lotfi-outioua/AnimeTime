import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";

export class AnimeDetailsAdapter {
    adapt(data: any): AnimeDetails {
        return {
            id: data.id ?? 0,
            title: data.title ?? 'Need a title',
            description: data.description ?? 'Description',
            statistics: {},
            image: {}
        }
    }
}