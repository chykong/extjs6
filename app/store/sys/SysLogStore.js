/*
 * 数据存储 - r日志
 */

Ext.define("hygl.store.sys.SysLogStore", {
    extend: "Ext.data.Store",
    alias: "store.sys_log_store",
    model: "hygl.model.sys.SysLog",
    proxy: ExtUtil.createPageProxy(GlobalConst.appDoamin + '/sys/log/list')
});