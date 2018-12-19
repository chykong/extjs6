Ext.define('hygl.view.sys.user.SysUserViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_user_viewmodel",
    requires: ["hygl.store.sys.SysUserStore"],
    stores: {
        //用户管理store
        'sysUserStore': {
            type: 'sys_user_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        },
        //用户状态Store
        'statusStore': StoreUtil.createComboStore2('0:正常;1:禁用'),
        //用户对应角色store
        'sysUserRoleStore': StoreUtil.createComboStore(GlobalConst.appDoamin + '/sys/role/listCombo')
    },
    data: {
        //查询条件
        searchField: {
            username: '',
            status: ''
        }
    }
});