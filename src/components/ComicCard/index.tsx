import { Transition, Dialog } from '@headlessui/react'
import { Fragment, Suspense, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Form } from '../Form'
import { MapComponent } from '../MapComponent'
export interface CardType {
  id: number
  title: string
  pageCount: number
  dates: [
    {
      date: string
    },
  ]
  thumbnail: {
    path: string
    extension: string
  }
  prices: [
    {
      // type: 'printPrice'
      price: number
    },
  ]
}
export interface CardProps {
  cards: CardType
}

export function ComicCard({ cards }: CardProps) {
  const cardImgUrl = `${cards.thumbnail.path}/portrait_fantastic.${cards.thumbnail.extension}`
  const cardImgModal = `${cards.thumbnail.path}/portrait_uncanny.${cards.thumbnail.extension}`

  const dateformat = parseISO(cards.dates[0].date)
  const datePublisehAt = format(dateformat, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  })

  const optionFormatPrice = { style: 'currency', currency: 'USD' }
  const formatPrice = new Intl.NumberFormat('en-US', optionFormatPrice)
  const price = formatPrice.format(cards.prices[0].price)

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-64 flex flex-col items-center justify-center p-4 gap-y-4 rounded-lg shadow-sm shadow-gray-800">
        <div>
          <h1 className="font-roboto font-bold text-xl text-black text-center">
            {cards.title}
          </h1>
        </div>
        <div>
          <img className="w-[168px]" src={cardImgUrl} alt={cards.title} />
        </div>
        <div>
          <p className="font-roboto font-normal text-xl">{price}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={openModal}
            className="border-2 border-black rounded-md p-2 hover:text-white hover:bg-black font-roboto font-bold"
          >
            Mais informações
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 w-96" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between max-sm:flex-col gap-x-8">
                    <div className="max-sm:m-auto max-sm:justify-center">
                        <img
                          src={cardImgModal}
                          alt=""
                          className="max-sm:w-[168px]"
                        />
                    </div>

                    <div className="flex-1">
                      <Dialog.Title
                        as="h1"
                        className="font-roboto text-2xl font-bold leading-6 text-gray-900"
                      >
                        {cards.title}
                      </Dialog.Title>
                      <div className="flex flex-col mt-4 gap-2">
                        <div className="">
                          <h3 className="font-roboto text-lg font-bold text-black">
                            Publicado:
                          </h3>
                          <p className="font-roboto text-base font-normal text-black">
                            {datePublisehAt}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-roboto text-lg font-bold text-black">
                            Páginas:
                          </h3>
                          <p className="font-roboto text-base font-normal text-black">
                            {cards.pageCount}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-roboto text-lg font-bold text-black">
                            Preço:
                          </h3>
                          <p className="font-roboto text-base font-normal text-black">
                            {price}
                          </p>
                        </div>
                      </div>
                      <MapComponent modal={isOpen} />
                    </div>
                    <div className="max-sm:hidden">
                      <button type="button" className="" onClick={closeModal}>
                        <X size={34} />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
