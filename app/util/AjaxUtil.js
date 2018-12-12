/**
 * ajax封装工具类
 */
Ext.define('util.AjaxUtil', {
    singleton: true,
    alternateClassName: 'AjaxUtil',
    requires: [],
    token: '11',//localStorage.getItem("my-token"),
    doPost: function (options) {
        var method = options.method || 'POST';
        var jsonData = options.jsonData;
        var success = options.success || this.successProcess;
        var failure = options.failure || this.failureProcess;
        var maskTarget = options.mask || Ext.FramePanel;//ExtUtil.getComponent('mainIndexCenter').getActiveItem();// Ext.FramePanel;
        var headers = {
            "X-AUTH-TOKEN": this.token,
            "Content-Type": 'application/json'
        };
        if (options.headers) {
            Object.assign(headers, options.headers);
        }
        if (!Ext.isEmpty(this.token)) {
            var me = this;
            maskTarget.mask('正在处理中...');
            Ext.Ajax.request({
                url: options.url,
                method: method,
                headers: headers,
                jsonData: jsonData,
                scope: this,
                timeout: 30 * 1000,//超时时间
                success: function (response, opts) {
                    maskTarget.unmask();
                    var returnObj = {};
                    returnObj = JSON.parse(response.responseText);
                    if (!returnObj.success) {//返回操作失败
                        // Ext.Msg.alert('提示：', returnObj.message);
                        failure(returnObj)
                    }
                    else {//操作成功
                        success(returnObj);
                    }
                    /*var status = response.status;
                     var returnObj = {};
                     if (!Ext.isEmpty(response.responseText)) {
                     returnObj = JSON.parse(response.responseText);
                     }
                     if (status >= 200 && status < 300) {
                     success(returnObj, opts);
                     }*/
                },
                failure: me.failProcess
            });
        }
    },
    /**
     * 通用的成功处理方式，页面会定义该方法，如果页面没定义就用该方法
     * @param response
     * @param otps
     */
    successProcess: function (response, otps) {
        console.info("请求成功，返回数据为：", response);
    },
    /**
     * 通用的返回错误处理方法，如果页面没定义，就用该方法
     * @param returnObj
     */
    failureProcess: function (returnObj) {
        Ext.Msg.alert('提示：', returnObj.message);
    },

    /**
     * 请求失败时的处理,超时等系统异常
     * @param response
     * @param opts
     */
    failProcess: function (response, opts) {
        var maskTarget = opts.mask || Ext.FramePanel;
        // var status = response.status;
        // var returnObj = JSON.parse(response.responseText);
        /* if (status >= 400 && status < 500) {
         Ext.Msg.alert('提示：', '您填写的字段格式不正确。');
         console.info("status code:", status, "return data:", returnObj);
         }
         if (status >= 500 && status < 600) {
         Ext.Msg.alert('提示：', '服务器错误。');
         console.info("status code:", status, "return data:", returnObj);
         }
         ;*/
        maskTarget.unmask();
        Ext.Msg.alert('操作提示', '操作失败');
    }
});

