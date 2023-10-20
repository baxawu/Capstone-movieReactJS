import { configureStore } from "@reduxjs/toolkit";
import movieTicketReducer from "./redux/movieTicketSlice";
import movieListSlice from "./redux/movieListSlice";

const store = configureStore({
    reducer: {
        movieTicket: movieTicketReducer,
        movieList: movieListSlice
    }
})

export default store;