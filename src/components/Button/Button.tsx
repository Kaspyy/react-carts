import styles from './Button.module.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  palette?: 'info' | 'danger';
  disabled?: boolean;
  onClick?: () => void | ((cartId: number) => void);
  label: string;
}

const Button = ({
  variant = 'primary',
  palette = 'info',
  label,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles[variant]} ${styles[palette]}`}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
