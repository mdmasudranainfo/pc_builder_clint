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
  },
})

export const { addToBuilder } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer
