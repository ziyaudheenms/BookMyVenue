import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface categoriesProp {
    id: string,
    name: string,
    icon_name: string,
}
interface amenityProp {
    id:string,
    name: string,
    icon_name: string,
}

// Fetch props
interface fetchCategoryProps {
    requestUrl:string
}
interface fetchAmenityProps {
    requestUrl:string
}

export const getAllCategories = createAsyncThunk <any, fetchCategoryProps>(
    "categories/all",
    async({ requestUrl}, {rejectWithValue} ) => {
        try{
            console.log("entered into the category function")
            const response = await axios.get(
                requestUrl,     
            )
            console.log(response)
            return response.data
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)
export const getAllAmenities = createAsyncThunk <any, fetchAmenityProps>(
    "amenities/all",
    async({ requestUrl}, {rejectWithValue} ) => {
        try{
            console.log("amenities function")
            const response = await axios.get(
                requestUrl,     
            )
            console.log(response)
            return response.data
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)


export const venueCreateFeatureslice = createSlice({
    name:"fileFolders",
    initialState: {
        categories: [] as categoriesProp[],
        amenities: [] as amenityProp[],
        initialLoading: false,
    },
    // Reducers are the methods used to update the states.
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(getAllCategories.pending, (state, action) => {
            state.initialLoading = true
            state.categories = []
        })
         .addCase(getAllAmenities.pending, (state, action) => {
            state.initialLoading = true
            state.amenities = []
        })
        .addCase(getAllCategories.fulfilled , (state, action) => {
            const res = action.payload
            const responce_data = res.data
            const uniqueNewItems = responce_data.filter(
                (newCat: categoriesProp) => !state.categories.some((item) => item.id === newCat.id)
            );
            state.categories = [...state.categories, ...uniqueNewItems];

            state.initialLoading = true
        })
        .addCase(getAllAmenities.fulfilled , (state, action) => {
            const res = action.payload
            const responce_data = res.data
            const uniqueNewItems = responce_data.filter(
                (newAmenity: amenityProp) => !state.amenities.some((item) => item.id === newAmenity.id)
            );
            state.amenities = [...state.categories, ...uniqueNewItems];

            state.initialLoading = true
        })
    },
    

})

export default venueCreateFeatureslice.reducer; 