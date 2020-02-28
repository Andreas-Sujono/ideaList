import {lazy} from 'react'

const routesData = [
    {
        path:'/',
        component: lazy( () => import('components/mainComponents/Home')),
        exact:true
    },
    {
        path:'/page/:pageNumber',
        component: lazy( () => import('components/mainComponents/Home')),
    },
    {
        path:'/post/:id',
        component: lazy( () => import('components/mainComponents/NewsSingle')),
        exact:true
    },
    {
        path:'/about',
        component: lazy( () => import('components/mainComponents/About')),
        exact:true
    },
    {
        path:'/login',
        component: lazy( () => import('components/mainComponents/Login')),
        exact:true
    },
    {
        path:'/signUp',
        component: lazy( () => import('components/mainComponents/Signup')),
        exact:true
    }
]

export default routesData