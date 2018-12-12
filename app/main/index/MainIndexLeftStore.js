Ext.define('main.index.MainIndexLeftStore', {
    extend: "Ext.data.TreeStore",
    alias: 'store.mainIndexLeftStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/menu.json'
    },
    root: {
        expanded: true
    },
    autoLoad: true
});