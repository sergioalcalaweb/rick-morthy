import Image from 'next/image'
import { getCharacters } from '../../utils'
import { CharacterResponse } from '../../types';
import Characters from '../../components/characters';
import Pagination from '@/components/pagination';

export default async function Home({params}: {params:{ page: string }}) {
  const data: CharacterResponse = await getCharacters(params.page);
  return (
    <>
      <Characters characters={data.results} />
      <Pagination info={data.info} active={Number(params.page)} />
    </>
  )
}
