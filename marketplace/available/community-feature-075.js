// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1/4ml2WjDKs33haG/3fgXVKZFim+ddk6bxjzf8p4wKNpsggllQL5MMuoH7Y6NC8u3ehHDYeKllLR88Z3DEY5A2ZEpjqzQZOTSdjQjTjZT6ar0e3jksSVAb9jxWqh06UacNIGGlwX73Pi52Y2NXEyWpO04TZ2J7uj/h1iTZB5RnPONyXT2euHbnltXYJW4TmMbY2o1FCtqbLXfsxrV2gwNfy68Zh/WMyLHtwihkDOXDdZEDmrDAyxElh+HAoUQ7awPQ7balwDFq/YSk3nO09PYK5HuqiaoGxtNgBbciMF3FxN8O7Z6jJoejtR6MhvmxU7ov3VRp754CoBRfUmRAAAISxBnf1lmwNLLzwHDdv452Ogg0ckzoeohMT7LvJjW3sSNr8o0COKuJnn3Hhv366SsY9egwQYxNsE4YRsqrosmHheQIBpbBtQwbXVjy6OLB7JnXYvCI1yJ31M5UY1FBeF3hk/uWO2DjpjU065HZIvLVzT+i1sA+QPl/82ZtyU5p1UEJzmTAZIObu1939AeIwnkyuVO+qrmRaumuEl5BOZg/vguI9WNmF3K5tfgnOFgfJ7j08GKyyewbnVyXK6vAbjtoV/T5hSx4imDHrX2PJNtXOvK8W3umzu1SKjkM6qGPTiEakpW077EMs1OO5EJCnGsEI6KG8E067EBCxEcP9eCK5EpILD7YSOVar4YXpr6HR1rOG4k9nKaJqbmgDGy3I8AhYn1FYB7n+pHhACOOj2CiLXHDfTUE=';const _IH='5c4ef624b386a895244b1d5e3be4799c19261a9aeab134a6dcb6510c77a54f22';let _src;

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
