Ext.define('hygl.view.rest.interface.RestInterfaceViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.rest_interface_viewmodel",
    requires: [
        'hygl.store.rest.RestInterfaceStore',
        'hygl.store.rest.RestSystemStore'],
    stores: {
        //接口名称store
        rest_interface_store: {
            type: 'rest_interface_store',
            autoLoad: true,
            listeners: {
                beforeload: 'beforeload'
            }
        },
        //系统名称store
        rest_system_store: StoreUtil.createComboStore(GlobalConst.appDoamin + '/combo/listRestSystem'),
        //接口类型store
        interface_type_store: StoreUtil.createComboStore2('POST:POST;GET:GET;DELETE:DELETE;PUT:PUT'),
        //参数类型store
        param_type_store: StoreUtil.createComboStore2('string:string;int:int;float:float;boolean:boolean;array:array;object:object'),
        //请求/响应store
        type_store: StoreUtil.createComboStore2('1:请求;2:响应'),
        //参数列表store
        rest_param_store: {
            type: 'rest_param_store',
            autoLoad: false
        },
    },
    data: {
        //查询条件
        searchField: {
            systemId: ''
        }
    }
});