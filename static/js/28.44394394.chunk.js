(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[28],{613:function(e,a,t){},619:function(e,a,t){"use strict";t.r(a);t(303);var n=t(304),l=(t(295),t(298)),r=(t(296),t(299)),i=t(46),c=t.n(i),s=t(73),o=t(90),m=(t(170),t(115)),d=t(0),p=t.n(d),E=t(634),u=t(284),y=(t(613),t(474),m.a.Title);a.default=function(e){var a=e.location,t=Object(d.useState)(null),i=Object(o.a)(t,2),m=i[0],h=i[1],b=Object(d.useState)(0),f=Object(o.a)(b,2),g=f[0],w=f[1],v=Object(d.useState)(0),W=Object(o.a)(v,2),k=W[0],N=W[1];Object(d.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.jb)();case 2:t=e.sent,n=t.data,(l=n.filter((function(e){return e.id===a.state.id})))&&h(l[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(d.useEffect)((function(){!function(){var e=0,a=0;m&&m.items.map((function(t){e+=t.quantity*t.product.priceperunit,a+=t.product.volumetric_weight})),N(a),w(e)}()}),[m]);var S=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],C=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];return m?p.a.createElement("div",{className:"container-docket"},p.a.createElement("div",{className:"header-docket"},p.a.createElement("div",{className:"logo-docket"},p.a.createElement("img",{src:"/home-logo.png",alt:"Yantraksh"})),p.a.createElement("div",{className:"heading-docket"},p.a.createElement(y,{level:2,style:{fontWeight:"bold"}},"DELIVERY CHALLAN"))),p.a.createElement("hr",null),p.a.createElement(l.a,{className:"meta-docket"},p.a.createElement(r.a,{span:12,className:"left"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction No. : "),p.a.createElement("p",{style:{display:"inline"}},m.transaction_no))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Date : "),p.a.createElement("p",{style:{display:"inline"}},m.transaction_date.slice(0,10)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Dispatch Date : "),p.a.createElement("p",{style:{display:"inline"}},m.transaction_date.slice(0,10)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Type : Return")))),p.a.createElement(r.a,{span:5}),p.a.createElement(r.a,{span:7,className:"right",style:{fontFamily:"Arial, Helvetica, sans-serif"}},p.a.createElement("p",null,"[ \xa0] Original for Consignee ",p.a.createElement("br",null)," [ \xa0] Duplicate for Transporter ",p.a.createElement("br",null),"[ \xa0] Triplicate for Consignor"))),p.a.createElement("div",{className:"main-data-docket"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Name : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.receiver_client.name))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Name : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.warehouse.name)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Address : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.receiver_client.address+", "+m.receiver_client.city))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Address : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.warehouse.address+", "+m.warehouse.city+", "+m.warehouse.state+", "+m.warehouse.pincode)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.receiver_client.gst))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.warehouse.gst))))),p.a.createElement(l.a,{className:"table-docket"},p.a.createElement(E.a,{bordered:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Sr. No."),p.a.createElement("th",null,"HSN/SAC"),p.a.createElement("th",null,"Product Name"),p.a.createElement("th",null,"Product Code"),p.a.createElement("th",null,"QTY"),p.a.createElement("th",null,"Rate/Unit"),p.a.createElement("th",null,"Taxable Value"))),p.a.createElement("tbody",null,m.items.map((function(e,a){return p.a.createElement("tr",null,p.a.createElement("td",null,a+1),p.a.createElement("td",null,e.product.hsn_code),p.a.createElement("td",null,e.product.name),p.a.createElement("td",null,e.product.short_code),p.a.createElement("td",null,e.quantity),p.a.createElement("td",null,e.product.priceperunit),p.a.createElement("td",null,e.quantity*e.product.priceperunit))}))))),p.a.createElement(l.a,{className:"final-docket"},p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:7},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Amount in Words : ")),p.a.createElement(r.a,{span:16},p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word",textTransform:"capitalize"}},String.fromCharCode(8377)+" "+function(e){if((e=e.toString()).length>9)return"overflow";var a=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(a){var t="";return t+=0!=a[1]?(S[Number(a[1])]||C[a[1][0]]+" "+S[a[1][1]])+"crore ":"",t+=0!=a[2]?(S[Number(a[2])]||C[a[2][0]]+" "+S[a[2][1]])+"lakh ":"",t+=0!=a[3]?(S[Number(a[3])]||C[a[3][0]]+" "+S[a[3][1]])+"thousand ":"",t+=0!=a[4]?(S[Number(a[4])]||C[a[4][0]]+" "+S[a[4][1]])+"hundred ":"",t+=0!=a[5]?(""!=t?"and ":"")+(S[Number(a[5])]||C[a[5][0]]+" "+S[a[5][1]])+"only ":""}}(g))),p.a.createElement("br",null)),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Charged Weight : "),p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},k," Kg"))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transporter Name : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.transport_by.name))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver Name : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.driver_name))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver No. : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.driver_number)))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Grand Total : "),p.a.createElement("p",{style:{fontWeight:"bold",display:"inline",wordWrap:"break-word"}},String.fromCharCode(8377)+" "+g))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Creation Date : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},(new Date).getDate().toString()+"/"+(new Date).getMonth().toString()+"/"+(new Date).getFullYear().toString()))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Vehicle No. : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.vehicle_number))))),p.a.createElement("hr",null),p.a.createElement("table",{style:{pageBreakInside:"avoid"}},p.a.createElement("div",{className:"declaration"},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Declaration : "),p.a.createElement("p",{style:{display:"inline"}},"The packaging products given on hire shall always remain the property of Yantraksh Logistics Private Limited and shall not be used for the purpose otherwise agreed upon. The same shall be returned at the address notified by Yantraksh Logistics Private Limited."),p.a.createElement("br",null),p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Note : "),p.a.createElement("p",{style:{display:"inline"}}," ","No E-Way Bill is required for Empty Cargo Containers. Refer, Rule 14 of Central Goods and Services Tax (Second Amendment) Rules, 2018."))),p.a.createElement("hr",null),p.a.createElement("table",{style:{pageBreakInside:"avoid",width:"90vw"}},p.a.createElement("div",{className:"footer"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11,style:{fontWeight:"bold"}},"For Sending Location :"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6,style:{fontWeight:"bold"}},"For Receiving Location :")),p.a.createElement("br",null)," ",p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11,style:{fontWeight:"bold"}},"Authorized Signature"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6,style:{fontWeight:"bold"}},"Authorized Signature")),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11},"(Company Seal & Signature)"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6},"(Company Seal & Signature)")),p.a.createElement("br",null)," ",p.a.createElement("br",null),p.a.createElement("div",{style:{display:"flex",justifyContent:"Center",alignItems:"center",flexDirection:"column",padding:"0",margin:"0"}},p.a.createElement("p",{style:{fontSize:"26px",color:"#034efc"}},"Yantraksh Logistics Private Limited"),p.a.createElement("p",null,"CIN No: U74999GJ2018PTC105552"))))):p.a.createElement(n.a,{spinning:!0,style:{position:"absolute",marginLeft:"49vw",marginTop:"49vh"}})}}}]);
//# sourceMappingURL=28.44394394.chunk.js.map