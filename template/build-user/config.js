module.exports = {
    version:'1.8.0', //脚手架版本【不需改动】
    chunk: true, //是否开启动态chunk
    check: false,//是否增加错误收集
    isHttps:false,//是否使用https true 的话1505 1507 2505资源将使用https资源地址
    appID: 'test', //项目服务代号 作为checkid
    appVersion:'1.0.0', //项目版本 会显示在页面meta内
    baseUrl: '//staticadm.tcy365[webport]', //项目资源根目录 [webport] 后缀标识符 默认不修改
    appUrl: '/A/test/', //项目资源路径  如   /mobile/test/    
    /* px2rem: null,//px2rem 转换内容 如 { rootValue: 100 } 非rem项目 使用null */
    px2rem: null,
    list: [
        { title: '1505-stable', webPort: '.org:1505', env: 1505 },
        { title: '1507-test', webPort: '.org:1507', env: 1507 },
        { title: '1506-develop', webPort: '.org:1506', env: 1506 },
        { title: '2505-pre', webPort: '.com:2505', env: 2505 },
        { title: '2506-pre', webPort: '.com:2506', env: 2506 },
        { title: '80-static', webPort: '.com', env: 80 }
    ],
    proxy: {
        '/api': {
            //印射为/api
            target: 'http://yapi.tcy365.org:3000/mock/123/', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': '/api' //需要rewrite的,
            }
        }
    },
    host: 'localhost', // 测试版host
    port: 8080 // 测试版端口号
};
