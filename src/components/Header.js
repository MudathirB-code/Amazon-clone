import Image from 'next/image'
import { MenuIcon , SearchIcon , ShoppingCartIcon , UserCircleIcon  } from '@heroicons/react/outline'
import { signIn , signOut, useSession   } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {

    const { data : session } = useSession();
    const router = useRouter();
    
    const items = useSelector(selectItems);

    return (
        <header className='sticky top-0 z-50'>
            <div className='bg-amazon_blue p-1 py-2 flex items-center flex-grow '>
                <div onClick={() => router.push('/') } className='flex mt-3 pr-4 items-center flex-grow sm:flex-grow-0 ml-2 cursor-pointer'>
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
                    <div onClick={!session ? signIn : signOut} className='link'>
                        <p>
                            {session ? `Hello, ${session.user.name}` : 'Sign In'}
                        </p>
                        <div className='flex items-center space-x-2'>
                        <img className='object-contain rounded-full' 
                            src={session ? session.user.image : <UserCircleIcon className='h-10 bg-red-500' />} 
                            height={25} width={25} />
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                        </div>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkOut')} className='link flex items-center'>
                        <span className='absolute top-0 right-5 mt-2 md:right-10 w-5 h-5 text-center rounded-full bg-yellow-500 text-black font-bold'>
                        {items.length}
                        </span>
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
