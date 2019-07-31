/*\
title: $:/core/modules/catplanet007/embed/embed.js
type: application/javascript
module-type: macro

Macro to return a formatted version of the current time

\*/
(function () {
    "use strict";

    const sources = {
        github: function (typ, a2, a3, a4, a5) {
            // typ=issue/pull, rep, id, 
            if (typ === "issue" || typ === "pull") {
                const rep = a2;
                const id = a3;
                return `
<div class="gh-issue">
''[[${rep} ${typ}/${id}|https://github.com/${rep}/${typ}/${id}]]''
{{$:/core/images/github}}
</div>
`
            }
            // type=link, name, url
            if (typ === "link") {
                const name = a2;
                const url = a3;
                console.log('name:', name);
                console.log('url:', url);
                return `
<div class="gh-issue">
''[[${name}|${url}]]''
{{$:/core/images/github}}
</div>
`
            }
            return;
        },
    }

    exports.name = "embed";

    exports.params = [
        { name: "sourceName" },
        { name: "a1" },
        { name: "a2" },
        { name: "a3" },
        { name: "a4" },
        { name: "a5" },
    ];

    /*
    Run the macro
    */
    exports.run = function (sourceName, a1, a2, a3, a4, a5) {
        try {
            console.log(`sourceName: ${sourceName}, args: ${[a1, a2, a3, a4, a5]}`);
            return sources[sourceName](a1, a2, a3, a4, a5);
        } catch (e) {
            console.log(`call ${sourceName} with args: ${[a1, a2, a3, a4, a5]} panic e: ${e}`);
            return;
        }
    };

})();