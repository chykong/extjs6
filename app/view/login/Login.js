Ext.define('hygl.view.login.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',
    controller: 'login_controller',
    requires: [
        'hygl.view.login.LoginController'
    ],
    height: 400,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '系统登录',
    autoShow: true,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        bodyPadding: 10,
        width: '100%',
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 90,
            msgTarget: 'qtip',
            anchor: '100%',
            margin: '0 0 4 0',
            style: 'width:100%'
        },
        defaultType: 'textfield',
        buttonAlign: 'center',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: '用户名',
            value: 'admin',
            allowBlank: false
        }, {
            xtype: 'textfield',
            inputType: 'password',
            name: 'password',
            fieldLabel: '密码',
            value: '123456',
            allowBlank: false
        }],
        buttons: [{
            text: '登录',
            formBind: true,
            listeners: {
                click: 'checkLogin'
            }
        }, {
            text: '重置',
            handler: function (btn) {
                btn.up('form').getForm().reset();
            }
        }]
    }]
});