(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n(0),r=n.n(a),o=(n(159),n(157)),s=Object(o.a)("div",{target:"e10agvck0"})({name:"buwj3o",styles:'padding:2em;font-family:"PT Mono";background:#242424;color:#ddddcc;code{font-family:"PT Mono";color:#639db1;}'}),c={name:"nq4fwr",styles:"& >:first-child{margin-top:1em;}& >:last-child{margin-bottom:1em;}"},l={name:"ncd0q6",styles:"color:#8ac6f2;"},u={name:"1wz9506",styles:"color:#95e454;"},j={name:"1ua7ycq",styles:"color:#f08080;"},d=Object(o.a)("div",{target:"e10agvck1"})({name:"11fcatr",styles:'margin-top:1em;margin-bottom:0.5em;font-family:"Open Sans";'}),g=function(e){var t=e.description,n=e.children;return Object(i.jsx)(r.a.Fragment,null,t&&Object(i.jsx)(d,null,t),n)},p=function(e){var t=e.name,n=e.children;return Object(i.jsx)("div",null,Object(i.jsx)("div",null,t&&Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)("span",{css:l},'"',t,'"'),": "),"["),Object(i.jsx)("div",{style:{paddingLeft:"2em"}},n),Object(i.jsx)("div",null,t?"],":"]"))},M=function(e){var t=e.name,n=e.children,a=e.margin;return Object(i.jsx)("div",null,Object(i.jsx)("div",null,t&&Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)("span",{css:l},'"',t,'"'),": "),"{"),Object(i.jsx)("div",{style:{paddingLeft:"2em"},css:a?c:null},n),Object(i.jsx)("div",null,t?"},":"}"))},L=function(e){var t=e.placeholder;return Object(i.jsx)("div",null,Object(i.jsx)("span",{css:u},JSON.stringify(t)),",")},y=function(e){var t=e.name,n=e.margin,a=e.description,o=e.children;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(g,{description:a},Object(i.jsx)(M,{name:t,margin:n},o)))},m=function(e){var t=e.name,n=e.description,a=e.children;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(g,{description:n},Object(i.jsx)(p,{name:t},a)))},x=function(e){var t=e.name,n=e.placeholder,a=e.description;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(g,{description:a},Object(i.jsx)("div",null,Object(i.jsx)("span",{css:l},'"',t,'"'),": ",Object(i.jsx)("span",{css:u},JSON.stringify(n)),",")))},f=function(e){var t=e.name,n=e.placeholder,a=e.description;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(g,{description:a},Object(i.jsx)("div",null,Object(i.jsx)("span",{css:l},'"',t,'"'),": ",Object(i.jsx)("span",{css:j},n),",")))},h=n(173);t.default=function(){return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(h.a,null,Object(i.jsx)(s,null,Object(i.jsx)(M,{margin:!0},Object(i.jsx)(x,{name:"name",placeholder:"@scope/name",description:Object(i.jsx)(r.a.Fragment,null,"The name of the package. Used to identify it accross the application, especially amongst multiple workspaces. The first part of the name (here ",Object(i.jsx)("code",null,"@scope/"),") is optional and is used as a namespace).")}),Object(i.jsx)(x,{name:"version",placeholder:"1.2.3",description:Object(i.jsx)(r.a.Fragment,null,"The version of the package. Usually doesn't have any impact on your project, except when it is a workspace - then its version must match the specified ranges for the workspace to be selected as resolution candidate.")}),Object(i.jsx)(f,{name:"private",placeholder:"true",description:Object(i.jsx)(r.a.Fragment,null,"If true, the package is considered private and Yarn will refuse to publish it regardless of the circumstances. Setting this flag also unlocks some features that wouldn't make sense in published packages, such as workspaces.")}),Object(i.jsx)(x,{name:"license",placeholder:"MIT",description:Object(i.jsx)(r.a.Fragment,null,"An SPDX identifier that indicates under which license is your package distributed. Note that the default license can be set via the ",Object(i.jsx)("code",null,"initLicense")," settings.")}),Object(i.jsx)(x,{name:"languageName",placeholder:"node",description:Object(i.jsx)(r.a.Fragment,null,"An enumeration used by the linker plugins to figure which linker should install a specific package. Only some values are allowed, consult the documentation to know more.")}),Object(i.jsx)(y,{name:"bin",description:Object(i.jsx)(r.a.Fragment,null,"A field used to expose some executable Javascript files to the parent package. Any entry listed here will be made available through the ",Object(i.jsx)("code",null,"$PATH"),". Note that it is very advised to only expose Javascript files for portability reasons (shell scripts require the user to have a specific shell, and are incompatibles with zip access).")},Object(i.jsx)(x,{name:"my-bin",placeholder:"./dist/my-bin.js"})),Object(i.jsx)(y,{name:"scripts",description:Object(i.jsx)(r.a.Fragment,null,"A field used to list small shell scripts that will be executed when running ",Object(i.jsx)("code",null,"yarn run"),". Scripts are by default executed by a miniature shell, so some advanced features might not be available (if you have more complex needs, we recommend you to just execute a Javascript file). Note that scripts containing ",Object(i.jsx)("code",null,":")," (the colon character) are globals to your project and can be called regardless of your current workspace. Finally, be aware that scripts are always executed relative to the closest workspace (never the cwd).")},Object(i.jsx)(x,{name:"test",placeholder:"jest"}),Object(i.jsx)(x,{name:"build",placeholder:"webpack-cli --config ./webpack.config.js"}),Object(i.jsx)(x,{name:"count-words",placeholder:'echo "$@" | wc -w'})),Object(i.jsx)(y,{name:"dependencies",description:Object(i.jsx)(r.a.Fragment,null,"The set of dependencies that must be made available to the current package in order for it to work properly. Consult the list of supported ranges for more information.")},Object(i.jsx)(x,{name:"webpack",placeholder:"^5.0.0"})),Object(i.jsx)(y,{name:"devDependencies",description:Object(i.jsx)(r.a.Fragment,null,"Similar to the ",Object(i.jsx)("code",null,"dependencies"),' field, except that these dependencies are only installed on local installs and will never be installed by the consumers of your package. Note that because that would lead to different install trees depending on whether the install is made in "production" or "development" mode, Yarn doesn\'t offer a way to prevent the installation of dev dependencies at the moment.')},Object(i.jsx)(x,{name:"webpack",placeholder:"^5.0.0"})),Object(i.jsx)(y,{name:"peerDependencies",description:Object(i.jsx)(r.a.Fragment,null,"Peer dependencies are inherited dependencies - the consumer of your package will be tasked to provide them. This is typically what you want when writting plugins, for example. Be careful: listing peer dependencies will have side effects on the way your package will be executed by your consumers. Check the documentation for more information.")},Object(i.jsx)(x,{name:"react",placeholder:"*"}),Object(i.jsx)(x,{name:"react-dom",placeholder:"*"})),Object(i.jsx)(m,{name:"workspaces",description:Object(i.jsx)(r.a.Fragment,null,"Workspaces are an optional feature used by monorepos to split a large project into semi-independent subprojects, each one listing their own set of dependencies. The ",Object(i.jsx)("code",null,"workspaces")," field is a list of glob pattern that match all directories that should become workspaces of your application.")},Object(i.jsx)(L,{placeholder:"packages/*"})),Object(i.jsx)(y,{name:"dependenciesMeta",description:Object(i.jsx)(r.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(i.jsx)("code",null,"dependencies")," and ",Object(i.jsx)("code",null,"devDependencies")," field. In the context of a workspaced project most of these settings will affect ",Object(i.jsx)("em",null,"all workspaces")," and as such must be specified at the ",Object(i.jsx)("em",null,"root")," of the project (except if noted otherwise, the ",Object(i.jsx)("code",null,"dependenciesMeta")," field will be ignored if found within a workspace).")},Object(i.jsx)(y,{name:"fsevents",margin:!0},Object(i.jsx)(f,{name:"built",placeholder:"false",description:Object(i.jsx)(r.a.Fragment,null,"If false, the package will never be built. When the global settings ",Object(i.jsx)("code",null,"enableScripts")," is toggled off, setting this additional flag will also downgrade the warning into a simple notice for this specific package.")}),Object(i.jsx)(f,{name:"unplugged",placeholder:"true",description:Object(i.jsx)(r.a.Fragment,null,"If true, the specified package will be automatically unplugged at install time. This should only be needed for packages that contain scripts in other languages than Javascript (for example ",Object(i.jsx)("code",null,"nan")," contains C++ headers).")}))),Object(i.jsx)(y,{name:"peerDependenciesMeta",description:Object(i.jsx)(r.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(i.jsx)("code",null,"peerDependencies")," field.")},Object(i.jsx)(y,{name:"react-dom",margin:!0},Object(i.jsx)(f,{name:"optional",placeholder:"true",description:Object(i.jsx)(r.a.Fragment,null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error.")}))),Object(i.jsx)(y,{name:"dependenciesMeta",description:Object(i.jsx)(r.a.Fragment,null,"This field allows you to instruct Yarn to use a specific resolution instead of anything the resolver would normally pick. This is useful to enforce all your packages to use a single version of a dependency, or backport a fix. The syntax for the resolution key accepts one level of specificity, so all the following examples are correct.")},Object(i.jsx)(x,{name:"relay-compiler",placeholder:"3.0.0"}),Object(i.jsx)(x,{name:"webpack/memory-fs",placeholder:"0.4.1"}),Object(i.jsx)(x,{name:"@babel/core/json5",placeholder:"2.1.0"}),Object(i.jsx)(x,{name:"@babel/core/@babel/generator",placeholder:"7.3.4"}),Object(i.jsx)(x,{name:"@babel/core@npm:7.0.0/@babel/generator",placeholder:"7.3.4"}),Object(i.jsx)(x,{name:"@babel/core/@npm:babel/generator@npm:^7.0.0",placeholder:"7.3.4"}))))))}},155:function(e,t,n){e.exports=n(165)()},156:function(e,t,n){var i;e.exports=(i=n(161))&&i.default||i},157:function(e,t,n){"use strict";var i=n(0),a=n(59),r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(a.a)(function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=n(57),c=n.n(s),l=n(9),u=n(78),j=n(34),d=o,g=function(e){return"theme"!==e&&"innerRef"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:g};t.a=function e(t,n){var a,r,o;void 0!==n&&(a=n.label,o=n.target,r=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,d=s&&t.__emotion_base||t;"function"!=typeof r&&s&&(r=t.__emotion_forwardProp);var g=r||p(d),M=!g("as");return function(){var L=arguments,y=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&y.push("label:"+a+";"),null==L[0]||void 0===L[0].raw)y.push.apply(y,L);else{y.push(L[0][0]);for(var m=L.length,x=1;x<m;x++)y.push(L[x],L[0][x])}var f=Object(l.withEmotionCache)(function(e,t,n){return Object(i.createElement)(l.ThemeContext.Consumer,null,function(a){var s=M&&e.as||d,c="",l=[],L=e;if(null==e.theme){for(var m in L={},e)L[m]=e[m];L.theme=a}"string"==typeof e.className&&(c+=Object(u.getRegisteredStyles)(t.registered,l,e.className));var x=Object(j.serializeStyles)(y.concat(l),t.registered,L);Object(u.insertStyles)(t,x,"string"==typeof s),c+=t.key+"-"+x.name,void 0!==o&&(c+=" "+o);var f=M&&void 0===r?p(s):g,h={};for(var b in e)M&&"as"===b||f(b)&&(h[b]=e[b]);return h.className=c,h.ref=n||e.innerRef,Object(i.createElement)(s,h)})});return f.displayName=void 0!==a?a:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=d,f.__emotion_styles=y,f.__emotion_forwardProp=r,Object.defineProperty(f,"toString",{value:function(){return"."+o}}),f.withComponent=function(t,i){return e(t,void 0!==i?c()({},n||{},i):n).apply(void 0,y)},f}}},158:function(e,t,n){"use strict";n.d(t,"b",function(){return j});var i=n(9),a=n(0),r=n.n(a),o=n(4),s=n.n(o),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(156);var u=r.a.createContext({}),j=function(e){return Object(i.jsx)(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(i.jsx)("div",null,"Loading (StaticQuery)")})};j.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},159:function(e,t,n){var i=n(25).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||n(18)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},160:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Home",link:"/"},{name:"Getting started",link:"/getting-started"},{name:"Configuration",link:"/configuration"},{name:"Features",link:"/features"}]}}}}},161:function(e,t,n){"use strict";n.r(t);n(56);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(58),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTE1NC44IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTcxOC42IDI1Ny44Yy04IDI3LjYtMjAuOCA0Ny42LTM1LjIgNjMuNlYxODFjMC05LjYtOC40LTE3LjYtMjEuNi0xNy42LTUuNiAwLTEwLjQgMi44LTEwLjQgNi44IDAgMi44IDEuNiA1LjIgMS42IDEyLjh2NjQuNGMtNC44IDI4LTE2LjggNTQtMzIuOCA1NC0xMS42IDAtMTguNC0xMS42LTE4LjQtMzMuMiAwLTMzLjYgNC40LTUxLjIgMTEuNi04MC44IDEuNi02IDEzLjItMjItNi40LTIyLTIxLjIgMC0xOC40IDgtMjEuMiAxNC44IDAgMC0xMy40IDQ3LjYtMTMuNCA5MCAwIDM0LjggMTQuNiA1Ny42IDQxLjQgNTcuNiAxNy4yIDAgMjkuNi0xMS42IDM5LjItMjcuNlYzNTFjLTI2LjQgMjMuMi00OS42IDQzLjYtNDkuNiA4NCAwIDI1LjYgMTYgNDYgMzguNCA0NiAyMC40IDAgNDEuNi0xNC44IDQxLjYtNTYuOFYzNTVjMjEuNi0xOC44IDQ0LjgtNDIuNCA1OC40LTg4LjguNC0xLjYuNC0zLjYuNC00IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTcuMiAzLjYtOS42IDEyem0tNzYuOCAxOThjLTYuNCAwLTEwLjQtOS42LTEwLjQtMjIgMC0yNCA4LjgtMzkuMiAyMS42LTUyLjR2NDIuOGMwIDcuNiAxLjYgMzEuNi0xMS4yIDMxLjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTgzMy40IDMwMWMtOS42IDAtMTMuNi05LjYtMTMuNi0xOC40di02NmMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHY2MS42Qzc4NSAyOTEuNCA3NzcuOCAzMDEgNzY3IDMwMWMtMTQgMC0yMi44LTEyLTIyLjgtMzIuOCAwLTU3LjYgMzUuNi04My42IDY2LTgzLjYgNCAwIDggLjggMTEuNi44IDQgMCA1LjItMi40IDUuMi05LjIgMC0xMC40LTcuNi0xNi44LTE4LjQtMTYuOC00OC44IDAtOTUuMiA0MC44LTk1LjIgMTA3LjYgMCAzNCAxNi40IDYwLjQgNDcuNiA2MC40IDE1LjIgMCAyNi40LTcuMiAzNC40LTE2LjQgNiA5LjYgMTYuOCAxNi40IDMwLjggMTYuNCAzNC40IDAgNTAuNC0zNiA1Ny4yLTYyLjQuNC0xLjYuNC0yLjQuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjggNDMuMi0yNi44IDQzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk0OSAzMjcuNGMzNC40IDAgNTAtMzYgNTcuMi02Mi40IDAtLjguNC0xLjYuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjQgNDMuMi0yOC44IDQzLjItMTAuOCAwLTE2LTEwLjQtMTYtMjEuNiAwLTQwIDE4LTg3LjIgMTgtOTIgMS42LTkuMi0xNC40LTIyLjQtMTkuMi0yMi40aC0yMC44Yy00IDAtOCAwLTIxLjItMS42LTQuNC0xNi40LTE1LjYtMjEuMi0yNS4yLTIxLjItMTAuNCAwLTIwIDcuMi0yMCAxOC40IDAgMTEuNiA3LjIgMjAgMTcuMiAyNS42LS40IDIwLjQtMiA1My42LTYuNCA2OS42LTMuNiAxMy42IDE3LjIgMjggMjIuNCAxMS4yIDcuMi0yMy4yIDkuNi01OCAxMC03My42aDM0LjhjLTEyLjggMzQuNC0yMCA2Mi44LTIwIDg4LjQgMCAzNS4yIDIyLjQgNDUuNiA0MS4yIDQ1LjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk4NC42IDMwOS44YzAgMTQuOCAxMS4yIDE3LjYgMTkuMiAxNy42IDExLjYgMCAxMS4yLTkuNiAxMS4yLTE3LjJ2LTU4LjRjMi44LTMxLjYgMjcuNi02NiAzOS4yLTY2IDcuNiAwIDguNCAxMC40IDguNCAyMi44djgxLjJjMCAyMC40IDEyLjQgMzcuNiAzMy42IDM3LjYgMzQuNCAwIDUxLjQtMzYgNTguMi02Mi40LjQtMS42LjQtMi40LjQtMi44IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTggMy42LTkuNiAxMi0zLjYgMTcuNi0xMS44IDQzLjItMjcuOCA0My4yLTEwLjQgMC0xMC40LTE0LjgtMTAuNC0xOC40di04Mi44YzAtMTguNC02LjQtNDAuNC0zMy4yLTQwLjQtMTkuNiAwLTM0IDE3LjItNDQuOCAzOS42di0xOGMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHYxMjYuOHpNMjU5IDBjMTQzIDAgMjU5IDExNiAyNTkgMjU5UzQwMiA1MTggMjU5IDUxOCAwIDQwMiAwIDI1OSAxMTYgMCAyNTkgMHoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDM1LjIgMzM3LjVjLTEuOC0xNC4yLTEzLjgtMjQtMjkuMi0yMy44LTIzIC4zLTQyLjMgMTIuMi01NS4xIDIwLjEtNSAzLjEtOS4zIDUuNC0xMyA3LjEuOC0xMS42LjEtMjYuOC01LjktNDMuNS03LjMtMjAtMTcuMS0zMi4zLTI0LjEtMzkuNCA4LjEtMTEuOCAxOS4yLTI5IDI0LjQtNTUuNiA0LjUtMjIuNyAzLjEtNTgtNy4yLTc3LjgtMi4xLTQtNS42LTYuOS0xMC04LjEtMS44LS41LTUuMi0xLjUtMTEuOS40QzI5My4xIDk2IDI4OS42IDkzLjggMjg2LjkgOTJjLTUuNi0zLjYtMTIuMi00LjQtMTguNC0yLjEtOC4zIDMtMTUuNCAxMS0yMi4xIDI1LjItMSAyLjEtMS45IDQuMS0yLjcgNi4xLTEyLjcuOS0zMi43IDUuNS00OS42IDIzLjgtMi4xIDIuMy02LjIgNC0xMC41IDUuNmguMWMtOC44IDMuMS0xMi44IDEwLjMtMTcuNyAyMy4zLTYuOCAxOC4yLjIgMzYuMSA3LjEgNDcuNy05LjQgOC40LTIxLjkgMjEuOC0yOC41IDM3LjUtOC4yIDE5LjQtOS4xIDM4LjQtOC44IDQ4LjctNyA3LjQtMTcuOCAyMS4zLTE5IDM2LjktMS42IDIxLjggNi4zIDM2LjYgOS44IDQyIDEgMS42IDIuMSAyLjkgMy4zIDQuMi0uNCAyLjctLjUgNS42LjEgOC42IDEuMyA3IDUuNyAxMi43IDEyLjQgMTYuMyAxMy4yIDcgMzEuNiAxMCA0NS44IDIuOSA1LjEgNS40IDE0LjQgMTAuNiAzMS4zIDEwLjZoMWM0LjMgMCA1OC45LTIuOSA3NC44LTYuOCA3LjEtMS43IDEyLTQuNyAxNS4yLTcuNCAxMC4yLTMuMiAzOC40LTEyLjggNjUtMzAgMTguOC0xMi4yIDI1LjMtMTQuOCAzOS4zLTE4LjIgMTMuNi0zLjMgMjIuMS0xNS43IDIwLjQtMjkuNHptLTIzLjggMTQuN2MtMTYgMy44LTI0LjEgNy4zLTQzLjkgMjAuMi0zMC45IDIwLTY0LjcgMjkuMy02NC43IDI5LjNzLTIuOCA0LjItMTAuOSA2LjFjLTE0IDMuNC02Ni43IDYuMy03MS41IDYuNC0xMi45LjEtMjAuOC0zLjMtMjMtOC42LTYuNy0xNiA5LjYtMjMgOS42LTIzcy0zLjYtMi4yLTUuNy00LjJjLTEuOS0xLjktMy45LTUuNy00LjUtNC4zLTIuNSA2LjEtMy44IDIxLTEwLjUgMjcuNy05LjIgOS4zLTI2LjYgNi4yLTM2LjkuOC0xMS4zLTYgLjgtMjAuMS44LTIwLjFzLTYuMSAzLjYtMTEtMy44Yy00LjQtNi44LTguNS0xOC40LTcuNC0zMi43IDEuMi0xNi4zIDE5LjQtMzIuMSAxOS40LTMyLjFzLTMuMi0yNC4xIDcuMy00OC44YzkuNS0yMi41IDM1LjEtNDAuNiAzNS4xLTQwLjZzLTIxLjUtMjMuOC0xMy41LTQ1LjJjNS4yLTE0IDcuMy0xMy45IDktMTQuNSA2LTIuMyAxMS44LTQuOCAxNi4xLTkuNSAyMS41LTIzLjIgNDguOS0xOC44IDQ4LjktMTguOHMxMy0zOS41IDI1LTMxLjhjMy43IDIuNCAxNyAzMiAxNyAzMnMxNC4yLTguMyAxNS44LTUuMmM4LjYgMTYuNyA5LjYgNDguNiA1LjggNjgtNi40IDMyLTIyLjQgNDkuMi0yOC44IDYwLTEuNSAyLjUgMTcuMiAxMC40IDI5IDQzLjEgMTAuOSAyOS45IDEuMiA1NSAyLjkgNTcuOC4zLjUuNC43LjQuN3MxMi41IDEgMzcuNi0xNC41YzEzLjQtOC4zIDI5LjMtMTcuNiA0Ny40LTE3LjggMTcuNS0uMyAxOC40IDIwLjIgNS4yIDIzLjR6Ii8+PC9zdmc+"},163:function(e,t,n){"use strict";var i=n(9),a=(n(168),n(155)),r=n.n(a),o=n(0),s=n.n(o),c=(n(164),n(159),n(157)),l=n(160),u=n(158),j=n(162),d=n.n(j),g=function(e){var t=e.align,n=e.height;return Object(i.jsx)("img",{alt:"Yarn",src:d.a,style:{height:n,verticalAlign:t}})};g.propTypes={align:r.a.string,height:r.a.oneOfType([r.a.number,r.a.string])},g.defaultProps={height:100};var p=g,M=Object(c.a)("div",{target:"e1e22q4b0"})({name:"16e7qgd",styles:"position:sticky;top:0;z-index:1;"}),L=Object(c.a)("header",{target:"e1e22q4b1"})({name:"1g1001",styles:"padding:0.8em 1em;font-weight:light;background:#2188b6;color:rgba(255,255,255,0.8);"}),y=Object(c.a)("span",{target:"e1e22q4b2"})({name:"iwz7t0",styles:"text-decoration:underline;color:#ffffff;"}),m=Object(c.a)("header",{target:"e1e22q4b3"})({name:"ezns7t",styles:"display:flex;background:#ffffff;"}),x=Object(c.a)(u.a,{target:"e1e22q4b4"})({name:"1njhd00",styles:"display:flex;align-items:center;padding:0 1em;"}),f=Object(c.a)(u.a,{target:"e1e22q4b5"})({name:"1awx6pn",styles:"display:flex;align-items:center;height:4em;border:3px solid transparent;padding:0 1em;font-family:Abel;font-weight:light;text-decoration:none;text-transform:uppercase;color:#000000;&.active{border-bottom-color:#2188b6;}"}),h=function(e){e.siteTitle;return Object(i.jsx)(u.b,{query:"2608435555",render:function(e){return Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)(M,null,Object(i.jsx)(L,null,Object(i.jsx)(y,null,"Latest article:"),' "Journey to the v2"'),Object(i.jsx)(m,null,Object(i.jsx)(x,{to:"/"},Object(i.jsx)(p,{height:"3em",align:"middle"})),e.site.siteMetadata.menuLinks.map(function(e){var t=e.name,n=e.link;return Object(i.jsx)(s.a.Fragment,{key:t},Object(i.jsx)(f,{to:n,activeClassName:"active",partiallyActive:"/"!==n},t))}))))},data:l})};h.propTypes={siteTitle:r.a.string},h.defaultProps={siteTitle:""};var b=h,T=function(e){var t=e.children;return Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)(b,null),Object(i.jsx)("main",null,t))};T.propTypes={children:r.a.node.isRequired};t.a=T},164:function(e,t,n){"use strict";n(167)("link",function(e){return function(t){return e(this,"a","href",t)}})},165:function(e,t,n){"use strict";var i=n(166);function a(){}function r(){}r.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,r,o){if(o!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return n.PropTypes=n,n}},166:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},167:function(e,t,n){var i=n(12),a=n(26),r=n(19),o=/"/g,s=function(e,t,n,i){var a=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),i(i.P+i.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},169:function(e,t,n){"use strict";n(159);var i=n(157),a=n(9),r=n(158),o=n(0),s=n.n(o),c=Object(i.a)("div",{target:"e136yufg0"})({name:"1e0ep9c",styles:"position:relative;padding-left:300px;"}),l=Object(i.a)("div",{target:"e136yufg1"})({name:"8rzfwu",styles:"position:fixed;left:0;width:300px;height:calc(100vh - 4em);background:#d1dee8;"}),u=Object(i.a)(r.a,{target:"e136yufg2"})({name:"1srnx9y",styles:'display:flex;position:relative;align-items:center;border-bottom:1px solid #cfdee9;&:first-of-type{border-top:1px solid #cfdee9;}padding:1.5em;text-decoration:none;background:#ffffff;color:#333333;&::before{content:"";position:absolute;z-index:1;top:-1px;bottom:-1px;right:0;width:5px;background:#cfdee9;}&.active::before{background:#2188b6;}'}),j=Object(i.a)("div",{target:"e136yufg3"})({name:"rnvzr0",styles:"& > *{overflow:auto;}"});t.a=function(e){var t=e.items,n=e.children;return Object(a.jsx)(s.a.Fragment,null,Object(a.jsx)(c,null,Object(a.jsx)(l,null,t.map(function(e){var t=e.to,n=e.name;return Object(a.jsx)(s.a.Fragment,{key:n},Object(a.jsx)(u,{to:t,activeClassName:"active"},n))})),Object(a.jsx)(j,null,n)))}},173:function(e,t,n){"use strict";var i=n(9),a=n(155),r=n.n(a),o=n(0),s=n.n(o),c=n(163),l=n(169),u=function(e){var t=e.children;return Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)(c.a,null,Object(i.jsx)(l.a,{items:[{to:"/configuration/manifest",name:"Manifests"},{to:"/configuration/yarnrc",name:"Yarnrc files"}]},t)))};u.propTypes={children:r.a.node.isRequired},t.a=u}}]);
//# sourceMappingURL=component---src-pages-configuration-manifest-js-52ef99ffb141c10ddf22.js.map