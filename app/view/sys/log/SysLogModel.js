Ext.define('hygl.view.sys.log.SysLogModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_log",
    requires: ["hygl.store.sys.SysLog"],
    data: {},
    stores: {
        'sysLogStore': {
            type: 'sys_log',
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