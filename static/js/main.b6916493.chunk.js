(this["webpackJsonptasks-in-react"]=this["webpackJsonptasks-in-react"]||[]).push([[0],[,,function(e,t,a){e.exports={affair:"Affairs_affair__pNSrw",boxAffair:"Affairs_boxAffair__1GtGN",boxButton:"Affairs_boxButton__3-Tok",affairItem:"Affairs_affairItem__1rzMl",priority:"Affairs_priority__2CY4L",buttonAffair:"Affairs_buttonAffair__11yuV",button:"Affairs_button__1JmUf"}},,function(e,t,a){e.exports={boxMessage:"Message_boxMessage__3x9Kq",messageItem:"Message_messageItem__37qn1",messageBox:"Message_messageBox__3WUaa",itemName:"Message_itemName__2zLgb",message:"Message_message__3fsAS",time:"Message_time__YI-U-"}},function(e,t,a){e.exports={greeting:"Greeting_greeting__19d9y",error:"Greeting_error__7tB8C",errorInput:"Greeting_errorInput__1ot_F",input:"Greeting_input__2K4io",button:"Greeting_button__1XcC_",count:"Greeting_count__2YH01"}},,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__2AQ-g",errorInput:"SuperInputText_errorInput__3tcAI",error:"SuperInputText_error__2WB5B"}},,function(e,t,a){e.exports={blue:"HW4_blue__Q1OYQ",column:"HW4_column__2NQWM",testSpanError:"HW4_testSpanError__3hKEB"}},function(e,t,a){e.exports={button:"SuperButton_button__1keYJ",default:"SuperButton_default__3cBO2",red:"SuperButton_red__gSkBv"}},,function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__LqrMd",spanClassName:"SuperCheckbox_spanClassName__3WxCh"}},,function(e,t,a){e.exports={App:"App_App__1jttw"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),s=a.n(c),i=(a(22),a(16)),o=a.n(i),l=a(4),j=a.n(l),u=a(0);var b=function(e){return Object(u.jsx)("div",{className:j.a.boxMessage,children:Object(u.jsxs)("div",{className:j.a.messageItem,children:[Object(u.jsx)("img",{src:e.avatar,alt:"foto"}),Object(u.jsxs)("div",{className:j.a.messageBox,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:j.a.itemName,children:e.name}),Object(u.jsx)("div",{className:j.a.message,children:e.message})]}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]})]})})},d="https://www.meme-arsenal.com/memes/74a9592e66a76c818ed95c1216487fa7.jpg",m="Elena",f="Hey! How are you?",h="22:00";var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(b,{avatar:d,name:m,message:f,time:h}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=a(3),O=a(2),p=a.n(O);var g=function(e){return Object(u.jsxs)("div",{className:p.a.affair,children:[Object(u.jsx)("div",{className:p.a.affairItem,children:e.affair.name}),Object(u.jsxs)("div",{className:p.a.priority,children:["[",e.affair.priority,"]"]}),Object(u.jsx)("button",{className:p.a.buttonAffair,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"delete"})]})};var v=function(e){var t=e.data.map((function(t){return Object(u.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:p.a.boxAffair,children:[t,Object(u.jsxs)("div",{className:p.a.boxButton,children:[Object(u.jsx)("button",{className:"".concat(p.a.button," ").concat(p.a.active),onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:"".concat(p.a.button," ").concat(p.a.active),onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:"".concat(p.a.button," ").concat(p.a.active),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:"".concat(p.a.button," ").concat(p.a.active),onClick:function(){e.setFilter("low")},children:"Low"})]})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(N),t=Object(_.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(_.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},k=a(17),y=a(5),A=a.n(y),w=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?A.a.errorInput:A.a.input;return Object(u.jsxs)("div",{className:A.a.greeting,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:a,className:s}),Object(u.jsx)("div",{className:A.a.error,children:r})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:A.a.button,onClick:n,disabled:!t,children:"add"}),Object(u.jsx)("span",{className:A.a.count,children:c})]})]})},S=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(_.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(_.a)(o,2),j=l[0],b=l[1],d=t.length;return Object(u.jsx)(w,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&b("")):(i(""),b("Name is required!"))},addUser:function(){a(s),alert("Hello ".concat(s," !")),i("")},error:j,totalUsers:d})},I=a(26);var B=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(S,{users:a,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};r([].concat(Object(k.a)(a),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},M=a(6),T=a(7),E=a(9),U=a.n(E),W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(U.a.error," ").concat(s||""),l="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:l},i)),c&&Object(u.jsx)("span",{className:o,children:c})]})},G=a(11),H=a.n(G),F=a(12),K=a.n(F),Y=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,["red","className"]),r="".concat(K.a.button," ").concat(t?K.a.red:K.a.default," ").concat(a);return Object(u.jsx)("button",Object(M.a)({className:r},n))},q=a(14),J=a.n(q),L=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(J.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(u.jsx)("span",{className:J.a.spanClassName,children:r})]})};var Q=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(_.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:H.a.column,children:[Object(u.jsx)(W,{value:a,onChangeText:r,onEnter:s,error:c,spanClassName:H.a.testSpanError}),Object(u.jsx)(W,{className:H.a.blue}),Object(u.jsx)(Y,{children:"default"}),Object(u.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(Y,{disabled:!0,children:"disabled"}),Object(u.jsx)(L,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(L,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var P=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(x,{}),Object(u.jsx)(C,{}),Object(u.jsx)(B,{}),Object(u.jsx)(Q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.b6916493.chunk.js.map