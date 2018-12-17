/**
 * 资源管理右侧功能form
 */
Ext.define('hygl.view.sys.resource.SysFunctionWindow', {
    extend: 'Ext.window.Window',
    alias: 'sysFunctionWindow',
    controller: 'sysResourceController',
    height: 440,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '功能信息',
    autoShow: true,
    buttonAlign: 'center',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            width: '100%',
            defaultType: 'textfield',
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: 'qtip',
                anchor: '100%'
            },
            items: [{
                name: 'id',
                xtype: 'hiddenfield'
            }, {
                name: 'parentId',
                xtype: 'hiddenfield'
            }, {
                name: 'type',
                xtype: 'hiddenfield', value: 2
            }, {
                name: 'name',
                fieldLabel: '操作名称',
                maxLength: 20,
                allowBlank: false
            }, {
                name: 'code',
                fieldLabel: '操作代码',
                maxLength: 30,
                allowBlank: false
            }, {
                name: 'url',
                fieldLabel: '操作url',
                maxLength: 100,
                allowBlank: false
            }, {
                name: 'description',
                fieldLabel: '操作描述',
                maxLength: 50
            }, {
                name: 'displayOrder',
                fieldLabel: '排序',
                allowBlank: false,
                regex: /^\d+$/
            }]
        }
    ],
    buttons: [{
        xtype: 'button',
        text: '保存',
        itemId: 'save',
        glyph: IconUtil.glyphSave,
        handler: 'onSaveFunctionClick'
    }, {
        xtype: 'button',
        text: '取消',
        itemId: 'cancel',
        glyph: IconUtil.glyphClose,
        handler: 'onCancelFunctionClick'
    }
    ]
});