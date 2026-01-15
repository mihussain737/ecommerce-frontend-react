import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { dashboardProductsAction, fetchProducts } from "../store/actions";

const useDashboardProductFilter = () => {
     const [searchParams]=useSearchParams();
     const dispatch=useDispatch();

     useEffect(()=>{
          const params=new URLSearchParams();

          const currentPage=searchParams.get("page") ? Number(searchParams.get("page")) : 1;
          params.set("pageNumber",currentPage-1);


          

          const queryString=params.toString();
          dispatch(dashboardProductsAction(queryString));

     },[dispatch,searchParams]);
}

export default useDashboardProductFilter;