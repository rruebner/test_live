odoo.define('website_sale_info.sale_info', function (require) {
    "use strict";

    var ajax = require('web.ajax');
    var base = require('web_editor.base');
    var Widget = require('web.Widget');

    var SaleInfo = Widget.extend({
        template: 'WebsiteSaleInfoModal',
        init: function () {
            this._super();
        },
        start: function () {
            var self = this;
        },
    });

    base.ready().done(function(){
        var si = new SaleInfo();
    });

    return SaleInfo;

});