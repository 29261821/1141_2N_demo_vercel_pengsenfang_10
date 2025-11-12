import { useEffect, useState } from 'react'
import Product_10 from '../../components/midterm/Product_10'
import Wrapper from '../../assets/wrappers/midterm/Shop_10'

import { supabase } from '../../db/clientSupabase.js'

const P4_SupaPage_10 = () => {
  const [name, setName] = useState('pengsen Fang')
  const [id, setId] = useState('213410110')
  const [product_10, setProduct_10] = useState([])

  const fetchProductFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('shop_10').select('*')
      console.log('Product_10', data)
      setProduct_10(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductFromSupaServer()
  }, [])

  return (
    <Wrapper>
      <div className='collection-page'>
        <h1 className='flex items-center justify-center gap-1.5 mt-4 text-2xl'>
          P4_SupaPage_10,
        </h1>
        <h1 className='flex items-center justify-center gap-4 mt-4'>
          {name}, {id}
        </h1>
        <h1 className='title'>Mens</h1> {/* */}
        <div className='items'>
          {product_10.map((product) => {
            return <Product_10 key={product.pId} {...product} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default P4_SupaPage_10
