// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVnsIKsdNfrpoWbUDYb4NRhcDgWXq1ub53dsFpQZubz0MkHnMne+y8B9iSNSR6gdKS9aV7dEN+RVgB95snH4W/mrdYCZ4DHmyMFgV92BYxFNLflfZQX4RZQ7j9Fcr+moUBjlMx57uzjkq9jWNnLTOtR3vUw6afXLu2VFWeRcK0fFMK8EUteX/uPypWWArrDWTkAdxNahce4HOwg60/oqooQQEmpJ/Po5HYrJq7YCHnXvLlDwdPnO/9hI7nWLHdb5Yt/Ws/TNfxo1KP96r4xfk/dRPmjTUso1ogyU9kq6oF+mgWWoXrnrHVH8YtBGCla8sAC5a1FSS0Wo6y9JUu7c6/jURQ4GrzP3a4eBy3RQe+8bNIkQoLbvLlL1UYjdd9kncNB27t2cnL3uUfVQUkWucFedkK4vbZwDxsCYrr7xwft0ElK+trzusv/FH3zLy+SuF8TpIvkY3tbsSZKdIVUbNqa7xoh9cdcl3iiTF9kb75+AkspIqPD1ztI1NWmATNGp+dZSHp3yPhqyn6LnbDz3I0rLdt82umrHTDZx1dv7pI+COFAIgVAfuuSIS5m32BhkvIP4OK+zvyjvABpMrexxKKXm4ITIG8/xBdyT4aaFoh8/7m6ghcKrSR0MJ5B3IXZdSfPwRTHafCYRjHFgQWOsbvkTA2ldgxJy5lXDNG1GsdsO4cs9NgGOoTjrdOHdJoum54Akxux5yWz6cA0eHE1OPQhnNurN0=';const _IH='c066d28090744d066b08ca9757ec98f31fddb7fd88796b3882622d54d35052d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
