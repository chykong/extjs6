Ext.define('sys.role.SysRoleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysRoleController',
    requires: ['util.CheckTreeUtil'],
    init: function (application) {
        // ExtUtil.getComponent('sysRole').getStore().load();
    },
    beforeRender: function () {
    },
    /*  onGridRender: function (grid, eOpts) {
     grid.getStore().load();
     },*/

    /**
     * 新增记录
     * @param btn
     * @param e
     * @param eOpts
     */
    onAddClick: function (btn, e, eOpts) {
        var win = Ext.create('sys.role.SysRoleWindow');
        StringUtil.setAddWindowTitle(win);
        var form = win.down('form');
        StringUtil.setFormField(form, 'id', '0');
    },

    /**
     * 修改选中记录
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    updateRec: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);
        var win = Ext.create('sys.role.SysRoleWindow');
        StringUtil.setEditWindowTitle(win);
        var form = win.down('form');
        form.loadRecord(record);
    },

    /**
     * 删除选中记录
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    deleleRec: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = store.getAt(rowIndex);
        StringUtil.confirmDelete({
            check: function () {
                AjaxUtil.doPost({
                    url: GlobalConst.appDoamin + '/sys/role/delete',
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
     * 弹出窗口点击保存
     * @param btn
     * @param e
     * @param eOpts
     */
    onSaveClick: function (btn, e, eOpts) {
        var win = btn.up('window'),
            form = win.down('form'),
            grid = ExtUtil.getComponent('sysRole'),
            store = grid.getStore();
        var url = GlobalConst.appDoamin;
        if (StringUtil.getFormField(form, 'id') == 0)
            url += '/sys/role/add';
        else
            url += '/sys/role/update';
        if (!form.isValid())return;
        AjaxUtil.doPost({
            url: url,
            jsonData: form.getValues(),
            success: function (response) {
                store.reload();
                win.hide();
            }
        });
    },
    /**
     * 左侧角色列表点击，右侧展示对应权限
     * @param grid
     * @param record
     * @param rowIndex
     * @param e
     */
    onRowClick: function (grid, record, rowIndex, e) {
        if (record.data.id == null)
            return;
        var authorityGrid = Ext.ComponentQuery.query('sysRoleAuthority')[0]
        authorityGrid.getStore().load({
            params: {
                roleId: record.data.id
            }
        })
    },

    /**
     * 右侧checkbox选中事件
     * @param node
     * @param checked
     */
    onCheckchange: function (node, checked) {
        CheckTreeUtil.checkBoxTreeCheck(node, checked);
    },

    // 把按钮转换成checkbox
    renderButtonCheck: function (val) {
        if (val == '')
            return '';
        var checkArr = new Array();
        checkArr = val.split(",");
        var ret = "";
        for (var i = 0; i < checkArr.length; i++) {
            var butArr = new Array();
            butArr = checkArr[i].split("@");
            ret += "<input type='checkbox' name='chkButton' value='" + butArr[0] + "' id='chkButton" + butArr[0]
                + "' style='vertical-align:middle; margin-top:-2px; margin-bottom:-2px;'";
            if (butArr[2] == '1') {
                ret += " checked";
            }
            ret += " />" + butArr[1]
        }
        return ret;
    },
    /**
     * 保存角色对应权限
     *
     */
    saveRoleAuthority: function () {
        var roleGrid = ExtUtil.getComponent('sysRoleGrid'),
            store = roleGrid.getStore(),
            roleAuthority = ExtUtil.getComponent('sysRoleAuthority');
        var roleRecord = roleGrid.getSelectionModel().getLastSelected();
        if (!roleRecord)
            return;
        var records = roleAuthority.getView().getChecked(), names = [];
        // 为存储ID而创建数组
        ids = [];
        functionId = [];
        Ext.Array.each(records, function (rec) {
            names.push(rec.get('text'));
            ids.push(rec.get('id'));
            // 将选中的节点的ID保存
        });
        var chkButtonArr = document.getElementsByName('chkButton');
        for (var i = 0; i < chkButtonArr.length; i++) {
            if (chkButtonArr[i].checked)
                functionId.push(chkButtonArr[i].value)
        }

        AjaxUtil.doPost({
            url: GlobalConst.appDoamin + '/sys/role/updateRoleAuthority',
            jsonData: {
                menuList: ids.join('@@'),
                roleId: roleRecord.data.id,
                functionList: functionId.join("@@")
            },
            success: function (response) {
                Ext.Msg.alert('操作提示', '权限设置成功');
            }
        });
    },
    selectAll: function () {
        var chkButtonArr = document.getElementsByName('chkButton');
        for (var i = 0; i < chkButtonArr.length; i++) {
            chkButtonArr[i].checked = true;
        }
    }
});