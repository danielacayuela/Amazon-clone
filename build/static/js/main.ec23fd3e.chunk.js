(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(30),i=c.n(s),r=(c(61),c(50)),o=c(8),l=(c(62),c(2)),j=Object(n.createContext)(),d=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(l.jsx)(j.Provider,{value:Object(n.useReducer)(t,c),children:a})},u=function(){return Object(n.useContext)(j)},b=(c(64),c(51)),h=c.n(b),m=c(52),O=c.n(m),p=c(16),x=c(38),_=x.a.initializeApp({apiKey:"AIzaSyA4bMApXvESUywZMAj18G8zWTpeEgfbQAA",authDomain:"clone-9f632.firebaseapp.com",projectId:"clone-9f632",storageBucket:"clone-9f632.appspot.com",messagingSenderId:"172668494769",appId:"1:172668494769:web:7349e6588b8c587cd39390",measurementId:"G-SY0N965QF4"}).firestore(),g=x.a.auth();var v=function(){var e=u(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(p.b,{to:"/",children:Object(l.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(l.jsxs)("div",{className:"header__search",children:[Object(l.jsx)("input",{className:"header__searchInput",type:"text"}),Object(l.jsx)(h.a,{className:"header__searchIcon"})]}),Object(l.jsxs)("div",{className:"header__nav",children:[Object(l.jsx)(p.b,{to:!a&&"/login",children:Object(l.jsxs)("div",{className:"header__option",onClick:function(){a&&g.signOut()},children:[Object(l.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(l.jsx)(p.b,{to:"/orders",children:Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(l.jsx)(p.b,{to:"checkout",children:Object(l.jsxs)("div",{className:"header__optionBasket",children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("span",{className:"header__optionLineTwo header_basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(77);var f=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=u(),r=Object(o.a)(i,2),j=(r[0].basket,r[1]);return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)("p",{children:c}),Object(l.jsxs)("p",{className:"product__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:a})]}),Object(l.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(l.jsx)("p",{children:" \u2b50"})}))})]}),Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to Basket"})]})};c(78);var N=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home__container",children:[Object(l.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(l.jsxs)("div",{className:"home__row",children:[Object(l.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:29.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),Object(l.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SL1200_.jpg"})]}),Object(l.jsxs)("div",{className:"home__row",children:[Object(l.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(l.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(l.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX285_.jpg"})]}),Object(l.jsx)("div",{className:"home__row",children:Object(l.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},S=c(9);c(79);var k=function(){var e=Object(S.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],d=r[1];return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)(p.b,{to:"/",children:Object(l.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(l.jsxs)("div",{className:"login__container",children:[Object(l.jsx)("h1",{children:"Sing-in"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"E-mail"}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("h5",{children:"Password"}),Object(l.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("button",{className:"login__signInButton",type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(a,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(l.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(l.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(a,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon Account"})]})]})},y=(c(80),c(81),c(26)),C=c.n(y),A=c(24),E=c(21),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(A.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Can't remove product (id:".concat(t.id,") as it's not in basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:n});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var B=function(){var e=Object(S.f)(),t=u(),c=Object(o.a)(t,2),n=c[0].basket;return c[1],Object(l.jsxs)("div",{className:"subtotal",children:[Object(l.jsx)(C.a,{renderText:function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Subtotal (",n.length," items);",Object(l.jsx)("strong",{children:e})]}),Object(l.jsxs)("small",{className:"subtotal__gift",children:[Object(l.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:T(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(l.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(83);var L=function(e){var t=e.id,c=e.image,n=e.title,a=e.price,s=e.rating,i=e.hideButton,r=u(),j=Object(o.a)(r,2),d=(j[0].basket,j[1]);return Object(l.jsxs)("div",{className:"checkoutProduct",children:[Object(l.jsx)("img",{div:!0,className:"checkoutProduct__image",src:c,alt:""}),Object(l.jsxs)("div",{className:"checkoutProduct__info",children:[Object(l.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(l.jsxs)("p",{className:"checkoutProduct__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:a})]}),Object(l.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(l.jsx)("p",{children:" \u2b50"})}))}),!i&&Object(l.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=u(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsxs)("div",{className:"checkout__left",children:[Object(l.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(l.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(l.jsx)("div",{className:"checkout__right",children:Object(l.jsx)(B,{})})]})},I=c(28),D=c.n(I),M=c(37),z=c(53),R=c.n(z).a.create({baseURL:"https://us-central1-clone-9f632.cloudfunctions.net/api"}),U=(c(102),c(25));var G=function(){var e=u(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user,i=t[1],r=Object(U.useStripe)(),j=Object(U.useElements)(),d=Object(n.useState)(null),b=Object(o.a)(d,2),h=b[0],m=b[1],O=Object(n.useState)(!0),x=Object(o.a)(O,2),g=x[0],v=x[1],f=Object(n.useState)(!1),N=Object(o.a)(f,2),k=N[0],y=N[1],A=Object(n.useState)(""),E=Object(o.a)(A,2),w=E[0],B=E[1],P=Object(n.useState)(!0),I=Object(o.a)(P,2),z=I[0],G=I[1],F=Object(S.f)();Object(n.useEffect)((function(){(function(){var e=Object(M.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*T(a))});case 2:t=e.sent,G(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log("THE SECRET IS >>>",z),console.log("USER",s);var W=function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),B(!0),e.next=4,r.confirmCardPayment(z,{payment_method:{card:j.getElement(U.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:a,amount:t.amount,created:t.created}),y(!0),m(null),B(!1),i({type:"EMPTY_BASKET"}),F.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"payment",children:Object(l.jsxs)("div",{className:"payment__container",children:[Object(l.jsxs)("h1",{children:["Checkout (",Object(l.jsxs)(p.b,{to:"/checkout",children:[null===a||void 0===a?void 0:a.length," items"]}),")"]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Delivery Adress"})}),Object(l.jsxs)("div",{className:"payment__address",children:[Object(l.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(l.jsx)("p",{children:"123 React Lane"}),Object(l.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Review items and delivery"})}),Object(l.jsx)("div",{className:"payment__items",children:null===a||void 0===a?void 0:a.map((function(e){return Object(l.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Payment mathod"})}),Object(l.jsx)("div",{className:"payment__details",children:Object(l.jsxs)("form",{onSubmit:W,children:[Object(l.jsx)(U.CardElement,{onChange:function(e){v(e.empty),m(e.error?e.error.message:"")}}),Object(l.jsxs)("div",{className:"payment__priceContainer",children:[Object(l.jsx)(C.a,{renderText:function(e){return Object(l.jsxs)("h3",{children:["OrderTotal : ",e]})},decimalScale:2,value:T(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(l.jsx)("button",{disabled:w||g||k,children:Object(l.jsx)("span",{children:w?Object(l.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),h&&Object(l.jsx)("div",{children:h})]})})]})]})})},F=c(54),W=c.n(F);c(104);var K=function(e){var t,c=e.order;return Object(l.jsxs)("div",{className:"order",children:[Object(l.jsx)("h2",{children:"Order"}),Object(l.jsx)("p",{children:W.a.unix(c.data.created).format("MMMMM Do YYYY, h:mma")}),Object(l.jsx)("p",{className:"order__id",children:Object(l.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(l.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(l.jsx)(C.a,{renderText:function(e){return Object(l.jsxs)("h3",{className:"order__total",children:["OrderTotal : ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};c(105);var Y=function(){var e=u(),t=Object(o.a)(e,2),c=t[0].user,a=(t[1],Object(n.useState)([])),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(n.useEffect)((function(){c?_.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):r([])}),[c]),Object(l.jsxs)("div",{className:"orders",children:[Object(l.jsx)("h1",{children:"Your Orders"}),Object(l.jsx)("div",{className:"orders__order",children:null===i||void 0===i?void 0:i.map((function(e){return Object(l.jsx)(K,{order:e})}))})]})},H=c(55),V=Object(H.a)("pk_test_51J7OUyEUjiQLjkRv07T6tqWAcFtua7yV0ofD4UckWbnDgYfTet60UehwBe33vk5TD1cdWUCWH7UrijcZDuwk2lEF002VFhgyub");var X=function(){var e=u(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(l.jsx)(p.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(S.c,{children:[Object(l.jsxs)(S.a,{path:"/orders",children:[Object(l.jsx)(v,{}),Object(l.jsx)(Y,{})]}),Object(l.jsx)(S.a,{path:"/login",children:Object(l.jsx)(k,{})}),Object(l.jsxs)(S.a,{path:"/checkout",children:[Object(l.jsx)(v,{}),Object(l.jsx)(P,{})]}),Object(l.jsxs)(S.a,{path:"/payment",children:[Object(l.jsx)(v,{}),Object(l.jsx)(U.Elements,{stripe:V,children:Object(l.jsx)(G,{})})]}),Object(l.jsxs)(S.a,{path:"/",children:[Object(l.jsx)(v,{}),Object(l.jsx)(N,{})]})]})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{initialState:{basket:[],user:null},reducer:w,children:Object(l.jsx)(X,{})})}),document.getElementById("root")),$()},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.ec23fd3e.chunk.js.map