import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { store, persistor } from './store'
import GlobalStyles from './globalStyles'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root'),
)
root.render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)

reportWebVitals()
