Ext.define('hygl.view.rest.interface.RestInterfaceViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.rest_interface_viewmodel",
    requires: [
        'hygl.store.rest.RestInterfaceStore',
        'hygl.store.rest.RestSystemStore'],
    stores: {
        //系统名称store
        rest_interface_store: {
            type: 'rest_interface_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        },
        rest_system_store: StoreUtil.createComboStore(GlobalConst.appDoamin + '/combo/listRestSystem'),
        interface_type_store: StoreUtil.createComboStore2('POST:POST;GET:GET;DELETE:DELETE;PUT:PUT')
    },
    data: {
        //查询条件
        searchField: {
            systemId: ''
        }
    }
});