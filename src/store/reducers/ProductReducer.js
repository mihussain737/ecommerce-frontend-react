const initialState = {
  products: null,
  categories: null,
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

      case "FETCH_CATEGORIES":
        return {
          ...state,
          categories: action.payload
          };
    default:
      return state;
  }
};

export default ProductReducer;
