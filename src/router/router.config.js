import Home from '../components/common/home.vue'
import Base from '../components/base.vue'

import backstagegl from '../components/indexPage/1.vue'
import sale from '../components/indexPage/2.vue'
import wx from '../components/indexPage/3.vue'
import member from '../components/indexPage/4.vue'
import webSetUp from '../components/indexPage/5.vue'


import Slider1 from '../components/backstagegl/slider1.vue'
import Slider2 from '../components/sale/slider2.vue'
import Slider3 from '../components/wx/slider3.vue'
import Slider4 from '../components/member/slider4.vue'
import Slider5 from '../components/webSetUp/slider5.vue'

import ManagerList from '../components/backstagegl/managerlist.vue'
import ManageOpration from '../components/backstagegl/manageOprate.vue'
import Supplier from '../components/backstagegl/supplier.vue'
import Warehouse from '../components/backstagegl/warehouse.vue'
import Logistics from '../components/backstagegl/logistics.vue'
import Client from '../components/backstagegl/client.vue'

// 销售管理
import PurchaseOrder from '../components/sale/purchaseOrder.vue'
import SupplierContact from '../components/sale/suppliercontact.vue'
import Procurement from '../components/sale/procurement.vue'
import CustomerOrder from '../components/sale/customerorder.vue'
import CustomerContact from '../components/sale/customercontact.vue'
import StockCheck from '../components/sale/stockcheck.vue'
import SupplierProduct from '../components/sale/supplierproduct.vue'
import TransferOrder from '../components/sale/transferorder.vue'

import proList from '../components/webSetUp/prolist.vue'
import prostandard from '../components/webSetUp/prostandard.vue'
import probrand from '../components/webSetUp/probrand.vue'
import protype from '../components/webSetUp/protype.vue'
import Edit from '../components/webSetUp/edit.vue'
import Login from '../components/login.vue'
import addStandard from '../components/webSetUp/addstandard.vue'

import StoreOrder from '../components/member/storeOrder.vue'
import SingleList from '../components/member/singleList.vue'
import Examine from '../components/member/examine.vue'
import SingleDetails from '../components/member/singleDetails.vue'

const routerLink = [
    {
        path:'/',
        redirect: "/login"  //将路径重定向
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/1',
                components:{
                    default:backstagegl,
                    a:Slider1,
                },
                children:[
                    {path:'/base',component:Base},
                    {path:'/managelist',component:ManagerList},
                    {path:'/manageopration',component:ManageOpration},
                    {path:'/supplier',component:Supplier},
                    {path:'/warehouse',component:Warehouse},
                    {path:'/logistics',component:Logistics},
                    {path:'/client',component:Client}
                ]
            },
            {
                path:'/2',
                components:{
                    default:sale,
                    b:Slider2,
                },
                children:[
                    {path:'/purchaseorder',component:PurchaseOrder},
                    {path:'/suppliercontact',component:SupplierContact},
                    {path:'/procurement',component:Procurement},
                    {path:'/customerorder',component:CustomerOrder},
                    {path:'/customercontact',component:CustomerContact},
                    {path:'/stockcheck',component:StockCheck},
                    {path:'/supplierproduct',component:SupplierProduct},
                    {path:'/transferorder',component:TransferOrder}
                ]
            },
            {
                path:'/3',
                components:{
                    default:wx,
                    c:Slider3,
                }
            },
            {
                path:'/4',
                components:{
                    default:member,
                    d:Slider4,
                },
                children:[
                    {path:'/storeorder',component:StoreOrder},
                    {path:'/singleList',component:SingleList},
                    {path:'/examine',component:Examine},
                    {path:'/singledetails',component:SingleDetails}       
                ]
            },
            {
                path:'/5',
                components:{
                    default:webSetUp,
                    e:Slider5,
                },
                children:[
                    {path:'/cplist',component:proList},
                    {path:'/cpstandard',component:prostandard},
                    {path:'/cpbrand',component:probrand},
                    {path:'/cptype',component:protype},
                    {path:'/cpedit',component:Edit},
                    {path:'/addStandard',component:addStandard},      
                ]
            },
        ]
    },
    {
        path:'/login',
        component:Login
    }
]

export default{
    routes:routerLink
}


