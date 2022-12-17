import type { AnimeDetailsRepository } from "@/anime-detail/domain/repositories/anime-details.repository";
import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";
import type { HttpClient } from "@/core/interfaces/http-client.interface";

export class HttpAnimeDetailsRepository implements AnimeDetailsRepository {
    constructor(
        private httpClient: HttpClient
    ) {}

    async getAnimeDetailsById(id: number): Promise<AnimeDetails> {
        const animeDetails = this.httpClient.get(`https://api.jikan.moe/v4/anime/${id}`);
        return animeDetails;
    }
}