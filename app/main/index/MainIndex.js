Ext.define('main.index.MainIndex', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainIndex',
    requires: ['main.index.MainIndexController',
        'main.index.MainIndexModel',
        'Ext.ux.TabCloseMenu'
    ],
    referenceHolder: true,
    layout: 'border',
    plugins: 'viewport',
    defaults: {
        collapsible: true,
        split: true
    },
    controller: 'mainIndexController',
    viewModel: 'mainIndexModel',
    items: [
        {
            xtype: 'top',
            region: 'north',
            collapsible: false,
            split: false,
            height: 50,
            // items: [{
            //     xtype: 'button',
            //     text: '注销',
            //     iconCls: 'x-fa fa-power-off',
            //     handler: 'onClickButton'
            // }]
        },
        {
            xtype: 'mainIndexLeft',
            region: 'west',
            width: 220
        },
        /* {
         region: 'east',
         width: 200,
         bind: {
         html: '右'
         }
         },*/
        {
            reference: 'mainIndexCenter',
            xtype: 'mainIndexCenter',
            region: 'center',
            collapsible: false,
            split: false
        }
    ]
});