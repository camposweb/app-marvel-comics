import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CardProps, CardType, ComicCard } from '../ComicCard'

export function ComicList() {
  const [comics, setComics] = useState<CardProps[]>([])

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        const { results } = response.data.data
        console.log(results)
        setComics(results)
      })
      .catch(function (error) {
        // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
        console.log(error)
      })
  }, [])

  return (
    <div className="flex container m-auto justify-center">
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-1 gap-8">
        {comics.map((comic) => {
          return (
            <div key={comic.card.id}>
              <p>{comic.card.title}</p>
              <img
                src={`${comic.card.thumbnail.path}/portrait_fantastic.${comic.card.thumbnail.extension}`}
                alt={`Foto ${comic.card.title}`}
              />
              <p>{comic.card.prices[0].price}</p>
            </div>
          )
        })}
        {/* <ComicCard
          title="Pantera Negra"
          price={9.9}
          imgUrl="http://i.annihil.us/u/prod/marvel/i/mg/4/a0/63f4e9467719f/portrait_fantastic.jpg"
        /> */}
        {/* {comics.map((comic) => {
          return <ComicCard key={comic.card.id} card={comic.card} />
        })} */}
      </div>
    </div>
  )
}
