Ext.define('sys.role.SysRole', {
    extend: 'Ext.panel.Panel',
    alias: 'sysRole',
    xtype: 'sysRole',
    requires: [
        'Ext.layout.container.Column',
        'sys.role.SysRoleGrid',
        'sys.role.SysRoleAuthority',
        'sys.role.SysRoleController'
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