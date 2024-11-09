import { lazy, StrictMode, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

/* code_splitting_before */
import VideoDetail from './pages/VideoDetail.jsx'
import Videos from './pages/Videos.jsx'

/* code_splitting_after */
// const VideoDetail = lazy(() => import('./pages/VideoDetail.jsx'));
// const Videos = lazy(() => import('./pages/Videos.jsx'));

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

const rootElement = document.getElementById('root');
// if(rootElement.hasChildNodes()) {
//   hydrateRoot(rootElement).render(
//     /* code_splitting_before */
//     <HelmetProvider>
//       <RouterProvider router={router} />
//     </HelmetProvider>
//   )
// } else {
//   createRoot(rootElement).render(
//       /* code_splitting_after */
//       // <Suspense>
//       //   <RouterProvider router={router} />
//       // </Suspense> 
    
    
//       /* code_splitting_before */
//       <HelmetProvider>
//         <RouterProvider router={router} />
//       </HelmetProvider>
    
//     )
// }

createRoot(document.getElementById('root')).render(
  /* code_splitting_after */
  // <Suspense>
  //   <RouterProvider router={router} />
  // </Suspense> 


  /* code_splitting_before */
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>

)
