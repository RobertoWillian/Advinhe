import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cell } from "../grid/Cell";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>


          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Como jogar:
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Adivinhe a PALAVRA em 6 tentativas. Após cada palpite, a cor dos quadrados mudará para mostrar 
                    quão perto seu palpite estava da palavra.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="C" status="correct" />
                      <Cell value="A" />
                      <Cell value="R" />
                      <Cell value="R" />
                      <Cell value="O" />
                    </div>
                    <p className="text-sm text-gray-500">
                      A letra "C" está na palavra e na posição correta.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="P" />
                      <Cell value="R" status="present" />
                      <Cell value="A" />
                      <Cell value="T" />
                      <Cell value="O" />
                    </div>
                    <p className="text-sm text-gray-500">
                      A letra "R" está na palavra, porém na posição incorreta.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="M" />
                      <Cell value="A" />
                      <Cell value="I" status="absent" />
                      <Cell value="O" />
                      <Cell value="R" />
                    </div>
                    <p className="text-sm text-gray-500">
                      A letra I, não está na palavra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
