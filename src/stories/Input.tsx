import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

export interface InputProps {
  /** The size of the component */
  size?: 'sm' | 'md' | 'lg';
  /** If `true`, the input will take up the full width of its container. */
  fullWidth?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: false;
  /** Optional click handler */
  onClick?: () => void;
}

type InputClassMap = {
  [K in keyof InputProps]?: string;
};

/** Primary UI component for user interaction */
export const Input = ({
  size = 'md',
  fullWidth = false,
  disabled = false,
  ...props
}: InputProps) => {
  const classes: InputClassMap = {};
  if (size == 'sm') classes.size = 'input--sm';
  if (size == 'md') classes.size = 'input--md';
  if (size == 'lg') classes.size = 'input--lg';
  if (fullWidth) classes.fullWidth = 'input--fullwidth';
  if (disabled) classes.disabled = 'input--disabled';

  return (
    <>
    <input
      className={['input', ...Object.values(classes)].join(' ')}
      {...props}
    />
    <style jsx>{`
        .input {
          border: 1px solid;
          border-radius: 0;
          font-weight: 600;
          font-family: 'Inter';
        }
        .input--sm {
          padding: .25rem .25rem;
          font-size: 10px;
        }
        .input--md {
          padding: .5rem .5rem;
          font-size: 12px;
        }
        .input--lg {
          padding: .75rem .75rem;
          font-size: 16px;
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
