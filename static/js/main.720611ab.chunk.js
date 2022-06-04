(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),i=(c(14),c(9)),n=c(3),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(2),m=c.n(b),u="https://www.omdbapi.com/?apikey=".concat("795f52a1","&t="),v=function(){var e=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u).concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Status of error: ".concat(c.status));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(c(20),function(e){var t=e.isMovieInTheList,c=e.addMovie,s=Object(r.useState)(""),a=Object(n.a)(s,2),i=a[0],j=a[1],b=Object(r.useState)(null),u=Object(n.a)(b,2),h=u[0],O=u[1],x=Object(r.useState)(""),f=Object(n.a)(x,2),p=f[0],N=f[1],g=Object(r.useCallback)(Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.trim()||N("Enter search text"),!i.trim()){e.next=8;break}return N(""),e.next=5,v(i);case 5:"True"===(t=e.sent).Response&&(O(t),N("")),"False"===t.Response&&N("Can\t find a movie with such title");case 8:case"end":return e.stop()}}),e)}))),[p,i]),k=Object(r.useCallback)((function(){h&&(t(h)&&N("This movie already is in the list"),t(h)||(c(h),j(""),O(null))),h||N("Select a movie first")}),[h]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(p.length&&"is-danger"),value:i,onChange:function(e){var t=e.target;j(t.value),N(""),O(null)}})}),Object(l.jsx)("p",{className:"help is-danger",children:p})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light","data-cy":"find",onClick:g,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary","data-cy":"add",onClick:k,children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),h&&Object(l.jsx)(o,{movie:h})]})]})}),O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useCallback)((function(e){return c.some((function(t){return t.imdbID===e.imdbID}))}),[c]),o=Object(r.useCallback)((function(e){s([].concat(Object(i.a)(c),[e]))}),[c]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{isMovieInTheList:a,addMovie:o})})]})};a.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.720611ab.chunk.js.map