import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

export interface ButtonProps {
  /** The global variant to use */
  variant?: 'solid' | 'outline' | 'soft' | 'plain';
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
  if (variant == 'outline') classes.variant = 'button--outline';
  if (variant == 'plain') classes.variant = 'button--plain';
  if (variant == 'soft') classes.variant = 'button--soft';
  if (color == 'primary') classes.color = 'button--primary';
  if (color == 'danger') classes.color = 'button--danger';
  if (size == 'sm') classes.size = 'button--sm';
  if (size == 'md') classes.size = 'button--md';
  if (size == 'lg') classes.size = 'button--lg';
  if (fullWidth) classes.fullWidth = 'button--fullwidth';
  if (disabled) classes.disabled = 'button--disabled';
  if (loading) classes.loading = 'button--disabled button--loading';

  return (
    <button
      type="button"
      className={['button', ...Object.values(classes)].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
      <style jsx>{`
        .button {
          border: none;
          border-radius: 0;
          font-weight: 600;
          font-family: 'Inter';
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
        .button--sm {
          padding: .25rem .5rem;
          font-size: 10px;
        }
        .button--md {
          padding: .5rem 1rem;
          font-size: 12px;
        }
        .button--lg {
          padding: .75rem 1rem;
          font-size: 16px;
        }
        .button--fullwidth {
          width: 100%;
        }
        .button--disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
        .button--loading {
          /* TODO */
        }
      `}</style>
    </button>
  );
};
