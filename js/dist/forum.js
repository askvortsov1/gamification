module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=44)}([function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},function(t,n,o){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}o.d(n,"a",(function(){return a}))},,function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var e=o(3),a=o(1),r=o.n(a),s=o(15),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(r.a,{points:r.a.attribute("points"),name:r.a.attribute("name"),color:r.a.attribute("color")}))},function(t,n,o){"use strict";function e(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},,function(t,n){t.exports=flarum.core.compat["common/models/Post"]},function(t,n){t.exports=flarum.core.compat["common/utils/abbreviateNumber"]},function(t,n){t.exports=flarum.core.compat["forum/components/CommentPost"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={Rank:o(5).a}},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={rankLabel:o(6).a}},function(t,n){t.exports=flarum.core.compat["common/utils/mixin"]},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,n){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["common/helpers/username"]},function(t,n){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,n){t.exports=flarum.core.compat["common/components/Link"]},function(t,n){t.exports=flarum.core.compat["common/models/User"]},function(t,n){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,n){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["common/components/Page"]},function(t,n){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["forum/components/Notification"]},function(t,n){t.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["common/utils/classList"]},function(t,n){t.exports=flarum.core.compat["forum/utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},function(t,n){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["forum/components/PostUser"]},function(t,n,o){(function(n){var o=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,i="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,l=function(){return c.Date.now()};function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||r.test(t)?s(t.slice(2),i?2:8):e.test(t)?NaN:+t}t.exports=function(t,n,o){var e,a,r,s,i,u,c=0,f=!1,h=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var o=e,r=a;return e=a=void 0,c=n,s=t.apply(r,o)}function g(t){return c=t,i=setTimeout(N,n),f?y(t):s}function x(t){var o=t-u;return void 0===u||o>=n||o<0||h&&t-c>=r}function N(){var t=l();if(x(t))return k(t);i=setTimeout(N,function(t){var o=n-(t-u);return h?m(o,r-(t-c)):o}(t))}function k(t){return i=void 0,b&&e?y(t):(e=a=void 0,s)}function O(){var t=l(),o=x(t);if(e=arguments,a=this,u=t,o){if(void 0===i)return g(u);if(h)return i=setTimeout(N,n),y(u)}return void 0===i&&(i=setTimeout(N,n)),s}return n=v(n)||0,d(o)&&(f=!!o.leading,r=(h="maxWait"in o)?p(v(o.maxWait)||0,n):r,b="trailing"in o?!!o.trailing:b),O.cancel=function(){void 0!==i&&clearTimeout(i),c=0,e=u=a=i=void 0},O.flush=function(){return void 0===i?s:k(l())},O}}).call(this,o(43))},function(t,n){t.exports=flarum.core.compat["common/states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["forum/app"]},,,,,function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,n,o){"use strict";o.r(n),o.d(n,"models",(function(){return e.a})),o.d(n,"components",(function(){return Pt})),o.d(n,"helpers",(function(){return Bt}));var e=o(13),a=o(1),r=o.n(a),s=o(18),i=o.n(s),u=o(9),c=o.n(u),f=o(23),p=o.n(f),l=o(5),d=o(3),v=o(19),h=o.n(v),b=o(26),y=o.n(b),g=o(16),x=o.n(g),N=o(2),k=o.n(N),O=o(7),w=o.n(O),j=o(27),L=o.n(j),P=o(20),V=o.n(P),I=o(21),B=o.n(I),D=function(t,n){void 0===n&&(n=!1);var o=app.data["fof-gamification."+t];return n?!!parseInt(o):o},U=o(22),M=o.n(U),_=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.oninit=function(n){t.prototype.oninit.call(this,n),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route.set("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?w.a.component():k.a.component({className:"Button",onclick:this.loadMore.bind(this)},app.translator.trans("core.forum.discussion_list.load_more_button")),m("div",{className:"IndexPage"},x.a.prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,L()(x.a.prototype.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?D("customRankingImages",!0)?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("fof-gamification.topimage"+o+"Url")}):m("td",{className:"rankings-mobile rankings-"+o},B()("fas fa-trophy")):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m(M.a,{href:app.route.user(t),force:!0},o<4?h()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",V()(t))))),o<4?m("td",{className:"rankings-"+o},t.points()):m("td",{className:"rankings-4"},t.points()))]}))),m("div",{className:"rankings-loadmore"}," ",t)))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){n.users=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},o.addOrdinalSuffix=function(t){if("en"===app.data.locale){var n=t%10,o=t%100;return 1===n&&11!==o?t+"st":2===n&&12!==o?t+"nd":3===n&&13!==o?t+"rd":t+"th"}return t},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,n){return parseFloat(n.points())-parseFloat(t.points())})),m.redraw(),t},n}(y.a),C=o(28),S=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.icon=function(){return this.attrs.notification.content()>0?"fas fa-thumbs-up":"fas fa-thumbs-down"},o.href=function(){return app.route.post(this.attrs.notification.subject())},o.content=function(){var t=this.attrs.notification.fromUser(),n=parseInt(this.attrs.notification.content());return n>0?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},o.excerpt=function(){return this.attrs.notification.subject().contentPlain()},n}(o.n(C).a),R=o(0),A=o(29),T=o.n(A),E=o(30),F=o.n(E),$=function(){Object(R.extend)(x.a.prototype,"navItems",(function(t){app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage&&t.add("rankings",F.a.component({href:app.route("rankings"),icon:"fas fa-trophy"},app.translator.trans("fof-gamification.forum.nav.name")),80)})),Object(R.extend)(T.a.prototype,"sortMap",(function(t){t.hot="-hotness"}))},z=o(11),W=o.n(z),q=o(31),G=o.n(q),H=o(32),J=o.n(H),K=o(33),Q=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},o.oninit=function(n){t.prototype.oninit.call(this,n),this.loading=!this.attrs.post.upvotes(),this.loading&&this.load()},o.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(w.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},["upvotes"].map((function(n){var o=t.attrs.post[n]();if(o&&o.length)return m("div",null,m("legend",null,app.translator.trans("fof-gamification.forum.modal."+n+"_label")),o.map((function(t){return m("li",null,m(M.a,{href:app.route.user(t)},h()(t)," ",V()(t)))})))}))))},o.load=function(){return app.store.find("posts",this.attrs.post.id(),{include:"upvotes"}).then(this.loaded.bind(this))},n}(o.n(K).a),X=o(34),Y=o.n(X),Z=function(t,n,o,e,a){if(void 0===a&&(a=t.discussion()),app.session.user){if(!a||a.canVote()||t.canVote())return n&&o&&(n=!1,o=!1),e&&e(!0),m.redraw(),t.save([n,o,"vote"]).then((function(){return null}),(function(){return null})).then((function(){e&&e(!1),a&&a.pushAttributes({votes:t.votes()}),m.redraw()}))}else Y.a.replyAction.call(a,!0)},tt=function(){Object(R.extend)(J.a,"moderationControls",(function(t,n){n.canSeeVotes()&&t.add("viewVotes",[m(k.a,{icon:"fas fa-thumbs-up",onclick:function(){app.modal.show(Q,{post:n})}},app.translator.trans("fof-gamification.forum.mod_item"))])})),Object(R.extend)(W.a.prototype,"actionItems",(function(t){var n=this,o=this.attrs.post;if(o.canVote()){var e=o.hasDownvoted(),a=o.hasUpvoted(),r=D("iconName")||"thumbs",s=D("upVotesOnly",!0),i=!app.session.user||o.canVote();t.add("votes",m("div",{className:G()("CommentPost-votes",D("useAlternateLayout",!0)&&"alternateLayout")},k.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+r+"-up",className:"Post-vote Post-upvote",style:a&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:this.voteLoading||!i,onclick:function(){return Z(o,!a,!1,(function(t){return n.voteLoading=t}))}}),m("label",{className:"Post-points"},o.votes()),s?"":k.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+r+"-down",className:"Post-vote Post-downvote",style:e&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:!i,onclick:function(){return Z(o,!1,!e,(function(t){return n.voteLoading=t}))}})),10)}}))},nt=o(17),ot=o.n(nt),et=o(10),at=o.n(et),rt=function(){D("showVotesOnDiscussionPage",!0)&&!D("useAlternateLayout",!0)&&Object(R.extend)(ot.a.prototype,"infoItems",(function(t){t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},B()("far fa-thumbs-up"),at()(this.attrs.discussion.votes())),20)}))},st=o(35),it=o.n(st),ut=o(24),ct=o.n(ut),ft=o(6),pt=function(){var t=function(t){return function(n){return n&&n.attrs&&n.attrs.className&&String(n.attrs.className).split(" ").includes(t)}};Object(R.extend)(ct.a.prototype,"infoItems",(function(t){var n,o=D("pointsPlaceholder"),e=String(this.attrs.user.points());n=o?m("div",null,o.replace("{points}",e)):app.translator.trans("fof-gamification.forum.user.points",{points:e}),t.add("points",n)})),Object(R.extend)(ct.a.prototype,"view",(function(n){var o=this.attrs.user,e=function n(o,e){var a=[];if(o&&o.children&&Array.isArray(o.children)){var r=o.children.find(t(e));r&&a.push(r),o.children.forEach((function(t){a.push.apply(a,n(t,e))}))}return a}(n,"UserCard-profile")[0],a=Number(D("rankAmt"));if(e){var r=e.children.find(t("UserCard-badges"));return o.ranks()&&(r?o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(ft.a)(t))})).forEach((function(t){t&&r.children.push(t)})):e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(ft.a)(t))}))))),n}})),Object(R.extend)(it.a.prototype,"view",(function(t){var n,o=this.attrs.post.user();if(!o)return t;var e,a=t.children.find((e="h3",function(t){return t&&t.tag&&t.tag===e})),r=null!=(n=Number(D("rankAmt")))?n:o.ranks().length;a.children=a.children.concat(o.ranks().reverse().splice(0,r).map((function(t){return m("span",{className:"Post-Rank"},Object(ft.a)(t))}))).filter((function(t){return void 0!==t.tag}))}))},mt=o(25),lt=o.n(mt),dt=o(36),vt=o.n(dt),ht=function(t){return app.store.find("posts",t).then((function(){return m.redraw()}))},bt=[],yt=function(){Object(R.extend)(lt.a.prototype,"oncreate",(function(){app.pusher&&app.pusher.then((function(t){t.main.bind("newVote",(function(t){var n,o,e=app.store.getById("posts",t.post_id),a=t.user_id;e&&e.votes()!==t.votes&&a!=app.session.user.id()&&(n=e.id(),(o=bt[n])?o(n):(o=bt[n]=vt()(ht,1500))(n))}))}))})),Object(R.extend)(lt.a.prototype,"onremove",(function(){app.pusher&&app.pusher.then((function(t){t.main.unbind("newVote")}))}))},gt=function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()};function xt(t){return t?{color:"var(--primary-color) !important"}:{}}function Nt(){Object(R.extend)(ot.a.prototype,"oninit",(function(){var t=this;this.subtree.check((function(){return t.voteLoading}))})),Object(R.extend)(ot.a.prototype,"view",(function(t){var n=this;if(t&&t.children){var o=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("DiscussionListItem-content")})),e=this.attrs.discussion,a=e.firstPost(),r=gt(e,"hasUpvoted"),s=gt(e,"hasDownvoted"),i=!app.session.user||gt(e,"canVote"),u=D("upVotesOnly",!0),c=D("iconNameAlt")||"arrow";o.children.unshift(m("div",{className:"DiscussionListItem-votes alternateLayout","data-upvotes-only":u},m(k.a,{className:"DiscussionListItem-voteButton DiscussionListItem-voteButton--up Button Button--icon Button--text",icon:"fas fa-fw fa-"+c+"-up",style:xt(r),"data-active":r,disabled:!i||this.voteLoading,onclick:function(){Z(a,!r,!1,(function(t){n.voteLoading=t}))}}),m("span",{class:"DiscussionListItem-voteCount"},at()(gt(e,"votes")||0)),!u&&m(k.a,{className:"DiscussionListItem-voteButton DiscussionListItem-voteButton--down Button Button--icon Button--text",icon:"fas fa-fw fa-"+c+"-down",style:xt(s),"data-active":s,disabled:!i||this.voteLoading,onclick:function(){Z(a,!1,!s,(function(t){n.voteLoading=t}))}}),this.voteLoading&&m(w.a,{display:"inline",size:"small"})))}}))}var kt=o(37),Ot=o.n(kt),wt=o(38),jt=o.n(wt);function Lt(t){return t?{color:"var(--primary-color) !important"}:{}}var Pt={RankingsPage:_,VoteNotification:S,VotesModal:Q};function Vt(){return(Vt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}var It=o(14),Bt=Vt({saveVote:Z,setting:D},It.a);app.initializers.add("fof-gamification",(function(t){i.a.prototype.votes=r.a.attribute("votes"),i.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),i.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),i.a.prototype.canVote=r.a.attribute("canVote"),p.a.prototype.points=r.a.attribute("points"),p.a.prototype.ranks=r.a.hasMany("ranks"),c.a.prototype.upvotes=r.a.hasMany("upvotes"),c.a.prototype.votes=r.a.attribute("votes"),c.a.prototype.canVote=r.a.attribute("canVote"),c.a.prototype.canSeeVotes=r.a.attribute("canSeeVotes"),c.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),c.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),t.store.models.ranks=l.a,t.notificationComponents.vote=S,t.routes.rankings={path:"/rankings",component:_},tt(),$(),Object(R.extend)(Ot.a.prototype,"sortMap",(function(t){t.votes="-votes"})),pt(),rt(),yt(),D("useAlternateLayout",!0)&&Nt(),D("altPostVotingUi",!0)&&(Object(R.extend)(W.a.prototype,"actionItems",(function(t){t.remove("votes")})),Object(R.extend)(W.a.prototype,"classes",(function(t){var n=D("upVotesOnly",!0);t.push("votesAlternativeLayout"),n&&t.push("votesUpvotesOnly")})),Object(R.extend)(W.a.prototype,"headerItems",(function(t){var n=this,o=this.attrs.post;if(o.canVote()){var e=o.discussion(),a=o.hasDownvoted(),r=o.hasUpvoted(),s=D("iconName")||"thumbs",i=D("upVotesOnly",!0),u=!jt.a.session.user||o.canVote();t.add("votes",m("div",{className:"Post-votes alternateLayout","data-upvotes-only":i},m(k.a,{className:"Post-voteButton Post-voteButton--up Button Button--icon Button--text",icon:"fas fa-fw fa-"+s+"-up",style:Lt(r),"data-active":r,disabled:!u||this.voteLoading,onclick:function(){Z(o,!r,!1,(function(t){n.voteLoading=t}))}}),m("span",{class:"Post-voteCount"},at()(function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()}(e,"votes")||0)),!i&&m(k.a,{className:"Post-voteButton Post-voteButton--down Button Button--icon Button--text",icon:"fas fa-fw fa-"+s+"-down",style:Lt(a),"data-active":a,disabled:!u||this.voteLoading,onclick:function(){Z(o,!1,!a,(function(t){n.voteLoading=t}))}}),this.voteLoading&&m(w.a,{display:"inline",size:"small"})),1e4)}})))}))}]);
//# sourceMappingURL=forum.js.map