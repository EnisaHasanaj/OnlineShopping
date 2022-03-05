import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../components/Main'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
// import Admin from '../components/admin/Admin';
import EditGamingStore from '../components/admin/GamingStores/EditGamingStore';
import CreateGamingStore from '../components/admin/GamingStores/CreateGamingStore';
import LoginAdmin from "@/components/admin/auth/LoginAdmin";
import Admin from "@/components/admin/Admin";
import RegisterAdmin from "@/components/admin/auth/RegisterAdmin";
import AddProducts from "@/components/admin/GamingStores/AddProducts";
import UsersList from "@/components/admin/Users/UsersList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/edit-gamingstore',
    name: 'EditGamingStores',
    component: EditGamingStore
  },
  {
    path: '/admin/create-gamingstore',
    name: 'CreateGamingStore',
    component: CreateGamingStore
  },
  {
    path: '/admin/add-products',
    name: 'AddProducts',
    component: AddProducts
  },
  {
    path: '/admin/users',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: LoginAdmin
  },
  {
    path: '/AdminRegister',
    name: 'RegisterAdmin',
    component: RegisterAdmin
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
