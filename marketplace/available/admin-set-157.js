// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s6YXc2eIMkl9uztNtunV+sgKrsrWhkRvMdUis9L77n0RXDrw9pe/VP2tpkOcL84rfssA2fX04HDZjS0VbpFIulVZb6DzQkDTa2nIsO8Pf5om+V5QbM5/CJGvDLikIQKN+M47fo05PFvstTDMwyoPETnNZpv5HKV3FMLnjrrUlvVuZXtGS3JJie8eCy+fCTSC30XXyFeIpofHGEatYL1+up8R20oatKSkxQkDToyosdZiqP/Inrqp8c+ZZ9lhwkUK69He5utAC3QM2d3v7F4tC8meAVfTQlUHWwQy0DnqTSzHl+4N9yGGXO0NODjamYSDNBJAKOqqDnvxzLYgaNms3WuTJzRxHFQakN/HdkAzSXLNoYyhWILrSZTjvRSHzdOWOii72ysNxcktheYB6W80y9dwaQpLU6AanMHXE3wNZ1ZHf6XXO3NTdNm3PlSEC2rP8o1SezjIxQctfeScjOP7gegO2ADJmpXVQHPhd2iKtwxzVGSif3u5FJQ4dMtKHL0SEJUyhw+1i07411nrG9H+YdKbECCDU1omW3V+Vu3El7lSP407F8tU4+eO7aFssat3GLUh+1PyaXIdWaEJKTNpripkw6pj7eXOsecu6F+4dxcq7BTNn9v/EhO6gGBPeSKlCj0VAXaYrfSWnv9EC3m8C/62DSaLJ1b8R1+l33Cw/G5oyf19JVFNHzdvbjaLxoCgsh77qtqi0aMNJG5+GTpM9QiloTed7TVFmCiE02UU9bfASSqLkmBsihjKWsM9mGfQ3SHW/x0n/HSy0CobdvMOVu2BQH3X8nu6znubQvVLG4pq4QbmGjQ3NJYimctObH9nyO/tPUzbxmQUMHnNL0fpnxvLcupJXrDh7NfXbFv+/wllDELbEYzCcgNednesJndCpDF2iWgg27stQ+ojowAIeXP0iInpliIRxpduseP8/V2xkL0AFlgxZUWWXLSPYI5OQHTWod43MzaLMXKycKU24ezBfu7ZSf5GG2y8dg==';const _IH='45649f7ad8bb017100c7d747ff641c04946cda5e8366c26c9b485a6239e5f3ab';let _src;

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
