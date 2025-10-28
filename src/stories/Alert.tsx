import React from "react";
import {
  Menu as HUIMenu,
  MenuButton as HUIMenuButton,
  MenuItem as HUIMenuItem,
  MenuItems as HUIMenuItems,
} from "@headlessui/react";
import { Button } from "./Button";
import { CheckIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { GlobalStyle } from "./GlobalStyle";

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

type AlertClassMap = {
  [K in keyof AlertProps]?: string;
};

export function Alert({
  severity = 'error',
  title,
  children,
  onRemove,
  buttonContent = "Close",
}: AlertProps) {

  let Icon = ExclamationCircleIcon;
  if (severity == "warning") Icon = ExclamationTriangleIcon;
  if (severity == "info") Icon = InformationCircleIcon;
  if (severity == "success") Icon = CheckIcon;

  const classes: AlertClassMap = {};
  
  if (severity == "warning") classes.severity = "alert--warning";
  if (severity == "info") classes.severity = "alert--info";
  if (severity == "success") classes.severity = "alert--success";

  return (
    <div className={["alert", ...Object.values(classes)].join(" ")}>
      <GlobalStyle />
      <div className="icon">
        <Icon />
      </div>
      <div className="text">
        <span className="text-title">{title}</span>
        <div className="text-desc">{children}</div>
      </div>
      <div className="action">
        <Button onClick={onRemove} color="secondary">
          {buttonContent}
        </Button>
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
          &.alert--warning {
        	  background-color: rgba(255, 153, 0, 0.15);
        	  border-color: rgba(181, 81, 13, 0.25);
            & .icon { color: rgb(181, 81, 13); }
          }
          &.alert--info {
        	  background-color: rgba(56, 113, 220, 0.15);
        	  border-color: rgba(31, 98, 224, 0.25);
            & .icon { color: rgb(31, 98, 224); }
          }
          &.alert--success {
        	  background-color: rgba(27, 133, 94, 0.15);
        	  border-color: rgba(10, 118, 78, 0.25);
            & .icon { color: rgb(10, 118, 78); }
          }
        }
        .icon { 
          width: 24px; 
          height: 24px;
          color: rgb(207, 14, 91);
          padding-top: 8px;
          flex-shrink: 0;
        }
        .text {
          padding: 8px 0;
          flex: 1;
        }
        .text-title {
          font-weight: bold;
        }
        .text-desc {
          margin-top: 4px;
          font-size: 14px;
        }
        .action {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
