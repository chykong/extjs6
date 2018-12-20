/*
 * 数据模型 - 用户
 */

Ext.define("hygl.model.rest.RestSystem", {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
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
});