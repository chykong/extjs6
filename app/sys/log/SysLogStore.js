Ext.define('sys.log.SysLogStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.sysLogStore',
    rootData: {
        text: 'Ext JS',
        expanded: true,
        children: [
            {
                text: 'app',
                children: [
                    {leaf: true, text: 'Application.js'}
                ]
            },
            {
                text: 'core',
                children: [
                    {
                        text: 'dom',
                        children: [
                            {leaf: true, text: 'Element.form.js'},
                            {leaf: true, text: 'Element.static-more.js'}
                        ]
                    }
                ]
            }
        ]
    },
    constructor: function (config) {
        // Since records claim the data object given to them, clone the data
        // for each instance.
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});