YUI.add("template-alpha", function (Y) {
    Y.namespace("Template")["alpha"] = Y.Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.alpha) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.alpha; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  });
}, "@VERSION@", { "requires": ["handlebars-base"] });
