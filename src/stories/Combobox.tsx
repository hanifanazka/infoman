import {
  Combobox as MUICombobox,
  ComboboxButton as MUIComboboxButton,
  ComboboxInput as MUIComboboxInput,
  ComboboxOption as MUIComboboxOption,
  ComboboxOptions as MUIComboboxOptions
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle'

interface ComboboxProps<T> {
  data: T[];
  accessor?: (item: T) => string;
}

export function Combobox<T>({
  data,
  accessor,
}: ComboboxProps<T>) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<typeof data | null>();

  const getString = (item: typeof data[number]) =>
    accessor ? accessor(item) : (item as string);

  const filteredData =
    query === ''
      ? data
      : data.filter((data) => {
        return getString(data).toLowerCase().includes(query.toLowerCase());
      })

  return (
    <MUICombobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
      <GlobalStyle />
      <div className="relative">
        <MUIComboboxInput
          className={clsx('combobox__input',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
          displayValue={getString}
          onChange={(event) => setQuery(event.target.value)}
        />
        <MUIComboboxButton className="combobox__button group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="button__icon size-4 fill-white/60 group-data-hover:fill-white" />
        </MUIComboboxButton>
      </div>

      <MUIComboboxOptions
        anchor="bottom"
        transition
        className={clsx('combobox__options',
          'w-(--input-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] empty:invisible',
          'transition duration-100 ease-in data-leave:data-closed:opacity-0'
        )}
      >
        {filteredData.map((data, i) => (
          <MUIComboboxOption
            key={i}
            value={data}
            className="combobox__option group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
          >
            <CheckIcon className="checkicon size-4 fill-white group-data-selected:visible" />
            <div className="text-sm/6 text-white">{getString(data)}</div>
          </MUIComboboxOption>
        ))}
      </MUIComboboxOptions>
      <style jsx global>{`
        .relative { 
          position: relative;
          width: min-content;
        }
        .combobox__input {
          box-shadow: rgba(21, 21, 21, 0.08) 0px 1px 2px 0px;
          border: solid 1px rgba(99 107 116 / 0.2);
          background: #FBFCFE;
          border-radius: 6px;
          padding: 0 8px;
          min-height: 2rem;
          box-sizing: border-box;

          &:focus-visible {
            border-color: #3584E4;
            outline: none;
            box-shadow: 0 0 0 2px rgba(53, 132, 228, .2);
          }
        }
        .button__icon {
          width: 20px;
          height: 20px;
        }
        .checkicon {
          opacity: 0;
          width: 24px;
          height: 24px;
        }
        .combobox__button {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          padding: 0 .2rem;
          background: transparent;
          border: none;
        }
        .combobox__option {
          display: flex;
          &[data-selected] {
            background: pink;
            & .checkicon {
              opacity: 1;
            }
          }
        }
        .combobox__options {
          width: var(--input-width);
          border: solid 1px rgba(99 107 116 / 0.2);
          box-shadow: rgba(21, 21, 21, 0.08) 0px 1px 2px 0px;
          border-radius: 6px;
        }
      `}</style>
    </MUICombobox>
  )
}
