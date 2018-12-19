Ext.define('hygl.view.sys.log.SysLogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysLogController',
    // requires: ['sys.log.SysLog'],
    init: function (application) {
    },
    /**
     * 清空
     */
    clear: function () {
        this.getViewModel().setData({
            searchField: {
                userId: '',
                startDate: StringUtil.getBeforeDate(10),
                endDate: StringUtil.getToday()
            }
        })
    },
    beforeload: function (store) {
        /* var grid = ExtUtil.getComponent('sysLog'),
         toolbar = ExtUtil.getToolbar(grid);
         Ext.apply(store.proxy.extraParams, {
         userId: ExtUtil.getToolbarItem(toolbar, 'txtUserId'),
         startDate: StringUtil.formatDate(ExtUtil.getToolbarItem(toolbar, 'txtStartDate')),
         endDate: StringUtil.formatDate(ExtUtil.getToolbarItem(toolbar, 'txtEndDate'))
         });*/
        var grid = ExtUtil.getComponent('sysLog'),
            data = grid.getViewModel().getData();
        Ext.apply(store.proxy.extraParams, {
            userId: data.searchField.userId,
            startDate: data.searchField.startDate,
            endDate: data.searchField.endDate
        })
    },
    search: function (btn, e, eOpts) {
        var store = this.getViewModel().getStore("sysLogStore")
        store.load();
    }
})
;