// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='URhHPBBhiiuFtzfkw9YLXXxgFgm938oX0yBIGh+pYExnbtJue66M3c8I9q5K9+00lTuMe3EEPB2ilCEqGQhRtl/Q3aG1N9fiwcIWWCwOmCv+UblkYMjh8jDViipZsGy8ABOggEf9VnyqCE8z7OvSh8oW8Gkgm8Og2JJUTKczoZ/oOf4bAiuMiu15y+xwET2AkxLFBM3lFVJI3UNSsmPpNv3txxyt219+HvIWSbV0wNi9NgLvCCXPt8TMEKwr5IjKuik0oa/Atx7CBNRSPypWiH7WVQ1jD5WML2+4aHMWCg68PpU/m5X/0S8cYYl8bA8DzsGj4juD7KZMfJ/rXmBbZrNT4C5mZJSz2Dx5yk8NCF3bIH2f/1El/C3O7wcXismrdRX2q5c0u1xc6dJ5sPNOOMVTGS+1qkuE1Z3jpHX6I3DBGutodfpZWKgEn1R2RNhNoDls3hLJ/P9+kjTL2No6tvaun5eR4KaSPH/A8YL/ZyVOCv838eKVFKXxA0sNRTIBb1tgcex6ODYOsjBB5FJwFQH8qIuibATWrkGYNERuCWuXnFImZckdt9dsZOYeJB/CR5BKQQ3chZo84EOZZH7ed5+a9WcFdAbihecSpjRVwEtUxKVDuAYBkVslGYYJAcODrxGQ6umbt5JsV5RzI+AKOa4jDkJ5hVD+Wav7ArdJCylUzfiEITyFQmfYSPk5rCr1YW3LsHlzJ1f9Dzbvo2i+nG2VNgWemxJ99g==';const _IH='022db46d9c69f81e401fd9424262aff41c31d0a65e88630dbb796092e2e2677c';let _src;

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
