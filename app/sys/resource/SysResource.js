Ext.define('sys.resource.SysResource', {
    extend: 'Ext.panel.Panel',
    alias: 'sysResource',
    xtype: 'sysResource',
    requires: [
        'Ext.layout.container.Column',
        'sys.resource.SysMenu',
        'sys.resource.SysFunction',
        'sys.resource.SysResourceController'
    ],
    // title: '资源管理',
    // frame: true,
    height: StringUtil.getFrameHeight(),
    layout: 'fit',
    width: '100%',
    controller: 'sysResourceController',
    layout: 'column',
    items: [
        {xtype: 'sysMenu', columnWidth: 0.55},
        {xtype: 'sysFunction', columnWidth: 0.45}
    ]
})
;