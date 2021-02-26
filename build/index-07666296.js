import{i as e}from"./main.js";var t=function(){};t.prototype.simple=function(e){var t=Date.now(),n=Date.parse(e);try{if(n!=n)throw"timeago-simple: Please check date and time format! Unable to parse the date & time: "+e}catch(t){return console.error(t),e}return n-t<0?function(e){var t=Date.now();e=Date.parse(e);var n=(t-e)/1e3,a=n/60,r=n/3600;if(n<60&&a<1)return 1===n?Math.round(n)+" second ago":Math.round(n)+" seconds ago";if(a<60&&r<1)return 1===a?Math.round(a)+" minute ago":Math.round(a)+" minutes ago";if(r>24){var l=r/24;if(l>30){var o=l/30;if(o>12){var i=o/12;if(i>0)return 1===i?Math.ceil(i)+" year ago":Math.ceil(i)+" years ago"}return Math.round(o)+" month ago"}return 1===l?Math.round(l)+" day ago":Math.round(l)+" days ago"}return 1===r?Math.round(r)+" hour ago":Math.round(r)+" hours ago"}(e):function(e){var t=Date.now(),n=((e=Date.parse(e))-t)/1e3,a=n/60,r=n/3600;if(n<60&&a<1)return 1===n?"in "+Math.round(n)+" second":"in "+Math.round(n)+" seconds";if(a<60&&r<1)return 1===a?"in "+Math.round(a)+" minute":"in "+Math.round(a)+" minutes";if(r>24){var l=r/24;if(l>30){var o=l/30;if(o>12){var i=o/12;if(i>0)return 1===i?"in "+Math.ceil(i)+" year":"in "+Math.ceil(i)+" years"}return"in "+Math.round(o)+" month"}return 1===l?"in "+Math.round(l)+" day":"in "+Math.round(l)+" days"}return 1===r?"in "+Math.round(r)+" hour":"in "+Math.round(r)+" hours"}(e)},t.prototype.future=function(e){console.warn("timeago-simple: .future function is depricated! Please use .simple for both past and future dates.");var t=Date.now();try{if(Date.parse(e)!=Date.parse(e))throw"timeago-simple: Please check date and time format! Unable to parse the date & time: "+e;if(Date.parse(e)-t<0)throw"timeago-simple: Looks like it's more relevant case for timeago.simple"}catch(t){return console.error(t),e}var n=((e=Date.parse(e))-t)/1e3,a=n/60,r=n/3600;if(n<60&&a<1)return 1===n?"in "+Math.round(n)+" second":"in "+Math.round(n)+" seconds";if(a<60&&r<1)return 1===a?"in "+Math.round(a)+" minute":"in "+Math.round(a)+" minutes";if(r>24){var l=r/24;if(l>30){var o=l/30;if(o>12){var i=o/12;if(i>0)return 1===i?"in "+Math.ceil(i)+" year":"in "+Math.ceil(i)+" years"}return"in "+Math.round(o)+" month"}return 1===l?"in "+Math.round(l)+" day":"in "+Math.round(l)+" days"}return 1===r?"in "+Math.round(r)+" hour":"in "+Math.round(r)+" hours"};var n=new t;function a(e,t,n){const a=e.slice();return a[12]=t[n].name,a[13]=t[n].timestamp,a[14]=t[n].use_count,a[15]=t[n].token,a}function r(e,t,n){const a=e.slice();return a[18]=t[n].email,a[19]=t[n].verified,a[20]=void 0!==t[n].edited_email?t[n].edited_email:"",a[21]=t,a[22]=n,a}function l(t){let n,a,r,l,o=t[18]+"";function s(e,t){return e[19]?p:i}let d=s(t),c=d(t);return{c(){n=e.element("div"),a=e.element("span"),r=e.text(o),l=e.space(),c.c(),e.attr(n,"class","px-4 py-2")},m(t,o){e.insert(t,n,o),e.append(n,a),e.append(a,r),e.append(n,l),c.m(n,null)},p(t,a){1&a&&o!==(o=t[18]+"")&&e.set_data(r,o),d!==(d=s(t))&&(c.d(1),c=d(t),c&&(c.c(),c.m(n,null)))},d(t){t&&e.detach(n),c.d()}}}function o(t){let n,a,r;function l(){t[5].call(n,t[21],t[22])}return{c(){n=e.element("input"),e.attr(n,"type","text"),e.attr(n,"class","flex flex-1 px-4 py-2 border border-feather-light box-border")},m(o,i){e.insert(o,n,i),e.set_input_value(n,t[20]),a||(r=e.listen(n,"input",l),a=!0)},p(a,r){t=a,1&r&&n.value!==t[20]&&e.set_input_value(n,t[20])},d(t){t&&e.detach(n),a=!1,r()}}}function i(t){let n;return{c(){n=e.element("span"),n.textContent="Not verified!",e.attr(n,"class","text-red-700 ml-4")},m(t,a){e.insert(t,n,a)},d(t){t&&e.detach(n)}}}function p(t){let n;return{c(){n=e.element("span"),n.textContent="Verified!",e.attr(n,"class","text-green-700 ml-4")},m(t,a){e.insert(t,n,a)},d(t){t&&e.detach(n)}}}function s(t){let n,a,r;function l(){return t[8](t[20],t[18],t[21],t[22])}return{c(){n=e.element("button"),n.textContent="Edit",e.attr(n,"class","bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold")},m(t,o){e.insert(t,n,o),a||(r=e.listen(n,"click",l),a=!0)},p(e,n){t=e},d(t){t&&e.detach(n),a=!1,r()}}}function d(t){let n,a,r,l,o;function i(){return t[6](t[18],t[20],t[21],t[22])}function p(){return t[7](t[20],t[21],t[22])}return{c(){n=e.element("button"),n.textContent="Save",a=e.space(),r=e.element("button"),r.textContent="Cancel",e.attr(n,"class","mr-4 bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"),e.attr(r,"class","bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold")},m(t,s){e.insert(t,n,s),e.insert(t,a,s),e.insert(t,r,s),l||(o=[e.listen(n,"click",i),e.listen(r,"click",p)],l=!0)},p(e,n){t=e},d(t){t&&e.detach(n),t&&e.detach(a),t&&e.detach(r),l=!1,e.run_all(o)}}}function c(t){let n,a,r,i,p;function c(e,t){return e[20]?o:l}let u=c(t),m=u(t);function h(e,t){return e[20]?d:s}let f=h(t),x=f(t);return{c(){n=e.element("li"),a=e.element("div"),m.c(),r=e.space(),i=e.element("div"),x.c(),p=e.space(),e.attr(a,"class","flex flex-1 mr-4 items-center h-12"),e.attr(i,"class","flex items-center"),e.attr(n,"class","border-l-4 border-feather-light p-2 pl-4 flex justify-between shadow")},m(t,l){e.insert(t,n,l),e.append(n,a),m.m(a,null),e.append(n,r),e.append(n,i),x.m(i,null),e.append(n,p)},p(e,t){u===(u=c(e))&&m?m.p(e,t):(m.d(1),m=u(e),m&&(m.c(),m.m(a,null))),f===(f=h(e))&&x?x.p(e,t):(x.d(1),x=f(e),x&&(x.c(),x.m(i,null)))},d(t){t&&e.detach(n),m.d(),x.d()}}}function u(t){let n;return{c(){n=e.element("span"),n.textContent="Never used"},m(t,a){e.insert(t,n,a)},p:e.noop,d(t){t&&e.detach(n)}}}function m(t){let n,a,r,l,o=t[14]+"";return{c(){n=e.element("span"),a=e.text("Used "),r=e.text(o),l=e.text(" times")},m(t,o){e.insert(t,n,o),e.append(n,a),e.append(n,r),e.append(n,l)},p(t,n){2&n&&o!==(o=t[14]+"")&&e.set_data(r,o)},d(t){t&&e.detach(n)}}}function h(t){let n,a,r,l,o,i,p=t[15]+"";return{c(){n=e.element("p"),n.textContent="Please record this token somewhere, you cannot\n                                retrieve its value again. For use on the command\n                                line you can save it to ~/.cargo/quill with:",a=e.space(),r=e.element("div"),l=e.element("code"),o=e.text("cargo login "),i=e.text(p),e.attr(r,"class","border-2 px-4 py-2 mt-4")},m(t,p){e.insert(t,n,p),e.insert(t,a,p),e.insert(t,r,p),e.append(r,l),e.append(l,o),e.append(l,i)},p(t,n){2&n&&p!==(p=t[15]+"")&&e.set_data(i,p)},d(t){t&&e.detach(n),t&&e.detach(a),t&&e.detach(r)}}}function f(t){let a,r,l,o,i,p,s,d,c,f,x,g,v,b,y,M,w,k=t[12]+"",_=n.simple(new Date(t[13]))+"";function C(e,t){return e[14]>0?m:u}let D=C(t),j=D(t);function P(){return t[11](t[12])}let T=t[15]&&h(t);return{c(){a=e.element("li"),r=e.element("div"),l=e.element("span"),o=e.text(k),i=e.space(),p=e.element("div"),s=e.element("div"),d=e.element("span"),c=e.text("Created "),f=e.text(_),x=e.space(),j.c(),g=e.space(),v=e.element("button"),v.textContent="Revoke",b=e.space(),T&&T.c(),y=e.space(),e.attr(l,"class","text-lg font-bold"),e.attr(s,"class","flex flex-col text-sm font-light mr-4"),e.attr(v,"class","bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"),e.attr(p,"class","flex"),e.attr(r,"class","flex justify-between"),e.attr(a,"class","shadow border-l-4 border-feather-light mt-4 p-4")},m(t,n){e.insert(t,a,n),e.append(a,r),e.append(r,l),e.append(l,o),e.append(r,i),e.append(r,p),e.append(p,s),e.append(s,d),e.append(d,c),e.append(d,f),e.append(s,x),j.m(s,null),e.append(p,g),e.append(p,v),e.append(a,b),T&&T.m(a,null),e.append(a,y),M||(w=e.listen(v,"click",P),M=!0)},p(r,l){t=r,2&l&&k!==(k=t[12]+"")&&e.set_data(o,k),2&l&&_!==(_=n.simple(new Date(t[13]))+"")&&e.set_data(f,_),D===(D=C(t))&&j?j.p(t,l):(j.d(1),j=D(t),j&&(j.c(),j.m(s,null))),t[15]?T?T.p(t,l):(T=h(t),T.c(),T.m(a,y)):T&&(T.d(1),T=null)},d(t){t&&e.detach(a),j.d(),T&&T.d(),M=!1,w()}}}function x(t){let n,l,o,i,p,s,d,u,m,h,x,b,y,M,w,k,_,C,D,j,P,T,A,L,N,U,q,E,H,I,S,R,$,F,G,J,V,W,z,B,K,O,Q,X,Y,Z,ee,te=t[0],ne=[];for(let e=0;e<te.length;e+=1)ne[e]=c(r(t,te,e));let ae=t[1],re=[];for(let e=0;e<ae.length;e+=1)re[e]=f(a(t,ae,e));return{c(){n=e.element("div"),l=e.element("h1"),l.textContent="Account settings",o=e.space(),i=e.element("div"),p=e.element("div"),s=e.element("h2"),s.textContent="Profile Information",d=e.space(),u=e.element("div"),m=e.element("img"),x=e.space(),b=e.element("ul"),y=e.element("li"),M=e.element("span"),M.textContent="Name:",w=e.space(),k=e.element("span"),k.textContent=`${g}`,_=e.space(),C=e.element("li"),D=e.element("span"),D.textContent="Github Account:",j=e.space(),P=e.element("span"),P.textContent=`${v}`,T=e.space(),A=e.element("div"),L=e.element("h2"),L.textContent="User Email",N=e.space(),U=e.element("ul");for(let e=0;e<ne.length;e+=1)ne[e].c();q=e.space(),E=e.element("div"),E.innerHTML='<h2 class="text-2xl font-bold mt-8">Email Notification Preferences</h2>',H=e.space(),I=e.element("div"),S=e.element("h2"),S.textContent="API Access",R=e.space(),$=e.element("p"),$.innerHTML="If you want to use plugin commands from the command line, you\n                will need to login with <code>cargo quill login (token)</code> using\n                one of the tokens listed below.",F=e.space(),G=e.element("p"),G.innerHTML="When working in shared environments, supplying the token on the\n                command line could expose it to prying eyes. To avoid this,\n                enter <code>cargo login</code> and supply your token when prompted.",J=e.space(),V=e.element("div"),V.innerHTML='<h3 class="text-xl mt-4">Tokens</h3>',W=e.space(),z=e.element("ul"),B=e.element("li"),K=e.element("div"),O=e.element("input"),Q=e.space(),X=e.element("button"),X.textContent="Create",Y=e.space();for(let e=0;e<re.length;e+=1)re[e].c();e.attr(l,"class","text-4xl font-bold mt-8"),e.attr(s,"class","text-xl font-bold mt-8"),m.src!==(h="https://avatars.githubusercontent.com/u/1496019?v=4&s=170")&&e.attr(m,"src","https://avatars.githubusercontent.com/u/1496019?v=4&s=170"),e.attr(m,"alt",g),e.attr(m,"class","h-16 w-16 mr-4"),e.attr(M,"class","font-bold"),e.attr(D,"class","font-bold"),e.attr(u,"class","flex items-center px-8 py-4 shadow border-l-4 border-feather-light m-4"),e.attr(L,"class","text-2xl font-bold mt-8"),e.attr(U,"class","p-4"),e.attr(S,"class","text-2xl font-bold mt-8"),e.attr(V,"class","flex justify-between px-4 mt-4"),e.attr(O,"type","text"),e.attr(O,"class","flex flex-1 px-4 py-2 border border-feather-light box-border mr-4"),e.attr(O,"placeholder","New token name"),e.attr(X,"class","bg-feather-dark text-white px-4 py-2 hover:text-feather-light font-bold"),e.attr(K,"class","flex justify-between"),e.attr(B,"class","shadow border-l-4 border-feather-light mt-4 p-4"),e.attr(z,"class","px-4"),e.attr(i,"class","flex flex-col"),e.attr(n,"class","container mx-auto flex flex-col px-4 my-8")},m(a,r){e.insert(a,n,r),e.append(n,l),e.append(n,o),e.append(n,i),e.append(i,p),e.append(p,s),e.append(p,d),e.append(p,u),e.append(u,m),e.append(u,x),e.append(u,b),e.append(b,y),e.append(y,M),e.append(y,w),e.append(y,k),e.append(b,_),e.append(b,C),e.append(C,D),e.append(C,j),e.append(C,P),e.append(i,T),e.append(i,A),e.append(A,L),e.append(A,N),e.append(A,U);for(let e=0;e<ne.length;e+=1)ne[e].m(U,null);e.append(i,q),e.append(i,E),e.append(i,H),e.append(i,I),e.append(I,S),e.append(I,R),e.append(I,$),e.append(I,F),e.append(I,G),e.append(I,J),e.append(I,V),e.append(I,W),e.append(I,z),e.append(z,B),e.append(B,K),e.append(K,O),e.set_input_value(O,t[2]),e.append(K,Q),e.append(K,X),e.append(z,Y);for(let e=0;e<re.length;e+=1)re[e].m(z,null);Z||(ee=[e.listen(O,"input",t[9]),e.listen(X,"click",t[10])],Z=!0)},p(t,[n]){if(1&n){let e;for(te=t[0],e=0;e<te.length;e+=1){const a=r(t,te,e);ne[e]?ne[e].p(a,n):(ne[e]=c(a),ne[e].c(),ne[e].m(U,null))}for(;e<ne.length;e+=1)ne[e].d(1);ne.length=te.length}if(4&n&&O.value!==t[2]&&e.set_input_value(O,t[2]),10&n){let e;for(ae=t[1],e=0;e<ae.length;e+=1){const r=a(t,ae,e);re[e]?re[e].p(r,n):(re[e]=f(r),re[e].c(),re[e].m(z,null))}for(;e<re.length;e+=1)re[e].d(1);re.length=ae.length}},i:e.noop,o:e.noop,d(t){t&&e.detach(n),e.destroy_each(ne,t),e.destroy_each(re,t),Z=!1,e.run_all(ee)}}}const g="Jacob Emil Ulvedal Rosborg",v="Defman";function b(e,t,n){const a=[{email:"jacob@rosborg.dk",verified:!1}];let r=[{name:"macbook",use_count:4,timestamp:0},{name:"windows",use_count:0,timestamp:0,token:"asdjkasdhASduhaj"}],l="";function o(e){n(1,r=r.filter((({name:t})=>t!==e)))}function i(e){n(1,r=[{name:e,use_count:0,timestamp:0,token:"adsjhasdhjuiq"},...r])}return[a,r,l,o,i,function(e,t){e[t].edited_email=this.value,n(0,a)},(e,t,r,l)=>{n(0,r[l].email=t,a),n(0,r[l].edited_email="",a)},(e,t,r)=>{n(0,t[r].edited_email="",a)},(e,t,r,l)=>{n(0,r[l].edited_email=t,a)},function(){l=this.value,n(2,l)},()=>{i(l),n(2,l=void 0)},e=>o(e)]}class y extends e.SvelteComponent{constructor(t){super(),e.init(this,t,b,x,e.safe_not_equal,{})}}export default y;
//# sourceMappingURL=index-07666296.js.map
