(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"AEu/":function(e,t,n){"use strict";n.r(t),n.d(t,"ConversationHiddenRepliesScreen",(function(){return K}));var r=n("1Pcy"),a=n.n(r),i=n("W/Kd"),o=n.n(i),c=n("KEM+"),l=n.n(c),s=n("ERkP"),u=n("es0u"),d=(n("NlgC"),n("oEGd")),p=n("0KEI"),h=n("hqKg"),f=n("8Lfv"),m=n("G6rE"),g=Object(h.createSelector)((function(e,t){return t.match.params.screenName}),(function(e,t){return t.match.params.statusId}),(function(e,t){return"PUSH"===t.history.action}),m.e.selectLoggedInUser,(function(e,t,n,r){return{loggedInScreenName:r?r.screen_name:void 0,screenName:e,statusId:t,isForwardNavigation:n}})),_={createLocalApiErrorHandler:Object(p.d)("HIDDEN_REPLIES_PAGE"),clearTimelineCache:function(e){return Object(f.a)(e)}},T=Object(d.g)(g,_),v=n("7JQg"),w=n("xZXe"),b=n("QIgh"),E=n("8UdT"),y=n("IcAo"),I=n("VrCx"),C=n("yy6l"),S=function(e){return Object(C.a)({component:w.a,createAdditionalProps:function(){return{withUnhideReply:e}},displayBlocked:!0,divider:{top:!0,bottom:!0}})},R=n("WU0f"),x=n("yoO3"),L=n("IG4P"),O=n("fTQJ"),N=n("VS6U"),F=n("t62R"),j=n("FIs5"),P=n("I7xG"),A=n("3XMw"),k=n.n(A),M=k.a.f8bf99e2,H=k.a.e001fce2,D=k.a.f7462e22,U=k.a.h73926af,q=s.createElement(k.a.I18NFormatMessage,{$i18n:"c774be45"},s.createElement(F.c,{link:"https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply"},k.a.fa1e6c45)),B=function(){return s.createElement(j.a,{header:U,message:q})},K=function(e){function t(t){var n;return n=e.call(this,t)||this,l()(a()(n),"_getModule",Object(P.a)(a()(n),(function(e){return e.statusId}),(function(e){return Object(R.a)(e)}))),n._clearTimelineCache(),n}o()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.history,n=e.location,r=e.loggedInScreenName,a=e.screenName,i=e.statusId;return a&&i?s.createElement(x.a,null,s.createElement(N.a,{backLocation:"/"+a.toLowerCase()+"/status/"+i,history:t,location:n,primaryContent:this._renderPrimaryContent(),sidebarContent:s.createElement(u.a,null),subtitle:a===r?H:D({screenName:a}),title:M})):null},n._renderPrimaryContent=function(){var e,t,n,r,a=this.props,i=a.loggedInScreenName,o=a.screenName;return s.createElement(O.a,{entryConfiguration:(e={withUnhideReply:o===i},r=e.withUnhideReply,Object(y.a)({},b.b,((n={})[E.a.Tweet]={handlers:(t={},t[I.a.Tweet]=S(r),t)},n))),module:this._getModule(),refreshControl:L.a,renderEmptyState:B,title:M})},n._clearTimelineCache=function(e){void 0===e&&(e=this._getModule());var t=this.props,n=t.clearTimelineCache,r=t.createLocalApiErrorHandler;t.isForwardNavigation&&n(e).catch(r({}))},t}(s.Component);t.default=Object(v.c)({page:"tweet",section:"moderated_replies"})(T(K))},DL4F:function(e,t,n){"use strict";n.r(t),n.d(t,"ConversationAnalyticsScreen",(function(){return A}));n("PN9k"),n("yIC7");var r=n("1Pcy"),a=n.n(r),i=n("W/Kd"),o=n.n(i),c=n("KEM+"),l=n.n(c),s=n("ERkP"),u=(n("VAZu"),n("NlgC"),n("zh9S")),d=n("oEGd"),p=n("0KEI"),h=n("hqKg"),f=n("XOJV"),m=function(e,t){return t.match.params.statusId},g=Object(h.createSelector)((function(e,t){return f.a.selectFetchStatus(e,m(0,t))}),m,(function(e,t){return f.a.selectHydrated(e,m(0,t))}),(function(e,t,n){return{fetchStatus:e,statusId:t,tweet:n}})),_={createLocalApiErrorHandler:Object(p.d)("CONVERSATION_ANALYTICS_SCREEN"),fetchTweetIfNeeded:f.a.fetchOneIfNeeded,scribeAction:u.c},T=Object(d.g)(g,_),v=n("7JQg"),w=n("v//M"),b=n("W5XZ"),E=n("jHSc"),y=n("f004"),I=n("3XMw"),C=n.n(I),S=n("v6aA"),R=n("SrIh"),x=n("Rp9C"),L=n("q9Zt"),O=n("bPFD"),N=n("rHpw"),F=C.a.db722a73,j=C.a.ba56def2,P=C.a.j07decd3,A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,l()(a()(t),"_handleFetchTweet",(function(){var e=t.props,n=e.createLocalApiErrorHandler;(0,e.fetchTweetIfNeeded)(e.statusId).catch(n(b.a))})),l()(a()(t),"_render",(function(){var e=t.props.tweet,n=e&&Object(y.a)(e)||void 0;if(!n||n&&n.user.id_str!==t.context.loggedInUserId)return s.createElement(L.a,{onRetry:null,title:F});return s.createElement(O.a,{dangerouslyDisableSandbox:!0,onMessage:t._handleIFrameMessage,reportError:R.a,src:"/i/tfb/v1/quick_promote/lite/"+n.id_str,style:k.iframe})})),l()(a()(t),"_setAppBarRef",(function(e){t._appBarRef=e})),l()(a()(t),"_handleIFrameMessage",(function(e){if(e&&"quick_promote"===e.name)if("scribe"===e.type){var n=t.props,r=n.scribeAction,a=n.scribeNamespace,i=n.tweet,o=i&&Object(y.a)(i)||void 0,c=e.scribeData||{},l="string"==typeof c.component?c.component:"quick_promote",s="string"==typeof c.uiEvent?c.uiEvent:"";r(Object.assign({},a,{component:l,action:s}),Object.assign({},c,{items:o?[x.a.getTweetItem(o)]:[]}))}else"close"===e.type&&t._appBarRef&&t._appBarRef.goBack()})),t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._handleFetchTweet()},n.render=function(){var e=this.props,t=e.fetchStatus,n=e.history,r=e.location,a=e.tweet,i=a&&Object(y.a)(a)||void 0;return s.createElement(E.b,{appBarRef:this._setAppBarRef,backLocation:i?i.permalink:"/",history:n,location:r,title:j},s.createElement(w.a,{fetchStatus:t,render:this._render,retryMessage:P}))},t}(s.PureComponent);l()(A,"contextType",S.a);var k=N.a.create((function(e){return{iframe:{flexGrow:1}}}));t.default=Object(v.c)({page:"tweet",section:"analytics"})(T(A))},lPc3:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var r=c(n("7DT3")),a=c(n("/uF9")),i=c(n("ERkP")),o=c(n("OkZJ"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return void 0===e&&(e={}),(0,r.default)("svg",Object.assign({},e,{style:[o.default.root,e.style,a.default.isRTL&&o.default.iconRtl],viewBox:"0 0 48 48"}),i.default.createElement("g",null,i.default.createElement("circle",{fill:"#1DA1F2",cx:"17",cy:"7",r:"7"}),i.default.createElement("circle",{fill:"#FFAD1F",cx:"34",cy:"30",r:"4"}),i.default.createElement("circle",{fill:"#F45D22",cx:"34",cy:"44",r:"4"}),i.default.createElement("path",{fill:"#CCD6DD",d:"M18 16c0-.552-.448-1-1-1s-1 .448-1 1v22c0 3.866 3.134 7 7 7h5c.552 0 1-.448 1-1s-.448-1-1-1h-5c-2.76 0-5-2.24-5-5v-9.1c1.27 1.296 3.04 2.1 5 2.1h5c.552 0 1-.448 1-1s-.448-1-1-1h-5c-2.76 0-5-2.24-5-5v-8z"})))};l.metadata={height:48,width:48};var s=l;t.default=s},z4TA:function(e,t,n){"use strict";n.r(t),n.d(t,"ConversationScreen",(function(){return Qe}));var r=n("97Jx"),a=n.n(r),i=(n("yIC7"),n("PN9k"),n("rmZQ"),n("LnO1"),n("3eMz"),n("dtAy"),n("1Pcy")),o=n.n(i),c=n("W/Kd"),l=n.n(c),s=n("KEM+"),u=n.n(s),d=n("aeN7"),p=n("ERkP"),h=n("pxuL"),f=n("es0u"),m=(n("T3IU"),n("DZyD"),n("NlgC"),n("zh9S")),g=n("oEGd"),_=n("0KEI"),T=n("hqKg"),v=n("8Lfv"),w=n("QK5w"),b=n("pNZL"),E=n("XOJV"),y=n("Mx3A"),I=n("P1r1"),C=function(e,t){return e.location&&e.location.state&&e.location.state[t]},S=function(e,t){var n=C(t,"focal");return n||R(e,t)},R=function(e,t){var n=t.location,r=t.match;return r.params&&r.params.statusId?r.params.statusId:n.query&&n.query.tweet_id&&"string"==typeof n.query.tweet_id?n.query.tweet_id:""},x=Object(T.createSelector)(w.a,(function(e,t){return C(t,"contextTweetId")}),(function(e,t){return E.a.selectFetchStatus(e,S(e,t))}),(function(e,t){return"PUSH"===t.history.action}),(function(e,t){var n=t.location.query,r=Object(w.a)(e,t);return Object(y.c)({query:n,httpReferer:r?"":document.referrer||"",requestUrl:window.location.href}).referral_type===y.a.Web}),(function(e,t){var n=C(t,"referrer"),r=S(e,t);return!!n&&n.includes("/i/topics/tweet/"+r)}),(function(e,t){return C(t,"promotedContent")}),(function(e,t){return t.location.query&&"string"==typeof t.location.query.cxt?t.location.query.cxt:void 0}),(function(e,t){var n=S(e,t),r=E.a.selectHydrated(e,n);return r&&r.conversation_id_str?E.a.selectHydrated(e,r.conversation_id_str):null}),(function(e,t){return E.a.selectHydrated(e,S(e,t))}),(function(e,t){return t.location.pathname.indexOf("/intent/")>-1}),(function(e,t){return t.match.params.screenName}),(function(e,t){return C(t,"socialContext")}),S,R,I.g,(function(e,t){return C(t,"contextualClientEventInfo")}),b.a,(function(e,t,n,r,a,i,o,c,l,s,u,d,p,h,f,m,g,_){return{contextTweetId:t,conversationTreeEnabled:m,initialFetchStatus:n,isForwardNavigation:r,isInitialScreen:!e,isReferralSource:a,isReferredFromExploreTopics:i,promotedContent:o,richLandingContextId:c,rootTweet:l,focalTweet:s,isIntentRoute:u,screenName:d,selectedTweetId:f,socialContext:p,statusId:h,contextualClientEventInfo:g,tweetDetailNav:_}})),L={createLocalApiErrorHandler:Object(_.d)("CONVERSATION_SCREEN"),googleAnalyticsPageView:m.a,scribePageImpression:m.d,clearTimelineCache:function(e,t){return Object(v.a)(e,t)},updateSettings:I.D},O=Object(g.g)(x,L),N=n("ymux"),F=n("rxPX"),j=n("HAhZ"),P=Object(F.a)().propsFromState((function(){return{tips:j.c}})).propsFromActions((function(){return{addTip:j.a}})),A=n("7JQg"),k=n("3XMw"),M=n.n(k),H=n("E8TX"),D=n.n(H),U=n("lPc3"),q=n.n(U),B=n("t62R"),K=n("/yvb"),J=n("feu+"),W=n("rHpw"),G=M.a.ac8c294e,Q=p.createElement(D.a,null),V=M.a.c302bb1c,z=M.a.d9fec786,Z=M.a.d87ba519,X=M.a.bf6e4d0e,Y=M.a.af233751,$=M.a.a623f6a6,ee=function(){return p.createElement(B.c,{align:"left"},z,p.createElement("ul",null,p.createElement("li",null,Z),p.createElement("li",null,X),p.createElement("li",null,Y)))};var te=W.a.create((function(e){return{icon:{height:e.spaces.xxLarge,width:e.spaces.xxLarge}}})),ne=Object(A.c)({page:"tweet",section:"conversation_tree_education"})(P((function(e){var t=e.tips,n=e.addTip,r=e.showImmediately,a=p.useState(!1),i=a[0],o=a[1],c=function(){var e;n(((e={}).conversation_tree_education=!0,e)),o(!1)},l=i||r&&!t.conversation_tree_education;return p.createElement(p.Fragment,null,p.createElement(K.a,{accessibilityLabel:G,icon:Q,onPress:function(){o(!0)},type:"text"}),l?p.createElement(J.a,{actionLabel:$,graphic:q.a,graphicDisplayMode:"illustration",graphicStyle:te.icon,headline:V,onAction:c,onClose:c,subtext:p.createElement(ee,null)}):null)}))),re=n("wrlS"),ae=n("3xO4"),ie=n.n(ae),oe=n("CK8+");var ce=W.a.create((function(e){return{conversationNav:{flexDirection:"row",alignItems:"center"}}})),le=function(e){var t=e.conversationTreeEnabled,n=e.onTreeSwitchChange,r=e.showEducationImmediately,a=t?p.createElement(ne,{showImmediately:r}):void 0,i=re.a.isTrue("responsive_web_conversation_tree_toggle")?p.createElement(oe.a,{accessibilityLabel:"Conversation Tree toggle",onValueChange:n,value:t}):void 0;return p.createElement(ie.a,{style:ce.conversationNav},a,i)},se=n("rkhm"),ue=n("I7xG"),de=n("aHKU"),pe=n.n(de),he=n("8UdT"),fe=n("dwig"),me=n("kGix"),ge=n("JyI6"),_e=n("zOCl"),Te=n.n(_e),ve=M.a.ad62343c,we=M.a.cf67b3f1,be=M.a.h6994d0e,Ee=function(e){var t=e.getLocationState,n=e.history;return p.createElement(ge.a,{accessibilityLabel:ve,getLocationState:t,history:n,icon:p.createElement(Te.a,null),label:be,scribeComponent:"floating_reply_button",shortLabel:we})},ye=n("iFPY"),Ie=n("zb92"),Ce=Object(Ie.a)({loader:function(){return Promise.all([n.e(2),n.e(191)]).then(n.bind(null,"uo3S"))},renderPlaceholder:function(e,t){return null}}),Se=n("yoO3"),Re=n("AUxQ"),xe=n("QIgh"),Le=n("VTxf"),Oe=n("SrIh"),Ne=n("fTQJ"),Fe=n("ZNT5"),je=function(e){var t=e.richLandingContextId,n=e.statusId,r=t?n+"-"+t:n,a={refsrc_tweet:n,rux_cxt:t};return Object(Fe.a)({timelineId:"rich-tweet-landing-"+r,getEndpoint:function(e){return e.URT.fetchRichTweetLandingTimeline},getEndpointParams:function(e){return Object.assign({},a,e)},context:"FETCH_RICH_TWEET_LANDING",perfKey:"rich-tweet-landing"})},Pe=(n("aWzz"),n("wgnn")),Ae=function(e){switch(e){case Pe.a.NOT_FOUND:return p.createElement(Le.a,null);default:return Object(Oe.a)("Unhandled timeline unavailable reason: "+e),null}},ke=function(){return p.createElement(Le.a,null)},Me=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,u()(o()(t),"_getModule",Object(ue.a)(o()(t),(function(e){return e.statusId}),(function(e){return e.richLandingContextId}),(function(e,t){return je({statusId:e,richLandingContextId:t})}))),t}return l()(t,e),t.prototype.render=function(){var e=this.props.title;return p.createElement(Ne.a,{entryConfiguration:xe.b,module:this._getModule(),renderEmptyState:ke,renderUnavailable:Ae,title:e})},t}(p.Component),He=n("Rp9C"),De=n("VS6U"),Ue=n("oQhu"),qe=n("mN6z"),Be=M.a.c6432564,Ke=M.a.aacb5623,Je=M.a.d998faa7,We={page:"tweet"},Ge={page:"tweet",section:"landing"},Qe=function(e){function t(t){var n;return n=e.call(this,t)||this,u()(o()(n),"_handleTreeSwitchChange",(function(e){(0,n.props.updateSettings)({conversationTreeEnabled:e}),e||n.context.setBackgroundClickHandler(null)})),u()(o()(n),"_getFabState",(function(){var e=n.props,t=e.promotedContent;return{inReplyToStatusId:e.statusId,promotedContent:t}})),u()(o()(n),"_isBucketedInRichTweetLandingExperiment",(function(){var e=n.props,t=e.isReferralSource,r=e.isReferredFromExploreTopics;return!(e.richLandingContextId||!t||r)&&re.a.isTrue("responsive_web_rich_tweet_landing_enabled")})),u()(o()(n),"_getNavigationParams",Object(ue.a)(o()(n),(function(e){return e.tweetDetailNav}),(function(e){return e.contextualClientEventInfo}),(function(e,t){var r,a;return n._navigationReferrerParamEnabled?{referrer:e,controller_data:e&&(null==t||null===(r=t.details)||void 0===r||null===(a=r.timelinesDetails)||void 0===a?void 0:a.controllerData)}:void 0}))),u()(o()(n),"_getApiErrorHandlerMap",Object(ue.a)(o()(n),(function(e){return e.screenName}),(function(e){return Object(se.a)(e)}))),u()(o()(n),"_getModule",Object(ue.a)(o()(n),(function(e){return e.statusId}),(function(e){return e.conversationTreeEnabled}),(function(e,t){return Object(N.a)({focalTweetId:e,conversationTreeEnabled:t})}))),u()(o()(n),"_handleEntriesUpdate",(function(e){var t=e.entries,r=e.fetchStatus,a=n.props.recordTTFL;if(r===me.a.FAILED&&(n._shouldRecordTTFL=!1),n._shouldRecordTTFL&&t.length){var i=t.some((function(e){return e.type===he.a.Tweet}));n._shouldRecordTTFL=!1,i&&a&&a("permalink")}})),u()(o()(n),"_shouldRedirectToCanonical",(function(){var e=n.props,t=e.focalTweet,r=e.screenName;return e.selectedTweetId===e.statusId&&(r&&t&&r.toLowerCase()!==t.user.screen_name.toLowerCase())})),u()(o()(n),"_redirectToCanonical",(function(){var e=n.props,t=e.history,r=e.location;t.replace({pathname:n._getCanonicalPath(),query:r.query,state:r.state})})),u()(o()(n),"_getCanonicalPath",(function(){var e=n.props.focalTweet;return e?"/"+e.user.screen_name+"/status/"+e.id_str:"/"})),u()(o()(n),"_getPathForTweetId",(function(e,t){return"/"+(t||"i")+"/status/"+e})),u()(o()(n),"_getScribeData",Object(Ue.a)((function(e,t){return{items:[He.a.forTweet(e,t)],tweet_id:e}}))),u()(o()(n),"_getScribeNamespace",(function(){return n._shouldRenderRichTweetLandingTimeline()?Ge:We})),u()(o()(n),"_setSelectedTweetId",(function(e,t){var r=n.props,a=r.history,i=r.location,o=r.statusId;a.replace(n._getPathForTweetId(e,t),Object.assign({},i.state,{focal:o,lockScroll:!0}))})),u()(o()(n),"_setBackgroundClickHander",(function(){var e,t=n.props,r=t.focalTweet,a=t.rootTweet,i=t.selectedTweetId,o=null===(e=a||r)||void 0===e?void 0:e.conversation_id_str,c=(null==a?void 0:a.user.screen_name)||void 0,l=o&&o!==i?function(){n._setSelectedTweetId(o,c)}:null;n.context.setBackgroundClickHandler(l)})),n._shouldRecordTTFL=t.isInitialScreen,n._navigationReferrerParamEnabled=re.a.isTrue("navigation_stack_referrer_param_enabled"),n._isInlineReplyEnabled=re.a.isTrue("responsive_web_inline_reply_enabled"),n._isInlineReplyWithFabEnabled=re.a.isTrue("responsive_web_inline_reply_with_fab_enabled"),n}l()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!Object(qe.a)(e,this.props)},n.componentDidMount=function(){var e=this.props,t=e.history,n=e.location,r=e.isForwardNavigation;!this._shouldRenderRichTweetLandingTimeline()||n.state&&n.state.isRichTweetLanding||t.replace(n,Object.assign({},n.state,{isRichTweetLanding:!0})),r&&this._clearTimelineCache()},n.componentWillUnmount=function(){this.context.setBackgroundClickHandler(null)},n.componentDidUpdate=function(e){this._shouldRedirectToCanonical()?this._redirectToCanonical():(this.props.statusId!==e.statusId&&this.props.isForwardNavigation&&this._clearTimelineCache(),e.selectedTweetId===this.props.selectedTweetId&&e.rootTweet===this.props.rootTweet||!this.props.conversationTreeEnabled||this._setBackgroundClickHander())},n.render=function(){var e,t=this.props,n=t.conversationTreeEnabled,r=t.focalTweet,i=t.history,o=t.isIntentRoute,c=t.location,l=t.promotedContent,s=t.statusId,u=r?Je({tweetText:r.text,fullName:r.user.name}):void 0,d={canonical:"https://twitter.com"+(this._getCanonicalPath()||"")},h=this._shouldRenderRichTweetLandingTimeline()?null:p.createElement(le,{conversationTreeEnabled:n,onTreeSwitchChange:this._handleTreeSwitchChange,showEducationImmediately:null===(e=c.state)||void 0===e?void 0:e.fromApp}),f=this._shouldRenderRichTweetLandingTimeline()||!n;return p.createElement(A.b,{data:this._getScribeData(s,l),namespace:this._getScribeNamespace()},p.createElement(Se.a,null,p.createElement(pe.a,a()({extend:!0},d)),p.createElement(De.a,{backLocation:"/",documentTitle:u,history:i,location:c,primaryContent:this._renderTimeline(),rightControl:h,sidebarContent:this._renderSidebarContent(),title:r&&r.self_thread?Ke:Be,withAppBarBorder:f,withPrimaryHeader:!1,withSideBorders:f}),o?p.createElement(ye.a,{history:i,location:c,tweet:r}):null))},n._renderSidebarContent=function(){var e=this.props.focalTweet;return e&&e.user.id_str?p.createElement(f.a,{withWhoToFollow:!1},p.createElement(Ce,{focalTweetId:e.id_str})):null},n._renderTimeline=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=e.history,a=e.location,i=e.richLandingContextId,o=e.rootTweet,c=e.selectedTweetId,l=e.statusId,s=e.socialContext,u=e.promotedContent,d=e.contextTweetId,h={selectedTweetId:c,setSelectedTweetId:this._setSelectedTweetId},f=this._isInlineReplyEnabled&&!this._isInlineReplyWithFabEnabled||t?null:p.createElement(Ee,{getLocationState:this._getFabState,history:r});return p.createElement(fe.a,{fab:f},this._shouldRenderRichTweetLandingTimeline()?p.createElement(Me,{richLandingContextId:i,statusId:l,title:Be}):p.createElement(Re.a,{apiErrorHandlerMap:this._getApiErrorHandlerMap(),contextTweetId:d,conversationTreeEnabled:t,fetchOptions:this._getNavigationParams(),focalTweet:n,focalTweetId:l,location:a,module:this._getModule(),onEntriesUpdate:this._handleEntriesUpdate,promotedContent:u,rootTweet:o||void 0,selectedTweet:h,socialContext:s}))},n._shouldRenderRichTweetLandingTimeline=function(){var e=this.props,t=e.isReferredFromExploreTopics;return!!e.richLandingContextId||t||this._isBucketedInRichTweetLandingExperiment()},n._clearTimelineCache=function(e,t){void 0===e&&(e=this._getModule()),void 0===t&&(t=this._getNavigationParams());var n=this.props,r=n.clearTimelineCache,a=n.createLocalApiErrorHandler;r(e,t).catch(a(this._getApiErrorHandlerMap()))},t}(p.Component);u()(Qe,"contextType",h.a),u()(Qe,"defaultProps",{recordTTFL:d.c});t.default=O(Qe)}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/web/bundle.Conversation.64f15d74.js.map