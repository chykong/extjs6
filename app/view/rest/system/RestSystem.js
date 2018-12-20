Ext.define('hygl.view.rest.system.RestSystem', {
    extend: 'Ext.grid.Panel',
    alias: 'restSystem',
    xtype: 'restSystem',
    requires: [
        'hygl.view.rest.system.RestSystemController',
        'hygl.view.rest.system.RestSystemViewModel'
    ],
    viewModel: {
        type: 'rest_system_viewmodel'
    },
    bind: {
        store: '{rest_system_store}'
    },
    controller: 'rest_system_controller',
    title: '系统管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    columns: [{
        xtype: 'rownumberer', width: 40
    }, {
        text: '名称', dataIndex: 'name', width: 200, sortable: false
    }, {
        text: '描述', dataIndex: 'description', flex: 1, sortable: false
    }, {
        text: '排序', dataIndex: 'displayOrder', width: 60, sortable: false
    }, {
        text: '操作', xtype: 'actioncolumn', width: 100, items: [{
            text: '修改', tooltip: '修改', handler: 'edit'
        }, {
            text: '删除', tooltip: '删除', handler: 'delete'
        }]
    }],
    tbar: ['系统名称：', {
        xtype: 'textfield',
        bind: {value: '{searchField.name}'}, width: 120
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