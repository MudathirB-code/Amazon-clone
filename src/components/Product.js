import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import { useState } from "react"
import NumberFormat from 'react-number-format';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1) + MIN_RATING)
    );
    const [hasPrime] = useState(Math.random() < 0.5)

    const dispatch = useDispatch();

    const addItemsToBasket = () =>{
        const products = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image,
            hasPrime
        }
        dispatch(addToBasket(products))
    }

    return (
        <div className="relative flex flex-col bg-white m-5 p-10 z-30">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image}  
                width={150}
                height={150}
                objectFit='contain' 
            />
            <p className="my-3 text-sm font-semibold">{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_,i) =>(
                    <StarIcon className="h-5 text-yellow-500"  />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div>
                <NumberFormat  
                    value={price}
                    prefix={'$'}
                />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-14" src="https://links.papareact.com/fdw" alt="hasPrime" />
                    <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
                </div>
            )}
            <button onClick={addItemsToBasket} className="mt-auto button">Add to the Cart</button>
        </div>
    )
}

export default Product
