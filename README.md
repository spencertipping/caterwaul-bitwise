# Bit-level function definitions

This library is useful for defining bit-level functions, such as might be used inside an assembler. For example, an 8-bit add operation to %AL could be encoded this way:

    0x04, immediate[8]

More usefully, it gives you ways to splice bits into bytes with constant bits. This lets you do some of the more complex manipulation required to generate x86 machine code. For example:

    modrm_displace32(r)         = bits[b00, r[3], b101]
    modrm_indirect(i, r)        = bits[b00, r[3], i[3]]
    modrm_indirect_d8(i, r, d)  = bits[b01, r[3], i[3], d[8]]
    modrm_indirect_d32(i, r, d) = bits[b01, r[3], i[3], d[7-0], d[15-8], d[23-16], d[31-24]]
    modrm_direct_reg(dest, r)   = bits[b11, r[3], dest[3]]