import { useEffect, useState } from 'react'
import Product_10 from '../../components/midterm/Product_10.jsx'
import Wrapper from '../../assets/wrappers/midterm/Shop_10'

const api_url = 'http://localhost:5000/api/shop_10/mens'

const P3_NodePage_10 = () => {
  const [shop_10, setShop_10] = useState([])

  const fetchTourFromNodeServer = async () => {
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      console.log('shop', data)
      setShop_10(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTourFromNodeServer()
  }, [])

  return (
    <Wrapper>
      <div className='collection-page'>
        <h4 className='flex items-center justify-center gap-4 mt-4'>
          P3_NodePage_10
        </h4>
        <h4 className='flex items-center justify-center gap-4 mt-4'>
          pengsenFang, 213410110{' '}
        </h4>
        <h4 className='flex items-center justify-center gap-4 mt-4 title'>
          Mens
        </h4>
        <div className='items'>
          {shop_10?.map((shop) => {
            return <Product_10 {...shop} key={shop.pId} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default P3_NodePage_10
