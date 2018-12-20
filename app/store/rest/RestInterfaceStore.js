/*
 * 接口系统名称Store
 */

Ext.define("hygl.store.rest.RestInterfaceStore", {
    extend: "Ext.data.Store",
    alias: "store.rest_interface_store",
    model: "hygl.model.rest.RestInterface",
    proxy: ExtUtil.createPageProxy(GlobalConst.appDoamin + '/rest/interface/list')
});