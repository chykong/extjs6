Ext.define('hygl.view.sys.resource.SysResourceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysResourceController',
    init: function (application) {
        // Ext.ComponentQuery.query('sysMenu')[0].getStore().load();
    },

    onGridRender: function (grid, eOpts) {
        // grid.getStore().load();
    },

    openForm: function (title) {
        var win = Ext.create('hygl.view.sys.resource.SysResourceForm');
        win.setTitle(title);
        return win;
    },

    /**
     * 新增菜单
     * @param btn
     * @param e
     * @param eOpts
     */
    onAddMenuClick: function (btn, e, eOpts) {
        var win = Ext.create('hygl.view.sys.resource.SysMenuWindow');
        win.setTitle('新增');
        var form = win.down('form');
        form.getForm().findField("id").setValue("0");
        form.getForm().findField('parentId').getStore().load();
    },
    /**
     * 修改菜单
     * @param btn
     * @param e
     * @param eOpts
     */
    onEditMenuClick: function (btn, e, eOpts) {
        var grid = btn.up('treepanel');
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;
        var win = Ext.create('hygl.view.sys.resource.SysMenuWindow');
        win.setTitle('修改');
        var form = win.down('form');
        form.getForm().findField('parentId').getStore().load();
        form.loadRecord(record);
    },
    onSearchClick: function (btn, e, eOpts) {
        // this.openForm('Novo Contato');
        var treeGrid = btn.up('treepanel');
        treeGrid.getStore().load();
    },
    onRowClick: function (grid, record, rowIndex, e) {
        if (record.data.id == null)
            return;
        var functionGrid = Ext.ComponentQuery.query('sysFunction')[0]
        functionGrid.getStore().load({
            params: {
                parentId: record.data.id
            }
        })
    },
    /**
     * 保存menu
     * @param btn
     * @param e
     * @param eOpts
     */
    onSaveMenuClick: function (btn, e, eOpts) {
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            grid = Ext.ComponentQuery.query('sysMenu')[0],
            store = grid.getStore();
        var id = form.getForm().findField('id').getValue();

        var url = '';
        if (id == 0)
            url = GlobalConst.appDoamin + '/sys/resource/add';
        else
            url = GlobalConst.appDoamin + '/sys/resource/update';
        var data = form.getValues();
        if (!form.isValid())return;
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            waitMsg: '提交中',
            jsonData: data,
            success: function () {
                store.reload();
                win.hide();
            },
            failure: function () {
                Ext.Msg.alert('操作提示', action.result.message)
            }
        });
        win.close();
    },
    /**
     * 删除菜单
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDeleteMenuClick: function (btn, e, eOpts) {
        var grid = btn.up('treepanel');
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;
        Ext.Msg.confirm('确认删除', '你确定删除该条记录?', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: GlobalConst.appDoamin + '/sys/resource/delete',
                    jsonData: {
                        id: record.data.id
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success) {
                            Ext.Msg.alert('操作提示', '删除成功', function () {
                                grid.getStore().reload();
                            });
                        } else {
                            Ext.Msg.alert('操作提示', result.message);
                        }
                    }
                });
            }
        });
    },
    /**
     * 取消menu
     * @param btn
     * @param e
     * @param eOpts
     */
    onCancelMenuClick: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

    /***************功能相关操作*************************/
    /**
     * 新增功能
     * @param btn
     * @param e
     * @param eOpts
     */
    onAddFunctionClick: function (btn, e, eOpts) {
        var grid = Ext.ComponentQuery.query('sysMenu')[0]
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;

        var win = Ext.create('hygl.view.sys.resource.SysFunctionWindow');
        win.setTitle('新增');
        var form = win.down('form');
        form.getForm().findField("id").setValue("0");
        form.getForm().findField("parentId").setValue(record.get('id'));
    },
    /**
     * 修改菜单
     * @param btn
     * @param e
     * @param eOpts
     */
    onEditFunctionClick: function (btn, e, eOpts) {
        var grid = btn.up('grid');
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;
        var win = Ext.create('hygl.view.sys.resource.SysFunctionWindow');
        win.setTitle('修改');
        var form = win.down('form');
        form.loadRecord(record);
    },

    /**
     * 保存Function
     * @param btn
     * @param e
     * @param eOpts
     */
    onSaveFunctionClick: function (btn, e, eOpts) {
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            grid = Ext.ComponentQuery.query('sysFunction')[0],
            store = grid.getStore();
        var id = form.getForm().findField('id').getValue();

        var url = '';
        if (id == 0)
            url = GlobalConst.appDoamin + '/sys/resource/add';
        else
            url = GlobalConst.appDoamin+ '/sys/resource/update';
        var data = form.getValues();
        if (!form.isValid())return;
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            waitMsg: '提交中',
            jsonData: data,
            success: function () {
                store.reload();
                win.hide();
            },
            failure: function () {
                Ext.Msg.alert('操作提示', action.result.message)
            }
        });
        win.close();
    },
    /**
     * 删除Function
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDeleteFunctionClick: function (btn, e, eOpts) {
        var grid = btn.up('grid');
        var record = grid.getSelectionModel().getLastSelected();
        if (!record)return;
        Ext.Msg.confirm('确认删除', '你确定删除该条记录?', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: GlobalConst.appDoamin + '/sys/resource/delete',
                    jsonData: {
                        id: record.data.id
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success) {
                            Ext.Msg.alert('操作提示', '删除成功', function () {
                                grid.getStore().reload();
                            });
                        } else {
                            Ext.Msg.alert('操作提示', result.message);
                        }
                    }
                });
            }
        });
    },
    /**
     * 取消Function
     * @param btn
     * @param e
     * @param eOpts
     */
    onCancelFunctionClick: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

});