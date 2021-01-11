(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{52:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(5);var c,r=n(1),a=n.n(r),i=n(17),o=n.n(i),s=(n(52),n(7)),u=n(9),l=n(0),d=n(6),b=n(3),f=n(2),p=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var g={value:c.cutting},j=Object(p.c)({name:"mainMenuState",initialState:g,reducers:{setState:function(e,t){e.value=t.payload}}}),O=j.actions.setState,v=function(e){return e.mainMenuState.value},m=j.reducer,h=Object(p.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),x=h.actions,y=x.setState,w=x.setPageNumber,S=function(e){return e.finishState.value},k=function(e){return e.finishState.pageNumber},I=h.reducer;var C,P=function(){return Object(l.c)(l.a,{styles:N})},N={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},D=Object(l.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),A=Object(l.b)({display:"flex",flexDirection:"row",gap:"20px"},""),T=function(e){var t=e.iconName,n=e.stateName,r=Object(f.b)(),a=Object(f.c)(v),i=Object(l.b)(Object(u.a)(Object(u.a)({width:"100%",height:"100px"},a===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(l.c)("div",{css:Object(s.a)([D,i],""),title:n,onClick:function(){r(O(n)),n===c.finish&&r(w(0))}},Object(l.c)(d.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},R=function(){return Object(l.c)("div",{style:{borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},title:"MainMenu"},Object(l.c)(T,{iconName:b.k,stateName:c.cutting}),Object(l.c)(T,{iconName:b.l,stateName:c.metadata}),Object(l.c)(T,{iconName:b.n,stateName:c.thumbnail}),Object(l.c)(T,{iconName:b.r,stateName:c.finish}))},E=n(22),z=n(10),W=n.n(z),M=n(13),B=n(42),U=n.n(B),L=window.location.origin,_=function(){var e=Object(M.a)(W.a.mark((function e(){var t,n,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V().then((function(e){e=q(e,!1,"src-server","from server settings file"),F(e)}));case 2:t=new URLSearchParams(window.location.search),n={},t.forEach((function(e,t){var c=n,r=t.split(".");r.slice(0,-1).forEach((function(e){e in c||(c[e]={}),c=c[e]})),c[r[r.length-1]]=e})),c=q(n,!0,"src-url","given as URL GET parameter"),F(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){for(var t in e)e.mediaPackageId&&(C=e.mediaPackageId),"debugging"===t&&e[t].ocUrl&&(L=e[t].ocUrl)},V=function(){var e=Object(M.a)(W.a.mark((function e(){var t,n,c,r,a,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="/89/2021-01-11_11-57-02").endsWith("/")||(n+="/"),c=Object({NODE_ENV:"production",PUBLIC_URL:"/89/2021-01-11_11-57-02",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SETTINGS_PATH||"editor-settings.toml",r=c.startsWith("/")?"":n,a="".concat(window.location.origin).concat(r).concat(c),e.prev=5,e.next=8,fetch(a);case 8:i=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),console.warn("Could not access '".concat(c,"' due to network error!"),e.t0||""),e.abrupt("return",null);case 15:if(404!==i.status){e.next=20;break}return console.debug("'".concat(c,"' returned 404: ignoring")),e.abrupt("return",null);case 20:if(i.ok){e.next=23;break}return console.error("Fetching '".concat(c,"' failed: ").concat(i.status," ").concat(i.statusText)),e.abrupt("return",null);case 23:if(!(null===(t=i.headers.get("Content-Type"))||void 0===t?void 0:t.startsWith("text/html"))){e.next=26;break}return console.warn("'".concat(c,"' request has 'Content-Type: text/html' -> ignoring...")),e.abrupt("return",null);case 26:return e.prev=26,e.t1=U.a,e.next=30,i.text();case 30:return e.t2=e.sent,e.abrupt("return",(0,e.t1)(e.t2));case 34:throw e.prev=34,e.t3=e.catch(26),console.error("Could not parse '".concat(c,"' as TOML: "),e.t3),new SyntaxError("Could not parse '".concat(c,"' as TOML: ").concat(e.t3));case 38:case"end":return e.stop()}}),e,null,[[5,11],[26,34]])})));return function(){return e.apply(this,arguments)}}(),q=function(e,t,n,c){var r=function(e,t,n){return"function"===typeof e?a(e,t,n):i(e,t,n)},a=function(e,r,a){try{var i=e(r,t,n);return void 0===i?r:i}catch(o){return console.warn("Validation of setting '".concat(a,"' (").concat(c,") with value '").concat(r,"' failed: ")+"".concat(o,". Ignoring.")),null}},i=function(e,t,n){var a={};for(var i in t){var o=n?"".concat(n,".").concat(i):i;if(i in e){var s=r(e[i],t[i],o);null!==s&&(a[i]=s)}else console.warn("'".concat(o,"' (").concat(c,") is not a valid settings key. Ignoring."))}return a};return r(H,e,"")},Y={string:function(e,t){if("string"!==typeof e)throw new Error("is not a string, but should be")}},H={mediaPackageId:Y.string,debugging:{ocUrl:Y.string}},G=n(46);function J(e){return K.apply(this,arguments)}function K(){return(K=Object(M.a)(W.a.mark((function e(t){var n,c,r,a,i,o,s,l,d,b,f=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,r=Object(G.a)(n,["body"]),a={"Content-Type":"application/json"},i=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(i)},s=Object(u.a)(Object(u.a)({method:c?"POST":"GET"},r),{},{headers:Object(u.a)(Object(u.a)(Object(u.a)({},a),r.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(d=e.sent,l=d.length?JSON.parse(d):"",!b.ok){e.next=16;break}return e.abrupt("return",l);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:l));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}J.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return J(e,Object(u.a)(Object(u.a)({},t),{},{method:"GET"}))},J.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return J(e,Object(u.a)(Object(u.a)({},n),{},{body:t}))};var Q=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},X={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(p.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},Z=Object(p.b)("video/fetchVideoInformation",function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=Object(p.c)({name:"videoState",initialState:X,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=Q(t.payload,3),ee(e),ce(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=Q(1e3*t.payload,3),ee(e),ce(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(p.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(p.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){ne(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){ne(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(Z.pending,(function(e,t){e.status="loading"})),e.addCase(Z.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=te(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(Z.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),ee=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},te=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(p.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(p.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},ne=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),ee(e))},ce=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},re=$.actions,ae=re.setIsPlaying,ie=re.setIsPlayPreview,oe=re.setCurrentlyAt,se=re.setCurrentlyAtInSeconds,ue=(re.addSegment,re.cut),le=re.markAsDeletedOrAlive,de=re.setSelectedWorkflowIndex,be=re.mergeLeft,fe=re.mergeRight,pe=re.setPreviewTriggered,ge=function(e){return e.videoState.isPlaying},je=function(e){return e.videoState.isPlayPreview},Oe=function(e){return e.videoState.previewTriggered},ve=function(e){return e.videoState.currentlyAt},me=function(e){return e.videoState.currentlyAt/1e3},he=function(e){return e.videoState.segments},xe=function(e){return e.videoState.activeSegmentIndex},ye=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},we=function(e){return e.videoState.selectedWorkflowIndex},Se=function(e){return e.videoState.videoURLs},ke=function(e){return e.videoState.videoCount},Ie=function(e){return e.videoState.duration},Ce=function(e){return e.videoState.duration/1e3},Pe=function(e){return e.videoState.title},Ne=function(e){return e.videoState.presenters},De=function(e){return e.videoState.tracks},Ae=function(e){return e.videoState.workflows},Te=$.reducer,Re=n(43),Ee=n.n(Re);var ze=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),a=Object(f.c)(ge),i=Object(f.c)(me),o=Object(f.c)(Ce),s=Object(f.c)(Oe),u=Object(r.useRef)(null),d=Object(r.useState)(!1),b=Object(E.a)(d,2),p=b[0],g=b[1];return Object(r.useEffect)((function(){!a&&u.current&&p&&u.current.seekTo(i,"seconds"),s&&u.current&&p&&(u.current.seekTo(i,"seconds"),c(pe(!1)))})),Object(l.c)(Ee.a,{url:t,ref:u,width:"100%",height:"auto",playing:a,muted:n,onProgress:function(e){Q(i,3)!==Q(e.playedSeconds,3)&&c(se(e.playedSeconds))},progressInterval:100,onReady:function(){g(!0)},onEnded:function(){c(ae(!1)),c(se(o))}})},We={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Me={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Be={name:"1r139wu",styles:"display:inline-block;width:110px;"},Ue=function(){var e=Object(f.b)(),t=Object(f.c)(ge),n=Object(f.c)(je),c=Object(f.c)(ve),r=Object(l.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),a=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),i=We,o=Me;return Object(l.c)("div",{css:r,title:"Video Controls"},Object(l.c)("div",{css:a,title:"Video Controls Top Row"},Object(l.c)("div",{style:{display:"flex",gap:"10px",width:"50px",justifyContent:"center"}},Object(l.c)(d.a,{icon:n?b.i:b.h,size:"1x",title:"Play Preview Icon"}),Object(l.c)(d.a,{css:o,icon:n?b.x:b.w,size:"1x",title:"Play Preview Switch: "+n,onClick:function(){return e(ie(!n))}})),Object(l.c)(d.a,{css:i,icon:t?b.m:b.o,size:"2x",title:"Play Button",onClick:function(){return e(ae(!t))}}),Object(l.c)("div",{css:Be},new Date(c||0).toISOString().substr(11,12))))},Le={name:"iqjf8m",styles:"font-size:large;"},_e=function(){var e=Object(f.c)(Pe),t=Object(f.c)(Ne),n=Le;return Object(l.c)("div",{title:"Video Area Header"},Object(l.c)("div",{css:n,title:"Video Title"},e),Object(l.c)("div",{title:"Video Presenters"},"by ",t.join(", ")))},Fe=function(){var e,t=Object(f.b)(),n=Object(f.c)(Se),c=Object(f.c)(ke),a=Object(f.c)((function(e){return e.videoState.status})),i=Object(f.c)((function(e){return e.videoState.error}));Object(r.useEffect)((function(){"idle"===a&&t(Z({mediaPackageId:C,ocUrl:L}))}),[a,t]),"loading"===a?e=Object(l.c)("div",{className:"loader"},"Loading..."):"success"===a?e="":"failed"===a&&(e=Object(l.c)("div",null,i));for(var o=[],s=0;s<c;s++)o.push(Object(l.c)(ze,{key:s,url:n[s],isMuted:0===s}));var u=Object(l.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #BBB"},""),d=Object(l.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(l.c)("div",{css:u,title:"Video Area"},e,Object(l.c)(_e,null),Object(l.c)("div",{css:d,title:"Video Player Area"},o),Object(l.c)(Ue,null))},Ve=n(44),qe=n.n(Ve),Ye=n(45),He=n.p+"static/media/placeholder_waveform.d23b087b.png";var Ge={name:"190c1k3",styles:"height:230px;"},Je={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},Ke=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(ge),i=Object(f.c)(ve),o=Object(f.c)(Ie),s=Object(r.useState)({x:0,y:0}),u=Object(E.a)(s,2),p=u[0],g=u[1],j=Object(r.useState)(!1),O=Object(E.a)(j,2),v=O[0],m=O[1],h=Object(r.useRef)(0),x=a.a.useRef(null);Object(r.useEffect)((function(){i!==h.current&&(y(),h.current=i)})),Object(r.useEffect)((function(){i&&o&&g({x:i/o*t,y:0})}),[t]);var y=function(){var e=p.y;g({x:i/o*t,y:e})},w=Object(l.b)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),S=Object(l.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:v?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),k=Je;return Object(l.c)(qe.a,{onStart:function(){m(!0)},onStop:function(e,c){var r=c.x,a=c.y;g({x:r,y:a}),n(oe(r/t*o)),m(!1)},axis:"x",bounds:"parent",position:p,disabled:c,nodeRef:x},Object(l.c)("div",{ref:x,css:w,title:"Scrubber"},Object(l.c)("div",{css:S,title:"dragHandle"},Object(l.c)(d.a,{css:k,icon:b.a,size:"1x"}))))},Qe=function(e){e.timelineWidth;var t=Object(f.c)(he),n=Object(f.c)(Ie),c=Object(f.c)(xe),r=function(e,t){return e||t?e&&!t?"rgba(255, 0, 0, 0.4)":!e&&t?"rgba(0, 0, 200, 0.4)":e&&t?"rgba(200, 0, 0, 0.4)":void 0:"rgba(0, 0, 255, 0.4)"},a=Object(l.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(l.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(l.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({backgroundColor:r(e.deleted,c===t),borderRadius:"5px",borderStyle:"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")})})))},Xe=function(){var e=Object(Ye.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,r=Object(l.b)({position:"relative",height:"250px",width:"100%"},"");return Object(l.c)("div",{ref:t,css:r,title:"Timeline"},Object(l.c)(Ke,{timelineWidth:c}),Object(l.c)("div",{css:Ge},Object(l.c)("img",{alt:"waveform2",src:He,style:{position:"absolute",height:"230px",width:"100%",top:"10px"}}),Object(l.c)(Qe,{timelineWidth:c})))},Ze={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},$e=function(e){var t=e.iconName,n=e.actionName,c=e.action,r=Object(f.b)();return Object(l.c)("div",{css:Object(s.a)([D,Ze],""),title:n,onClick:function(){return c?r(c()):""}},Object(l.c)(d.a,{icon:t,size:"1x"}),Object(l.c)("span",null,n))},et=function(){var e=Object(f.b)(),t=Object(f.c)(ye);return Object(l.c)("div",{css:Object(s.a)([D,Ze],""),title:t?"Delete":"Restore",onClick:function(){return e(le())}},Object(l.c)(d.a,{icon:t?b.z:b.A,size:"1x"}),Object(l.c)("div",null,t?"Delete":"Restore"))},tt=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(l.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(l.c)("div",{css:e},Object(l.c)("div",{css:t},Object(l.c)($e,{iconName:b.f,actionName:"Cut",action:ue}),Object(l.c)(et,null),Object(l.c)($e,{iconName:b.t,actionName:"Merge Left",action:be}),Object(l.c)($e,{iconName:b.u,actionName:"Merge Right",action:fe})),Object(l.c)("div",{css:t},Object(l.c)($e,{iconName:b.p,actionName:"Reset changes",action:null}),Object(l.c)($e,{iconName:b.p,actionName:"Undo",action:null})))},nt=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),r=Object(l.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(l.c)("div",{css:Object(s.a)([D,r],""),title:n,onClick:function(){c(y(n)),c(w(1))}},Object(l.c)(d.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},ct=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(l.c)("div",{css:e,title:"Finish Menu"},Object(l.c)(nt,{iconName:b.q,stateName:"Save changes"}),Object(l.c)(nt,{iconName:b.j,stateName:"Start processing"}),Object(l.c)(nt,{iconName:b.v,stateName:"Discard changes"}))},rt={status:"idle",error:void 0},at=Object(p.b)("video/postVideoInformation",function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:ot(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),it=Object(p.c)({name:"workflowPostState",initialState:rt,reducers:{},extraReducers:function(e){e.addCase(at.pending,(function(e,t){e.status="loading"})),e.addCase(at.fulfilled,(function(e,t){e.status="success"})),e.addCase(at.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),ot=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},st=function(e){return e.workflowPostState.status},ut=function(e){return e.workflowPostAndProcessState.error},lt=it.reducer;var dt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},bt=function(){var e=Object(f.b)(),t=Object(f.c)(he),n=Object(f.c)(De),c=Object(f.c)(st),r=b.q,a=!1;"loading"===c?(r=b.s,a=!0):"success"===c?(r=b.b,a=!1):"failed"===c&&(r=b.g,a=!1);var i=dt;return Object(l.c)("div",{css:Object(s.a)([D,i],""),title:"Save Button",onClick:function(){return e(at({segments:t,tracks:n,mediaPackageId:C,ocUrl:L}))}},Object(l.c)(d.a,{icon:r,spin:a,size:"1x"}),Object(l.c)("span",null,"Yes, Save changes"))},ft=function(){var e=Object(f.c)(S),t=Object(f.c)(st),n=Object(f.c)(ut),c=Object(l.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),r=Object(l.b)(Object(u.a)(Object(u.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:c,title:"Save Area"},Object(l.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(l.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(l.c)("br",null),"Doth thou truly wish tah save?"),Object(l.c)("div",{css:A},Object(l.c)(Rt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(bt,null)),Object(l.c)("div",{css:r,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),n,Object(l.c)("br",null)))},pt=Object(p.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),gt=pt.actions.setState,jt=function(e){return e.abortState.value},Ot=pt.reducer;var vt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},mt=function(){var e=Object(f.b)(),t=vt;return Object(l.c)("div",{css:Object(s.a)([D,t],""),title:"Discard changes button",onClick:function(){return e(gt(!0))}},Object(l.c)(d.a,{icon:b.v,size:"1x"}),Object(l.c)("span",null,"Yes, discard changes"))},ht=function(){var e=Object(f.c)(S),t=Object(l.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(l.c)("div",{css:t,title:"Abort Area"},Object(l.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(l.c)("br",null),"Doth thou truly wish tah abort?"),Object(l.c)("div",{css:A},Object(l.c)(Rt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(mt,null)))},xt=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),r=Object(f.c)(we),a=Object(l.b)({backgroundColor:n!==r?"snow":"#DDD",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([D,a],""),title:"Workflow Button for "+t,onClick:function(){return c(de(n))}},Object(l.c)("span",null,t))},yt=function(){var e=Object(f.c)(Ae),t=Object(f.c)(S),n=Object(f.c)(k),c=Object(l.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),r=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(l.c)("div",{css:c},Object(l.c)("h2",null,"Select a workflow"),Object(l.c)("div",{css:r,title:"Workflow Selection Area"},e.map((function(e,t){return Object(l.c)(xt,{key:t,stateName:e.name,workflowIndex:t})}))),Object(l.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(l.c)("div",{css:A},Object(l.c)(Rt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(l.c)(Rt,{pageNumber:2,label:"Continue",iconName:b.e})))},wt={status:"idle",error:void 0},St=Object(p.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(M.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:ot(t.segments),tracks:t.tracks,workflows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),kt=Object(p.c)({name:"workflowPostAndProcessState",initialState:wt,reducers:{},extraReducers:function(e){e.addCase(St.pending,(function(e,t){e.status="loading"})),e.addCase(St.fulfilled,(function(e,t){e.status="success"})),e.addCase(St.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),It=function(e){return e.workflowPostAndProcessState.status},Ct=function(e){return e.workflowPostAndProcessState.error},Pt=kt.reducer;var Nt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},Dt=function(){var e=Object(f.b)(),t=Object(f.c)(Ae),n=Object(f.c)(we),c=Object(f.c)(he),r=Object(f.c)(De),a=Object(f.c)(It),i=b.j,o=!1;"loading"===a?(i=b.s,o=!0):"success"===a?(i=b.b,o=!1):"failed"===a&&(i=b.g,o=!1);var u=Nt;return Object(l.c)("div",{css:Object(s.a)([D,u],""),title:"Start processing button",onClick:function(){return e(St({segments:c,tracks:r,mediaPackageId:C,ocUrl:L,workflowID:[t[n]]}))}},Object(l.c)(d.a,{icon:i,spin:o,size:"1x"}),Object(l.c)("span",null,"Yes, start processing"))},At=function(){var e=Object(f.c)(It),t=Object(f.c)(Ct),n=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(l.b)(Object(u.a)(Object(u.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:n,title:"Workflow Configuration Area"},Object(l.c)("h2",null,"Workflow Configuration"),Object(l.c)(d.a,{icon:b.y,size:"10x"}),"Placeholder",Object(l.c)("div",null,"Satisfied with your configuration?"),Object(l.c)("div",{css:A},Object(l.c)(Rt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(l.c)(Dt,null)),Object(l.c)("div",{css:c,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),t))};var Tt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Rt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,r=Object(f.b)(),a=Tt;return Object(l.c)("div",{css:Object(s.a)([D,a],""),title:n,onClick:function(){return r(w(t))}},Object(l.c)(d.a,{icon:c,size:"1x"}),Object(l.c)("span",null,n))},Et=function(){var e=Object(f.c)(k),t=Object(l.b)({display:0!==e?"none":"block"},""),n=Object(l.b)({display:1!==e?"none":"block"},""),c=Object(l.b)({display:2!==e?"none":"block"},"");return Object(l.c)("div",{title:"Finish"},Object(l.c)("div",{css:t},Object(l.c)(ct,null)),Object(l.c)("div",{css:n},Object(l.c)(ft,null),Object(l.c)(yt,null),Object(l.c)(ht,null)),Object(l.c)("div",{css:c},Object(l.c)(At,null)))};var zt={name:"8atqhb",styles:"width:100%;"},Wt=function(){var e=Object(f.c)(v),t=Object(l.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(l.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),r=Object(l.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(l.c)("div",{title:"MainMenuContext",css:zt},Object(l.c)("div",{css:t,title:"Cutting Container"},Object(l.c)(Fe,null),Object(l.c)(tt,null),Object(l.c)(Xe,null)),Object(l.c)("div",{css:n,title:"Finish Container"},Object(l.c)(Et,null)),Object(l.c)("div",{css:r},Object(l.c)(d.a,{icon:b.y,size:"10x"}),"Placeholder"))};var Mt={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Bt=function(){var e=Object(f.c)(jt),t=Object(f.c)(It),n=Object(f.c)(Ie),c=Mt;return Object(l.c)("div",{css:c,title:"The last area"},Object(l.c)(d.a,{icon:e?b.v:"success"===t?b.c:b.p,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},Ut=function(){var e=Object(f.c)(jt),t=Object(f.c)(It),n={display:"flex",flexDirection:"row",height:"100%"};return Object(l.c)(a.a.Fragment,null,e||"success"===t?Object(l.c)(Bt,null):Object(l.c)("div",{css:n,title:"Body"},Object(l.c)(R,null),Object(l.c)(Wt,null)))};var Lt,_t=function(){return Object(l.c)("div",{className:"App"},Object(l.c)(P,null),Object(l.c)(Ut,null))},Ft=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Vt=Object(p.a)({reducer:{mainMenuState:m,finishState:I,videoState:Te,workflowPostState:lt,workflowPostAndProcessState:Pt,abortState:Ot}}),qt=Promise.race([_(),(Lt=300,new Promise((function(e,t){return setTimeout(e,Lt)})))]);qt.then((function(){o.a.render(Object(l.c)(a.a.StrictMode,null,Object(l.c)(f.a,{store:Vt},Object(l.c)(_t,null))),document.getElementById("root"))}),(function(e){return t=Object(l.c)("p",null,"Fatal error while loading app: ".concat(e.message),Object(l.c)("br",null),"This might be caused by a incorrect configuration by the system administrator."),void o.a.render(t,document.getElementById("root"));var t})),Ft()}},[[98,1,2]]]);
//# sourceMappingURL=main.db4971ca.chunk.js.map