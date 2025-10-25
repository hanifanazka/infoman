import React from "react";
import {
  Menu as HUIMenu,
  MenuButton as HUIMenuButton,
  MenuItem as HUIMenuItem,
  MenuItems as HUIMenuItems,
} from "@headlessui/react";
import { Button } from "./Button";

type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';
type AnchorProps = `${Placement}` | `${Placement} ${Align}`;

export interface MenuProps {
  /** Button contents */
  label: string;
  /** Configures the way the dropdown is anchored to the button */
  anchor?: AnchorProps;
  /** List of actions text and their onClick handler */
  actions: {
    /** Action button contents */
    label: string;
    /** onClick handler */
    onClick?: () => void;
  }[];
}

export function Menu({ label, actions, anchor }: MenuProps) {
  return (
    <HUIMenu>
      <HUIMenuButton as={React.Fragment}>
        <Button label={label} />
      </HUIMenuButton>
      <HUIMenuItems
        transition
        anchor={anchor}
        className="menu-items"
      >
        {actions.map((act, i) => (
          <MenuItem
            key={i}
            label={act.label}
            onClick={act.onClick}
          />
        ))}
      </HUIMenuItems><style jsx global>{`
          .menu-items {
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

            /* TODO: wrong position flash at first click */
            &[data-anchor="top center"]   { transform-origin: bottom center; }
            &[data-anchor="top start"]    { transform-origin: bottom right; }
            &[data-anchor="top end"]      { transform-origin: bottom left; }
            &[data-anchor="right center"] { transform-origin: left center; }
            &[data-anchor="right start"]  { transform-origin: left top; }
            &[data-anchor="right end"]    { transform-origin: left bottom; }
            &[data-anchor="bottom"]       { transform-origin: top center; }
            &[data-anchor="bottom start"] { transform-origin: top left; }
            &[data-anchor="bottom end"]   { transform-origin: top right; }
            &[data-anchor="left center"]  { transform-origin: right center; }
            &[data-anchor="left start"]   { transform-origin: right top; }
            &[data-anchor="left end"]     { transform-origin: right bottom; }
      `}</style>
      <style jsx global>{`
          .menu-items {
            padding: .5rem;
            border-radius: .5rem;

            border: solid 1px rgba(99 107 116 / 0.2);

            background-color: white;
            box-shadow: rgba(21, 21, 21, 0.08) 0px 2px 8px -2px, rgba(21, 21, 21, 0.08) 0px 6px 12px -2px;
            box-sizing: border-box;
            color: rgb(50, 56, 62);
            color-scheme: light;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            outline: none;
            width: 160px;
            
            &[data-closed] {
              scale: 95%;
              opacity: 0;
            }
            &[data-focus] { background: rgba(99 107 116 / 0.2); }
          }
      `}</style>
    </HUIMenu>
  )
}

// export function MenuButton({ children, ...rest }: Types) {
//   return (
//     <HUIMenuButton {...rest}>
//       {children}
//     </HUIMenuButton>
//   );
// }

// export function MenuItems({ children, className, ...rest }: Types) {
//   return (
//     <HUIMenuItems
//       transition
//       anchor="bottom end"
//       {...rest}>{children}
//     </HUIMenuItems>
//   );
// }

export interface MenuItemProps {
  /** Action button contents */
  label: string;
  /** onClick handler */
  onClick?: () => void;
};

export function MenuItem({ onClick, label }: MenuItemProps) {
  return (
    <HUIMenuItem>
      <button
        onClick={onClick}
        className="menu-items__item"
      >
        {label}
        <style jsx>{`
          .menu-items__item {
            padding: .25rem .5rem;
            display: flex;
            width: 100%;
            border: none;
            background: transparent;
            border-radius: .4rem;

            &[data-focus] { background: #0003; }
            &:focus:not([data-focus]) { outline: none; }
          }
        `}</style>
      </button>
    </HUIMenuItem>
  );
}