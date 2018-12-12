Ext.define('main.index.MainIndexLeft', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainIndexLeft',
    reference: 'mainIndexLeft',
    title: '导航菜单',
    align: 'left',
    layout: 'accordion',
    items: [
        {
            xtype: 'treepanel',
            title: '测试',
            width: 200,
            height: 200,
            lines: true,
            rootVisible: false,
            store: Ext.create('main.index.MainIndexLeftStore', {
                storeId: "leftStoreId"
            }),
            listeners: {
                'itemclick': function (tree, record, item, index, e, eOpts) {
                    var me = this;
                    treeView = me.getView(),
                        treesCenter = Ext.ComponentQuery.query('mainIndexCenter')[0];

                    var node = tree.getStore().getNodeById(record.data.id)
                    if (node.isLeaf()) {
                        //  treesCenter.add(cmp);
                        //增加tabpanel
                        if (!treesCenter.getComponent('Tab' + record.data.id)) {
                            className = Ext.ClassManager.getNameByAlias(record.data.id);
                            // if (Ext.isEmpty(className))return;
                            cmp = Ext.create(record.data.id);
                            tab = treesCenter.add({
                                id: 'Tab' + record.data.id,
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
                            treesCenter.getComponent("Tab" + record.data.id).show();
                            treesCenter.setActiveTab("Tab" + record.data.id)
                        }
                    }
                }
            }
        }, {
            title: '系统管理',
            items: [{
                xtype: 'button', text: '测试',
                handler: function () {
                    var id = 'sysLog'
                    var cmp = Ext.create(id);
                    var treesCenter = Ext.ComponentQuery.query('mainIndexCenter')[0];
                    var tab = treesCenter.add({
                        id: 'Tab' + id,
                        glyph: 0xf007,
                        scrollable: false,
                        closable: true,
                        srollable: false,
                        closeAction: 'destroy',
                        title: '测试',
                        items: cmp
                    });
                    treesCenter.setActiveTab(tab);
                }
            }]
        }
    ]
    ,
    listeners: {
        selectionchange: 'onTreeNavSelectionChange'
    }
});