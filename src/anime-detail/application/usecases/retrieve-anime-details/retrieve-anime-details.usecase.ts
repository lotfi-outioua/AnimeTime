import type { UseCase } from "@/core/interfaces/usecase.interface";
import type { AnimeDetails } from "@/anime-detail/domain/entities/anime-details.entity";
import type { AnimeDetailsRepository } from "@/anime-detail/domain/repositories/anime-details.repository";

export class RetrieveAnimeDetailsUsecase implements UseCase<Promise<AnimeDetails>> {
    constructor(
        private animeDetailsRepository: AnimeDetailsRepository
    ) {}

    public execute(id: number): Promise<AnimeDetails> {
        return this.animeDetailsRepository.getAnimeDetailsById(id);
    }
}