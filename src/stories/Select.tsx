import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

export interface SelectProps {
  /** If `true`, the select will take up the full width of its container. */
  fullWidth?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: false;
  /** Optional click handler */
  onClick?: () => void;
  children: React.ReactNode;
}

type SelectClassMap = {
  [K in keyof SelectProps]?: string;
};

export const Select = ({
  fullWidth = false,
  disabled = false,
  children,
}: SelectProps) => {
  const classes: SelectClassMap = {};
  if (fullWidth) classes.fullWidth = 'select--fullwidth';
  if (disabled) classes.disabled = 'select--disabled';

  return (
    <>
    <select
      className={['select', ...Object.values(classes)].join(' ')}
      disabled={disabled}
    >
      {children}
    </select>
    <style jsx>{`
        .select {
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
        .select--fullwidth {
          width: 100%;
        }
        .select--disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};
