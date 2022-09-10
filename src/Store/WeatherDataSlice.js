import { createSlice } from "@reduxjs/toolkit"

const initialData = {
    current : {
        temp : 32,
        weather : [
            {icon : '04d'}
        ]
    },
    daily : [],
    hourly : [],
}

const WeatherDataSlice = createSlice({
    name : "weatherData",
    initialState : initialData,
    reducers : {
        addData(state,action){
            state.current = action.payload.current
            state.daily = action.payload.daily
            state.hourly = action.payload.hourly
        }
    }

})

export const weatherActions  = WeatherDataSlice.actions
export default WeatherDataSlice.reducer