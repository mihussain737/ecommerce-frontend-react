import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';
import { truncateText } from '../utils/truncateText';

const ProductCard = ({
          productId,
          productName,
          image,
          description,
          quantity,
          price,
          discount,
          specialPrice
}) => {
     const [openProductViewModel, setOpenProductViewModel] = React.useState(false);
     const btnLoader=false;
     const [selectedViewProduct, setSelectedViewProduct]=React.useState({});
     const isAvailble=quantity && Number(quantity) >0;

     const handleProductView=(product)=>{
          setSelectedViewProduct(product);
          setOpenProductViewModel(true);
     };

  return (
    <div className='border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300'>
          <div onClick={ ()=>{
               handleProductView(
                    {
                         id: productId,
                         productName,
                         image,
                         description,
                         quantity,
                         price,
                         discount,
                         specialPrice
                    }
          )}} className='w-full overflow-hidden aspect-[3/2]'>
               <img src={image} alt={productName} className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105'/>
          </div>

          <div className='p-4'>
               <h2 onClick={()=> {
               handleProductView(
                    {
                         id: productId,
                         productName,
                         image,
                         description,
                         quantity,
                         price,
                         discount,
                         specialPrice
                    }
          )}} className='text-lg font-semibold mb-2 cursor-pointer'>
                    {truncateText(productName,50)}
               </h2>
               <div className='min-h-20 max-h-20'>
                    <p className='text-gray-600 text-sm'>{truncateText(description,80)}</p>
               </div>

               <div className='flex items-center justify-between'>
                    {specialPrice ? (
                    <div className='flex flex-col'>
                         <span className='text-gray-400 line-through'>
                              ${Number(price).toFixed(2)}
                         </span>
                         <span className='text-xl font-bold text-slate-700'>
                              ${Number(specialPrice).toFixed(2)}
                         </span>
                    </div>
                    ) :(
                         <div className='flex flex-col'>
                              <span className='text-xl font-bold text-slate-700'>
                              {" "}
                              ${Number(price).toFixed(2)}
                              </span>
                         </div>
                    )}
                    <button
                         disabled={!isAvailble || btnLoader}
                         onClick={()=> {}}
                         className={`bg-blue-500 ${isAvailble ? "opacity-100 hover:bg-blue-600" :"opacity-70"}
                         text-white px-3 py-2 rounded-lg flex items-center justify-center transition-colors duration-300 w-36`}>
                         <FaShoppingCart className='mr-2'/>
                         {isAvailble ? "Add to Cart" : "Out of Stock"}
                    </button>
               </div>
          </div>
          <ProductViewModal
          open={openProductViewModel}
          setOpen={setOpenProductViewModel}
          product={selectedViewProduct}
          isAvailble={isAvailble}
          />
    </div>
  )
}

export default ProductCard