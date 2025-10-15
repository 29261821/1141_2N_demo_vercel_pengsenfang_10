import { createBrowserRouter, RouterProvider } from 'react-router'

import {
  HomeLayoutPage_10,
  HomePage_10,
  BlogStaticPage_10,
  BlogLocalJsonPage_10,
  BlogNodePage_10,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_10 />,
    children: [
      {
        index: true,
        element: <HomePage_10 />,
      },
      {
        path: 'static_10',
        element: <BlogStaticPage_10 />,
      },
      {
        path: 'localjson_10',
        element: <BlogLocalJsonPage_10 />,
      },
      {
        path: 'node_10',
        element: <BlogNodePage_10 />,
      },
    ],
  },
])

const App_10 = () => {
  return <RouterProvider router={router} />
}

export default App_10
