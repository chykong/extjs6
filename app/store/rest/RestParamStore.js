/*
 * 接口系统名称Store
 */

Ext.define("hygl.store.rest.RestParamStore", {
    extend: "Ext.data.Store",
    alias: "store.rest_param_store",
    model: "hygl.model.rest.RestParam",
    proxy: ExtUtil.createNoPageProxy(GlobalConst.appDoamin + '/rest/param/list')
});