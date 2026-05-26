// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rejSJjVwzYpFlAfSZmgB9m2ksuxZcNUqTLs2Fra/WoHbO/hVWdJE6Aftbx3g7wZ3zYsQ5TNfTcrkUdqMBtxQxdP5u8X/EvvM6dXKLynNA7d0AQbAtuAvN1G2YtbClnpEPPWl7Ia6RppYl0OiH2rmJzpMs1CaWbixs2WPvu0DShuZyCSpnWpS4H9FkliOUl0dzFCMIkchyHfc9VfvFWZkNF29Fcra6i0qctPUWiUVB4KJIO0c6lv0PrbvK7sJ5BTyWwZXPRkG/ICNd86gLSs7y1LmHs5Bbyk4v0b6hObXBQwknbX1qr1CSzioB60flUeia8Yn3xGuHv2uXUEx/Oa5+1VEgdhVTuhFH/LcBm9oIfFBYpTmJDi8A7+CSRkcQ3eojHhjgq4Tcil1uVCTAewcbstTfXfaJRglg1ClkgUzjDVzmiDZaT0yn6zm4xoaKj3hwdrNxstCmSbUWc/EhwMsjUEAMGSEaVM5qlx9jjgiWo8yWlt/JCiYLUKprouCghwJjaMikkxOwkDvPVsI4Zz5DEI/N5lekK87iR0J0rq/yj7scA+Khqmb9OcZ/Oa8bD9mbC8zV0uq7DF4GLPJGOziCHWnH5zRwCjSNc8LKcyjsG8LHfQGdY7Wm0HkmTDTKtv+/SUelb9tbdMLJmv2gaiPT6QS6jsDhkJpEZUlK1F/swHXm6ED6KSalShSlgLpHSYYcjaLZR+VZA38g1ovpEfqiBlH/yf2WT9A02nkhfvXpBCS5WBn42F5QSyhMFs/Le6HuT2ZL36J02wzWw69I7TsgR7cruKjvXaYnPu2RgHGlpMXEWugOENpoMdQ2ACRBhbd/az873JFwRDp5LtI9pojluwCSGtruPr4WRSzh2lyx2YAoXm6kSUx5auwLhQr+vXeqA4bG2fS7aD8hRspP0N2tmWiWiz+1Uz40otmM3fz9MNFrfYfijvy0wp+dde+cH/c/1CyLZMOCVWn3GfU3fGCnyUeYCCjbtpTf86B/RWgOvLxJfq//ztRXHvzp0dSbwu2JiBTwX41b23n8Y0p3eid67dGFxwafpOf+wVHfePeKjdZkYVfJfoZiyKk46W5vrFTOTPFom3ObI+K14qXxTFsHzrFf7OAsrXmchyq+C9Xj9ivpXBNKaJmKsxotqfpE/RWfwoi9YTGMTM+4Hf8aRoYuCZ/dY8PaCdwS5dLxjlA1rtn/BVhPFW+LrlruByxaYkmWijHmTeNCRfkFF5KkZ6J2n/tJLAMCzYd1PVxKpvhwXKxMtE10s0ldRWYKC9M7AiQYW5G1EE94hO4DG6520szxWJ4TyeVP6enQ7BZMGyRlcxJPB6ujuhbQI5K/RZkb++41yEPKFv3qvTlyKJ/Iss2nt6D7Moh3cXmBl25Q51Gxd+4AVUJhY1BWF8UOu/liEKRj2+Jp0sr/K+NR8iM8rZn0rcyPVKlnm3ZSueczzfMqI/Xb4CNe1a9WVOeGOIUtwxVHM3YaU/bplQgepZ1R/8d07NhwdUETqTDPbx7xauXN/Gf8ME0gH5Tgu6s4oNyFEHN7zInprcam5tP3VCsnhYhZgG35ltBAQpyWcy7eWU26xluYIHYwznOho5Gnrc/a5F/WRJV7XU=';const _IH='af263c82624d80c22826b9bfe2560429ae89477790d6aac5ab8703bb6525d636';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
