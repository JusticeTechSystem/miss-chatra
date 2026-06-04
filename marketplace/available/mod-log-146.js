// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fk/lnBf4Dl4T7ngLZ5ZIsVeYUlNGVacp7L/lOR9iM4hMvKnTUFZ60KqkcDtoFGQ3HLM3oyPSWbzW9JnHoNeHnJIBP2Nla4V+XjPQ95+Nj3V+QLahrj7wkhHzVm5Rip3KFZ7Q/zJk1tSna3r3ua5bQ5ItUJAscobTHEaP93Q5ZXq43oMXaasFpvFP3fAabHnEG3IIQnPa85fZ85/faIfD1F9vpKn3Z1c1D6jht0fvsLZdQkvqDwVnad/LG8E+4BgiqzKks6jKac6QWLsxfMj2V43fnCcNnX2fsMvpbb5biblZ16ceX1HADTlkZm0YSAk3o8d3y0a8MyzS5/XE9KxO14097GdPsLF0X0JUi1RJ8AU/qRu9j8+CT953KwglyxTzJIQjcdn/KBZYcNsJc2Gw1dFQjdhmu03329RFCPkzv9hLycZ/ePmUmvftWCgpY8syK5NgGUFmS/KBsfb5Zh0VmWOqXnBFjpNndbdNR5T6mdS8t9nbq7pS2a+VNVlKBjBRZlM/CKznAEkBLHAI/xpFsrOIWh9a1//x/d5AMuBQCoE2D0OiLUPL/B1dnya8kHtf5mbDMjpPijl+8yTf6w3Aa29cBk7iFQcUBA7FUuvn6ZXex2/sgFwgXWX5rzBRiK53VUb3HQTMAqIHwufbeqkX9W6GbiXXl0QuDTVL6Tgbclnu28sqOLDqGui3/sB7/ubRg4CuMa/9ccgp0n4CN8H8j5mDuHJOAFNLM5bQYVR4H1gr1ewTHIO4uOZGIwlGTmDs++kD8pBupmMVrS32C9ut5FVQ59bQ7FOTW1En2NDiDl/kXt4OhSarX/uFc5ngM+ImKs8bu9wuIqTltKK/4GpwA5HDxzKwy+XzfJ5tfac9URzVl2BiJZscD0kgLTC0GYBiH/RJUxMGZMyYezR6uxLZxNb+B00KU+pZeekV7xrT6oKJqaBI9FskZ6+XoqOBB1DKDkGq1NmDOYokCdDuSjdZMnfWforbvCq78BMA1Xb7/R5SbsvidbDyoGA4zEK5+7LkTJoVlJT5S27K8SKyFSnCOcBz1/27S0GgWysoT3EhF8k0M+v13rCGGFf5Kn9pQalBZ481hRYr5ifsxVXvLM+qlFqiISGYo5Ifbksc2E8CcHAmkFa7/Xr1/PXPuEvDyznUPo6JajvFBcZ323zvfPJT22tuROJBlAb9gcEVoosDatxdkpRuQm5m2QePF5yTZjIIq6kk9/17NW89sHnRM+9gy45ref4LcTZ+vM3mKTkLUY6fnmTOt1azAXQP0bfdHZWRvnBLh5x0VfpJkibVQmg35AKW6IvYPheBQUuPiuHmDB4CEDoUkhiIr2xfzlh2NIguz5btTp5SL3VGLQ==';const _IH='545caaca4ee88d54b039fb581b32dd25d57cda89dc74365661e6146b313d6700';let _src;

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
