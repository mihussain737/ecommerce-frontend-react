import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux';
import Loader from '../../../components/shared/Loader';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductTableColumn } from '../../helper/tableColumn';
import useDashboardProductFilter from '../../../hooks/useDashboarProductFilter';

const AdminProducts = () => {
  // const products =[{ "productId": 5, "productName": "Oppo", "image": "http://localhost:8080/images/9884b2bf-ad1f-4a2f-8e58-f0ff45c78a91.jpg", "description": "buy oppo phone", "quantity": 10, "price": 20000.0, "discount": 10.0, "specialPrice": 18000.0 }, { "productId": 1, "productName": "Iphone", "image": "http://localhost:8080/images/iphone12345.png", "description": "Buy Iphone", "quantity": 0, "price": 20000.0, "discount": 10.0, "specialPrice": 18000.0 }];
  // const pagination = {"pageNumber": 0, "pageSize": 50, "totalElements": 10, "totalPages": 1, "lastPage": true};
  const {products,pagination}=useSelector((state)=>state.products);
  const {isLoading,erroMessage}=useSelector((state)=>state.errors);
  const [currentPage,setCurrentPage]=useState(
    pagination?.pageNumber +1 || 1
  );

  useDashboardProductFilter();

  const tableRecords = products?.map((item) => {
    return {
      id: item.productId,
      productName: item.productName,
      image: item.image,
      description: item.description,
      quantity: item.quantity,
      price: item.price,
      discount: item.discount,
      specialPrice: item.specialPrice
    }
  });

  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }

  const handleImageUpload=()=>{

  }

  const handleProductView=(product)=>{

  }

  const handlePaginationChange=(paginationModel)=>{

  }

  const emptyProducts =!products || products.length === 0;
  return (
    <div>
      <div className='pt-6 pb-10 flex justify-end'>
        <button className='bg-blue-600 hover:bg-blue-800 text-white  font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300 duration-300'>
          AddProduct
          <MdAddShoppingCart className='text-xl' />
        </button>
      </div>

      {!emptyProducts && (
        <h1 className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>All Products</h1>
      )}
      {isLoading ? (
        <Loader/>
      ):(
        <>
        {
        emptyProducts ?(
          <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
            <h2 className='text-2xl font-semibold'>No product created yet</h2>
          <FaBoxOpen size={40} className='mb-3'/>
          </div>
        ):(
        <div className='max-h-full'>
          <DataGrid
            className='w-full'
              rows={tableRecords}
              columns={adminProductTableColumn(handleEdit,handleDelete,handleImageUpload,handleProductView)}
              paginationMode='server'
              rowCount={pagination?.totalElements || 0}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: pagination?.pageSize || 10,
                    page: currentPage - 1,
                  },
                },
              }}
              onPaginationModelChange={handlePaginationChange}
              disableRowSelectionOnClick
              disableColumnResize
              pageSizeOptions={[pagination?.pageSize || 10]}
              pagination
              paginationOptions={{
                showFirstButton: true,
                showLastButton: true,
                hideNextButton: currentPage === pagination?.totalPages,
              }}
            />
        </div>
       )}
        </>
      )}
    </div>
  )
}

export default AdminProducts