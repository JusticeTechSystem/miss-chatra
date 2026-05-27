// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q+KFQ6Gh0mvetV5ccoI0M7aKsBmGixWH5JR6wdB2ZfKhjHZGfrGlIvFn8M6LW1ImPAy991SCC8OaHjw6Qekts1CMyqfFoVTgaKjMrITy4zGh+Az8bW+sh2VshM8uzVpx1p1chN48+BG2eMU7xx6IwhY50et7qGQMwWRx2fVeLdRn+AMWS923aqBD8em+JWOsXTE3eMZhUhZoB/V61yeLT/1Tl37INaYTO2gtZE2PQPoLZC9tUI3Dz80DnT+uR/aX0us44iw5AgSG+dDjOdZ60LtP/mdMucIztZwh+5DL5a9AGB/yCh0NKV96OBMlAQp3auilIA2++o5vD5xI5YPq10d7Iusiz4juKDt/0GcyRICpo/fcdKxhbp6oYQB85i4kS0ZZ9OZKYRfcZ8/bd7VOciciV66zqY3+kNui5WbT7WUiYocGWH+9C45VzQr70iFny/ssX+CpdfcDPDEf3rhsvvMliPLwyMX2mIUD5tO+5bkQ/H1NCuNo8WLDgmcRJ0bJh34KYimp5Dj2WpN3Ms9LgcBrD5LFM017P0Fn3OFUC1znuM+l9dFpUQBvHAfkXp71xGoOawv6u7C6KJC92W+SX74FvvqSc7EBEjOWPR2fhhhiQa/+C3pFbNbhskHXMyOYNvMXhVcYUQAWoHPXS8ZYVMwKtCdW0Mk3LMI2dqAryEbJKWYhYZpGudmjFiC9uwxtvHLWe1I84qns2Za/FxTInrlljC7MoRD8HXzUzPoP8yXEc7rkVN5uy7lXfomtNtviFN+p0Re6wHhP/rg3L8AHlHwtz8Mz1VOHlOJo0isDPUKoZITKGeLOzCtgAwxRCysb4sp8/HboyqKOFZKRt6e/UATnx3eW+ZKGALpYyl45AzTTNdcLt7SvB7bmPTxoZ99PcBMYsmmHgS6kAGVvWOMw/2VN/q4QUYZyIbz8gDnzFtvrn3mAej5y22xdlmDZRL20+gFXAmdclIny177tEIEt7pLymx+s2ujhO2VyHkoyxIwh6LwphJBdoJlSPKyUlrJaVTN+19gimAjx9VuhvxC3kyMHJb7ylnRyP95S1gyMT6b7zM8vkZ+wxF17Xxxe8B0pS5/EgdxQQ1bR5zX1z2W/E9IIW3jAdGwCx9+WQNHX8JgdeVAek92n53ULpXllQ941xg9CWuwdMzr51DmNwjR94midQ0OtHFIrpz2rzPS5goIWuo2i6IjxcaeRNhZ4VbIwm+YFGzl5IbQUOYFMw/6jZHhXKiuqmu+JqJOH3MPWK3pJBbTOotf834O+wjLBG0UghNO7h8HHMHyuclsz9OeYrCs3CsIGolAYpY9L5nesD+4cSoKRD1r3nYXaWhb79tl4HidfpMwW2jEJ5lRudR8eYNjCSSobCthh7xr56X3zZ9Agl82scOvyXg==';const _IH='beffc37aa851020900611fa35da4fee79b3ea1829b3f6d90519ed98fe622b81a';let _src;

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
