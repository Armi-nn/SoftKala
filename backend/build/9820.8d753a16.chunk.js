"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9820],{29820:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var D=_(92132),P=_(1633),n=_(3803),C=_(21272),A=_(2291),R=_(14718),i=_(38992),B=_(55151),v=_(79077),U=_(6759),t=_(15126),l=_(63299),L=_(67014),d=_(59080),I=_(79275),O=_(82437),T=_(61535),M=_(5790),E=_(12083),a=_(35223),K=_(5409),o=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(51187),S=_(56336),y=_(39404),N=_(58692),j=_(54257),H=_(501),V=_(57646),c=_(23120),e=_(44414),x=_(25962),F=_(14664),$=_(42588),G=_(90325),X=_(62785),z=_(87443),Y=_(41032),J=_(22957),Q=_(93179),Z=_(73055),u=_(15747),p=_(85306),k=_(77965),w=_(26509),b=_(84624),q=_(71210),__=_(32058),E_=_(81185),t_=_(82261),s_=_(30979),O_=_(67031);const m=()=>((0,n.u)(),(0,D.jsx)(P.HomePageCE,{}))},3803:(W,s,_)=>{_.d(s,{u:()=>U});var D=_(21272),P=_(2291),n=_(67031),C=_(54894),A=_(17703),R=_(6759);const i="strapi-notification-seat-limit",B="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",U=()=>{const{formatMessage:t}=(0,C.A)(),{license:l,isError:L,isLoading:d}=(0,R.m)(),I=(0,P.hN)(),{pathname:O}=(0,A.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:a}=l??{};D.useEffect(()=>{if(L||d)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let o;E==="OVER_LIMIT"?o="warning":E==="AT_LIMIT"&&(o="softWarning"),K&&I({type:o,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:a?B:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:a})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,M,E,T,a,L])}}}]);
