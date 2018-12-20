Ext.define('hygl.view.rest.interface.RestInterfaceViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.rest_interface_viewmodel",
    requires: ["hygl.store.rest.RestInterfaceStore"],
    stores: {
        //系统名称store
        'restInterfaceStore': {
            type: 'rest_interface_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        }
    },
    data: {
        //查询条件
        searchField: {
            systemId: ''
        }
    }
});