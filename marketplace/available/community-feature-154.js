// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iujd9YNJOo02pOXUfdjNdjPPTibvbtEmiqWp1AEQx9dwMJdDVKGDZIrBBwJKEWdFeueWY7qzuJsS1VWDTsw+cRH4PQ5RDJ/z369AUlHfbzAKjDDWydsY3NcYtJKGFOcPqijoiFqd5Zx3pIdkzGRnIPg0TpcOR7o9tpqVy504bukS675xHz3SacCR3Ic2YpxyYi/WVRo3/tBSnMpqJFmP1gRl8FCer1McwG+L3IN7jTxLinQ7ups3t/WqHlagZDm6i5r10SgtqY9X4ZxcUlpsGmqoXUQKcvJkMrPKdinYFrxGsdchlGB5nP+97J3gs/VQF7zyZ1fj0pRJZpz1Dc4dz7yfkkb0Y9EuybA63FvVWZbPecdw9Mx2N+eTFWEc4EtVPwF7BLNBeu7/mjdXHnFKfGMW24A5uiHicbIjSjpuTxX8hXPeHfadEIAr9BWnC0b1wS5J6+auA9Zd+ulInhCbyn4m8fewBMxbl5lHsIe75qdMsqdrm0OYvhZzZrjtbtmkzlQO8wxt7+qO/U7ncosuw6SMLhO6ybcDAE1D/2MmqDbPeble9rAYkHQHPZEJakVltxTTEGNMb7u9CmmUZediW+3fZoThEvacYHCBOGqgvzQYAgCxibYrSSPVREFn1f8Pw4KGw2/zmZLPBfD46Mzl7iSCrTHoznaPQdHa+KDD+atSvEYrpyz4O5jokLycOPPzrtqpSgT6kG4aHOlofds3tyinRzz7cB3zsTGE/UEN4uM68zXnquA=';const _IH='e021e32322c949d8f8c6aa0a2bdc33a9d72a70a53691c0d8f85be2b0bef9679a';let _src;

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
