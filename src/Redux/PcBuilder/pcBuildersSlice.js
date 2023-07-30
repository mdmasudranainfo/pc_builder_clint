const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  products: [],
}

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.products.push(action.payload)
    },
    removeToPcBuilder: (state, action) => {
      state.products = state.products.filter(
        product => product._id !== action.payload._id
      )
    },
  },
})

export const { addToBuilder, removeToPcBuilder } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer
