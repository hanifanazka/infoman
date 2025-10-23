import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import Ring from  './assets/ring-resize.svg';
import Image from "next/image";

export interface ButtonProps {
  /** The global variant to use */
  variant?: 'solid' /*| 'outline' | 'soft' */| 'plain';
  /** The color of the component */
  color?: 'primary' | 'danger';
  /** The size of the component */
  size?: 'sm' | 'md' | 'lg';
  /** If `true`, the button will take up the full width of its container. */
  fullWidth?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: false;
  /** If `true`, the loading indicator is shown and the button becomes disabled. */
  loading?: false;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

type ButtonClassMap = {
  [K in keyof ButtonProps]?: string;
};

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  label,
  ...props
}: ButtonProps) => {
  const classes: ButtonClassMap = {};
  if (variant == 'solid') classes.variant = 'button--solid';
  // if (variant == 'outline') classes.variant = 'button--outline';
  if (variant == 'plain') classes.variant = 'button--plain';
  // if (variant == 'soft') classes.variant = 'button--soft';
  if (color == 'primary') classes.color = 'button--primary';
  if (color == 'danger') classes.color = 'button--danger';
  if (size == 'sm') classes.size = 'button--sm';
  if (size == 'md') classes.size = 'button--md';
  if (size == 'lg') classes.size = 'button--lg';
  if (fullWidth) classes.fullWidth = 'button--fullwidth';
  if (disabled) classes.disabled = 'button--disabled';
  if (loading) classes.loading = 'button--disabled button--loading';

  let ringSize = 16;
  if (size == 'sm') ringSize = 12;
  if (size == 'md') ringSize = 16;
  if (size == 'lg') ringSize = 20;

  return (
    <button
      type="button"
      className={['button', ...Object.values(classes)].join(' ')}
      disabled={disabled}
      {...props}
    >
      <div className='button__label'>
        <div className='button__label__text'>{label}</div>
        {loading && 
          <div className='button__label__ring'>
            <Image src={Ring} alt='loading-ring' width={ringSize} height={ringSize} />
          </div>
        }
      </div>
      <style jsx>{`
        .button {
          border: none;
          border-radius: 0;
          font-weight: 600;
          font-family: 'Inter';
        }
        .button__label {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button--solid {
          background-color: var(--button-bg);
          color: var(--button-fg);
        }
        .button--solid:hover {
          background-color: hsl(from var(--button-bg) h s calc(l - 10) / alpha);
        }
        .button--outline {
          background-color: transparent;
          color: var(--button-bg);
          box-shadow: inset 0 0 0 1px var(--button-bg);
        }
        .button--outline:hover {
          background-color: hsl(from var(--button-bg) h s l / .1);
          box-shadow: inset 0 0 0 1px hsl(from var(--button-bg) h s calc(l - 15) / alpha);
        }
        .button--soft {
          background-color: hsl(from var(--button-bg) h 30 85 / alpha);
          color: var(--button-bg);
        }
        .button--soft:hover {
          background-color: hsl(from var(--button-bg) h 30 65 / alpha);
        }
        .button--plain {
          background-color: transparent;
          color: var(--button-bg);
        }
        .button--plain:hover {
          background-color: hsl(from var(--button-bg) h 30 65 / alpha);
        }
        .button--primary {
          --button-bg: #004C54;
          --button-fg: white;
        }
        .button--danger {
          --button-bg: #c82333;
          --button-fg: white;
        }
        .button--sm .button__label {
          font-size: 10px;
          gap: 4px;
        }
        .button--sm .button__label .button__label__text {
          font-size: 10px;
        }
        .button--sm {
          padding: .25rem .5rem;
        }
        .button--md .button__label {
          gap: 6px;
        }
        .button--md .button__label .button__label__text {
          font-size: 12px;
        }
        .button--md {
          padding: .5rem 1rem;
        }
        .button--lg .button__label {
          gap: 8px;
        }
        .button--lg .button__label .button__label__text {
          font-size: 16px;
        }
        .button--lg {
          padding: .75rem 1rem;
        }
        .button--fullwidth {
          width: 100%;
        }
        .button--disabled {
          cursor: not-allowed;
          pointer-events: none;
          & .button__label {
            position: relative;
          }
          & .button__label__text {
            opacity: 0;
          }
          & .button__label__ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
          }
          &.button--solid {
            background-color: hsl(from var(--button-bg) h calc(s - 40) l / .5);
          }
          &.button--plain {
            color: hsl(from var(--button-bg) h calc(s - 40) l / .5);
            background-color: hsl(from var(--button-bg) h 10 90 / .5);
          }
        }
        .button--loading {
          /* TODO */
        }
      `}</style>
    </button>
  );
};
