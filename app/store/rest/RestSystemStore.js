/*
 * 接口系统名称Store
 */

Ext.define("hygl.store.rest.RestSystemStore", {
    extend: "Ext.data.Store",
    alias: "store.rest_system_store",
    model: "hygl.model.rest.RestSystem",
    proxy: ExtUtil.createPageProxy(GlobalConst.appDoamin + '/rest/system/list')
});