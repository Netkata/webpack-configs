(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://greenkeeper.io/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badges.greenkeeper.io/Netkata/webpack-configs.svg",alt:"Greenkeeper badge"}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("To address some of these issues I've decided to make a package that could be\nused as a single, opinionated dependency for small Webpack projects - just SCSS\nand Babel support. Then I realized that some of the plugins' setup could be\nlargely simplified, so I added support for some common cases like jQuery\nhandling.")]),t._v(" "),t._m(4),t._v(" "),s("ul",[s("li",[t._v("Babel transpiling with "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("env")]),s("OutboundLink")],1),t._v("\npreset, based on "),s("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("CSS/SCSS handling with optional extraction to separate file")]),t._v(" "),s("li",[t._v("Generate font from icons, thanks to\n"),s("a",{attrs:{href:"https://github.com/HaoyCn/iconfont-plugin-webpack/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconfont-plugin-webpack"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Use external jQuery, or provide node_modules's jQuery to all of the modules")]),t._v(" "),s("li",[t._v("...with more to come!")])]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Just add this package as a dependency to your project:")]),t._v(" "),t._m(6),s("p",[t._v("This package pulls all possibly needed dependencies, so you don't have to worry\nabout installing all of the loaders and plugins separately.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),s("p",[t._v("Then to compile files with Webpack just run:")]),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"webpack-configs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configs","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack-configs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A single dependency for "),e("s",[this._v("all")]),this._v(" most of your Webpack needs, yet still\nextendable.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rationale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rationale","aria-hidden":"true"}},[this._v("#")]),this._v(" Rationale")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("I've found a need to lock all of the Webpack-related dependencies to allow easy\nupgrade of packages in project without having to spend all day at reading\n"),s("code",[t._v("CHANGELOG.md")]),t._v(" files and browsing through issue trackers only to find that\n"),s("code",[t._v("some-loader")]),t._v(" doesn't support "),s("code",[t._v("webpack@x.y.z")]),t._v(" yet. Another thing that annoys me\nis that in most of my small projects where I use Webpack my devDependencies are\nmuch bigger than dependencies. Also, creating new project from scratch consisted\nof many repeated "),s("code",[t._v("yarn add")]),t._v("s.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yarn add @netkata/webpack-configs\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then create "),e("code",[this._v("webpack.config.js")]),this._v(" with content like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@netkata/webpack-configs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("moreWebpackOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      extractToFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      postcss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      scss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      browserSync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/assets/icons'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fontDest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/assets/font'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      scssDest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/scss'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yarn webpack -d\n")])])])}],!1,null,null,null);e.default=n.exports}}]);