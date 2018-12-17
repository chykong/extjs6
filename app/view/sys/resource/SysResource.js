Ext.define('hygl.view.sys.resource.SysResource', {
    extend: 'Ext.panel.Panel',
    alias: 'sysResource',
    xtype: 'sysResource',
    requires: [
        'Ext.layout.container.Column',
        'hygl.view.sys.resource.SysMenu',
        'hygl.view.sys.resource.SysFunction',
        'hygl.view.sys.resource.SysResourceController'
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