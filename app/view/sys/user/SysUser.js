Ext.define('hygl.view.sys.user.SysUser', {
    extend: 'Ext.grid.Panel',
    alias: 'sysUser',
    xtype: 'sysUser',
    requires: [
        'hygl.view.sys.user.SysUserController',
        'hygl.view.sys.user.SysUserViewModel'
    ],
    viewModel: {
        type: 'sys_user_viewmodel'
    },
    bind: {
        store: '{sysUserStore}'
    },
    // store: ExtUtil.createPageStore(GlobalConst.appDoamin + '/sys/user/list', 'hygl.view.sys.user.SysUserModel'),
    title: '用户管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    controller: 'sys_user_controller',
    columns: [{
        xtype: 'rownumberer', width: 40
    }, {
        text: '登录账号', dataIndex: 'username', width: 140, sortable: false
    }, {
        text: '真实姓名', dataIndex: 'realname', width: 100, sortable: false
    }, {
        text: '手机号', dataIndex: 'mobile', width: 100, sortable: false
    }, {
        text: '座机', dataIndex: 'phone', width: 100, sortable: false
    }, {
        text: '路局', dataIndex: 'ljdm', width: 100, sortable: false
    }, {
        text: '站段', dataIndex: 'zddm', width: 100, sortable: false
    }, {
        text: '角色', dataIndex: 'roleName', width: 100, sortable: false
    }, {
        text: '状态', dataIndex: 'status', width: 100, align: 'center', sortable: false, renderer: 'renderStatus'
    }, {
        text: '操作', xtype: 'actioncolumn', width: 100, items: [{
            text: '修改', tooltip: '修改', handler: 'edit'
        }, {
            text: '删除', tooltip: '删除', handler: 'delete'
        }]
    }
    ],
    tbar: [
        '用户名:', {
            xtype: 'textfield', itemId: 'txtUsername', width: 100, bind: {value: '{searchField.username}'}
        }, '状态：', {
            xtype: 'combo',
            itemId: 'cmbStatus',
            valueField: 'value',
            displayField: 'content',
            bind: {
                store: '{statusStore}',
                value: '{searchField.status}'
            },
            queryMode: 'local',
            width: 120,
            editable: true,
        }, {
            xtype: 'button', glyph: IconUtil.glyphSearch, text: '查询', handler: 'search'
        }, {
            xtype: 'button', glyph: IconUtil.glyphClear, text: '清空', handler: 'clear'
        }, {
            xtype: 'button', text: '新增', glyph: IconUtil.glyphAdd, handler: 'add'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar', displayInfo: true
    }
});