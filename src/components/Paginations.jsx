import { Pagination } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Paginations = ({ numberOfPage,totalProducts }) => {
     console.log("Pagination component rendered with:", { numberOfPage, totalProducts });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const onChangeHandler = (event, value) => {
    params.set("page", value.toString());
    navigate(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      count={numberOfPage}
      page={page}
      siblingCount={1}
      boundaryCount={2}
      shape="rounded"
      onChange={onChangeHandler}
    />
  );
};

export default Paginations;
