"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[437],{69877:function(xn,J,n){n.d(J,{Z:function(){return W}});var H=n(9783),y=n.n(H),I=n(97857),o=n.n(I),L=n(5574),T=n.n(L),E=n(67294),Q=n(44381),O=n(27324),Z=n(42075),M=n(34041),k=n(71230),A=n(15746),Y=n(51904),$=n(98293),S=n(86738),K=n(71577),U=n(84427),b=n(48689),tn=n(35312),B=n(99512),P=n(33076),f=n(70461),a=n(85893),w=function(m,h,d){var x=Array.from(m),t=x.splice(h,1),r=_slicedToArray(t,1),c=r[0];return x.splice(d,0,c),x},an=function(m,h,d,x){var t=Array.from(m),r=Array.from(h),c=t.splice(d.index,1),F=_slicedToArray(c,1),j=F[0];r.splice(x.index,0,j);var N={};return N[d.droppableId]=t,N[x.droppableId]=r,N},C=8,e=function(m,h){return o()({userSelect:"none",padding:C*2,margin:"0 0 ".concat(C,"px 0"),background:"white"},h)},v=function(m){return{padding:C,width:"100%"}},R=function(){var m=(0,E.useState)({todo:[],doing:[],done:[]}),h=T()(m,2),d=h[0],x=h[1],t=(0,tn.useModel)("listTask"),r=t.listTask,c=t.editTask,F=t.removeTask,j=(0,E.useState)(""),N=T()(j,2),q=N[0],vn=N[1],ln=(0,E.useState)(!1),sn=T()(ln,2),rn=sn[0],on=sn[1],dn=[{title:"Ch\u01B0a th\u1EF1c hi\u1EC7n",key:"todo",color:"#FFFDF1"},{title:"\u0110ang th\u1EF1c hi\u1EC7n",key:"doing",color:"#FFF1F1"},{title:"\u0110\xE3 ho\xE0n th\xE0nh",key:"done",color:"#F5FFF1"}];(0,E.useEffect)(function(){var g=[],l=[],i=[];r.sort(function(u,p){return rn?p.priority-u.priority:u.priority-p.priority}),r.forEach(function(u){(q===""||u.name.includes(q))&&(u.status===1?g.push(u):u.status===2?l.push(u):i.push(u))}),x({todo:g,doing:l,done:i})},[r,q,rn]);function cn(g){var l=g.source,i=g.destination;if(i){var u=l.droppableId,p=i.droppableId;if(u===p){var V=d[u],s=V.splice(l.index,1),hn=T()(s,1),fn=hn[0];V.splice(i.index,0,fn),x(o()(o()({},d),{},y()({},u,V)))}else{var D,un=d[u],X=d[p],_=un.splice(l.index,1),nn=T()(_,1),G=nn[0];X.splice(i.index,0,G),c(o()(o()({},G),{},{status:p==="todo"?1:p==="doing"?2:3})),x(o()(o()({},d),{},(D={},y()(D,u,un),y()(D,p,X),D)))}}}return(0,a.jsxs)(Z.Z,{direction:"vertical",style:{width:"100%"},children:[(0,a.jsxs)(Z.Z,{children:[(0,a.jsx)(P.Z,{placeholder:"Nh\u1EADp c\xF4ng vi\u1EC7c b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm",allowClear:!0,onSearch:function(l){return vn(l)},style:{width:304}}),(0,a.jsx)(M.Z,{placeholder:"S\u1EAFp x\u1EBFp theo \u0111\u1ED9 \u01B0u ti\xEAn",allowClear:!0,style:{width:200},onChange:function(l){console.log(l),on(l)},options:[{value:!0,label:"Cao xu\u1ED1ng th\u1EA5p"},{value:!1,label:"Th\u1EA5p l\xEAn th\u1EA5p"}]})]}),(0,a.jsx)(Q.Z5,{onDragEnd:cn,children:(0,a.jsx)(k.Z,{gutter:[16,16],children:dn.map(function(g,l){var i=d[g.key];return(0,a.jsx)(A.Z,{span:8,children:(0,a.jsx)(Q.bK,{droppableId:"".concat(g.key),className:"d-flex",children:function(p,V){return(0,E.createElement)(O.Z,o()(o()({title:(0,a.jsxs)("div",{children:["".concat(g.title," ")," ",(0,a.jsx)(Y.Z,{color:"purple",children:i.length})]}),bodyStyle:{padding:0,minHeight:"500px",overflowY:"auto",maxHeight:"500px"},headStyle:{padding:0,marginBottom:4},ref:p.innerRef,style:o()(o()({},v(V.isDraggingOver)),{},{backgroundColor:"".concat(g.color),borderRadius:"12px"})},p.droppableProps),{},{key:l}),i.map(function(s,hn){return(0,a.jsx)(Q._l,{draggableId:s.id,index:hn,children:function(D,un){var X,_,nn;return(0,a.jsx)(f.Z,{task:s,children:(0,E.createElement)(O.Z,o()(o()(o()({ref:D.innerRef},D.draggableProps),D.dragHandleProps),{},{style:o()(o()({},e(un.isDragging,D.draggableProps.style)),{},{backgroundColor:"#EFE9FF",borderRadius:"12px"}),bodyStyle:{padding:0},key:s.id}),(0,a.jsxs)(Z.Z,{direction:"vertical",style:{width:"100%"},children:[(0,a.jsx)("h4",{children:s.name}),(0,a.jsx)("span",{children:s==null?void 0:s.description}),(0,a.jsxs)("div",{children:[(0,a.jsx)(U.Z,{content:(X=B.jY[s.priority-1])===null||X===void 0?void 0:X.label}),s==null||(_=s.tags)===null||_===void 0?void 0:_.map(function(G){return(0,a.jsx)(U.Z,{content:G})}),(0,a.jsx)(U.Z,{content:(nn=B.mS[s.type-1])===null||nn===void 0?void 0:nn.label})]}),(0,a.jsxs)("div",{className:"d-flex justify-between",children:[(0,a.jsxs)(Z.Z,{children:[(0,a.jsx)($.C,{src:s.assignee.avatar||B.tU,size:24}),"Deadline: ",s.endTime.replaceAll("-","/").split(" ")[0]]}),(0,a.jsx)(S.Z,{title:"Xo\xE1 c\xF4ng vi\u1EC7c",description:"B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xF4ng vi\u1EC7c n\xE0y ch\u1EE9",onConfirm:function(en){en==null||en.stopPropagation(),F(s.id)},okText:"X\xF3a",cancelText:"H\u1EE7y",children:(0,a.jsx)(K.ZP,{size:"small",onClick:function(en){return en.stopPropagation()},danger:!0,icon:(0,a.jsx)(b.Z,{}),style:{borderRadius:"8px"},children:"X\xF3a"})})]})]}))})}},s.id)}),p.placeholder)}},l)})})})})]})},W=R},54074:function(xn,J,n){n.d(J,{Z:function(){return an}});var H=n(714),y=n(366),I=n(62857),o=n(62323),L=n(49574),T=n(16644),E=n(36262),Q=n(59894),O=n(24138),Z=n(67294),M=n(86074),k=n(12444),A=n.n(k),Y=n(72004),$=n.n(Y),S=n(31996),K=n.n(S),U=n(26037),b=n.n(U);(0,M.dW)(!0);var tn=function(C){K()(v,C);var e=b()(v);function v(){return A()(this,v),e.apply(this,arguments)}return $()(v,[{key:"rendereComplete",value:function(){}},{key:"componentDidMount",value:function(){var W=this;setTimeout(function(){W.rendereComplete()})}}]),v}(Z.PureComponent);function B(){}var P=n(35312),f=n(85893);(0,M.GG)("Mgo+DSMBaFt9QHFqVkJrW05Gc0BAXWFKblF8RWBTellgBShNYlxTR3ZZQFhjS3tXckBmXnxb;Mgo+DSMBPh8sVXJ2S0d+X1VPcUBAWHxLflF1VWFTf116cVJWESFaRnZdQV1lS3tTdEBnXXpbeHxQ;ORg4AjUWIQA/Gnt2V1hhQlJAfVhdX2ZWfFN0RnNbdV5zflBBcC0sT3RfQF5jT3xWdkdmXXtbdnRWQw==;MjUwNzEzM0AzMjMyMmUzMDJlMzBGbEE4ckk1ZDE0TlhhRTJYQldjbDRkN1M5VU9mQVJMcUZMdHpBMGxlWlpVPQ==;MjUwNzEzNEAzMjMyMmUzMDJlMzBuQVlCWlp5ekxvWHdlMWpYcUlJcHBMVVdmelRkT2NMa2ZJanBsUnJjdThZPQ==;NRAiBiAaIQQuGjN/V0R+XU9HclRFQmFMYVF2R2BJfVRwd19DZ0wgOX1dQl9gSXhRc0VhXHtadXJTQ2U=;MjUwNzEzNkAzMjMyMmUzMDJlMzBRMm9LSW1xSmpWdE9NNStta2lZbzA0OGFualFWcGYrWEF1M0JnZjlsQlhJPQ==;MjUwNzEzN0AzMjMyMmUzMDJlMzBOTE5uY3ZrMnJpdDdBTmxwdG5WNFZhc3FxSnc0d1ZNZndLNmJOT0I5STZNPQ==;Mgo+DSMBMAY9C3t2V1hhQlJAfVhdX2ZWfFN0RnNbdV5zflBBcC0sT3RfQF5jT3xWdkdmXXtbd3ZSQw==;MjUwNzEzOUAzMjMyMmUzMDJlMzBHOHZOZE9nWmxOR25VOVdBcWppMHAvVjNuMnJoSDdydzNEQ1dQaGRIL0hZPQ==;MjUwNzE0MEAzMjMyMmUzMDJlMzBJbDEzRTRGd2dNNUZxQkpUUER2NzNDN0psMkRyQ0k3ZU1DS01sam1jRlBBPQ==;MjUwNzE0MUAzMjMyMmUzMDJlMzBRMm9LSW1xSmpWdE9NNStta2lZbzA0OGFualFWcGYrWEF1M0JnZjlsQlhJPQ==");var a=function(e,v){switch(e){case 1:return v===3?"#16a34a80":"#16a34a";case 2:return v===3?"#f2bd2782":"#F2BD27";case 3:return v===3?"#ed393996":"#ED3939"}},w=function(){var e=(0,P.useModel)("listTask"),v=e.listTask;(0,Z.useEffect)(function(){},[v]);var R=(0,Z.useRef)(null),W=new M.eC,z=(0,M.l7)([],v.map(function(t){return{id:t.id,Subject:t.name,StartTime:t.startTime,EndTime:t.endTime,CategoryColor:a(t.priority,t.status),test:t}}),null,!0),m=function(r){return W.formatDate(r,{skeleton:"hm"})},h=function(r){return(0,f.jsx)("div",{className:"template-wrap",children:(0,f.jsx)("div",{className:"subject",children:r.Subject})})},d=function(r){var c=r.data.CategoryColor;!r.element||!c||(R.current.currentView==="Agenda"?r.element.firstChild.style.borderLeftColor=c:r.element.style.backgroundColor=c)},x=function(r){console.log("onPopupOpen",r),r.type==="QuickInfo"&&(r.cancel=!0)};return(0,f.jsx)("div",{className:"schedule-control-section",children:(0,f.jsx)("div",{className:"col-lg-12 control-section",children:(0,f.jsx)("div",{className:"control-wrapper",children:(0,f.jsxs)(H.i,{width:"100%",height:"650px",selectedDate:new Date,ref:R,eventSettings:{dataSource:z,eventTemplate:h},eventRendered:d,popupOpen:x,children:[(0,f.jsxs)(y.S,{children:[(0,f.jsx)(y.R,{option:"Month",displayName:"Th\xE1ng"}),(0,f.jsx)(y.R,{option:"Week",displayName:"Tu\u1EA7n"}),(0,f.jsx)(y.R,{option:"Day",displayName:"Ng\xE0y"}),(0,f.jsx)(y.R,{option:"TimelineDay",displayName:"Timeline"}),(0,f.jsx)(y.R,{option:"Agenda"})]}),(0,f.jsx)(I.tB,{services:[o.J,L.H,T.U,E.D,Q.m,O.B]})]})})})})},an=w},12262:function(xn,J,n){n.r(J),n.d(J,{default:function(){return W}});var H=n(15009),y=n.n(H),I=n(99289),o=n.n(I),L=n(5574),T=n.n(L),E=n(84427),Q=n(69877),O=n(48689),Z=n(90930),M=n(27324),k=n(71230),A=n(15746),Y=n(86738),$=n(71577),S=n(42075),K=n(98293),U=n(34041),b=n(47221),tn=n(54074),B=n(35312),P=n(67294),f=n(70461),a=n(99512),w=n(99220),an=n(22594),C=n(33076),e=n(85893),v=function(m){var h,d,x,t=m.task,r=(0,B.useModel)("listTask"),c=r.removeTask;return(0,e.jsx)(f.Z,{task:t,children:(0,e.jsxs)(k.Z,{gutter:[16,16],align:"middle",className:"task",children:[(0,e.jsx)(A.Z,{span:11,children:t==null?void 0:t.name}),(0,e.jsxs)(A.Z,{span:6,children:[t==null||(h=t.tags)===null||h===void 0?void 0:h.map(function(F,j){return(0,e.jsx)(E.Z,{content:F},j)}),(0,e.jsx)(E.Z,{content:(d=a.jY[t.priority-1])===null||d===void 0?void 0:d.label}),(0,e.jsx)(E.Z,{content:(x=a.mS[t.type-1])===null||x===void 0?void 0:x.label})]}),(0,e.jsxs)(A.Z,{span:5,children:["Deadline: ",t==null?void 0:t.endTime.replaceAll("-","/").split(" ")[0]]}),(0,e.jsxs)(A.Z,{span:2,className:"d-flex justify-center align-center",children:[" ",(0,e.jsx)(Y.Z,{title:"Xo\xE1 c\xF4ng vi\u1EC7c",description:"B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xF4ng vi\u1EC7c n\xE0y ch\u1EE9",onConfirm:function(j){j==null||j.stopPropagation(),c(t.id)},okText:"X\xF3a",cancelText:"H\u1EE7y",children:(0,e.jsx)($.ZP,{danger:!0,icon:(0,e.jsx)(O.Z,{}),onClick:function(j){j.stopPropagation()}})})]})]})})},R=function(){var m=(0,B.useModel)("listTask"),h=m.listTask,d=m.setListTask,x=(0,B.useModel)("@@initialState"),t=x.initialState,r=t||{},c=r.currentUser,F=(0,P.useState)(""),j=T()(F,2),N=j[0],q=j[1],vn=(0,P.useState)(!1),ln=T()(vn,2),sn=ln[0],rn=ln[1];(0,P.useEffect)(function(){var l=function(){var i=o()(y()().mark(function u(){var p;return y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(c!=null&&c.email){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,an.Z.taskApi.getMyTasks(c.email);case 4:p=s.sent,p&&d(p);case 6:case"end":return s.stop()}},u)}));return function(){return i.apply(this,arguments)}}();l()},[]);var on=[],dn=[],cn=[];h.sort(function(l,i){return sn?i.priority-l.priority:l.priority-i.priority}),h.forEach(function(l){console.log(l),(N===""||l.name.includes(N))&&(l.status===1?on.push((0,e.jsx)(v,{task:l})):l.status===2?dn.push((0,e.jsx)(v,{task:l})):cn.push((0,e.jsx)(v,{task:l})))}),console.log("listTask",h);var g=[{key:"1",label:"Ch\u01B0a th\u1EF1c hi\u1EC7n",children:(0,e.jsx)(S.Z,{className:"list-task",direction:"vertical",children:on})},{key:"2",label:"\u0110ang th\u1EF1c hi\u1EC7n",children:(0,e.jsx)(S.Z,{className:"list-task",direction:"vertical",children:dn})},{key:"3",label:"\u0110\xE3 ho\xE0n th\xE0nh",children:(0,e.jsx)(S.Z,{className:"list-task",direction:"vertical",children:cn})}];return(0,e.jsx)(Z._z,{pageHeaderRender:!1,children:(0,e.jsxs)(M.Z,{title:(0,e.jsxs)("div",{children:[(0,e.jsx)(K.C,{src:(c==null?void 0:c.avatar)||a.tU}),(0,e.jsx)("span",{className:"ml-16",children:"Nhi\u1EC7m v\u1EE5 c\u1EE7a t\xF4i"})]}),extra:(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(w.Z,{type:"task-create"}),(0,e.jsx)(w.Z,{type:"share"})]}),tabs:{type:"line"},children:[(0,e.jsx)(M.Z.TabPane,{tab:"Danh s\xE1ch",children:(0,e.jsxs)(S.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(C.Z,{placeholder:"Nh\u1EADp c\xF4ng vi\u1EC7c b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm",allowClear:!0,onSearch:function(i){return q(i)},style:{width:304}}),(0,e.jsx)(U.Z,{placeholder:"S\u1EAFp x\u1EBFp theo \u0111\u1ED9 \u01B0u ti\xEAn",allowClear:!0,style:{width:200},onChange:function(i){console.log(i),rn(i)},options:[{value:!0,label:"Cao xu\u1ED1ng th\u1EA5p"},{value:!1,label:"Th\u1EA5p l\xEAn th\u1EA5p"}]})]}),(0,e.jsx)(b.Z,{items:g,defaultActiveKey:["1"]})]})},"list"),(0,e.jsx)(M.Z.TabPane,{tab:"B\u1EA3ng",children:(0,e.jsx)(Q.Z,{})},"board"),(0,e.jsx)(M.Z.TabPane,{tab:"L\u1ECBch",children:(0,e.jsx)(tn.Z,{})},"calendar")]})})},W=R}}]);
