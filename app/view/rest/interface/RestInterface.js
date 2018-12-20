Ext.define('hygl.view.rest.interface.RestInterface', {
    extend: 'Ext.grid.Panel',
    alias: 'restInterface',
    xtype: 'restInterface',
    requires: [
        'hygl.view.rest.interface.RestInterfaceController',
        'hygl.view.rest.interface.RestInterfaceViewModel'
    ],
    viewModel: {
        type: 'rest_interface_viewmodel'
    },
    bind: {
        store: '{rest_interface_store}'
    },
    controller: 'rest_interface_controller',
    title: '接口管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    columns: [{
        xtype: 'rownumberer', width: 40
    }, {
        text: '接口名称', dataIndex: 'name', width: 200, sortable: false
    }, {
        text: 'url', dataIndex: 'url', flex: 1, sortable: false
    }, {
        text: '请求类型', dataIndex: 'requestType', width: 80, sortable: false
    }, {
        text: '操作', xtype: 'actioncolumn', width: 100, items: [{
            text: '修改', tooltip: '修改', handler: 'edit'
        }, {
            text: '删除', tooltip: '删除', handler: 'delete'
        }]
    }],
    tbar: ['系统名称：', {
        xtype: 'combo',
        valueField: 'value',
        displayField: 'content',
        bind: {
            store: '{rest_system_store}',
            value: '{searchField.systemId}'
        },
        queryMode: 'local',
        width: 180,
        editable: true
    }, {
        xtype: 'button', glyph: IconUtil.glyphSearch, text: '查询', handler: 'search'
    }, {
        xtype: 'button', glyph: IconUtil.glyphClear, text: '清空', handler: 'clear'
    }, '-', {
        xtype: 'button', text: '新增', glyph: IconUtil.glyphAdd, handler: 'add'
    }
    ],
    bbar: {
        xtype: 'pagingtoolbar', displayInfo: true
    }
});