/*
    {
        name: <link name>
        pathTo: <internal link>
            or
        linkTo: <external link>
            or
        scrollTo: <scroll to id in the same page>
    }
*/

const data = [
    {
        name:"Home",
        pathTo:'/'
    },
    {
        name:"Categories",
        pathTo:'/'
    },
    {
        name:"About",
        pathTo:'/about'
    },
    {
        name:"Contact",
        scrollTo:'footer'
    },
    {
        name:"Sign in",
        pathTo:'/login'
    },
    {
        name:"Admin",
        pathTo:'/admin'
    },
]

export default data