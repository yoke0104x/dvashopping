import Second from '../containers/Second';
import My from '../containers/My';
import Shopcar from '../containers/Shopcar';
import Editor from '../containers/Editor';
import Homepage from '../containers/Homepage';
import Detail from '../containers/Detail';
import Home from '../containers/Home'


export const routes = [{
    path: '/home',
    component: Home,
    children: [
        {
            path: '/home/homepage',
            component: Homepage
        }, {
            path: '/home/my',
            component: My
        }, {
            path: '/home/shopcar',
            component: Shopcar
        }, {
            path: '/home/editor',
            component: Editor
        }, {
            path: '/home/second',
            component: Second
        }
    ]
} ,{
    path: '/detail',
    component: Detail
}, {
    path: '/',
    redirect: '/home'
}]