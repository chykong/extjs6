Ext.define('hygl.view.sys.log.SysLogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysLogController',
    // requires: ['sys.log.SysLog'],
    init: function (application) {
        var store = this.getViewModel().getStore("sysLogStore")
        store.on({
                'beforeload': this.beforeload
            }
        )
    },
    beforeload: function (store) {
        var grid = ExtUtil.getComponent('sysLog'),
            toolbar = ExtUtil.getToolbar(grid);
        Ext.apply(store.proxy.extraParams, {
            userId: ExtUtil.getToolbarItem(toolbar, 'txtUserId'),
            startDate: StringUtil.formatDate(ExtUtil.getToolbarItem(toolbar, 'txtStartDate')),
            endDate: StringUtil.formatDate(ExtUtil.getToolbarItem(toolbar, 'txtEndDate'))
        });
    },
    searchLog: function (btn, e, eOpts) {
        var store = this.getViewModel().getStore("sysLogStore")
        store.load();
    }
});