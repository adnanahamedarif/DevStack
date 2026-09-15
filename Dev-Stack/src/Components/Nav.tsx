import Logo from '../assets/logo-text.png'



const Nav = () => {
    return (
        <nav className='sticky top-0 left-0 w-full z-50 bg-white'>
            <div className='flex justify-between container mx-auto py-2 px-4 items-center'>
                <img src={Logo} alt="Logo" />            
                <ul className='flex gap-4 items-center cursor-pointer'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='flex gap-4 items-center '>
                    <button className='cursor-pointer'>Sign In</button>
                    <button className='bg-pink-500 rounded-3xl text-white px-4 py-2 cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;