export interface Character {
  age: string;
  gender: string;
  homePlanet: string;
  id: number;
  images: {
    main: string;
  };
  name: {
    first: string;
    last: string;
    middle: string;
  };
  occupation: string;
  sayings: Array<string>;
  species: string;
}
