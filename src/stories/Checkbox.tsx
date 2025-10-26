import React, { ChangeEventHandler } from "react";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({
  indeterminate,
  checked,
  disabled,
  onChange,
}: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      {...{
        checked,
        disabled,
        onChange,
      }}
    />
  )
}