import Wrapper from '../../assets/wrappers/midterm/Shop_10'
import { Link } from 'react-router-dom'

const NavbarShop_10 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </Link>
        <div className='options'>
          <Link to='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
            Sign In
          </Link>
          <div className='cart-icon' onclick='cartToggle()'>
            <img
              className='shopping-icon'
              src='/images/midterm/assets/shopping-bag.svg'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default NavbarShop_10
