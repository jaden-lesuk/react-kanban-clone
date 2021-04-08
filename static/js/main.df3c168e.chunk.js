(this["webpackJsonpreact-kanban"]=this["webpackJsonpreact-kanban"]||[]).push([[0],{55:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),s=(a(55),a(10)),o=a(11),d=a(14),l=a(13),b=a(12),u=a(16),j=a(42),h=a(20),p=a(21),O=a(9),f="CREATE_BOARD",m="RENAME_BOARD",v="DELETE_BOARD",y="CLEAR_BOARD",k="CREATE_TASK",g="EDIT_TASK",x="DELETE_TASK",C="TRANSFER_TASK ",T=a(17),B={boards:[{id:Object(T.v4)(),name:"TO DO",tasks:[{id:Object(T.v4)(),title:"Add Button"},{id:Object(T.v4)(),title:"Add ToolTip"}]},{id:Object(T.v4)(),name:"NOW",tasks:[{id:Object(T.v4)(),title:"Add Header"},{id:Object(T.v4)(),title:"Add Footer"}]}]};var w=Object(u.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),{},{boards:[].concat(Object(p.a)(e.boards),[t.payload])});case m:return Object(O.a)(Object(O.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{name:t.payload.newName}):e}))});case v:return Object(O.a)(Object(O.a)({},e),{},{boards:Object(p.a)(e.boards.filter((function(e){return e.id!==t.payload})))});case y:return Object(O.a)(Object(O.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload?Object.assign(e,{tasks:[]}):e}))});case k:return Object(O.a)(Object(O.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:[].concat(Object(p.a)(e.tasks),[{id:t.payload.id,title:t.payload.title}])}):e}))});case g:return Object(O.a)(Object(O.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id===t.payload.id?Object.assign(e,{title:t.payload.newTitle}):e})))}):e}))});case x:return Object(O.a)(Object(O.a)({},e),{},{boards:e.boards.map((function(e){return e.id===t.payload.boardId?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id!==t.payload.id})))}):e}))});case C:var a=t.payload,n=a.transTask,r=a.prevBoardId,c=a.newBoardId;return r===c?e:Object(O.a)(Object(O.a)({},e),{},Object(h.a)({boards:e.boards.map((function(e){return e.id===r?Object.assign(e,{tasks:Object(p.a)(e.tasks.filter((function(e){return e.id!==n.id})))}):e}))},"boards",e.boards.map((function(e){return e.id===c?Object.assign(e,{tasks:[].concat(Object(p.a)(e.tasks),[{id:n.id,title:n.title}])}):e}))));default:return e}}}),S=[j.a],N=Object(u.e)(w,{},Object(u.d)(u.a.apply(void 0,S))),A=(a(62),a(22)),D=a.n(A),E=a(27),I=a(83),R=a(70),L=a(71),_=a(72),F=a(73),K=a(28),P=a.n(K),H=a(81),q=a(1);var z=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(t){e.props.deleteTask(t,e.props.boardid)},e.handleEdit=function(){var t=Object(E.a)(D.a.mark((function t(a,n){var r,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.fire({title:"Input new title",input:"text",inputLabel:"New title for task: ".concat(n),inputPlaceholder:"Task Title",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(c=r.value)&&e.props.editTask(a,e.props.boardid,c);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.task,t=e.id,a=e.title,n=this.props,r=(n.isDragging,n.connectDragSource);n.src;return r(Object(q.jsx)("div",{style:J.TaskStyle,children:Object(q.jsx)(I.a,{children:Object(q.jsxs)(I.a.Body,{children:[a,Object(q.jsxs)(R.a,{style:{float:"right"},size:"sm",children:[Object(q.jsx)(L.a,{variant:"success",onClick:this.handleEdit.bind(this,t,a),children:Object(q.jsx)(_.a,{})}),Object(q.jsx)(L.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),children:Object(q.jsx)(F.a,{})})]})]})})}))}}]),a}(n.Component),J={TaskStyle:{marginTop:"1vh",marginBottom:"1vh"}};z=Object(H.a)("task",{beginDrag:function(e,t){return{task:e.task,prevBoard:e.boardid}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(z);var M=Object(b.b)((function(e){return{board:e.board}}),{deleteTask:function(e,t){return function(a){a({type:x,payload:{id:e,boardId:t}})}},editTask:function(e,t,a){return function(n){n({type:g,payload:{id:e,boardId:t,newTitle:a}})}}})(z),V=a(75),Y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isCreateTask:!1,newTaskName:"",boardID:e.props.boardid},e.handleClick=function(){e.setState({isCreateTask:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createTask(e.state.boardID,e.state.newTaskName),e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newTaskName:""}),e.setState({isCreateTask:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(q.jsx)("div",{children:this.state.isCreateTask?Object(q.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(q.jsxs)("div",{className:"mb-3",children:[Object(q.jsx)("label",{className:"form-label font-weight-bold",children:"Name:"}),Object(q.jsx)("input",{type:"text",name:"newTaskName",className:"form-control",placeholder:"Add the Title ...",value:this.state.newTaskName,onChange:this.handleChange,required:!0})]}),Object(q.jsx)(L.a,{variant:"danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(q.jsx)(L.a,{variant:"primary",type:"submit",style:{float:"right"},children:"Add"})]}):Object(q.jsx)("div",{children:Object(q.jsx)(L.a,{onClick:this.handleClick,block:!0,children:"Add Task"})})})}}]),a}(n.Component),W=Object(b.b)((function(e){return{board:e.board}}),{createTask:function(e,t){return function(a){var n={id:Object(T.v4)(),title:t,boardId:e};a({type:k,payload:n})}}})(Y),G=a(82);var Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChangeName=function(){var t=Object(E.a)(D.a.mark((function t(a,n){var r,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.fire({title:"Input new name",input:"text",inputLabel:"New name for board: ".concat(n),inputPlaceholder:"Board Name",showCancelButton:!0,inputValidator:function(e){return!e&&"You need to write something!"}});case 2:r=t.sent,(c=r.value)&&e.props.renameBoard(a,c);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleClear=function(t){e.props.clearBoard(t)},e.handleDelete=function(t){e.props.deleteBoard(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.column,t=e.id,a=e.name,n=e.tasks;return(0,this.props.connectDropTarget)(Object(q.jsx)("div",{style:this.props.style,children:Object(q.jsxs)(I.a,{children:[Object(q.jsxs)(I.a.Header,{children:[Object(q.jsx)("strong",{children:a}),Object(q.jsxs)(R.a,{style:{float:"right"},children:[Object(q.jsx)(L.a,{variant:"success",onClick:this.handleChangeName.bind(this,t,a),children:Object(q.jsx)(_.a,{})}),Object(q.jsx)(L.a,{variant:"primary",onClick:this.handleClear.bind(this,t),children:Object(q.jsx)(V.a,{})}),Object(q.jsx)(L.a,{variant:"danger",onClick:this.handleDelete.bind(this,t),children:Object(q.jsx)(F.a,{})})]})]}),Object(q.jsx)(I.a.Body,{children:n.map((function(e){return Object(q.jsx)(M,{task:e,boardid:t},e.id)}))}),Object(q.jsx)(I.a.Footer,{children:Object(q.jsx)(W,{boardid:t})})]})}))}}]),a}(n.Component);Q=Object(G.a)("task",{drop:function(e,t,a){var n=t.getItem();return e.transferTask(n,e.column.id),n}},(function(e,t){return{connectDropTarget:e.dropTarget()}}))(Q);var U=Object(b.b)((function(e){return{board:e.board}}),{renameBoard:function(e,t){return function(a){a({type:m,payload:{boardId:e,newName:t}})}},clearBoard:function(e){return function(t){t({type:y,payload:e})}},deleteBoard:function(e){return function(t){t({type:v,payload:e})}},transferTask:function(e,t){return function(a){var n={transTask:e.task,prevBoardId:e.prevBoard,newBoardId:t};a({type:C,payload:n})}}})(Q),X=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isCreateBoard:!1,newBoardName:""},e.handleClick=function(){e.setState({isCreateBoard:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.createBoard(e.state.newBoardName),e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleCancel=function(){e.setState({newBoardName:""}),e.setState({isCreateBoard:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(q.jsx)("div",{style:this.props.style,children:this.state.isCreateBoard?Object(q.jsx)(I.a,{children:Object(q.jsx)(I.a.Body,{children:Object(q.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(q.jsxs)("div",{className:"mb-3",children:[Object(q.jsx)("label",{className:"form-label font-weight-bold",children:"Name:"}),Object(q.jsx)("input",{type:"text",name:"newBoardName",className:"form-control",placeholder:"Add the name ...",value:this.state.newBoardName,onChange:this.handleChange,required:!0})]}),Object(q.jsx)(L.a,{variant:"danger",onClick:this.handleCancel,style:{float:"left"},children:"Cancel"}),Object(q.jsx)(L.a,{variant:"primary",type:"submit",style:{float:"right"},children:"Add"})]})})}):Object(q.jsx)("div",{children:Object(q.jsx)(L.a,{onClick:this.handleClick,size:"lg",block:!0,children:"Add Board"})})})}}]),a}(n.Component),Z=Object(b.b)((function(e){return{board:e.board}}),{createBoard:function(e){return function(t){var a={id:Object(T.v4)(),name:e,tasks:[]};t({type:f,payload:a})}}})(X),$=a(77),ee=a(78),te=a(80),ae=a(76),ne=a(46),re=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.board.boards;return Object(q.jsx)(ae.a,{backend:ne.a,children:Object(q.jsxs)($.a,{children:[e.map((function(e){return Object(q.jsx)(ee.a,{md:3,children:Object(q.jsx)(U,{column:e,style:ce.ColumnStyle},e.id)})})),e.length<5?Object(q.jsx)(ee.a,{md:3,children:Object(q.jsx)(Z,{style:ce.ColumnStyle})}):Object(q.jsx)(ee.a,{md:3,children:Object(q.jsx)(te.a,{variant:"info",style:ce.ColumnStyle,children:"Amount of boards exceeded"})})]})})}}]),a}(n.Component),ce={ColumnStyle:{marginTop:"2vh",marginBottom:"2vh"}},ie=Object(b.b)((function(e){return{board:e.board}}),{})(re),se=a(79),oe=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(q.jsx)(b.a,{store:N,children:Object(q.jsx)("div",{style:de.mainContentStyle,children:Object(q.jsxs)(se.a,{fluid:!0,children:[Object(q.jsx)("h3",{children:"Kanban Clone"}),Object(q.jsx)(ie,{})]})})})}}]),a}(n.Component),de={mainContentStyle:{paddingLeft:0,paddingRight:0,minHeight:"100vh",background:"#ECECEC"}},le=oe,be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(le,{})}),document.getElementById("root")),be()}},[[65,1,2]]]);
//# sourceMappingURL=main.df3c168e.chunk.js.map