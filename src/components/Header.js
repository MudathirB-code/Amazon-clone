import Image from 'next/image'
import { MenuIcon , SearchIcon , ShoppingCartIcon  } from '@heroicons/react/outline'

function Header() {
    return (
        <header className=''>
            <div className='bg-amazon_blue p-1 py-2 flex items-center flex-grow '>
                <div className='flex mt-3 pr-4 items-center flex-grow sm:flex-grow-0 ml-2 cursor-pointer'>
                    <Image src="https://links.papareact.com/f90" 
                        width={100}
                        height={40}
                    />
                </div>
                <div className='hidden sm:flex h-10 items-center flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow rounded-l-md outline-none' type="text" placeholder='helooooooooooo' />
                    <SearchIcon className='h-9 p-2 cursor-pointer' />
                </div>
                <div className='text-white flex items-center text-sm space-x-4 mx-4 whitespace-nowrap'>
                    <div className='link'>
                        <p>Hello, Mudathir musa</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='link flex items-center'>
                        <span className='absolute top-0 right-5 mt-2 md:right-10 w-5 h-5 text-center rounded-full bg-yellow-500 text-black font-bold'>0</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:flex mt-4 font-extrabold md:text-sm'>Cart</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-2 p-2 pl-6 bg-amazon_blue-light text-white'>
                <p className='flex items-center link'>
                    <MenuIcon className='h-5 mr-1 link' />
                    All
                </p>
                <p className='link'>Today's Deals</p>
                <p className='link'>Custom Service</p>
                <p className='link'>Registry</p>
                <p className='link hidden md:inline-flex'>Gift Cards</p>
                <p className='link hidden md:inline-flex'>Sell</p>
            </div>
        </header>
    )
}

export default Header
