/*
 * 数据模型 - 用户
 */

Ext.define("hygl.model.sys.SysLog", {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'userId',
        type: 'string'
    }, {
        name: 'realname',
        type: 'string'
    }, {
        name: 'operaDate',
        type: 'string'
    }, {
        name: 'operaIp',
        type: 'string'
    }, {
        name: 'moduleName',
        type: 'string'
    }, {
        name: 'operaName',
        type: 'string'
    }, {
        name: 'opreaUrl',
        type: 'string'
    }, {
        name: 'operaParams',
        type: 'string'
    }]
});