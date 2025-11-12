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

import {
  Quiz1LayoutPage_10,
  Quiz1Page_10,
  TourStaticPage_10,
  TourStaticPage2_10,
  TourStaticPage3_10,
  TourNodePage_10,
} from './pages/quiz1'

import {
  MidtermLayoutPage_10,
  MidtermHomePage_10,
  P1_StaticPage_10,
  P2_StaticPage_10,
  P3_NodePage_10,
  P4_SupaPage_10,
  Mens_10,
} from './pages/midterm'

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
  {
    path: '/quiz1',
    element: <Quiz1LayoutPage_10 />,
    children: [
      {
        index: true,
        element: <Quiz1Page_10 />,
      },
      {
        path: 'static_10',
        element: <TourStaticPage_10 />,
      },
      {
        path: 'static2_10',
        element: <TourStaticPage2_10 />,
      },
      {
        path: 'static3_10',
        element: <TourStaticPage3_10 />,
      },
      {
        path: 'node_10',
        element: <TourNodePage_10 />,
      },
    ],
  },
  {
    path: '/midterm',
    element: <MidtermLayoutPage_10 />,
    children: [
      {
        index: true,
        element: <MidtermHomePage_10 />,
      },
      {
        path: 'p1_10',
        element: <P1_StaticPage_10 />,
      },
      {
        path: 'mens_10',
        element: <P1_StaticPage_10 />,
      },
      {
        path: 'p2_10',
        element: <P2_StaticPage_10 />,
      },
      {
        path: 'p3_10',
        element: <P3_NodePage_10 />,
      },
      {
        path: 'p4_10',
        element: <P4_SupaPage_10 />,
      },
    ],
  },
])

const App_10 = () => {
  return <RouterProvider router={router} />
}

export default App_10
