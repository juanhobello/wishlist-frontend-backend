import '@/styles/reset.module.css'
import '@/styles/theme.module.css'
import { Layout } from '@/layout/Layout'
import { Home, Wishlist, NotFound } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

function App() {

  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  )
}

export default App
