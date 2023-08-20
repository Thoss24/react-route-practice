import classes from './ErrorContent.module.css'

const ErrorContent = ({title, message}) => {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
};

export default ErrorContent;