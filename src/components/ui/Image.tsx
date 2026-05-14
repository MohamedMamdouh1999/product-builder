interface IProps {
    className: string;
    src: string;
    alt: string;
}

const Image = ({ className, src, alt }: IProps) => {
    return <img className={className} loading="lazy" src={src} alt={alt} />
}

export default Image
