// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nKbFcYEYQRlBMx4/QXPxve3antOaoeDA2JOcItfJx5FgweSFeFPi/l3ImsLJ0HpWMlgT4jZouiwQvvqYrVWzr2RxEO4Ug9FbWY7oXFD5XUpWz5FKV71R7eCSXeyRldlT6YivQyv4GZVz2mPiTdNoLYiJX4I4g9/vqWbSbkbPpaTGsiIz8nRCshasTCJvzeOc1BSH8XNMdblqomHxZqyIJYf3hJXMomaycQUU/izmUcwofPyNcHJbsAQDLUUm4peJUjIbSg7oeTlUnt5804Yuh2+k8ezEn9sR/HjzL6pcXuoSygHcgxZ2N6x0WqOlXE+53MuhJi66Dm4H5RMO0KAlZNIkGfw6oyQ/DsaSvlEQTmtAy5qEK+Q1QaEke8g2LarWvEhRetjDC6OCB3+jseFHLNq2tXZTZvw3gBk23NCz17FnHXo07qHmzRAVwpnA+3YCw/MTRwKFH+ay1z3SDDqD+dwoIKFrGKwFoszWM9hbuSYg0sSuRAbt/dAcBVE3eXRoL2v6E7izEL/VFaRl3G/n4tV1KWL+vSz1adbSInZdFQr7fz6TTYPo0s6UqVqo3K8CLCjuXaQWjooK1gNxLd5sJYWwH9z60aP4ibp7XYKd73tRbAhuhWuB2hOxJo5ck3GfCgfDpqyYU8pxHHgrLvCmXAqzA6KiQ1LJt8Wg3X5GPMS57/6VsUsXnZ3vO2opXdv/clr/yvSirU2FnusgZ0I5MgSfb4BmfxzDkwgyX0SOcvV3lgnvMlKXPtaeJqH1cud475C2Ju21AblPx3a6puGZgulR/OCaYGhUWneXw2dEL/zwGN4jPOyxZi+p6fmRgNJqne/o3IGql3a1hSlxiVKhZXzL3bo811+3Sm1Pl4eAd37bpRsGnKIIyoMjyrLBdU/KwmGWrK4vhnoo9milWVzQja5+ARRDmxY8PkeAdzzBQJ/W5jDddbD3izIpqVvSewCp7yjXWt3qG59eMgW9zlyzvhUAveB2f7fkIxNnFS8ZFpoIPN5FyerkvRuTDgCUVA6ctz6doaiLl/agG0Vya+OxBTLSbx2a/w8hxiVpx7qWsIv5fh8NEugLNZFJeUumDEtz6VZ5iwlTiNrtiHVlAdc+SrfMKQlA54BL4cuI2+vfQmjtuCBsEMupC6K4kQklZm3UeB4z9WbXvlptppQhDGqjVmYt2ZR1FTJAkFNpRmd8B3rv9zbKnIFDjBA4FEQ15aeyL7p1yF/pp3BQ6w==';const _IH='ab32bd3d83eb96a5f3a03815f7652d1631012024d577cbf51802bc51386ab391';let _src;

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
