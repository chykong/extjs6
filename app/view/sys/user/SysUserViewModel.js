Ext.define('hygl.view.sys.user.SysUserViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_user_viewmodel",
    requires: ["hygl.store.sys.SysUserStore"],
    stores: {
        'sysUserStore': {
            type: 'sys_user_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        },
        'statusStore': StoreUtil.createComboStore2('0:正常;1:禁用'),
        'sysUserRoleStore': StoreUtil.createComboStore(GlobalConst.appDoamin + '/sys/role/listCombo')
    },
    data: {
        searchField: {
            username: '',
            status: ''
        }
    }
});