import {IReduxCharacterDTO} from './ICharacter';

export enum IRoutes {
  homeScreen = 'homeScreen',
  userDetails = 'userDetails',
}

export type IRoute = {
  [IRoutes.homeScreen]: {
    id: string;
  };
  [IRoutes.userDetails]: {
    user: IReduxCharacterDTO;
  };
};
