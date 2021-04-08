(this["webpackJsonpreact-kanban"]=this["webpackJsonpreact-kanban"]||[]).push([[0],{55:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),c=(a(55),a(10)),s=a(11),d=a(14),l=a(13),u=a(12),b=a(16),j=a(42),h=a(20),p=a(9),f="CREATE_BOARD",O="RENAME_BOARD",m="DELETE_BOARD",v="CLEAR_BOARD",g="CREATE_TASK",k="EDIT_TASK",y="DELETE_TASK",x="TRANSFER_TASK ",C=a(17),w={boards:[{id:Object(C.v4)(),name:"TO DO",tasks:[{id:Object(C.v4)(),title:"Add Button"},{id:Object(C.v4)(),title:"Add ToolTip"}]},{id:Object(C.v4)(),name:"IN PROGRESS",tasks:[{id:Object(C.v4)(),title:"Add Header"},{id:Object(C.v4)(),title:"Add Footer"}]}]};var T=Object(b.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(Object(p.a)({},e),{},{boards:[].concat(Object(h.a)(e.boards),[t.payload])});case O:return Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{name:t.payload.newName}):e}))});case m:return Object(p.a)(Object(p.a)({},e),{},{boards:Object(h.a)(e.boards.filter((function(e){return e.id!==t.payload})))});case v:return Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload?Object.assign(e,{tasks:[]}):e}))});case g:return Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:[].concat(Object(h.a)(e.tasks),[{id:t.payload.id,title:t.payload.title}])}):e}))});case k:return Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(h.a)(e.tasks.filter((function(e){return e.id===t.payload.id?Object.assign(e,{title:t.payload.newTitle}):e})))}):e}))});case y:return Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(h.a)(e.tasks.filter((function(e){return e.id!==t.payload.id})))}):e}))});case x:var a=t.payload,n=a.transTask,r=a.prevBoardId,o=a.newBoardId;return r===o?e:Object(p.a)(Object(p.a)({},e),{},{boards:e.boards.map((function(e){return e.id===r?Object.assign(e,{tasks:Object(h.a)(e.tasks.filter((function(e){return e.id!==n.id})))}):e})),newBoards:e.boards.map((function(e){return e.id===o?Object.assign(e,{tasks:[].concat(Object(h.a)(e.tasks),[{id:n.id,title:n.title}])}):e}))});default:return e}}}),B=[j.a],S=Object(b.e)(T,{},Object(b.d)(b.a.apply(void 0,B))),A=(a(62),a(22)),N=a.n(A),D=a(27),E=a(83),I=a(70),R=a(71),L=a(72),W=a(73),_=a(28),F=a.n(_),P=a(81),K=a(1);var H=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(t){e.props.deleteTask(t,e.props.boardid)},e.handleEdit=function(){var t=Object(D.a)(N.a.mark((function t(a,n){var r,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.fire({title:"Input new title",input:"text",inputLabel:"New title for task: ".concat(n),inputPlaceholder:"Task Title",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(o=r.value)&&e.props.editTask(a,e.props.boardid,o);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.task,t=e.id,a=e.title;return(0,this.props.connectDragSource)(Object(K.jsx)("div",{style:U.TaskStyle,children:Object(K.jsx)(E.a,{children:Object(K.jsxs)(E.a.Body,{children:[a,Object(K.jsxs)(I.a,{style:{float:"right"},size:"sm",children:[Object(K.jsx)(R.a,{variant:"success",onClick:this.handleEdit.bind(this,t,a),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Rename Task",children:Object(K.jsx)(L.a,{})}),Object(K.jsx)(R.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete Task",children:Object(K.jsx)(W.a,{})})]})]})})}))}}]),a}(n.Component),U={TaskStyle:{marginTop:"1vh",marginBottom:"1vh"}};H=Object(P.a)("task",{beginDrag:function(e,t){return{task:e.task,prevBoard:e.boardid}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(H);var Y=Object(u.b)((function(e){return{board:e.board}}),{deleteTask:function(e,t){return function(a){a({type:y,payload:{id:e,boardId:t}})}},editTask:function(e,t,a){return function(n){n({type:k,payload:{id:e,boardId:t,newTitle:a}})}}})(H),q=a(75),z=a(21),J=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isCreateTask:!1,newTaskName:"",boardID:e.props.boardid},e.handleClick=function(){e.setState({isCreateTask:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createTask(e.state.boardID,e.state.newTaskName),e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e.handleChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(K.jsx)("div",{children:this.state.isCreateTask?Object(K.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(K.jsxs)("div",{className:"mb-3",children:[Object(K.jsx)("label",{className:"form-label font-weight-bold",children:"Title:"}),Object(K.jsx)("input",{type:"text",name:"newTaskName",className:"form-control",placeholder:"Add the Title ...",value:this.state.newTaskName,onChange:this.handleChange,required:!0})]}),Object(K.jsx)(R.a,{variant:"outline-danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(K.jsx)(R.a,{variant:"outline-primary",type:"submit",style:{float:"right"},children:"Add"})]}):Object(K.jsx)("div",{children:Object(K.jsx)(R.a,{onClick:this.handleClick,block:!0,children:"Add Task"})})})}}]),a}(n.Component),M=Object(u.b)((function(e){return{board:e.board}}),{createTask:function(e,t){return function(a){var n={id:Object(C.v4)(),title:t,boardId:e};a({type:g,payload:n})}}})(J),V=a(82);var G=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChangeName=function(){var t=Object(D.a)(N.a.mark((function t(a,n){var r,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.fire({title:"Input new name",input:"text",inputLabel:"New name for board: ".concat(n),inputPlaceholder:"Board Name",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(o=r.value)&&e.props.renameBoard(a,o);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleClear=function(t){e.props.clearBoard(t)},e.handleDelete=function(t){e.props.deleteBoard(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.column,t=e.id,a=e.name,n=e.tasks;return(0,this.props.connectDropTarget)(Object(K.jsx)("div",{style:this.props.style,children:Object(K.jsxs)(E.a,{children:[Object(K.jsxs)(E.a.Header,{children:[Object(K.jsx)("strong",{children:a}),Object(K.jsxs)(I.a,{style:{float:"right"},children:[Object(K.jsx)(R.a,{variant:"success",onClick:this.handleChangeName.bind(this,t,a),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Rename Board",children:Object(K.jsx)(L.a,{})}),Object(K.jsx)(R.a,{variant:"primary",onClick:this.handleClear.bind(this,t),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Clear Board",children:Object(K.jsx)(q.a,{})}),Object(K.jsx)(R.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete Board",children:Object(K.jsx)(W.a,{})})]})]}),Object(K.jsx)(E.a.Body,{children:n.map((function(e){return Object(K.jsx)(Y,{task:e,boardid:t},e.id)}))}),Object(K.jsx)(E.a.Footer,{children:Object(K.jsx)(M,{boardid:t})})]})}))}}]),a}(n.Component);G=Object(V.a)("task",{drop:function(e,t,a){var n=t.getItem();return e.transferTask(n,e.column.id),n}},(function(e,t){return{connectDropTarget:e.dropTarget()}}))(G);var $=Object(u.b)((function(e){return{board:e.board}}),{renameBoard:function(e,t){return function(a){a({type:O,payload:{boardId:e,newName:t}})}},clearBoard:function(e){return function(t){t({type:v,payload:e})}},deleteBoard:function(e){return function(t){t({type:m,payload:e})}},transferTask:function(e,t){return function(a){var n={transTask:e.task,prevBoardId:e.prevBoard,newBoardId:t};a({type:x,payload:n})}}})(G),Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isCreateBoard:!1,newBoardName:""},e.handleClick=function(){e.setState({isCreateBoard:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createBoard(e.state.newBoardName),e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e.handleChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(K.jsx)("div",{style:this.props.style,children:this.state.isCreateBoard?Object(K.jsx)(E.a,{children:Object(K.jsx)(E.a.Body,{children:Object(K.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(K.jsxs)("div",{className:"mb-3",children:[Object(K.jsx)("label",{className:"form-label font-weight-bold",children:"Name:"}),Object(K.jsx)("input",{type:"text",name:"newBoardName",className:"form-control",placeholder:"Add the name ...",value:this.state.newBoardName,onChange:this.handleChange,required:!0})]}),Object(K.jsx)(R.a,{variant:"outline-danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(K.jsx)(R.a,{variant:"outline-primary",type:"submit",style:{float:"right"},children:"Add"})]})})}):Object(K.jsx)("div",{children:Object(K.jsx)(R.a,{onClick:this.handleClick,size:"lg",block:!0,children:"Add Board"})})})}}]),a}(n.Component),X=Object(u.b)((function(e){return{board:e.board}}),{createBoard:function(e){return function(t){var a={id:Object(C.v4)(),name:e,tasks:[]};t({type:f,payload:a})}}})(Q),Z=a(77),ee=a(78),te=a(80),ae=a(76),ne=a(46),re=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.board.boards;return Object(K.jsx)(ae.a,{backend:ne.a,children:Object(K.jsxs)(Z.a,{children:[e.map((function(e){return Object(K.jsx)(ee.a,{md:3,children:Object(K.jsx)($,{column:e,style:oe.ColumnStyle})},e.id)})),e.length<5?Object(K.jsx)(ee.a,{md:3,children:Object(K.jsx)(X,{style:oe.ColumnStyle})}):Object(K.jsx)(ee.a,{md:3,children:Object(K.jsx)(te.a,{variant:"info",style:oe.ColumnStyle,children:"Amount of boards exhausted. You can only create 5 boards"})})]})})}}]),a}(n.Component),oe={ColumnStyle:{marginTop:"2vh",marginBottom:"2vh"}},ie=Object(u.b)((function(e){return{board:e.board}}),{})(re),ce=a(79),se=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(K.jsx)(u.a,{store:S,children:Object(K.jsx)("div",{style:de.mainContentStyle,children:Object(K.jsxs)(ce.a,{fluid:!0,children:[Object(K.jsx)("h3",{children:Object(K.jsx)("strong",{children:"Kanban Clone"})}),Object(K.jsx)(ie,{})]})})})}}]),a}(n.Component),de={mainContentStyle:{paddingLeft:0,paddingRight:0,minHeight:"100vh",background:"#ECECEC"}},le=se,ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(le,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-kanban-clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-kanban-clone","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}(),je()}},[[65,1,2]]]);
//# sourceMappingURL=main.555fbf90.chunk.js.map