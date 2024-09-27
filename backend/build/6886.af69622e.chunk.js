(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6886],{94445:N=>{function H(u,s,y,f){for(var j=-1,D=u==null?0:u.length;++j<D;){var b=u[j];s(f,b,y(b),u)}return f}N.exports=H},7233:(N,H,u)=>{var s=u(97449);function y(f,j,D,b){return s(f,function(R,$,K){j(b,R,D(R),K)}),b}N.exports=y},88532:(N,H,u)=>{var s=u(94445),y=u(7233),f=u(45353),j=u(82261);function D(b,R){return function($,K){var le=j($)?s:y,de=R?R():{};return le($,b,f(K,2),de)}}N.exports=D},94710:(N,H,u)=>{var s=u(95292),y=u(88532),f=Object.prototype,j=f.hasOwnProperty,D=y(function(b,R,$){j.call(b,$)?b[$].push(R):s(b,$,[R])});N.exports=D},96886:(N,H,u)=>{"use strict";u.d(H,{P:()=>Rs});var s=u(92132),y=u(21272),f=u(83997),j=u(94061),D=u(50215),b=u(30893),R=u(85963),$=u(61485),K=u(99248),le=u(6239),de=u(67030),Ne=u(76079),Ve=u(57237),we=u(60888),He=u(44604),fe=u(4181),Fe=u(90151),Ge=u(68074),Xe=u(12081),xe=u(12408),z=u(24093),_e=u(2291),ye=u(88761),ce=u(51187),M=u(2600),ne=u(412),Q=u(77965),V=u(48940),k=u(54894),F=u(6759),Je=u(95267),Ye=u(59080),ue=u(94710),je=u(35223),S=u(63891),Ze=u(9005),ze=u(20415),Qe=u(74312),qe=u(44895),es=u(37679),ss=u(60043),ts=u(39404);const[ns,os]=(0,Je.q)("PermissionsDataManager"),Y=()=>os("usePermissionsDataManager"),Oe=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Oe(o)):t.push(o),t),[]):[],X=e=>(0,F.F)(e)?Oe(Object.values(e).map(t=>(0,F.F)(t)?X(t):t)):[],Ae=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Ee(e.plugins),o=Ee(e.settings),n=be(e.collectionTypes),r=be(e.singleTypes);return[...t,...o,...n,...r]},Ee=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:c,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:pe(c),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),be=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[c,p]=l;if(!X(p).some(m=>m))return i;if(!p?.properties?.enabled){const m=Object.entries(p.properties).reduce((x,_)=>{const[h,C]=_;return x.properties[h]=Me(C),x},{action:c,subject:r,conditions:pe(p.conditions),properties:{}});return[...i,m]}return p.properties.enabled&&i.push({action:c,subject:r,properties:{},conditions:pe(p.conditions)}),i},[]);return[...o,...d]},[]),Me=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,F.F)(a)?[...o,...Me(a,`${t}${r}.`)]:(a&&!(0,F.F)(a)&&o.push(`${t}${r}`),o)},[]),pe=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Pe=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),ve=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((c,p)=>{const g=Ae(o,p.action,null);return c[p.action]={properties:{enabled:g!==void 0},conditions:Pe(t,g?.conditions??[])},c},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const c=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=c,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Te=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,c)=>{const p=e.find(({uid:g})=>g===c)||null;return p&&(l[c]=p),l},{});if(Q(d))return r;const i=Object.keys(d).reduce((l,c)=>{const{actionId:p,applyToProperties:g}=a,_=d[c].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=Ae(n,p,c),C=Pe(o,h?.conditions??[]);if(l[c]||(l[c]={}),Q(g)||_)return l[c][p]={properties:{enabled:h!==void 0},conditions:C},l;const O=rs(g,d[c],h);return l[c][p]={...O,conditions:C},l},{});return Ye(r,i)},{}),Se=(e,t)=>Object.entries(ue(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(ue(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),oe=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,F.F)(n)&&!ne(n,"conditions"))return{...t,[o]:oe(n)};if((0,F.F)(n)&&ne(n,"conditions")&&!X(je(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),q=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,F.F)(a)?{...n,[r]:q(a,t,r==="fields")}:(n[r]=t,n)},{}),w=`${120/16}rem`,he=`${200/16}rem`,ie=`${53/16}rem`,ge=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,J=e=>{const t=ge(e),o=X(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},re=e=>e.charAt(0).toUpperCase()+e.slice(1),De=(0,S.Ay)(f.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,me=S.Ay.div`
  width: ${w};
`,$e=()=>(0,s.jsx)(j.a,{color:"danger700",paddingLeft:1,children:"*"}),Le=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:c})=>{const{formatMessage:p}=(0,k.A)();return(0,s.jsxs)(f.s,{alignItems:"center",paddingLeft:6,width:he,shrink:0,children:[(0,s.jsx)(j.a,{paddingRight:2,children:(0,s.jsx)(D.J,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:c})}),(0,s.jsxs)(De,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(b.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:re(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,y.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(f.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(Cs,{label:n,headers:d}),(0,s.jsx)(j.a,{children:t.map(({children:i,label:l,value:c,required:p},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:c,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},c))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:c}=(0,k.A)(),[p,g]=y.useState(null),{modifiedData:m,onChangeCollectionTypeLeftActionRowCheckbox:x,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=Y(),C=p===n,O=(0,y.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=O.length>0,L=y.useCallback(()=>{P&&g(v=>v===n?null:n)},[P,n]),A=({target:{value:v}})=>{x(a,i,n,v)},{hasAllActionsSelected:E,hasSomeActionsSelected:T}=(0,y.useMemo)(()=>ds(d,m,a,i,n),[d,m,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:P,isActive:C,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(f.s,{children:[(0,s.jsxs)(Le,{onChange:A,onClick:L,isCollapsable:P,isFormDisabled:o,label:t,someChecked:T,value:E,isActive:C,children:[r&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:C})]}),(0,s.jsx)(f.s,{children:d.map(({label:v,isActionRelatedToCurrentProperty:I,actionId:W})=>{if(!I)return(0,s.jsx)(me,{},v);const B=[...a.split(".."),W,"properties",i,n];if(!P){const U=M(m,B,!1);return(0,s.jsx)(f.s,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:o,name:B.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),onValueChange:Ks=>{h({target:{name:B.join(".."),value:Ks}})},value:U})},W)}const Z=M(m,B,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:te}=J(Z);return(0,s.jsx)(f.s,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:o,name:B.join(".."),onValueChange:U=>{_({target:{name:B.join(".."),value:U}})},"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),value:G,indeterminate:te})},v)})})]})}),C&&(0,s.jsx)(Be,{childrenForm:O,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const c=M(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=c,i},{});return J(d)},cs=(0,S.Ay)(f.s)`
  height: ${ie};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,ee=(0,S.Ay)(Ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Be=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,k.A)(),{modifiedData:l,onChangeParentCheckbox:c,onChangeSimpleCheckbox:p}=Y(),[g,m]=y.useState(null),x=h=>{m(C=>C===h?null:h)},_=(0,y.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(j.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:C,required:O,children:P},L)=>{const A=L+1<e.length,E=Array.isArray(P),T=g===C;return(0,s.jsxs)(us,{isVisible:A,children:[(0,s.jsxs)(f.s,{height:ie,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(f.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:T,isCollapsable:E,children:(0,s.jsxs)(De,{alignItems:"center",isCollapsable:E,...E&&{onClick:()=>x(C),"aria-expanded":T,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&x(C),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(b.o,{ellipsis:!0,children:re(h)}),O&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:T})]})}),(0,s.jsx)(f.s,{style:{flex:1},children:r.map(({actionId:v,label:I,isActionRelatedToCurrentProperty:W})=>{if(!W)return(0,s.jsx)(me,{},v);const B=[...n.split(".."),v,"properties",d,...a.split(".."),C],Z=M(l,B,!1);if(!P)return(0,s.jsx)(f.s,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:t,name:B.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:U=>{p({target:{name:B.join(".."),value:U}})},value:Z})},I);const{hasAllActionsSelected:G,hasSomeActionsSelected:te}=J(Z);return(0,s.jsx)(f.s,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:t,name:B.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:U=>{c({target:{name:B.join(".."),value:U}})},value:G,indeterminate:te},I)},I)})})]})]}),_&&T&&(0,s.jsx)(j.a,{paddingBottom:2,children:(0,s.jsx)(Be,{isFormDisabled:t,parentName:`${a}..${C}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},C)})]})},us=(0,S.Ay)(j.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,S.Ay)(f.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,hs=S.Ay.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,S.Ay)(j.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=S.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,Cs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,k.A)();return(0,s.jsxs)(f.s,{children:[(0,s.jsx)(f.s,{width:he,height:ie,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(f.s,{width:w,shrink:0,justifyContent:"center",children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(f.s,{width:w,shrink:0},n.label))]})},se=e=>(0,S.AH)`
  ${b.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ee} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,fs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,k.A)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)(R.$,{variant:n,startIcon:(0,s.jsx)(ze.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,S.Ay)(j.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ae=(0,S.Ay)(fs)``,Re=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,k.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=Y(),c=y.useMemo(()=>Object.entries(ue(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:C,hasAllActionsSelected:O})=>h&&Boolean(C||O)),[g,m]=y.useState(_s(p,i,c)),x=(h,C)=>{m((0,ye.Ay)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=C}))},_=()=>{const h=Object.entries(g).reduce((C,O)=>{const[P,L]=O,A=Object.values(L).reduce((E,T)=>({...E,...T}),{});return C[P]=A,C},{});l(h),r()};return(0,s.jsxs)($.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(K.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,C,O)=>(0,s.jsx)(ss.m,{isCurrent:C===O.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(le.c,{children:[p.length===0&&(0,s.jsx)(b.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:C,pathToConditionsObject:O},P)=>{const L=O.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:c,label:C,isFormDisabled:o,isGrey:P%2===0,name:L,onChange:x,value:M(g,L,{})},h)})})]}),(0,s.jsx)(de.j,{startActions:(0,s.jsx)(R.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(R.$,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=M(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[c,p]=l,g=p.reduce((m,x)=>(m[x.id]=M(a,x.id,!1),m),{});return i[c]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,k.A)(),l=c=>{a&&a(r,As(e,c))};return(0,s.jsxs)(f.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(f.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(b.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(j.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ne.B,{id:r,customizeContent:(c=[])=>`${c.length} currently selected`,onChange:l,value:js(d),options:Os(e),disabled:t})})]})},js=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:re(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),As=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Es=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=y.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:c},p)=>{const g=r===i,m=e.map(x=>({...x,isDisplayed:Array.isArray(x.subjects)&&x.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(f.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:m,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&c.map(({label:x,value:_,children:h})=>(0,s.jsx)(as,{availableActions:m,childrenForm:h,isFormDisabled:t,label:x,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=y.useState(!1),{formatMessage:c}=(0,k.A)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:m}=Y(),x=()=>{l(E=>!E)},_=()=>{l(!1)},h=M(p,d.split(".."),{}),C=y.useMemo(()=>Object.keys(h).reduce((E,T)=>(E[T]=je(h[T],"conditions"),E),{}),[h]),{hasAllActionsSelected:O,hasSomeActionsSelected:P}=J(C),L=y.useMemo(()=>Ms(e,p,d),[e,p,d]),A=L.some(E=>E.hasConditions);return(0,s.jsxs)(Ps,{isActive:t,children:[(0,s.jsxs)(Ie,{height:ie,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Le,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:O,isActive:t,children:(0,s.jsx)(We,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(qe.A,{})})}),(0,s.jsx)(f.s,{style:{flex:1},children:L.map(({actionId:E,hasSomeActionsSelected:T,isDisplayed:v,...I})=>{if(!v)return(0,s.jsx)(me,{},E);const{hasConditions:W,hasAllActionsSelected:B,isParentCheckbox:Z,checkboxName:G,label:te}=I;return Z?(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.J,{disabled:n,name:G,"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${te} ${r}`}),onValueChange:U=>{g({target:{name:G,value:U}})},indeterminate:T,value:B})]},E):(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.J,{disabled:n,indeterminate:W,name:G,onValueChange:U=>{m({target:{name:G,value:U}})},value:B})]},E)})}),i&&(0,s.jsx)(Re,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:L,isFormDisabled:n,onClosed:_,onToggle:x})]}),(0,s.jsx)(j.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ae,{onClick:x,hasConditions:A})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=Q(a)?[...i,"properties","enabled"]:i,c=M(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:X(c).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(Q(a)){const _=M(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=M(t,l,null),{hasAllActionsSelected:m,hasSomeActionsSelected:x}=J(g);return{...p,hasAllActionsSelected:m,hasSomeActionsSelected:x,isParentCheckbox:!0}}),Ce=(e,t)=>`
  ${Ie} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${We} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
    ${se(e)}
  }

  &:focus-within {
    ${()=>Ce(e,t)}
  }
`,Ie=(0,S.Ay)(f.s)`
  border: 1px solid transparent;
`,Ps=S.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&Ce(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>Ce(e,t)}
  }
`,ke=(0,S.Ay)(f.s)`
  width: ${w};
  position: relative;
`,We=(0,S.Ay)(j.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,vs=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,k.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),d=e.filter(({subjects:l})=>l&&l.length),i=y.useMemo(()=>{const l=d.map(({actionId:m})=>m),c=r[o],p=l.reduce((m,x)=>(Object.keys(c).forEach(_=>{const h=M(c,[_,x]),C={[_]:ge(h)};m[x]?m[x]={...m[x],...C}:m[x]=C}),m),{});return Object.keys(p).reduce((m,x)=>(m[x]=J(p[x]),m),{})},[r,d,o]);return(0,s.jsx)(j.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:he},children:(0,s.jsx)(f.s,{gap:0,children:d.map(({label:l,actionId:c})=>(0,s.jsxs)(f.s,{shrink:0,width:w,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(D.J,{disabled:t,onValueChange:p=>{a(o,c,p)},name:c,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:M(i,[c,"hasAllActionsSelected"],!1),indeterminate:M(i,[c,"hasSomeActionsSelected"],!1)})]},c))})})},Ke=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ts,{background:"neutral0",children:[(0,s.jsx)(vs,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Es,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ts=(0,S.Ay)(j.a)`
  overflow-x: auto;
`,Ue=({layout:e,...t})=>{const[o,n]=y.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(j.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,k.A)(),c=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(Ve.n,{expanded:n,onToggle:c,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(we.P,{title:re(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(He.u,{children:(0,s.jsx)(j.a,{padding:6,children:e.map(({actions:g,subCategoryName:m,subCategoryId:x})=>(0,s.jsx)(Ds,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:m,pathToData:[...i,x]},m))})})]})},Ds=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=y.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:c}=Y(),{formatMessage:p}=(0,k.A)(),g=M(i,r,{}),m=y.useMemo(()=>Object.keys(g).reduce((A,E)=>(A[E]=ge(g[E]),A),{}),[g]),{hasAllActionsSelected:x,hasSomeActionsSelected:_}=J(m),h=()=>{d(A=>!A)},C=()=>{d(!1)},O=y.useMemo(()=>e.map(A=>{const E=[...r,A.action,"properties","enabled"],T=M(i,E,!1),v=M(i,[...r,A.action,"conditions"],{}),I=X(v).some(W=>W);return{...A,isDisplayed:T,checkboxName:E.join(".."),hasSomeActionsSelected:T,value:T,hasConditions:I,label:A.displayName,actionId:A.action,pathToConditionsObject:[...r,A.action]}}),[e,i,r]),P=M(i,[...r],{}),L=X(Object.entries(P).reduce((A,E)=>{const[T,{conditions:v}]=E;return A[T]=v,A},{})).some(A=>A);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j.a,{children:[(0,s.jsxs)(f.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(j.a,{paddingRight:4,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(j.a,{paddingLeft:4,children:(0,s.jsx)(fe.S,{name:r.join(".."),disabled:o,onValueChange:A=>{l({target:{name:r.join(".."),value:A}})},indeterminate:_,value:x,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(f.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(Fe.x,{gap:2,style:{flex:1},children:O.map(({checkboxName:A,value:E,action:T,displayName:v,hasConditions:I})=>(0,s.jsx)(Ge.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:I,children:(0,s.jsx)(fe.S,{name:A,disabled:o,onValueChange:W=>{c({target:{name:A,value:W}})},value:E,children:v})})},T))}),(0,s.jsx)(ae,{hasConditions:L,onClick:h})]})]}),a&&(0,s.jsx)(Re,{headerBreadCrumbs:[t,n],actions:O,isFormDisabled:o,onClosed:C,onToggle:h})]})},$s=(0,S.Ay)(j.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=S.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Bs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Rs=y.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=y.useReducer(ks,Is,()=>Ws(e,o)),{formatMessage:l}=(0,k.A)();y.useImperativeHandle(n,()=>({getPermissions(){const _=(0,_e.iv)(r.collectionTypes,d.collectionTypes),h=(0,_e.iv)(r.singleTypes,d.singleTypes),C={..._,...h};let O;return Q(C)?O=!1:O=Object.values(C).some((P={})=>Object.values(P).some(L=>ne(L,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:O}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const c=(_,h,C,O)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:C,value:O})},p=(_,h,C)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:C})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},m=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),x=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:m,onChangeParentCheckbox:x,onChangeCollectionTypeLeftActionRowCheckbox:c,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Xe.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(xe.t,{children:Bs.map(_=>(0,s.jsx)(xe.o,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(z.T,{style:{position:"relative"},children:[(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},ks=(e,t)=>(0,ye.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(M(e,d)).forEach(i=>{const l=M(e,[...d,i,r],void 0);if(l){let c=q(l,a);if(!a&&c.conditions){const p=q(c.conditions,!1);c={...c,conditions:p}}V(o,[...d,i,r],c)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=ce(e.modifiedData);const l=n.split(".."),c=M(i,l,{});Object.keys(c).forEach(p=>{if(ne(c[p],`properties.${r}`)){const g=M(c,[p,"properties",r,a]),m=[...l,p,"properties",r,a];if(!(0,F.F)(g))V(i,m,d);else{const x=q(g,d);V(i,m,x)}}}),d||(i=oe(i)),V(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;V(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=ce(e.modifiedData);V(n,[...t.keys.split("..")],t.value),t.value||(n=oe(n)),V(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=ce(e.modifiedData);const i=M(d,a,{}),l=q(i,r);V(d,a,l),r||(d=oe(d)),V(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ws=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Se(a,"plugin"),settings:Se(d,"category")},l={collectionTypes:Te(n,o,t),singleTypes:Te(r,o,t),plugins:ve(i.plugins,o,t),settings:ve(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},76079:(N,H,u)=>{"use strict";u.d(H,{B:()=>j});var s=u(92132),y=u(63891),f=u(56654);const j=({options:b,...R})=>(0,s.jsx)(f.KF,{...R,children:b.map($=>"children"in $?(0,s.jsx)(f.np,{label:$.label,values:$.children.map(K=>K.value.toString()),children:$.children.map(K=>(0,s.jsx)(D,{value:K.value,children:K.label},K.value))},$.label):(0,s.jsx)(f.fe,{value:$.value,children:$.label},$.value))}),D=(0,y.Ay)(f.fe)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`}}]);
