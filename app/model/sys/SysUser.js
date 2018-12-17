Ext.define('hygl.mode.sys.SysUser', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'code',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'displayOrder',
        type: 'int'
    }]
})