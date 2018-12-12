/**
 * Created by ThinkPad on 2018/12/9.
 */
Ext.define('util.ExtUtil', {
    singleton: true,
    alternateClassName: 'ExtUtil',
    getComponent: function (className) {
        return Ext.ComponentQuery.query(className)[0]
    },

    /**
     * 分页store
     */
    createPageStore: function (url, modelClass) {
        return Ext.create('Ext.data.Store', {
            model: modelClass,
            autoLoad: true,
            pageSize: GlobalConst.pageSize,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                url: url,
                reader: {
                    type: 'json',
                    totalProperty: 'data.total',
                    rootProperty: 'data.root'
                },
                paramsAsJson: true
            }
        })
    },
    /**
     * 创建不分页store
     * @param url
     * @param model
     * @returns {Ext.data.Store}
     */
    createNoPageStore: function (url, model) {
        return Ext.create('Ext.data.Store', {
            model: model,
            autoLoad: false,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                url: url,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                paramsAsJson: true
            }
        })
    }
    ,

});