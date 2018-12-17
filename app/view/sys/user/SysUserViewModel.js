Ext.define('hygl.view.sys.user.SysUserViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_user_viewmodel",
    requires: ["hygl.store.sys.SysUserStore"],
    data: {},
    stores: {
        'sysUserStore': {
            type: 'sys_user_store',
            autoLoad: true
        },
        state: Ext.create("Ext.data.Store", {
            fields: ["stateId", "stateName"],
            data: [
                ["0", "启用"],
                ["1", "禁用"]
            ]
        })
    }
});