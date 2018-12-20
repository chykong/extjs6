/**
 * 数据源工具类
 * 封装store
 */
Ext.define('util.StoreUtil', {
    singleton: true,
    alternateClassName: 'StoreUtil',
    requires: [],
    /**
     * 通过url创建下拉框的store
     * @param url
     * @returns {Ext.data.Store}
     */
    createComboStore: function (url) {
        return Ext.create('Ext.data.Store', {
            model: 'util.ComboboxData',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                url: url,
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        })
    },
    /**
     * 通过json对象创建下拉框
     * [{ "value": "main","content": "main"}, {"value": "blank","content": "blank"}]
     * @param json
     * @returns {Ext.data.Store}
     */
    createComboStore2: function (combo) {
        var strs = new Array(); //定义一数组
        strs = combo.split(";"); //字符分割
        var json = [];//
        for (i = 0; i < strs.length; i++) {
            var fields = new Array();//定义拆分的
            fields = strs[i].split(":");
            var comboData = Ext.create('util.ComboboxData', {
                value: fields[0],
                content: fields[1]
            });
            json.push(comboData);
        }
        return Ext.create('Ext.data.Store', {
            model: 'util.ComboboxData',
            data: json
        })
    }

});

