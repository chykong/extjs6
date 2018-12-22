Ext.define('hygl.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login_controller',
    init: function (application) {
    },

    /**
     * 校验登录
     * @param btn
     */
    checkLogin: function (btn) {
        var win = btn.up('window'),
            form = win.down('form');
        var url = GlobalConst.appDoamin + '/checkLogin';
        if (!form.isValid())return;
        form.getForm().submit({
            waitMsg: '正在登录验证',
            waitTitle: '提示',
            url: url,// 提交的Url地址
            /* params : {
             terminal : getUserTerminalType(),
             explorerType : getExplorerInfo().browser,
             explorerVersion : getExplorerInfo().version
             },*/
            jsonSubmit: true,
            method: 'post',
            success: function (form, action) {
                // this.getView().destroy();
                win.close();
                var now = new Date();
                var expiry = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);//保存一年
                Ext.util.Cookies.set('autho_token','12345678', expiry);//设置token
                Ext.create({
                    xtype: 'mainIndex'
                });
            },
            failure: function (form, action) {
                Ext.MessageBox.show({
                    title: '系统提示',
                    msg: action.result.message,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    }

});