// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Siwsp/eyPw7BJE+UjMZMiIEVRMWAy/fPbb172ctMwdIt6nVfkLX6ElDOfzowv2LSlDBLr4ZeaqpLt3E9LfIcgEldDuNyT97P2EDAVryvxa4WQh/6DPey//Lw+MAIzZ+s8DWGPgdNKnFShE9jWRKZ3l3BMSgqMnm8lMlGGXHVeVqhrNdQBYJKt2vriuI0VNkaj1SGUnRbiiAKP4210iEUDebQWsqqJbL8XK5ZX/dbhudjkzBUjd0doeZe5LBBr/6f44VSoOnsEZ6uvN0uZNQUd6162nb71/kjL+/JQ/QlfGDX1UzC09wrWBAsehw2u6c4AslkH5tCrXtge09OCdewTUp9v1eyAnnndLmlpjJsh7uz9iQFrGU16jPi2jeLr2DEMwvSuoai1U/QiRGS29zY9c/uqdP11OciS/m57UZ9ULyB9QvSYjFEjAM2CkzLYbhRLc8tyKeZaOXit3iQOXoWFwpUjItKe9nXul+89qIIivNgncRytejpN1lSSSCXBdQ0hwugD4FpCEu+LhWlzjBi6Q/6GE+BN/GyVvFbeqFAcKeu88Lq+/jjL8HUIv/efOCSdu/A4JV/NIlcqxTM/XojM8GYZLy9HWw121Tozz3xmHdwnmIrlibNRCci5H/gJNOrF/qucl8EFgeHUvjjcRaL/x2MyHtxV6rhjovUnX+H5Gf0LVAqcyzZmdNNf24JOZg7u0dDIijHAv34VQAFV+P5+5pmyXo=';const _IH='c090035b1c6dda1749936b05d6d68f4e4edaf799a8a7896f5eb39cc5f94c47e5';let _src;

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
