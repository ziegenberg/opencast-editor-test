(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(5);var i=n(0),r=n.n(i),c=n(14),a=n.n(c),o=(n(41),n(8)),s=n(7),u=n(4),d=n(2),l=n(10),b=Object(l.c)({name:"mainMenuState",initialState:{value:"Cutting"},reducers:{setState:function(e,t){e.value=t.payload}}}),p=b.actions.setState,f=function(e){return e.mainMenuState.value},g=b.reducer,j=n(1),m=function(e){var t=e.iconName,n=e.stateName,i=Object(d.b)(),r=Object(d.c)(f),c=Object(o.a)(Object(o.a)({backgroundColor:"snow",borderRadius:"10px",fontSize:"medium",width:"100%",height:"100px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform"},r===n&&{backgroundColor:"lightblue"}),{},{"&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:"10px"});return Object(j.b)("div",{css:c,title:n,onClick:function(){i(p(n))}},Object(j.b)(s.a,{icon:t,size:"2x"}),Object(j.b)("div",null,n))},O=function(){return Object(j.b)("div",{style:{backgroundColor:"snow",borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},title:"MainMenu"},Object(j.b)(m,{iconName:u.d,stateName:"Cutting"}),Object(j.b)(m,{iconName:u.e,stateName:"Metadata"}),Object(j.b)(m,{iconName:u.g,stateName:"Thumbnail"}),Object(j.b)(m,{iconName:u.i,stateName:"Start Workflow"}))},v=n(12),x=n(16),y=n(15),h=n.n(y),S=n(19),C=n(35);function w(e){return I.apply(this,arguments)}function I(){return(I=Object(S.a)(h.a.mark((function e(t){var n,i,r,c,a,s,u,d,l,b=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.length>1&&void 0!==b[1]?b[1]:{},i=n.body,r=Object(C.a)(n,["body"]),c={"Content-Type":"application/json"},a=btoa(unescape(encodeURIComponent("admin:opencast"))),s={Authorization:"Basic ".concat(a)},u=Object(o.a)(Object(o.a)({method:i?"POST":"GET"},r),{},{headers:Object(o.a)(Object(o.a)(Object(o.a)({},c),r.headers),s)}),i&&(u.body=JSON.stringify(i)),e.prev=6,e.next=9,window.fetch(t,u);case 9:return l=e.sent,e.next=12,l.json();case 12:if(d=e.sent,!l.ok){e.next=15;break}return e.abrupt("return",d);case 15:throw new Error(l.statusText);case 18:return e.prev=18,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:d));case 21:case"end":return e.stop()}}),e,null,[[6,18]])})))).apply(this,arguments)}w.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w(e,Object(o.a)(Object(o.a)({},t),{},{method:"GET"}))},w.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w(e,Object(o.a)(Object(o.a)({},n),{},{body:t}))};var k=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},A={isPlaying:!1,currentlyAt:0,segments:[{id:Object(l.d)(),startTime:0,endTime:1,isAlive:!0}],activeSegmentIndex:0,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],status:"idle",error:null},T=Object(l.b)("videoURL/fetchVideoURL",Object(S.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("https://legacy.opencast.org/admin-ng/tools/ID-dual-stream-demo/editor.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),N=Object(l.c)({name:"videoState",initialState:A,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=k(t.payload,3),D(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=k(1e3*t.payload,3),D(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].startTime===e.currentlyAt||e.segments[e.activeSegmentIndex].endTime===e.currentlyAt)return e;var t={id:Object(l.d)(),startTime:e.segments[e.activeSegmentIndex].startTime,endTime:e.currentlyAt,isAlive:!1},n={id:Object(l.d)(),startTime:e.currentlyAt,endTime:e.segments[e.activeSegmentIndex].endTime,isAlive:!1};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].isAlive=!e.segments[e.activeSegmentIndex].isAlive}},extraReducers:function(e){e.addCase(T.pending,(function(e,t){e.status="loading"})),e.addCase(T.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.previews.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.previews.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=t.payload.presenters,e.segments=R(t.payload.segments,t.payload.duration)})),e.addCase(T.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),D=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.startTime<=e.currentlyAt&&t.endTime>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},R=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(l.d)(),startTime:0,endTime:t,isAlive:!0}),e.forEach((function(e){n.push({id:Object(l.d)(),startTime:e.start,endTime:e.end,isAlive:!0})})),n},P=N.actions,z=P.setIsPlaying,M=P.setCurrentlyAt,B=P.setCurrentlyAtInSeconds,E=(P.addSegment,P.cut),L=P.markAsDeletedOrAlive,U=function(e){return e.videoState.isPlaying},V=function(e){return e.videoState.currentlyAt},F=function(e){return e.videoState.currentlyAt/1e3},W=function(e){return e.videoState.segments},J=function(e){return e.videoState.activeSegmentIndex},G=function(e){return e.videoState.segments[e.videoState.activeSegmentIndex].isAlive},H=function(e){return e.videoState.videoURLs},q=function(e){return e.videoState.videoCount},Y=function(e){return e.videoState.duration},_=function(e){return e.videoState.duration/1e3},K=function(e){return e.videoState.title},Q=function(e){return e.videoState.presenters},X=N.reducer,Z=n(32),$=n.n(Z);var ee={name:"1p6g5ly",styles:"min-width:320px;min-height:240px;"},te=function(e){var t=e.url,n=e.isMuted,r=Object(d.b)(),c=Object(d.c)(U),a=Object(d.c)(F),o=Object(d.c)(_),s=Object(i.useState)(!1),u=Object(x.a)(s,2),l=u[0],b=u[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){!c&&p.current&&l&&p.current.seekTo(a,"seconds")}));var f=ee;return Object(j.b)($.a,{url:t,ref:p,width:"100%",height:"auto",playing:c,muted:n,css:f,onProgress:function(e){k(a,3)!==k(e.playedSeconds,3)&&r(B(e.playedSeconds))},progressInterval:100,onReady:function(){b(!0)},onEnded:function(){r(z(!1)),r(B(o))}})},ne={name:"1r139wu",styles:"display:inline-block;width:110px;"},ie=function(){var e=Object(d.b)(),t=Object(d.c)(U),n=Object(d.c)(V),r=Object(i.useState)(!1),c=Object(x.a)(r,2),a=c[0],o=c[1];return Object(j.b)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},title:"Video Controls"},Object(j.b)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},title:"Video Controls Top Row"},Object(j.b)("div",{style:{display:"flex",gap:"10px"}},Object(j.b)(s.a,{icon:u.c,size:"1x"}),Object(j.b)(s.a,{css:{cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.05)"}},icon:a?u.m:u.l,size:"1x",onClick:function(){return o(!a)}})),Object(j.b)(s.a,{css:{cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},icon:t?u.f:u.h,size:"2x",onClick:function(){return e(z(!t))}}),Object(j.b)("div",{css:ne},new Date(n||0).toISOString().substr(11,12))))},re=function(){var e=Object(d.c)(K),t=Object(d.c)(Q);return Object(j.b)("div",{title:"Video Area Header"},Object(j.b)("div",{css:{fontSize:"large"},title:"Video Title"},e),Object(j.b)("div",{title:"Video Presenters"},"by ",t.join(", ")))},ce=function(){var e,t=Object(d.b)(),n=Object(d.c)(H),r=Object(d.c)(q),c=Object(d.c)((function(e){return e.videoState.status})),a=Object(d.c)((function(e){return e.videoState.error}));Object(i.useEffect)((function(){"idle"===c&&t(T())}),[c,t]),"loading"===c?e=Object(j.b)("div",{className:"loader"},"Loading..."):"success"===c?e="":"failed"===c&&(e=Object(j.b)("div",null,a));for(var o=[],s=0;s<r;s++)o.push(Object(j.b)(te,{key:s,url:n[s],isMuted:0===s}));return Object(j.b)("div",{css:{backgroundColor:"snow",display:"flex",width:"auto",flex:"7",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #BBB"},title:"Video Area"},e,Object(j.b)(re,null),Object(j.b)("div",{css:{backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},title:"Video Player Area"},o),Object(j.b)(ie,null))},ae=n(33),oe=n.n(ae),se=n(34),ue=n.p+"static/media/placeholder_waveform.d23b087b.png";var de={name:"190c1k3",styles:"height:230px;"},le={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},be=function(e){var t=e.timelineWidth,n=Object(d.b)(),r=Object(d.c)(U),c=Object(d.c)(V),a=Object(d.c)(Y),o=Object(i.useState)({x:0,y:0}),l=Object(x.a)(o,2),b=l[0],p=l[1],f=Object(i.useState)(!1),g=Object(x.a)(f,2),m=g[0],O=g[1],v=Object(i.useRef)(0);Object(i.useEffect)((function(){c!==v.current&&(y(),v.current=c)}));var y=function(){var e=b.y;p({x:c/a*t,y:e})},h=Object(j.a)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),S=Object(j.a)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:m?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),C=le;return Object(j.b)(oe.a,{onStart:function(){O(!0)},onStop:function(e,i){var r=i.x,c=i.y;p({x:r,y:c}),n(M(r/t*a)),O(!1)},axis:"x",bounds:"parent",position:b,disabled:r},Object(j.b)("div",{css:h,title:"Scrubber"},Object(j.b)("div",{css:S,title:"dragHandle"},Object(j.b)(s.a,{css:C,icon:u.a,size:"1x"}))))},pe=function(e){e.timelineWidth;var t=Object(d.c)(W),n=Object(d.c)(Y),i=Object(d.c)(J),r=function(e,t){return e&&!t?"rgba(0, 0, 255, 0.4)":e||t?e&&t?"rgba(0, 0, 200, 0.4)":!e&&t?"rgba(200, 0, 0, 0.4)":void 0:"rgba(255, 0, 0, 0.4)"},c=Object(j.a)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(j.b)("div",{css:c,title:"Segments"},t.map((function(e,t){return Object(j.b)("div",{key:e.id,title:"Segment",css:Object(v.a)({backgroundColor:r(e.isAlive,i===t),borderRadius:"15px",borderStyle:"solid",borderColor:e.isAlive?"blue":"red",borderWidth:"1px",boxSizing:"border-box",width:(e.endTime-e.startTime)/n*100+"%",height:"230px",zIndex:1},"")})})))},fe=function(){var e=Object(se.a)(),t=e.ref,n=e.width,i=void 0===n?1:n,r=Object(j.a)({position:"relative",borderRadius:"10px",backgroundColor:"snow",height:"250px",width:"100%"},"");return Object(j.b)("div",{ref:t,css:r,title:"Timeline"},Object(j.b)(be,{timelineWidth:i}),Object(j.b)("div",{css:de},Object(j.b)("img",{alt:"waveform2",src:ue,style:{position:"absolute",height:"230px",width:"100%",top:"10px"}}),Object(j.b)(pe,{timelineWidth:i})))},ge=function(e){var t=e.iconName,n=e.actionName,i=e.action,r=Object(d.b)();return Object(j.b)("div",{css:{backgroundColor:"snow",borderRadius:"10px",fontSize:"medium",padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:"pointer",justifyContent:"center",alignContent:"center",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",alignItems:"center",gap:"10px",textAlign:"center"},title:n,onClick:function(){return i?r(i()):""}},Object(j.b)(s.a,{icon:t,size:"1x"}),Object(j.b)("span",null,n))},je=function(){var e=Object(d.b)(),t=Object(d.c)(G);return Object(j.b)("div",{css:{backgroundColor:"snow",borderRadius:"10px",fontSize:"medium",padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:"pointer",justifyContent:"center",alignContent:"center",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",alignItems:"center",gap:"10px",textAlign:"center"},title:t?"Delete":"Restore",onClick:function(){return e(L())}},Object(j.b)(s.a,{icon:t?u.o:u.p,size:"1x"}),Object(j.b)("div",null,t?"Delete":"Restore"))},me=function(){var e=Object(j.a)({backgroundColor:"snow",flex:"3",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"00px",gap:"30px"},""),t=Object(j.a)({backgroundColor:"snow",display:"flex",flexDirection:"row",gap:"30px"},"");return Object(j.b)("div",{css:e},Object(j.b)("div",{css:t},Object(j.b)(ge,{iconName:u.b,actionName:"Cut",action:E}),Object(j.b)(je,null),Object(j.b)(ge,{iconName:u.j,actionName:"Merge Left",action:null}),Object(j.b)(ge,{iconName:u.k,actionName:"Merge Right",action:null})),Object(j.b)("div",{css:t},Object(j.b)(ge,{iconName:u.i,actionName:"Reset changes",action:null}),Object(j.b)(ge,{iconName:u.i,actionName:"Undo",action:null})))},Oe=function(){var e=Object(d.c)(f),t=Object(j.a)({flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingRight:"20px",gap:"20px"},"");return Object(j.b)("div",{css:t,title:"MainMenuContext"},function(e){switch(e){case"Cutting":return Object(j.b)(r.a.Fragment,null,Object(j.b)("div",{css:Object(v.a)({width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px"},"")},Object(j.b)(ce,null),Object(j.b)(me,null)),Object(j.b)(fe,null));default:return Object(j.b)(r.a.Fragment,null,Object(j.b)(s.a,{icon:u.n,size:"10x"}),"Under Construction")}}(e))},ve=function(){return Object(j.b)("div",{css:{display:"flex",flex:"1",flexDirection:"row",gap:"75px"},title:"Body"},Object(j.b)(O,null),Object(j.b)(Oe,null))};var xe={name:"x7gdnd",styles:"background-color:snow;"};var ye=function(){return Object(j.b)("div",{css:xe,className:"App"},Object(j.b)(ve,null))},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))},Se=Object(l.a)({reducer:{mainMenuState:g,videoState:X}});a.a.render(Object(j.b)(r.a.StrictMode,null,Object(j.b)(d.a,{store:Se},Object(j.b)(ye,null))),document.getElementById("root")),he()}},[[72,1,2]]]);
//# sourceMappingURL=main.5da5a8af.chunk.js.map