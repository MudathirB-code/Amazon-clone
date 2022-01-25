import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import { useSession } from 'next-auth/react'
import NumberFormat from "react-number-format";

function CheckOut() {

    const { data : session } = useSession();

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    return (
        <div>
            <Header />
            <main className="max-w-6xl mx-auto">
                <div className="flex-grow m-5 shadow-md">
                    <Image 
                        src="https://links.papareact.com/ikj"
                        width={800}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="p-5">
                        <p className="text-xl font-bold border-b bg-white">
                        {items.length === 0 ? 'Your Shopping Basket is Empty:' : 'Shopping Basket:'}
                        </p>

                        {items.map((item, i) => (
                            <CheckoutProduct 
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">SubTotal {items.length} items:
                                <span className="font-bold">
                                    <NumberFormat 
                                        value={total}
                                        prefix={'$'}
                                    />
                                </span>
                            </h2>
                            <button
                                disabled={!session} 
                                className={`button ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign in to Checkout" : "processed to Checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}       export default CheckOut
