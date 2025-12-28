import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiUser, BiUserCircle } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa';
import { IoExitOutline } from "react-icons/io5";
import BackDrop from './BackDrop';



const UserMenu = () => {
 const [anchorEl, setAnchorEl] = React.useState(null) ;
  const open = Boolean(anchorEl);
  const {user}= useSelector((state)=> state.auth);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler=()=>{

  }

  return (
    <div className='relative z-30'>
      <div
        className='sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'
        onClick={handleClick}
      >
        <Avatar alt='menu' src=''/>
      </div>
      <Menu
      sx={{width:"400px"}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
            sx:{width: 160}
          },
        }}
      >
        <Link to="/profile">
          <MenuItem className='flex gap-2' onClick={handleClose}>
               <BiUserCircle className="text-xl"/>
               <span className='font-semibold'>
                    {user?.username}
               </span>
          </MenuItem>
        </Link>
        <Link to="/profile/orders">
          <MenuItem className='flex gap-2' onClick={handleClose}>
               <FaShoppingCart className='text-xl'/>
               <span className='font-semibold'>
                    Order
               </span>
          </MenuItem>
        </Link>
          <MenuItem className='flex gap-2' onClick={logoutHandler}>
               <div className='font-semibold w-full flex gap-2 items-center bg-blue-600 px-4 py-1 hover:bg-blue-700 text-white cursor-pointer rounded-sm'>
                    <IoExitOutline className="text-xl" />
                    <span className='font-semibold'>
                         Logout
                    </span>
               </div>
          </MenuItem>
      </Menu>
      {open && <BackDrop/>}
    </div>
  );
}

export default UserMenu