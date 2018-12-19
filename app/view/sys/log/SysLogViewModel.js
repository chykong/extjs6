Ext.define('hygl.view.sys.log.SysLogViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.sys_log_viewmodel",
    requires: ["hygl.store.sys.SysLogStore"],
    data: {},
    stores: {
        'sysLogStore': {
            type: 'sys_log_store',
            autoLoad: false,
            listeners: {
                beforeload: 'beforeload'
            }
        }
    },
    data: {
        //查询条件
        searchField: {
            userId: '',
            startDate: StringUtil.getBeforeDate(10),
            endDate: StringUtil.getToday()
        }
    }
});