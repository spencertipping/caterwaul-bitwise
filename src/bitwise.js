caterwaul.module( 'bitwise' , (function(qs,qs1,qs2,qs3,qse,qs4,qse1,qs5,qse2,qs6,qse3,qs7,qse4,qs8,qs9,qsa,qse5,qsb,qse6,qsc,qse7) {var result= (function($) {$.bitwise=function(caterwaul_function) {;
return(function(it) {return(it.modifiers.bitwise=$.grammar( 'B S' , 'B[_x]' , (function(rule,anon) {return(function( ) {var literal=function(m) {;
return binary( /^b([01]+)$/ .exec(m._x.data) ) ||hex( /^x([0-9a-f]+)$/ .exec(m._x.data) ) ||integer( /^i([0-9]+)$/ .exec(m._x.data) ) } ,constructor_for_bits=function(bs) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var x0= (qs) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= ( (qs1) .replace( {_e:x0,_y:x? '1' : '0' } ) ) ;
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
return ir} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<u:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (4) , (1) ) ) ) ) ) ;
return xr} ) .call(this, (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( '0123456789abcdef' .indexOf(x) ) ) ;
return xr} ) .call(this,m[1] .split( '' ) ) ) ) } ,integer=function(m) {;
return m&&new $.syntax(m[1] ) } ,toplevel_rules= [rule(qs2,literal) ,rule(qs3,qse) ,rule(qs4,qse1) ,rule(qs5,$.anonymizer( 'i' ) (qse2) ) ,rule(qs6,qse3) ,rule(qs7,qse4) ,rule(qs8,qs9) ] ,slice_rules= [rule(qsa,qse5) ,rule(qsb,qse6) ,rule(qsc,qse7) ] ;
return( (toplevel_rules) .concat(slice_rules) ) } ) .call(this) } ) ) ) ,it} ) .call(this, (caterwaul_function) ) } } ) ;
result.caterwaul_expression_ref_table= {qs: ( "new caterwaul.syntax( \"new\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"caterwaul\" ) ,new caterwaul.syntax( \"bit_vector\" ) ) ,new caterwaul.syntax( \"0\" ) ) )" ) ,qs1: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"_e\" ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \"_y\" ) )" ) ,qs2: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) )" ) ,qs3: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"u+\" ,new caterwaul.syntax( \"_x\" ) ) )" ) ,qse: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"new\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"caterwaul\" ) ,new caterwaul.syntax( \"bit_vector\" ) ) ,new caterwaul.syntax( \"0\" ) ) ) ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ) )" ) ,qs4: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"*\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse1: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_repeat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qs5: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"/\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse2: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"function\" ,new caterwaul.syntax( \"(\" ) ,new caterwaul.syntax( \"{\" ,new caterwaul.syntax( \";\" ,new caterwaul.syntax( \"var\" ,new caterwaul.syntax( \"=\" ,new caterwaul.syntax( \"i\" ) ,new caterwaul.syntax( \"_y\" ) ) ) ,new caterwaul.syntax( \"return\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_slice\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"i\" ) ,new caterwaul.syntax( \"i\" ) ) ) ) ) ) ) ) ) ,new caterwaul.syntax( \"call\" ) ) ,new caterwaul.syntax( \"this\" ) )" ) ,qs6: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"+\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse3: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"bit_concat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qs7: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"<<\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qse4: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ,new caterwaul.syntax( \"push\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qs8: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qs9: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"B\" ) ,new caterwaul.syntax( \"_x\" ) ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsa: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qse5: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_x\" ) ) ) ) ,new caterwaul.syntax( \"bit_concat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"_y\" ) ) ) ) )" ) ,qsb: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"%\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qse6: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"_v\" ) ) ,new caterwaul.syntax( \"bit_slice\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) )" ) ,qsc: ( "new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"S\" ) ,new caterwaul.syntax( \"[]\" ,new caterwaul.syntax( \"_v\" ) ,new caterwaul.syntax( \"*\" ,new caterwaul.syntax( \"_x\" ) ,new caterwaul.syntax( \"_y\" ) ) ) )" ) ,qse7: ( "new caterwaul.syntax( \"()\" ,new caterwaul.syntax( \".\" ,new caterwaul.syntax( \"(\" ,new caterwaul.syntax( \"_v\" ) ) ,new caterwaul.syntax( \"bit_repeat\" ) ) ,new caterwaul.syntax( \",\" ,new caterwaul.syntax( \"_y\" ) ) )" ) } ;
return(result) } ) .call(this,new caterwaul.syntax( "new" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "caterwaul" ) ,new caterwaul.syntax( "bit_vector" ) ) ,new caterwaul.syntax( "0" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "_e" ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "_y" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "u+" ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "new" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "caterwaul" ) ,new caterwaul.syntax( "bit_vector" ) ) ,new caterwaul.syntax( "0" ) ) ) ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "*" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_repeat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "/" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "function" ,new caterwaul.syntax( "(" ) ,new caterwaul.syntax( "{" ,new caterwaul.syntax( ";" ,new caterwaul.syntax( "var" ,new caterwaul.syntax( "=" ,new caterwaul.syntax( "i" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "return" ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_slice" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "i" ) ,new caterwaul.syntax( "i" ) ) ) ) ) ) ) ) ) ,new caterwaul.syntax( "call" ) ) ,new caterwaul.syntax( "this" ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "+" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "bit_concat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "<<" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ) ,new caterwaul.syntax( "push" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "B" ) ,new caterwaul.syntax( "_x" ) ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_x" ) ) ) ) ,new caterwaul.syntax( "bit_concat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "_y" ) ) ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "%" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "_v" ) ) ,new caterwaul.syntax( "bit_slice" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "S" ) ,new caterwaul.syntax( "[]" ,new caterwaul.syntax( "_v" ) ,new caterwaul.syntax( "*" ,new caterwaul.syntax( "_x" ) ,new caterwaul.syntax( "_y" ) ) ) ) ,new caterwaul.syntax( "()" ,new caterwaul.syntax( "." ,new caterwaul.syntax( "(" ,new caterwaul.syntax( "_v" ) ) ,new caterwaul.syntax( "bit_repeat" ) ) ,new caterwaul.syntax( "," ,new caterwaul.syntax( "_y" ) ) ) ) ) ;
