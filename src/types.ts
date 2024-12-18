export type Trip = {
  destination: string;
  departureDate: string;
  returnDate: string;
};
export type House = {
  address: string;
  rooms: number;
  price: number;
};
export type Game = {
  title: string;
  platform: string;
  genre: string;
};
export type Album = {
  title: string;
  artist: string;
  numberOfTracks: number;
};
export type Restaurant = {
  name: string;
  address: string;
  menu: string[];
};
export type MovieChar = {
  name: string;
  actor: string;
  movie: string;
};
export type Teacher = {
  name: string;
  subject: string;
  classroom: string;
};
export type Library = {
  name: string;
  location: string;
  numberOfBooks: number;
};
export type Conference = {
  name: string;
  date: string;
  participants: string[];
};
export type Weather = {
  date: string;
  temperature: number;
  precipitation: string;
};
