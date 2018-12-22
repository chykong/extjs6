Ext.define('hygl.view.main.index.MainIndexLeftStore', {
    extend: "Ext.data.TreeStore",
    alias: 'store.mainIndexLeftStore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: GlobalConst.appDoamin + '/getRoleAutho',
        reader: {
            type: 'json',
            // rootProperty: 'data'
        }
    },

    // autoLoad: true
});