"use client";
import { CarProps } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}
const  CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10"
            onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p4 text-center">
                    <Transition.Child as={Fragment} 
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-auto
                        transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col p-6 gap-5">
                            <button
                                type="button"
                                onClick={closeModal}

                            > 
                                X

                            </button>

                            <div className="flex-1 flex flex-col gap-3">
                                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                <Image 
                                    src="/next.svg"
                                    alt="car model"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className="font-semibold text-xl capitalize">
                                    {car.make} {car.model}
                                </h2>

                                <div className="mt-3 flex flex-wrap gap-4">
                                    {Object.entries(car).map(([key, value]) => (
                                        <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                            <h4 className="text-gray-400 capitalize">{key.split("_").join(" ")}</h4>
                                            <p>{value}</p>
                                        </div>
                                    ))}
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

export default CarDetails