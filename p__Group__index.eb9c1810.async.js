"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[423],{48689:function(Q,Z,e){e.d(Z,{Z:function(){return l}});var P=e(1413),h=e(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},I=O,B=e(91146),M=function(E,g){return h.createElement(B.Z,(0,P.Z)((0,P.Z)({},E),{},{ref:g,icon:I}))};M.displayName="DeleteOutlined";var l=h.forwardRef(M)},52651:function(Q,Z,e){var P=e(15009),h=e.n(P),O=e(99289),I=e.n(O),B=e(5574),M=e.n(B),l=e(22594),R=e(98293),E=e(83062),g=e(67294),z=e(99512),C=e(85893),$=function(L){var H=L.email,V=(0,g.useState)([]),W=M()(V,2),K=W[0],F=W[1],G=function(){var r=I()(h()().mark(function S(T){var b;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.authApi.getUsersByEmail(T);case 2:b=n.sent,F(b);case 4:case"end":return n.stop()}},S)}));return function(T){return r.apply(this,arguments)}}();return(0,g.useEffect)(function(){G(H)},[]),K?(0,C.jsx)(R.C.Group,{maxCount:1,maxStyle:{color:"#fff",backgroundColor:"#7942fe"},children:K.map(function(r,S){return(0,C.jsx)(E.Z,{title:r.name,placement:"top",children:(0,C.jsx)(R.C,{style:{backgroundColor:"#87d068"},src:r.avatar||z.tU})},S)})}):(0,C.jsx)(C.Fragment,{})};Z.Z=$},27684:function(Q,Z,e){e.r(Z),e.d(Z,{default:function(){return S}});var P=e(15009),h=e.n(P),O=e(99289),I=e.n(O),B=e(5574),M=e.n(B),l=e(90930),R=e(27324),E=e(42075),g=e(17948),z=e(86738),C=e(71577),$=e(61621),U=e(35312),L=e(67294),H=e(22594),V=e(52651),W=e(99220),K=e(99512),F=e(33076),G=e(48689),r=e(85893);function S(){var T=(0,U.useModel)("project"),b=T.listProject,X=T.setListProject,n=T.removeProject,o=(0,U.useModel)("@@initialState"),d=o.initialState,t=d||{},a=t.currentUser,y=(0,L.useState)(""),f=M()(y,2),i=f[0],j=f[1],p=function(){return b.filter(function(s){return i===""||(s==null?void 0:s.name.includes(i))})};return(0,L.useEffect)(function(){var m=function(){var s=I()(h()().mark(function N(){var D;return h()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(a!=null&&a.email)){v.next=5;break}return v.next=3,H.Z.projectApi.getMyProjects(a==null?void 0:a.email);case 3:D=v.sent,X(D);case 5:case"end":return v.stop()}},N)}));return function(){return s.apply(this,arguments)}}();m()},[]),(0,r.jsx)(l._z,{pageHeaderRender:!1,children:(0,r.jsx)(R.Z,{headerBordered:!0,title:(0,r.jsx)("div",{children:"D\u1EF1 \xE1n c\u1EE7a t\xF4i"}),extra:(0,r.jsx)(W.Z,{type:"project-create"}),children:(0,r.jsxs)(E.Z,{direction:"vertical",style:{width:"100%"},children:[(0,r.jsx)(F.Z,{placeholder:"Nh\u1EADp c\xF4ng vi\u1EC7c b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm",allowClear:!0,onSearch:function(s){return j(s)},style:{width:304}}),(0,r.jsx)(g.Z,{itemLayout:"horizontal",pagination:{onChange:function(s){console.log(s)},pageSize:3},dataSource:p(),renderItem:function(s,N){return(0,r.jsx)(g.Z.Item,{extra:(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(V.Z,{email:s.members}),(0,r.jsx)(z.Z,{title:"Xo\xE1 c\xF4ng vi\u1EC7c",description:"B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xF4ng vi\u1EC7c n\xE0y ch\u1EE9",onConfirm:function(x){x==null||x.stopPropagation(),n(s.id)},okText:"X\xF3a",cancelText:"H\u1EE7y",children:(0,r.jsx)(C.ZP,{danger:!0,icon:(0,r.jsx)(G.Z,{}),onClick:function(x){x.stopPropagation()}})})]}),children:(0,r.jsx)(U.Link,{to:"/project/".concat(s.id),children:(0,r.jsx)(g.Z.Item.Meta,{avatar:(0,r.jsx)($.Z,{preview:!1,height:40,src:(s==null?void 0:s.avatar)||K.KY}),title:s.name,description:s==null?void 0:s.description})})})}})]})})})}},86738:function(Q,Z,e){e.d(Z,{Z:function(){return X}});var P=e(26702),h=e(94184),O=e.n(h),I=e(15105),B=e(21770),M=e(98423),l=e(67294),R=e(96159),E=e(53124),g=e(55241),z=e(86743),C=e(81643),$=e(71577),U=e(85432),L=e(10110),H=e(24457),V=e(60590),W=e(67968);const K=n=>{const{componentCls:o,iconCls:d,zIndexPopup:t,colorText:a,colorWarning:y,marginXXS:f,marginXS:i,fontSize:j,fontWeightStrong:p,colorTextHeading:m}=n;return{[o]:{zIndex:t,color:a,[`${o}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${o}-message-icon ${d}`]:{color:y,fontSize:j,lineHeight:1,marginInlineEnd:i},[`${o}-title`]:{fontWeight:p,color:m,"&:only-child":{fontWeight:"normal"}},[`${o}-description`]:{marginTop:f}},[`${o}-buttons`]:{textAlign:"end",button:{marginInlineStart:i}}}}};var F=(0,W.Z)("Popconfirm",n=>K(n),n=>{const{zIndexPopupBase:o}=n;return{zIndexPopup:o+60}}),G=function(n,o){var d={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(d[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(d[t[a]]=n[t[a]]);return d};const r=n=>{const{prefixCls:o,okButtonProps:d,cancelButtonProps:t,title:a,description:y,cancelText:f,okText:i,okType:j="primary",icon:p=l.createElement(P.Z,null),showCancel:m=!0,close:s,onConfirm:N,onCancel:D,onPopupClick:x}=n,{getPrefixCls:v}=l.useContext(E.E_),[A]=(0,L.Z)("Popconfirm",H.Z.Popconfirm),Y=(0,C.Z)(a),J=(0,C.Z)(y);return l.createElement("div",{className:`${o}-inner-content`,onClick:x},l.createElement("div",{className:`${o}-message`},p&&l.createElement("span",{className:`${o}-message-icon`},p),l.createElement("div",{className:`${o}-message-text`},Y&&l.createElement("div",{className:O()(`${o}-title`)},Y),J&&l.createElement("div",{className:`${o}-description`},J))),l.createElement("div",{className:`${o}-buttons`},m&&l.createElement($.ZP,Object.assign({onClick:D,size:"small"},t),f!=null?f:A==null?void 0:A.cancelText),l.createElement(z.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,U.n)(j)),d),actionFn:N,close:s,prefixCls:v("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},i!=null?i:A==null?void 0:A.okText)))};function S(n){const{prefixCls:o,placement:d,className:t,style:a}=n,y=G(n,["prefixCls","placement","className","style"]),{getPrefixCls:f}=l.useContext(E.E_),i=f("popconfirm",o),[j]=F(i);return j(l.createElement(V.ZP,{placement:d,className:O()(i,t),style:a,content:l.createElement(r,Object.assign({prefixCls:i},y))}))}var T=function(n,o){var d={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(d[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(d[t[a]]=n[t[a]]);return d};const b=l.forwardRef((n,o)=>{const{prefixCls:d,placement:t="top",trigger:a="click",okType:y="primary",icon:f=l.createElement(P.Z,null),children:i,overlayClassName:j,onOpenChange:p,onVisibleChange:m}=n,s=T(n,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:N}=l.useContext(E.E_),[D,x]=(0,B.Z)(!1,{value:n.open,defaultValue:n.defaultOpen}),v=(c,u)=>{x(c,!0),m==null||m(c),p==null||p(c,u)},A=c=>{v(!1,c)},Y=c=>{var u;return(u=n.onConfirm)===null||u===void 0?void 0:u.call(void 0,c)},J=c=>{var u;v(!1,c),(u=n.onCancel)===null||u===void 0||u.call(void 0,c)},w=c=>{c.keyCode===I.Z.ESC&&D&&v(!1,c)},q=c=>{const{disabled:u=!1}=n;u||v(c)},k=N("popconfirm",d),ee=O()(k,j),[ne]=F(k);return ne(l.createElement(g.Z,Object.assign({},(0,M.Z)(s,["title"]),{trigger:a,placement:t,onOpenChange:q,open:D,ref:o,overlayClassName:ee,content:l.createElement(r,Object.assign({okType:y,icon:f},n,{prefixCls:k,close:A,onConfirm:Y,onCancel:J})),"data-popover-inject":!0}),(0,R.Tm)(i,{onKeyDown:c=>{var u,_;l.isValidElement(i)&&((_=i==null?void 0:(u=i.props).onKeyDown)===null||_===void 0||_.call(u,c)),w(c)}})))});b._InternalPanelDoNotUseOrYouWillBeFired=S;var X=b}}]);
