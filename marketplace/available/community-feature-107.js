// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRnnMxNYJkmtKjPD9JWiMhgDMRkTmZyNlUKLY2UK5+PJhjUY7aTPDi+eKfccqImLu/xevhCCHwSFipwqPlW7FJf2rhz1ZD6xg/rW5mfyY3SYZP278UvLJWDkR4tGyMKBPlqy7jzV8T+DM+g2tOrPNoB4lo8VHfGxsK2WZwF4VZ57FmpdS2v+Rdr+pYMUNHz5lUvw0v66ZZDmUAP7TTtHICukKI16Z4N5TeFDZMlEMyQvKGe7rumqFmbfbIEoc6QI93AW0xHwNCM6hm31JRzR2lO5G8y3+fSLVp0e3Uy0ekWLn+nSRfb1MrhLvNLbW5eDGVZr7ORaHDbBcCFwFwvbvgpB/HX1zlAFtBoaq4zSLe4KE2AOHTKvN3FVJnrFFJrykd5FCKT6in9qNSEmMyrtw2M0ajpHtoPE5zCCrI2vlfgzqFX/JFprLgpUdWaqixqMC7HdTWnZrDoCSKZvVAuBkMqqpPU4Dv+WJZbHw1g4QBX7/K8vXUQdIJfhdrumOoB4GRZC3w6tqBzCevRIB6Qa+/g1qxjWzylyrYH43S7ZYzLWchtbi0DO25osI7LHH3BdiKbqR85ud66MzFfCcJzkKsw4YqpOwi6E+bpN6/oatoNnVhPtcRFsg8EclBeHbz/vvYsZyY2k3OCklECXKKKPYZLik8VdCO0U4jp1rGMheowClVbtb9zS2al+JWZPJDFFAMZKZzOrX1+skVCJs9xExb8IOrrrMefjQ8Fqx86rqnwpItI=';const _IH='f8557e60155dfbb27be210057639cade313c6bde8559e3720ad072db4c84d095';let _src;

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
