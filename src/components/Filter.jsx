import { Button } from '@mui/material';
import { MenuItem, Select, FormControl, InputLabel, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import { FiArrowDown, FiArrowUp, FiRefreshCcw, FiSearch } from 'react-icons/fi';
import { useLocation, useNavigate,useSearchParams } from 'react-router-dom';



const Filter = ({categories}) => {
  // const categories = [
  //   { categoryId: 1, categoryName: 'Books' },
  //   { categoryId: 2, categoryName: 'Electronics' },
  //   { categoryId: 3, categoryName: 'Clothing' },
  //   { categoryId: 4, categoryName: 'Home & Kitchen' },
  //   { categoryId: 5, categoryName: 'Sports & Outdoors' },
  //   { categoryId: 6, categoryName: 'Mobiles' },
  // ];

  const [searchParams]=useSearchParams();
  const params=new URLSearchParams(searchParams);
  const pathname= useLocation().pathname;
  const navigate= useNavigate();

  const [category, setCategory] = React.useState('all');
  const [sortOrder,setOrder]=React.useState('asc');
  const [searchTerm,setSearchTerm]=React.useState('');

  useEffect(()=>{
     const currentCategory=searchParams.get("category") || 'all';
     const currentSortOrder=searchParams.get("sortby") ||'asc';
     const currentSearchTerm=searchParams.get("keyword") ||'';

     setCategory(currentCategory);
     setOrder(currentSortOrder);
     setSearchTerm(currentSearchTerm);
  },[searchParams]);

 useEffect(() => {
  const handler = setTimeout(() => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("keyword", searchTerm);
    } else {
      params.delete("keyword");
    }

    navigate(`${pathname}?${params.toString()}`);
  }, 700);

  return () => clearTimeout(handler);
}, [searchTerm, navigate, pathname, searchParams]);


  const handleCategoryChange = (event) => {
     const selectedCategory=event.target.value;

     if(selectedCategory==='all'){
            params.delete("category");
     }else{
          params.set("category",selectedCategory);
     }

     navigate(`${pathname}?${params}`);
    setCategory(event.target.value);
  };

  const toggleSortOrder=()=>{
     setOrder((prevOrder)=>{
          const newOrder= prevOrder==='asc' ? 'desc' : 'asc';
          params.set("sortby",newOrder);
          navigate(`${pathname}?${params}`);
          return newOrder;
     })
  }

  const handleClearFilter=()=>{
     navigate({pathname:window.location.pathname});
  }

  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
      
      {/* SEARCH BAR */}
      <div className='relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full'>
        <input
          type="text"
          placeholder='Search Products'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className='border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full 
                     focus:outline-none focus:ring-2 focus:ring-[#1976d2]'
        />
        <FiSearch className="absolute left-3 text-slate-800" size={20} />
      </div>

      {/* CATEGORY SELECTTION */}
      <div className='flex lg:flex-row flex-col gap-4 items-center'>
        <FormControl className='text-slate-800 border-slate-700'
          variant='outlined' size='small'>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            className='min-w-[120px] text-slate-800 border-slate-700'
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((c) => (
              <MenuItem key={c.categoryId} value={c.categoryName}>
                {c.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

          {/* SORT BUTTON */}
          <Tooltip title="Sorted by price: asc">
          <Button 
          onClick={toggleSortOrder}
          variant="contained" 
          color="primary" 
          className="flex items-center gap-2 h-10"
          >
          <span>Sort By</span>
          {
               sortOrder==='asc' ?
               (<FiArrowUp size={20} />):
               (<FiArrowDown size={20} />)
}
          </Button>
          </Tooltip>

          {/* CLEAR FILTER BUTTON */}
          <button
          className="
               flex items-center gap-2 
               bg-rose-900 text-white 
               px-3 py-2 rounded-md 
               transition duration-300 ease-in 
               shadow-md hover:bg-rose-800 
               focus:outline-none"
          onClick={handleClearFilter}>
          <FiRefreshCcw size={16} />
          <span className="font-semibold">Clear Filter</span>
          </button>

      </div>
    </div>
  );
};

export default Filter;
