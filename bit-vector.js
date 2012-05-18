caterwaul.module( 'bit-vector' ,function($) { (function(it) {return $.merge(it.prototype, {bit:function(n,b) {;
return arguments.length===2? (this.set_bit(n,b) ,this) 
:this.get_bit(n) } ,set_bit:function(n,b) {;
return b?this[n>>>3] |=1<< (n&7) 
:this[n>>>3] &= ~ (1<< (n&7) ) } ,get_bit:function(n) {;
return! ! (this[n>>>3] &1<< (n&7) ) } ,push:function(x) {;
return( (this[ (this.length=7+ ++this.width>>>3) -1] |=0) ,this.bit(this.width-1,x) ) } ,push_byte:function(x) {;
return this.push(x&128) .push(x&64) .push(x&32) .push(x&16) .push(x&8) .push(x&4) .push(x&2) .push(x&1) } ,push_bits:function(x,n) {;
return(n&&this.push(x&1) .push_bits(x>>>1,n-1) ,this) } ,toString:function() {;
return(function(it) {return it.join( '' ) } ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( (xi&7? '' 
: ' ' ) + +this.bit(x) ) ) ;
return xr} ) .call(this, (function(i,u,s) {if( (u-i) *s<0|| !s)return[] ;
for(var r= [] ,d=u-i;
d>0?i<=u
:i>=u;
i+=s)r.push(i) ;
return r} ) ( (this.width-1) , (0) , ( -1) ) ) ) ) } ,array:function() {;
return(function(it) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it[xl-xi-1] =x) ;
return xs} ) .call(this,this) ,it} ) .call(this, ( [] ) ) } ,buffer:function() {;
return(function(it) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it[xl-xi-1] =x) ;
return xs} ) .call(this,this) ,it} ) .call(this, (new Buffer(this.length) ) ) } ,bit_slice:function(from,to) {;
return(function(it) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it.bit(x,this.bit(x+to) ) ) ;
return xs} ) .call(this, (function(i,u,s) {if( (u-i) *s<0|| !s)return[] ;
for(var r= [] ,d=u-i;
d>0?i<=u
:i>=u;
i+=s)r.push(i) ;
return r} ) ( (from-to) , (0) , ( -1) ) ) ,it} ) .call(this, (new this.constructor(from-to+1) ) ) } ,bit_repeat:function(n) {;
return(function(it) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it.bit(x,this.bit(x%this.width) ) ) ;
return xs} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[] ;
for(var r= [] ,d=u-i;
d>0?i<u
:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (it.width) , (1) ) ) ,it} ) .call(this, (new this.constructor(this.width*n) ) ) } ,bit_concat:function(v) {;
return(function(it) {return(function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it.bit(x,v.bit(x) ) ) ;
return xs} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[] ;
for(var r= [] ,d=u-i;
d>0?i<u
:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (v.width) , (1) ) ) , (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it.bit(x+v.width,this.bit(x) ) ) ;
return xs} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[] ;
for(var r= [] ,d=u-i;
d>0?i<u
:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (this.width) , (1) ) ) ,it} ) .call(this, (new this.constructor(this.width+v.width) ) ) } } ) ,it} ) .call(this, ( ($.bit_vector=function(bit_width) {;
return this instanceof $.bit_vector? (function(it) {return it.width=bit_width||0,it.length=7+bit_width>>>3, (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , (it[x] =0) ;
return xs} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[] ;
for(var r= [] ,d=u-i;
d>0?i<u
:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (it.length) , (1) ) ) ,it} ) .call(this, (this) ) 
:new $.bit_vector(bit_width) } ) ) ) } ) ;
