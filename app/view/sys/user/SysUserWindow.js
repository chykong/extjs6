Ext.define('hygl.view.sys.user.SysUserWindow', {
    extend: 'Ext.window.Window',
    alias: 'sysUserWindow',
    controller: 'sys_user_controller',
    requires: [
        'hygl.view.sys.user.SysUserViewModel'
    ],
    viewModel: {
        type: 'sys_user_viewmodel'
    },
    height: 600,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '用户信息',
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
            style: 'width:50%'
        },
        items: [{
            name: 'id',
            xtype: 'hiddenfield'
        }, {
            xtype: 'fieldset',
            layout: 'column',
            border: true,
            title: '登录信息',
            autoHeight: false,
            defaultType: 'textfield',
            columnWidth: 0.5,
            items: [{
                name: 'username',
                fieldLabel: '账号',
                allowBlank: false
            }]
        }, {
            xtype: 'fieldset',
            layout: 'column',
            border: true,
            title: '基本信息',
            autoHeight: false,
            bodyPadding: 10,
            defaultType: 'textfield',
            columnWidth: 0.5,
            items: [{
                name: 'realname',
                fieldLabel: '真实姓名',
                maxLength: 20,
                allowBlank: false
            }, {
                xtype: 'radiogroup',
                fieldLabel: '性别',
                layout: {
                    autoFlex: false
                },
                defaults: {
                    name: 'gender',
                    margin: '0 15 0 0'
                },
                items: [{
                    inputValue: '男',
                    boxLabel: '男',
                    checked: true
                }, {
                    inputValue: '女',
                    boxLabel: '女'
                }]
            }, {
                name: 'mobile',
                fieldLabel: '手机号',
                vtype: 'mobile'
            }, {
                name: 'phone',
                fieldLabel: '座机',
                maxLength: 20,
                allowBlank: true
            }]
        }, {
            xtype: 'fieldset',
            layout: 'column',
            border: true,
            title: '角色信息',
            autoHeight: false, bodyPadding: 10,
            defaultType: 'textfield',
            columnWidth: 0.5,
            items: [{
                name: 'roleId',
                fieldLabel: '角色',
                allowBlank: false,
                xtype: 'combobox',
                valueField: 'value',
                displayField: 'content',
                bind: {store: '{sysUserRoleStore}'},
                width: 300,
                multiSelect: false,
                queryMode: 'local',
                editable: false
            }]
        }]
    }],
    buttons: [
        {
            xtype: 'button',
            text: '保存',
            itemId: 'save',
            glyph: IconUtil.glyphSave,
            handler: 'save'
        }, {
            xtype: 'button',
            text: '取消',
            itemId: 'cancel',
            glyph: IconUtil.glyphClose,
            handler: StringUtil.windowCancel
        }
    ]
});