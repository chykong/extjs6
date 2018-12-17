Ext.define('hygl.view.sys.log.SysLogViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_log_viewmodel",
    requires: ["hygl.store.sys.SysLogStore"],
    data: {},
    stores: {
        'sysLogStore': {
            type: 'sys_log_store',
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