"use client"
import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import {
  ClipboardDocumentIcon,
  DocumentMagnifyingGlassIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  { name: "Title", value: "tite", icon: DocumentMagnifyingGlassIcon },
  { name: "Price", value: "price", icon: BanknotesIcon },
];

export default function SearchCertificate() {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(solutions[1])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };


  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        className="border border-gray-300 rounded-md px-1 py-2 mr-2"
        placeholder="Search..."
      />
       <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-50 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
              <selected.icon
                        className="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {solutions.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                        <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
      <input
        type="checkbox"
        id="expired"
        name="status"
        value= "expired"
        className="form-checkbox h-5 w-5 text-blue-600 ml-1"
        onChange={setSelected}
      />
      <label htmlFor="expired" className="text-gray-700 font-semibold ml-1">Expired</label>
    </div>
  );
}
