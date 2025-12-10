import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Filter = () => {
  const categories = [
    { categoryId: 1, categoryName: 'Books' },
    { categoryId: 2, categoryName: 'Electronics' },
    { categoryId: 3, categoryName: 'Clothing' },
    { categoryId: 4, categoryName: 'Home & Kitchen' },
    { categoryId: 5, categoryName: 'Sports & Outdoors' },
  ];

  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
      
      {/* SEARCH BAR */}
      <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
        <input
          type="text"
          placeholder='Search Products'
          className='border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full 
                     focus:outline-none focus:ring-2 focus:ring-[#1976d2]'
        />
        <FiSearch className="absolute left-3 text-slate-800" size={20} />
      </div>

      {/* CATEGORY FILTER */}
      <div className='flex lg:flex-row flex-col gap-4 items-center'>
        <FormControl variant='outlined' size='small'>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((c) => (
              <MenuItem key={c.categoryId} value={c.categoryName}>
                {c.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    </div>
  );
};

export default Filter;
