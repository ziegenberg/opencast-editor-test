(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);n(5);var c,a=n(1),i=n.n(a),r=n(16),o=n.n(r),s=(n(41),n(7)),l=n(9),d=n(0),u=n(6),b=n(3),f=n(2),p=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(c||(c={}));var g={value:c.cutting},h=Object(p.c)({name:"mainMenuState",initialState:g,reducers:{setState:function(e,t){e.value=t.payload}}}),j=h.actions.setState,m=function(e){return e.mainMenuState.value},v=h.reducer,O=Object(p.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),x=O.actions,y=x.setState,w=x.setPageNumber,k=function(e){return e.finishState.value},S=function(e){return e.finishState.pageNumber},I=O.reducer;var C=function(){return Object(d.c)(d.a,{styles:D})},D={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},P=Object(d.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:focus":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),N=Object(d.b)({display:"flex",flexDirection:"row",gap:"20px"},""),A=n(12),T=n.n(A),E=n(14),R=n(35);function W(e){return M.apply(this,arguments)}function M(){return(M=Object(E.a)(T.a.mark((function e(t){var n,c,a,i,r,o,s,d,u,b,f=arguments;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},c=n.body,a=Object(R.a)(n,["body"]),i={"Content-Type":"application/json"},r=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(r)},s=Object(l.a)(Object(l.a)({method:c?"POST":"GET"},a),{},{headers:Object(l.a)(Object(l.a)(Object(l.a)({},i),a.headers),o)}),c&&(s.body=JSON.stringify(c)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(u=e.sent,d=u.length?JSON.parse(u):"",!b.ok){e.next=16;break}return e.abrupt("return",d);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:d));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}W.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W(e,Object(l.a)(Object(l.a)({},t),{},{method:"GET"}))},W.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return W(e,Object(l.a)(Object(l.a)({},n),{},{body:t}))};var z=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},B={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(p.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},H=Object(p.b)("video/fetchVideoInformation",function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(p.c)({name:"videoState",initialState:B,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=z(t.payload,0),F(e),G(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=z(1e3*t.payload,0),F(e),G(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(p.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(p.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){q(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){q(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase(H.pending,(function(e,t){e.status="loading"})),e.addCase(H.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=V(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase(H.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),F=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},V=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(p.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(p.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},q=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),F(e))},G=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},K=L.actions,U=K.setIsPlaying,Y=K.setIsPlayPreview,J=K.setCurrentlyAt,X=K.setCurrentlyAtInSeconds,Q=(K.addSegment,K.cut),Z=K.markAsDeletedOrAlive,$=K.setSelectedWorkflowIndex,_=K.mergeLeft,ee=K.mergeRight,te=K.setPreviewTriggered,ne=function(e){return e.videoState.isPlaying},ce=function(e){return e.videoState.isPlayPreview},ae=function(e){return e.videoState.previewTriggered},ie=function(e){return e.videoState.currentlyAt},re=function(e){return e.videoState.currentlyAt/1e3},oe=function(e){return e.videoState.segments},se=function(e){return e.videoState.activeSegmentIndex},le=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},de=function(e){return e.videoState.selectedWorkflowIndex},ue=function(e){return e.videoState.videoURLs},be=function(e){return e.videoState.videoCount},fe=function(e){return e.videoState.duration},pe=function(e){return e.videoState.duration/1e3},ge=function(e){return e.videoState.title},he=function(e){return e.videoState.presenters},je=function(e){return e.videoState.tracks},me=function(e){return e.videoState.workflows},ve=L.reducer,Oe=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),i=Object(f.c)(m),r=function(){a(j(n)),n===c.finish&&a(w(0)),a(U(!1))},o=Object(d.b)(Object(l.a)(Object(l.a)({width:"100%",height:"100px"},i===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(d.c)("li",{css:Object(s.a)([P,o],""),role:"menuitem",tabIndex:0,onClick:r,onKeyDown:function(e){"Enter"===e.key&&r()}},Object(d.c)(u.a,{icon:t,size:"2x"}),Object(d.c)("div",null,n))},xe=function(){var e=Object(d.b)({borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},"");return Object(d.c)("nav",{css:e,title:"Main Menu",role:"navigation","aria-label":"Main Navigation"},Object(d.c)(Oe,{iconName:b.i,stateName:c.cutting}),Object(d.c)(Oe,{iconName:b.j,stateName:c.metadata}),Object(d.c)(Oe,{iconName:b.l,stateName:c.thumbnail}),Object(d.c)(Oe,{iconName:b.p,stateName:c.finish}))},ye=n(17),we="e63706bc-48df-4346-a72a-bf6f39cea32c",ke=new URLSearchParams(window.location.search);if(ke.has("mediaPackageId")){var Se=ke.get("mediaPackageId");Se&&(we=Se)}var Ie=n(32),Ce=n.n(Ie);var De=function(e){var t=e.url,n=e.isMuted,c=Object(f.b)(),i=Object(f.c)(ne),r=Object(f.c)(re),o=Object(f.c)(pe),s=Object(f.c)(ae),l=Object(a.useRef)(null),u=Object(a.useState)(!1),b=Object(ye.a)(u,2),p=b[0],g=b[1];return Object(a.useEffect)((function(){!i&&l.current&&p&&l.current.seekTo(r,"seconds"),s&&l.current&&p&&(l.current.seekTo(r,"seconds"),c(te(!1)))})),Object(d.c)(Ce.a,{url:t,ref:l,width:"100%",height:"auto",playing:i,muted:n,onProgress:function(e){z(r,3)!==z(e.playedSeconds,3)&&c(X(e.playedSeconds))},progressInterval:100,onReady:function(){g(!0)},onEnded:function(){c(U(!1)),c(X(o))},pip:!1,tabIndex:-1})},Pe={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Ne={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Ae={name:"1supqt3",styles:"display:flex;gap:10px;justify-content:center;align-items:center;"},Te={name:"1jblnxu",styles:"display:inline-block;flex-wrap:nowrap;"},Ee={name:"1r139wu",styles:"display:inline-block;width:110px;"},Re=function(){var e=Object(f.b)(),t=Object(f.c)(ne),n=Object(f.c)(ce),c=Object(f.c)(ie),a=function(){e(Y(!n))},i=function(){e(U(!t))},r=Object(d.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),o=Object(d.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),s=Pe,l=Ne;return Object(d.c)("div",{css:r,title:"Video Controls"},Object(d.c)("div",{css:o,title:"Video Controls Top Row"},Object(d.c)("div",{css:Ae},Object(d.c)("div",{css:Te},"Preview Mode"),Object(d.c)(u.a,{css:l,icon:n?b.v:b.u,size:"1x",title:"Play Preview Switch: "+n,role:"switch","aria-checked":n,tabIndex:0,onClick:a,onKeyDown:function(e){" "===e.key&&a()}})),Object(d.c)(u.a,{css:s,icon:t?b.k:b.m,size:"2x",role:"button","aria-pressed":t,tabIndex:0,title:"Play Button",onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}}),Object(d.c)("div",{css:Ee},new Date(c||0).toISOString().substr(11,12))))},We={name:"wnc553",styles:"display:inline-block;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:500px;"},Me={name:"18kfia5",styles:"font-weight:bold;font-size:24px;vertical-align:-2.5px;"},ze={name:"6xix1i",styles:"font-size:16px;"},Be=function(){var e,t=Object(f.c)(ge),n=Object(f.c)(he),c=We,a=Me;return n&&n.length&&(e=Object(d.c)("div",{css:c,title:"Video Presenters"},"by ",n.join(", "))),Object(d.c)("div",{title:"Video Area Header",css:ze},Object(d.c)("div",{css:Object(s.a)([c,a],""),title:"Video Title"},t),e)},He=function(){var e,t=Object(f.b)(),n=Object(f.c)(ue),c=Object(f.c)(be),i=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(a.useEffect)((function(){"idle"===i&&t(H({mediaPackageId:we}))}),[i,t]),"loading"===i?e=Object(d.c)("div",{className:"loader"},"Loading..."):"success"===i?e="":"failed"===i&&(e=Object(d.c)("div",null,r));for(var o=[],s=0;s<c;s++)o.push(Object(d.c)(De,{key:s,url:n[s],isMuted:0!==s}));var l=Object(d.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px",borderBottom:"1px solid #BBB"},""),u=Object(d.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(d.c)("div",{css:l,title:"Video Area"},e,Object(d.c)(Be,null),Object(d.c)("div",{css:u,title:"Video Player Area"},o),Object(d.c)(Re,null))},Le=n(33),Fe=n.n(Le),Ve=n(34);function qe(e){var t=this;this.audioContext=new AudioContext,this.oCanvas=document.createElement("canvas"),this.buffer={},this.WIDTH=0,this.HEIGHT=0,this.channelData=[],this.waveformImage="",this.audioBuffer=null,this.aveRMS=0,this.peakRMS=0,this.numberSamples=1e5,this.waveformType="img",this.drawWaveform=this.drawCanvasWaveform,e.width&&e.height&&this.setDimensions(e.width,e.height),e.samples&&(this.numberSamples=e.samples),e.type&&"svg"===e.type&&(this.waveformType="svg",this.drawWaveform=this.delegateToWorker,this.worker=null),e.media&&this.generateWaveform(e.media).then((function(){t.getAudioData(),t.drawWaveform(),"svg"!==t.waveformType&&n.forEach((function(e){e(t.waveformImage||t.svgPath,t.waveformType)}))})).catch((function(e){return console.log(e)}));var n=[];Object.defineProperty(this,"oncomplete",{get:function(){return n},set:function(e,t){if("function"==typeof e){if(this.waveformImage||this.svgPath)return void e(this.waveformImage||this.svgPath,this.svgLength);n.push(e)}}})}qe.prototype={constructor:qe,setDimensions:function(e,t){this.oCanvas.width=e,this.WIDTH=e,this.oCanvas.height=t,this.HEIGHT=t,this.ocCtx=this.oCanvas.getContext("2d")},decodeAudioData:function(e){var t=this;return new Promise((function(n,c){new Promise((function(t,n){if(e instanceof ArrayBuffer)t(e);else if(e instanceof Blob){var c=new FileReader;c.onload=function(){t(c.result)},c.readAsArrayBuffer(e)}})).then((function(e){t.audioContext.decodeAudioData(e).then((function(e){t.buffer=e,n()})).catch((function(e){c(e)}))})).catch((function(e){c(e)}))}))},getAudioData:function(e){e=e||this.buffer,this.channelData=this.dropSamples(e.getChannelData(0),this.numberSamples)},drawCanvasWaveform:function(e){var t=this;e=e||1,this.ocCtx.fillStyle="#FFFFFF00",this.ocCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ocCtx.lineWidth=1,this.ocCtx.strokeStyle="black";var n=1*this.WIDTH/this.channelData.length,c=0;this.ocCtx.beginPath(),this.ocCtx.moveTo(c,this.channelData[0]*this.HEIGHT/128/2),this.channelData.forEach((function(a){var i=a*e,r=t.HEIGHT*(1+i)/2;t.ocCtx.lineTo(c,r),t.aveRMS+=a*a,t.peakRMS=Math.max(a*a,t.peakRMS),c+=n})),this.ocCtx.lineTo(this.WIDTH,this.HEIGHT/2),this.ocCtx.stroke(),this.aveRMS=Math.sqrt(this.aveRMS/this.channelData.length),this.aveDBs=20*Math.log(this.aveRMS)/Math.log(10),this.waveformImage=this.oCanvas.toDataURL()},dropSamples:function(e,t){var n=Math.max(parseInt(e.length/t),1);return e.filter((function(e,t){return t%n===0}))},generateWaveform:function(e){return this.decodeAudioData(e)},delegateToWorker:function(){this.worker||(this.worker=new Worker("../util/svgworker.js"),this.worker.addEventListener("message",this.workerCommunication.bind(this),!1),this.worker.postMessage(this.channelData))},workerCommunication:function(e){switch(e.data.type){case"path":this.setSVGpath(e.data.path,e.data.length),this.worker.removeEventListener("message",this.workerCommunication.bind(this),!1),this.worker.terminate(),this.worker=null}},setSVGpath:function(e,t){var n=this;this.svgPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgLength=t,this.svgPath.setAttribute("d",e),this.svgPath.setAttribute("vector-effect","non-scaling-stroke"),this.svgPath.setAttribute("stroke-width","0.5px"),this.oncomplete.forEach((function(e){return e(n.svgPath,n.svgLength)}))}};var Ge={name:"190c1k3",styles:"height:230px;"},Ke={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},Ue=function(e){var t=e.timelineWidth,n=Object(f.b)(),c=Object(f.c)(ne),r=Object(f.c)(ie),o=Object(f.c)(fe),s=Object(a.useState)({x:0,y:0}),l=Object(ye.a)(s,2),p=l[0],g=l[1],h=Object(a.useState)(!1),j=Object(ye.a)(h,2),m=j[0],v=j[1],O=Object(a.useRef)(0),x=i.a.useRef(null);Object(a.useEffect)((function(){r!==O.current&&(y(),O.current=r)})),Object(a.useEffect)((function(){r&&o&&g({x:r/o*t,y:0})}),[t]);var y=function(){var e=p.y;g({x:r/o*t,y:e})},w=Object(d.b)({backgroundColor:"rgba(255, 0, 0, 1)",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center"},""),k=Object(d.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:m?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),S=Ke;return Object(d.c)(Fe.a,{onStart:function(){v(!0)},onStop:function(e,c){var a=c.x,i=c.y;g({x:a,y:i}),n(J(a/t*o)),v(!1)},axis:"x",bounds:"parent",position:p,disabled:c,nodeRef:x},Object(d.c)("div",{ref:x,css:w,title:"Scrubber"},Object(d.c)("div",{css:k,title:"dragHandle","aria-grabbed":m},Object(d.c)(u.a,{css:S,icon:b.a,size:"1x"}))))},Ye=function(e){e.timelineWidth;var t=Object(f.c)(oe),n=Object(f.c)(fe),c=Object(f.c)(se),a=Object(d.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(d.c)("div",{css:a,title:"Segments"},t.map((function(e,t){return Object(d.c)("div",{key:e.id,title:"Segment",css:Object(s.a)({background:(a=e.deleted,i=c===t,a||i?a&&!i?"repeating-linear-gradient(\n                -45deg,\n                rgba(255, 45, 45, 0.4),\n                rgba(255, 45, 45, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 20px);":!a&&i?"rgba(0, 0, 200, 0.4)":a&&i?"repeating-linear-gradient(\n                -45deg,\n                rgba(200, 45, 45, 0.4),\n                rgba(200, 45, 45, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 20px);":void 0:"rgba(0, 0, 255, 0.4)"),borderRadius:"5px",borderStyle:c===t?"dashed":"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")});var a,i})))},Je={name:"e6zfwc",styles:"min-height:0;"},Xe=function(){var e=Object(f.c)(ue),t=Object(f.c)((function(e){return e.videoState.status})),n=Object(d.b)({display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center",width:"100%",height:"230px",paddingTop:"10px"},""),c=Object(a.useState)([]),i=Object(ye.a)(c,2),r=i[0],o=i[1];Object(a.useEffect)((function(){if("success"===t){var n=[],c=0;[e[0]].forEach((function(e,t,a){var i=null,r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i=r.response,new qe({type:"img",width:"2000",height:"230",samples:1e5,media:new File([i],i)}).oncomplete=function(e,t){n.push(e),++c===a.length&&o(n)}},r.send()}))}}),[t,e]);return Object(d.c)("div",{css:n,title:"WaveformDisplayTest"},r?r.map((function(e,t){return Object(d.c)("img",{key:t,alt:"Waveform",src:e||"",css:Je})})):Object(d.c)(u.a,{icon:b.q,spin:!0,size:"3x"}))},Qe=function(){var e=Object(Ve.a)(),t=e.ref,n=e.width,c=void 0===n?1:n,a=Object(d.b)({position:"relative",height:"250px",width:"100%"},"");return Object(d.c)("div",{ref:t,css:a,title:"Timeline"},Object(d.c)(Ue,{timelineWidth:c}),Object(d.c)("div",{css:Ge},Object(d.c)(Xe,null),Object(d.c)(Ye,{timelineWidth:c})))},Ze={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},$e=function(e){var t=e.iconName,n=e.actionName,c=e.action,a=Object(f.b)(),i=function(){c&&a(c())};return Object(d.c)("div",{css:Object(s.a)([P,Ze],""),role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(d.c)(u.a,{icon:t,size:"1x"}),Object(d.c)("span",null,n))},_e=function(){var e=Object(f.b)(),t=Object(f.c)(le);return Object(d.c)("div",{css:Object(s.a)([P,Ze],""),role:"button",tabIndex:0,onClick:function(){return e(Z())}},Object(d.c)(u.a,{icon:t?b.x:b.y,size:"1x"}),Object(d.c)("div",null,t?"Delete":"Restore"))},et=function(){var e=Object(d.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(d.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(d.c)("div",{css:e},Object(d.c)("div",{css:t},Object(d.c)($e,{iconName:b.f,actionName:"Cut",action:Q}),Object(d.c)(_e,null),Object(d.c)($e,{iconName:b.r,actionName:"Merge Left",action:_}),Object(d.c)($e,{iconName:b.s,actionName:"Merge Right",action:ee})),Object(d.c)("div",{css:t},Object(d.c)($e,{iconName:b.n,actionName:"Reset changes",action:null}),Object(d.c)($e,{iconName:b.n,actionName:"Undo",action:null})))},tt=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),a=function(){c(y(n)),c(w(1))},i=Object(d.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(d.c)("div",{css:Object(s.a)([P,i],""),role:"button",tabIndex:0,onClick:a,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||a()}},Object(d.c)(u.a,{icon:t,size:"2x"}),Object(d.c)("div",null,n))},nt=function(){var e=Object(d.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(d.c)("div",{css:e,title:"Finish Menu"},Object(d.c)(tt,{iconName:b.o,stateName:"Save changes"}),Object(d.c)(tt,{iconName:b.h,stateName:"Start processing"}),Object(d.c)(tt,{iconName:b.t,stateName:"Discard changes"}))},ct={status:"idle",error:void 0},at=Object(p.b)("video/postVideoInformation",function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:rt(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),it=Object(p.c)({name:"workflowPostState",initialState:ct,reducers:{},extraReducers:function(e){e.addCase(at.pending,(function(e,t){e.status="loading"})),e.addCase(at.fulfilled,(function(e,t){e.status="success"})),e.addCase(at.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),rt=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},ot=function(e){return e.workflowPostState.status},st=function(e){return e.workflowPostAndProcessState.error},lt=it.reducer;var dt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},ut=function(){var e=Object(f.b)(),t=Object(f.c)(oe),n=Object(f.c)(je),c=Object(f.c)(ot),a=b.o,i=!1;"loading"===c?(a=b.q,i=!0):"success"===c?(a=b.b,i=!1):"failed"===c&&(a=b.g,i=!1);var r=function(){e(at({segments:t,tracks:n,mediaPackageId:we}))},o=dt;return Object(d.c)("div",{css:Object(s.a)([P,o],""),title:"Save Button",role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(d.c)(u.a,{icon:a,spin:i,size:"1x"}),Object(d.c)("span",null,"Yes, Save changes"))},bt=function(){var e=Object(f.c)(k),t=Object(f.c)(ot),n=Object(f.c)(st),c=Object(d.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),a=Object(d.b)(Object(l.a)(Object(l.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(d.c)("div",{css:c,title:"Save Area"},Object(d.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(d.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(d.c)("br",null),"Doth thou truly wish tah save?"),Object(d.c)("div",{css:N},Object(d.c)(Tt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(d.c)(ut,null)),Object(d.c)("div",{css:a,title:"Error Box"},Object(d.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(d.c)("br",null),n,Object(d.c)("br",null)))},ft=Object(p.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),pt=ft.actions.setState,gt=function(e){return e.abortState.value},ht=ft.reducer;var jt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},mt=function(){var e=Object(f.b)(),t=function(){e(pt(!0))},n=jt;return Object(d.c)("div",{css:Object(s.a)([P,n],""),title:"Discard changes button",role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||t()}},Object(d.c)(u.a,{icon:b.t,size:"1x"}),Object(d.c)("span",null,"Yes, discard changes"))},vt=function(){var e=Object(f.c)(k),t=Object(d.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(d.c)("div",{css:t,title:"Abort Area"},Object(d.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(d.c)("br",null),"Doth thou truly wish tah abort?"),Object(d.c)("div",{css:N},Object(d.c)(Tt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(d.c)(mt,null)))},Ot=function(e){var t=e.stateName,n=e.workflowIndex,c=Object(f.b)(),a=Object(f.c)(de),i=function(){c($(n))},r=Object(d.b)({backgroundColor:n!==a?"snow":"#DDD",padding:"16px"},"");return Object(d.c)("div",{css:Object(s.a)([P,r],""),title:"Workflow Button for "+t,role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(d.c)("span",null,t))},xt=function(){var e=Object(f.c)(me),t=Object(f.c)(k),n=Object(f.c)(S),c=Object(d.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),a=Object(d.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(d.c)("div",{css:c},Object(d.c)("h2",null,"Select a workflow"),Object(d.c)("div",{css:a,title:"Workflow Selection Area"},e.map((function(e,t){return Object(d.c)(Ot,{key:t,stateName:e.name,workflowIndex:t})}))),Object(d.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(d.c)("div",{css:N},Object(d.c)(Tt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(d.c)(Tt,{pageNumber:2,label:"Continue",iconName:b.e})))},yt={status:"idle",error:void 0},wt=Object(p.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("https://pyca.opencast.org/editor/".concat(t.mediaPackageId,"/edit.json"),{segments:rt(t.segments),tracks:t.tracks,workflows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),kt=Object(p.c)({name:"workflowPostAndProcessState",initialState:yt,reducers:{},extraReducers:function(e){e.addCase(wt.pending,(function(e,t){e.status="loading"})),e.addCase(wt.fulfilled,(function(e,t){e.status="success"})),e.addCase(wt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),St=function(e){return e.workflowPostAndProcessState.status},It=function(e){return e.workflowPostAndProcessState.error},Ct=kt.reducer;var Dt={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},Pt=function(){var e=Object(f.b)(),t=Object(f.c)(me),n=Object(f.c)(de),c=Object(f.c)(oe),a=Object(f.c)(je),i=Object(f.c)(St),r=function(){e(wt({segments:c,tracks:a,mediaPackageId:we,workflowID:[t[n]]}))},o=b.h,l=!1;"loading"===i?(o=b.q,l=!0):"success"===i?(o=b.b,l=!1):"failed"===i&&(o=b.g,l=!1);var p=Dt;return Object(d.c)("div",{css:Object(s.a)([P,p],""),title:"Start processing button",role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(d.c)(u.a,{icon:o,spin:l,size:"1x"}),Object(d.c)("span",null,"Yes, start processing"))},Nt=function(){var e=Object(f.c)(St),t=Object(f.c)(It),n=Object(d.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),c=Object(d.b)(Object(l.a)(Object(l.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(d.c)("div",{css:n,title:"Workflow Configuration Area"},Object(d.c)("h2",null,"Workflow Configuration"),Object(d.c)(u.a,{icon:b.w,size:"10x"}),"Placeholder",Object(d.c)("div",null,"Satisfied with your configuration?"),Object(d.c)("div",{css:N},Object(d.c)(Tt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(d.c)(Pt,null)),Object(d.c)("div",{css:c,title:"Error Box"},Object(d.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(d.c)("br",null),t))};var At={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Tt=function(e){var t=e.pageNumber,n=e.label,c=e.iconName,a=Object(f.b)(),i=function(){a(w(t))},r=At;return Object(d.c)("div",{css:Object(s.a)([P,r],""),role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(d.c)(u.a,{icon:c,size:"1x"}),Object(d.c)("span",null,n))},Et=function(){var e=Object(f.c)(S),t=Object(d.b)({display:0!==e?"none":"block"},""),n=Object(d.b)({display:1!==e?"none":"block"},""),c=Object(d.b)({display:2!==e?"none":"block"},"");return Object(d.c)("div",{title:"Finish"},Object(d.c)("div",{css:t},Object(d.c)(nt,null)),Object(d.c)("div",{css:n},Object(d.c)(bt,null),Object(d.c)(xt,null),Object(d.c)(vt,null)),Object(d.c)("div",{css:c},Object(d.c)(Nt,null)))};var Rt={name:"8atqhb",styles:"width:100%;"},Wt=function(){var e=Object(f.c)(m),t=Object(d.b)({display:e!==c.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(d.b)({display:e!==c.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),a=Object(d.b)({display:e===c.cutting||e===c.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(d.c)("main",{title:"MainMenuContext",css:Rt,role:"main"},Object(d.c)("div",{css:t,title:"Cutting Container"},Object(d.c)(He,null),Object(d.c)(et,null),Object(d.c)(Qe,null)),Object(d.c)("div",{css:n,title:"Finish Container"},Object(d.c)(Et,null)),Object(d.c)("div",{css:a},Object(d.c)(u.a,{icon:b.w,size:"10x"}),"Placeholder"))};var Mt={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},zt=function(){var e=Object(f.c)(gt),t=Object(f.c)(St),n=Object(f.c)(fe),c=Mt;return Object(d.c)("div",{css:c,title:"The last area"},Object(d.c)(u.a,{icon:e?b.t:"success"===t?b.c:b.n,size:"10x"}),e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong.")},Bt=function(){var e=Object(f.c)(gt),t=Object(f.c)(St),n={display:"flex",flexDirection:"row",height:"100%"};return Object(d.c)(i.a.Fragment,null,e||"success"===t?Object(d.c)(zt,null):Object(d.c)("div",{css:n,title:"Body"},Object(d.c)(xe,null),Object(d.c)(Wt,null)))};var Ht=function(){return Object(d.c)("div",{className:"App"},Object(d.c)(C,null),Object(d.c)(Bt,null))},Lt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},Ft=Object(p.a)({reducer:{mainMenuState:v,finishState:I,videoState:ve,workflowPostState:lt,workflowPostAndProcessState:Ct,abortState:ht}});o.a.render(Object(d.c)(i.a.StrictMode,null,Object(d.c)(f.a,{store:Ft},Object(d.c)(Ht,null))),document.getElementById("root")),Lt()}},[[72,1,2]]]);
//# sourceMappingURL=main.72b8d1ec.chunk.js.map