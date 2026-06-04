// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fFkLdcG04553qLdZ2ZYrCDfYcNEAmIUbsGiZTj5PwJnerhkGwHdDRRDV2tGkr2cojjan8GaLVvw5Spq+MgFGhEFV34hoMlVFMtrDNe7dnhJgrrY+Kf/YuSkfqME+fRrw2kmYfRMMsf02KDaTaDbM31WmY22/Bb7ETKiwgoM+7zi1WHA7OlZgtQt2pG2MI9521rwsjKFBXzyYy7HY8YhMukj5TpzHFbkDoO2qwg9U1AvK03xZxcAh+/kEbSZiY9/GKlv5WSgtPBQdN2LRIhDMC0p164eJ8pg+/FXbf9EXdog7Fjgn4LjlZiQke94uwUD/O8gc2oCnrWafV/FIl1Sj4L+lT/ZoFq/fNisPQLr0OW9knmrOGPRim+BvpBCN5i0/Anmxlt0puV9HU3gCLSAtDBQe5aN1rBBYwtk7sxDupgvKXIBf/dHz3bjlz/6I8m1Xn7lOrI23zqLghXQmJbzpAuO5og9AWteHuIdr933pq78rnZBToInycHAhqiKl2dUK0Xc7eIelrts+utbolxAPZLFgEed99ZuFNjvr08J0GFLlT4ozvr+ZYaczxV+16AtDsoXJTYDwYNsZAKJtBOzJZTGIFqm3Jwg5bpQphRQzFe7OGyk2O0/jPb8sTtDwvvhLviuOE8711Tgq6dVT5V0+dZpNc/iKB+KlpCe+6PHGn3+E9wfLVmgrHXPWfzUGA1p0lJnoLqyWQ9XuHxPX3WxUg25bbsjesB2Eu7roZXKPuZH9/2w=';const _IH='1db87e7e939b0df98eba9ffc1490b86e7240c210c325c32b05d40975d3aa474c';let _src;

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
