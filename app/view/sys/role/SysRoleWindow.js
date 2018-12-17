Ext.define('hygl.view.sys.role.SysRoleWindow', {
    extend: 'Ext.window.Window',
    alias: 'sysRoleWindow',
    controller: 'sysRoleController',
    height: 300,
    width: 450,
    modal: false,
    glyph: IconUtil.glyphWindow,
    title: '个人信息',
    autoShow: true,
    buttonAlign: 'center',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            width: '100%',
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: 'qtip',
                anchor: '100%',
                style: 'width:50%'
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '名称',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: '描述',
                    maxLength: 50
                },
                {
                    xtype: 'textfield',
                    name: 'displayOrder',
                    fieldLabel: '排序',
                    regex: /^\d+$/
                }
            ]
        }
    ],
    buttons: [
        {
            xtype: 'button',
            text: '保存',
            itemId: 'save',
            glyph: IconUtil.glyphSave,
            handler: 'onSaveClick'
        }, {
            xtype: 'button',
            text: '取消',
            itemId: 'cancel',
            glyph: IconUtil.glyphClose,
            handler: StringUtil.windowCancel
        }
    ]
});