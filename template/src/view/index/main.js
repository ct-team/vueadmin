import Vue from 'vue';
import router from '@/router/index';
import ElementUI from 'element-ui';
import app from './app';
import permissionData from '@/config/permission';
import {
    Slide,
    Http,
    Permission,
    DateRange
} from 'dart';

//设置__webpack_public_path__
const $path = document.querySelector('meta[name="AppPublic"]');

// eslint-disable-next-line
__webpack_public_path__ = $path ? $path.getAttribute('content') : '/';

//设置BUS
const Bus = new Vue();

Vue.prototype.$bus = Bus;

Vue.use(ElementUI, {
    size: 'mini',
    zIndex: 3000
});
Vue.use(DateRange);
Vue.use(Slide);
Vue.use(Http);
Vue.use(Permission);
Http.setDefaults({
    interceptError: function (err) {
        Vue.prototype.$message({
            message: '网络错误，请重试',
            type: 'error'
        });
        return true;
    }
});
Permission.setDefaults({
    alias: permissionData,
    router: router
});
const render = function () {
    new Vue({
        el: '#app',
        router,
        render: h => h(app)
    });
};

//权限赋值
Vue.$dart.http.axios.get('http://yapi.tcy365.org:3000/mock/350/api/permission')
    .then(function (response) {
        if (response.data.Code === 0) {
            Vue.$dart.permission.success(response.data.Data);
        } else {
            Vue.$dart.permission.fail();
        }
    })
    .catch(function (error) {
        Vue.$dart.permission.error();
    })
    .finally(() => {
        render();
    });
