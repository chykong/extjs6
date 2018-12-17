Ext.define('hygl.view.main.index.MainIndexTop', {
    extend: 'Ext.toolbar.Toolbar',
    xtype:'top',
    style:'background-color:#35baf6;color:#fff;',
    items:[
        {
            xtype:'label',
            bind:{
                text:'Extjs Learning'
            },
            style:'font-size:20px;font-weight:bold;'
        },'->',
        {
            xtype:'label',
            bind:{
                text:'当前用户：'+'麦豇豆',
            },
        },
    ]

});