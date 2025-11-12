import React from 'react'
import Wrapper from '../assets/wrappers/Navbar_10'
import { Link } from 'react-router-dom'
function Navbar_10() {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>

              <li className='menu-item mega-menu'>
                <Link to='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link to='#'>Demo +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    {' '}
                    <li className='menu-item'>
                      <Link to='/Booklist_10'>W2-BookList_10 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/Static_10'>W3-BlogStatic_10 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/localjson_10'>W3-BlogLocalJson_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/node_10'>W4-BlogNode_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/supa_10'>W5-BlogSupa_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/supa_10'>W6-tutorials_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/localjson2_10'>W7-BlogLocalJson2_10</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <Link to='#'>Tutorials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    {' '}
                    <li className='menu-item'>
                      <Link to='/tutorials/t11_10'>
                        T11-ErrorExamplePage_10
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/tutorials/t12_10'>
                        T12_UseStateBasicsPage_10
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link to='#'>Quiz1 +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link to='/quiz1/static_10'>TourStaticPage_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/quiz1/static2_10'>TourStaticPage2_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/quiz1/static3_10'>TourStaticPage3_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/quiz1/node_10'>TourNodePage_10</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <Link to='#'>MIDTERM +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link to='/midterm/p1_10'>P1_StaticPage_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/midterm/p2_10'>P2_StaticPage_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/midterm/p3_10'>P3_NodePage_10</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='/midterm/p4_10'>P4_SupaPage_10</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link to='#'>Contact</Link>
              </li>
            </ul>
            <Link
              to='#'
              id='hamburger-icon'
              className='mobile-toggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </Link>
          </div>

          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <Link to='#' className='active'>
                  Home
                </Link>
              </li>

              <li className='menu-item mega-menu'>
                <Link to='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link to='#'>Services +</Link>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link to='#'>Service 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='#'>Service 2</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='#'>Service 3</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link to='#'>Blog</Link>
              </li>
              <li className='menu-item'>
                <Link to='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

export default Navbar_10
