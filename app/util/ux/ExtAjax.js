Ext.define('Ext.Ajax', {
    extend: 'Ext.data.Connection',
    singleton: true,
    autoAbort: false,
    // 是否允许在请求前拦截
    enableBeforeInterceptor: false,

    interceptors: Ext.create('Ext.util.MixedCollection'),

    // 执行拦截操作
    invokeInterceptor: function (options, response, mode) {
        var me = this;
        this.interceptors.each(function (interceptor) {
            // 判断拦截器类型
            if (interceptor.mode == mode || interceptor.mode == Xzr.AbstractInterceptor.AROUND) {
                // 执行拦截操作，如果没有通过拦截器则返回false
                if (interceptor.handler(options, response) === false) {
                    return false;
                }
            }
        });

        return true;

    },
    // 通过listener实现对Ajax访问的拦截
    listeners: {
        // 拦截器处理，如果没有通过拦截器，则取消请求
        beforerequest: function (conn, options, eOpts) {
            if (this.enableBeforeInterceptor) {
                return this.invokeInterceptor(options, null, 'before');
            }
            return true;
        },
        // 请求完成后对数据验证，无法中断后续的操作，具体请研究ExtJs源码。
        requestcomplete: function (conn, response, options, eOpts) {
            return this.invokeInterceptor(options, response, 'after');
        }
    },

    /**
     * 添加拦截器
     *
     * @param {String}
     *            interceptorId
     * @param {Xzr.web.AbstractInterceptor}
     *            interceptor
     */
    addInterceptor: function (interceptor) {
        if (!interceptor)
            return;

        if (Ext.isString(interceptor)) {
            interceptor = Ext.create(interceptor);
        }

        this.interceptors.add(interceptor.getId(), interceptor);
    }
});