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
    height: 600,
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
            name: 'systemId',
            fieldLabel: '系统名称',
            xtype: 'combo',
            valueField: 'value',
            displayField: 'content',
            bind: {
                store: '{rest_system_store}'
            },
            queryMode: 'local',
            editable: false,
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
            name: 'requestType',
            fieldLabel: '请求类型',
            xtype: 'combo',
            valueField: 'value',
            displayField: 'content',
            bind: {
                store: '{interface_type_store}'
            },
            queryMode: 'local',
            editable: false,
            allowBlank: false
        }, {
            name: 'description',
            fieldLabel: '接口描述',
            xtype: 'textarea',
            maxLength: 500
        }, {
            name: 'requestExample',
            fieldLabel: '接口请求例子',
            xtype: 'textarea',
            height: 100,
            maxLength: 2000
        }, {
            name: 'responseExample',
            fieldLabel: '接口响应例子',
            xtype: 'textarea',
            height: 100,
            maxLength: 2000
        }, {
            name: 'parentId',
            fieldLabel: '上级接口'
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