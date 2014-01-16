YUI.add("{{prefix}}{{name}}", function (Y) {
    Y.namespace("{{ns}}")["{{name}}"] = Y.Handlebars.template({{{precompiled}}});
}, "@VERSION@", { "requires": ["handlebars-base"] });


YUI.add("{{prefix}}{{name}}", function (Y) {
{{#hasPartials}}
    var partials = [],
        fn = Y.Handlebars.template({{{precompiled}}}),
        templateFn = fn;
    
    Y.Array.each({{stringifiedPartials}}, function (partialName) {
        var partial = Y.namespace("{{ns}}")["{{prefix}}" + partialName];

        if (partial) {
            partials[partialName] = partial;
        }
    });

    templateFn = function (data) {
        return fn(data, {
            partials: partials
        });
    };
    Y.namespace("{{ns}}")["{{name}}"] = templateFn;
{{/hasPartials}}
{{^hasPartials}}
    Y.namespace("{{ns}}")["{{name}}"] = Y.Handlebars.template({{{precompiled}}});
{{/hasPartials}}

}, "@VERSION@", { "requires": {{dependencies}} });
