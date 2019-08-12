import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Restore from '../components/Restore.vue'
import Login from '../components/Login'
import Terms from '../components/Terms'
import Warning from '../components/Warning'
import DownloadColdMobile from '../components/download/DownloadColdMobile'
import DownloadHotMobile from '../components/download/DownloadHotMobile'
import AndroidColdCode from '../components/download/AndroidColdCode'
import AndroidHotCode from '../components/download/AndroidHotCode'
import IOSColdCode from '../components/download/IOSColdCode'
import IOSHotCode from '../components/download/IOSHotCode'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/signup',
        name: 'signup',
        component: Signup
    }, {
        path: '/restore',
        name: 'restore',
        component: Restore
    }, {
        path: '/terms',
        name: 'terms',
        component: Terms
    }, {
        path: '/warning',
        name: 'warning',
        component: Warning
    }, {
        path: '/downloadColdMobile',
        name: 'downloadColdMobile',
        component: DownloadColdMobile
    }, {
        path: '/downloadHotMobile',
        name: 'downloadHotMobile',
        component: DownloadHotMobile
    }, {
        path: '/androidCodeCold',
        name: 'androidCodeCold',
        component: AndroidColdCode
    }, {
        path: '/andriodCodeHot',
        name: 'andriodCodeHot',
        component: AndroidHotCode
    }, {
        path: '/iosCodeCold',
        name: 'iosCodeCold',
        component: IOSColdCode
    }, {
        path: '/iosCodeHot',
        name: 'iosCodeHot',
        component: IOSHotCode
    }
    ]
})
