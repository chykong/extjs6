Ext.define('util.StringUtil', {
    singleton: true,
    alternateClassName: 'StringUtil',
    getFrameHeight: function () {//获取主页面tab框内高度
        return window.innerHeight - 100;
    },

    formatDate: function (date) {
        return Ext.Date.format(date, 'Y-m-d')
    },
    /**
     * 日期转换为字符串
     * @param date 日期
     * @return 字符串日期(2013-02-27)
     */
    toDateString: function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        if (m < 10) m = "0" + m;
        var d = date.getDate();
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d;
    },
    /**
     * 日期转换为字符串
     * @param  date 日期
     * @return 字符串时间(2013-02-27 17:10:00)
     */
    toTimeString: function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        if (m < 10) m = "0" + m;
        var d = date.getDate();
        if (d < 10) d = "0" + d;
        var h = date.getHours();
        if (h < 10) h = "0" + h;
        var mi = date.getMinutes();
        if (mi < 10) mi = "0" + mi;
        var s = date.getSeconds();
        if (s < 10) s = "0" + s;
        return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
    },
    /**
     * 获取日期差异
     * @param small  开始日期long
     * @param big    结束日期long
     * @return 天
     */
    getDateDiff: function (small, big) {
        return (big - small) / 1000 / 60 / 60 / 24;
    },

    /**
     * 几天以前的日期
     * @param day 天数
     * @return 日期对象
     */
    getBeforeDate1: function (date, day) {
        date == date || new Date();
        return new Date(date.getTime() - 1000 * 60 * 60 * 24 * day);
    },

    /**
     * 几天以前的日期
     * @param day 天数
     * @return 字符串(2013-02-27)
     */
    getBeforeDate: function (day) {
        var date = this.getBeforeDate1(new Date(), day);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        if (m < 10) m = "0" + m;
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d;
    },


    /**
     * 几天以后的日期
     * @param day 天数
     * @return 日期对象
     */
    getAfterDate2: function (day) {
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * day);
    },

    /**
     * 几天以后的日期
     * @param day 天数
     * @return 字符串(2013-02-27)
     */
    getAfterDate: function (day) {
        var date = this.getAfterDate2(new Date(), day);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        if (m < 10) m = "0" + m;
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d;
    },
    /**
     * 获取当前客户端日期
     * @return 日期格式(yyyy-MM-dd)
     */
    getToday: function () {
        return this.toDateString(new Date());
    },

    /**
     * 获取当前客户端时间
     * @return 时间格式(yyyy-MM-dd hh:mm:ss)
     */
    getNow: function () {
        return this.toTimeString(new Date());
    },
    /**
     * 从form中获取字段值
     * @param form
     * @param field
     */
    getFormField: function (form, field) {
        return form.getForm().findField(field).getValue();
    }
    ,
    /**
     * 设置form中获取字段值
     * @param form
     * @param field
     */
    setFormField: function (form, field, value) {
        return form.getForm().findField(field).setValue(value);
    }
    ,

    /**
     * 设置新增窗口标题
     * @param form
     * @param field
     */
    setAddWindowTitle: function (win) {
        win.setTitle('『新增记录』');
    },
    /**
     * 设置修改窗口标题
     * @param form
     * @param field
     */
    setEditWindowTitle: function (win) {
        win.setTitle('『修改记录』');
    },

    /**
     * 删除确认
     * @param options
     */
    confirmDelete: function (options) {
        var check = options.check
        Ext.Msg.confirm('确认删除', '你确定删除该条记录?', function (btn) {
            if (btn == 'yes') {
                check();
            }
        });
    },
    /**
     * 弹出窗口里面有form，关闭窗口，formreset
     * @param options
     */
    windowCancel: function (btn) {
        var win = btn.up('window');
        var form = win.down('form');
        if (form) form.getForm().reset();
        win.close();
    }
});