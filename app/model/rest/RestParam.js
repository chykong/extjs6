/*
 * 数据模型 - 接口参数
 */

Ext.define("hygl.model.rest.RestParam", {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'interfaceId',
        type: 'int'
    }, {
        name: 'type',
        type: 'int'
    }, {
        name: 'paramName',
        type: 'string'
    }, {
        name: 'paramType',
        type: 'string'
    }, {
        name: 'paramLength',
        type: 'string'
    }, {
        name: 'paramDesc',
        type: 'string'
    }]
});