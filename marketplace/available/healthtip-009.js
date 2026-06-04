// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TjVZbWL4PleWw2pACRr4Pz+DzdRTqhBre/V/xdnUze1G4zQlgDvae/wrRLEy76LY2XvhtnRiQf7L546QYnKCIln0MYCBiT2R3WuTH3k0IlWGWP//zlTVBAVj2QZKYbPQVqbxCCfv00ssqa+LaWheCr4qnXDdM4Rxly03VcO6qMHZ9pV8KmW3xV5GCgK3JLWJz8I4oIL0mDr3mpXS6cbL7tVJtoVOuYS5IhG5pJqVdlJeREEuLN0jST7vNmy4DnH77w3Eb2ToQ46PkHhnBpUc3KbRJmrAJXq0woEheVGvGt4GpU/NE6PKgYhLZlMuhTmxrbYk268CohjkeptjbaDG6Fo84gzd+5cIGG6egdrr9jvM280Fb0RCAEQUasHelu42UJQOI8hUDJkdOrWj7tBRi0CJkvb+fR4eo17Du8DpMvpa5Lk4XQurLHZv0cUx9T4xVtyGi+1G5xHBA+qxgfNH1P5uk/kovT5gPTu2O/ovpSo9TLdqJOKeDzayCwmJt5tQXIT7in7spJa1QyVg2OKu/Z/dSfpOmTS5pnTtRSEl8ueo76PwAiugBKODWVF/+hbmjvub5bN0HbH/Y8FTkbbpQNYib0aCbSrpvEbT4qvneUTmYBIXj3PP7/Wd11rY7VePxUCpykNBqraV1E6H616WYhKHWVRuDwN7BMjSmEtykvG+IGuXscvQF5UUnZZydNShZ1ShnD1fe2mZmAJlPrEKlmqBmVgn9r4k4N3xL2xZD5iRz1ZZMCDzUSXF4v1UjFvyV3ns+bkkGrQ4XToWc3BE1qZHpryfIXmXoxHRlRdnEuzqZK9bBRbcMJU5MLvJFoV1CZmmFwi86n3rv1u8UEslPUfFkDV9OSzXSh89oNW2sGAKfRl1HeULHI1q+X1WiwAnkFyrsolQXz4+cF1JDbtTVGi+RECF0/u6hwpA5Pnga36gWan9fsSb9A==';const _IH='9fc73c01c5d24ba609cfe4cef3b80de53d5f8812dcee45fea9b63d34ce0cd850';let _src;

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
