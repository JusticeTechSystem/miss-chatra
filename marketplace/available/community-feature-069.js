// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DxlyKpl9bAfnqKOJEMlUK7VMnokdnb9T1wpmR0SmBxajXsuD4XvyxT3rbxwcZxz8YC4Jb+CxjGaZLuHq60FwMVsH55yNWbNwp0hBxDrmSbaASEFG9bnICD1RM3MhtVsbkmRdQk0yrUuBDj2K82OXsRyDQ1U35kNRFkFzzpPSwzN0zjPWs6V7x2kf6+2b7KCcuDZUD8zw6bOxs1Kc7fkhdOOWpd9ZGVvzlglR4crrUINy4nvbAVtBwNW4H67q8wQrxUDPBCJj5aPm21ipUST066uk8+MMGDz13i+4u1xsHHEQ+relU5s4rUhtCaYoJ7ea32To3S6Kn3We8vpt0YnmVlcAXCXeS6Bv0M4y2ek25R+2uGpHarb9/1F6waECBBTwxds1FGhpcjCPAAxx1KtY2JcB1dY+AI+MoO+8c4aRZlLryXuDBq1nRKUlUe7IuNqdXHYN3TvArhpejIuEgXIX0t6huTRpwb78/jB3RVqPo2t8jYwqnaHL7ToPxRzQrbCzEIe69YAENFXz8fFw28T/5W8OOt5xcUz+FnO2+OgLKINqk0OgXPu0gYxejt1FKNzGJEECZKrBWN5d8j9eoJJ1ah4xpCpF4CnLBeFSXCBi/9VbV8YQA0tGWUKBn5U+k13ow/2G/sy1ApV/UN8/7xx5stKvWm26nA/tyz6u4/noBCVIrs20x+Cw8xef0QzWrTiMgTVXG9Hsy0dKccd6JU1b7/adidqzgJtQOccGCxzxSfILmw==';const _IH='9ee26e9ac4890cc89700556163c9f73d1404c712a52118a93a11d24ab3f81251';let _src;

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
