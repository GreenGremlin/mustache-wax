YUI.add("template-gamma", function (Y) {
    Y.namespace("Template")["gamma"] = Y.Handlebars.template(function (Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ];
        helpers = helpers || Handlebars.helpers;
        data = data || {};
        var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;
        if (stack1 = helpers.gamma) {
            stack1 = stack1.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack1 = depth0.gamma;
            stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
        }
        buffer += escapeExpression(stack1) + "\n";
        return buffer;
    });
}, "@VERSION@", {
    requires: [ "handlebars-base" ]
});