"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[773],{81721:function(la,E,e){e.r(E),e.d(E,{default:function(){return _}});var R=e(15009),P=e.n(R),G=e(99289),H=e.n(G),X=e(5574),C=e.n(X),D=e(84427),Y=e(69877),z=e(48689),I=e(90930),c=e(27324),$=e(71230),v=e(15746),J=e(86738),Q=e(71577),o=e(42075),U=e(61621),V=e(47221),W=e(54074),u=e(35312),x=e(67294),b=e(70461),m=e(99512),S=e(99220),A=e(22594),w=e(33076),a=e(85893),f=function(i){var d,h,t=i.task,g=(0,u.useModel)("listTask"),j=g.removeTask;return(0,a.jsx)(b.Z,{task:t,children:(0,a.jsxs)($.Z,{gutter:[16,16],align:"middle",className:"task",children:[(0,a.jsx)(v.Z,{span:11,children:t==null?void 0:t.name}),(0,a.jsxs)(v.Z,{span:6,children:[(0,a.jsx)(D.Z,{content:(d=m.jY[t.priority-1])===null||d===void 0?void 0:d.label}),(0,a.jsx)(D.Z,{content:(h=m.mS[t.type-1])===null||h===void 0?void 0:h.label})]}),(0,a.jsxs)(v.Z,{span:5,children:[" Deadline:",t==null?void 0:t.endTime]}),(0,a.jsxs)(v.Z,{span:2,className:"d-flex justify-center align-center",children:[" ",(0,a.jsx)(J.Z,{title:"Xo\xE1 c\xF4ng vi\u1EC7c",description:"B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xF4ng vi\u1EC7c n\xE0y ch\u1EE9",onConfirm:function(l){l==null||l.stopPropagation(),j(t.id)},okText:"X\xF3a",cancelText:"H\u1EE7y",children:(0,a.jsx)(Q.ZP,{danger:!0,icon:(0,a.jsx)(z.Z,{}),onClick:function(l){l.stopPropagation()}})})]})]})})},q=function(){var i=(0,u.useModel)("listTask"),d=i.listTask,h=i.removeTask,t=i.setListTask,g=(0,x.useState)(),j=C()(g,2),s=j[0],l=j[1],M=(0,u.useModel)("project"),ea=M.listProject,ra=M.addMember,ta=(0,x.useState)(""),F=C()(ta,2),k=F[0],sa=F[1],N=[],B=[],L=[];d.forEach(function(n){console.log(n),(k===""||n.name.includes(k))&&(n.status===1?N.push((0,a.jsx)(f,{task:n})):n.status===2?B.push((0,a.jsx)(f,{task:n})):L.push((0,a.jsx)(f,{task:n})))});var O=(0,u.useParams)();(0,x.useEffect)(function(){var n=function(){var Z=H()(P()().mark(function K(T){var p,y;return P()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.Z.projectApi.get(T);case 2:return p=r.sent,r.next=5,A.Z.taskApi.getByProject(T);case 5:y=r.sent,console.log("project detail",p),console.log("project detail",y),t(y),l(p);case 10:case"end":return r.stop()}},K)}));return function(T){return Z.apply(this,arguments)}}();n(O.id)},[ea]),console.log("memberr",s==null?void 0:s.members);var na=[{key:"1",label:"Ch\u01B0a th\u1EF1c hi\u1EC7n",children:(0,a.jsx)(o.Z,{className:"list-task",direction:"vertical",children:N})},{key:"2",label:"\u0110ang th\u1EF1c hi\u1EC7n",children:(0,a.jsx)(o.Z,{className:"list-task",direction:"vertical",children:B})},{key:"3",label:"\u0110\xE3 ho\xE0n th\xE0nh",children:(0,a.jsx)(o.Z,{className:"list-task",direction:"vertical",children:L})}];return(0,a.jsx)(I._z,{pageHeaderRender:!1,children:(0,a.jsxs)(c.Z,{title:(0,a.jsxs)("div",{children:[(0,a.jsx)(U.Z,{preview:!1,height:40,width:40,src:(s==null?void 0:s.avatar)||m.KY}),(0,a.jsx)("span",{className:"ml-16",children:s==null?void 0:s.name})]}),extra:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(S.Z,{type:"add-member"}),(0,a.jsx)(S.Z,{type:"task-create",projectId:O.id})]}),tabs:{type:"line"},children:[(0,a.jsx)(c.Z.TabPane,{tab:"Danh s\xE1ch",children:(0,a.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,a.jsx)(w.Z,{placeholder:"Nh\u1EADp c\xF4ng vi\u1EC7c b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm",allowClear:!0,onSearch:function(Z){return sa(Z)},style:{width:304}}),(0,a.jsx)(V.Z,{items:na,defaultActiveKey:["1"]})]})},"list"),(0,a.jsx)(c.Z.TabPane,{tab:"B\u1EA3ng",children:(0,a.jsx)(Y.Z,{})},"board"),(0,a.jsx)(c.Z.TabPane,{tab:"L\u1ECBch",children:(0,a.jsx)(W.Z,{})},"calendar")]})})},_=q}}]);
