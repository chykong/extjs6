/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('hygl.Application', {
    extend: 'Ext.app.Application',
    name: 'hygl',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    requires: [
        'util.ux.AbstractInterceptor',
        'util.grid.column.Action',
        'util.StringUtil',
        'util.IconUtil',
        'util.GlobalConst',
        'util.ComboboxData',
        'util.StoreUtil',
        'util.AjaxUtil',
        'util.ExtUtil',
    ],
    views: [
        'main.index.MainIndex',
        'sys.log.SysLog',
        'sys.role.SysRole',
        'sys.user.SysUser',
        'sys.resource.SysResource',
    ],
    launch: function () {

        Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性


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
        //设置公共拦截器
        Ext.define('util.ux.ExceptionInterceptor', {
            extend: 'util.ux.AbstractInterceptor',
            interceptor: function (options, response) {//
                var resultData = JSON.parse(response.responseText);
                if (resultData.success==false) {//只处理未授权、超时等问题
                    Ext.Msg.alert('操作提示', resultData.message);
                    return false;
                }
                /* if (resultData.isSessionOut) {
                 Ext.MessageBox.alert('系统提示', 'Session超时，请重新登录！', function () {
                 window.location = Ext.CONTEXT + 'login.do';
                 });
                 return false;
                 }*/
                return true;
            }
        });
        Ext.Ajax.addInterceptor('util.ux.ExceptionInterceptor');

        //定义校验规则
        // 自定义校验
        Ext.apply(Ext.form.field.VTypes, {
            mobile: function (v) {
                var reg = /^1[3-9]\d{9}$/;
                return reg.test(v);
            },
            mobileText: '手机号输入错误',
            zipcode: function (v) {
                var reg = /^[1-9]\d{5}$/;
                return reg.test(v);
            },
            zipcodeText: '邮政编码输入错误',
            posInt: function (v) {
                var reg = /^\+?[1-9][0-9]{0,8}$/;
                return reg.test(v);
            },
            posIntText: '只能输入正整数',
            intNumber: function (v) {
                var reg = /^\d+$/;
                return reg.test(v);
            },
            intNumberText: '只能输入整数',

            floatNumber: function (v) {
                var reg = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
                return reg.test(v);
            },
            floatNumberText: '只能输入小数',

            password: function (v) {
                var reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
                return reg.test(v);
            },
            passwordText: '密码必须为字母数字和特殊字符的组合',
            confirmPassword: function (val, field) {
                if (field.confirmTo) {
                    var pwd = Ext.getCmp(field.confirmTo);
                    return (val == pwd.getValue());
                }
                return true;
            },
            confirmPasswordText: '两次密码输入不一致'
        });


        //设置首页面
        Ext.create({
            xtype: 'mainIndex'
        });
        this.callParent();
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
