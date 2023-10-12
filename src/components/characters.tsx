import { Character } from '../types/index';
import CharacterCard from './character-card';

const Characters = ({characters} : {characters: Character[]}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {characters.map( character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
 
export default Characters;