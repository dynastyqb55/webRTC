import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "satyam",
        email: "satyam.mahajan98@gmail.com",
        token: "JWT-token",
    },
    reducers: {
        addUser: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },        
    },
});


export const { addUser } = userSlice.actions;

export default userSlice.reducer;