实现工业领域的油灌等液位图形化显示
=

示例代码
-
* html部分

    <div id="yeweitu" class="yeweitu">

    </div>

 * JS部分   
    jQuery(document).ready(function($) {
            var setting = {
                backgroundColor: "red", //液体颜色
            };
            var data = {
                percent: "40%",
            };
            $("#yeweitu").yeweitu(setting, data);
        });