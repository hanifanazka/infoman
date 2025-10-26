import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

type CustomInputTypeAttribute =
        | "date"
        | "datetime-local"
        | "email"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"

export interface InputProps {
  /** If `true`, the input will take up the full width of its container. */
  fullWidth?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: false;
  /** Optional click handler */
  onClick?: () => void;
  type?: CustomInputTypeAttribute;
}

type InputClassMap = {
  [K in keyof InputProps]?: string;
};

/** Primary UI component for user interaction */
export const Input = ({
  fullWidth = false,
  disabled = false,
  type = "text",
}: InputProps) => {
  const classes: InputClassMap = {};
  if (fullWidth) classes.fullWidth = 'input--fullwidth';
  if (disabled) classes.disabled = 'input--disabled';

  return (
    <>
    <input
      className={['input', ...Object.values(classes)].join(' ')}
      disabled={disabled}
      type={type}
    />
    <style jsx>{`
        .input {
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
        .input--fullwidth {
          width: 100%;
        }
        .input--disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};
