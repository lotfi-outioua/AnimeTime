import type { AnimeDetailsRepository } from "@/anime-detail/domain/repositories/anime-details.repository";
import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";

export class InMemoryAnimeDetailsRepository implements AnimeDetailsRepository {
    getAnimeDetailsById(id: number): Promise<AnimeDetails> {
        return Promise.resolve(
            {
                id,
                title: "One Piece",
                description: "This is the description",
                statistics: {
                    episodes: 1000
                },
                image: {
                    url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
                }
            }
        );
    }
}