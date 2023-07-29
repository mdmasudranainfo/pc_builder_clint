import { configureStore } from '@reduxjs/toolkit'
import pcBuildersReduacer from './PcBuilder/pcBuildersSlice'

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuildersReduacer,
  },
})
