const initialState = {
  products: [],
  categories: [],
  pagination: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action.totalElements,
          totalPages: action.totalPages,
          lastpage: action.lastpage,
        },
      };
    default:
      return state;
  }
};

export default ProductReducer;
