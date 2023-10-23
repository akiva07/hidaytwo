"use client";
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filterManufacturers = 
        query === "" 
        ? manufacturers 
        : manufacturers.filter((item) => (
            item.toLocaleLowerCase().replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        ));

    return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-ful">
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src="/next.svg"
                        width={40}
                        height={40}
                        className="ml-4"
                        alt="car logo"
                    />
                </Combobox.Button>
                <Combobox.Input 
                    className="search-manufacturer__input bg-gray-200"
                    placeholder="isianhayooo"
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}

                />

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {filterManufacturers.length === 0 &&
                        query !== "" ? (
                            <Combobox.Option
                                value={query}
                                className="sear ch-manufacturer__option"
                            >
                                Create &quot;query&quot;

                            </Combobox.Option>
                        ) : (
                            filterManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({active})=>
                                    `relative ${active ? 'bg-stone-200 text-stone-500'
                                    :'text-gray-500'}`}
                                >
                                    {item}
                                </Combobox.Option>

                            ))
                        )}


                    </Combobox.Options>
                
                </Transition>  
            </div>   
        </Combobox>
    </div>
  )
}

export default SearchManufacturer