Ext.define('hygl.view.sys.user.SysUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sys_user_controller',
    init: function (application) {
        // Ext.ComponentQuery.query('sysUser')[0].getStore().load();
    },

    onGridRender: function (grid, eOpts) {
        // grid.getStore().load();
    },

    openForm: function (title) {
        var win = Ext.create('sys.user.SysUserWindow');
        win.setTitle(title);
        return win;
    },

    onAddClick: function (btn, e, eOpts) {
        var win = Ext.create('hygl.view.sys.user.SysUserWindow', {
            title: '新增用户'
        });
        var form = win.down('form');
        form.getForm().findField("id").setValue("0");
        form.getForm().findField('roleId').getStore().load();
    },

    updateRec: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('hygl.view.sys.user.SysUserWindow', {title: '修改用户'});
        win.down('form').loadRecord(record);
        win.down('form').getForm().findField('roleId').getStore().load();
        win.show();
    },
    onCancelClick: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },
    deleleRec: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);
        Ext.Msg.confirm('确认删除', '你确定删除该条记录?', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: GlobalConst.appDoamin + '/sys/user/delete',
                    jsonData: {
                        id: record.data.id
                    },
                    success: function (response) {
                        var result = Ext.decode(response.responseText);
                        if (result.success) {
                            Ext.Msg.alert('操作提示', '删除成功', function () {
                                store.reload();
                            });
                        } else {
                            Ext.Msg.alert('操作提示', result.message);
                        }
                    }
                });
            }
        });
    },

    onSaveClick: function (btn, e, eOpts) {
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            grid = Ext.ComponentQuery.query('sysUser')[0],
            store = grid.getStore();
        var id = form.getForm().findField('id').getValue();

        var url = '';
        if (id == 0)
            url = GlobalConst.appDoamin + '/sys/user/add';
        else
            url = GlobalConst.appDoamin + '/sys/user/update';
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
                Ext.Msg.alert('操作提示', action.result.msg)
            }
        });
        win.close();
    }
});