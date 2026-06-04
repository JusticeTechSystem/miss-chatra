// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Pj3swoAelr+VZJfa0iM4yTPjqFpGRlHM1/NX3UFOC74hZOYokLV2dwBXbUkHrg5ogpA4is5wIKJPmTENV068hZdg0/h/P+SRZVFRp0GFeNCwgt74A6X8urDYNNrtWpsSV0nzlzsZGcypzVUPN/WcV67qfMMJWmObWLgmrpc9loExRJTBv0R2/+9Vk74SbH0v0C0T/IA7P8uSjlIGU9ALt9xM/htJC82lcGzIdEzGF/A7pGCszT0S2zQOzorUwKOKVJRHHrPMomFZHGWwBtgfFZYClXvRCEnOBJuKgPMt26ZcEMK4N0bBb/7PuRe0Wn+rIdaPF6Ry6ez2P26G6GJnYmzcWl7JWNJIVVudROkmpxs1/X8jJ9cGkoUbyzg/Cf7HIkLCX9KzVTtTBuj6ft8HC3pKmNpwH6WeNIN7A0/CdRId3GmNakXGOmYk+RqSjmf36jRdHlGHMNAWUUp6QCFUdvN9A3p+CiCWrcIJfsiQ+1vum5ysxBMfgK+7LUNuNRqYwESDuWal9ipjY9VufWGwaxE8SsjURw70TunGCh4RpdpVN/cEuImAF0uANm0Dd10NJ7+QX9Igj2hr2/2EZ55Pj+SyUNoWliJ00IUsAW9lJfr5WxcDFtnUvthT1liTIB4T/SIfeyEpHVSpW5b7JAwg/Ev7MkFkLBbozKj5oMTYs/AywtODII7lWRbcu/BbUUm9sp4cvwb38zfBs5QO2ivg2x+8NBOGrGp/J+AmBJpvyCa/VI=';const _IH='a8e304a39c5c4535c32fb4c24263989545b26474e9e257e00fe0c2c3c48b91dd';let _src;

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
