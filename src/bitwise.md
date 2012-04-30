Caterwaul bitwise library | Spencer Tipping
Licensed under the terms of the MIT source code license

# Introduction

This library introduces some new macros into Caterwaul; these allow you to efficiently represent various bitwise quantities and splice things together. The underlying format is always an array
of bytes, which is inefficient in V8 but has the advantage that it can be easily written to Buffer objects. By extension, most functions that expect to receive arrays in this library can
accept Buffer objects as well. It also has the advantage that you can use it in conjunction with the binary output from caterwaul-struct.

    caterwaul.module('bitwise', 'js_all', function ($) {
      $.all /~push/ 'bitwise',
      $.bitwise(caterwaul_function) = caterwaul_function -se [it.modifiers.bitwise = $.grammar('B S', {initial: 'B[_x]'.qs}, given [rule, anon] in toplevel_rules /~concat/ slice_rules

# Numeric macros

The most common case for most purposes is grabbing a contiguous range of bits or transcoding a large number into a small number of bits. For example, OR-maskable flags could be represented as
single bits concatenated into a larger number:

    flags(r, w, x) = b0*5 << r << w << x |bitwise

Literal bit-vector quantities can be written in binary or hexadecimal:

    b10010101     <- bit vector for the number 128 + 16 + 4 + 1
    xff           <- bit vector for 255 (width = 8 bits)
    x00ff         <- bit vector for 255 (width = 16 bits)
    b0            <- bit vector for the number 0, and has a default bit width of 1

These quantities are stored in a 'bit vector' data structure that is accessible as an array of bytes but has extra methods for dealing with bits directly. In particular, bit vectors know their
logical bit-width; this is important for things like repetition.

      -where [literal(m)               = /^b([01]+)$/.exec(m._x.data) /!binary || /^x([0-9a-fA-F]+)$/.exec(m._x.data) /!hex,

              // Note: egregiously inefficient.
              constructor_for_bits(bs) = bs /['new caterwaul.bit_vector(0)'.qs]['_e.push(_y)'.qs /~replace/ {_e: x0, _y: x ? '1' : '0'}] -seq,

              // Note: even more egregiously inefficient.
              binary(m)                = m && constructor_for_bits(m[1].split('') *[+xs[xl - xi - 1]] -seq),
              hex(m)                   = m && constructor_for_bits(m[1].toLowerCase().split('') *['0123456789abcdef'.indexOf(x)] *~![n[4] *i[xs[xl - xi - 1] >>> i & 1] -seq] -seq),

              toplevel_rules           = ['B[_x]'.qs /-rule/ literal,  'B[+_x]'.qs      |-rule| 'new caterwaul.bit_vector(0) /~push/ _x'.qse,
                                                                       'B[_x * _y]'.qs  |-rule| 'B[_x] /~bit_repeat/ _y'.qse,
                                                                       'B[_x / _y]'.qs  |-rule| $.anonymizer('i')('B[_x] / i /~bit_slice/ i -where [i = _y]'.qse),
                                                                       'B[_x + _y]'.qs  |-rule| 'B[_x] /~bit_concat/ B[_y]'.qse,
                                                                       'B[_x << _y]'.qs |-rule| 'B[_x] /~push/ _y'.qse,
                                                                       'B[_x[_y]]'.qs   |-rule| 'S[B[_x][_y]]'.qs],

# Splicing

This library supports a few different operations for bit selection and splicing. The simplest is /x, which grabs bit x from the receiver. For example, you could write n/5 to get bit 5 (= 32)
from the number n. n must be an integer, not a float, for this to work sensibly. You can repeat a bit-vector quantity using *: b10*5 = b1010101010. More complex splicing can be achieved using
[] notation, which has the following semantics:

    n[x]          <- grab bit x from n
    n[x*y]        <- repeat bit x from n y times
    n[x%y]        <- grab bits from x to y from n (both ends are inclusive)
    n[x,y]        <- grab bit x, then bit y from n

These operations can all be combined. For example:

    n[3,0*4]      <- grab bit 3 followed by bit 0 repeated 4 times
    n[7%4*3]      <- repeat bits 7-4 (inclusive) three times for a total of 12 bits
    n[5,7,8%2]    <- bit 5 followed by bit 7 followed by bits 8-2, inclusive

              slice_rules              = ['S[_v[_x]]'.qs |-rule| 'new caterwaul.bit_vector(0) /~push/ _v.bit(_x)'.qse, 'S[_v[_x, _y]]'.qs  |-rule| 'S[_v[_x]] /~bit_concat/ S[_v[_y]]'.qse,
                                                                                                                       'S[_v[_x % _y]]'.qs |-rule| '_v / _x /~bit_slice/ _y'.qse,
                                                                                                                       'S[_v[_x * _y]]'.qs |-rule| 'S[_v[_x]] /~bit_repeat/ _y'.qse]])]});