(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2004:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("fb98");var r,i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=n("d225"),s=n("b0b4"),l=n("308d"),u=n("6bb5"),d=n("2a88"),f=n("4e2b"),h=(n("6762"),n("2fdb"),n("0a0d")),p=n.n(h),_=n("7618");r=function(){function e(){Object(c["a"])(this,e),this.handlers={},this.globalHandlers={}}return Object(s["a"])(e,[{key:"init",value:function(){var e=this;if(this.__enabled())return this.log("Начинаем регистрировать обработчки на слоты"),this.__events().forEach(function(t){return e.__wrapperBridgeObject()["".concat(t)].connect(e,e.__connectHandler(t)),e.log("Зарегистрирован обработчик для ".concat(t))}),this.__globalEvents().forEach(function(t){return e.__wrapperBridgeObject()["".concat(t)].connect(e,e.__globalConnectHandler(t)),e.log("Зарегистрирован глобальный обработчик для ".concat(t))});this.log("Похоже это не wrapper. Так что ничего не делаем")}},{key:"addGlobalHandler",value:function(e,t){var n;if(Object(_["a"])(t))return(n=this.globalHandlers)[e]||(n[e]=[]),this.globalHandlers[e].push(t)}},{key:"removeGlobalHandler",value:function(e,t){var n,r;if(Object(_["a"])(t))return(n=this.globalHandlers)[e]||(n[e]=[]),r=this.globalHandlers[e].indexOf(t),r>=0?this.globalHandlers[e].splice(r,1):void 0}},{key:"log",value:function(e){return console.log("[WrapperBridge] ".concat(e))}},{key:"__globalEvents",value:function(){return[]}},{key:"__notRemovedNow",value:function(){return[]}},{key:"__events",value:function(){return[]}},{key:"__enabled",value:function(){return!1}},{key:"__registerHandler",value:function(e){var t;return t=this.__generateHandlerId(),e&&(this.handlers["".concat(t)]=e),this.log("Зарегистрирован обработчик с id: ".concat(t)),t}},{key:"__unregisterHandler",value:function(e){return delete this.handlers["".concat(e)],this.log("Обработчик ".concat(e," удален"))}},{key:"__generateHandlerId",value:function(){return"".concat(p()())}},{key:"__wrapperBridgeObject",value:function(){return window.__wrapperBridge}},{key:"__connectHandler",value:function(e){return function(){var t,n,r,i,o;return t=1===arguments.length?[arguments[0]]:Array.apply(null,arguments),o=t[0],n=t.slice(1),this.log("Получен ответ для обработчика ".concat(o)),r=this.handlers["".concat(o)],i=r,"object"===Object(_["a"])(r)&&(i=r["".concat(e)]),this.__notRemovedNow().includes(e)||this.__unregisterHandler(o),this.log("Вызываем обработчик ".concat(o,":").concat(e)),this.log(i),i.apply(this,n)}}},{key:"__globalConnectHandler",value:function(e){return function(){var t;return this.log("Получено событие для глобального обработчика '".concat(e,"'")),console.log("".concat(this.globalHandlers)),t=this.globalHandlers["".concat(e)]||[],console.log("handlers.length = ".concat(t.length)),t.forEach(function(e){return e.apply(this)})}}}]),e}();var g,v=r;g=function(){var e,t,n,r=function(r){function i(e){var t;return Object(c["a"])(this,i),t=Object(l["a"])(this,Object(u["a"])(i).call(this)),t.wrapperBridge=e,t}return Object(f["a"])(i,r),Object(s["a"])(i,[{key:"enabled",value:function(){return this.__enabled()}},{key:"__bridge",value:function(){return this.enabled()?this.wrapperBridge.__wrapperBridge().officeBridge:null}},{key:"version",value:function(){var e;return null!=(e=this.__bridge())?e.version():void 0}},{key:"checkAvailable",value:function(e){var t,n;return this.enabled()?(t=function(t,n){var r;if(r="","office_not_installed"===n?r="Microsoft Office не установлен":"unsupported_platform"===n&&(r="Неподдерживаемая платформа запуска"),e)return e(t,n,r)},n=this.__registerHandler(t),this.log("Посылаем сигнал на checkAvailable с id обработчика ".concat(n,".")),this.__bridge().checkAvailable(n)):e?e(!1,"not_wrapper","Запуск приложения не через обертку"):void 0}},{key:"generateFromTemplate",value:function(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.enabled()?(r=this.__registerHandler({generateFromTemplateStarted:i["started"],generateFromTemplateInProcess:i["inProcess"],generateFromTemplateFinished:i["finished"],generateFromTemplateError:i["error"]}),this.log("Посылаем сигнал на generateFromTemplate с id обработчика ".concat(r,". Шаблон: ").concat(e,". Параметры: ").concat(t,". Итоговый файл: ").concat(n)),this.__bridge().generateFromTemplate(r,e,t,n)):null}},{key:"saveFile",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.enabled()?(n=this.__registerHandler({saveFileSaved:r["fileSaved"],saveFileError:r["fileError"]}),this.log("Посылаем сигнал на saveFile с id обработчика ".concat(n,". Файл: ").concat(e,". Сохранить: ").concat(t)),this.__bridge().saveFile(n,e,t)):null}},{key:"__globalEvents",value:function(){return t}},{key:"__notRemovedNow",value:function(){return n}},{key:"__events",value:function(){return e}},{key:"__enabled",value:function(){return this.wrapperBridge.hasWrapperBridge()}},{key:"__wrapperBridgeObject",value:function(){return this.__bridge()}}]),i}(v);return t=[],n=["generateFromTemplateStarted","generateFromTemplateInProcess"],e=["generateFromTemplateStarted","generateFromTemplateInProcess","generateFromTemplateFinished","generateFromTemplateError","saveFileSaved","saveFileError","checkAvailableResult"],r}.call(void 0);var m,b,y=g;m=function(){var e,t,n,r=function(r){function i(){return Object(c["a"])(this,i),Object(l["a"])(this,Object(u["a"])(i).call(this))}return Object(f["a"])(i,r),Object(s["a"])(i,[{key:"getOfficeBridge",value:function(){return this.__officeBridge}},{key:"beep",value:function(){var e;return null!=(e=this.__wrapperBridge())?e.beep():void 0}},{key:"isInternalLink",value:function(){var e;return(null!=(e=this.__wrapperBridge())?e.isInternalLink():void 0)||!1}},{key:"isExecExternal",value:function(e,t,n){return!!this.hasWrapperBridge()&&this.__wrapperBridge().isExecExternal(e,t,n)}},{key:"echo",value:function(e,t){var n;if(this.hasWrapperBridge())return n=this.__registerHandler(t),this.log("Посылаем сигнал на echo с id обработчика ".concat(n)),this.__wrapperBridge().echo(n,e),!0}},{key:"isContentDataFileExists",value:function(e){var t;return!!this.hasWrapperBridge()&&(null!=(t=this.__wrapperBridge())?t.isContentDataFileExists(e):void 0)}},{key:"readFromContentData",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler({readFromContentDataFinished:t,readFromContentDataError:n}),this.log("Посылаем сигнал на readFromContentData с id обработчика ".concat(r,". Файл: ").concat(e)),this.__wrapperBridge().readFromContentData(r,e)}},{key:"readFromStore",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler({readFromStoreFinished:t,readFromStoreError:n}),this.log("Посылаем сигнал на readFromStore с id обработчика ".concat(r,". Файл: ").concat(e)),this.__wrapperBridge().readFromStore(r,e)}},{key:"writeToStore",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler(n),this.log("Посылаем сигнал на echo с id обработчика ".concat(r)),this.__wrapperBridge().writeToStore(r,e,t),!0}},{key:"close",value:function(e,t){var n;if(this.hasWrapperBridge())return n=this.__registerHandler(t),this.log("Посылаем сигнал на close с id обработчика ".concat(n)),this.__wrapperBridge().close(n,e),!0}},{key:"logger",value:function(e){var t;if(this.hasWrapperBridge())return t=this.__registerHandler(function(){return{}}),this.__wrapperBridge().logger(t,e)}},{key:"copyDataFile",value:function(e,t,n,r,i,o){var a;if(this.hasWrapperBridge())return a=this.__registerHandler({copyDataFileStarted:r,copyDataFileFinished:n,copyDataFileCancelled:i,copyDataFileError:o}),this.log("Посылаем сигнал на copyDateFile обработчика ".concat(a)),this.__wrapperBridge().copyDateFile(a,e,t||""),!0}},{key:"execExternal",value:function(e,t,n,r,i,o){var a;if(this.hasWrapperBridge())return a=this.__registerHandler({execExternalStarted:r,execExternalFinished:i,execExternalError:o}),this.log("Посылаем сигнал на echo с execExternal обработчика ".concat(a)),this.__wrapperBridge().execExternal(a,e,t,n),!0}},{key:"hasWrapperBridge",value:function(){return null!=this.__wrapperBridge()}},{key:"init",value:function(){return Object(d["a"])(Object(u["a"])(i.prototype),"init",this).call(this),this.__officeBridge=new y(this),this.__officeBridge.init()}},{key:"__globalEvents",value:function(){return t}},{key:"__notRemovedNow",value:function(){return n}},{key:"__events",value:function(){return e}},{key:"__enabled",value:function(){return this.hasWrapperBridge()}},{key:"__wrapperBridge",value:function(){return this.__wrapperBridgeObject()}},{key:"__wrapperBridgeObject",value:function(){return window.__wrapperBridge}}]),i}(v);return t=["appCloseEvent"],n=["execExternalStarted","copyDataFileStarted"],e=["echoSender","writeToStoreFinished","readFromStoreFinished","readFromStoreError","readFromContentDataFinished","readFromContentDataError","execExternalStarted","execExternalFinished","execExternalError","copyDataFileFinished","copyDataFileCancelled","copyDataFileError"],r}.call(void 0),b=new m,b.init(),window.wrapperBridge=b;var w=b,k={mounted:function(){var e=this;return w.getOfficeBridge().checkAvailable(function(t,n,r){return e.$store.commit("changeOfficeWrapperAvailable",t)})}},D=k,F=n("2877"),E=Object(F["a"])(D,o,a,!1,null,null,null),O=E.exports,C=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.installed?[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"top-bar-left"},[n("ul",{ref:"dropDown",staticClass:"dropdown menu",attrs:{"data-dropdown-menu":""}},[n("li",{staticClass:"menu-text"},[e._v("Документы")])])])]),n("div",{staticClass:"expanded row",attrs:{id:"content"}},[n("div",{staticClass:"columns small-12"},[n("router-view")],1)])]:n("div",{staticClass:"install"},[n("div",[n("p",[e._v("Install App")]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.installPWA}},[e._v("\n        Install!\n      ")])])])],2)},B=[],H={data:function(){return{installed:!1,installEvent:null}},beforeMount:function(){var e=this;window.addEventListener("beforeinstallprompt",function(t){console.log(333,t),t.preventDefault(),e.installEvent=t}),window.matchMedia("(display-mode: standalone)").matches?(console.log(111,"The PWA app is installed."),this.installed=!0):(console.log(222,"The PWA app is not installed."),this.installed=!1)},methods:{dismissPrompt:function(){this.installed=!0},installPWA:function(){var e=this;console.log(444,this.installEvent),this.installEvent.prompt(),this.installEvent.userChoice.then(function(t){e.dismissPrompt(),"accepted"===t.outcome?(console.log(555),e.$router.push("/documents")):console.log(666)})}}},S=H,A=(n("7034"),Object(F["a"])(S,x,B,!1,null,"598c3652",null)),j=A.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"10px"}},[n("PWAPrompt"),n("action-buttons"),n("documents")],1)},T=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.getDocuments(),function(e){return n("document",{key:e.id,attrs:{documentId:e.id}})}),1)},P=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"callout secondary"},[n("h5",[e._v(e._s(e.getDocument().name))]),n("p",[e._v(e._s(e.getDocument().description))]),n("div",{staticClass:"button-group"},[n("document-viewer",{attrs:{documentId:e.documentId}}),n("document-viewer",{attrs:{documentId:e.documentId}}),n("document-viewer",{attrs:{documentId:e.documentId}})],1)])},L=[],M=n("a4bb"),R=n.n(M),$=(n("20d6"),n("7f7f"),n("55dd"),n("7514"),n("2f62"));i["a"].use($["a"]);var G,U,Y=new $["a"].Store({state:{officeWrapperAvailable:!1},mutations:{changeOfficeWrapperAvailable:function(e,t){e.officeWrapperAvailable=t}},actions:{}});n("f559");G=function(){function e(){Object(c["a"])(this,e)}return Object(s["a"])(e,[{key:"read",value:function(e,t,n){return this.__useWrapper()?this.__readWrapper(e,t,n):this.__readDefault(e,t,n)}},{key:"readJson",value:function(e,t){var n,r;return r=function(n){var r;if(r=null,""===n)r={};else try{r=JSON.parse(n)}catch(i){console.log("[DataReader] Cannot detect json in text. Return blank. Path: ".concat(e)),r={}}if(t)return t(r)},n=function(e){if(t)return t({})},this.read(e,r,n)}},{key:"readDocuments",value:function(e){return this.readJson("data/documents.json",e)}},{key:"__useWrapper",value:function(){return w.hasWrapperBridge()&&!location.href.startsWith("http")}},{key:"__readDefault",value:function(e,t,n){var r;return r=new XMLHttpRequest,r.open("GET",e,!0),r.onreadystatechange=function(){var i;if(4===r.readyState)if(200===r.status||0===r.status){if(i=r.responseText,t)return t(i)}else if(console.error("[DataReader] Неудалось открыть файл ".concat(e,". Статус ").concat(r.status)),n)return n(r.status)},r.send(null)}},{key:"__readWrapper",value:function(e,t,n){return w.readFromContentData(e,this.__readWrapperHandlerFinished(t),this.__readWrapperHandlerError(t,n))}},{key:"__readWrapperHandlerFinished",value:function(e){return function(t,n){if(e)return e(n)}}},{key:"__readWrapperHandlerError",value:function(e,t){return function(n,r,i){return console.log("[DataReader#readWrapper] Ошибка чтения из файла ".concat(n,". Код ").concat(r,". Ошибка: ").concat(i)),"fileNotExists"!==r?t(i):(console.log("[DataReader#readWrapper] Так как ошибка в том что файла нет, то просто вызываем обработчик с пустым контентом"),e?e(""):void 0)}}}]),e}(),U=new G,window.dataReader=U;var J,q=U;J=function(){var e=function(){function e(t){Object(c["a"])(this,e),this.store=t,this.items=[],this.groups=[]}return Object(s["a"])(e,[{key:"getById",value:function(e){return this.items.find(function(t){return t.id===e})}},{key:"search",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=e.toLowerCase(),this.items.filter(function(e){var i;return i=-1!==e.name.toLowerCase().indexOf(t)||-1!==e.description.toLowerCase().indexOf(t)||e.keywords&&-1!==e.keywords.findIndex(function(e){return e.toLowerCase()===t}),i&&n.__documentOptionsCheck(e,r)}).sort(this.__sortHandler)}},{key:"init",value:function(e){var t=this;return q.readDocuments(function(n){if(t.__proceedDocuments(n),null!=e)return e()})}},{key:"__proceedDocuments",value:function(e){var t;return t=[],e.forEach(function(e){var n;if(n=e.name.trim()[0].toUpperCase(),e.group=n,-1===t.indexOf(n))return t.push(n)}),t.sort(),this.items=e.map(function(e){return e.id="".concat(e.id),e}),this.groups=t}},{key:"__documentOptionsCheck",value:function(e,t){return 0===R()(t).length||(!t["excludeFileEmpty"]||null!=e.file_name&&""!==e.file_name.trim())}}],[{key:"init",value:function(t){return window.modelDocuments=new e(Y),window.modelDocuments.init(t)}},{key:"instance",value:function(){return window.modelDocuments}}]),e}();return function(e,t){var n,r;return n=e.name.toUpperCase(),r=t.name.toUpperCase(),n<r?-1:n>r?1:0},e}.call(void 0);var V,X=J,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showActionLink?n("a",{staticClass:"button documents__link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickAction(t)}}},[n("span",[e._v(e._s(e.labelActionLink))]),e.isViewable?n(e.viewComponent,{ref:"viewer",tag:"component",attrs:{documentId:e.documentId}}):e._e()],1):e._e()},K=[],Q=(n("6b54"),n("06db"),n("aef6"),n("a745")),Z=n.n(Q);n("c5f6");V={props:{documentId:{type:[String,Number],require:!0}},computed:{isDocumentExists:function(){return null!=this.getDocument()},isDocument:function(){return this.isCategoryDocument(this.getDocumentCategory())},isExample:function(){return this.isCategoryExample(this.getDocumentCategory())},isForm:function(){return this.isCategoryForm(this.getDocumentCategory())},hasFile:function(){return this.isDocument||this.isForm?this.getDocument().file_name&&!Z()(this.getDocument().file_name)&&""!==this.getDocument().file_name.trim():!!this.isExample&&(!!this.getDocument().file_name&&(Z()(this.getDocument().file_name)?0!==this.getDocument().file_name.length:""!==this.getDocument().file_name.trim()))},isFilePdf:function(){return Z()(this.getDocument().file_name)?this.getDocument().file_name[0].toString().endsWith(".pdf"):this.getDocument().file_name.toString().endsWith(".pdf")},showActionLink:function(){return this.hasFile},labelActionLink:function(){return this.getLabelActionLink(this.getDocumentCategory())},labelActionIcon:function(){return this.getLabelActionIcon(this.getDocumentCategory())}},methods:{getDocument:function(){return this.getModelDocuments().getById(this.documentId)},getDocumentCategory:function(){var e;return(null!=(e=this.getDocument())?e.category:void 0)||""},getModelDocuments:function(){return X.instance()},getRelatedUrl:function(){var e;return this.hasFile?(e=this.getDocument().file_name,e=e.startsWith("files")?"data/".concat(e):"data/files/".concat(e),e):""},getLabelActionIcon:function(e){return this.isCategoryDocument(e)?"download":this.isCategoryExample(e)?"visibility":this.isCategoryForm(e)?"download":""},getLabelActionLink:function(e){return this.isCategoryDocument(e)?"Скачать документ":this.isCategoryExample(e)?"Посмотреть образец":this.isCategoryForm(e)?"Скачать форму":""},isCategoryDocument:function(e){return"document"===e},isCategoryExample:function(e){return"example"===e},isCategoryForm:function(e){return"form"===e}}};var ee,te=V,ne=n("5176"),re=n.n(ne),ie=n("e814"),oe=n.n(ie);n("28a5"),n("a481");ee=function(){function e(){Object(c["a"])(this,e)}return Object(s["a"])(e,null,[{key:"iso8601",value:function(e){return e.toISOString()}},{key:"full",value:function(e){var t;return t=[e.getDate(),e.getMonth()+1,e.getFullYear()],t.join(".")}},{key:"fullMonthName",value:function(e){var t;return t=e.toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),t.replace(/\s*г\.\s*$/,"")}},{key:"day",value:function(e){var t;return t=e.getDate(),t<10&&(t="0".concat(t)),t.toString()}},{key:"month",value:function(e){var t;return t=e.getMonth()+1,t<10&&(t="0".concat(t)),t.toString()}},{key:"monthName",value:function(e){var t;return t=e.toLocaleString("ru-RU",{day:"numeric",month:"long"}),t.split(" ")[1]}},{key:"year",value:function(e){return e.getFullYear()}},{key:"yearShort",value:function(e){return oe()(e.getFullYear().toString().replace(/^\d{2}/,""))}}]),e}();var ae,ce=ee;ae=function(){function e(t){Object(c["a"])(this,e),this.documentId=t}return Object(s["a"])(e,[{key:"enabled",value:function(){return e.enabled()}},{key:"officeWrapperBridge",value:function(){return wrapperBridge.getOfficeBridge()}},{key:"setStartedHandler",value:function(e){return this.__startedHandler=e}},{key:"setInProcessHandler",value:function(e){return this.__inProcessHandler=e}},{key:"setFinishedHandler",value:function(e){return this.__finishedHandler=e}},{key:"setErrorHandler",value:function(e){return this.__errorHandler=e}},{key:"getDocument",value:function(){return this.__document?this.__document:(this.__document=X.instance().getById(this.documentId),this.__document)}},{key:"getDocumentPath",value:function(){return this.getDocument().file_name}},{key:"generate",value:function(e){return console.log(this.optionsHash()),this.officeWrapperBridge().generateFromTemplate(this.getDocumentPath(),this.optionsHash(),e,this.__handlers())}},{key:"generateOptionsForCurrentDate",value:function(){var e;return e=new Date,{G_DATE_NOW__RAW:ce.iso8601(e).toString(),G_DATE_NOW__FULL:ce.full(e).toString(),G_DATE_NOW__FULL__MONTH_NAME:ce.fullMonthName(e).toString(),G_DATE_NOW__DAY:ce.day(e).toString(),G_DATE_NOW__MONTH:ce.month(e).toString(),G_DATE_NOW__MONTH_NAME:ce.monthName(e).toString(),G_DATE_NOW__YEAR:ce.year(e).toString(),G_DATE_NOW__YEAR__SHORT:ce.yearShort(e).toString()}}},{key:"getRandomArbitrary",value:function(e,t){return Math.round(Math.random()*(t-e)+e)}},{key:"optionsHash",value:function(){var e,t,n;for(n={},e=t=1;t<=8;e=++t)n["NUMBER_".concat(e)]=this.getRandomArbitrary(10,1e3);return re()(n,this.generateOptionsForCurrentDate()),n}},{key:"__handlers",value:function(){var e;return e={},this.__startedHandler&&(e.started=this.__startedHandler),this.__inProcessHandler&&(e.inProcess=this.__inProcessHandler),this.__finishedHandler&&(e.finished=this.__finishedHandler),this.__errorHandler&&(e.error=this.__errorHandler),e}}],[{key:"enabled",value:function(){return wrapperBridge.getOfficeBridge().enabled()}}]),e}(),window.TemplateGenerator=ae;var se,le,ue=ae;le=60,se={methods:{clickDownloadAction:function(e){return wrapperBridge.hasWrapperBridge()?this.getDocument().template?this.__fillTemplate():wrapperBridge.copyDataFile(this.getRelatedUrl(),this.__fixDocumentNameLenght(this.getDocument().name),this.__wrapperCopyFileHandler.bind(this),this.__wrapperCopyFileStartedHandler.bind(this),this.__wrapperCopyFileCancelledHandler.bind(this),this.__wrapperCopyFileError.bind(this)):window.open(this.getRelatedUrl(),"_blank")},__fillTemplate:function(){var e;return console.log("Нажали на сборку документа"),e=new ue(this.getDocument().id),e.setStartedHandler(function(){return console.log("started")}),e.setInProcessHandler(function(){return console.log("working")}),e.setFinishedHandler(function(){return console.log("finished"),alert("Документ сформирован")}),e.setErrorHandler(function(){return console.log("error")}),e.generate(this.__fixDocumentNameLenght(this.getDocument().name))},__fixDocumentNameLenght:function(e){return e.substring(0,le)},__wrapperCopyFileHandler:function(e,t){var n=this;return console.log("Файл ".concat(e," скопирован в ").concat(t)),this.$modal.show("dialog",{title:"Выполнено",text:"Файл сохранен.",buttons:[{title:"Закрыть",handler:function(){return n.$modal.hide("dialog")}}]})},__wrapperCopyFileStartedHandler:function(e,t){return console.log("Начало копирования файла ".concat(e," скопирован в ").concat(t))},__wrapperCopyFileCancelledHandler:function(e,t){return console.log("Сохранение файла ".concat(e," отменено"))},__wrapperCopyFileError:function(e,t,n,r){return console.log("Ошибка сохранения файла ".concat(e,". Код: ").concat(n,". Сообщение: ").concat(r))}}};var de,fe=se;de={mixins:[fe],computed:{isViewable:function(){return this.isExample&&this.hasFile}},methods:{clickAction:function(e){return this.isViewable?this.$refs.viewer.show():this.clickDownloadAction(e)}}};var he=de,pe={mixins:[te,he]},_e=pe,ge=Object(F["a"])(_e,z,K,!1,null,null,null),ve=ge.exports,me={components:{DocumentViewer:ve},props:{documentId:String,required:!0},methods:{getDocument:function(){return X.instance().getById(this.documentId)}}},be=me,ye=Object(F["a"])(be,N,L,!1,null,null,null),we=ye.exports,ke={components:{Document:we},methods:{getDocuments:function(){return console.log(X),console.log(X.instance()),X.instance().items}}},De=ke,Fe=Object(F["a"])(De,I,P,!1,null,null,null),Ee=Fe.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.shown?n("div",[e._v("\n    Add app to home screen?\n    "),n("div",{staticClass:"button-group"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.installPWA}},[e._v("\n        Install!\n      ")]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.dismissPrompt}},[e._v("\n        No, thanks\n      ")])])]):e._e()])},Ce=[],xe={data:function(){return{shown:!1,installEvent:null}},beforeMount:function(){var e=this;window.addEventListener("beforeinstallprompt",function(t){e.message=t,t.preventDefault(),e.installEvent=t,e.shown=!0})},methods:{dismissPrompt:function(){this.shown=!1},installPWA:function(){var e=this;this.installEvent.prompt(),this.installEvent.userChoice.then(function(t){e.dismissPrompt(),t.outcome})}}},Be=xe,He=Object(F["a"])(Be,Oe,Ce,!1,null,null,null),Se=He.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.officeAvailable?e._e():n("div",{staticClass:"callout alert"},[n("h5",[e._v("Microsoft Office не установлен")]),n("p",[e._v("\n      Функция конвертации, документа из формата DOCX в формат DOC, недоступна.\n    ")])]),n("div",{staticClass:"button-group"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.runApp1}},[e._v('Запустить приложение "Блокнот"')]),n("button",{staticClass:"button",attrs:{type:"button",disabled:!e.officeAvailable},on:{click:e.convertDocxToDoc}},[e._v("Преобразовать из docx в doc")]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.clickBeepButton}},[e._v("Подать сигнал")])])])},je=[],We={computed:{officeAvailable:function(){return this.$store.state.officeWrapperAvailable}},methods:{clickBeepButton:function(){return w.beep()},runApp1:function(){return w.execExternal("c:\\\\windows\\system32\\notepad.exe",[],"c:\\\\windows")},convertDocxToDoc:function(){return w.getOfficeBridge().saveFile("contentData://files/convert.docx","storeDocs://converted.doc",{handlers:{fileSaved:this._handlerConvertDocxToDocSaved.bind(this)}})},_handlerConvertDocxToDocSaved:function(e,t){return alert("Файл  сконвертирован")}}},Te=We,Ie=Object(F["a"])(Te,Ae,je,!1,null,null,null),Pe=Ie.exports,Ne={components:{Documents:Ee,ActionButtons:Pe,PWAPrompt:Se}},Le=Ne,Me=Object(F["a"])(Le,W,T,!1,null,null,null),Re=Me.exports;i["a"].use(C["a"]);var $e,Ge=new C["a"]({base:"",routes:[{path:"/",name:"root",component:j,redirect:!!window.matchMedia("(display-mode: standalone)").matches&&"/documents",children:[{path:"documents",name:"documents",component:Re}]}]}),Ue=n("9483");Object(Ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),$e=function(){function e(){Object(c["a"])(this,e)}return Object(s["a"])(e,null,[{key:"init",value:function(e){var t;if(t=function(){if(null!=e)return e()},X.init(t),w.hasWrapperBridge())return w.addGlobalHandler("appCloseEvent",function(){return w.close(!0)})}}]),e}();var Ye=$e;i["a"].config.productionTip=!1,window.__store=Y,Ye.init(function(){new i["a"]({router:Ge,store:Y,render:function(e){return e(O)}}).$mount("#app")})},7034:function(e,t,n){"use strict";var r=n("2004"),i=n.n(r);i.a},fb98:function(e,t,n){}});
//# sourceMappingURL=app.be8d6f0a.js.map