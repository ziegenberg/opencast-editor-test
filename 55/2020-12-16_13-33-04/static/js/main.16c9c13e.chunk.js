(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(5);var c,a=n(1),i=n.n(a),r=n(16),o=n.n(r),s=(n(41),n(7)),d=n(9),l=n(0),u=n(6),b=n(3),f=n(2),j=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var p={value:c.cutting},O=Object(j.c)({name:"mainMenuState",initialState:p,reducers:{setState:function(e,t){e.value=t.payload}}}),g=O.actions.setState,m=function(e){return e.mainMenuState.value},v=O.reducer,x=Object(j.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),h=x.actions,y=h.setState,w=h.setPageNumber,S=function(e){return e.finishState.value},k=function(e){return e.finishState.pageNumber},I=x.reducer;var C=function(){return Object(l.c)(l.a,{styles:P})},P={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},N=Object(l.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),D=Object(l.b)({display:"flex",flexDirection:"row",gap:"20px"},""),A=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),i=Object(f.c)(m),r=Object(l.b)(Object(d.a)(Object(d.a)({width:"100%",height:"100px"},i===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(l.c)("div",{css:Object(s.a)([N,r],""),title:n,onClick:function(){a(g(n)),n===c.finish&&a(w(0))}},Object(l.c)(u.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},R=function(){return Object(l.c)("div",{style:{borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},title:"MainMenu"},Object(l.c)(A,{iconName:b.k,stateName:c.cutting}),Object(l.c)(A,{iconName:b.l,stateName:c.metadata}),Object(l.c)(A,{iconName:b.n,stateName:c.thumbnail}),Object(l.c)(A,{iconName:b.r,stateName:c.finish}))},z=n(17),T=n(12),M=n.n(T),W=n(14),B=n(35);function E(e){return L.apply(this,arguments)}function L(){return(L=Object(W.a)(M.a.mark((function e(t){var n,c,a,i,r,o,s,l,u,b,f=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,a=Object(B.a)(n,["body"]),i={"Content-Type":"application/json"},r=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(r)},s=Object(d.a)(Object(d.a)({method:c?"POST":"GET"},a),{},{headers:Object(d.a)(Object(d.a)(Object(d.a)({},i),a.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(u=e.sent,l=u.length?JSON.parse(u):"",!b.ok){e.next=16;break}return e.abrupt("return",l);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:l));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}E.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E(e,Object(d.a)(Object(d.a)({},t),{},{method:"GET"}))},E.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return E(e,Object(d.a)(Object(d.a)({},n),{},{body:t}))};var V=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},F={isPlaying:!1,isPlayPreview:!1,currentlyAt:0,segments:[{id:Object(j.d)(),start:0,end:1,deleted:!1}],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},q=Object(j.b)("video/fetchVideoInformation",Object(W.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("https://legacy.opencast.org/admin-ng/tools/ID-dual-stream-demo/editor.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),Y=Object(j.c)({name:"videoState",initialState:F,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=V(t.payload,3),U(e),H(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=V(1e3*t.payload,3),U(e),H(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(j.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:!0},n={id:Object(j.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:!0};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){G(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){G(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.status="loading"})),e.addCase(q.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.previews.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.previews.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=t.payload.presenters,e.segments=J(t.payload.segments,t.payload.duration),e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(q.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),U=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},J=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(j.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(j.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},G=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),U(e))},H=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},_=Y.actions,K=_.setIsPlaying,Q=_.setIsPlayPreview,X=_.setCurrentlyAt,Z=_.setCurrentlyAtInSeconds,$=(_.addSegment,_.cut),ee=_.markAsDeletedOrAlive,te=_.setSelectedWorkflowIndex,ne=_.mergeLeft,ce=_.mergeRight,ae=_.setPreviewTriggered,ie=function(e){return e.videoState.isPlaying},re=function(e){return e.videoState.isPlayPreview},oe=function(e){return e.videoState.previewTriggered},se=function(e){return e.videoState.currentlyAt},de=function(e){return e.videoState.currentlyAt/1e3},le=function(e){return e.videoState.segments},ue=function(e){return e.videoState.activeSegmentIndex},be=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},fe=function(e){return e.videoState.selectedWorkflowIndex},je=function(e){return e.videoState.videoURLs},pe=function(e){return e.videoState.videoCount},Oe=function(e){return e.videoState.duration},ge=function(e){return e.videoState.duration/1e3},me=function(e){return e.videoState.title},ve=function(e){return e.videoState.presenters},xe=function(e){return e.videoState.workflows},he=Y.reducer,ye=n(32),we=n.n(ye);var Se=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),i=Object(f.c)(ie),r=Object(f.c)(de),o=Object(f.c)(ge),s=Object(f.c)(oe),d=Object(a.useRef)(null),u=Object(a.useState)(!1),b=Object(z.a)(u,2),j=b[0],p=b[1];return Object(a.useEffect)((function(){!i&&d.current&&j&&d.current.seekTo(r,"seconds"),s&&d.current&&j&&(d.current.seekTo(r,"seconds"),c(ae(!1)))})),Object(l.c)(we.a,{url:t,ref:d,width:"100%",height:"auto",playing:i,muted:n,onProgress:function(e){V(r,3)!==V(e.playedSeconds,3)&&c(Z(e.playedSeconds))},progressInterval:100,onReady:function(){p(!0)},onEnded:function(){c(K(!1)),c(Z(o))}})},ke={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Ie={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Ce={name:"1r139wu",styles:"display:inline-block;width:110px;"},Pe=function(){var e=Object(f.b)(),t=Object(f.c)(ie),n=Object(f.c)(re),c=Object(f.c)(se),a=Object(l.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),i=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),r=ke,o=Ie;return Object(l.c)("div",{css:a,title:"Video Controls"},Object(l.c)("div",{css:i,title:"Video Controls Top Row"},Object(l.c)("div",{style:{display:"flex",gap:"10px",width:"50px",justifyContent:"center"}},Object(l.c)(u.a,{icon:n?b.i:b.h,size:"1x",title:"Play Preview Icon"}),Object(l.c)(u.a,{css:o,icon:n?b.x:b.w,size:"1x",title:"Play Preview Switch: "+n,onClick:function(){return e(Q(!n))}})),Object(l.c)(u.a,{css:r,icon:t?b.m:b.o,size:"2x",title:"Play Button",onClick:function(){return e(K(!t))}}),Object(l.c)("div",{css:Ce},new Date(c||0).toISOString().substr(11,12))))},Ne={name:"iqjf8m",styles:"font-size:large;"},De=function(){var e=Object(f.c)(me),t=Object(f.c)(ve),n=Ne;return Object(l.c)("div",{title:"Video Area Header"},Object(l.c)("div",{css:n,title:"Video Title"},e),Object(l.c)("div",{title:"Video Presenters"},"by ",t.join(", ")))},Ae=function(){var e,t=Object(f.b)(),n=Object(f.c)(je),c=Object(f.c)(pe),i=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(a.useEffect)((function(){"idle"===i&&t(q())}),[i,t]),"loading"===i?e=Object(l.c)("div",{className:"loader"},"Loading..."):"success"===i?e="":"failed"===i&&(e=Object(l.c)("div",null,r));for(var o=[],s=0;s<c;s++)o.push(Object(l.c)(Se,{key:s,url:n[s],isMuted:0===s}));var d=Object(l.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #BBB"},""),u=Object(l.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(l.c)("div",{css:d,title:"Video Area"},e,Object(l.c)(De,null),Object(l.c)("div",{css:u,title:"Video Player Area"},o),Object(l.c)(Pe,null))},Re=n(33),ze=n.n(Re),Te=n(34),Me=n.p+"static/media/placeholder_waveform.d23b087b.png";var We={name:"190c1k3",styles:"height:230px;"},Be={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},Ee=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(ie),r=Object(f.c)(se),o=Object(f.c)(Oe),s=Object(a.useState)({x:0,y:0}),d=Object(z.a)(s,2),j=d[0],p=d[1],O=Object(a.useState)(!1),g=Object(z.a)(O,2),m=g[0],v=g[1],x=Object(a.useRef)(0),h=i.a.useRef(null);Object(a.useEffect)((function(){r!==x.current&&(y(),x.current=r)})),Object(a.useEffect)((function(){r&&o&&p({x:r/o*t,y:0})}),[t]);var y=function(){var e=j.y;p({x:r/o*t,y:e})},w=Object(l.b)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),S=Object(l.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:m?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),k=Be;return Object(l.c)(ze.a,{onStart:function(){v(!0)},onStop:function(e,c){var a=c.x,i=c.y;p({x:a,y:i}),n(X(a/t*o)),v(!1)},axis:"x",bounds:"parent",position:j,disabled:c,nodeRef:h},Object(l.c)("div",{css:w,title:"Scrubber"},Object(l.c)("div",{css:S,title:"dragHandle"},Object(l.c)(u.a,{css:k,icon:b.a,size:"1x"}))))},Le=function(e){e.timelineWidth;var t=Object(f.c)(le),n=Object(f.c)(Oe),c=Object(f.c)(ue),a=function(e,t){return e||t?e&&!t?"rgba(255, 0, 0, 0.4)":!e&&t?"rgba(0, 0, 200, 0.4)":e&&t?"rgba(200, 0, 0, 0.4)":void 0:"rgba(0, 0, 255, 0.4)"},i=Object(l.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(l.c)("div",{css:i,title:"Segments"},t.map((function(e,t){return Object(l.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({backgroundColor:a(e.deleted,c===t),borderRadius:"5px",borderStyle:"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")})})))},Ve=function(){var e=Object(Te.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,a=Object(l.b)({position:"relative",height:"250px",width:"100%"},"");return Object(l.c)("div",{ref:t,css:a,title:"Timeline"},Object(l.c)(Ee,{timelineWidth:c}),Object(l.c)("div",{css:We},Object(l.c)("img",{alt:"waveform2",src:Me,style:{position:"absolute",height:"230px",width:"100%",top:"10px"}}),Object(l.c)(Le,{timelineWidth:c})))},Fe={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},qe=function(e){var t=e.iconName,n=e.actionName,c=e.action,a=Object(f.b)();return Object(l.c)("div",{css:Object(s.a)([N,Fe],""),title:n,onClick:function(){return c?a(c()):""}},Object(l.c)(u.a,{icon:t,size:"1x"}),Object(l.c)("span",null,n))},Ye=function(){var e=Object(f.b)(),t=Object(f.c)(be);return Object(l.c)("div",{css:Object(s.a)([N,Fe],""),title:t?"Delete":"Restore",onClick:function(){return e(ee())}},Object(l.c)(u.a,{icon:t?b.z:b.A,size:"1x"}),Object(l.c)("div",null,t?"Delete":"Restore"))},Ue=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(l.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(l.c)("div",{css:e},Object(l.c)("div",{css:t},Object(l.c)(qe,{iconName:b.f,actionName:"Cut",action:$}),Object(l.c)(Ye,null),Object(l.c)(qe,{iconName:b.t,actionName:"Merge Left",action:ne}),Object(l.c)(qe,{iconName:b.u,actionName:"Merge Right",action:ce})),Object(l.c)("div",{css:t},Object(l.c)(qe,{iconName:b.p,actionName:"Reset changes",action:null}),Object(l.c)(qe,{iconName:b.p,actionName:"Undo",action:null})))},Je=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),a=Object(l.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(l.c)("div",{css:Object(s.a)([N,a],""),title:n,onClick:function(){c(y(n)),c(w(1))}},Object(l.c)(u.a,{icon:t,size:"2x"}),Object(l.c)("div",null,n))},Ge=function(){var e=Object(l.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(l.c)("div",{css:e,title:"Finish Menu"},Object(l.c)(Je,{iconName:b.q,stateName:"Save changes"}),Object(l.c)(Je,{iconName:b.j,stateName:"Start processing"}),Object(l.c)(Je,{iconName:b.v,stateName:"Discard changes"}))},He={status:"idle",error:void 0},_e=Object(j.b)("video/postVideoInformation",function(){var e=Object(W.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:Qe(t.segments)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ke=Object(j.c)({name:"workflowPostState",initialState:He,reducers:{},extraReducers:function(e){e.addCase(_e.pending,(function(e,t){e.status="loading"})),e.addCase(_e.fulfilled,(function(e,t){e.status="success"})),e.addCase(_e.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Qe=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},Xe=function(e){return e.workflowPostState.status},Ze=function(e){return e.workflowPostAndProcessState.error},$e=Ke.reducer;var et={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},tt=function(){var e=Object(f.b)(),t=Object(f.c)(le),n=Object(f.c)(Xe),c=b.q,a=!1;"loading"===n?(c=b.s,a=!0):"success"===n?(c=b.b,a=!1):"failed"===n&&(c=b.g,a=!1);var i=et;return Object(l.c)("div",{css:Object(s.a)([N,i],""),title:"Save Button",onClick:function(){return e(_e({segments:t,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d"}))}},Object(l.c)(u.a,{icon:c,spin:a,size:"1x"}),Object(l.c)("span",null,"Yes, Save changes"))},nt=function(){var e=Object(f.c)(S),t=Object(f.c)(Xe),n=Object(f.c)(Ze),c=Object(l.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),a=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:c,title:"Save Area"},Object(l.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(l.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(l.c)("br",null),"Doth thou truly wish tah save?"),Object(l.c)("div",{css:D},Object(l.c)(yt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(tt,null)),Object(l.c)("div",{css:a,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),n,Object(l.c)("br",null)))},ct=Object(j.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),at=ct.actions.setState,it=function(e){return e.abortState.value},rt=ct.reducer;var ot={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},st=function(){var e=Object(f.b)(),t=ot;return Object(l.c)("div",{css:Object(s.a)([N,t],""),title:"Discard changes button",onClick:function(){return e(at(!0))}},Object(l.c)(u.a,{icon:b.v,size:"1x"}),Object(l.c)("span",null,"Yes, discard changes"))},dt=function(){var e=Object(f.c)(S),t=Object(l.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(l.c)("div",{css:t,title:"Abort Area"},Object(l.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(l.c)("br",null),"Doth thou truly wish tah abort?"),Object(l.c)("div",{css:D},Object(l.c)(yt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(l.c)(st,null)))},lt=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),a=Object(f.c)(fe),i=Object(l.b)({backgroundColor:n!==a?"snow":"#DDD",padding:"16px"},"");return Object(l.c)("div",{css:Object(s.a)([N,i],""),title:"Workflow Button for "+t,onClick:function(){return c(te(n))}},Object(l.c)("span",null,t))},ut=function(){var e=Object(f.c)(xe),t=Object(f.c)(S),n=Object(f.c)(k),c=Object(l.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),a=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(l.c)("div",{css:c},Object(l.c)("h2",null,"Select a workflow"),Object(l.c)("div",{css:a,title:"Workflow Selection Area"},e.map((function(e,t){return Object(l.c)(lt,{key:t,stateName:e.name,workflowIndex:t})}))),Object(l.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(l.c)("div",{css:D},Object(l.c)(yt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(l.c)(yt,{pageNumber:2,label:"Continue",iconName:b.e})))},bt={status:"idle",error:void 0},ft=Object(j.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(W.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:Qe(t.segments),worklows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),jt=Object(j.c)({name:"workflowPostAndProcessState",initialState:bt,reducers:{},extraReducers:function(e){e.addCase(ft.pending,(function(e,t){e.status="loading"})),e.addCase(ft.fulfilled,(function(e,t){e.status="success"})),e.addCase(ft.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),pt=function(e){return e.workflowPostAndProcessState.status},Ot=function(e){return e.workflowPostAndProcessState.error},gt=jt.reducer;var mt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},vt=function(){var e=Object(f.b)(),t=Object(f.c)(xe),n=Object(f.c)(fe),c=Object(f.c)(le),a=Object(f.c)(pt),i=b.j,r=!1;"loading"===a?(i=b.s,r=!0):"success"===a?(i=b.b,r=!1):"failed"===a&&(i=b.g,r=!1);var o=mt;return Object(l.c)("div",{css:Object(s.a)([N,o],""),title:"Start processing button",onClick:function(){return e(ft({segments:c,mediaPackageId:"9bf8aec2-10f5-4c64-bfde-2752fa3a394d",workflowID:t[n]}))}},Object(l.c)(u.a,{icon:i,spin:r,size:"1x"}),Object(l.c)("span",null,"Yes, start processing"))},xt=function(){var e=Object(f.c)(pt),t=Object(f.c)(Ot),n=Object(l.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(l.b)(Object(d.a)(Object(d.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(l.c)("div",{css:n,title:"Workflow Configuration Area"},Object(l.c)("h2",null,"Workflow Configuration"),Object(l.c)(u.a,{icon:b.y,size:"10x"}),"Placeholder",Object(l.c)("div",null,"Satisfied with your configuration?"),Object(l.c)("div",{css:D},Object(l.c)(yt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(l.c)(vt,null)),Object(l.c)("div",{css:c,title:"Error Box"},Object(l.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(l.c)("br",null),t))};var ht={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},yt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,a=Object(f.b)(),i=ht;return Object(l.c)("div",{css:Object(s.a)([N,i],""),title:n,onClick:function(){return a(w(t))}},Object(l.c)(u.a,{icon:c,size:"1x"}),Object(l.c)("span",null,n))},wt=function(){var e=Object(f.c)(k),t=Object(l.b)({display:0!==e?"none":"block"},""),n=Object(l.b)({display:1!==e?"none":"block"},""),c=Object(l.b)({display:2!==e?"none":"block"},"");return Object(l.c)("div",{title:"Finish"},Object(l.c)("div",{css:t},Object(l.c)(Ge,null)),Object(l.c)("div",{css:n},Object(l.c)(nt,null),Object(l.c)(ut,null),Object(l.c)(dt,null)),Object(l.c)("div",{css:c},Object(l.c)(xt,null)))};var St={name:"8atqhb",styles:"width:100%;"},kt=function(){var e=Object(f.c)(m),t=Object(l.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(l.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),a=Object(l.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(l.c)("div",{title:"MainMenuContext",css:St},Object(l.c)("div",{css:t,title:"Cutting Container"},Object(l.c)(Ae,null),Object(l.c)(Ue,null),Object(l.c)(Ve,null)),Object(l.c)("div",{css:n,title:"Finish Container"},Object(l.c)(wt,null)),Object(l.c)("div",{css:a},Object(l.c)(u.a,{icon:b.y,size:"10x"}),"Placeholder"))};var It={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Ct=function(){var e=Object(f.c)(it),t=Object(f.c)(pt),n=Object(f.c)(Oe),c=It;return Object(l.c)("div",{css:c,title:"The last area"},Object(l.c)(u.a,{icon:e?b.v:"success"===t?b.c:b.p,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},Pt=function(){var e=Object(f.c)(it),t=Object(f.c)(pt),n={display:"flex",flexDirection:"row",height:"100%"};return Object(l.c)(i.a.Fragment,null,e||"success"===t?Object(l.c)(Ct,null):Object(l.c)("div",{css:n,title:"Body"},Object(l.c)(R,null),Object(l.c)(kt,null)))};var Nt=function(){return Object(l.c)("div",{className:"App"},Object(l.c)(C,null),Object(l.c)(Pt,null))},Dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},At=Object(j.a)({reducer:{mainMenuState:v,finishState:I,videoState:he,workflowPostState:$e,workflowPostAndProcessState:gt,abortState:rt}});o.a.render(Object(l.c)(i.a.StrictMode,null,Object(l.c)(f.a,{store:At},Object(l.c)(Nt,null))),document.getElementById("root")),Dt()}},[[72,1,2]]]);
//# sourceMappingURL=main.16c9c13e.chunk.js.map