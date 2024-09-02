export interface IHouse {
  image?: string;
  title: string;
  width?: string;
}

export interface IHouseTabButtonProp extends IHouse {
  onPress: (house: string) => void;
}
