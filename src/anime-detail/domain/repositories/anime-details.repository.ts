import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";

export interface AnimeDetailsRepository {
    getAnimeDetailsById(id: number): Promise<AnimeDetails>;
}