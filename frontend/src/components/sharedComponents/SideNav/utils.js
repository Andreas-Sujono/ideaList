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
        name:"Dashboard",
        pathTo:'/admin/dashboard',
        logo:'<i class="fab fa-houzz"></i>'

    },
    {
        name:"My Profile",
        pathTo:'/admin/myProfile',
        logo:'<i class="fas fa-user"></i>'
    },
    {
        name:"Posts",
        pathTo:'/admin/posts',
        logo:'<i class="fas fa-paste"></i>'
    },
    {
        name:"Charts",
        pathTo:'/admin/charts',
        logo:'<i class="fas fa-chart-line"></i>'
    },
    {
        name:"Home",
        pathTo:'/',
        logo:'<i class="fas fa-home"></i>'

    },
    {
        name:"Logout",
        pathTo:'/admin',
        logo:'<i class="fas fa-sign-out-alt"></i>'
    },
]

export default data