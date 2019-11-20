import { RouteConfig } from 'react-router-config'
import Home from 'src/popup/pages/Home'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // {
  //   path: '/child/:id',
  //   component: Child,
  //   routes: [
  //     {
  //       path: '/child/:id/grand-child',
  //       component: GrandChild,
  //     },
  //   ],
  // },
]

export default routes
