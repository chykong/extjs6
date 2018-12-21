Ext.define('hygl.view.rest.interface.RestTestWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.rest_test_window',
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
    title: '接口测试',
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
            name: 'url',
            fieldLabel: '请求Url',
        }, {
            name: 'key',
            fieldLabel: '请求header key',
            value: 'appid'
        }, {
            name: 'value',
            fieldLabel: '请求header value',
            value:'zgs17j07m34ayc5'
        }, {
            name: 'requestBody',
            fieldLabel: '请求body',
            height: 100,
            xtype: 'textarea'
        }, {
            name: 'response',
            fieldLabel: '返回值', height: 200,
            xtype: 'textarea'
        }],
        buttons: [
            {
                xtype: 'button',
                text: '测试',
                glyph: IconUtil.glyphOK,
                handler: 'testRest'
            }, {
                xtype: 'button',
                text: '取消',
                glyph: IconUtil.glyphClose,
                handler: function (btn) {
                    var win = btn.up('window');
                    win.close();
                }
            }
        ]
    }]
});