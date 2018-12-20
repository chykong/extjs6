Ext.define('hygl.view.rest.system.RestSystemController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rest_system_controller',
    init: function (application) {
    },
    /**
     * 点击新增按钮
     * @param btn
     */
    add: function (btn) {
        var win = Ext.create('hygl.view.rest.system.RestSystemWindow', {
            title: '新增系统名称'
        });
        var form = win.down('form');
        form.getForm().findField("id").setValue("0");
    },
    /**
     * 点击修改按钮
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    edit: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('hygl.view.rest.system.RestSystemWindow', {title: '修改系统名称'});
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
                    url: GlobalConst.appDoamin + '/rest/system/delete',
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
            grid = ExtUtil.getComponent('restSystem'),
            id = StringUtil.getFormField(form, 'id')
        var url = GlobalConst.appDoamin;
        if (StringUtil.getFormField(form, 'id') == 0)
            url += '/rest/system/add';
        else
            url += '/rest/system/update';
        if (!form.isValid())return;
        AjaxUtil.doPost({
            url: url,
            jsonData: form.getValues(),
            success: function (response) {
                grid.getViewModel().getStore("restSystemStore").reload();
                win.close();
            }
        });
    },
    /**
     * 查询
     */
    search: function () {
        var store = this.getViewModel().getStore("restSystemStore")
        store.load();
    },
});