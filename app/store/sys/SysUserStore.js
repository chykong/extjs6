/*
 * 数据存储 UserStore
 */

Ext.define("hygl.store.sys.SysUserStore", {
    extend: "Ext.data.Store",
    alias: "store.sys_user_store",
    model: "hygl.model.sys.SysUser",
    proxy: ExtUtil.createPageProxy(GlobalConst.appDoamin + '/sys/user/list')
});