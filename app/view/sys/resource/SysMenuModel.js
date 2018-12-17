Ext.define('hygl.view.sys.resource.SysMenuModel', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'code',
        type: 'string'
    }, {
        name: 'parentId',
        type: 'int'
    }, {
        name: 'url',
        type: 'string'
    }, {
        name: 'iconImg',
        type: 'string'
    }, {
        name: 'target',
        type: 'string'
    }, {
        name: 'displayOrder',
        type: 'int'
    }]
}); 