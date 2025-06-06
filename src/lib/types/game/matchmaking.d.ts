export type MatchmakingTrack = {
  id: string
  ownerId: string
  ownerName: string
  serverName: string
  serverAddress: string
  serverPort: number
  maxPublicPlayers: number
  openPublicPlayers: number
  maxPrivatePlayers: number
  openPrivatePlayers: number
  attributes: {
    THEATERID_s: string
    ZONEINSTANCEID_s: string
    maxPrivatePlayers_s: string
    CHECKSANCTIONS_s: 'false' | 'true'
    STORMSHIELDDEFENSETYPE_i: number
    DEPLOYMENT_s: 'Fortnite'
    allowJoinViaPresenceFriendsOnly_s: 'false' | 'true'
    DCID_s: string
    SERVERADDRESS_s: string
    NETWORKMODULE_b: boolean
    HOTFIXVERSION_i: number
    serverPort_s: string
    MINDIFFICULTY_i: number
    SUBREGION_s: string
    MATCHMAKINGPOOL_s: 'Any'
    PARTITION_i: number
    usesStats_s: 'false' | 'true'
    serverAddress_s: string
    PLAYLISTID_i: number
    serverName_s: string
    GAMEMODE_s: string
    MMLVL_i: number
    historicalPlayers_s: string
    buildUniqueId_s: string
    GATHERABLE_b: boolean
    sortWeight_s: string
    ALLOWMIGRATION_s: 'false' | 'true'
    REJOINAFTERKICK_s: string
    NEEDSSORT_i: number
    allowJoinInProgress_s: 'false' | 'true'
    privatePlayers_s: string
    BEACONPORT_i: number
    usesPresence_s: 'false' | 'true'
    BUCKET_s: string
    MAXDIFFICULTY_i: number
    maxPublicPlayers_s: string
    invites_s: string
    LASTUPDATED_s?: string
    ALLOWREADBYID_s: 'false' | 'true'
    isDedicated_s: 'false' | 'true'
    ownerName_s: string
    REGION_s: string
    CRITICALMISSION_b: boolean
    ADDRESS_s: string
    NEEDS_i: number
    MAXDIFFICULTYSORT_i: number
    openPrivatePlayers_s: string
    DISALLOWQUICKPLAY_b: boolean
    lastUpdated_s?: string
  }
  publicPlayers: Array<string>
  privatePlayers: Array<string>
  totalPlayers: number
  allowJoinInProgress: boolean
  shouldAdvertise: boolean
  isDedicated: boolean
  usesStats: boolean
  allowInvites: boolean
  usesPresence: boolean
  allowJoinViaPresence: boolean
  allowJoinViaPresenceFriendsOnly: boolean
  buildUniqueId: string
  lastUpdated?: string
  started?: boolean
}

export type MatchmakingTrackResponse = Array<MatchmakingTrack>