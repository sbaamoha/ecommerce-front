// import { createSlice } from "@reduxjs/toolkit";
// import {useLocalStorage} from 'usehooks-ts'
// interface cartItem {
//   title: string;
//   price: number;
//   qty: number
// }

// interface InitState {
//   username: string;
// }
// const initialState: InitState = {
//   username: "",
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialState,
//   reducers: {
//     loginUser: (state: InitState, action) => {
//       state.username = action.payload.username;
//     },
//     logoutUser: (state: InitState) => {
//       state.username = "";
//     },
//   }
// });

// interface cartStateType {
//   cart: cartItem[] | [] 
// }

// const cartState = {
//   cart: JSON.parse(localStorage.getItem('cart')!) || []
// }

// export const cartSlice = createSlice({
//   name: "cart",
//   cartState,
  
//     addToCart: (state: cartStateType, action) => {
//       let itemExist = state.cart.includes(action.payload.item)
//       // if(){

//       // }else{

//       // }
//       state.username = action.payload.username;
    
//     },
//   },
// });
// export const { loginUser, logoutUser } = userSlice.actions;
// export default userSlice.reducer;
