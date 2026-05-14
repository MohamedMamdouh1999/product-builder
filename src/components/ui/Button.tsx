interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    width?: 'w-full' | 'w-fit';
    children: React.ReactNode;
}

const Button = ({ className, width = 'w-full', children, ...props }: IProps) => {
    return <button className={`${className} ${width} text-white rounded-md p-1 cursor-pointer`} {...props}>{children}</button>
}

export default Button
