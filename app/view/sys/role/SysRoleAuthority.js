Ext.define('hygl.view.sys.role.SysRoleAuthority', {
    extend: 'Ext.tree.Panel',
    alias: 'sysRoleAuthority',
    xtype: 'sysRoleAuthority',
    store: Ext.create('Ext.data.TreeStore', {
        model: 'hygl.view.sys.role.SysRoleAuthorityModel',
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'POST'
            },
            url: GlobalConst.appDoamin + '/sys/role/listRoleMenuJson',
            reader: {
                type: 'json'
            },
            paramsAsJson: true
        }
    }),
    margin: '0 0 0 2',
    rootVisible: false,
    autoLoad: false,
    useArrows: false,
    animate: true,
    frame: true,
    bufferedRenderer: false,
    title: '角色权限设置',
    // width : 400,
    columnLines: true,
    rowLines: true,
    collapsible: false,
    glyph: IconUtil.glyphWindow,
    height: GlobalConst.frameHeight,
    controller: 'sysRoleController',
    columns: [{
        xtype: 'treecolumn',
        text: '菜单名称',
        width: 200,
        sortable: false,
        dataIndex: 'text'
    }, {
        text: '功能列表',
        dataIndex: 'function',
        flex: 1,
        sortable: false,
        renderer: 'renderButtonCheck'
    }],
    tbar: [{
        glyph: IconUtil.glyphSave,
        text: '保存角色权限',
        handler: 'saveRoleAuthority'
    }, {
        glyph: 61765,
        text: '功能全选',
        handler: 'selectAll'
    }],
    listeners: {
        checkchange: 'onCheckchange'
    }
})
;