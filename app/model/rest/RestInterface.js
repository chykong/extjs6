/*
 * 数据模型 - 用户
 */

Ext.define("hygl.model.rest.RestInterface", {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'systemId',
        type: 'int'
    }, {
        name: 'url',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'requestType',
        type: 'string'
    }, {
        name: 'requestExample',
        type: 'string'
    }, {
        name: 'parentId',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }]
});