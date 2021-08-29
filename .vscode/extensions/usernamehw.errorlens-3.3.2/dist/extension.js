(()=>{var e={705:(e,o,t)=>{var n=t(639).Symbol;e.exports=n},239:(e,o,t)=>{var n=t(705),i=t(607),r=t(333),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?i(e):r(e)}},561:(e,o,t)=>{var n=t(990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},957:e=>{var o="object"==typeof global&&global&&global.Object===Object&&global;e.exports=o},607:(e,o,t)=>{var n=t(705),i=Object.prototype,r=i.hasOwnProperty,s=i.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var o=r.call(e,a),t=e[a];try{e[a]=void 0;var n=!0}catch(e){}var i=s.call(e);return n&&(o?e[a]=t:delete e[a]),i}},333:e=>{var o=Object.prototype.toString;e.exports=function(e){return o.call(e)}},639:(e,o,t)=>{var n=t(957),i="object"==typeof self&&self&&self.Object===Object&&self,r=n||i||Function("return this")();e.exports=r},990:e=>{var o=/\s/;e.exports=function(e){for(var t=e.length;t--&&o.test(e.charAt(t)););return t}},279:(e,o,t)=>{var n=t(218),i=t(771),r=t(841),s=Math.max,a=Math.min;e.exports=function(e,o,t){var l,c,g,d,u,f,h=0,b=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function C(o){var t=l,n=c;return l=c=void 0,h=o,d=e.apply(n,t)}function x(e){return h=e,u=setTimeout(w,o),b?C(e):d}function m(e){var t=e-f;return void 0===f||t>=o||t<0||p&&e-h>=g}function w(){var e=i();if(m(e))return G(e);u=setTimeout(w,function(e){var t=o-(e-f);return p?a(t,g-(e-h)):t}(e))}function G(e){return u=void 0,v&&l?C(e):(l=c=void 0,d)}function y(){var e=i(),t=m(e);if(l=arguments,c=this,f=e,t){if(void 0===u)return x(f);if(p)return clearTimeout(u),u=setTimeout(w,o),C(f)}return void 0===u&&(u=setTimeout(w,o)),d}return o=r(o)||0,n(t)&&(b=!!t.leading,g=(p="maxWait"in t)?s(r(t.maxWait)||0,o):g,v="trailing"in t?!!t.trailing:v),y.cancel=function(){void 0!==u&&clearTimeout(u),h=0,l=f=c=u=void 0},y.flush=function(){return void 0===u?d:G(i())},y}},218:e=>{e.exports=function(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,o,t)=>{var n=t(239),i=t(5);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},771:(e,o,t)=>{var n=t(639);e.exports=function(){return n.Date.now()}},493:(e,o,t)=>{var n=t(279),i=t(218);e.exports=function(e,o,t){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(t)&&(r="leading"in t?!!t.leading:r,s="trailing"in t?!!t.trailing:s),n(e,o,{leading:r,maxWait:o,trailing:s})}},841:(e,o,t)=>{var n=t(561),i=t(218),r=t(448),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(i(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=i(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var t=a.test(e);return t||l.test(e)?c(e.slice(2),t?2:8):s.test(e)?NaN:+e}},140:function(e,o,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.CustomDelay=void 0;const i=n(t(493)),r=t(613),s=t(112),a=t(549);class l{constructor(e){this.cachedDiagnostics={},this.updateCachedDiagnosticForUri=e=>{const o=e.toString(),t=a.languages.getDiagnostics(e),n=this.cachedDiagnostics[o],i={[o]:{}};for(const e of t)i[o]&&(i[o][l.convertDiagnosticToId(e)]=e);if(n){const t=i[o],r=Object.keys(n),s=Object.keys(t);for(const e of r)s.includes(e)||this.removeItem(o,e);for(const n of s)r.includes(n)||this.addItem(e,o,n,t[n])}else this.cachedDiagnostics[o]=i[o],setTimeout((()=>{this.updateDecorationsThrottled(o)}),this.delay)},this.onDiagnosticChange=e=>{if(e.uris.length)for(const o of e.uris)this.updateCachedDiagnosticForUri(o);else this.cachedDiagnostics={}},this.removeItem=(e,o)=>{var t;null===(t=this.cachedDiagnostics[e])||void 0===t||delete t[o],this.updateDecorationsThrottled(e)},this.addItem=(e,o,t,n)=>{setTimeout((()=>{const i=a.languages.getDiagnostics(e),r={[o]:{}};for(const e of i)r[o]&&(r[o][l.convertDiagnosticToId(e)]=e);t in r[o]&&(this.cachedDiagnostics[o]&&(this.cachedDiagnostics[o][t]=n),this.updateDecorationsThrottled(o))}),this.delay)},this.updateDecorations=e=>{for(const o of a.window.visibleTextEditors)if(o.document.uri.toString()===e){if(s.Global.excludePatterns)for(const e of s.Global.excludePatterns)if(0!==a.languages.match(e,o.document))return;r.doUpdateDecorations(o,this.groupByLine(this.cachedDiagnostics[e]))}},this.delay=Math.max(e,500),this.updateDecorationsThrottled=i.default(this.updateDecorations,300,{leading:!0,trailing:!0})}static convertDiagnosticToId(e){return`${e.range.start.line}${e.message}`}groupByLine(e){const o=Object.create(null);for(const t in e){const n=e[t];if(r.shouldExcludeDiagnostic(n))continue;const i=n.range.start.line;o[i]?o[i].push(n):o[i]=[n]}return o}}o.CustomDelay=l},49:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.registerAllCommands=void 0;const n=t(613),i=t(112),r=t(549);o.registerAllCommands=function(e){const o=r.commands.registerCommand("errorLens.toggle",(()=>{i.Global.errorLensEnabled=!i.Global.errorLensEnabled,i.Global.errorLensEnabled?i.updateEverything():i.disposeEverything()})),t=r.commands.registerCommand("errorLens.toggleError",(()=>{i.Global.errorEnabled=!i.Global.errorEnabled,n.updateDecorationsForAllVisibleEditors()})),s=r.commands.registerCommand("errorLens.toggleWarning",(()=>{i.Global.warningEabled=!i.Global.warningEabled,n.updateDecorationsForAllVisibleEditors()})),a=r.commands.registerCommand("errorLens.toggleInfo",(()=>{i.Global.infoEnabled=!i.Global.infoEnabled,n.updateDecorationsForAllVisibleEditors()})),l=r.commands.registerCommand("errorLens.toggleHint",(()=>{i.Global.hintEnabled=!i.Global.hintEnabled,n.updateDecorationsForAllVisibleEditors()})),c=r.commands.registerTextEditorCommand("errorLens.copyProblemMessage",(e=>{const o={};for(const t of r.languages.getDiagnostics(e.document.uri)){const e=t.range.start.line;o[e]?o[e].push(t):o[e]=[t]}const t=o[e.selection.active.line];if(!t)return void r.window.showInformationMessage("There's no problem at the active line.");const n=t.sort(((e,o)=>e.severity-o.severity))[0],i=n.source?`[${n.source}] `:"";r.env.clipboard.writeText(i+n.message)})),g=r.commands.registerTextEditorCommand("errorLens.statusBarCommand",(async e=>{if("goToLine"===i.extensionConfig.statusBarCommand||"goToProblem"===i.extensionConfig.statusBarCommand){const o=new r.Range(i.Global.statusBar.activeMessagePosition,i.Global.statusBar.activeMessagePosition);e.selection=new r.Selection(o.start,o.end),e.revealRange(o,r.TextEditorRevealType.Default),await r.commands.executeCommand("workbench.action.focusActiveEditorGroup"),"goToProblem"===i.extensionConfig.statusBarCommand&&r.commands.executeCommand("editor.action.marker.next")}else if("copyMessage"===i.extensionConfig.statusBarCommand){const e=i.Global.statusBar.activeMessageSource?`[${i.Global.statusBar.activeMessageSource}] `:"";r.env.clipboard.writeText(e+i.Global.statusBar.activeMessageText)}}));e.subscriptions.push(o,t,s,a,l,c,g)}},613:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.diagnosticToInlineMessage=o.isSeverityEnabled=o.shouldExcludeDiagnostic=o.getDiagnosticAndGroupByLine=o.updateDecorationsForUri=o.updateDecorationsForAllVisibleEditors=o.doUpdateDecorations=o.setDecorationStyle=void 0;const n=t(112),i=t(394),r=t(593),s=t(549);function a(e,o,t){const s=[],a=[],l=[],c=[];let g;if("closestProblem"===n.extensionConfig.followCursor){void 0===t&&(t=e.selection);const i=t.start.line,r=Object.entries(o).sort(((e,o)=>Math.abs(i-Number(e[0]))-Math.abs(i-Number(o[0]))));r.length=n.extensionConfig.followCursorMore+1,g=r.map((e=>e[1][0].range.start.line))}for(const i in o){const f=o[i].sort(((e,o)=>e.severity-o.severity)),h=f[0],b=h.severity;if(d(b)){let o={};switch(b){case 0:o=n.Global.decorationRenderOptionsError;break;case 1:o=n.Global.decorationRenderOptionsWarning;break;case 2:o=n.Global.decorationRenderOptionsInfo;break;case 3:o=n.Global.decorationRenderOptionsHint}const i=u(n.extensionConfig.messageTemplate,h,f.length),d={...o,after:{...o.after||{},contentText:n.extensionConfig.messageEnabled?r.truncateString(n.extensionConfig.removeLinebreaks?r.replaceLinebreaks(i):i):""}};let p;if("allLines"===n.extensionConfig.followCursor)p=h.range;else{void 0===t&&(t=e.selection);const o=h.range;if("activeLine"===n.extensionConfig.followCursor){const e=t.start.line-n.extensionConfig.followCursorMore,i=t.end.line+n.extensionConfig.followCursorMore;(o.start.line>=e&&o.start.line<=i||o.end.line>=e&&o.end.line<=i)&&(p=o)}else"closestProblem"===n.extensionConfig.followCursor&&(g.includes(o.start.line)||g.includes(o.end.line))&&(p=o);if(!p)continue}const v={range:p,renderOptions:d};switch(b){case 0:s.push(v);break;case 1:a.push(v);break;case 2:l.push(v);break;case 3:c.push(v)}}}e.setDecorations(n.Global.decorationTypeError,s),e.setDecorations(n.Global.decorationTypeWarning,a),e.setDecorations(n.Global.decorationTypeInfo,l),e.setDecorations(n.Global.decorationTypeHint,c),n.Global.renderGutterIconsAsSeparateDecoration&&i.doUpdateGutterDecorations(e,o),n.Global.statusBar.updateText(e,o)}function l(e,o,t){if(void 0===o&&(o=s.window.activeTextEditor),o&&o.document.uri.fsPath){if(n.Global.excludePatterns)for(const e of n.Global.excludePatterns)if(0!==s.languages.match(e,o.document))return;a(o,c(e),t)}}function c(e){const o=Object.create(null),t=s.languages.getDiagnostics(e);for(const e of t){if(g(e))continue;const t=e.range.start.line;o[t]?o[t].push(e):o[t]=[e]}return o}function g(e){for(const o of n.Global.excludeRegexp)if(o.test(e.message))return!0;if(e.source)for(const o of n.Global.excludeSources)if(o===e.source)return!0;return!1}function d(e){return!!(0===e&&n.Global.configErrorEnabled&&n.Global.errorEnabled||1===e&&n.Global.configWarningEnabled&&n.Global.warningEabled||2===e&&n.Global.configInfoEnabled&&n.Global.infoEnabled||3===e&&n.Global.configHintEnabled&&n.Global.hintEnabled)}function u(e,o,t){if("$message"===e)return o.message;{let i=e.replace("$message",o.message).replace("$severity",n.extensionConfig.severityText[o.severity]||"");if(e.includes("$count")&&(i=t>1?i.replace("$count",String(t)):i.replace(/(\s*?)?(\S*?)?(\$count)(\S*?)?(\s*?)?/,((e,o,t,n,i,r)=>(o||"")+(r||"")))),e.includes("$source")&&(i=o.source?i.replace("$source",String(o.source)):i.replace(/(\s*?)?(\S*?)?(\$source)(\S*?)?(\s*?)?/,((e,o,t,n,i,r)=>(o||"")+(r||"")))),e.includes("$code")){const e="object"==typeof o.code?String(o.code.value):String(o.code);i=o.code?i.replace("$code",e):i.replace(/(\s*?)?(\S*?)?(\$code)(\S*?)?(\s*?)?/,((e,o,t,n,i,r)=>(o||"")+(r||"")))}return i}}o.setDecorationStyle=function(){let e;n.extensionConfig.gutterIconsEnabled&&(e=i.getGutterStyles(n.Global.extensionContext),n.Global.renderGutterIconsAsSeparateDecoration&&(n.Global.decorationTypeGutterError=s.window.createTextEditorDecorationType({gutterIconPath:e.errorIconPath,gutterIconSize:n.extensionConfig.gutterIconSize,light:{gutterIconPath:e.errorIconPathLight,gutterIconSize:n.extensionConfig.gutterIconSize}}),n.Global.decorationTypeGutterWarning=s.window.createTextEditorDecorationType({gutterIconPath:e.warningIconPath,gutterIconSize:n.extensionConfig.gutterIconSize,light:{gutterIconPath:e.warningIconPathLight,gutterIconSize:n.extensionConfig.gutterIconSize}}),n.Global.decorationTypeGutterInfo=s.window.createTextEditorDecorationType({gutterIconPath:e.infoIconPath,gutterIconSize:n.extensionConfig.gutterIconSize,light:{gutterIconPath:e.infoIconPathLight,gutterIconSize:n.extensionConfig.gutterIconSize}}),e=void 0));const o=new s.ThemeColor("errorLens.errorBackground"),t=new s.ThemeColor("errorLens.errorBackgroundLight"),r=new s.ThemeColor("errorLens.errorForeground"),a=new s.ThemeColor("errorLens.errorForegroundLight"),l=new s.ThemeColor("errorLens.errorMessageBackground"),c=new s.ThemeColor("errorLens.warningBackground"),g=new s.ThemeColor("errorLens.warningBackgroundLight"),d=new s.ThemeColor("errorLens.warningForeground"),u=new s.ThemeColor("errorLens.warningForegroundLight"),f=new s.ThemeColor("errorLens.warningMessageBackground"),h=new s.ThemeColor("errorLens.infoBackground"),b=new s.ThemeColor("errorLens.infoBackgroundLight"),p=new s.ThemeColor("errorLens.infoForeground"),v=new s.ThemeColor("errorLens.infoForegroundLight"),C=new s.ThemeColor("errorLens.infoMessageBackground"),x=new s.ThemeColor("errorLens.hintBackground"),m=new s.ThemeColor("errorLens.hintBackgroundLight"),w=new s.ThemeColor("errorLens.hintForeground"),G=new s.ThemeColor("errorLens.hintForegroundLight"),y=new s.ThemeColor("errorLens.hintMessageBackground"),D=new s.ThemeColor("errorLens.statusBarErrorForeground"),I=new s.ThemeColor("errorLens.statusBarWarningForeground"),T=new s.ThemeColor("errorLens.statusBarInfoForeground"),E=new s.ThemeColor("errorLens.statusBarHintForeground"),S=/^\d+$/,P=n.extensionConfig.fontFamily?`font-family:${n.extensionConfig.fontFamily}`:"",L=n.extensionConfig.fontSize?`font-size:${S.test(n.extensionConfig.fontSize)?`${n.extensionConfig.fontSize}px`:n.extensionConfig.fontSize}`:"",k=n.extensionConfig.padding?`padding:${S.test(n.extensionConfig.padding)?`${n.extensionConfig.padding}px`:n.extensionConfig.padding}`:"",B=`margin-left:${S.test(n.extensionConfig.margin)?`${n.extensionConfig.margin}px`:n.extensionConfig.margin}`,O=`border-radius: ${n.extensionConfig.borderRadius||"0"}`,M=n.extensionConfig.scrollbarHackEnabled?"position:absolute;pointer-events:none;top:50%;transform:translateY(-50%);":"",$={fontStyle:n.extensionConfig.fontStyleItalic?"italic":"normal",fontWeight:n.extensionConfig.fontWeight,textDecoration:`none;${P};${L};${k};${B};${O};${M}`};n.Global.decorationRenderOptionsError={backgroundColor:o,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.errorIconPath,after:{...$,color:r,backgroundColor:l},light:{backgroundColor:t,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.errorIconPathLight,after:{color:a}},isWholeLine:!0},n.Global.decorationRenderOptionsWarning={backgroundColor:c,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.warningIconPath,after:{...$,color:d,backgroundColor:f},light:{backgroundColor:g,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.warningIconPathLight,after:{color:u}},isWholeLine:!0},n.Global.decorationRenderOptionsInfo={backgroundColor:h,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.infoIconPath,after:{...$,color:p,backgroundColor:C},light:{backgroundColor:b,gutterIconSize:n.extensionConfig.gutterIconSize,gutterIconPath:null==e?void 0:e.infoIconPathLight,after:{color:v}},isWholeLine:!0},n.Global.decorationRenderOptionsHint={backgroundColor:x,after:{...$,color:w,backgroundColor:y},light:{backgroundColor:m,after:{color:G}},isWholeLine:!0},n.extensionConfig.messageEnabled||(n.Global.decorationRenderOptionsError.backgroundColor=void 0,n.Global.decorationRenderOptionsError.after=void 0,n.Global.decorationRenderOptionsError.light.backgroundColor=void 0,n.Global.decorationRenderOptionsError.light.after=void 0,n.Global.decorationRenderOptionsWarning.backgroundColor=void 0,n.Global.decorationRenderOptionsWarning.after=void 0,n.Global.decorationRenderOptionsWarning.light.backgroundColor=void 0,n.Global.decorationRenderOptionsWarning.light.after=void 0,n.Global.decorationRenderOptionsInfo.backgroundColor=void 0,n.Global.decorationRenderOptionsInfo.after=void 0,n.Global.decorationRenderOptionsInfo.light.backgroundColor=void 0,n.Global.decorationRenderOptionsInfo.light.after=void 0,n.Global.decorationRenderOptionsHint.backgroundColor=void 0,n.Global.decorationRenderOptionsHint.after=void 0,n.Global.decorationRenderOptionsHint.light.backgroundColor=void 0,n.Global.decorationRenderOptionsHint.light.after=void 0),n.Global.decorationTypeError=s.window.createTextEditorDecorationType(n.Global.decorationRenderOptionsError),n.Global.decorationTypeWarning=s.window.createTextEditorDecorationType(n.Global.decorationRenderOptionsWarning),n.Global.decorationTypeInfo=s.window.createTextEditorDecorationType(n.Global.decorationRenderOptionsInfo),n.Global.decorationTypeHint=s.window.createTextEditorDecorationType(n.Global.decorationRenderOptionsHint),n.Global.statusBar.statusBarColors=[D,I,T,E]},o.doUpdateDecorations=a,o.updateDecorationsForAllVisibleEditors=function(){for(const e of s.window.visibleTextEditors)l(e.document.uri,e)},o.updateDecorationsForUri=l,o.getDiagnosticAndGroupByLine=c,o.shouldExcludeDiagnostic=g,o.isSeverityEnabled=d,o.diagnosticToInlineMessage=u},977:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.updateOnSaveListener=o.updateCursorChangeListener=o.updateChangeDiagnosticListener=o.updateChangeVisibleTextEditorsListener=o.updateChangedActiveTextEditorListener=void 0;const n=t(140),i=t(613),r=t(112),s=t(549);o.updateChangedActiveTextEditorListener=function(){var e;null===(e=r.Global.onDidChangeActiveTextEditor)||void 0===e||e.dispose(),r.Global.onDidChangeActiveTextEditor=s.window.onDidChangeActiveTextEditor((e=>{r.extensionConfig.onSave&&(r.Global.lastSavedTimestamp=Date.now()),e?i.updateDecorationsForUri(e.document.uri,e):r.Global.statusBar.clear()}))},o.updateChangeVisibleTextEditorsListener=function(){var e;null===(e=r.Global.onDidChangeVisibleTextEditors)||void 0===e||e.dispose(),r.Global.onDidChangeVisibleTextEditors=s.window.onDidChangeVisibleTextEditors(i.updateDecorationsForAllVisibleEditors)},o.updateChangeDiagnosticListener=function(){var e;function o(e){for(const o of e.uris)for(const e of s.window.visibleTextEditors)o.fsPath===e.document.uri.fsPath&&i.updateDecorationsForUri(o,e)}null===(e=r.Global.onDidChangeDiagnosticsDisposable)||void 0===e||e.dispose(),r.extensionConfig.onSave?r.Global.onDidChangeDiagnosticsDisposable=s.languages.onDidChangeDiagnostics((e=>{Date.now()-r.Global.lastSavedTimestamp<r.extensionConfig.onSaveTimeout&&o(e)})):"number"==typeof r.extensionConfig.delay&&r.extensionConfig.delay>0?(r.Global.customDelay=new n.CustomDelay(r.extensionConfig.delay),r.Global.onDidChangeDiagnosticsDisposable=s.languages.onDidChangeDiagnostics(r.Global.customDelay.onDiagnosticChange)):r.Global.onDidChangeDiagnosticsDisposable=s.languages.onDidChangeDiagnostics(o)},o.updateCursorChangeListener=function(){var e;if(null===(e=r.Global.onDidCursorChangeDisposable)||void 0===e||e.dispose(),"activeLine"===r.extensionConfig.followCursor||"closestProblem"===r.extensionConfig.followCursor||r.extensionConfig.statusBarMessageEnabled){let e=999999;r.Global.onDidCursorChangeDisposable=s.window.onDidChangeTextEditorSelection((o=>{const t=o.selections[0];1===o.selections.length&&t.isEmpty&&e!==t.active.line&&(i.updateDecorationsForUri(o.textEditor.document.uri,o.textEditor,t),e=o.selections[0].active.line)}))}},o.updateOnSaveListener=function(){var e;null===(e=r.Global.onDidSaveTextDocumentDisposable)||void 0===e||e.dispose(),r.extensionConfig.onSave&&(r.Global.onDidSaveTextDocumentDisposable=s.workspace.onWillSaveTextDocument((e=>{e.reason===s.TextDocumentSaveReason.Manual&&(setTimeout((()=>{i.updateDecorationsForUri(e.document.uri)}),200),r.Global.lastSavedTimestamp=Date.now())})))}},112:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.deactivate=o.disposeEverything=o.updateEverything=o.activate=o.Global=o.extensionConfig=void 0;const n=t(49),i=t(613),r=t(977),s=t(158),a=t(549);class l{}function c(){var e;!function(){l.excludeRegexp=[],l.excludeSources=o.extensionConfig.excludeBySource;for(const e of o.extensionConfig.exclude)"string"==typeof e&&l.excludeRegexp.push(new RegExp(e,"i"));Array.isArray(o.extensionConfig.excludePatterns)&&0!==o.extensionConfig.excludePatterns.length?l.excludePatterns=o.extensionConfig.excludePatterns.map((e=>({pattern:e}))):l.excludePatterns=void 0}(),l.renderGutterIconsAsSeparateDecoration=o.extensionConfig.gutterIconsEnabled&&o.extensionConfig.gutterIconsFollowCursorOverride&&"allLines"!==o.extensionConfig.followCursor,null===(e=l.statusBar)||void 0===e||e.dispose(),l.statusBar=new s.StatusBar(o.extensionConfig.statusBarMessageEnabled,o.extensionConfig.statusBarColorsEnabled,o.extensionConfig.statusBarMessageType),i.setDecorationStyle(),l.configErrorEnabled=o.extensionConfig.enabledDiagnosticLevels.includes("error"),l.configWarningEnabled=o.extensionConfig.enabledDiagnosticLevels.includes("warning"),l.configInfoEnabled=o.extensionConfig.enabledDiagnosticLevels.includes("info"),l.configHintEnabled=o.extensionConfig.enabledDiagnosticLevels.includes("hint"),i.updateDecorationsForAllVisibleEditors(),r.updateChangeDiagnosticListener(),r.updateChangeVisibleTextEditorsListener(),r.updateOnSaveListener(),r.updateCursorChangeListener(),r.updateChangedActiveTextEditorListener()}function g(){var e,o,t,n,i,r,s,a,c,g,d,u,f;null===(e=l.decorationTypeError)||void 0===e||e.dispose(),null===(o=l.decorationTypeWarning)||void 0===o||o.dispose(),null===(t=l.decorationTypeInfo)||void 0===t||t.dispose(),null===(n=l.decorationTypeHint)||void 0===n||n.dispose(),null===(i=l.decorationTypeGutterError)||void 0===i||i.dispose(),null===(r=l.decorationTypeGutterWarning)||void 0===r||r.dispose(),null===(s=l.decorationTypeGutterInfo)||void 0===s||s.dispose(),null===(a=l.onDidChangeVisibleTextEditors)||void 0===a||a.dispose(),null===(c=l.onDidChangeDiagnosticsDisposable)||void 0===c||c.dispose(),null===(g=l.onDidChangeActiveTextEditor)||void 0===g||g.dispose(),null===(d=l.onDidSaveTextDocumentDisposable)||void 0===d||d.dispose(),null===(u=l.onDidCursorChangeDisposable)||void 0===u||u.dispose(),null===(f=l.statusBar)||void 0===f||f.dispose()}o.Global=l,l.errorLensEnabled=!0,l.errorEnabled=!0,l.warningEabled=!0,l.infoEnabled=!0,l.hintEnabled=!0,l.configErrorEnabled=!0,l.configWarningEnabled=!0,l.configInfoEnabled=!0,l.configHintEnabled=!0,l.excludeRegexp=[],l.excludeSources=[],l.excludePatterns=void 0,l.lastSavedTimestamp=Date.now()+2e3,o.activate=function(e){function t(){o.extensionConfig=a.workspace.getConfiguration("errorLens"),g(),c()}l.extensionContext=e,t(),n.registerAllCommands(e),e.subscriptions.push(a.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("errorLens")&&t()})))},o.updateEverything=c,o.disposeEverything=g,o.deactivate=function(){}},394:function(e,o,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.doUpdateGutterDecorations=o.getGutterStyles=void 0;const i=t(747),r=n(t(622)),s=t(613),a=t(112);o.getGutterStyles=function(e){const o=Object.create(null);if(o.iconSet=a.extensionConfig.gutterIconSet,"borderless"!==a.extensionConfig.gutterIconSet&&"default"!==a.extensionConfig.gutterIconSet&&"circle"!==a.extensionConfig.gutterIconSet&&"defaultOutline"!==a.extensionConfig.gutterIconSet&&(o.iconSet="default"),"circle"===o.iconSet&&function(e){i.promises.writeFile(e.asAbsolutePath("./img/circle/error-dark.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.errorGutterIconColor}"/></svg>`),i.promises.writeFile(e.asAbsolutePath("./img/circle/error-light.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.light.errorGutterIconColor||a.extensionConfig.errorGutterIconColor}"/></svg>`),i.promises.writeFile(e.asAbsolutePath("./img/circle/warning-dark.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.warningGutterIconColor}"/></svg>`),i.promises.writeFile(e.asAbsolutePath("./img/circle/warning-light.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.light.warningGutterIconColor||a.extensionConfig.warningGutterIconColor}"/></svg>`),i.promises.writeFile(e.asAbsolutePath("./img/circle/info-dark.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.infoGutterIconColor}"/></svg>`),i.promises.writeFile(e.asAbsolutePath("./img/circle/info-light.svg"),`<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><circle cx="15" cy="15" r="9" fill="${a.extensionConfig.light.infoGutterIconColor||a.extensionConfig.infoGutterIconColor}"/></svg>`)}(e),a.extensionConfig.errorGutterIconPath){const e=r.default.basename(a.extensionConfig.errorGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.errorGutterIconPath,t),o.errorIconPath=t}else o.errorIconPath=e.asAbsolutePath(`./img/${o.iconSet}/error-dark.svg`);if(a.extensionConfig.light.errorGutterIconPath){const e=r.default.basename(a.extensionConfig.light.errorGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.light.errorGutterIconPath,t),o.errorIconPathLight=t}else o.errorIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/error-light.svg`);if(a.extensionConfig.warningGutterIconPath){const e=r.default.basename(a.extensionConfig.warningGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.warningGutterIconPath,t),o.warningIconPath=t}else o.warningIconPath=e.asAbsolutePath(`./img/${o.iconSet}/warning-dark.svg`);if(a.extensionConfig.light.warningGutterIconPath){const e=r.default.basename(a.extensionConfig.light.warningGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.light.warningGutterIconPath,t),o.warningIconPathLight=t}else o.warningIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/warning-light.svg`);if(a.extensionConfig.infoGutterIconPath){const e=r.default.basename(a.extensionConfig.infoGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.infoGutterIconPath,t),o.infoIconPath=t}else o.infoIconPath=e.asAbsolutePath(`./img/${o.iconSet}/info-dark.svg`);if(a.extensionConfig.light.infoGutterIconPath){const e=r.default.basename(a.extensionConfig.light.infoGutterIconPath),t=r.default.join(a.Global.extensionContext.asAbsolutePath("./img"),e);i.promises.copyFile(a.extensionConfig.light.infoGutterIconPath,t),o.infoIconPathLight=t}else o.infoIconPathLight=e.asAbsolutePath(`./img/${o.iconSet}/info-light.svg`);return o},o.doUpdateGutterDecorations=function(e,o){const t=[],n=[],i=[];for(const e in o){const r=o[e].sort(((e,o)=>e.severity-o.severity))[0],a=r.severity;if(s.isSeverityEnabled(a)){const e={range:r.range};switch(a){case 0:t.push(e);break;case 1:n.push(e);break;case 2:i.push(e)}}}e.setDecorations(a.Global.decorationTypeGutterError,t),e.setDecorations(a.Global.decorationTypeGutterWarning,n),e.setDecorations(a.Global.decorationTypeGutterInfo,i)}},158:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.StatusBar=void 0;const n=t(613),i=t(112),r=t(593),s=t(549);o.StatusBar=class{constructor(e,o,t){this.isEnabled=e,this.colorsEnabled=o,this.messageType=t,this.statusBarColors=[],this.activeMessagePosition=new s.Position(0,0),this.activeMessageText="",this.activeMessageSource="",this.colorsEnabled=o,this.messageType=t,this.statusBarItem=s.window.createStatusBarItem(void 0,-9999),this.statusBarItem.command="errorLens.statusBarCommand",this.isEnabled&&this.statusBarItem.show()}updateText(e,o){if(!this.isEnabled)return;const t=Object.keys(o);if(0===t.length)return void this.clear();const s=e.selection.active.line;let a,l=0;if("activeLine"===this.messageType){if(!o[s])return void this.clear();for(const e of o[s])n.isSeverityEnabled(e.severity)&&(a=e,l=o[s].length)}else if("closestProblem"===this.messageType){const e=t.map(Number).sort(((e,o)=>Math.abs(s-e)-Math.abs(s-o)));e:for(const t of e){const e=o[t];for(const o of e)if(n.isSeverityEnabled(o.severity)){a=o,l=e.length;break e}}}else if("closestSeverity"===this.messageType){const e=t.map((e=>o[e])).flat().sort(((e,o)=>1e4*e.severity-1e4*o.severity+(Math.abs(s-e.range.start.line)-Math.abs(s-o.range.start.line))));for(const t of e)if(n.isSeverityEnabled(t.severity)){a=t,l=o[t.range.start.line].length;break}}if(!a)return void this.clear();this.activeMessagePosition=a.range.start;let c=n.diagnosticToInlineMessage(i.extensionConfig.statusBarMessageTemplate||i.extensionConfig.messageTemplate,a,l);i.extensionConfig.removeLinebreaks&&(c=r.replaceLinebreaks(c)),this.activeMessageText=c,this.activeMessageSource=a.source,this.colorsEnabled&&(this.statusBarItem.color=this.statusBarColors[a.severity]),this.statusBarItem.text=c,this.statusBarItem.tooltip=c}clear(){this.statusBarItem.text="",this.statusBarItem.tooltip=""}dispose(){this.statusBarItem.dispose()}}},593:(e,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.replaceLinebreaks=o.truncateString=void 0,o.truncateString=function(e){return e.length>500?`${e.slice(0,500)}…`:e},o.replaceLinebreaks=function(e){return e.replace(/[\n\r\t]+?/g," ")}},747:e=>{"use strict";e.exports=require("fs")},622:e=>{"use strict";e.exports=require("path")},549:e=>{"use strict";e.exports=require("vscode")}},o={},t=function t(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}(112);module.exports=t})();