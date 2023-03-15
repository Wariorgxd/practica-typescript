export interface Pokemon {
    abilities?:              Ability[];
    baseExperience?:         number;
    forms?:                  Species[];
    gameIndices?:            GameIndex[];
    height?:                 number;
    heldItems?:              any[];
    id?:                     number;
    isDefault?:              boolean;
    locationAreaEncounters?: string;
    moves?:                  Move[];
    name?:                   string;
    order?:                  number;
    pastTypes?:              any[];
    species?:                Species;
    sprites?:                Sprites;
    stats?:                  Stat[];
    types?:                  Type[];
    weight?:                 number;
}

export interface Ability {
    ability?:  Species;
    isHidden?: boolean;
    slot?:     number;
}

export interface Species {
    name?: string;
    url?:  string;
}

export interface GameIndex {
    gameIndex?: number;
    version?:   Species;
}

export interface Move {
    move?:                Species;
    versionGroupDetails?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    levelLearnedAt?:  number;
    moveLearnMethod?: Species;
    versionGroup?:    Species;
}

export interface GenerationV {
    blackWhite?: Sprites;
}

export interface GenerationIv {
    diamondPearl?:        Sprites;
    heartgoldSoulsilver?: Sprites;
    platinum?:            Sprites;
}

export interface Versions {
    generationI?:    GenerationI;
    generationIi?:   GenerationIi;
    generationIii?:  GenerationIii;
    generationIv?:   GenerationIv;
    generationV?:    GenerationV;
    generationVi?:   { [key: string]: Home };
    generationVii?:  GenerationVii;
    generationViii?: GenerationViii;
}

export interface Sprites {
    backDefault?:      string;
    backFemale?:       null;
    backShiny?:        string;
    backShinyFemale?:  null;
    frontDefault?:     string;
    frontFemale?:      null;
    frontShiny?:       string;
    frontShinyFemale?: null;
    other?:            Other;
    versions?:         Versions;
    animated?:         Sprites;
}

export interface GenerationI {
    redBlue?: RedBlue;
    yellow?:  RedBlue;
}

export interface RedBlue {
    backDefault?:      null;
    backGray?:         null;
    backTransparent?:  null;
    frontDefault?:     null;
    frontGray?:        null;
    frontTransparent?: null;
}

export interface GenerationIi {
    crystal?: Crystal;
    gold?:    Gold;
    silver?:  Gold;
}

export interface Crystal {
    backDefault?:           null;
    backShiny?:             null;
    backShinyTransparent?:  null;
    backTransparent?:       null;
    frontDefault?:          null;
    frontShiny?:            null;
    frontShinyTransparent?: null;
    frontTransparent?:      null;
}

export interface Gold {
    backDefault?:      null;
    backShiny?:        null;
    frontDefault?:     null;
    frontShiny?:       null;
    frontTransparent?: null;
}

export interface GenerationIii {
    emerald?:          OfficialArtwork;
    fireredLeafgreen?: Gold;
    rubySapphire?:     Gold;
}

export interface OfficialArtwork {
    frontDefault?: null | string;
    frontShiny?:   null | string;
}

export interface Home {
    frontDefault?:     string;
    frontFemale?:      null;
    frontShiny?:       string;
    frontShinyFemale?: null;
}

export interface GenerationVii {
    icons?:             DreamWorld;
    ultraSunUltraMoon?: Home;
}

export interface DreamWorld {
    frontDefault?: string;
    frontFemale?:  null;
}

export interface GenerationViii {
    icons?: DreamWorld;
}

export interface Other {
    dreamWorld?:      DreamWorld;
    home?:            Home;
    officialArtwork?: OfficialArtwork;
}

export interface Stat {
    baseStat?: number;
    effort?:   number;
    stat?:     Species;
}

export interface Type {
    slot?: number;
    type?: Species;
}
