import React, { useEffect } from 'react';
import Product from '../components/product';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';


export default function HomeScreen() {
   const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;

  useEffect(() => 
  {
   dispatch(listProduct());
  },[dispatch]);
  return (
    <div>
      {loading? (
         <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>  
       ) : (
       <div className="row center">
       {product.map((product) => (
         <Product key={product._id} product={product}></Product>
       ))}
     </div>
       )}
     
    </div>
  );
}