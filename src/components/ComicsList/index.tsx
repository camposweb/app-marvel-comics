import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CardType, ComicCard } from '../ComicCard'
import { MapComponent } from '../MapComponent'

export function ComicList() {
  const [comics, setComics] = useState<CardType[]>([])

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        const { results } = response.data.data
        console.log(results)
        setComics(results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [MapComponent])

  return (
    <div className="flex container m-auto justify-center">
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        {comics.map((comic) => {
          return <ComicCard key={comic.id} cards={comic} />
        })}
      </div>
    </div>
  )
}
