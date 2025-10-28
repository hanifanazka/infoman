import { Switch as HUISwitch } from '@headlessui/react'
import { useEffect, useState } from 'react'

export interface SwitchProps {
  /** Optional click handler */
  onChange?: (value: boolean) => void;
  /** The default checked value */
  defaultChecked?: boolean;
}

export function Switch({
  onChange,
  defaultChecked = false,
}: SwitchProps) {
  const [enabled, setEnabled] = useState(defaultChecked);

  useEffect(() => {
    if (onChange) onChange(enabled);
  }, [onChange, enabled])

  return (
    <HUISwitch
      checked={enabled}
      onChange={setEnabled}
      className="switch"
    >
      <span
        aria-hidden="true"
        className="switch-b"
      />
      <style jsx global>{`
        .switch {
          //group
          position: relative;
          display: flex;
          align-items: center;
          height: 1.75rem;
          width: 3.5rem;
          cursor: pointer;
          border-radius: 99999px;
          background: #616263;
          border: solid 1px rgba(99 107 116 / 0.2);
          padding: .25rem;
          transition-duration: 100ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          &focus:not([data-focus]) {
            outline: none;
          }
          &[data-checked] {
            background: #3584E4;
            & .switch-b {
              transform: translateX(1.75rem);
            }
          }
          &[data-focus] {
            border-color: #3584E4;
            outline: none;
            box-shadow: 0 0 0 2px rgba(53, 132, 228, .2);
          }
        }
        .switch-b {
          pointer-events: none;
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          transform: translateX(0);
          border-radius: 100%;
          background: white;
          box-shadow: rgba(21, 21, 21, 0.08) 0px 1px 2px 0px;
          outline: none;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      `}</style>
    </HUISwitch>
  )
}
