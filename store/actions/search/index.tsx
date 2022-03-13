export const SET_SEARCH = "SET_SEARCH";

interface searchAttr {
  priceMax: number;
  priceMin: number;
  brand: string[];
  category: string[];
}

export const setSearchAttr = ({
  priceMax,
  priceMin,
  brand,
  category,
}: searchAttr) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SEARCH,
      payload: {
        loading: true,
        data: true,
        errorMessage: false,
      },
    });

    dispatch({
      type: SET_SEARCH,
      payload: {
        loading: true,
        data: {
          priceMax,
          priceMin,
          brand,
          category,
        },
        errorMessage: false,
      },
    });
  };
};
