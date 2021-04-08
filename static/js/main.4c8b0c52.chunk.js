(this["webpackJsonpreact-kanban"]=this["webpackJsonpreact-kanban"]||[]).push([[0],{55:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=(a(55),a(10)),s=a(11),d=a(14),l=a(13),u=a(12),b=a(16),j=a(42),h=a(20),p=a(21),f=a(9),O="CREATE_BOARD",v="RENAME_BOARD",m="DELETE_BOARD",g="CLEAR_BOARD",k="CREATE_TASK",y="EDIT_TASK",x="DELETE_TASK",C="TRANSFER_TASK ",w=a(17),T={boards:[{id:Object(w.v4)(),name:"TO DO",tasks:[{id:Object(w.v4)(),title:"Add Button"},{id:Object(w.v4)(),title:"Add ToolTip"}]},{id:Object(w.v4)(),name:"NOW",tasks:[{id:Object(w.v4)(),title:"Add Header"},{id:Object(w.v4)(),title:"Add Footer"}]}]};var B=Object(b.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),{},{boards:[].concat(Object(p.a)(e.boards),[t.payload])});case v:return Object(f.a)(Object(f.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{name:t.payload.newName}):e}))});case m:return Object(f.a)(Object(f.a)({},e),{},{boards:Object(p.a)(e.boards.filter((function(e){return e.id!==t.payload})))});case g:return Object(f.a)(Object(f.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload?Object.assign(e,{tasks:[]}):e}))});case k:return Object(f.a)(Object(f.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:[].concat(Object(p.a)(e.tasks),[{id:t.payload.id,title:t.payload.title}])}):e}))});case y:return Object(f.a)(Object(f.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id===t.payload.id?Object.assign(e,{title:t.payload.newTitle}):e})))}):e}))});case x:return Object(f.a)(Object(f.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id!==t.payload.id})))}):e}))});case C:var a=t.payload,n=a.transTask,r=a.prevBoardId,c=a.newBoardId;return r===c?e:Object(f.a)(Object(f.a)({},e),{},Object(h.a)({boards:e.boards.map((function(e){return e.id===r?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id!==n.id})))}):e}))},"boards",e.boards.map((function(e){return e.id===c?Object.assign(e,{tasks:[].concat(Object(p.a)(e.tasks),[{id:n.id,title:n.title}])}):e}))));default:return e}}}),S=[j.a],N=Object(b.e)(B,{},Object(b.d)(b.a.apply(void 0,S))),A=(a(62),a(22)),D=a.n(A),E=a(27),I=a(83),R=a(70),L=a(71),W=a(72),_=a(73),F=a(28),P=a.n(F),K=a(81),H=a(1);var U=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(t){e.props.deleteTask(t,e.props.boardid)},e.handleEdit=function(){var t=Object(E.a)(D.a.mark((function t(a,n){var r,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.fire({title:"Input new title",input:"text",inputLabel:"New title for task: ".concat(n),inputPlaceholder:"Task Title",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(c=r.value)&&e.props.editTask(a,e.props.boardid,c);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.task,t=e.id,a=e.title,n=this.props,r=(n.isDragging,n.connectDragSource);n.src;return r(Object(H.jsx)("div",{style:q.TaskStyle,children:Object(H.jsx)(I.a,{children:Object(H.jsxs)(I.a.Body,{children:[a,Object(H.jsxs)(R.a,{style:{float:"right"},size:"sm",children:[Object(H.jsx)(L.a,{variant:"success",onClick:this.handleEdit.bind(this,t,a),children:Object(H.jsx)(W.a,{})}),Object(H.jsx)(L.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),children:Object(H.jsx)(_.a,{})})]})]})})}))}}]),a}(n.Component),q={TaskStyle:{marginTop:"1vh",marginBottom:"1vh"}};U=Object(K.a)("task",{beginDrag:function(e,t){return{task:e.task,prevBoard:e.boardid}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(U);var z=Object(u.b)((function(e){return{board:e.board}}),{deleteTask:function(e,t){return function(a){a({type:x,payload:{id:e,boardId:t}})}},editTask:function(e,t,a){return function(n){n({type:y,payload:{id:e,boardId:t,newTitle:a}})}}})(U),J=a(75),M=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isCreateTask:!1,newTaskName:"",boardID:e.props.boardid},e.handleClick=function(){e.setState({isCreateTask:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createTask(e.state.boardID,e.state.newTaskName),e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(H.jsx)("div",{children:this.state.isCreateTask?Object(H.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(H.jsxs)("div",{className:"mb-3",children:[Object(H.jsx)("label",{className:"form-label font-weight-bold",children:"Name:"}),Object(H.jsx)("input",{type:"text",name:"newTaskName",className:"form-control",placeholder:"Add the Title ...",value:this.state.newTaskName,onChange:this.handleChange,required:!0})]}),Object(H.jsx)(L.a,{variant:"danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(H.jsx)(L.a,{variant:"primary",type:"submit",style:{float:"right"},children:"Add"})]}):Object(H.jsx)("div",{children:Object(H.jsx)(L.a,{onClick:this.handleClick,block:!0,children:"Add Task"})})})}}]),a}(n.Component),V=Object(u.b)((function(e){return{board:e.board}}),{createTask:function(e,t){return function(a){var n={id:Object(w.v4)(),title:t,boardId:e};a({type:k,payload:n})}}})(M),Y=a(82);var $=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChangeName=function(){var t=Object(E.a)(D.a.mark((function t(a,n){var r,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.fire({title:"Input new name",input:"text",inputLabel:"New name for board: ".concat(n),inputPlaceholder:"Board Name",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(c=r.value)&&e.props.renameBoard(a,c);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleClear=function(t){e.props.clearBoard(t)},e.handleDelete=function(t){e.props.deleteBoard(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.column,t=e.id,a=e.name,n=e.tasks;return(0,this.props.connectDropTarget)(Object(H.jsx)("div",{style:this.props.style,children:Object(H.jsxs)(I.a,{children:[Object(H.jsxs)(I.a.Header,{children:[Object(H.jsx)("strong",{children:a}),Object(H.jsxs)(R.a,{style:{float:"right"},children:[Object(H.jsx)(L.a,{variant:"success",onClick:this.handleChangeName.bind(this,t,a),children:Object(H.jsx)(W.a,{})}),Object(H.jsx)(L.a,{variant:"primary",onClick:this.handleClear.bind(this,t),children:Object(H.jsx)(J.a,{})}),Object(H.jsx)(L.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),children:Object(H.jsx)(_.a,{})})]})]}),Object(H.jsx)(I.a.Body,{children:n.map((function(e){return Object(H.jsx)(z,{task:e,boardid:t},e.id)}))}),Object(H.jsx)(I.a.Footer,{children:Object(H.jsx)(V,{boardid:t})})]})}))}}]),a}(n.Component);$=Object(Y.a)("task",{drop:function(e,t,a){var n=t.getItem();return e.transferTask(n,e.column.id),n}},(function(e,t){return{connectDropTarget:e.dropTarget()}}))($);var G=Object(u.b)((function(e){return{board:e.board}}),{renameBoard:function(e,t){return function(a){a({type:v,payload:{boardId:e,newName:t}})}},clearBoard:function(e){return function(t){t({type:g,payload:e})}},deleteBoard:function(e){return function(t){t({type:m,payload:e})}},transferTask:function(e,t){return function(a){var n={transTask:e.task,prevBoardId:e.prevBoard,newBoardId:t};a({type:C,payload:n})}}})($),Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isCreateBoard:!1,newBoardName:""},e.handleClick=function(){e.setState({isCreateBoard:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createBoard(e.state.newBoardName),e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(H.jsx)("div",{style:this.props.style,children:this.state.isCreateBoard?Object(H.jsx)(I.a,{children:Object(H.jsx)(I.a.Body,{children:Object(H.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(H.jsxs)("div",{className:"mb-3",children:[Object(H.jsx)("label",{className:"form-label font-weight-bold",children:"Name:"}),Object(H.jsx)("input",{type:"text",name:"newBoardName",className:"form-control",placeholder:"Add the name ...",value:this.state.newBoardName,onChange:this.handleChange,required:!0})]}),Object(H.jsx)(L.a,{variant:"danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(H.jsx)(L.a,{variant:"primary",type:"submit",style:{float:"right"},children:"Add"})]})})}):Object(H.jsx)("div",{children:Object(H.jsx)(L.a,{onClick:this.handleClick,size:"lg",block:!0,children:"Add Board"})})})}}]),a}(n.Component),X=Object(u.b)((function(e){return{board:e.board}}),{createBoard:function(e){return function(t){var a={id:Object(w.v4)(),name:e,tasks:[]};t({type:O,payload:a})}}})(Q),Z=a(77),ee=a(78),te=a(80),ae=a(76),ne=a(46),re=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.board.boards;return Object(H.jsx)(ae.a,{backend:ne.a,children:Object(H.jsxs)(Z.a,{children:[e.map((function(e){return Object(H.jsx)(ee.a,{md:3,children:Object(H.jsx)(G,{column:e,style:ce.ColumnStyle},e.id)})})),e.length<5?Object(H.jsx)(ee.a,{md:3,children:Object(H.jsx)(X,{style:ce.ColumnStyle})}):Object(H.jsx)(ee.a,{md:3,children:Object(H.jsx)(te.a,{variant:"info",style:ce.ColumnStyle,children:"Amount of boards exceeded"})})]})})}}]),a}(n.Component),ce={ColumnStyle:{marginTop:"2vh",marginBottom:"2vh"}},ie=Object(u.b)((function(e){return{board:e.board}}),{})(re),oe=a(79),se=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(H.jsx)(u.a,{store:N,children:Object(H.jsx)("div",{style:de.mainContentStyle,children:Object(H.jsxs)(oe.a,{fluid:!0,children:[Object(H.jsx)("h3",{children:Object(H.jsx)("strong",{children:"Kanban Clone"})}),Object(H.jsx)(ie,{})]})})})}}]),a}(n.Component),de={mainContentStyle:{paddingLeft:0,paddingRight:0,minHeight:"100vh",background:"#ECECEC"}},le=se,ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(le,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-kanban-clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-kanban-clone","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}(),je()}},[[65,1,2]]]);
//# sourceMappingURL=main.4c8b0c52.chunk.js.map