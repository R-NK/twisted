import { MatchApi } from './match/match';
import { LeagueApi } from './league/league';
import { SummonerApi } from './summoner/summoner';
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode';
import { ChampionApi } from './champion/champion';
import { SpectatorApi } from './spectator/spectator';
import { StatusApi } from './status/status';
import { DataDragonService } from './dataDragon/DataDragonService';
import { SeedApi } from './seed/seed';
import { BaseApiLol } from './base/base.api.lol';
/**
 * Classic league of legends api
 */
export declare class LolApi extends BaseApiLol {
    /**
     * Match methods
     */
    readonly Match: MatchApi;
    /**
     * League methods
     */
    readonly League: LeagueApi;
    /**
     * Summoner methods
     */
    readonly Summoner: SummonerApi;
    /**
     * Third Party methods
     */
    readonly ThirdPartyCode: ThirdPartyCode;
    /**
     * Champion mastery
     */
    readonly Champion: ChampionApi;
    /**
     * Spectator methods
     */
    readonly Spectator: SpectatorApi;
    /**
     * Status methods
     */
    readonly Status: StatusApi;
    /**
     * Data dragon
     */
    readonly DataDragon: DataDragonService;
    /**
     * Seed methods
     */
    readonly Seed: SeedApi;
}
