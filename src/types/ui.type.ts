export interface IInputProps {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: string;
  name: string;
  prefix?: string;
  suffix?: string;
  error?: string;
};

export interface IDateProps {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  name: string;
  prefix?: string;
  suffix?: string;
  error?: string;
};

export type TButton = {
  primary: string;
  ghost: string;
}

export interface IButtonProps {
  onClick?: () => void;
  variant?: keyof TButton;
  state?: 'default' | 'loading' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  text?: string;
  prefix?: string;
  suffix?: string;
};

export interface IIconProps {
  icon: string,
  iconClassName?: string,
};

export interface IModalProps {
  onClose: () => void,
  containerClassName?: string,
  isModalOpen: boolean,
};

export interface ILinkProps {
  to: string;
  linkClassName?: string;
};