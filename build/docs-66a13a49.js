import{i as t,p as e}from"./main.js";function n(e){let n,o,p,a,s;return{c(){n=t.element("h1"),o=t.text("Docs for "),p=t.text(e[0]),a=t.space(),s=t.text(e[1])},m(e,r){t.insert(e,n,r),t.append(n,o),t.append(n,p),t.append(n,a),t.append(n,s)},p(e,[n]){1&n&&t.set_data(p,e[0]),2&n&&t.set_data(s,e[1])},i:t.noop,o:t.noop,d(e){e&&t.detach(n)}}}function o(n,o,p){let a,s,r;return t.component_subscribe(n,e,(t=>p(2,r=t))),n.$$.update=()=>{4&n.$$.dirty&&p(0,a=r.id),4&n.$$.dirty&&p(1,s=r.version)},[a,s,r]}class p extends t.SvelteComponent{constructor(e){super(),t.init(this,e,o,n,t.safe_not_equal,{})}}export default p;
//# sourceMappingURL=docs-66a13a49.js.map
