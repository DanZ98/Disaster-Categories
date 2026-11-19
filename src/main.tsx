import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { store } from './app/store'
import { worker } from './mocks/browser'

// Start the mock server FIRST, then show the app.
// 'bypass' = let requests without a fake answer (like images) go through normally.
worker.start({ onUnhandledFrame: 'bypass' }).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
})
