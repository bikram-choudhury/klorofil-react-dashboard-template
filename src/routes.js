import Dashboard from "./Views/Dashboard";
import Elements from "./Views/Elements";
import Charts from "./Views/Charts";
import Panels from "./Views/Panels";
import Notifications from "./Views/Notifications";
import Profile from "./Views/Profile";
import Tables from "./Views/Tables";
import Trypography from "./Views/Trypography";
import Icons from "./Views/Icons";

export const AdminRoutes = [{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    icon: 'home',
    layout: '/admin'
}, {
    path: '/elements',
    name: 'Elements',
    component: Elements,
    icon: 'code',
    layout: '/admin'
}, {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    icon: 'chart-bars',
    layout: '/admin'
}, {
    path: '/panels',
    name: 'Panels',
    component: Panels,
    icon: 'cog',
    layout: '/admin'
}, {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    icon: 'alarm',
    layout: '/admin'
}, {
    name: 'Pages',
    icon: 'file-empty',
    layout: '/admin',
    subpages: [{
        path: '/profile',
        name: 'Profile',
        component: Profile,
        layout: '/admin'
    },{
        path: '',
        name: 'Login',
        layout: '/login'
    },{
        path: '',
        name: 'Lockscreen',
        component: '',
        layout: '/lockscreen'
    }]
}, {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    icon: 'dice',
    layout: '/admin'
}, {
    path: '/trypography',
    name: 'Trypography',
    component: Trypography,
    icon: 'text-format',
    layout: '/admin'
}, {
    path: '/icons',
    name: 'Icons',
    component: Icons,
    icon: 'linearicons',
    layout: '/admin'
}];