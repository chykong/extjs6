Ext.define('sys.log.SysLogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysLogController',
    init: function (application) {
        var grid = ExtUtil.getComponent('sysLog'),
            store = grid.getStore();
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
        var grid = btn.up('grid'),
            store = grid.getStore();
        store.load();
    }
});