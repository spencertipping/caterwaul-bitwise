caterwaul.module( 'bitwise' , (function(qs,qs1,qs2,qs3,qs4,qse,qs5,qse1,qs6,qse2,qs7,qse3,qs8,qse4,qs9,qse5,qsa,qse6,qsb,qsc,qsd,qse7,qsf,qse8,qsg,qse9,qsh,qsea) {var result= (function($) { ($.all) .push( 'bitwise' ) ,$.bitwise=function(caterwaul_function) {;
return(function(it) {return it.modifiers.bitwise=$.grammar( 'B S' , {initial:qs} , (function(rule,anon) {return(function() {var literal=function(m) {;
return binary( /^b([01]+)$/ .exec(m._x.data) ) ||hex( /^x([0-9a-fA-F]+)$/ .exec(m._x.data) ) } ,constructor_for_bits=function(bs) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (qs1) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= ( (qs2) .replace( {_e:x0,_y:x? '1' 
: '0' } ) ) ;
return x0} ) .call(this,bs) } ,binary=function(m) {;
return m&&constructor_for_bits( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( +xs[xl-xi-1] ) ) ;
return xr} ) .call(this,m[1] .split( '' ) ) ) } ,hex=function(m) {;
return m&&constructor_for_bits( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push.apply(xr,Array.prototype.slice.call( ( (function(is) {var i,i0,ii,il,ir;
for(var ir=new is.constructor() ,ii=0,il=is.length;
ii<il;
 ++ii)i=is[ii] ,ir.push( (xs[xl-xi-1] >>>i&1) ) ;
return ir} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[] ;
for(var r= [] ,d=u-i;
d>0?i<u
:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (4) , (1) ) ) ) ) ) ;
return xr} ) .call(this, (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( '0123456789abcdef' .indexOf(x) ) ) ;
return xr} ) .call(this,m[1] .toLowerCase() .split( '' ) ) ) ) } ,toplevel_rules= [rule(qs3,literal) ,rule(qs4,qse) ,rule(qs5,qse1) ,rule(qs6,$.anonymizer( 'i' ) (qse2) ) ,rule(qs7,qse3) ,rule(qs8,qse4) ,rule(qs9,qse5) ,rule(qsa,qse6) ,rule(qsb,qsc) ] ,slice_rules= [rule(qsd,qse7) ,rule(qsf,qse8) ,rule(qsg,qse9) ,rule(qsh,qsea) ] ;
return(toplevel_rules) .concat(slice_rules) } ) .call(this) } ) ) ,it} ) .call(this, (caterwaul_function) ) } } ) ;
result.caterwaul_expression_ref_table= {qs: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_expression\" ) )" ) ,qs1: ( "new caterwaul.syntax( \"new\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"caterwaul\" ) ,new caterwaul.syntax( \"bit_vector\" ) ) ,new caterwaul.syntax( \"0\" ) ) )" ) ,qs2: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"_e\" ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \"_y\" ) )" ) ,qs3: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) )" ) ,qs4: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"u+\" ,new caterwaul.syntax( \"_x\" ) ) )" ) ,qse: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"new\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"caterwaul\" ) ,new caterwaul.syntax( \"bit_vector\" ) ) ,new caterwaul.syntax( \"0\" ) ) ) ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ) )" ) ,qs5: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"*\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse1: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_repeat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qs6: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"/\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse2: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"function\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"\" ) ) ,new caterwaul.syntax( \"{\" ,new caterwaul.syntax( \";\" ,new caterwaul.syntax( \"var\" ,new caterwaul.syntax( \"=\" ,new caterwaul.syntax( \"i\" ) ,new caterwaul.syntax( \"_y\" ) ) ) ,new caterwaul.syntax( \"return\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_slice\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"i\" ) ,new caterwaul.syntax( \"i\" ) ) ) ) ) ) ) ) ,new caterwaul.syntax( \"call\" ) ) ,new caterwaul.syntax( \"this\" ) )" ) ,qs7: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"+\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse3: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_concat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qs8: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"-\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse4: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_y\" ) ) ) ,new caterwaul.syntax( \"bit_concat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) )" ) ,qs9: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"<<\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"%\" ,new caterwaul.syntax( \"_y\" ) ,new caterwaul.syntax( \"_n\" ) ) ) )" ) ,qse5: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ,new caterwaul.syntax( \"push_bits\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ,new caterwaul.syntax( \"_n\" ) ) )" ) ,qsa: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"<<\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse6: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsb: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsc: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsd: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_x\" ) ) )" ) ,qse7: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"new\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"caterwaul\" ) ,new caterwaul.syntax( \"bit_vector\" ) ) ,new caterwaul.syntax( \"0\" ) ) ) ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"bit\" ) ) ,new caterwaul.syntax( \"_x\" ) ) ) )" ) ,qsf: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qse8: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ) ,new caterwaul.syntax( \"bit_concat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_y\" ) ) ) ) )" ) ,qsg: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"%\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qse9: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"_v\" ) ) ,new caterwaul.syntax( \"bit_slice\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsh: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"*\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qsea: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ) ,new caterwaul.syntax( \"bit_repeat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) } ;
return(result) } ) .call(this,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_expression" ) ) ,new caterwaul.syntax( "new" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "caterwaul" ) ,new caterwaul.syntax( "bit_vector" ) ) ,new caterwaul.syntax( "0" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "_e" ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "_y" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "u+" ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "new" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "caterwaul" ) ,new caterwaul.syntax( "bit_vector" ) ) ,new caterwaul.syntax( "0" ) ) ) ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "*" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_repeat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "/" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "function" ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "" ) ) ,new caterwaul.syntax( "{" ,new caterwaul.syntax( ";" ,new caterwaul.syntax( "var" ,new caterwaul.syntax( "=" ,new caterwaul.syntax( "i" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "return" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_slice" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "i" ) ,new caterwaul.syntax( "i" ) ) ) ) ) ) ) ) ,new caterwaul.syntax( "call" ) ) ,new caterwaul.syntax( "this" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "+" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_concat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "-" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "bit_concat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "<<" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "%" ,new caterwaul.syntax( "_y" ) ,new caterwaul.syntax( "_n" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ,new caterwaul.syntax( "push_bits" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ,new caterwaul.syntax( "_n" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "<<" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "new" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "caterwaul" ) ,new caterwaul.syntax( "bit_vector" ) ) ,new caterwaul.syntax( "0" ) ) ) ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "bit" ) ) ,new caterwaul.syntax( "_x" ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_x" ) ) ) ) ,new caterwaul.syntax( "bit_concat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_y" ) ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "%" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "_v" ) ) ,new caterwaul.syntax( "bit_slice" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "*" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_x" ) ) ) ) ,new caterwaul.syntax( "bit_repeat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ) ) ;
