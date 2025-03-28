import type {
  IngredientData,
  RarityType,
  ResourceData,
  SurvivorData,
  SurvivorUniqueLeadData,
  TrapData,
  DailyQuestData,
  TeamPerkData,
  GadgetData,
  HeroData, ZoneThemeData
} from '$types/game/stw/resources';

import resourcesJson from '$lib/data/resources.json';
import survivorsJson from '$lib/data/survivors.json';
import survivorsMythicLeadsJson from '$lib/data/survivorsMythicLeads.json';
import ingredientsJson from '$lib/data/ingredients.json';
import trapsJson from '$lib/data/traps.json';
import dailyQuestsJson from '$lib/data/dailyQuests.json';
import teamPerksJson from '$lib/data/teamPerks.json';
import gadgetsJson from '$lib/data/gadgets.json';
import heroesJson from '$lib/data/heroes.json';
import zoneThemesJson from '$lib/data/zoneThemes.json';

export const RarityTypes = Object.freeze({
  Common: 'c',
  Uncommon: 'uc',
  Rare: 'r',
  Epic: 'vr',
  Legendary: 'sr',
  Mythic: 'ur'
} as const);

export const RarityNames: Record<RarityType, string> = {
  [RarityTypes.Common]: 'Common',
  [RarityTypes.Uncommon]: 'Uncommon',
  [RarityTypes.Rare]: 'Rare',
  [RarityTypes.Epic]: 'Epic',
  [RarityTypes.Legendary]: 'Legendary',
  [RarityTypes.Mythic]: 'Mythic'
};

export const RarityColors: Record<RarityType, string> = {
  [RarityTypes.Common]: '#8B9399',
  [RarityTypes.Uncommon]: '#6ABB1E',
  [RarityTypes.Rare]: '#3D9BF7',
  [RarityTypes.Epic]: '#6C3F9E',
  [RarityTypes.Legendary]: '#DA791D',
  [RarityTypes.Mythic]: '#D1AE49'
};

export const FounderEditions = Object.freeze({
  Standard: 'Quest:foundersquest_getrewards_0_1',
  Deluxe: 'Quest:foundersquest_getrewards_1_2',
  SuperDeluxe: 'Quest:foundersquest_getrewards_2_3',
  Limited: 'Quest:foundersquest_getrewards_3_4',
  Ultimate: 'Quest:foundersquest_getrewards_4_5'
} as const);

export const FounderEditionNames = Object.freeze({
  [FounderEditions.Standard]: 'Standard',
  [FounderEditions.Deluxe]: 'Deluxe',
  [FounderEditions.SuperDeluxe]: 'Super Deluxe',
  [FounderEditions.Limited]: 'Limited',
  [FounderEditions.Ultimate]: 'Ultimate'
} as const);

export const resources = resourcesJson as Record<string, ResourceData>;
export const survivors = survivorsJson as Record<string, SurvivorData>;
export const survivorsMythicLeads = survivorsMythicLeadsJson as Record<string, SurvivorUniqueLeadData>;
export const ingredients = ingredientsJson as Record<string, IngredientData>;
export const traps = trapsJson as Record<string, TrapData>;
export const dailyQuests = dailyQuestsJson as Record<string, DailyQuestData>;
export const teamPerks = teamPerksJson as Record<string, TeamPerkData>;
export const gadgets = gadgetsJson as Record<string, GadgetData>;
export const heroes = heroesJson as Record<string, HeroData>;
export const zoneThemes = zoneThemesJson as Record<string, ZoneThemeData>;