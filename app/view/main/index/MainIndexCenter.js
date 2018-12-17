Ext.define('hygl.view.main.index.MainIndexCenter', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainIndexCenter',
    // width: 400,
    // height: 300,
    defaults: {
        bodyPadding: 4,
        scrollable: false
    },
    items: [{
        title: '系统首页'
    }],
    plugins: new Ext.create('Ext.ux.TabCloseMenu', {
        closeTabText: '关闭面板',
        closeOthersTabsText: '关闭其他',
        closeAllTabsText: '关闭所有'
    }),
    closeAction: 'destroy',
    listeners: {
        // tabchange: 'onTabChange'
        remove: 'onTabRemove'
    }
});