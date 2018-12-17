Ext.define('hygl.view.sys.role.SysRole', {
    extend: 'Ext.panel.Panel',
    alias: 'sysRole',
    xtype: 'sysRole',
    requires: [
        'Ext.layout.container.Column',
        'hygl.view.sys.role.SysRoleGrid',
        'hygl.view.sys.role.SysRoleAuthority',
        'hygl.view.sys.role.SysRoleController'
    ],
    height: GlobalConst.frameHeight,
    layout: 'fit',
    width: '100%',
    controller: 'sysRoleController',
    layout: 'column',
    items: [
        {xtype: 'sysRoleGrid', columnWidth: 0.4},
        {xtype: 'sysRoleAuthority', columnWidth: 0.6}
    ]
})
;