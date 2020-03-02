import React,{lazy} from 'react'
import { Redirect } from 'react-router-dom';

const routesData = [
    {
        name:'redirect',
        path: '/admin',
        exact: true,
        hidden: true,
        render() {
            return <Redirect to="/admin/dashboard" />;
          },
    },
    {
        path:'/admin/dashboard',
        component: lazy( () => import('components/mainComponents/Admin/Dashboard')),
        exact:true
    },
    {
        path:'/admin/myProfile',
        component: lazy( () => import('components/mainComponents/MyProfile')),
        exact:true
    },
    {
        path:'/admin/posts',
        component: lazy( () => import('components/mainComponents/Posts')),
        exact:true
    },
    {
        path:'/admin/charts',
        component: lazy( () => import('components/mainComponents/Charts')),
        exact:true
    },

]

export default routesData