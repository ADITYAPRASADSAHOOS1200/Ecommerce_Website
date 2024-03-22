import { createSlice } from "@reduxjs/toolkit";
import { StoreData } from "../../asset/Data";

const FilterReducer = createSlice({
    name: 'product',
    initialState: {
        filterProducts: JSON.parse(sessionStorage.getItem('filterData')) || StoreData,
        SingleProducts: JSON.parse(sessionStorage.getItem('singledata')) || StoreData,
        error: false,
    },
    reducers: {
        searchFilterProducts: (state, action) => {
            const filter = StoreData.filter((item) => item.type.includes(action.payload));
            console.log('filter' ,filter);
            state.filterProducts = filter;
            state.error = false;
            sessionStorage.setItem('filterData', JSON.stringify(filter));
        },
        SingleProductPage: (state, action) => {
            const singleprod = StoreData.filter((product) => product.id === action.payload);
            state.SingleProducts = singleprod;
            const savedata = JSON.stringify(singleprod);
            sessionStorage.setItem('singledata', savedata);
            console.log('singleprod', singleprod);
        },
        filterByGender: (state, action) => {
            try {
                const gender = state.filterProducts.filter((product) => product.gender === action.payload);
                state.filterProducts = gender;
                console.log(state.filterProducts);
                const oneGenderType = gender.length > 0;

                if (oneGenderType) {
                    console.log("gender", oneGenderType);
                    state.error = false;
                    const savedata = JSON.stringify(oneGenderType);
                    sessionStorage.setItem("filterData", savedata);
                } else {
                    state.error = true;
                    state.filterProducts = [];
                }
            } catch (err) {
                return err;
            }
        },
        SortByPrice: (state) => {
            try {
                const price = state.filterProducts.sort((a, b) => a.price - b.price);
                state.filterProducts = price;
                const count = price.length;
                if (count > 1) {
                    state.error = false;
                    const savedata = JSON.stringify(price);
                    sessionStorage.setItem("filterData", savedata);
                } else {
                    state.error = true;
                    state.filterProducts = [];
                }
            } catch (err) {
                return err;
            }
        },
        filterByColor: (state, action) => {
            try {
               
                const color = state.filterProducts.filter((product) => product.color.includes(action.payload));
                state.error = false;
                state.filterProducts = color;
                
                if (color.length === 0) {
                    state.error = true;
                    state.filterProducts = [];
                } else {
                    state.error = false;
                    const savedata = JSON.stringify(color);
                    sessionStorage.setItem("filterData", savedata);
                }
            } catch (err) {
                return err;
            }
        },
        filterbysize: (state, action) => {
            try {
                const size = state.filterProducts.filter((products) => products.size.includes(action.payload));
                state.error = false;
                state.filterProducts = size;
                if (size.length <= 0) {
                    state.error = true;
                    state.filterProducts = [];
                } else {
                    state.error = false;
                    const savedata = JSON.stringify(size);
                    sessionStorage.setItem("filterData", savedata);
                }
            } catch (err) {
                return err;
            }
        },
    }
});

export const { searchFilterProducts, SingleProductPage, filterByColor, filterbysize, filterByGender, SortByPrice } = FilterReducer.actions;
export default FilterReducer.reducer;
