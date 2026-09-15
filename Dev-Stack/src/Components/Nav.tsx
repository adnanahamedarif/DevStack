import Logo from '../assets/logo-text.png'




const Nav = () => {
    return (
       <nav className='flex justify-between container mx-auto m-2 sticky'>
           <img src={Logo} alt="" />            
                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            

            <div className='flex gap-4'>
                <button>Sign In</button>
                <button className='bg-pink-600 rounded-3xl text-white px-4 py-2 '>Sign Up</button>
            </div>
           
       </nav>



    );
};

export default Nav;