Ext.define('hygl.view.sys.log.SysLog', {
    extend: 'Ext.grid.Panel',
    alias: 'sysLog',
    xtype: 'sysLog',
    requires: [
        'hygl.view.sys.log.SysLogController',
        'hygl.view.sys.log.SysLogViewModel'
    ],
    viewModel: {
        type: "sys_log_viewmodel"
    },
    bind: {
        store: "{sysLogStore}"
    },
    // store: ExtUtil.createPageStore(GlobalConst.appDoamin + '/sys/log/list', 'hygl.view.sys.log.SysLogModel'),
    title: '日志管理',
    glyph: IconUtil.glyphGrid,
    frame: true,
    height: GlobalConst.frameHeight,
    width: '100%',
    controller: 'sysLogController',
    columns: [{
        xtype: 'rownumberer',
        width: 40
    }, {
        text: '登录账号',
        dataIndex: 'username',
        width: 100,
        sortable: false
    }, {
        text: '用户姓名',
        dataIndex: 'realname',
        width: 100,
        sortable: false
    }, {
        text: '操作时间',
        dataIndex: 'operaDate',
        width: 160,
        sortable: false
    }, {
        text: 'IP',
        dataIndex: 'operaIp',
        width: 120,
        sortable: false
    }, {
        text: '模块名称',
        dataIndex: 'moduleName',
        width: 120,
        sortable: false
    }, {
        text: '操作名称',
        dataIndex: 'operaName',
        width: 80,
        sortable: false
    }, {
        text: '操作url',
        dataIndex: 'operaUrl',
        width: 160,
        sortable: false
    }, {
        text: '参数',
        dataIndex: 'operaParams',
        flex: 1,
        align: 'left',
        sortable: false
    }],
    tbar: ['用户：', {
        xtype: 'textfield',
        itemId: 'txtUserId',
        valueField: 'value',
        displayField: 'content',
        // store: userStore,
        queryMode: 'local',
        width: 180,
        typeAhead: true,
        editable: true
    }, '起始日期:', {
        itemId: 'txtStartDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        value: StringUtil.getBeforeDate(10),
        width: 120
    }, '终止日期:', {
        itemId: 'txtEndDate',
        xtype: 'datefield',
        format: 'Y-m-d',
        value: StringUtil.getToday(),
        width: 120
    }, {
        xtype: 'button',
        glyph: IconUtil.glyphSearch,
        text: '查询',
        handler: 'searchLog'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});