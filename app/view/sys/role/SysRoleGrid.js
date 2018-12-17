Ext.define('hygl.view.sys.role.SysRoleGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'sysRoleGrid',
    xtype: 'sysRoleGrid',
    store: ExtUtil.createPageStore(GlobalConst.appDoamin + '/sys/role/list', Ext.define('sys.role.SysRoleModel', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'id', type: 'int'
            }, {
                name: 'code', type: 'string'
            }, {
                name: 'name', type: 'string'
            }, {
                name: 'description', type: 'string'
            }, {
                name: 'displayOrder', type: 'int'
            }]
        })
    ),
    title: '角色管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    margin: '0 2 0 0',
    controller: 'sysRoleController',
    columns: [{
        xtype: 'rownumberer', width: 40
    }, {
        text: '名称',
        width: 100,
        dataIndex: 'name'
    }, {
        text: '描述',
        width: 200,
        dataIndex: 'description'
    }, {
        text: '排序',
        width: 60,
        dataIndex: 'displayOrder'
    }, {
        text: '操作',
        xtype: 'actioncolumn',
        width: 100,
        items: [{
            text: '修改',
            tooltip: '修改',
            handler: 'updateRec'
        }, {
            text: '删除',
            tooltip: '删除',
            handler: 'deleleRec'
        }]
    }],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: '添加',
                    glyph: IconUtil.glyphAdd,
                    handler: 'onAddClick'
                }, /*{
                 xtype: 'button',
                 text: '修改',
                 glyph: IconUtil.glyphEdit(),
                 handler: 'onEditClick'
                 },*/
                {
                    xtype: 'button',
                    text: '删除',
                    glyph: IconUtil.glyphDelete,
                    handler: 'onDeleteClick'
                }
            ]
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        select: 'onRowClick'
    }
})
;