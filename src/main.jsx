import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import Videos from './pages/Videos.jsx'
import VideoDetail from './pages/VideoDetail.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Videos />},
      {path: 'videos', element: <Videos />},
      {path: 'videos/:keyword', element: <Videos />},
      {path: 'videos/watch/:videoId', element: <VideoDetail />},

    ]
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
