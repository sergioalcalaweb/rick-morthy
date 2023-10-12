import { URL_CHARACTERS } from "./constants"

export const getCharacters = async (page: string) => {
  const response = await fetch(`${URL_CHARACTERS}/?page=${page}`);
  const info = await response.json();
  return info;
}