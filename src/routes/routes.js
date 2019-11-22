//  保存对应的关系数组

// 引入 路由要切换的 组件
import Index from '../pages/Index'
import About from '../pages/About'
import News from '../pages/News'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetails from '../pages/ProductDetails'
import NewsDetails from '../pages/NewsDetails'

// 制作一个数组,存放对应关系,需要导出
export const routes=[
    {
        //  根目录 / , 对应的是 Index组件
        path:"/",  
        component: Index
    },
    {
       //对应的是 About组件
        path:"/about",  
        component: About
    },
    {
       //对应的是 News组件
        path:"/news",  
        component: News
    },
    {
        //对应的是 Product组件
         path:"/product",  
         component: Product
     },
     {
         //对应的是 Contact组件
          path:"/contact",  
          component: Contact
      },
     {
         //对应的是 Cart组件
          path:"/cart",  
          component: Cart
      },
      {
          //对应的是 Login组件
           path:"/login",  
           component: Login
      },
      {
          //对应的是 Register组件
           path:"/register",  
           component: Register
       },
       {
           //对应的是 ProductDetail组件
            path:"/product_details",  
            component: ProductDetails
        },
        {
            path:"/news_details",
            component:NewsDetails
        }
]