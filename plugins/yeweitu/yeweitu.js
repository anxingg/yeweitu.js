(function($) {
    $.fn.extend({
        /**
        setting:格式
        var setting{
            backgroundColor:backgroundColor,  //液体颜色
        }
        data:传递到途中的数据，目前仅支持百分比
        var data{
            percent:percent,   //数据百分比
        }
        **/
        "yeweitu": function(setting, data) {
            this.find(".water").css("background-color", setting.backgroundColor);
            this.find(".water").css("height", data.percent);
            return this;
        }
    });
})(jQuery);