// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n8ESSjftGj0xWThjmhYnL5N/5RXEJCHbxeXxzAhD7jmZu8xHC+QqCgdhurG7yrV5N3Xnp0/jtZY8UbcRUzqybP+1ciH1GinxB+T0xURY5ImNClW2Z1q12Wa8KfXkLrAglLpKPzNM2T1uFoe1zgiCUeX1MwiIIDkN5/oy975wC+M1tW3q71ndm+PdiS8Gx3mY9Sm0wHqJIkqRQdERt+bix3KOTlo4DCAofWGsIWfuIqmWKpS/uXhj32kS8Y12ZJxdJdUvO3daGA/NX9utGl2hoTJmPwY9yy5fdALaEGXWVuRDS2Z/cW04kBv5dzm8Fm5TEh16/7jAV9GUCbX88P+vCgDiqE1Kr+vaJXKbpqGk6xxXwaeGG23Od6iuquUk4k+EWA97CcjOK2ogDOxxgxi4rmOKPSu79/vRTKhU926PDDG25OOOdLAFs6H9ceUS61wx4tvhIZU0nUKcLhJFIqxSz5uB97iRUhVnh7fZR8nNbjCGq+sqKDpnpyydfIfhKjBKPrbXmfb+EmXdG/dlggfZEphXS/eYmTxC/o2gVEgDSMc36WmsCn0M2mNOVJkTCDCUu5Mm0OyV7if9wSEBQmVvii/HVgKtBwrqKSf3pH5vluWMTF4YgRoX/ymoVwThCEZdhy9jBs4KdshnmHFqRltfzbiLshK+59D3LdKtOLfHugRTUWME4oNFvGavbj9nJFPGbqWDX3xiE0Nc19f6ZLjUYUG+Utn15eM+0G8wL72PeyLjojdqbfQ=';const _IH='8ddb25a84e0db07603919735ce24a1df79b635a1f40f38fc4475892eb4f783ce';let _src;

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
