import { describe, expect, it } from "vitest";
import {
    RetrieveAnimeDetailsUsecase
} from "@/anime-detail/application/usecases/retrieve-anime-details/retrieve-anime-details.usecase";
import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";
import {
    InMemoryAnimeDetailsRepository
} from "@/anime-detail/infrastructure/repositories/in-memory-anime-details.repository";

const OnePieceMock: AnimeDetails = {
    id: 21,
    title: "One Piece",
    description: "This is the description",
    statistics: {
        episodes: 1000
    },
    image: {
        url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
    }
};

describe('RetrieveAnimeDetails', () => {
    /**
     * Only for implementing the class (to respect TDD principles)
     */

    // it('should be defined', () => {
    //     expect(RetrieveAnimeDetailsUsecase).toBeDefined();
    // });
    //
    // it('should have an "execute" function', () => {
    //     const retrieveAnimeDetails = new RetrieveAnimeDetailsUsecase();
    //     expect(retrieveAnimeDetails.execute).toBeDefined();
    // });

    it('should retrieve "One Piece" anime details when "One Piece" is provided', async () => {
        const animeDetailsRepository = new InMemoryAnimeDetailsRepository();
        const retrieveAnimeDetails = new RetrieveAnimeDetailsUsecase(animeDetailsRepository);
        const response = await retrieveAnimeDetails.execute(21)
        expect(response).toEqual(OnePieceMock);
    });
});