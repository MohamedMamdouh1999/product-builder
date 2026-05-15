import { useState } from "react";
import { products } from "./data/products";
import { formInputs } from "./data/form-inputs";
import Product from "./components/Product";
import Input from "./components/ui/Input";
import Error from "./components/ui/Error";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import type { IProduct } from "./interfaces/product";
import { productValidation } from "./validations/product-validation";

const App = () => {
  // State
  const defaultProduct: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { 
      id: "",
      name: "",
      imageURL: ""
    }
  };
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: ""
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    setProduct(defaultProduct);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: ""
    });
  };

  // Handlers
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };
  const onSubmitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price
    });
    const hasErrors = Object.values(errors).some(error => error !== "");
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    closeModal();
  }

  // Renders
  const productsList = products.map(product => <Product key={product.id} {...product} />);
  const inputsList = formInputs.map(input => 
    <div key={input.id} className="flex flex-col gap-y-1">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} name={input.name} id={input.id} placeholder={input.label} value={product[input.name]} onChange={onChangeHandler} />
      <Error message={errors[input.name as keyof typeof errors]} />
    </div>
  );

  return (
    <main className="container mx-auto p-5 flex flex-col gap-y-5">
      <Button className="bg-indigo-800 hover:bg-indigo-900 mx-auto" width='w-fit' onClick={openModal}>Add new product</Button>
      <Modal isOpen={isOpenModal} close={closeModal} title="Add new product">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-3">
          {inputsList}
          <div className="flex items-center gap-x-2">
            <Button type="submit" className="bg-violet-800 hover:bg-violet-900">Save</Button>
            <Button type="reset" onClick={closeModal} className="bg-red-700 hover:bg-red-800">Cancel</Button>
          </div>
        </form>
      </Modal>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">{productsList}</section>
    </main>
  )
}

export default App
