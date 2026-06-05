// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nVOSp6N7RWsM8yJBAFSmZqhm/+YV6biQtDdl/HNPUE9fMOiJwxx1JB8GU6hbmcmEiujaW68x+MrZdUEw3mr/ENoCb7VACk8VSPvMt9Q1+wMoEej3/qokekeJgUV1lKz1pmSADzlGjX8giqNhSruQByLhQVY+096EPbxSMH3OPzy4yJ8jEZ17OIURkooFUB5Bpzqrratw5suPvzzNcFArOUm951Hd+KdFu6BVoiyfUAwph1kVzbxO0TUoDoNIulDq9GE4I31jugUU3BcZbg7eSfTRCKmtnz1EStfAUQeGlTIstx2GwhFgplrjtsSCTNpr1eDRvxVNNgj7PXHarEqiglXx6alDfanplzPeeA/XPpCTiPyesSFq6MNXCWUVj6RTd4njJnJIWvBMIHAJ3jZ/MDefDp2SxwlCNhK2rbZXWe3yzeK4TdPnle17H37W9Rl6/ZEkIOj8M6Ace2DpmNjy13V0hu+0lg1YaIildxiy319Qkz1G+9dKXRUS/hPdFYH8IYoogho9RUVq4wYkQwW31PLub1IF6s/va4bTKfSaa1AQzU/J/rBgirVkXIkfTbozTqbrl+Zlf4HigKpCMp0wAhTMOAcOdHadnULiyzcrqCvV8bDoeolEXFJSKKeCXAb8Oj/ax2HkOJdahSWEM7A1UgJTUZngGl2cflqSSaW/43Tu2pZkpW3J3nDmF9xxXH/8xDt7l2sGqK/V6VQbjruomh5HvFD86oI=';const _IH='b0db54184161f486c6f4d8ee91ee3d64bdb6329c24c81b81fa75e65d04867c78';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
