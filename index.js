/**version 3.2.0 */
function _defineProperty(t,e,o){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}import t,{Component as e,createRef as o,useEffect as i}from"react";import*as s from"react-dom/server";import{Icon as r}from"@mdi/react";import{mdiClose as a,mdiChevronRight as l,mdiChevronLeft as n}from"@mdi/js";import p from"react-virtual-dom";import d from"jquery";import"./index.css";import{jsx as h}from"react/jsx-runtime";import{Fragment as m}from"react/jsx-runtime";import{jsxs as c}from"react/jsx-runtime";export default class u{constructor(t={}){_defineProperty(this,"render",()=>c(m,{children:[h(Popups,{rtl:this.rtl,getActions:({addModal:t,removeModal:e,getModals:o})=>{this._addModal=t,this._removeModal=e,this._getModals=o}}),h(AIOSnackeBar,{rtl:this.rtl,getActions:({add:t})=>{this._addSnakebar=t}})]})),_defineProperty(this,"getModals",()=>this._getModals()),_defineProperty(this,"addModal",(t={},e=!0)=>{void 0===t.id&&(t.id="popup"+Math.round(1e6*Math.random())),this._addModal(t,e)}),_defineProperty(this,"addConfirm",t=>{let{title:e,subtitle:o,text:i,submitText:s="بله",canselText:r="خیر",onSubmit:a,onCansel:l=()=>{},attrs:n={}}=t,p="aio-popup-confirm";n.className&&(p+=" "+n.className);let d={position:"center",attrs:{...n,className:p},header:{title:e,subtitle:o},backdrop:{attrs:{className:"rsa-backdrop"}},body:{render:()=>i},footer:{buttons:[[r,{onClick:()=>{l(),this.removeModal()}}],[s,{onClick:async()=>{!1!==await a()&&this.removeModal()},className:"active"}]]}};this.addModal(d)}),_defineProperty(this,"addPrompt",t=>{let{title:e,subtitle:o,text:i,submitText:s="تایید",canselText:r="بستن",onSubmit:a,onCansel:l=()=>{},attrs:n={}}=t,p="aio-popup-prompt";n.className&&(p+=" "+n.className);let d={position:"center",attrs:{...n,className:p},state:{temp:""},header:{title:e,subtitle:o},backdrop:{attrs:{className:"rsa-backdrop"}},body:{render:({state:t,setState:e})=>h("textarea",{placeholder:i,value:t.temp,onChange:t=>e({temp:t.target.value})})},footer:{buttons:[[r,{onClick:()=>{l(),this.removeModal()}}],[s,({state:t,setState:e})=>({onClick:async({state:t})=>{!1!==await a(t.temp)?this.removeModal():e({temp:""})},disabled:!t.temp,className:"active"})]]}};this.addModal(d)}),_defineProperty(this,"removeModal",(t,e=!0)=>{this._removeModal&&this._removeModal(t,e)}),_defineProperty(this,"addAlert",(t={})=>{let{icon:e,type:o="",text:i="",subtext:s="",time:r=10,className:a,closeText:l="بستن"}=t;Alert({icon:e,type:o,text:i,subtext:s,time:r,className:a,closeText:l})}),_defineProperty(this,"addSnakebar",(t={})=>{let{text:e,index:o,type:i,subtext:s,action:r={},time:a=6,rtl:l,onClose:n}=t;this._addSnakebar({text:e,index:o,type:i,subtext:s,action:r,time:a,rtl:l,onClose:n})}),this.rtl=t.rtl}};class Popups extends e{constructor(t){super(t),this.dom=o();let{getActions:e=()=>{}}=t;this.state={modals:[]},e({removeModal:this.removeModal.bind(this),addModal:this.addModal.bind(this),getModals:()=>[...this.state.modals]})}change(t){let{onChange:e=()=>{}}=this.props;for(let o in t)this.state[o]=t[o];this.setState(t,()=>e({...this.state}))}addModal(t,e=!0){if("object"!=typeof t){console.error("aio-popup => addModal modal parameter to add is not an object");return}if(void 0===t.id){console.error("aio-popup => addModal missing modal id property");return}let{modals:o}=this.state,i=o.filter(({id:e})=>e!==t.id);i.push({...t,mounted:"popover"!==t.position&&!e}),this.change({modals:i})}async removeModal(t="last",e=!0){if("all"===t)this.change({modals:[]});else{let{modals:o}=this.state;if(!o.length)return;"last"===t&&(t=o[o.length-1].id),this.mount(t,!1),setTimeout(()=>{let{modals:e}=this.state,o=e.find(e=>e.id===t);o&&(o.onClose&&o.onClose(),this.change({modals:e.filter(e=>e.id!==t)}))},e?300:0)}}mount(t="last",e){try{let{modals:o}=this.state;"last"===t&&(t=o[o.length-1].id);let i=o.map(o=>o.id===t?{...o,mounted:e}:o);this.change({modals:i})}catch{return}}getModals(){let{modals:t}=this.state;return t.length?t.map((e,o)=>{let{popover:i,position:s,text:r,onSubmit:a,rtl:l=this.props.rtl,attrs:n={},backdrop:p,header:d,state:m,footer:c,closeType:u,body:_,id:$,mounted:f}=e;return h(Popup,{id:$,backdrop:p,footer:c,text:r,onSubmit:a,header:d,popover:i,state:m,position:s,rtl:l,attrs:n,closeType:u,body:_,index:o,isLast:o===t.length-1,mounted:f,onClose:()=>this.removeModal($),removeModal:this.removeModal.bind(this),onMount:()=>this.mount($,!0)},$)}):null}render(){return h(m,{children:this.getModals()})}}class Popup extends e{constructor(t){super(t),this.dom=o(),this.backdropDom=o(),this.state={popoverStyle:void 0,state:t.state}}async onClose(t){let{onClose:e}=this.props;e(t)}componentWillUnmount(){d(window).unbind("click",this.handleBackClick)}updatePopoverStyle(){let{position:t}=this.props;if("popover"===t){let e=this.getPopoverStyle();JSON.stringify(e)!==JSON.stringify(this.state.popoverStyle)&&this.setState({popoverStyle:e})}}componentDidMount(){let{popover:t={},position:e}=this.props;if(setTimeout(()=>{let{mounted:t,onMount:o}=this.props;this.setState({popoverStyle:"popover"===e?this.getPopoverStyle():{}}),t||o()},0),t.getTarget){this.dui="a"+Math.round(1e7*Math.random());t.getTarget().attr("data-uniq-id",this.dui)}d(window).unbind("click",this.handleBackClick),d(window).bind("click",d.proxy(this.handleBackClick,this))}handleBackClick(t){if(!this.dui)return;let{position:e="fullscreen"}=this.props,o=d(t.target);"popover"===e&&o.attr("data-uniq-id")!==this.dui&&!o.parents(`[data-uniq-id=${this.dui}]`).length&&this.onClose()}header_layout(){let{rtl:t,header:e}=this.props;if("object"!=typeof e)return!1;let{state:o}=this.state;return{html:h(ModalHeader,{rtl:t,header:e,handleClose:t=>this.onClose(t),state:o,setState:t=>this.setState({state:t})}),className:"of-visible"}}body_layout(){let{body:t={}}=this.props,{state:e}=this.state;return{flex:1,html:h(ModalBody,{body:t,state:e,setState:t=>this.setState({state:t}),handleClose:this.onClose.bind(this),updatePopoverStyle:()=>this.updatePopoverStyle()})}}footer_layout(){let{closeText:t,submitText:e,onSubmit:o,footer:i,type:s}=this.props,{state:r}=this.state,a=this.onClose.bind(this);return{html:h(ModalFooter,{closeText:t,submitText:e,onSubmit:o,footer:i,type:s,handleClose:a,state:r,setState:t=>this.setState({state:t})})}}getBackDropClassName(){let{rtl:t,position:e="fullscreen",backdrop:o,mounted:i}=this.props,s="aio-popup-backdrop";return o&&o.attrs&&o.attrs.className&&(s+=" "+o.attrs.className),s+=` aio-popup-position-${e}`,s+=t?" rtl":" ltr",i||(s+=" not-mounted"),s}backClick(t){if(this.isDown)return;t.stopPropagation();let e=d(t.target),{backdrop:o={}}=this.props;!1!==o.close&&e.hasClass("aio-popup-backdrop")&&this.onClose()}getPopoverStyle(){let{popover:t={},rtl:e,attrs:o={}}=this.props,{getTarget:i,pageSelector:s,fitHorizontal:r,fixStyle:a=t=>t}=t;if(!i)return{};let l=i();if(!l||!l.length)return{};let n=d(this.dom.current);return{...Align(n,l,{fixStyle:a,pageSelector:s,fitHorizontal:r,style:o.style,rtl:e}),position:"absolute"}}keyDown(t){let{isLast:e,removeModal:o}=this.props;if(e)27===t.keyCode&&o()}mouseUp(){setTimeout(()=>this.isDown=!1,0)}mouseDown(t){d(window).unbind("mouseup",this.mouseUp),d(window).bind("mouseup",d.proxy(this.mouseUp,this)),this.isDown=!0}render(){let{rtl:t,attrs:e={},backdrop:o={},mounted:i}=this.props,{popoverStyle:s}=this.state,r={...o?o.attrs:{},className:this.getBackDropClassName(),onClick:!1===o?void 0:t=>this.backClick(t)},a={...s,...e.style,flex:"none"},l="aio-popup"+(t?" rtl":" ltr")+(i?"":" not-mounted")+(e.className?" "+e.className:""),n="ontouchstart"in document.documentElement?"onTouchStart":"onMouseDown";return h("div",{...r,ref:this.backdropDom,onKeyDown:this.keyDown.bind(this),tabIndex:0,children:h(p,{layout:{attrs:{...e,ref:this.dom,style:void 0,className:void 0,"data-uniq-id":this.dui,[n]:this.mouseDown.bind(this)},className:l,style:a,column:[this.header_layout(),this.body_layout(),this.footer_layout()]}})})}}function ModalHeader({rtl:t,header:e,handleClose:o,state:i,setState:s}){if("object"!=typeof e)return null;let{title:d,subtitle:m,buttons:c=[],onClose:u,backButton:_,attrs:$={}}=e;function f(){u?u({state:i,setState:s}):o({state:i,setState:s})}let g="aio-popup-header"+($.className?" "+$.className:""),v=$.style;return h(p,{layout:{attrs:$,className:g,style:v,row:[function e(){if(!_||!1===u)return!1;let o,i;return t?(o=l,i={marginLeft:12}):(o=n,i={marginRight:12}),{html:h(r,{path:o,size:1}),align:"vh",onClick:()=>f(),style:i}}(),!!d&&(m?{flex:1,align:"v",column:[{html:d,className:"aio-popup-title"},{html:m,className:"aio-popup-subtitle"}]}:{flex:1,align:"v",html:d,className:"aio-popup-title"}),!!c.length&&{gap:6,align:"vh",row:()=>c.map(([t,e={}])=>{let{onClick:r=()=>{},className:a}=e,l={...e};return l.className="aio-popup-header-button"+(a?" "+a:""),l.onClick=()=>r({close:o,state:i,setState:s}),{html:h("button",{...l,children:t}),align:"vh"}})},!_&&!1!==u&&{html:h(r,{path:a,size:.8}),align:"vh",onClick:()=>f(),className:"aio-popup-header-close-button"}]}})}function ModalBody(t){let{handleClose:e,body:o,updatePopoverStyle:s,state:r,setState:a}=t,{render:l,attrs:n={}}=o,p="function"==typeof l?l({close:e,state:r,setState:a}):l;return i(()=>{s()},[p]),h("div",{...n,className:"aio-popup-body"+(n.className?" "+n.className:""),children:"function"==typeof l&&p})}function ModalFooter({footer:t,handleClose:e,state:o,setState:i}){if("object"!=typeof t)return null;let{attrs:s={},buttons:r=[]}=t,a;return h("div",{className:"aio-popup-footer"+(s.className?" "+s.className:""),style:s.style,children:r.length?r.map(([t,s={}])=>{let r="function"==typeof s?{...s({state:o,setState:i})}:{...s},{onClick:a=()=>{},className:l}=r;return r.className="aio-popup-footer-button"+(l?" "+l:""),r.onClick=()=>a({close:e,state:o,setState:i}),h("button",{...r,children:t})}):null})}function Alert(t={}){let{icon:e,type:o,text:i,subtext:r,time:a,className:l,closeText:n}=t,p={time:0,getId:()=>"aa"+Math.round(1e8*Math.random()),getBarRender:()=>`<div class='aio-popup-time-bar' style="width:${p.time}%;"></div>`,updateBarRender(){d(`.aio-popup-alert-container.${p.id} .aio-popup-time`).html(p.getBarRender())},getRender:()=>`
      <div class='aio-popup-alert-container ${p.id}${l?"aio-popup"+l:""}'>
        <div class='aio-popup-alert aio-popup-alert-${o}'>
          <div class='aio-popup-alert-header'>${p.getIcon()}</div>
          <div class='aio-popup-alert-body'>
            <div class='aio-popup-alert-text'>${s.renderToStaticMarkup(i)}</div>
            <div class='aio-popup-alert-subtext'>${r}</div>
          </div>
          <div class='aio-popup-alert-footer'>
            <button class='aio-popup-alert-close ${p.id}'>${n}</button>    
          </div>
          <div class='aio-popup-time'></div>
        </div>    
      </div>
    `,close(){d("."+p.id).remove()},getIcon:()=>!1===e?"":e||({error:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg>',warning:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16"></path></svg>',info:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>',success:'<svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>'})[o]||"",startTimer(){setTimeout(()=>{if(p.time>=100){p.time=100,p.close();return}p.time+=2,p.updateBarRender(),p.startTimer()},a/50*1e3)},render(){d("body").append(p.getRender()),d("button."+p.id).off("click",p.close),d("button."+p.id).on("click",p.close)}};p.id=p.getId(),p.render(),a&&p.startTimer()}class AIOSnackeBar extends e{constructor(t){super(t),this.state={items:[]},t.getActions({add:this.add.bind(this)})}add(t){let{items:e}=this.state;this.setState({items:e.concat({...t,id:"a"+Math.round(1e9*Math.random())})})}remove(t){let{items:e}=this.state;this.setState({items:e.filter((e,o)=>e.id!==t)})}render(){let{items:t}=this.state,{rtl:e=!1}=this.props;return h(m,{children:t.map((t,o)=>h(SnackebarItem,{rtl:e,...t,index:o,onRemove:t=>this.remove(t)},t.id))})}}class SnackebarItem extends e{constructor(t){super(t),this.state={mounted:!1,timer:0,bottom:0}}componentDidMount(){let{time:t=8}=this.props;setTimeout(()=>this.setState({mounted:!0}),0),setTimeout(()=>this.remove(),1e3*t)}remove(t){let{onRemove:e,id:o}=this.props;this.setState({mounted:!1}),setTimeout(()=>{e(o),"function"==typeof t&&t()},200)}info_svg(){return h("svg",{viewBox:"0 0 24 24",role:"presentation",style:{width:"1.2rem",height:"1.2rem"},children:h("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",style:{fill:"currentcolor"}})})}success_svg(){return h("svg",{viewBox:"0 0 24 24",role:"presentation",style:{width:"1.2rem",height:"1.2rem"},children:h("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",style:{fill:"currentcolor"}})})}getSvg(t){return"error"===t||"warning"===t||"info"===t?this.info_svg():this.success_svg()}getBottom(t){let e=d(".aio-popup-snakebar-item-container"),o=12;for(let i=0;i<t;i++)o+=e.eq(i).height()+6;return o}render(){let{mounted:t}=this.state,{text:e,index:o,type:i,subtext:s,action:r,time:a,rtl:l,onClose:n}=this.props,p=this.getBottom(o);return h("div",{onClick:!1===n?void 0:()=>this.remove(n),className:"aio-popup-snakebar-item-container"+(t?" mounted":""),style:{bottom:p,direction:l?"rtl":void 0},children:c("div",{className:`aio-popup-snakebar-item aio-popup-snakebar-item-${i}`,children:[h("div",{className:"aio-popup-snakebar-item-icon",children:this.getSvg(i)}),c("div",{className:"aio-popup-snakebar-item-text",children:[h("div",{style:{textAlign:l?"right":"left"},children:e}),!!s&&h("div",{className:"aio-popup-snakebar-item-subtext",children:s})]}),!!r.text&&h("button",{className:"aio-popup-snakebar-item-action",onClick:t=>{t.stopPropagation(),r.onClick(),this.remove()},children:r.text}),h("div",{className:"aio-popup-snakebar-bar",style:{transition:`${a}s linear`,right:l?0:"unset",left:l?"unset":0}})]})})}}function Align(t,e,o={}){let{fitHorizontal:i,style:s,fixStyle:r=t=>t,pageSelector:a,rtl:l}=o,n={getDomLimit(t,e){let o=t.offset(),i=o.left-window.pageXOffset,s=o.top-window.pageYOffset;if(a&&"page"!==e){let r=d(a);try{let{left:l,top:n}=r.offset();i-=l,s-=n}catch{}}let p=t.outerWidth(),h=t.outerHeight(),m=i+p,c=s+h;return{left:i,top:s,right:m,bottom:c,width:p,height:h}},getPageLimit(t){let e=a?d(a):void 0;e=Array.isArray(e)&&0===e.length?void 0:e;let o=window.innerWidth,i=window.innerHeight,s=e?n.getDomLimit(e,"page"):{left:0,top:0,right:o,bottom:i};return s.left<0&&(s.left=0),s.right>o&&(s.right=o),s.top<0&&(s.top=0),s.bottom>i&&(s.bottom=i),s},align(){let o=n.getPageLimit(t),a=n.getDomLimit(e,"target"),p=n.getDomLimit(t,"popover");p.top=a.bottom,p.bottom=p.top+p.height,i?(p.width=a.width,p.left=a.left,p.right=a.left+a.width):l?(p.right=a.right,p.left=p.right-p.width,p.left<o.left&&(p.left=o.left)):(p.left=a.left,p.right=p.left+p.width,p.right>o.right&&(p.left=o.right-p.width)),p.bottom>o.bottom?p.height>a.top-o.top?p.top=o.bottom-p.height:p.top=a.top-p.height:p.top=a.bottom;let d;p.height>o.bottom-o.top&&(p.top=6,p.bottom=void 0,p.height=o.bottom-o.top-12,d="auto");let h={left:p.left,top:p.top,width:p.width,overflowY:d,...s};return r(h,{targetLimit:a,pageLimit:o})}};return n.align()}