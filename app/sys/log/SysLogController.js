Ext.define('sys.log.SysLogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysLogController',
    init: function (application) {
        var grid = Ext.ComponentQuery.query('sysLog')[0];
        var toolbar = grid.getDockedItems()[0];
        var store = grid.getStore();
        store.on({
                'beforeload': this.beforeload
            }
        )
    },
    beforeload: function (store) {
        var grid = Ext.ComponentQuery.query('sysLog')[0];
        var toolbar = grid.getDockedItems('toolbar[dock="top"]')[0];
        Ext.apply(store.proxy.extraParams, {
            userId: toolbar.down('#txtUserId').getValue(),
            startDate: StringUtil.formatDate(toolbar.down('#txtStartDate').getValue()),
            endDate: StringUtil.formatDate(toolbar.down('#txtEndDate').getValue())
        });
    },
    searchLog: function (btn, e, eOpts) {
        var me = this;
        var grid = btn.up('grid');
        var store = grid.getStore();
        store.load();
    }
});