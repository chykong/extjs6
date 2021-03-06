Ext.define('hygl.view.rest.system.RestSystemViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.rest_system_viewmodel",
    requires: ["hygl.store.rest.RestSystemStore"],
    stores: {
        //系统名称store
        rest_system_store: {
            type: 'rest_system_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        }
    },
    data: {
        //查询条件
        searchField: {
            name: ''
        }
    }
});