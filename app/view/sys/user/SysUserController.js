Ext.define('hygl.view.sys.user.SysUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sys_user_controller',
    init: function (application) {
    },

    add: function (btn, e, eOpts) {
        var win = Ext.create('hygl.view.sys.user.SysUserWindow', {
            title: '新增用户'
        });
        var form = win.down('form');
        form.getForm().findField("id").setValue("0");
        this.getViewModel().getStore("sysUserRoleStore").load();
    },

    edit: function (grid, rowIndex, colIndex) {
        var record = grid.getStore().getAt(rowIndex);
        var win = Ext.create('hygl.view.sys.user.SysUserWindow', {title: '修改用户'});
        win.down('form').loadRecord(record);
        this.getViewModel().getStore("sysUserRoleStore").load();
    },
    delete: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);

        StringUtil.confirmDelete({
            check: function () {
                AjaxUtil.doPost({
                    url: GlobalConst.appDoamin + '/sys/user/delete',
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

    save: function (btn, e, eOpts) {
        var win = btn.up('window'),
            form = win.down('form'),
            grid = Ext.ComponentQuery.query('sysUser')[0];
        id = form.getForm().findField('id').getValue();
        var url = GlobalConst.appDoamin;
        if (StringUtil.getFormField(form, 'id') == 0)
            url += '/sys/user/add';
        else
            url += '/sys/user/update';
        if (!form.isValid())return;
        AjaxUtil.doPost({
            url: url,
            jsonData: form.getValues(),
            success: function (response) {
                grid.getViewModel().getStore("sysUserStore").reload();
                win.close();
            }
        });
    },
    //userStore加载前赋参数
    beforeload: function (store) {
        var grid = ExtUtil.getComponent('sysUser'),
            data = grid.getViewModel().getData();
        Ext.apply(store.proxy.extraParams, {
            username: data.searchField.username,
            status: data.searchField.status
        });
    },
    /**
     * 查询
     */
    search: function () {
        var store = this.getViewModel().getStore("sysUserStore")
        store.load();
    },
    /**
     * 清空
     */
    clear: function () {
        // var grid = ExtUtil.getComponent('sysUser'),
        //     toolbar = ExtUtil.getToolbar(grid);
        // ExtUtil.clearToolbarItem(toolbar, 'txtUsername');
        // ExtUtil.clearToolbarItem(toolbar, 'cmbStatus');
        this.getViewModel().setData({
            searchField: {
                txtUsername: '',
                status: ''
            }
        })
    },
    /**
     * 用户状态渲染
     * @param val
     * @returns {string}
     */
    renderStatus: function (val) {
        if (val == 0)
            return '<span style="color:' + "green" + ';">' + '正常' + '</span>';
        else if (val == 1)
            return '<span style="color:' + "orange" + ';">' + '锁定' + '</span>';
    }
});