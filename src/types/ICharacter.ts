interface IWand {
  wood: string;
  core: string;
  length: number; // Assuming length is in inches
}

export interface ICharacterDTO {
  id: string;
  name: string;
  image: string;
}

export interface IReduxCharacterDTO extends ICharacterDTO {
  attempts: number;
  access: boolean;
}

export interface ICharacter extends ICharacterDTO {
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string; // Format: "dd-mm-yyyy"
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: IWand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
}
