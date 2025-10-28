import {
  DialogBackdrop as HUIDialogBackdrop,
  Description as HUIDescription,
  Dialog as HUIDialog,
  DialogPanel as HUIDialogPanel,
  DialogTitle as HUIDialogTitle,
} from '@headlessui/react'
import React, { useState } from 'react'
import { Button } from './Button'

export interface DialogProps {
  title: string,
  desc?: string,
  children: ({
    close
  }: {
    close: () => void
  }) => React.ReactNode,
}

export function Dialog({
  title,
  desc,
  children,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <HUIDialog transition open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <HUIDialogBackdrop transition className="dialog-backdrop" />
        <div className="dialog">
          <HUIDialogPanel transition className="dialog-panel">
            <div className="close-button">
              <Button onClick={close} variant="plain" color='secondary' >✕</Button>
            </div>
            <HUIDialogTitle className="font-bold">{title}</HUIDialogTitle>
            <HUIDescription>{desc}</HUIDescription>
            {children({ close })}
          </HUIDialogPanel>
        </div>
        <style jsx>{`
          .dialog {
            position: fixed;
            inset: 0;
            display: flex;
            width: 1wh;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .dialog :global(.dialog-panel) {
            max-width: 960px;
            margin: 1rem 0;
            background: white;
            padding: 2rem;
            border-radius: 12px;
          }
          .dialog :global(h2) {
            margin-top: 0;
          }
        `}</style>
        <style jsx global>{`
          .dialog-backdrop {
            position: fixed;
            inset: 0;
            background: rgb(0 0 0 / .2);
            
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          .dialog-panel {
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          .dialog-panel[data-closed] {
            scale: 95%;
            opacity: 0;
          }
          .dialog-backdrop[data-closed] {
            background: rgb(0 0 0 / 0);
          }
          .close-button {
            float: right;
          }
        `}</style>
      </HUIDialog>
    </>
  )
}
