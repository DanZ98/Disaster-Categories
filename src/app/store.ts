import { configureStore } from '@reduxjs/toolkit'

// The store: one shared place that holds the app's data.
export const store = configureStore({
  // Each "slice" of data (cart, filters, products...) gets added here later.
  reducer: {},
})

// Types so TypeScript knows what the store holds and what it accepts.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
