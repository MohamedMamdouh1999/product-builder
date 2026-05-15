const Input = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input className="rounded-md border border-gray-400 bg-white px-3 py-2 focus:outline-none" {...rest} />
}

export default Input
