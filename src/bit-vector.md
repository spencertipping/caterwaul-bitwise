Caterwaul bit vector library | Spencer Tipping
Licensed under the terms of the MIT source code license

# Introduction

This is a fairly simple bit vector representation that also functions as an array of bytes. It is not particularly efficient from a memory or computational perspective, but it is used
extensively by the bitwise syntax extension to manipulate binary quantities. All of the macros in bitwise are expanded into method and/or constructor calls for these data structures.

Note that bit indexes go from right to left, not left to right. This has some odd consequences, particularly that x.bit_concat(y).bit(0) is y.bit(0), not x.bit(0). It makes sense if you think
about writing something like an assembler, but numeric quantities are not well-represented by this structure.

In other words, bit vectors are little-endian but are indexed from LSB to MSB within each byte.

    caterwaul.module('bit-vector', 'js_all', function ($) {
      ($.bit_vector(bit_width) = this instanceof $.bit_vector ? this -se [it.width = bit_width || 0, it.length = 7 + bit_width >>> 3, n[it.length] *![it[x] = 0] -seq]
                                                              : new $.bit_vector(bit_width))
      -se- it.prototype /-$.merge/ capture [

# Bit accessors

This is fairly straightforward stuff: we just index into the bit array and flip things. bit() is the user-friendly accessor that acts as either a getter or a setter depending on context (and
when it's a setter it returns the receiver).

        bit(n, b)    = arguments.length === 2 ? this.set_bit(n, b) -then- this : this.get_bit(n),  set_bit(n, b) = b ? this[n >>> 3] |= 1 << (n & 7) : this[n >>> 3] &= ~(1 << (n & 7)),
                                                                                                   get_bit(n)    = !!(this[n >>> 3] & 1 << (n & 7)),

        push(x)      = (this[(this.length = 7 + ++this.width >>> 3) - 1] |= 0) -then- this.bit(this.width - 1, x),
        push_byte(x) = this.push(x & 128).push(x & 64).push(x & 32).push(x & 16).push(x & 8).push(x & 4).push(x & 2).push(x & 1),

        toString()   = ni[this.width - 1, 0, -1] *[(xi & 7 ? '' : ' ') + +this.bit(x)] -seq -re- it.join(''),
        array()      = []                      -se- this *![it[xl - xi - 1] = x] /seq,
        buffer()     = new Buffer(this.length) -se- this *![it[xl - xi - 1] = x] /seq,         // Only works in node.js

# Bit group access

These functions access single bits or ranges of bits, but they all return more bit-vector objects. The functions here are prefixed with bit_ to avoid conflicts with array methods. Most of
these functions are grossly inefficient from a constant-overhead and memory allocation perspective.

        bit_slice(from, to) = new this.constructor(from - to + 1)        -se [ni[from - to, 0, -1] *![it.bit(x, this.bit(x + to))] -seq],
        bit_repeat(n)       = new this.constructor(this.width * n)       -se [n[it.width] *![it.bit(x, this.bit(x % this.width))] -seq],
        bit_concat(v)       = new this.constructor(this.width + v.width) -se [n[v.width] *![it.bit(x, v.bit(x))] -seq, n[this.width] *![it.bit(x + v.width, this.bit(x))] -seq]]});