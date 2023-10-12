import Image from "next/image";
import { Character } from "../types";

const CharacterCard = ({character} : {character: Character}) => {
  return (
    <figure>
      <Image 
        className="rounded-lg" 
        src={character.image}
        alt="image description"
        width={200}
        height={200}
      />
      <figcaption className="text-center">
          <p>{character.name}</p>
      </figcaption>
    </figure>
  );
}
 
export default CharacterCard;