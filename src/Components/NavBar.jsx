import l from '../images/l.png';
import { Link } from 'react-scroll';



export default function NavBar() {
    return (
      <div className="container mx-auto md:px-28">

      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to='Section3'>متطلبات البدأ بالعمل </Link></li>
              <li><Link to='Section4'>ماذا نقدم من شروحات</Link></li>
              <li><Link to='Galerie'> أرباح المتابعين</Link></li>
            </ul>
          </div>
          <p className=" text-xl"><img className='w-16 rounded-full border-none' alt="l" src={l}/> </p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><Link to='Section3'>متطلبات البدأ بالعمل </Link></li>
              <li><Link to='Section4'>ماذا نقدم من شروحات</Link></li>
              <li><Link to='Galerie'> أرباح المتابعين</Link></li>
          </ul>
        </div>
    
      </div>
    </div>
    )
  }