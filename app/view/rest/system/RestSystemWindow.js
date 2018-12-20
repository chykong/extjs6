Ext.define('hygl.view.rest.system.RestSystemWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.rest_system_window',
    controller: 'rest_system_controller',
    requires: [
        'hygl.view.rest.system.RestSystemViewModel'
    ],
    viewModel: {
        type: 'rest_system_viewmodel'
    },
    height: 400,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '系统名称',
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
            name: 'id',
            xtype: 'hiddenfield'
        }, {
            name: 'name', xtype: 'textfield',
            fieldLabel: '系统名称',
            allowBlank: false,
            maxLength: 50
        }, {
            name: 'description',
            fieldLabel: '系统描述',
            allowBlank: true,
            height: 200,
            xtype: 'textarea',
            maxLength: 500
        }, {
            name: 'displayOrder',
            fieldLabel: '排序',
            allowBlank: true,
            vtype: 'posInt'
        }],
        buttons: [
            {
                xtype: 'button',
                text: '保存',
                glyph: IconUtil.glyphSave,
                handler: 'save'
            }, {
                xtype: 'button',
                text: '取消',
                glyph: IconUtil.glyphClose,
                handler: StringUtil.windowCancel
            }
        ]
    }]
});