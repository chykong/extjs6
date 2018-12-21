Ext.define('hygl.view.rest.interface.RestParamWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.rest_param_window',
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
            name: 'interfaceId',
            xtype: 'hiddenfield'
        }, {
            name: 'type',
            fieldLabel: '类型',
            allowBlank: false,
            xtype: 'combo',
            valueField: 'value',
            displayField: 'content',
            bind: {
                store: '{type_store}'
            },
            queryMode: 'local',
            editable: false,
            allowBlank: false
        }, {
            name: 'paramName',
            fieldLabel: '参数名称',
            allowBlank: false,
            maxLength: 25
        }, {
            name: 'paramType',
            fieldLabel: '参数类型',
            allowBlank: false,
            xtype: 'combo',
            valueField: 'value',
            displayField: 'content',
            bind: {
                store: '{param_type_store}'
            },
            queryMode: 'local',
            editable: true,
            allowBlank: true
        }, {
            name: 'paramLength',
            fieldLabel: '长度',
            maxLength: 4
        }, {
            name: 'paramDesc',
            fieldLabel: '参数描述',
            maxLength: 100
        }, {
            name: 'displayOrder',
            fieldLabel: '排序',
            vtype: 'posInt'
        }],
        buttons: [
            {
                xtype: 'button',
                text: '保存',
                glyph: IconUtil.glyphSave,
                handler: 'testRest'
            }, {
                xtype: 'button',
                text: '取消',
                glyph: IconUtil.glyphClose,
                handler: StringUtil.windowCancel
            }
        ]
    }]
});