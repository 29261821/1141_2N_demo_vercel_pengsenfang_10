import { Outlet } from 'react-router-dom';
// import NavbarShop_10 from '../../components/midterm/NavbarShop_10';
import Wrapper from '../../assets/wrappers/midterm/Shop_10';
import NavbarShop_10 from '../../components/midterm/NavbarShop_10';
const MidtermLayoutPage_10 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <NavbarShop_10 />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MidtermLayoutPage_10;
