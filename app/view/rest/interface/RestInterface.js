Ext.define('hygl.view.rest.interface.RestInterface', {
    extend: 'Ext.panel.Panel',
    alias: 'restInterface',
    xtype: 'restInterface',
    requires: [
        'hygl.view.rest.interface.RestInterfaceController',
        'hygl.view.rest.interface.RestInterfaceViewModel'
    ],
    viewModel: {
        type: 'rest_interface_viewmodel'
    },
    controller: 'rest_interface_controller',
    height: GlobalConst.frameHeight,
    width: '100%',
    layout: 'column',
    items: [
        {
            xtype: 'grid',
            title: '接口管理',
            glyph: IconUtil.glyphGrid,
            columnWidth: 0.45,
            height: GlobalConst.frameHeight,
            margin: '0 2 0 0',
            frame: true,
            itemId: 'restInterface',
            bind: {
                store: '{rest_interface_store}'
            },
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
            }, {
                xtype: 'button', text: '测试', glyph: IconUtil.glyphOK, handler: 'test'
            }],
            bbar: {
                xtype: 'pagingtoolbar', displayInfo: true
            },
            listeners: {
                select: 'onRowClick'
            }
        },
        {
            xtype: 'grid',
            columnWidth: 0.55,
            bind: {
                store: '{rest_param_store}'
            },
            title: '参数设置',
            glyph: IconUtil.glyphGrid,
            frame: true,
            height: GlobalConst.frameHeight,
            margin: '0 0 0 2',
            itemId: 'restParam',
            columns: [{
                xtype: 'rownumberer', width: 40
            }, {
                text: '类型', dataIndex: 'type', width: 60, sortable: false, renderer: function (val) {
                    if (val == 1)
                        return '<span style="color:' + "green" + ';">' + '请求' + '</span>';
                    else if (val == 2)
                        return '<span style="color:' + "blue" + ';">' + '响应' + '</span>';
                }
            }, {
                text: '参数名称', dataIndex: 'paramName', width: 100, sortable: false
            }, {
                text: '字段类型', dataIndex: 'paramType', width: 80, sortable: false
            }, {
                text: '字段长度', dataIndex: 'paramLength', width: 80, sortable: false
            }, {
                text: '排序', dataIndex: 'displayOrder', width: 60, sortable: false
            }, {
                text: '参数描述', dataIndex: 'paramDesc', width: 200, sortable: false
            }, {
                text: '操作', xtype: 'actioncolumn', width: 100, items: [{
                    text: '修改', tooltip: '修改', handler: 'editParam'
                }, {
                    text: '删除', tooltip: '删除', handler: 'deleteParam'
                }]
            }],
            tbar: [{
                xtype: 'button', text: '新增', glyph: IconUtil.glyphAdd, handler: 'addParam'
            }]
        }
    ]
});