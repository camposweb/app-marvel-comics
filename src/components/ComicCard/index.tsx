import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'

/* interface PricesProps {
  type: 'printPrice'
  price: number
} */

export interface CardType {
  id: number
  title: string
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
  card: CardType
}

export function ComicCard({ card }: CardProps) {
  const cardImgUrl = `${card.thumbnail.extension}/portrait_fantastic.${card.thumbnail.path}`
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-64 flex flex-col items-center justify-center py-4 gap-y-4 rounded-lg shadow-sm shadow-gray-800">
        <div>
          <h1 className="font-roboto font-bold text-xl text-black">
            {card.title}
          </h1>
        </div>
        <div>
          <img src={cardImgUrl} alt="" className="w-[168px]" />
        </div>
        <div>
          <p className="font-roboto font-normal text-xl">
            {card.prices[0].price}
          </p>
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
