import{Component as t,createRef as e,useEffect as i,useState as o,createContext as r,useContext as n,useRef as a,forwardRef as l,useImperativeHandle as d}from"react";import*as s from"react-dom/server";import{Icon as p}from"@mdi/react";import{mdiClose as c}from"@mdi/js";import h from"jquery";import"./index.css";import{AddToAttrs as u}from"aio-utils";import $ from"animejs/lib/anime.es.js";import{jsx as m}from"react/jsx-runtime";import{Fragment as _}from"react/jsx-runtime";import{jsxs as f}from"react/jsx-runtime";import{createElement as g}from"react";function _defineProperty(t,e,i){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}export default class v{constructor(t){_defineProperty(this,"rtl",void 0),_defineProperty(this,"render",void 0),_defineProperty(this,"addModal",void 0),_defineProperty(this,"addHighlight",void 0),_defineProperty(this,"removeHighlight",void 0),_defineProperty(this,"addAlert",void 0),_defineProperty(this,"removeModal",void 0),_defineProperty(this,"addSnackebar",void 0),_defineProperty(this,"getModals",void 0),_defineProperty(this,"addConfirm",void 0),_defineProperty(this,"addPrompt",void 0),_defineProperty(this,"popupId",void 0),_defineProperty(this,"popupsRef",void 0),_defineProperty(this,"highlightRef",void 0);let{rtl:i=!1}=t||{};this.rtl=i,this.addSnackebar=()=>{},this.popupsRef=e(),this.highlightRef=e(),this.getModals=()=>{let t=this.popupsRef.current;return null===t?[]:t.getModals()||[]},this.addModal=t=>{let e=this.popupsRef.current;null!==e&&e.addModal(t)},this.addHighlight=t=>{let e=this.highlightRef.current;null!==e&&e.addHighlight(t)},this.removeModal=t=>{let e=this.popupsRef.current;null!==e&&e.removeModal(t)},this.removeHighlight=()=>{let t=this.highlightRef.current;null!==t&&t.removeHighlight()},this.render=()=>{let t={rtl:i,getActions:({add:t})=>this.addSnackebar=t};return f(_,{children:[m(Popups,{rtl:i,ref:this.popupsRef}),m(Snackebar,{...t}),m(Highlight,{ref:this.highlightRef})]})},this.addAlert=t=>Alert(t),this.addConfirm=t=>{let{title:e,subtitle:i,text:o,submitText:r="Yes",canselText:n="No",onSubmit:a,onCansel:l=()=>{},setAttrs:d=()=>({})}=t,s={position:"center",setAttrs(t){let e=d(t);return"modal"===t?u(e,{className:"aio-popup-confirm"}):e},header:{title:e,subtitle:i},body:()=>o,footer:()=>f(_,{children:[m("button",{type:"button",onClick:()=>{l(),this.removeModal()},children:n}),m("button",{type:"button",className:"active",onClick:async()=>{if(a)!1!==await a()&&this.removeModal()},children:r})]})};this.addModal(s)},this.addPrompt=t=>{let{title:e,subtitle:i,text:o,submitText:r="Submit",canselText:n="close",onSubmit:a,onCansel:l=()=>{},setAttrs:d=()=>({})}=t,s={position:"center",setAttrs(t){let e=d(t);return"modal"===t?u(e,{className:"aio-popup-prompt"}):e},state:{temp:""},header:{title:e,subtitle:i},body:({state:t,setState:e})=>m("textarea",{placeholder:o,value:t.temp,onChange(t){e&&e({temp:t.target.value})}}),footer:({state:t,setState:e})=>f(_,{children:[m("button",{type:"button",onClick:()=>{l(),this.removeModal()},children:n}),m("button",{type:"button",className:"active",onClick:async()=>{if(a)!1!==await a(t.temp)?this.removeModal():e({temp:""})},disabled:!t.temp,children:r})]})};this.addModal(s)}}};let Popups=l((t,e)=>{let[i,r]=o([]),n=a(i);n.current=i;let{rtl:l}=t;function s(t){void 0===t.id&&(t.id="popup"+Math.round(1e6*Math.random()));let e=t;r(i=>[...i.filter(({id:e})=>e!==t.id),e])}async function p(t="last"){if("all"===t){r([]);return}if(!n.current.length)return;"last"===t&&(t=n.current[n.current.length-1].id);let e=n.current.find(e=>e.id===t);e&&(h(`[data-id=${t}]`).addClass("not-mounted"),setTimeout(()=>{"function"==typeof e.onClose&&e.onClose(),r(e=>e.filter(e=>e.id!==t))},300))}function c(){return n.current.map((t,e)=>m(Popup,{modal:t,rtl:l,isLast:e===n.current.length-1,onClose:()=>p(t.id)},t.id))}d(e,()=>({addModal:s,removeModal:p,getModals:()=>n.current}));let u=c();return u.length?m(_,{children:u}):null}),CTX=r({});function Popup(t){let{modal:r,rtl:n,onClose:l,isLast:d}=t,{setAttrs:s=()=>({}),id:p,position:c="fullscreen",body:$,getTarget:_,maxHeight:g,fixStyle:v=t=>t,fitTo:b}=r,[y]=o({dom:e(),backdropDom:e(),dui:void 0,isDown:!1}),[k,C]=o({}),[L,w]=o(r.state),M=s("modal")||{},x=s("backdrop")||{},N=a(!1);async function H(){l()}function P(t){if(!y.dui)return;let e=h(t.target);"popover"===c&&e.attr("data-id")!==y.dui&&!e.parents(`[data-id=${y.dui}]`).length&&H()}i(()=>()=>{h(window).unbind("click",P)}),i(()=>{let t="popover"===c?function t(){if(!_)return{};let e=_();if(!e||!e.length)return{};let i={dom:h(y.dom.current),target:e,fitHorizontal:r.fitHorizontal,fixStyle:v,pageSelector:r.pageSelector,limitTo:r.limitTo,fitTo:b,attrs:M,rtl:n},o={...Align(i),position:"absolute"};return g&&(o.maxHeight=g),o}():{};if(console.log("updatedStyle.top",t.top),C(t),_){y.dui="a"+Math.round(1e7*Math.random());_().attr("data-id",y.dui)}setTimeout(()=>{let t=h(y.dom.current);t.removeClass("not-mounted"),h(y.backdropDom.current).removeClass("not-mounted"),t.focus()},0),h(window).unbind("click",P),h(window).bind("click",P)},[]);function S(t){if(d)27===t.keyCode&&l()}function A(){setTimeout(()=>y.isDown=!1,0)}let T,B,R,I;return m(CTX.Provider,{value:{close:H,state:L,setState:w},children:m("div",{...(T="aio-popup-backdrop",T+=` aio-popup-position-${c}`,T+=n?" rtl":" ltr",N&&(T+=" not-mounted"),u(x,{className:T,attrs:{ref:y.backdropDom,onKeyDown:S,tabIndex:0,"data-id":p,onClick:x.onClick?x.onClick:function t(e){if(!y.isDown){e.stopPropagation();h(e.target).hasClass("aio-popup-backdrop")&&H()}}}})),children:f("div",{...(B={...k,...M.style},R="ontouchstart"in document.documentElement?"onTouchStart":"onMouseDown",{...M,ref:y.dom,"data-id":r.id,tabIndex:0,onKeyDown:S,[R]:function t(e){h(window).unbind("mouseup",A),h(window).bind("mouseup",A),y.isDown=!0},className:(I="aio-popup",I+=n?" rtl":" ltr",N&&(I+=" not-mounted"),M.className&&(I+=" "+M.className),I),style:{...B}}),children:[!!r.header&&m(ModalHeader,{modal:r}),m(ModalBody,{modal:r}),!!r.footer&&m("div",{...u(s("footer"),{className:"aio-popup-footer"}),children:r.footer({state:L,setState:w,close:H})})]})})})}let ModalHeader=t=>{let e=n(CTX),{modal:i}=t,{state:o,setState:r}=e,{setAttrs:a=()=>({})}=i,l=a("modal")||{};if("function"==typeof i.header)return i.header({close:e.close,state:o,setState:r});if("object"!=typeof i.header)return null;let d="aio-popup-header",{title:s,subtitle:h,onClose:$,before:_,after:g}=i.header;function v(t){t.stopPropagation(),t.preventDefault(),"function"==typeof $?$({state:o,setState:r}):e.close()}function b(){return h?f("div",{className:`${d}-text`,children:[m("div",{className:`${d}-title`,children:s}),m("div",{className:`${d}-subtitle`,children:h})]}):m("div",{className:`${d}-title`,style:{display:"flex",alignItems:"center",flex:1},children:s})}return f("div",{...u(l,{className:d}),children:[void 0!==_&&m("div",{className:`${d}-before`,onClick:t=>v(t),children:_}),!!s&&b(),void 0!==g&&m("div",{className:`${d}-after`,onClick:t=>v(t),children:g}),!1!==$&&m("div",{className:`${d}-close-button`,onClick:t=>v(t),children:m(p,{path:c,size:.8})})]})},ModalBody=t=>{let{state:e,setState:i,close:o}=n(CTX),{modal:r}=t,{body:a=()=>null,setAttrs:l=()=>({})}=r,d=l("body")||{},s=a({close:o,state:e,setState:i});return s&&null!==s?m("div",{...u(d,{className:"aio-popup-body aio-popup-scroll"}),children:s}):null};function Alert(t){let{icon:e,type:i="",text:o="",subtext:r="",time:n=10,className:a,closeText:l="بستن",position:d="center",onClose:p}=t,c={id:"",time:0,getId:()=>"aa"+Math.round(1e8*Math.random()),getBarRender:()=>`<div class='aio-popup-time-bar' style="width:${c.time}%;"></div>`,updateBarRender(){h(`.aio-popup-alert-container.${c.id} .aio-popup-time`).html(c.getBarRender())},getRender:()=>`
      <div class='aio-popup-alert-container not-mounted ${c.id} aio-popup-alert-container-${d}'>
        <div class='aio-popup-alert aio-popup-alert-${i}'>
          <div class='aio-popup-alert-header'>${c.getIcon()}</div>
          <div class='aio-popup-alert-body aio-popup-scroll'>
            <div class='aio-popup-alert-text'>${s.renderToStaticMarkup(o)}</div>
            <div class='aio-popup-alert-subtext'>${r}</div>
          </div>
          <div class='aio-popup-alert-footer'>
            <button class='aio-popup-alert-close ${c.id}'>${l}</button>
          </div>
          <div class='aio-popup-time'></div>
        </div>
      </div>
    `,close(){c.toggleClass(!1),setTimeout(()=>{"function"==typeof p&&p(),!1!==p&&h("."+c.id).remove()},200)},getIcon:()=>!1===e?"":e||({error:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg>',warning:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16"></path></svg>',info:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>',success:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>'})[i]||"",startTimer(){setTimeout(()=>{if(c.time>=100){c.time=100,c.close();return}c.time+=2,c.updateBarRender(),c.startTimer()},n/50*1e3)},toggleClass(t){let e=h(`.${c.id}`);t?setTimeout(()=>e.removeClass("not-mounted"),0):e.addClass("not-mounted")},render(){h("body").append(c.getRender()),h("button."+c.id).off("click",c.close),h("button."+c.id).on("click",c.close),c.toggleClass(!0)}};c.id=c.getId(),c.render(),n&&c.startTimer()}class Snackebar extends t{constructor(t){super(t),this.state={items:[]},t.getActions({add:this.add.bind(this)})}add(t){let{items:e}=this.state,i=[...e,{...t,id:"a"+Math.round(1e9*Math.random())}];this.setState({items:i})}remove(t,e){if(!1===e)return;let{items:i}=this.state,o=i.filter((e,i)=>e.id!==t);this.setState({items:o}),"function"==typeof e&&e()}render(){let{items:t}=this.state,{rtl:e}=this.props;return m(_,{children:t.map((t,i)=>g(SnackebarItem,{rtl:e,item:t,index:i,onRemove:e=>this.remove(e,t.onClose),key:t.id}))})}}function SnackebarItem(t){var e;let{item:r,onRemove:n,index:a,rtl:l}=t,{time:d=8,id:s,text:p,type:c,subtext:u,action:$,onClose:_,verticalAlign:g="end",horizontalAlign:v="center",icon:b,attrs:y={}}=r;"start"!==g&&"end"!==g&&(g="end",console.error('aio-popup error => snackebar item .verticalAlign should be "start" or "end"')),"start"!==v&&"end"!==v&&"center"!==v&&(v="center",console.error('aio-popup error => snackebar item .horizontalAlign should be "start" or "end" or "center"'));let[k,C]=o(!1);function L(){C(!1),setTimeout(()=>{n(s)},200)}i(()=>{setTimeout(()=>C(!0),0),setTimeout(()=>L(),1e3*d)},[]);let w,M,x,N;return w="aio-popup-snackebar-item-container",w+=` aio-popup-snackebar-item-container-horizontal-align-${v}`,k&&(w+=" mounted"),l&&(w+=" rtl"),M=function t(e){let i=h(".aio-popup-snackebar-item-container"),o={start:12,end:12};for(let r=0;r<e;r++){let n=i.eq(r),a=n.height()+6,l=n.attr("data-vertical-align");o[l]+=a}return{["start"===g?"top":"bottom"]:o[g]}}(a),x={"data-vertical-align":g,className:w,style:M,onClick:!1===_?void 0:()=>L()},m("div",{...x,children:(N="aio-popup-snackebar-item",N+=` aio-popup-snackebar-item-${c}`,y.className&&(N+=` ${y.className}`),f("div",{...{...y,className:N,style:y.style},children:[m("div",{className:"aio-popup-snackebar-item-icon",children:b||("error"===(e=c)||"warning"===e||"info"===e?m("svg",{viewBox:"0 0 24 24",role:"presentation",style:{width:"1.2rem",height:"1.2rem"},children:m("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",style:{fill:"currentcolor"}})}):m("svg",{viewBox:"0 0 24 24",role:"presentation",style:{width:"1.2rem",height:"1.2rem"},children:m("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",style:{fill:"currentcolor"}})}))})," ",f("div",{className:"aio-popup-snackebar-item-text",children:[m("div",{className:"aio-popup-snackebar-item-uptext",children:p}),!!u&&m("div",{className:"aio-popup-snackebar-item-subtext",children:u})]})," ",$&&$.text?m("button",{className:"aio-popup-snackebar-item-action",onClick(t){t.stopPropagation(),$.onClick(),L()},children:$.text}):null," ",m("div",{className:"aio-popup-snackebar-bar",style:{transition:`${d}s linear`}}),"  "]}))})}function Align(t){let{dom:e,target:i,fitHorizontal:o,fixStyle:r=t=>t,attrs:n={},fitTo:a,pageSelector:l,rtl:d,limitTo:s}=t,p={getDomLimit(t,e){if(a&&"popover"===e){let i=t.parents(a);if(i.length){let{left:o,top:r}=i.offset(),n=i.width(),d=i.height();return{left:o,top:r,right:o+n,bottom:r+d,width:n,height:d}}}let s=t.offset(),p=s.left-window.pageXOffset,c=s.top-window.pageYOffset;if(l&&"page"!==e){let u=h(l);try{let{left:$,top:m}=u.offset()||{left:0,top:0};p-=$,c-=m}catch{}}let _=t.outerWidth(),f=t.outerHeight(),g=p+_,v=c+f;return{left:p,top:c,right:g,bottom:v,width:_,height:f}},getPageLimit(){let t=l?h(l):void 0;t=Array.isArray(t)&&0===t.length?void 0:t;let e=window.innerWidth,i=window.innerHeight,o=t?p.getDomLimit(t,"page"):{left:0,top:0,right:e,bottom:i};return o.left<0&&(o.left=0),o.right>e&&(o.right=e),o.top<0&&(o.top=0),o.bottom>i&&(o.bottom=i),o},getRelatedToLmit(){if(!s)return;let t=e.parents(s);if(!t.length)return;let i=t.offset(),o=i.left-window.pageXOffset,r=i.top-window.pageYOffset,n=t.outerWidth(),a=t.outerHeight();return{left:o,top:r,right:o+n,bottom:r+a,width:n,height:a}},align(){let t=p.getPageLimit(),l=p.getDomLimit(i,"target"),s=p.getDomLimit(e,"popover"),c;if(!a){if(s.top=l.bottom,s.bottom=s.top+s.height,o)s.width=l.width,s.left=l.left,s.right=l.left+l.width;else{let h=p.getRelatedToLmit()||t;d?(s.right=l.right,s.left=s.right-s.width,s.left<h.left&&(s.left=h.left)):(s.left=l.left,s.right=s.left+s.width,s.right>h.right&&(s.left=h.right-s.width))}s.bottom>t.bottom?s.height>l.top-t.top?s.top=t.bottom-s.height:s.top=l.top-s.height:s.top=l.bottom,s.height>t.bottom-t.top&&(s.top=6,s.bottom=void 0,s.height=t.bottom-t.top-12,c="auto")}let u;return r({left:s.left,top:s.top,width:s.width,height:a?s.height:void 0,overflowY:c,...n.style},{targetLimit:l,pageLimit:t})}};return p.align()}let Highlight=l((t,e)=>{let[i,r]=o(!1),[n,l]=o({Left:0,Top:0,Width:0,Height:0,TopSpace:0,BottomSpace:0}),s=a(),p=s.current,c=a(n);function h(t){let e=L("padding",6),i=t.offset(),o=i.left-window.pageXOffset,r=i.top-window.pageYOffset,n=window.innerHeight,a=t.outerWidth(),l=t.outerHeight();return{Left:o-1*e,Top:r-1*e,Width:a+2*e,Height:l+2*e,TopSpace:r,BottomSpace:n-(r+l)}}function g(){let t=L("easing",void 0);var e=["linear","easeInQuad","easeInSine","easeInCirc","easeInBack","easeOutQuad","easeOutSine","easeOutCirc","easeInOutQuad","easeInOutSine","easeInOutBack","easeOutBounce"];return"number"==typeof t?e[t]||e[0]:t}function v(){l({Left:0,Top:0,Width:0,Height:0,TopSpace:0,BottomSpace:0}),r(!1)}function b(t){let{dom:e}=t;s.current=t,r(!0),setTimeout(()=>{try{let t=L("duration",1200);e[0].scrollIntoView();let i=h(e),o=g(),r={...i,targets:[{...c.current}],duration:t,update(t){let{animatables:e}=t;l({...e[0].target})}};o&&(r.easing=o),$(r)}catch{alert(`
          aio-highlighter error => connot find dom
        `)}},0)}function y(t){return m("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",...t,children:f("g",{children:[m("path",{d:"M242.1,45.2c7.7-7.7,20.2-7.7,27.8-0.1l0.1,0.1l236.3,236.3c7.7,7.7,7.7,20.2,0,27.9c-7.7,7.7-20.2,7.7-27.9,0 L256,86.9L33.7,309.3c-7.7,7.7-20.2,7.7-27.9,0c-7.7-7.7-7.7-20.2,0-27.9L242.1,45.2z"}),m("path",{d:"M242.1,202.7c7.7-7.7,20.2-7.7,27.8-0.1l0.1,0.1L506.2,439c7.7,7.7,7.7,20.2,0,27.9c-7.7,7.7-20.2,7.7-27.9,0 L256,244.5L33.7,466.9c-7.7,7.7-20.2,7.7-27.9,0c-7.7-7.7-7.7-20.2,0-27.9L242.1,202.7z"})]})})}function k(t,e,i){return m("div",{className:"aio-popup-highlight-arrow",children:y({width:24,height:24,style:{position:"absolute",height:24,width:24,left:e+i/2-12},className:`aio-popup-highlight-arrow-${t}`})})}function C(t){if(!p||!p.html)return"";let e,i=p.html||"",o=m("div",{className:"aio-popup-highlight-space"}),r=m("div",{className:"aio-popup-highlight-html",children:i}),n=k(t,c.current.Left,c.current.Width);return e="top"===t?f(_,{children:[o,r,n]}):f(_,{children:[n,r,o]}),m("div",{className:"aio-popup-highlight-html-container",children:e})}function L(t,e){if(!p||null===p)return e;let i=p[t];return void 0===i?e:i}function w(){!L("mouseAccess",!1)&&null!=p&&p.onClick&&p.onClick()}function M(t){let e="",i=0,o="aio-popup-highlight-mask",r=c.current;return"top"===t?(i=r.Top,r.TopSpace>r.BottomSpace&&(e=C("top"))):"bottom"===t?(o+=" aio-popup-highlight-mask-flex",r.TopSpace<=r.BottomSpace&&(e=C("bottom"))):"left"===t?i=r.Left:o+=" aio-popup-highlight-mask-flex",m("div",{className:o,style:{["top"===t||"bottom"===t?"height":"width"]:i},onClick:()=>w(),children:e})}function x(){let t=L("mouseAccess",!1);return m("div",{style:{width:n.Width},className:"aio-popup-highlight-focus-container",onClick:t?void 0:()=>w(),children:m("div",{className:"aio-popup-highlight-focus"})})}function N(){return f("div",{className:"aio-popup-highlight-main",style:{height:n.Height},children:[M("left"),x(),M("right")]})}if(c.current=n,d(e,()=>({addHighlight:b,removeHighlight:v})),!i)return null;function H(){let t=L("mouseAccess",!1);return{pointerEvents:t?"none":"all"}}let P=u(L("attrs",{}),{className:"aio-popup-highlight",style:H()});return f("div",{...P,children:[M("top"),N(),M("bottom")]})});