Ext.define('hygl.view.main.index.MainIndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainIndexController',
    init: function (application) {
        Ext.Panel = this;
        Ext.Viewport = this.getView();
        Ext.FramePanel = Ext.Viewport.items.items[3];  //主窗口面板
        var me = this;
        window.application = hygl.getApplication();
        this.createMenu();
    },
    /**
     * 创建菜单
     */
    createMenu: function () {
        /*Ext.Ajax.request({
            url: GlobalConst.appDoamin + '/getRoleAutho',
            method: 'POST',
            success: function (response) {
                var menus = Ext.decode(response.responseText);
                var left = ExtUtil.getComponent('mainIndexLeft').getComponent('tree1');
                left.getStore().setData(menus.data);
            }
        });*/
    },
    logout: function () {
        // Remove the localStorage key/value
        // localStorage.removeItem('TutorialLoggedIn');
        // Remove Main View
        this.getView().destroy();
        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    onTreeNavSelectionChange: function (selModel, records) {
        var record = records[0];
        if (record) {
            this.redirectTo(record.getId());
        }
    },
    routes: {
        ':id': 'handleRoute',//执行跳转
    },
    handleRoute: function (id) {
        var me = this,
            treeView = me.getView(),
            treesLeft = treeView.down('indexLeft').down('treepanel'),
            treesCenter = treeView.down('center'),
            store = treesLeft.getStore(),
            node = store.getNodeById(id),
            className, cmp, ViewClass;

        //响应路由，左侧树定位到相应节点
        treesLeft.getSelectionModel().select(node);
        treesLeft.getView().focusNode(node);

        // treesCenter.removeAll(true);
        /* if (node.isLeaf()) {
         //  treesCenter.add(cmp);
         //增加tabpanel
         if (!treesCenter.getComponent('Tab' + id)) {
         className = Ext.ClassManager.getNameByAlias('widget.' + id);
         cmp = Ext.create(className);
         tab = treesCenter.add({
         id: 'Tab' + id,
         glyph: 0xf007,
         scrollable: false,
         closable: true,
         srollable: false,
         closeAction: 'destroy',
         title: node.get('text'),
         items: cmp
         });
         treesCenter.setActiveTab(tab);
         }
         else {
         treesCenter.getComponent("Tab" + id).show();
         treesCenter.setActiveTab("Tab" + id)
         }
         }*/
    },
    onTabRemove: function (tabs, item, index, eOpts) {
        // item.destroy();
        // alert(item.getItems())
        // item.getItems().destroy();
    }
});