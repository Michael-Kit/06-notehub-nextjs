import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message = 'Something went wrong.' }: ErrorMessageProps) => {
  return <div className={css.error}>{message}</div>;
};

export default ErrorMessage;
