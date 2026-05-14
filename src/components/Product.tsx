import type { IProduct } from "../interfaces/product"
import { textSlicer } from "../utils/text-slicer";
import Button from "./ui/Button"
import Image from "./ui/Image"

const Product = ({ imageURL, title, description, colors, price, category }: IProduct) => {
    const colorsList = colors.map(color => <span key={color} style={{ backgroundColor: color }} className="w-5 h-5 cursor-pointer rounded-full" />);

    return (
        <div className="max-w-sm md:max-w-none mx-auto flex flex-col gap-y-3 p-3 border border-gray-400 rounded-md">
            <Image className="rounded-md h-48 object-cover object-center" src={imageURL} alt={title} />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{textSlicer(description)}</p>
            <div className="flex flex-wrap items-center gap-1">{colorsList}</div>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-semibold text-indigo-900">${price}</span>
                <div className="flex items-center gap-x-2">
                    <Image className="rounded-full w-8 h-8 object-cover object-center" src={category.imageURL} alt={category.name} />
                    <span className="text-sm">{category.name}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <Button className="bg-violet-800">Edit</Button>
                <Button className="bg-red-700">Delete</Button>
            </div>
        </div>
    )
}

export default Product
