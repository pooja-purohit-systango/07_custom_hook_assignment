import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainSection from './components/MainSection'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <MainSection />
    </QueryClientProvider>
    </>
  )
}

export default App
