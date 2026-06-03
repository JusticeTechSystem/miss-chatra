// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YHujF5C1AAKA73Am0VAFlfl5SM2AaVVY7u2mfhe7EBuMvVfgTDBv1oe9BCIuBv+xbeD3eaigCFInNYA+yqygJpV1OkeUtoIjYjrNE5bxGKelTps3lIhT8p8ni4AobnrbIXVPvLrfUBXzdIIdRwXQUrIl2OhkdB2Ru43ccQLAkEfSIQgSkHDN/UW2tl/LH/blj9uNyqQBQoWgmCCha2pdK5MxRx3yeSLGEZfQGxdlQxvLqQWHmUXbQcBzjan2ziH72VxM+48e+D4XA/HpHNHukQ3jI0TgqRQfKzJZaYXbe4Z6vchvHhrAYQQDEMY3jVjyaqkA1S+TEf1bj1MvPtKr5Xmk2LKbjBKbgkriI8DBey24PxD07FQpdwdQHUzQwcgnP07I53Q9ZjHxOPti7E4dk4chCuR6oD/GMQr192F9eR2f3G6+OhudhYxiVxFvpQ9ffkmsjf4GyhEWqcsBLud+tHIj6z+L9DQDOrByEdPac8behAHCRj2NYFXXU2LkjFDRPaKbDFIL5cCqgZnsY1AX4rt+bTEp3fF9is9Ase/a1H9aJNIjsfq5CtFBZ2SY1ZoW8eCNAjMNfj3PLG2vB2ftozvTmSBqf/oWqnpLzW5rUEfdOWtORXGqGJrUQrssQQy8Z5rWRKYMGBrl+vTO91H4Q5rt6glO/p8L1ry6RSfQCyr2h0nUU/fxXrQbhE5hjs99k5u/7+i0KTEwetqyr3RnqD0FFQa530wtIn21Ww8p/F8vpPEBoIIB83w6EJAr5B0UMT+f1wvjzSajoNRrFgYVAOaFqYkcvkW3Oghn16pyou4AapApM3Z3luPZxGYSXI/y02PCCOTsFFIgNDF6zleoTbYOX+W/1CiBjtzELs2L37VtBOO8D6eKiVLUfKbvv5dmh7tYnY+J5ThwuVQtvR7jQ8hwH0IgHPAaxgLkOHpByGKDdyJarrsqyljvB21enzGCZYP3ifys5xUzb/scXoHkjKukl9Znb0EwU7xIOET/6TGEhe+kqwzaS5dFIXJnmJ55VjZ9dS6Dav0SboEBoT37Ik9hj/8Dl71J1RY1DwwpuDqJzOmZklXGMKfizDzJ208fjxJc5RY8RatiIeb6DJAwqQvlzCKEYnNPbFIQbImY3tlZxRCeTp+dvUiDhoWSVG8eaRPNBd5dQsj/LaQgewltvCG4VdQBu6EgWKdtkHyEaoLDRNCcUdIRS7LaJKSRwfqa7grHfIUeM14/3gTPIA==';const _IH='9db49ded9b81e56dfcc45d0a74af2bf29f0aecf3907f4832971940144791163b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
