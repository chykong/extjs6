/**
 * Created by ThinkPad on 2018/12/12.
 */
Ext.define('util.CheckTreeUtil', {
    singleton: true,
    alternateClassName: 'CheckTreeUtil',
    /**
     * checkBoxTree选中事件
     *
     * @param{} node
     * @param{} checked
     */
    checkBoxTreeCheck: function (node, checked) {
        this.nodeChildCheck(node, checked);
        this.nodeParentCheck(node.parentNode, checked);
    },
    nodeChildCheck: function (node, checked) {
        node.checked = checked;
        node.eachChild(function (child) {
            child.set('checked', checked);
            CheckTreeUtil.nodeChildCheck(child, checked);
        });
    },
    nodeParentCheck: function (node, checked) {
        if (node && !node.leaf && checked && node.id != 'root') {
            node.set('checked', checked);
            CheckTreeUtil.nodeParentCheck(node.parentNode, checked);
        }
    },
    /**
     * 把是否变为checkbox
     */
    renderCheckBox: function (value) {
        return '<input type="checkbox"' + (value == 1 ? " checked" : "") + ' style="vertical-align:middle; margin-top:-2px; margin-bottom:-2px;" />';
        // if (value == "1")
        // return "<div class='x-grid-row-checker' style='background-position:0
        // -13px;'>&nbsp;</div>";
        // else
        // return "<div class='x-grid-row-checker'>&nbsp;</div>"
    }
});