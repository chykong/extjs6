Ext.define('hygl.view.rest.interface.RestInterfaceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rest_interface_controller',
    init: function (application) {
    },

    /**
     * 接口点击事件
     */
    onRowClick: function (grid, record, rowIndex, e) {
        if (record.data.id == null)
            return;
        this.getViewModel().getStore("rest_param_store").reload({
            params: {
                interfaceId: record.data.id
            }
        })
    },
    /**
     * 点击新增按钮
     * @param btn
     */
    add: function (btn) {
        var win = Ext.create('hygl.view.rest.interface.RestInterfaceWindow', {
            title: '新增接口'
        });
        var form = win.down('form');
        StringUtil.setFormField(form, 'id', '0');
    },
    /**
     * 点击修改按钮
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    edit: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('hygl.view.rest.interface.RestInterfaceWindow', {title: '修改接口'});
        win.down('form').loadRecord(record);
    },
    /**
     * 删除选中记录
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    delete: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);
        StringUtil.confirmDelete({
            check: function () {
                AjaxUtil.doPost({
                    url: GlobalConst.appDoamin + '/rest/interface/delete',
                    jsonData: {
                        id: record.data.id
                    },
                    success: function (ret) {
                        Ext.Msg.alert('操作提示', '删除成功', function () {
                            store.reload();
                        });
                    }
                })
            }
        });
    },
    /**
     * 增加或修改后保存
     * @param btn
     */
    save: function (btn) {
        var win = btn.up('window'),
            form = win.down('form'),
            restInterface = ExtUtil.getComponent('restInterface'),
            id = StringUtil.getFormField(form, 'id')
        var url = GlobalConst.appDoamin;
        if (StringUtil.getFormField(form, 'id') == 0)
            url += '/rest/interface/add';
        else
            url += '/rest/interface/update';
        if (!form.isValid())return;
        AjaxUtil.doPost({
            url: url,
            jsonData: form.getValues(),
            success: function (response) {
                restInterface.getViewModel().getStore("rest_interface_store").reload();
                win.close();
            }
        });
    },
    /**
     * 清空
     */
    clear: function () {
        this.getViewModel().setData({
            searchField: {
                systemId: ''
            }
        })
    },
    beforeload: function (store) {
        var grid = ExtUtil.getComponent('restInterface'),
            data = grid.getViewModel().getData();
        Ext.apply(store.proxy.extraParams, {
            systemId: data.searchField.systemId,
        })
    },
    /**
     * 查询
     */
    search: function () {
        var store = this.getViewModel().getStore("rest_interface_store")
        store.load();
    },
    /**************************************************/
    /**
     * 新增参数
     * @param btn
     */
    addParam: function (btn) {
        var grid = ExtUtil.getComponent('restInterface').getComponent('restInterface');
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;

        var win = Ext.create('hygl.view.rest.param.RestParamWindow', {
            title: '新增参数'
        });
        var form = win.down('form');
        StringUtil.setFormField(form, 'id', '0');
        // StringUtil.setFormField(form, 'type', '1');
        StringUtil.setFormField(form, 'interfaceId', record.data.id);
    },
    /**
     * 修改参数
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    editParam: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('hygl.view.rest.param.RestParamWindow', {title: '修改参数'});
        win.down('form').loadRecord(record);
    },
    /**
     * 删除参数
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    deleteParam: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);
        StringUtil.confirmDelete({
            check: function () {
                AjaxUtil.doPost({
                    url: GlobalConst.appDoamin + '/rest/param/delete',
                    jsonData: {
                        id: record.data.id
                    },
                    success: function (ret) {
                        Ext.Msg.alert('操作提示', '删除成功', function () {
                            store.reload();
                        });
                    }
                })
            }
        });
    },

    /**
     * 增加或修改参数
     * @param btn
     */
    saveParam: function (btn) {
        var win = btn.up('window'),
            form = win.down('form'),
            restInterface = ExtUtil.getComponent('restInterface'),
            id = StringUtil.getFormField(form, 'id')
        var url = GlobalConst.appDoamin;
        if (StringUtil.getFormField(form, 'id') == 0)
            url += '/rest/param/add';
        else
            url += '/rest/param/update';
        if (!form.isValid())return;
        AjaxUtil.doPost({
            url: url,
            jsonData: form.getValues(),
            success: function (response) {
                restInterface.getViewModel().getStore("rest_param_store").reload();
                win.close();
            }
        });
    },
});