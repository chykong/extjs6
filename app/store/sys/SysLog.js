/*
 * 数据存储 - r日志
 */

Ext.define("hygl.store.sys.SysLog", {
    extend: "Ext.data.Store",
    alias: "store.sys_log",
    model: "hygl.model.sys.SysLog",
    proxy: ExtUtil.createPageProxy(GlobalConst.appDoamin + '/sys/log/list')
});