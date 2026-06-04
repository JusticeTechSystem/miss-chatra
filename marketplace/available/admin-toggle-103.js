// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aS8GxnPqJV6wEZJVa1qCaS3D+2g0Hemc1/WtQaRf7APTl5J6N8lhJ7QccMs0tLoF6ANwrNaLISijwK7OA6vErWy4RsbP3c5XUdpuKqULp7VcZt3R4P4T12YGaANKy/iHWJqzx8H/feouzU8q8HQ1wKtfyHX3h8oKCJyDuRsrkDoDOBkFqK5mIHQ6/WcD50Tv+phJ2iinNlMiAmufCBwXT6JDcHaZWKSLZWb0vHgIjC/4Va9wxYXCGbl+yrAsonuiFnH5HPeCjoNIlflHEzQ5+vmv1h4O4Nd9Zn7z0VfkRHVky6Z5obhQqULVOpiIHk8nURofCP3yXYWaNkOVVZkr8MeZRKzFRvBU+SeDyRWXxsgGFjfTow6S/J/qk9TRHMcLfF45y2MU0nuR4OGnnSH4Zz20pFf/OZ5dAYY0d1IEaLE0jUFYkWSXR3jAMmZn3SpOdPK6JU8LcGAJM2+PcX+XEiplVs0zV0A6R11rlyVnZxkaKiZArPOHVaWr48kjyB2Zq4Py/+ibgfTPKwompylgomrXtTbn6+3hWxLS5SEZWbbAbKHr6IhL4LNAJPpCfXbDP1kdjCoLMkiPlnoIf25R8lwYpWPo67Yc70Q02X0oqmx/Qstpjm7odF/qzk8uSgqOlDSPS4zg6A2zwjUCldX6xZJG1LUjQsJonVwLb1v+LfgwIEaRVTpKGt9/Qtep8ynjyiyy1qAjkIeBxbNyVG4Vl2y9xX+N29RZRya6o1Sqd4XF2McTR/vNz3bMSiNBURFue9sSgZV0EsRo1IW4y8dBNNBdR3TvAs9PkKPuNeqtPnSqBV8mYF2U6SEwOx5u5kGX/s7HalZg1YeAeGGfPnjYI6orsKzxvclhYkwSV+Cm7EyjgwQTWJJH9G2xaFQAboAfUF2Z/LAnpa+WX+TTcGwAfSkfZUA0Js9xPICxTkAUKeuuVOgnKaavBIjyhVPJkn0FM/6gFJ335glpkiSislMtSSbooX4B9A8wbriXBZUhhyBGahQvP06xz4/CgeW53YgA1g==';const _IH='abe9f3081b1cde0dd5d0f7bb0e7c985f53ec53538b83948b134d486cf55c20b6';let _src;

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
