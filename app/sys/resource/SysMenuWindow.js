/**
 * 资源管理左侧菜单form
 */
Ext.define('sys.resource.SysMenuWindow', {
    extend: 'Ext.window.Window',
    alias: 'sysMenuWindow',
    requires: ['util.ux.TreePicker'],
    controller: 'sysResourceController',
    height: 440,
    width: 600,
    modal: true,
    glyph: IconUtil.glyphWindow,
    title: '菜单信息',
    autoShow: true,
    buttonAlign: 'center',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            width: '100%',
            defaultType: 'textfield',
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: 'qtip',
                anchor: '100%'
            },
            items: [
                {
                    name: 'id',
                    xtype: 'hiddenfield'
                }, {
                    name: 'type',
                    xtype: 'hiddenfield',
                    value: 1
                }, {
                    name: 'name',
                    fieldLabel: '模块名称',
                    maxLength: 20,
                    maxLengthText: '不能超过20个字符',
                    allowBlank: false
                }, {
                    xtype: 'treepicker',
                    fieldLabel: '上级节点',
                    name: 'parentId',
                    rootVisible: false,
                    useArrows: true,
                    displayField: 'text',
                    emptyText: '请选择...',
                    allowBlank: false,
                    forceSelection: true,
                    store: Ext.create('Ext.data.TreeStore', {
                        id: 'parentIdStore',
                        fields: ['id', 'text', 'parentId'],
                        root: {
                            id: -1,
                            expanded: false
                        },
                        proxy: {
                            type: 'ajax',
                            actionMethods: {
                                read: 'POST'
                            },
                            url: GlobalConst.appDoamin+ '/sys/resource/getMenuComboboxTree'
                        },
                        autoLoad: false
                    }),
                    value: 0
                }, {
                    name: 'code',
                    fieldLabel: '模块代码',
                    allowBlank: false
                }, {
                    name: 'url',
                    fieldLabel: '模块链接',
                    allowBlank: false
                }, {
                    name: 'target',
                    fieldLabel: '链接目标',
                    allowBlank: false,
                    value: 'main',
                    xtype: 'combobox',
                    valueField: 'value',
                    displayField: 'content',
                    store: StoreUtil.createComboStore2('main:main;blank:blank')
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    margin: '0 0 5 0',
                    items: [{
                        name: 'iconImg',
                        fieldLabel: '图标',
                        id: 'iconImg',
                        allowBlank: false
                    }, {
                        xtype: 'button',
                        text: '选择',
                        handler: function () {
                            //iconWin.show();
                        }
                    }]
                }, {
                    name: 'displayOrder',
                    fieldLabel: '排序',
                    allowBlank: false,
                    regex: /^\d+$/
                }
            ]
        }
    ],
    buttons: [
        {
            xtype: 'button',
            text: '保存',
            itemId: 'save',
            glyph: IconUtil.glyphSave,
            handler: 'onSaveMenuClick'
        }, {
            xtype: 'button',
            text: '取消',
            itemId: 'cancel',
            glyph: IconUtil.glyphClose,
            handler: 'onCancelMenuClick'
        }
    ]
});