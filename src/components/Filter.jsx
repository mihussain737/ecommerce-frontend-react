import React from 'react';

const Filter = () => {
  const categories = [
     {categoryId: 1, categoryName: 'Books'},
     {categoryId: 2, categoryName: 'Electronics'},
     {categoryId: 3, categoryName: 'Clothing'},
     {categoryId: 4, categoryName: 'Home & Kitchen'},
     {categoryId: 5, categoryName: 'Sports & Outdoors'},
  ];

  const [category,setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  return(
     <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
          <div>
               <input type="text" placeholder='Search Products' className='border border-gray-400 text-gray-700 rounded-sm'/>
          </div>
     </div>
  );
}

export default Filter;