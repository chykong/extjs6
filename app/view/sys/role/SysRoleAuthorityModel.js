Ext.define('hygl.view.sys.role.SysRoleAuthorityModel', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id'
    }, {
        name: 'text',
        type: 'string'
    }, {
        name: 'function',
        type: 'string'
    }, {
        name: 'checked'
    }, {
        name: 'expanded'
    }]
});