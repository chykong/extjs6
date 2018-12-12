/**
 * 抽象类 任何要实现拦截器都需要继承自这个类，并实现其中的interceptor方法，并添加至拦截器池中，就可以实现拦截功能
 */
Ext.define('util.ux.AbstractInterceptor', {
    alternateClassName: ['AbstractInterceptor'],
    statics: {
        BEFORE: 'before', // 在请求前拦截
        ATTER: 'after', // 在请求过后拦截
        AROUND: 'around' // 在请求前后都拦截
    },
    mode: 'after',
    isInterceptor: true,
    // 不包含的URL
    excludes: [],
    // 仅包含URL，优先级大于excludes
    includes: [],

    /**
     * 拦截方法，执行拦截及验证过程
     *
     * @param {Object}
     *            options The options config object passed to the request
     *            method.
     * @param {Object}
     *            response The XHR object containing the response data. See The
     *            XMLHttpRequest Object for details.
     * @return {Boolean}
     */
    interceptor: Ext.emptyFn(),

    constructor: function (interceptorFn) {
        var me = this;

        if (Ext.isObject(interceptorFn)) {
            // me.interceptor = interceptorFn;
            Ext.apply(me, interceptorFn);
        } else if (Ext.isFunction(interceptorFn)) {
            me.interceptor = interceptorFn;
        }
    },

    getId: function () {
        return this.id;
    },
    /**
     * 处理拦截过程
     *
     * @param {}
     *            options
     */
    handler: function (options, response) {
        return this.interceptor(options, response);
    },
    /**
     * 验证URL是否需要拦截
     *
     * @param {String}
     *            url 需要验证的地址
     */
    validationUrl: function (url) {
        var me = this, intercept = false;

        // 如果配置了include就仅验证包含的URL
        // 如果配置了excludes就仅不包含excludes中的URL
        // 如果都没有配置就拦截所有URL
        if (me.includes.length == 0 && me.excludes.length == 0) {
            intercept = true;
        } else if (me.includes.length > 0) {
            // 满足条件说明需要拦截
            Ext.Array.each(this.includes, function (reg) {
                // url.match(reg)
                var reg = new RegExp(reg);
                if (reg.test(url))
                    intercept = true;
                return false;
            });
        } else {
            intercept = true;
            Ext.Array.each(this.excludes, function (reg) {
                var reg = new RegExp(reg);
                if (reg.test(url))
                    intercept = false;
                return false;
            });
        }

        return intercept;
    }
});