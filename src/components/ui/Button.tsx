interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    className: string;
    width?: 'w-full' | 'w-fit';
    children: React.ReactNode;
}

const Button = ({ type = 'button', className, width = 'w-full', children, ...props }: IProps) => {
    return <button type={type} className={`${className} ${width} text-white rounded-md py-1 px-2 cursor-pointer`} {...props}>{children}</button>
}

export default Button
