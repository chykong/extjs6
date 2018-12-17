Ext.define('hygl.view.sys.resource.SysFunction', {
    extend: 'Ext.grid.Panel',
    alias: 'sysFunction',
    xtype: 'sysFunction',
    requires: [
        'hygl.view.sys.resource.SysResourceController',
    ],
    store: Ext.create('Ext.data.Store', {
        fields: [
            {
                name: 'id',
                type: 'int'
            }, {
                name: 'name',
                type: 'string'
            }, {
                name: 'code',
                type: 'string'
            }, {
                name: 'parentId',
                type: 'int'
            }, {
                name: 'url',
                type: 'string'
            }, {
                name: 'iconImg',
                type: 'string'
            }, {
                name: 'target',
                type: 'string'
            }, {
                name: 'displayOrder',
                type: 'int'
            }
        ],
        autoLoad: false,
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'POST'
            },
            url: GlobalConst.appDoamin + '/sys/resource/listFunction',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            paramsAsJson: true
        }
    }),
    title: '按钮设置',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: window.innerHeight - 100,
    margin: '0 0 0 2',
    controller: 'sysResourceController',
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '操作名称',
        dataIndex: 'name',
        width: 80,
        sortable: false
    }, {
        text: '操作代码',
        dataIndex: 'code',
        width: 100,
        sortable: false
    }, {
        text: '操作url',
        dataIndex: 'url',
        width: 120,
        sortable: false
    }, /*{
        text: '操作类型',
        dataIndex: 'type',
        width: 80,
        sortable: false
    }, */{
        text: '描述',
        dataIndex: 'description',
        width: 100,
        sortable: false
    }, {
        text: '排序',
        dataIndex: 'displayOrder',
        flex: 1,
        sortable: false
    }],
    tbar: [
        {
            xtype: 'button',
            text: '添加',
            glyph: IconUtil.glyphAdd,
            handler: 'onAddFunctionClick'
        }, {
            xtype: 'button',
            text: '修改',
            glyph: IconUtil.glyphEdit,
            handler: 'onEditFunctionClick'
        },
        {
            xtype: 'button',
            text: '删除',
            glyph: IconUtil.glyphDelete,
            handler: 'onDeleteFunctionClick'
        }
    ]
});