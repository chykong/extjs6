Ext.define('hygl.view.sys.user.SysUser', {
    extend: 'Ext.grid.Panel',
    alias: 'sysUser',
    xtype: 'sysUser',
    requires: [
        'hygl.view.sys.user.SysUserController',
        'hygl.view.sys.user.SysUserModel'
    ],
    store: ExtUtil.createPageStore(GlobalConst.appDoamin + '/sys/user/list', 'hygl.view.sys.user.SysUserModel'),
    title: '用户管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    controller: 'sysUserController',
    columns: [{
        xtype: 'rownumberer', width: 40
    }, {
        text: '登录账号',
        dataIndex: 'username',
        width: 140,
        sortable: false
    }, {
        text: '真实姓名',
        dataIndex: 'realname',
        width: 100,
        sortable: false
    }, {
        text: '手机号',
        dataIndex: 'mobile',
        width: 100,
        sortable: false
    }, {
        text: '座机',
        dataIndex: 'phone',
        width: 100,
        sortable: false
    }, {
        text: '路局',
        dataIndex: 'ljdm',
        width: 100,
        sortable: false
    }, {
        text: '站段',
        dataIndex: 'zddm',
        width: 100,
        sortable: false
    }, {
        text: '类型',
        dataIndex: 'userlevel',
        width: 100,
        sortable: false,
        // renderer: renderUserlevel
    }, {
        text: '状态',
        dataIndex: 'status',
        width: 100,
        align: 'center',
        sortable: false,
        // renderer: renderStatus
    }, {
        text: '角色',
        dataIndex: 'roleName',
        width: 100,
        sortable: false
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
    }
    ],
    tbar: [{
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
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});