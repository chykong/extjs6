Ext.define('sys.resource.SysMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'sysMenu',
    xtype: 'sysMenu',
    requires: [
        'sys.resource.SysResourceController',
    ],
    store: Ext.create('Ext.data.TreeStore', {
        model: 'sys.resource.SysMenuModel',
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'POST'
            },
            url: GlobalConst.appDoamin + '/sys/resource/getTreeGridJson',
            reader: {
                type: 'json',
                // root:'data'
                // rootProperty: 'data'
            }
        }
    }),
    title: '资源模块管理',
    glyph: IconUtil.glyphGrid,
    useArrows: true,
    rootVisible: false,
    autoLoad: false,
    frame: true,
    height: window.innerHeight - 100,
    margin: '0 2 0 0',
    controller: 'sysResourceController',
    columns: [{
        xtype: 'treecolumn',
        text: '模块名称',
        width: 150,
        sortable: false,
        dataIndex: 'name'
    }, {
        text: '模块代码',
        dataIndex: 'code',
        width: 120,
        sortable: false
    }, {
        text: '链接',
        dataIndex: 'url',
        width: 120,
        flex: 1,
        sortable: false
    }, {
        header: '链接目标',
        dataIndex: 'target',
        width: 60,
        sortable: false
    }, {
        header: '图标',
        dataIndex: 'iconImg',
        width: 60,
        sortable: false
    }, {
        header: '排序',
        dataIndex: 'displayOrder',
        width: 60,
        sortable: false
    }
    ],
    tbar: [
        {
            xtype: 'button',
            text: '添加',
            glyph: IconUtil.glyphAdd,
            handler: 'onAddMenuClick'
        }, {
            xtype: 'button',
            text: '修改',
            glyph: IconUtil.glyphEdit,
            handler: 'onEditMenuClick'
        },
        {
            xtype: 'button',
            text: '删除',
            glyph: IconUtil.glyphDelete,
            handler: 'onDeleteMenuClick'
        }, {
            xtype: 'button',
            text: '刷新',
            glyph: IconUtil.glyphSearch,
            handler: 'onSearchClick'
        }
    ],
    listeners: {
        select: 'onRowClick'
    }
});