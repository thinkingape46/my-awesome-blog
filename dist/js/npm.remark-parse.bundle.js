(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"../node_modules/remark-parse/index.js":function(e,t,n){"use strict";var r=n("../node_modules/unherit/index.js"),i=n("../node_modules/xtend/immutable.js"),o=n("../node_modules/remark-parse/lib/parser.js");function s(e){var t=r(o);t.prototype.options=i(t.prototype.options,this.data("settings"),e),this.Parser=t}e.exports=s,s.Parser=o},"../node_modules/remark-parse/lib/block-elements.json":function(e){e.exports=JSON.parse('["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]')},"../node_modules/remark-parse/lib/decode.js":function(e,t,n){"use strict";var r=n("../node_modules/xtend/immutable.js"),i=n("../node_modules/parse-entities/index.js");e.exports=function(e){return o.raw=function(e,o,s){return i(e,r(s,{position:t(o),warning:n}))},o;function t(t){for(var n=e.offset,r=t.line,i=[];++r&&r in n;)i.push((n[r]||0)+1);return{start:t,indent:i}}function n(t,n,r){3!==r&&e.file.message(t,n)}function o(r,o,s){i(r,{position:t(o),warning:n,text:s,reference:s,textContext:e,referenceContext:e})}}},"../node_modules/remark-parse/lib/defaults.js":function(e,t,n){"use strict";e.exports={position:!0,gfm:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:n("../node_modules/remark-parse/lib/block-elements.json")}},"../node_modules/remark-parse/lib/locate/break.js":function(e,t,n){"use strict";e.exports=function(e,t){var n=e.indexOf("\n",t);for(;n>t&&" "===e.charAt(n-1);)n--;return n}},"../node_modules/remark-parse/lib/locate/code-inline.js":function(e,t,n){"use strict";e.exports=function(e,t){return e.indexOf("`",t)}},"../node_modules/remark-parse/lib/locate/delete.js":function(e,t,n){"use strict";e.exports=function(e,t){return e.indexOf("~~",t)}},"../node_modules/remark-parse/lib/locate/emphasis.js":function(e,t,n){"use strict";e.exports=function(e,t){var n=e.indexOf("*",t),r=e.indexOf("_",t);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},"../node_modules/remark-parse/lib/locate/escape.js":function(e,t,n){"use strict";e.exports=function(e,t){return e.indexOf("\\",t)}},"../node_modules/remark-parse/lib/locate/link.js":function(e,t,n){"use strict";e.exports=function(e,t){var n=e.indexOf("[",t),r=e.indexOf("![",t);if(-1===r)return n;return n<r?n:r}},"../node_modules/remark-parse/lib/locate/strong.js":function(e,t,n){"use strict";e.exports=function(e,t){var n=e.indexOf("**",t),r=e.indexOf("__",t);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},"../node_modules/remark-parse/lib/locate/tag.js":function(e,t,n){"use strict";e.exports=function(e,t){return e.indexOf("<",t)}},"../node_modules/remark-parse/lib/locate/url.js":function(e,t,n){"use strict";e.exports=function(e,t){var n,i=r.length,o=-1,s=-1;if(!this.options.gfm)return-1;for(;++o<i;)-1!==(n=e.indexOf(r[o],t))&&(n<s||-1===s)&&(s=n);return s};var r=["https://","http://","mailto:"]},"../node_modules/remark-parse/lib/parse.js":function(e,t,n){"use strict";var r=n("../node_modules/xtend/immutable.js"),i=n("../node_modules/unist-util-remove-position/index.js");e.exports=function(){var e,t=String(this.file),n={line:1,column:1,offset:0},s=r(n);65279===(t=t.replace(o,"\n")).charCodeAt(0)&&(t=t.slice(1),s.column++,s.offset++);e={type:"root",children:this.tokenizeBlock(t,s),position:{start:n,end:this.eof||r(n)}},this.options.position||i(e,!0);return e};var o=/\r\n|\r/g},"../node_modules/remark-parse/lib/parser.js":function(e,t,n){"use strict";var r=n("../node_modules/xtend/immutable.js"),i=n("../node_modules/state-toggle/index.js"),o=n("../node_modules/vfile-location/index.js"),s=n("../node_modules/remark-parse/lib/unescape.js"),a=n("../node_modules/remark-parse/lib/decode.js"),l=n("../node_modules/remark-parse/lib/tokenizer.js");function c(e,t){this.file=t,this.offset={},this.options=r(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=o(t).toOffset,this.unescape=s(this,"escape"),this.decode=a(this)}e.exports=c;var u=c.prototype;function f(e){var t,n=[];for(t in e)n.push(t);return n}u.setOptions=n("../node_modules/remark-parse/lib/set-options.js"),u.parse=n("../node_modules/remark-parse/lib/parse.js"),u.options=n("../node_modules/remark-parse/lib/defaults.js"),u.exitStart=i("atStart",!0),u.enterList=i("inList",!1),u.enterLink=i("inLink",!1),u.enterBlock=i("inBlock",!1),u.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.interruptList=[["atxHeading",{pedantic:!1}],["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.blockTokenizers={newline:n("../node_modules/remark-parse/lib/tokenize/newline.js"),indentedCode:n("../node_modules/remark-parse/lib/tokenize/code-indented.js"),fencedCode:n("../node_modules/remark-parse/lib/tokenize/code-fenced.js"),blockquote:n("../node_modules/remark-parse/lib/tokenize/blockquote.js"),atxHeading:n("../node_modules/remark-parse/lib/tokenize/heading-atx.js"),thematicBreak:n("../node_modules/remark-parse/lib/tokenize/thematic-break.js"),list:n("../node_modules/remark-parse/lib/tokenize/list.js"),setextHeading:n("../node_modules/remark-parse/lib/tokenize/heading-setext.js"),html:n("../node_modules/remark-parse/lib/tokenize/html-block.js"),footnote:n("../node_modules/remark-parse/lib/tokenize/footnote-definition.js"),definition:n("../node_modules/remark-parse/lib/tokenize/definition.js"),table:n("../node_modules/remark-parse/lib/tokenize/table.js"),paragraph:n("../node_modules/remark-parse/lib/tokenize/paragraph.js")},u.inlineTokenizers={escape:n("../node_modules/remark-parse/lib/tokenize/escape.js"),autoLink:n("../node_modules/remark-parse/lib/tokenize/auto-link.js"),url:n("../node_modules/remark-parse/lib/tokenize/url.js"),html:n("../node_modules/remark-parse/lib/tokenize/html-inline.js"),link:n("../node_modules/remark-parse/lib/tokenize/link.js"),reference:n("../node_modules/remark-parse/lib/tokenize/reference.js"),strong:n("../node_modules/remark-parse/lib/tokenize/strong.js"),emphasis:n("../node_modules/remark-parse/lib/tokenize/emphasis.js"),deletion:n("../node_modules/remark-parse/lib/tokenize/delete.js"),code:n("../node_modules/remark-parse/lib/tokenize/code-inline.js"),break:n("../node_modules/remark-parse/lib/tokenize/break.js"),text:n("../node_modules/remark-parse/lib/tokenize/text.js")},u.blockMethods=f(u.blockTokenizers),u.inlineMethods=f(u.inlineTokenizers),u.tokenizeBlock=l("block"),u.tokenizeInline=l("inline"),u.tokenizeFactory=l},"../node_modules/remark-parse/lib/set-options.js":function(e,t,n){"use strict";var r=n("../node_modules/xtend/immutable.js"),i=n("../node_modules/markdown-escapes/index.js"),o=n("../node_modules/remark-parse/lib/defaults.js");e.exports=function(e){var t,n,s=this.options;if(null==e)e={};else{if("object"!==typeof e)throw new Error("Invalid value `"+e+"` for setting `options`");e=r(e)}for(t in o){if(null==(n=e[t])&&(n=s[t]),"blocks"!==t&&"boolean"!==typeof n||"blocks"===t&&"object"!==typeof n)throw new Error("Invalid value `"+n+"` for setting `options."+t+"`");e[t]=n}return this.options=e,this.escape=i(e),this}},"../node_modules/remark-parse/lib/tokenize/auto-link.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/parse-entities/index.js"),o=n("../node_modules/remark-parse/lib/locate/tag.js");e.exports=a,a.locator=o,a.notInLink=!0;var s="mailto:".length;function a(e,t,n){var o,a,l,c,u,f,d,h,m,p,k;if("<"===t.charAt(0)){for(this,o="",a=t.length,l=0,c="",f=!1,d="",l++,o="<";l<a&&(u=t.charAt(l),!(r(u)||">"===u||"@"===u||":"===u&&"/"===t.charAt(l+1)));)c+=u,l++;if(c){if(d+=c,c="",d+=u=t.charAt(l),l++,"@"===u)f=!0;else{if(":"!==u||"/"!==t.charAt(l+1))return;d+="/",l++}for(;l<a&&(u=t.charAt(l),!r(u)&&">"!==u);)c+=u,l++;if(u=t.charAt(l),c&&">"===u)return!!n||(m=d+=c,o+=d+u,(h=e.now()).column++,h.offset++,f&&("mailto:"===d.slice(0,s).toLowerCase()?(m=m.substr(s),h.column+=s,h.offset+=s):d="mailto:"+d),p=this.inlineTokenizers,this.inlineTokenizers={text:p.text},k=this.enterLink(),m=this.tokenizeInline(m,h),this.inlineTokenizers=p,k(),e(o)({type:"link",title:null,url:i(d,{nonTerminated:!1}),children:m}))}}}},"../node_modules/remark-parse/lib/tokenize/blockquote.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/remark-parse/lib/util/interrupt.js");e.exports=function(e,t,n){var o,s,a,l,c,u,f,d,h,m=this.offset,p=this.blockTokenizers,k=this.interruptBlockquote,b=e.now(),g=b.line,A=t.length,j=[],x=[],_=[],v=0;for(;v<A&&(" "===(s=t.charAt(v))||"\t"===s);)v++;if(">"!==t.charAt(v))return;if(n)return!0;v=0;for(;v<A;){for(l=t.indexOf("\n",v),f=v,d=!1,-1===l&&(l=A);v<A&&(" "===(s=t.charAt(v))||"\t"===s);)v++;if(">"===t.charAt(v)?(v++,d=!0," "===t.charAt(v)&&v++):v=f,c=t.slice(v,l),!d&&!r(c)){v=f;break}if(!d&&(a=t.slice(v),i(k,p,this,[e,a,!0])))break;u=f===v?c:t.slice(f,l),_.push(v-f),j.push(u),x.push(c),v=l+1}v=-1,A=_.length,o=e(j.join("\n"));for(;++v<A;)m[g]=(m[g]||0)+_[v],g++;return h=this.enterBlock(),x=this.tokenizeBlock(x.join("\n"),b),h(),o({type:"blockquote",children:x})}},"../node_modules/remark-parse/lib/tokenize/break.js":function(e,t,n){"use strict";var r=n("../node_modules/remark-parse/lib/locate/break.js");e.exports=i,i.locator=r;function i(e,t,n){for(var r,i=t.length,o=-1,s="";++o<i;){if("\n"===(r=t.charAt(o))){if(o<2)return;return!!n||e(s+=r)({type:"break"})}if(" "!==r)return;s+=r}}},"../node_modules/remark-parse/lib/tokenize/code-fenced.js":function(e,t,n){"use strict";var r=n("../node_modules/trim-trailing-lines/index.js");e.exports=function(e,t,n){var i,o,s,a,l,c,u,f,d,h,m,p=this.options,k=t.length+1,b=0,g="";if(!p.gfm)return;for(;b<k&&(" "===(s=t.charAt(b))||"\t"===s);)g+=s,b++;if(h=b,"~"!==(s=t.charAt(b))&&"`"!==s)return;b++,o=s,i=1,g+=s;for(;b<k&&(s=t.charAt(b))===o;)g+=s,i++,b++;if(i<3)return;for(;b<k&&(" "===(s=t.charAt(b))||"\t"===s);)g+=s,b++;a="",l="";for(;b<k&&"\n"!==(s=t.charAt(b))&&"~"!==s&&"`"!==s;)" "===s||"\t"===s?l+=s:(a+=l+s,l=""),b++;if((s=t.charAt(b))&&"\n"!==s)return;if(n)return!0;(m=e.now()).column+=g.length,m.offset+=g.length,g+=a,a=this.decode.raw(this.unescape(a),m),l&&(g+=l);l="",f="",d="",c="",u="";for(;b<k;)if(s=t.charAt(b),c+=f,u+=d,f="",d="","\n"===s){for(c?(f+=s,d+=s):g+=s,l="",b++;b<k&&" "===(s=t.charAt(b));)l+=s,b++;if(f+=l,d+=l.slice(h),!(l.length>=4)){for(l="";b<k&&(s=t.charAt(b))===o;)l+=s,b++;if(f+=l,d+=l,!(l.length<i)){for(l="";b<k&&(" "===(s=t.charAt(b))||"\t"===s);)f+=s,d+=s,b++;if(!s||"\n"===s)break}}}else c+=s,d+=s,b++;return e(g+=c+f)({type:"code",lang:a||null,value:r(u)})}},"../node_modules/remark-parse/lib/tokenize/code-indented.js":function(e,t,n){"use strict";var r=n("../node_modules/repeat-string/index.js"),i=n("../node_modules/trim-trailing-lines/index.js");e.exports=function(e,t,n){var r,s,a,l=-1,c=t.length,u="",f="",d="",h="";for(;++l<c;)if(r=t.charAt(l),a)if(a=!1,u+=d,f+=h,d="",h="","\n"===r)d=r,h=r;else for(u+=r,f+=r;++l<c;){if(!(r=t.charAt(l))||"\n"===r){h=r,d=r;break}u+=r,f+=r}else if(" "===r&&t.charAt(l+1)===r&&t.charAt(l+2)===r&&t.charAt(l+3)===r)d+=o,l+=3,a=!0;else if("\t"===r)d+=r,a=!0;else{for(s="";"\t"===r||" "===r;)s+=r,r=t.charAt(++l);if("\n"!==r)break;d+=s+r,h+=r}if(f)return!!n||e(u)({type:"code",lang:null,value:i(f)})};var o=r(" ",4)},"../node_modules/remark-parse/lib/tokenize/code-inline.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/locate/code-inline.js");e.exports=o,o.locator=i;function o(e,t,n){for(var i,o,s,a,l,c,u,f,d=t.length,h=0,m="",p="";h<d&&"`"===t.charAt(h);)m+="`",h++;if(m){for(l=m,a=h,m="",f=t.charAt(h),s=0;h<d;){if(c=f,f=t.charAt(h+1),"`"===c?(s++,p+=c):(s=0,m+=c),s&&"`"!==f){if(s===a){l+=m+p,u=!0;break}m+=p,p=""}h++}if(!u){if(a%2!==0)return;m=""}if(n)return!0;for(i="",o="",d=m.length,h=-1;++h<d;)c=m.charAt(h),r(c)?o+=c:(o&&(i&&(i+=o),o=""),i+=c);return e(l)({type:"inlineCode",value:i})}}},"../node_modules/remark-parse/lib/tokenize/definition.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/util/normalize.js");e.exports=o,o.notInList=!0,o.notInBlock=!0;function o(e,t,n){for(var r,o,l,c,u,f,d,h,m=this.options.commonmark,p=0,k=t.length,b="";p<k&&(" "===(c=t.charAt(p))||"\t"===c);)b+=c,p++;if("["===(c=t.charAt(p))){for(p++,b+=c,l="";p<k&&"]"!==(c=t.charAt(p));)"\\"===c&&(l+=c,p++,c=t.charAt(p)),l+=c,p++;if(l&&"]"===t.charAt(p)&&":"===t.charAt(p+1)){for(f=l,p=(b+=l+"]:").length,l="";p<k&&("\t"===(c=t.charAt(p))||" "===c||"\n"===c);)b+=c,p++;if(l="",r=b,"<"===(c=t.charAt(p))){for(p++;p<k&&s(c=t.charAt(p));)l+=c,p++;if((c=t.charAt(p))===s.delimiter)b+="<"+l+c,p++;else{if(m)return;p-=l.length+1,l=""}}if(!l){for(;p<k&&a(c=t.charAt(p));)l+=c,p++;b+=l}if(l){for(d=l,l="";p<k&&("\t"===(c=t.charAt(p))||" "===c||"\n"===c);)l+=c,p++;if(u=null,'"'===(c=t.charAt(p))?u='"':"'"===c?u="'":"("===c&&(u=")"),u){if(!l)return;for(p=(b+=l+c).length,l="";p<k&&(c=t.charAt(p))!==u;){if("\n"===c){if(p++,"\n"===(c=t.charAt(p))||c===u)return;l+="\n"}l+=c,p++}if((c=t.charAt(p))!==u)return;o=b,b+=l+c,p++,h=l,l=""}else l="",p=b.length;for(;p<k&&("\t"===(c=t.charAt(p))||" "===c);)b+=c,p++;return(c=t.charAt(p))&&"\n"!==c?void 0:!!n||(r=e(r).test().end,d=this.decode.raw(this.unescape(d),r,{nonTerminated:!1}),h&&(o=e(o).test().end,h=this.decode.raw(this.unescape(h),o)),e(b)({type:"definition",identifier:i(f),title:h||null,url:d}))}}}}function s(e){return">"!==e&&"["!==e&&"]"!==e}function a(e){return"["!==e&&"]"!==e&&!r(e)}s.delimiter=">"},"../node_modules/remark-parse/lib/tokenize/delete.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/locate/delete.js");e.exports=o,o.locator=i;function o(e,t,n){var i,o,s,a="",l="",c="",u="";if(this.options.gfm&&"~"===t.charAt(0)&&"~"===t.charAt(1)&&!r(t.charAt(2)))for(i=1,o=t.length,(s=e.now()).column+=2,s.offset+=2;++i<o;){if("~"===(a=t.charAt(i))&&"~"===l&&(!c||!r(c)))return!!n||e("~~"+u+"~~")({type:"delete",children:this.tokenizeInline(u,s)});u+=l,c=l,l=a}}},"../node_modules/remark-parse/lib/tokenize/emphasis.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/is-word-character/index.js"),o=n("../node_modules/is-whitespace-character/index.js"),s=n("../node_modules/remark-parse/lib/locate/emphasis.js");e.exports=a,a.locator=s;function a(e,t,n){var s,a,l,c,u,f,d,h=0,m=t.charAt(h);if(("*"===m||"_"===m)&&(a=this.options.pedantic,u=m,l=m,f=t.length,h++,c="",m="",!a||!o(t.charAt(h))))for(;h<f;){if(d=m,(m=t.charAt(h))===l&&(!a||!o(d))){if((m=t.charAt(++h))!==l){if(!r(c)||d===l)return;if(!a&&"_"===l&&i(m)){c+=l;continue}return!!n||((s=e.now()).column++,s.offset++,e(u+c+l)({type:"emphasis",children:this.tokenizeInline(c,s)}))}c+=l}a||"\\"!==m||(c+=m,m=t.charAt(++h)),c+=m,h++}}},"../node_modules/remark-parse/lib/tokenize/escape.js":function(e,t,n){"use strict";var r=n("../node_modules/remark-parse/lib/locate/escape.js");function i(e,t,n){var r,i;if("\\"===t.charAt(0)&&(r=t.charAt(1),-1!==this.escape.indexOf(r)))return!!n||(i="\n"===r?{type:"break"}:{type:"text",value:r},e("\\"+r)(i))}e.exports=i,i.locator=r},"../node_modules/remark-parse/lib/tokenize/footnote-definition.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/util/normalize.js");e.exports=s,s.notInList=!0,s.notInBlock=!0;var o=/^( {4}|\t)?/gm;function s(e,t,n){var s,a,l,c,u,f,d,h,m,p,k,b,g=this.offset;if(this.options.footnotes){for(s=0,a=t.length,l="",c=e.now(),u=c.line;s<a&&(m=t.charAt(s),r(m));)l+=m,s++;if("["===t.charAt(s)&&"^"===t.charAt(s+1)){for(s=(l+="[^").length,d="";s<a&&"]"!==(m=t.charAt(s));)"\\"===m&&(d+=m,s++,m=t.charAt(s)),d+=m,s++;if(d&&"]"===t.charAt(s)&&":"===t.charAt(s+1)){if(n)return!0;for(p=i(d),s=(l+=d+"]:").length;s<a&&("\t"===(m=t.charAt(s))||" "===m);)l+=m,s++;for(c.column+=l.length,c.offset+=l.length,d="",f="",h="";s<a;){if("\n"===(m=t.charAt(s))){for(h=m,s++;s<a&&"\n"===(m=t.charAt(s));)h+=m,s++;for(d+=h,h="";s<a&&" "===(m=t.charAt(s));)h+=m,s++;if(0===h.length)break;d+=h}d&&(f+=d,d=""),f+=m,s++}return l+=f,f=f.replace(o,(function(e){return g[u]=(g[u]||0)+e.length,u++,""})),k=e(l),b=this.enterBlock(),f=this.tokenizeBlock(f,c),b(),k({type:"footnoteDefinition",identifier:p,children:f})}}}}},"../node_modules/remark-parse/lib/tokenize/heading-atx.js":function(e,t,n){"use strict";e.exports=function(e,t,n){var r,i,o,s=this.options,a=t.length+1,l=-1,c=e.now(),u="",f="";for(;++l<a;){if(" "!==(r=t.charAt(l))&&"\t"!==r){l--;break}u+=r}o=0;for(;++l<=a;){if("#"!==(r=t.charAt(l))){l--;break}u+=r,o++}if(o>6)return;if(!o||!s.pedantic&&"#"===t.charAt(l+1))return;a=t.length+1,i="";for(;++l<a;){if(" "!==(r=t.charAt(l))&&"\t"!==r){l--;break}i+=r}if(!s.pedantic&&0===i.length&&r&&"\n"!==r)return;if(n)return!0;u+=i,i="",f="";for(;++l<a&&(r=t.charAt(l))&&"\n"!==r;)if(" "===r||"\t"===r||"#"===r){for(;" "===r||"\t"===r;)i+=r,r=t.charAt(++l);for(;"#"===r;)i+=r,r=t.charAt(++l);for(;" "===r||"\t"===r;)i+=r,r=t.charAt(++l);l--}else f+=i+r,i="";return c.column+=u.length,c.offset+=u.length,e(u+=f+i)({type:"heading",depth:o,children:this.tokenizeInline(f,c)})}},"../node_modules/remark-parse/lib/tokenize/heading-setext.js":function(e,t,n){"use strict";e.exports=function(e,t,n){var i,o,s,a,l,c=e.now(),u=t.length,f=-1,d="";for(;++f<u;){if(" "!==(s=t.charAt(f))||f>=3){f--;break}d+=s}i="",o="";for(;++f<u;){if("\n"===(s=t.charAt(f))){f--;break}" "===s||"\t"===s?o+=s:(i+=o+s,o="")}if(c.column+=d.length,c.offset+=d.length,d+=i+o,s=t.charAt(++f),a=t.charAt(++f),"\n"!==s||!r[a])return;d+=s,o=a,l=r[a];for(;++f<u;){if((s=t.charAt(f))!==a){if("\n"!==s)return;f--;break}o+=s}if(n)return!0;return e(d+o)({type:"heading",depth:l,children:this.tokenizeInline(i,c)})};var r={};r["="]=1,r["-"]=2},"../node_modules/remark-parse/lib/tokenize/html-block.js":function(e,t,n){"use strict";var r=n("../node_modules/remark-parse/lib/util/html.js").openCloseTag;e.exports=function(e,t,n){var i,o,s,a,l,c,u,f=this.options.blocks,d=t.length,h=0,m=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+f.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(r.source+"\\s*$"),/^$/,!1]];for(;h<d&&("\t"===(a=t.charAt(h))||" "===a);)h++;if("<"!==t.charAt(h))return;i=-1===(i=t.indexOf("\n",h+1))?d:i,o=t.slice(h,i),s=-1,l=m.length;for(;++s<l;)if(m[s][0].test(o)){c=m[s];break}if(!c)return;if(n)return c[2];if(h=i,!c[1].test(o))for(;h<d;){if(i=-1===(i=t.indexOf("\n",h+1))?d:i,o=t.slice(h+1,i),c[1].test(o)){o&&(h=i);break}h=i}return u=t.slice(0,h),e(u)({type:"html",value:u})}},"../node_modules/remark-parse/lib/tokenize/html-inline.js":function(e,t,n){"use strict";var r=n("../node_modules/is-alphabetical/index.js"),i=n("../node_modules/remark-parse/lib/locate/tag.js"),o=n("../node_modules/remark-parse/lib/util/html.js").tag;e.exports=l,l.locator=i;var s=/^<a /i,a=/^<\/a>/i;function l(e,t,n){var i,l,c=t.length;if(!("<"!==t.charAt(0)||c<3)&&(i=t.charAt(1),(r(i)||"?"===i||"!"===i||"/"===i)&&(l=t.match(o))))return!!n||(l=l[0],!this.inLink&&s.test(l)?this.inLink=!0:this.inLink&&a.test(l)&&(this.inLink=!1),e(l)({type:"html",value:l}))}},"../node_modules/remark-parse/lib/tokenize/link.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/locate/link.js");e.exports=l,l.locator=i;var o={}.hasOwnProperty,s={'"':'"',"'":"'"},a={};function l(e,t,n){var i,l,c,u,f,d,h,m,p,k,b,g,A,j,x,_,v,z,w,y="",O=0,L=t.charAt(0),I=this.options.pedantic,B=this.options.commonmark,T=this.options.gfm;if("!"===L&&(p=!0,y=L,L=t.charAt(++O)),"["===L&&(p||!this.inLink)){for(y+=L,x="",O++,g=t.length,j=0,(v=e.now()).column+=O,v.offset+=O;O<g;){if(d=L=t.charAt(O),"`"===L){for(l=1;"`"===t.charAt(O+1);)d+=L,O++,l++;c?l>=c&&(c=0):c=l}else if("\\"===L)O++,d+=t.charAt(O);else if(c&&!T||"["!==L){if((!c||T)&&"]"===L){if(!j){if(!I)for(;O<g&&(L=t.charAt(O+1),r(L));)d+=L,O++;if("("!==t.charAt(O+1))return;d+="(",i=!0,O++;break}j--}}else j++;x+=d,d="",O++}if(i){for(k=x,y+=x+d,O++;O<g&&(L=t.charAt(O),r(L));)y+=L,O++;if(L=t.charAt(O),m=B?a:s,x="",u=y,"<"===L){for(O++,u+="<";O<g&&">"!==(L=t.charAt(O));){if(B&&"\n"===L)return;x+=L,O++}if(">"!==t.charAt(O))return;y+="<"+x+">",_=x,O++}else{for(L=null,d="";O<g&&(L=t.charAt(O),!d||!o.call(m,L));){if(r(L)){if(!I)break;d+=L}else{if("("===L)j++;else if(")"===L){if(0===j)break;j--}x+=d,d="","\\"===L&&(x+="\\",L=t.charAt(++O)),x+=L}O++}_=x,O=(y+=x).length}for(x="";O<g&&(L=t.charAt(O),r(L));)x+=L,O++;if(L=t.charAt(O),y+=x,x&&o.call(m,L))if(O++,y+=L,x="",b=m[L],f=y,B){for(;O<g&&(L=t.charAt(O))!==b;)"\\"===L&&(x+="\\",L=t.charAt(++O)),O++,x+=L;if((L=t.charAt(O))!==b)return;for(A=x,y+=x+L,O++;O<g&&(L=t.charAt(O),r(L));)y+=L,O++}else for(d="";O<g;){if((L=t.charAt(O))===b)h&&(x+=b+d,d=""),h=!0;else if(h){if(")"===L){y+=x+b+d,A=x;break}r(L)?d+=L:(x+=b+d+L,d="",h=!1)}else x+=L;O++}if(")"===t.charAt(O))return!!n||(y+=")",_=this.decode.raw(this.unescape(_),e(u).test().end,{nonTerminated:!1}),A&&(f=e(f).test().end,A=this.decode.raw(this.unescape(A),f)),w={type:p?"image":"link",title:A||null,url:_},p?w.alt=this.decode.raw(this.unescape(k),v)||null:(z=this.enterLink(),w.children=this.tokenizeInline(k,v),z()),e(y)(w))}}}a['"']='"',a["'"]="'",a["("]=")"},"../node_modules/remark-parse/lib/tokenize/list.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/repeat-string/index.js"),o=n("../node_modules/is-decimal/index.js"),s=n("../node_modules/remark-parse/lib/util/get-indentation.js"),a=n("../node_modules/remark-parse/lib/util/remove-indentation.js"),l=n("../node_modules/remark-parse/lib/util/interrupt.js");e.exports=function(e,t,n){var i,s,a,c,u,f,d,h,g,A,j,x,_,v,z,w,y,O,L,I,B,T,C,S,q=this.options.commonmark,E=this.options.pedantic,Z=this.blockTokenizers,H=this.interruptList,$=0,M=t.length,R=null,P=0;for(;$<M;){if("\t"===(c=t.charAt($)))P+=4-P%4;else{if(" "!==c)break;P++}$++}if(P>=4)return;if(c=t.charAt($),i=q?k:p,!0===m[c])u=c,a=!1;else{for(a=!0,s="";$<M&&(c=t.charAt($),o(c));)s+=c,$++;if(c=t.charAt($),!s||!0!==i[c])return;R=parseInt(s,10),u=c}if(" "!==(c=t.charAt(++$))&&"\t"!==c)return;if(n)return!0;$=0,v=[],z=[],w=[];for(;$<M;){for(f=t.indexOf("\n",$),d=$,h=!1,S=!1,-1===f&&(f=M),C=$+4,P=0;$<M;){if("\t"===(c=t.charAt($)))P+=4-P%4;else{if(" "!==c)break;P++}$++}if(P>=4&&(S=!0),y&&P>=y.indent&&(S=!0),c=t.charAt($),g=null,!S){if(!0===m[c])g=c,$++,P++;else{for(s="";$<M&&(c=t.charAt($),o(c));)s+=c,$++;c=t.charAt($),$++,s&&!0===i[c]&&(g=c,P+=s.length+1)}if(g)if("\t"===(c=t.charAt($)))P+=4-P%4,$++;else if(" "===c){for(C=$+4;$<C&&" "===t.charAt($);)$++,P++;$===C&&" "===t.charAt($)&&($-=3,P-=3)}else"\n"!==c&&""!==c&&(g=null)}if(g){if(!E&&u!==g)break;h=!0}else q||S||" "!==t.charAt(d)?q&&y&&(S=P>=y.indent||P>4):S=!0,h=!1,$=d;if(j=t.slice(d,f),A=d===$?j:t.slice($,f),("*"===g||"_"===g||"-"===g)&&Z.thematicBreak.call(this,e,j,!0))break;if(x=_,_=!r(A).length,S&&y)y.value=y.value.concat(w,j),z=z.concat(w,j),w=[];else if(h)0!==w.length&&(y.value.push(""),y.trail=w.concat()),y={value:[j],indent:P,trail:[]},v.push(y),z=z.concat(w,j),w=[];else if(_){if(x)break;w.push(j)}else{if(x)break;if(l(H,Z,this,[e,j,!0]))break;y.value=y.value.concat(w,j),z=z.concat(w,j),w=[]}$=f+1}B=e(z.join("\n")).reset({type:"list",ordered:a,start:R,loose:null,children:[]}),O=this.enterList(),L=this.enterBlock(),I=!1,$=-1,M=v.length;for(;++$<M;)y=v[$].value.join("\n"),T=e.now(),(y=e(y)(b(this,y,T),B)).loose&&(I=!0),y=v[$].trail.join("\n"),$!==M-1&&(y+="\n"),e(y);return O(),L(),B.loose=I,B};var c=/\n\n(?!\s*$)/,u=/^\[([ \t]|x|X)][ \t]/,f=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,d=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,h=/^( {1,4}|\t)?/gm,m={"*":!0,"+":!0,"-":!0},p={".":!0},k={};function b(e,t,n){var r,i,o=e.offset,s=e.options.pedantic?g:A,a=null;return t=s.apply(null,arguments),e.options.gfm&&(r=t.match(u))&&(i=r[0].length,a="x"===r[1].toLowerCase(),o[n.line]+=i,t=t.slice(i)),{type:"listItem",loose:c.test(t)||"\n"===t.charAt(t.length-1),checked:a,children:e.tokenizeBlock(t,n)}}function g(e,t,n){var r=e.offset,i=n.line;return t=t.replace(d,o),i=n.line,t.replace(h,o);function o(e){return r[i]=(r[i]||0)+e.length,i++,""}}function A(e,t,n){var r,o,l,c,u,d,h,m=e.offset,p=n.line;for(c=(t=t.replace(f,(function(e,t,n,s,a){o=t+n+s,l=a,Number(n)<10&&o.length%2===1&&(n=" "+n);return(r=t+i(" ",n.length)+s)+l}))).split("\n"),(u=a(t,s(r).indent).split("\n"))[0]=l,m[p]=(m[p]||0)+o.length,p++,d=0,h=c.length;++d<h;)m[p]=(m[p]||0)+c[d].length-u[d].length,p++;return u.join("\n")}k["."]=!0,k[")"]=!0},"../node_modules/remark-parse/lib/tokenize/newline.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js");e.exports=function(e,t,n){var i,o,s,a,l=t.charAt(0);if("\n"!==l)return;if(n)return!0;a=1,i=t.length,o=l,s="";for(;a<i&&(l=t.charAt(a),r(l));)s+=l,"\n"===l&&(o+=s,s=""),a++;e(o)}},"../node_modules/remark-parse/lib/tokenize/paragraph.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/is-decimal/index.js"),o=n("../node_modules/trim-trailing-lines/index.js"),s=n("../node_modules/remark-parse/lib/util/interrupt.js");e.exports=function(e,t,n){var a,l,c,u,f,d=this.options,h=d.commonmark,m=d.gfm,p=this.blockTokenizers,k=this.interruptParagraph,b=t.indexOf("\n"),g=t.length;for(;b<g;){if(-1===b){b=g;break}if("\n"===t.charAt(b+1))break;if(h){for(u=0,a=b+1;a<g;){if("\t"===(c=t.charAt(a))){u=4;break}if(" "!==c)break;u++,a++}if(u>=4){b=t.indexOf("\n",b+1);continue}}if(l=t.slice(b+1),s(k,p,this,[e,l,!0]))break;if(p.list.call(this,e,l,!0)&&(this.inList||h||m&&!i(r.left(l).charAt(0))))break;if(a=b,-1!==(b=t.indexOf("\n",b+1))&&""===r(t.slice(a,b))){b=a;break}}if(l=t.slice(0,b),""===r(l))return e(l),null;if(n)return!0;return f=e.now(),l=o(l),e(l)({type:"paragraph",children:this.tokenizeInline(l,f)})}},"../node_modules/remark-parse/lib/tokenize/reference.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js"),i=n("../node_modules/remark-parse/lib/locate/link.js"),o=n("../node_modules/remark-parse/lib/util/normalize.js");e.exports=s,s.locator=i;function s(e,t,n){var i,s,a,l,c,u,f,d,h=t.charAt(0),m=0,p=t.length,k="",b="",g="link",A="shortcut";if("!"===h&&(g="image",b=h,h=t.charAt(++m)),"["===h){if(m++,b+=h,u="",this.options.footnotes&&"^"===t.charAt(m)){if("image"===g)return;b+="^",m++,g="footnote"}for(d=0;m<p;){if("["===(h=t.charAt(m)))f=!0,d++;else if("]"===h){if(!d)break;d--}"\\"===h&&(u+="\\",h=t.charAt(++m)),u+=h,m++}if(k=u,i=u,"]"===(h=t.charAt(m))){for(m++,k+=h,u="";m<p&&(h=t.charAt(m),r(h));)u+=h,m++;if(h=t.charAt(m),"footnote"!==g&&"["===h){for(s="",u+=h,m++;m<p&&"["!==(h=t.charAt(m))&&"]"!==h;)"\\"===h&&(s+="\\",h=t.charAt(++m)),s+=h,m++;"]"===(h=t.charAt(m))?(A=s?"full":"collapsed",u+=s+h,m++):s="",k+=u,u=""}else{if(!i)return;s=i}if("full"===A||!f)return k=b+k,"link"===g&&this.inLink?null:!!n||("footnote"===g&&-1!==i.indexOf(" ")?e(k)({type:"footnote",children:this.tokenizeInline(i,e.now())}):((a=e.now()).column+=b.length,a.offset+=b.length,l={type:g+"Reference",identifier:o(s="full"===A?s:i)},"link"!==g&&"image"!==g||(l.referenceType=A),"link"===g?(c=this.enterLink(),l.children=this.tokenizeInline(i,a),c()):"image"===g&&(l.alt=this.decode.raw(this.unescape(i),a)||null),e(k)(l)))}}}},"../node_modules/remark-parse/lib/tokenize/strong.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/is-whitespace-character/index.js"),o=n("../node_modules/remark-parse/lib/locate/strong.js");e.exports=s,s.locator=o;function s(e,t,n){var o,s,a,l,c,u,f,d=0,h=t.charAt(d);if(("*"===h||"_"===h)&&t.charAt(++d)===h&&(s=this.options.pedantic,c=(a=h)+a,u=t.length,d++,l="",h="",!s||!i(t.charAt(d))))for(;d<u;){if(f=h,(h=t.charAt(d))===a&&t.charAt(d+1)===a&&(!s||!i(f))&&(h=t.charAt(d+2))!==a){if(!r(l))return;return!!n||((o=e.now()).column+=2,o.offset+=2,e(c+l+c)({type:"strong",children:this.tokenizeInline(l,o)}))}s||"\\"!==h||(l+=h,h=t.charAt(++d)),l+=h,d++}}},"../node_modules/remark-parse/lib/tokenize/table.js":function(e,t,n){"use strict";var r=n("../node_modules/is-whitespace-character/index.js");e.exports=function(e,t,n){var i,o,s,a,l,c,u,f,d,h,m,p,k,b,g,A,j,x,_,v,z,w,y,O;if(!this.options.gfm)return;i=0,x=0,c=t.length+1,u=[];for(;i<c;){if(w=t.indexOf("\n",i),y=t.indexOf("|",i+1),-1===w&&(w=t.length),-1===y||y>w){if(x<2)return;break}u.push(t.slice(i,w)),x++,i=w+1}a=u.join("\n"),o=u.splice(1,1)[0]||[],i=0,c=o.length,x--,s=!1,m=[];for(;i<c;){if("|"===(d=o.charAt(i))){if(h=null,!1===s){if(!1===O)return}else m.push(s),s=!1;O=!1}else if("-"===d)h=!0,s=s||null;else if(":"===d)s="left"===s?"center":h&&null===s?"right":"left";else if(!r(d))return;i++}!1!==s&&m.push(s);if(m.length<1)return;if(n)return!0;j=-1,v=[],z=e(a).reset({type:"table",align:m,children:v});for(;++j<x;){for(_=u[j],l={type:"tableRow",children:[]},j&&e("\n"),e(_).reset(l,z),c=_.length+1,i=0,f="",p="",k=!0,b=null,g=null;i<c;)if("\t"!==(d=_.charAt(i))&&" "!==d){if(""===d||"|"===d)if(k)e(d);else{if(d&&g){f+=d,i++;continue}!p&&!d||k||(a=p,f.length>1&&(d?(a+=f.slice(0,f.length-1),f=f.charAt(f.length-1)):(a+=f,f="")),A=e.now(),e(a)({type:"tableCell",children:this.tokenizeInline(p,A)},l)),e(f+d),f="",p=""}else if(f&&(p+=f,f=""),p+=d,"\\"===d&&i!==c-2&&(p+=_.charAt(i+1),i++),"`"===d){for(b=1;_.charAt(i+1)===d;)p+=d,i++,b++;g?b>=g&&(g=0):g=b}k=!1,i++}else p?f+=d:e(d),i++;j||e("\n"+o)}return z}},"../node_modules/remark-parse/lib/tokenize/text.js":function(e,t,n){"use strict";e.exports=function(e,t,n){var r,i,o,s,a,l,c,u,f,d;if(n)return!0;r=this.inlineMethods,s=r.length,i=this.inlineTokenizers,o=-1,f=t.length;for(;++o<s;)"text"!==(u=r[o])&&i[u]&&((c=i[u].locator)||e.file.fail("Missing locator: `"+u+"`"),-1!==(l=c.call(this,t,1))&&l<f&&(f=l));a=t.slice(0,f),d=e.now(),this.decode(a,d,(function(t,n,r){e(r||t)({type:"text",value:t})}))}},"../node_modules/remark-parse/lib/tokenize/thematic-break.js":function(e,t,n){"use strict";e.exports=function(e,t,n){var r,i,o,s,a=-1,l=t.length+1,c="";for(;++a<l&&("\t"===(r=t.charAt(a))||" "===r);)c+=r;if("*"!==r&&"-"!==r&&"_"!==r)return;i=r,c+=r,o=1,s="";for(;++a<l;)if((r=t.charAt(a))===i)o++,c+=s+i,s="";else{if(" "!==r)return o>=3&&(!r||"\n"===r)?(c+=s,!!n||e(c)({type:"thematicBreak"})):void 0;s+=r}}},"../node_modules/remark-parse/lib/tokenize/url.js":function(e,t,n){"use strict";var r=n("../node_modules/parse-entities/index.js"),i=n("../node_modules/is-whitespace-character/index.js"),o=n("../node_modules/remark-parse/lib/locate/url.js");e.exports=l,l.locator=o,l.notInLink=!0;var s=["http://","https://","mailto:"],a=s.length;function l(e,t,n){var o,l,c,u,f,d,h,m,p,k,b,g;if(this.options.gfm){for(o="",u=-1,m=a;++u<m;)if(d=s[u],(h=t.slice(0,d.length)).toLowerCase()===d){o=h;break}if(o){for(u=o.length,m=t.length,p="",k=0;u<m&&(c=t.charAt(u),!i(c)&&"<"!==c)&&("."!==c&&","!==c&&":"!==c&&";"!==c&&'"'!==c&&"'"!==c&&")"!==c&&"]"!==c||(b=t.charAt(u+1))&&!i(b))&&("("!==c&&"["!==c||k++,")"!==c&&"]"!==c||!(--k<0));)p+=c,u++;if(p){if(l=o+=p,"mailto:"===d){if(-1===(f=p.indexOf("@"))||f===m-1)return;l=l.substr("mailto:".length)}return!!n||(g=this.enterLink(),l=this.tokenizeInline(l,e.now()),g(),e(o)({type:"link",title:null,url:r(o,{nonTerminated:!1}),children:l}))}}}}},"../node_modules/remark-parse/lib/tokenizer.js":function(e,t,n){"use strict";e.exports=function(e){return function(t,n){var o,s,a,l,c,u,f=this,d=f.offset,h=[],m=f[e+"Methods"],p=f[e+"Tokenizers"],k=n.line,b=n.column;if(!t)return h;x.now=A,x.file=f.file,g("");for(;t;){for(o=-1,s=m.length,c=!1;++o<s&&(l=m[o],!(a=p[l])||a.onlyAtStart&&!f.atStart||a.notInList&&f.inList||a.notInBlock&&f.inBlock||a.notInLink&&f.inLink||(u=t.length,a.apply(f,[x,t]),!(c=u!==t.length))););c||f.file.fail(new Error("Infinite loop"),x.now())}return f.eof=A(),h;function g(e){for(var t=-1,n=e.indexOf("\n");-1!==n;)k++,t=n,n=e.indexOf("\n",n+1);-1===t?b+=e.length:b=e.length-t,k in d&&(-1!==t?b+=d[k]:b<=d[k]&&(b=d[k]+1))}function A(){var e={line:k,column:b};return e.offset=f.toOffset(e),e}function j(e){this.start=e,this.end=A()}function x(e){var n,o=function(){var e=[],t=k+1;return function(){for(var n=k+1;t<n;)e.push((d[t]||0)+1),t++;return e}}(),s=(n=A(),function(e,t){var r=e.position,i=r?r.start:n,o=[],s=r&&r.end.line,a=n.line;if(e.position=new j(i),r&&t&&r.indent){if(o=r.indent,s<a){for(;++s<a;)o.push((d[s]||0)+1);o.push(n.column)}t=o.concat(t)}return e.position.indent=t||[],e}),a=A();return function(e){t.substring(0,e.length)!==e&&f.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),A())}(e),l.reset=c,c.test=u,l.test=u,t=t.substring(e.length),g(e),o=o(),l;function l(e,t){return s(function(e,t){var n=t?t.children:h,o=n[n.length-1];return o&&e.type===o.type&&e.type in r&&i(o)&&i(e)&&(e=r[e.type].call(f,o,e)),e!==o&&n.push(e),f.atStart&&0!==h.length&&f.exitStart(),e}(s(e),t),o)}function c(){var n=l.apply(null,arguments);return k=a.line,b=a.column,t=e+t,n}function u(){var n=s({});return k=a.line,b=a.column,t=e+t,n.position}}}};var r={text:function(e,t){return e.value+=t.value,e},blockquote:function(e,t){if(this.options.commonmark)return t;return e.children=e.children.concat(t.children),e}};function i(e){var t,n;return"text"!==e.type||!e.position||(t=e.position.start,n=e.position.end,t.line!==n.line||n.column-t.column===e.value.length)}},"../node_modules/remark-parse/lib/unescape.js":function(e,t,n){"use strict";e.exports=function(e,t){return function(n){var r,i=0,o=n.indexOf("\\"),s=e[t],a=[];for(;-1!==o;)a.push(n.slice(i,o)),i=o+1,(r=n.charAt(i))&&-1!==s.indexOf(r)||a.push("\\"),o=n.indexOf("\\",i);return a.push(n.slice(i)),a.join("")}}},"../node_modules/remark-parse/lib/util/get-indentation.js":function(e,t,n){"use strict";e.exports=function(e){var t,n=0,i=0,o=e.charAt(n),s={};for(;o in r;)i+=t=r[o],t>1&&(i=Math.floor(i/t)*t),s[i]=n,o=e.charAt(++n);return{indent:i,stops:s}};var r={" ":1,"\t":4}},"../node_modules/remark-parse/lib/util/html.js":function(e,t,n){"use strict";var r="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",i="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";t.openCloseTag=new RegExp("^(?:"+r+"|"+i+")"),t.tag=new RegExp("^(?:"+r+"|"+i+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},"../node_modules/remark-parse/lib/util/interrupt.js":function(e,t,n){"use strict";e.exports=function(e,t,n,r){var i,o,s,a,l,c,u=["pedantic","commonmark"],f=u.length,d=e.length,h=-1;for(;++h<d;){for(i=e[h],o=i[1]||{},s=i[0],a=-1,c=!1;++a<f;)if(void 0!==o[l=u[a]]&&o[l]!==n.options[l]){c=!0;break}if(!c&&t[s].apply(n,r))return!0}return!1}},"../node_modules/remark-parse/lib/util/normalize.js":function(e,t,n){"use strict";var r=n("../node_modules/collapse-white-space/index.js");e.exports=function(e){return r(e).toLowerCase()}},"../node_modules/remark-parse/lib/util/remove-indentation.js":function(e,t,n){"use strict";var r=n("../node_modules/trim/index.js"),i=n("../node_modules/repeat-string/index.js"),o=n("../node_modules/remark-parse/lib/util/get-indentation.js");e.exports=function(e,t){var n,s,a,l,c=e.split("\n"),u=c.length+1,f=1/0,d=[];c.unshift(i(" ",t)+"!");for(;u--;)if(s=o(c[u]),d[u]=s.stops,0!==r(c[u]).length){if(!s.indent){f=1/0;break}s.indent>0&&s.indent<f&&(f=s.indent)}if(f!==1/0)for(u=c.length;u--;){for(a=d[u],n=f;n&&!(n in a);)n--;l=0!==r(c[u]).length&&f&&n!==f?"\t":"",c[u]=l+c[u].slice(n in a?a[n]+1:0)}return c.shift(),c.join("\n")}}}]);
//# sourceMappingURL=npm.remark-parse.bundle.js.map