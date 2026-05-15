interface IProps {
    message: string;
}

const Error = ({ message }: IProps) => {
    return message ? <p className="text-red-600 text-sm font-semibold">{message}</p> : null;
}

export default Error
