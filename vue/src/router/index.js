import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "MainAdmin",
    component: () =>
        import ("../views/admin/template/MainAdminTemplate.vue"),
    children: [{
            path: "/projects",
            name: "ProjectsCrud",
            component: () =>
                import ("../views/admin/views/crud/CrudView.vue")
        },
        {
            path: "/table",
            name: "Table",
            component: () =>
                import ("../views/admin/views/table/Table.vue")
        }
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router