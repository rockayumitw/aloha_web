(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,l,e){"use strict";e.r(l);var r={layout:"inner-page",components:{},data:function(){return{nowPanelName:"",panelsName:["edit","orderSearch","application"]}},mounted:function(){this.nowPanelName="edit"},methods:{isActive:function(t){this.nowPanelName=t}}},o=e(31),component=Object(o.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("section",{staticClass:"member-center"},[e("b-container",[e("b-row",[e("b-col",{attrs:{md:"2",sm:"12",order:"1","order-sm":"1","order-md":"1","order-lg":"1"}},[e("h4",{staticClass:"font-weight-bold text-label-member mb-xxs-28 d-none d-md-block"},[t._v("會員中心")]),t._v(" "),e("ul",{staticClass:"member-menu"},[e("li",{staticClass:"mb-xxs-24",class:"edit"==t.nowPanelName?"active":"",on:{click:function(l){return t.isActive("edit")}}},[t._v("會員資料修改")]),t._v(" "),e("li",{staticClass:"mb-xxs-24",class:"orderSearch"==t.nowPanelName?"active":"",on:{click:function(l){return t.isActive("orderSearch")}}},[t._v("訂單查詢")]),t._v(" "),e("li",{staticClass:"mb-xxs-24",class:"application"==t.nowPanelName?"active":"",on:{click:function(l){return t.isActive("application")}}},[t._v("退/換貨申請")])])]),t._v(" "),e("b-col",{attrs:{md:"7",sm:"12",order:"3","order-sm":"3","order-md":"2","order-lg":"2"}},["edit"==t.nowPanelName?e("div",{staticClass:"member-pane form-group text-oslogray"},[e("h5",{staticClass:"font-weight-bold mb-0"},[t._v("個人資料修改")]),t._v(" "),e("hr",{staticClass:"text-label-member mt-2"}),t._v(" "),e("b-row",{staticClass:"mb-4"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member"},[t._v("會員帳號")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[t._v(" email@example.com ")])],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-center"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"userName"}},[t._v("會員姓名")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg input-radius",attrs:{type:"text",id:"userName",name:"userName","aria-label":"First name"}})])],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-center"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"sex"}},[t._v("性別")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:"sex"}},[e("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("女")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("男")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("other")])])])],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-center"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"email"}},[t._v("電子信箱")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg",attrs:{type:"text",id:"email",name:"email","aria-label":"email"}})])],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-center"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"phone"}},[t._v("手機號碼")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg",attrs:{type:"text",id:"phone",name:"phone","aria-label":"phone"}})])],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-start"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"address"}},[t._v("聯絡地址")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:"area"}},[e("option",{attrs:{selected:""}},[t._v("台灣及離島")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("台灣")])])]),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}}),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:""}},[e("option",{attrs:{selected:""}},[t._v("縣市")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("高雄市")])])]),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:""}},[e("option",{attrs:{selected:""}},[t._v("區域")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("苓雅區")])])]),t._v(" "),e("b-col",[e("input",{staticClass:"rounded input-lg mb-2",attrs:{type:"text",placeholder:"請輸入地址"}}),t._v(" "),e("b-form-checkbox",{staticClass:"text-label-member",attrs:{id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}},[t._v(" 我願意收到最新優惠情報 ")])],1)],1)],1)],1),t._v(" "),e("b-row",{staticClass:"mb-4 align-items-start"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"address"}},[t._v("配送地址")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{sm:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:"area"}},[e("option",{attrs:{selected:""}},[t._v("台灣及離島")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("台灣")])])]),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{sm:"6"}}),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{sm:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:""}},[e("option",{attrs:{selected:""}},[t._v("縣市")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("高雄市")])])]),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{sm:"6"}},[e("select",{staticClass:"custom-select input-lg",attrs:{id:""}},[e("option",{attrs:{selected:""}},[t._v("區域")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("苓雅區")])])]),t._v(" "),e("b-col",{attrs:{sm:"6"}}),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{sm:"12"}},[e("input",{staticClass:"input-lg border-radius",attrs:{type:"text",placeholder:"請輸入地址"}})]),t._v(" "),e("b-col",[e("input",{staticClass:"btn btn-brown btn-md input-lg",attrs:{type:"button",value:"確定修改"}})])],1)],1)],1),t._v(" "),e("h5",{staticClass:"font-weight-bold mb-0"},[t._v("個人資料修改")]),t._v(" "),e("hr",{staticClass:"text-label-member mt-2"}),t._v(" "),e("b-row",{staticClass:"mb-xxs-16 mb-sm-20 align-items-start"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"oldPassword"}},[t._v("舊密碼")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg",attrs:{type:"password",id:"oldPassword",name:"oldPassword","aria-label":"oldPassword"}})])],1),t._v(" "),e("b-row",{staticClass:"mb-xxs-16 mb-sm-20 align-items-start"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"newPassword"}},[t._v("新密碼")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg",attrs:{type:"password",id:"newPassword",name:"newPassword","aria-label":"newPassword"}})])],1),t._v(" "),e("b-row",{staticClass:"mb-xxs-16 mb-sm-20 align-items-start"},[e("b-col",{attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"againNewPassword"}},[t._v("確認密碼")])]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"form-control input-lg",attrs:{type:"password",id:"againNewPassword",name:"againNewPassword","aria-label":"againNewPassword"}})])],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"d-none d-sm-block",attrs:{sm:"2",md:"3",lg:"2"}},[e("label",{staticClass:"text-label-member",attrs:{for:"againNewPassword"}})]),t._v(" "),e("b-col",{attrs:{sm:"10",md:"9",lg:"10"}},[e("input",{staticClass:"btn btn-brown btn-md input-lg",attrs:{type:"button",value:"變更密碼"}})])],1)],1):t._e(),t._v(" "),"orderSearch"==t.nowPanelName?e("div",{staticClass:"member-pane"},[t._v("你想查詢甚麼呢?")]):t._e(),t._v(" "),"application"==t.nowPanelName?e("div",{staticClass:"member-pane"},[t._v("恭喜你誤入黑心商店!你沒得退換貨唷!!!")]):t._e()]),t._v(" "),e("b-col",{attrs:{md:"3",sm:"12",order:"2","order-sm":"2","order-md":"3","order-lg":"3"}},[e("b-row",{staticClass:"member-info mb-3",attrs:{"no-gutters":""}},[e("b-col",{staticClass:"text-label-member d-flex align-items-center",attrs:{cols:"4",sm:"4",md:"12",lg:"6"}},[e("span",{staticClass:"material-icons text-dark"},[t._v(" person ")]),t._v(" 會員編碼")]),t._v(" "),e("b-col",{staticClass:"text-gray",attrs:{cols:"8",sm:"4",md:"12",lg:"6"}},[t._v("T00020080615")])],1),t._v(" "),e("b-row",{staticClass:"member-info",attrs:{"no-gutters":""}},[e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"4",sm:"4",md:"12",lg:"5"}},[t._v("購物車")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"8",sm:"8",md:"12",lg:"7"}},[t._v("56")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"4",sm:"4",md:"12",lg:"5"}},[t._v("我的收藏")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"8",sm:"8",md:"12",lg:"7"}},[t._v("23")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"4",sm:"4",md:"12",lg:"5"}},[t._v("完成訂單")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"8",sm:"8",md:"12",lg:"7"}},[t._v("8")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"4",sm:"4",md:"12",lg:"5"}},[t._v("會員紅利")]),t._v(" "),e("b-col",{staticClass:"text-label-member mb-2",attrs:{cols:"8",sm:"8",md:"12",lg:"7"}},[t._v("2680")])],1),t._v(" "),e("small",{staticClass:"text-tip mb-xxs-40 d-block"},[t._v("新戶輸入邀請碼即可獲贈紅利點數1000點")])],1)],1)],1)],1)}),[],!1,null,null,null);l.default=component.exports}}]);