import { createBrowserRouter, RouterProvider } from 'react-router'

import {
  HomeLayoutPage_10,
  HomePage_10,
  BlogStaticPage_10,
  BlogLocalJsonPage_10,
  BlogLocalJsonPage2_10,
  BlogNodePage_10,
  BookListPage_10,
  BlogSupaPage_10,
} from './pages'

import {
  T11_ErrorExamplePage_10,
  T12_UseStateBasicsPage_10,
} from './pages/tutorials'

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
        path: 'localjson2_10',
        element: <BlogLocalJsonPage2_10 />,
      },
      {
        path: 'node_10',
        element: <BlogNodePage_10 />,
      },
      {
        path: 'booklist_10',
        element: <BookListPage_10 />,
      },
      {
        path: 'supa_10',
        element: <BlogSupaPage_10 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_10 />,
    children: [
      {
        index: true,
        element: <HomePage_10 />,
      },

      {
        path: 'T11_10',
        element: <T11_ErrorExamplePage_10 />,
      },
      {
        path: 'T12_10',
        element: <T12_UseStateBasicsPage_10 />,
      },
    ],
  },
])

const App_10 = () => {
  return <RouterProvider router={router} />
}

export default App_10
