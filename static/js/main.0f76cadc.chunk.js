(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,a){t.exports=a(21)},18:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(7),r=a.n(n),l=(a(18),a(8)),c=a(9),d=a(1),o=a(12),u=a(11),p=(a(19),a(10)),h=a(23),y=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={display:"0"},i.global_style={display:"grid",grid:"100px auto / auto 96px",width:"436px"},i.buttons_style={display:"grid",grid:"120px 120px 120px 120px / 120px 120px 120px"},i.operators_style={display:"grid",grid:"96px 96px 96px 96px 96px / 96px"},i.checkLastChar=i.checkLastChar.bind(Object(d.a)(i)),i.checkLastOperator=i.checkLastOperator.bind(Object(d.a)(i)),i.getNumber=i.getNumber.bind(Object(d.a)(i)),i.clear=i.clear.bind(Object(d.a)(i)),i.add=i.add.bind(Object(d.a)(i)),i.subtract=i.subtract.bind(Object(d.a)(i)),i.multiply=i.multiply.bind(Object(d.a)(i)),i.divide=i.divide.bind(Object(d.a)(i)),i.equals=i.equals.bind(Object(d.a)(i)),i.addDecimal=i.addDecimal.bind(Object(d.a)(i)),i.addCommand=i.addCommand.bind(Object(d.a)(i)),i.checkLastMinus=i.checkLastMinus.bind(Object(d.a)(i)),i}return Object(c.a)(a,[{key:"getNumber",value:function(t){this.state.display.length<20&&this.setState((function(e){return{display:e.display+t}})),this.setState((function(t){var e=t.display.split(" ");return e[e.length-1].includes(".")||(e[e.length-1]=parseFloat(e[e.length-1]).toString()),{display:e.join(" ")}}))}},{key:"checkLastChar",value:function(){return/[0-9]$/.test(this.state.display)}},{key:"checkLastOperator",value:function(){return/[/+x-] $/.test(this.state.display)}},{key:"checkLastMinus",value:function(){return/[-]$/.test(this.state.display)}},{key:"add",value:function(){this.addCommand(" + ")}},{key:"subtract",value:function(){this.addCommand(" - ")}},{key:"multiply",value:function(){this.addCommand(" x ")}},{key:"divide",value:function(){this.addCommand(" / ")}},{key:"addCommand",value:function(t){this.checkLastChar()?this.setState((function(e){return{display:e.display+t}})):"-"===t[1]&&"-"!==this.state.display[this.state.display.length-1]?this.setState((function(t){return{display:t.display+"-"}})):this.checkLastOperator()?this.setState((function(e){var a=e.display.split("");return a.pop(),a.pop(),a.pop(),{display:a.join("")+t}})):this.checkLastMinus()&&this.state.display.length>4&&this.setState((function(e){var a=e.display.split("");return a.pop(),a.pop(),a.pop(),a.pop(),{display:a.join("")+t}}))}},{key:"clear",value:function(){this.setState((function(t){return{display:"0"}}))}},{key:"parseMultiplication",value:function(t){for(var e=0;e<t.length;e++)switch(t[e]){case"x":t.splice(e-1,3,t[e-1]*t[e+1]),e--;break;case"/":t.splice(e-1,3,t[e-1]/t[e+1]),e--}}},{key:"parseAddition",value:function(t){for(var e=0;e<t.length;e++)switch(t[e]){case"+":t.splice(e-1,3,parseFloat(t[e-1])+parseFloat(t[e+1])),e--;break;case"-":t.splice(e-1,3,t[e-1]-t[e+1]),e--}}},{key:"equals",value:function(){if(this.checkLastChar()){var t=this.state.display.split(" ");this.parseMultiplication(t),this.parseAddition(t),this.setState({display:t[0].toString()})}}},{key:"addDecimal",value:function(){var t=this.state.display.split(" ");t[t.length-1].includes(".")||this.setState((function(t){return{display:t.display.split()+"."}}))}},{key:"render",value:function(){var t=this,e=[[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"],[6,"six"],[7,"seven"],[8,"eight"],[9,"nine"]].map((function(e){return s.a.createElement(h.a,{variant:"outline-primary",id:e[1],className:"buttons rounded-0",onClick:function(){return t.getNumber(e[0])}},e[0])})),a=[["Clear","clear",this.clear],["+","add",this.add],["-","subtract",this.subtract],["x","multiply",this.multiply],["/","divide",this.divide]].map((function(t){return s.a.createElement(h.a,{variant:"outline-primary",id:t[1],className:"operators rounded-0",onClick:t[2]},t[0])}));return s.a.createElement("div",{style:this.global_style,className:"component-calculator"},s.a.createElement(p.a,{id:"display",className:"display border border-dark rounded-0",variant:"info"},this.state.display),s.a.createElement("div",{id:"numbas",style:this.buttons_style},e,s.a.createElement("div",{style:{display:"flex",gridColumn:"1/4",justifyContent:"stretch"}},s.a.createElement(h.a,{style:{width:"240px"},variant:"outline-primary",className:"rounded-0",id:"zero",onClick:function(){return t.getNumber(0)}},"0"),s.a.createElement(h.a,{style:{width:"120px"},variant:"outline-primary",id:"equals",className:"operators rounded-0",onClick:this.equals},"="))),s.a.createElement("div",{id:"operators",className:"operators",style:this.operators_style},a,s.a.createElement(h.a,{id:"decimal",variant:"outline-primary",className:"operators rounded-0",onClick:this.addDecimal},".")))}}]),a}(i.Component);a(20);r.a.render(s.a.createElement("div",{className:"russki"},s.a.createElement(y,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0f76cadc.chunk.js.map