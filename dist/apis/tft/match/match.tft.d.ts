import { TftRegions } from '../../../constants';
import { BaseApiTft } from '../base/base.api.tft';
import { MatchTFTDTO } from '../../../models-dto/matches/tft-matches/match-tft.dto';
export declare class MatchTFTApi extends BaseApiTft {
    /**
     * Get match by id
     * @param matchId
     * @param region
     */
    get(matchId: string, region: TftRegions): Promise<import("../../../models-dto").ApiResponseDTO<MatchTFTDTO>>;
    /**
     * Get match listing
     * @param summonerPUUID
     * @param region
     */
    list(summonerPUUID: string, region: TftRegions): Promise<import("../../../models-dto").ApiResponseDTO<string[]>>;
    /**
     * Get match listing (with details)
     */
    listWithDetails(summonerPUUID: string, region: TftRegions): Promise<MatchTFTDTO[]>;
}
