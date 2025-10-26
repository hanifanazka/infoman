import React from "react";
import {
  Menu as HUIMenu,
  MenuButton as HUIMenuButton,
  MenuItem as HUIMenuItem,
  MenuItems as HUIMenuItems,
} from "@headlessui/react";
import { Button } from "./Button";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';
type AnchorProps = `${Placement}` | `${Placement} ${Align}`;

export interface AlertProps {
  severity?: "info" | "success" | "error" | "warning";
  title: string;
  /** Child content that includes some alert details, like maybe what actually happened. */
  children: React.ReactNode;
  onRemove?: () => void;
  buttonContent?: string;
}

export function Alert({
  severity = 'error',
  title,
  children,
  onRemove,
  buttonContent = "Close",
}: AlertProps) {

  let Icon = ExclamationCircleIcon;
  if (severity == "error") Icon = ExclamationCircleIcon; // delete later

  return (
    <div className="alert">
      <div className="icon">
        <Icon/>
      </div>
      <div className="text">
        <span className="text-title">{title}</span>
        <div className="text-desc">{children}</div>
      </div>
      <div className="action">
        <Button label={buttonContent} variant="plain" onClick={onRemove} />
      </div>
      <style jsx>{`
        .alert {
        	padding: 8px 16px;
        	display: flex;
        	border-style: solid;
        	border-width: 1px;
        	align-items: stretch;
        	border-radius: 6px;
          gap: 16px;

        	background-color: rgba(224, 34, 110, 0.15);
        	border-color: rgba(207, 14, 91, 0.25);
        }
        .icon { 
          width: 24px; 
          height: 24px;
          color: rgb(207, 14, 91);
          padding-top: 8px;
        }
        .text {
          padding: 8px 0;
        }
        .text-title {
          font-weight: bold;
        }
        .action {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
