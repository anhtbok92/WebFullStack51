import Link from 'next/link';

const MainNavigation = () => {
    console.log('MainNavigation');
    return (
       <header>
           <nav>
               <ul>
                   <li>
                       <Link href='/posts'>Posts</Link>
                   </li>
                   <li>
                       <Link href='/contact'>Contact</Link>
                   </li>
               </ul>
           </nav>
       </header>
    )
}

export default MainNavigation;