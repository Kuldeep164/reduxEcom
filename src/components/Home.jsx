import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { useGetAllProductsQuery } from '../features/productsApi'
import { addToCart } from '../features/cartSlice';

function Home() {
  const {data, error, isLoading} = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  }

  return (
    <div className='home-container'>
      {
        isLoading
        ? ( <p>Loading...</p> )
        : error 
        ? ( <p>An Error Occured...</p> )
        : (
          <>
            <h2>
              New Arrivals
            </h2>
            <div className="products">
              {
                data?.map( product => ( <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.title} />
                  <div className="details">
                    <span>
                      {product.desc}
                    </span>
                    <span className='price'>
                      {product.price}
                    </span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div> ) )
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Home
