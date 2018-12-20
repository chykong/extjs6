Ext.define('hygl.view.rest.interface.RestInterfaceWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.rest_interface_window',
    controller: 'rest_interface_controller',
    requires: [
        'hygl.view.rest.interface.RestInterfaceViewModel'
    ],
    viewModel: {
        type: 'rest_interface_viewmodel'
    },
    height: 400,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '接口',
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
            name: 'parentId', xtype: 'textfield',
            fieldLabel: '系统名称',
            allowBlank: false
        }, {
            name: 'name',
            fieldLabel: '接口名称',
            allowBlank: false,
            maxLength: 100
        }, {
            name: 'url',
            fieldLabel: 'url',
            allowBlank: false,
            maxLength: 200
        }, {
            name: '请求类型',
            fieldLabel: 'requestType',
        }, {
            name: '模拟数据',
            fieldLabel: 'requestExample',
            maxLength: 2000
        }, {
            name: '上级接口',
            fieldLabel: 'parentId'
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