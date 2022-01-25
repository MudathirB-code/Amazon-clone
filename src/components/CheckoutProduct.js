import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import NumberFormat from "react-number-format";
import { useState } from "react/cjs/react.development";
import { useDispatch} from 'react-redux'
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useSession } from "next-auth/react";

function CheckoutProduct({id, title, price, description, category, image , hasPrime}) {
    
    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const { data : session } = useSession();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1) + MIN_RATING));



    const dispatch = useDispatch();

    const AddItemsToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image , 
            hasPrime}
        dispatch(addToBasket(product))
    }
    
    const removeItemsToBasket = () => {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5 my-4">
            <Image 
                src={image} 
                height={200}
                width={200}
                objectFit="contain"
            />
            <div className="col-span-3 mx-5">
                <p className="text-xs mt-2">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-400" />
                    ))}
                </div>
                <p className="text-xs line-clamp-3">{description}</p>
                <NumberFormat  
                        value={price}
                        prefix={'$'}
                    />
                {hasPrime && (
                    <div className="flex items-center space-x-2 -mt-4">
                        <img className="w-14" src="https://links.papareact.com/fdw" alt="hasPrime" />
                        <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={AddItemsToBasket} className="button">Add to the Basket</button>
                <button onClick={removeItemsToBasket} className="button">remove to the Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
