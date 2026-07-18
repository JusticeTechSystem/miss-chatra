// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpPOKDBTFQ73mSGbzTG5+IRdqeHsoW6u/S0jh7itKOEvNs5rBu2ipE70+8Mvn43gjKsZPCWxDefI6TZaIxYjUHvBtaKP4r/079EZhzuvU46fr4VwsL4hPNzGLdSvq+0OcMtudKuXwgFzS1ADUGEiZZ7wy3/d2Ypjc6flq3Ge+RlTuo+mgXP0gndyYUS9xqQmeGPmePnVDf16gREXuprOu/rLb2ppj4reOrqVI7IchZPqCz9DA9xqXWgA3//Qj4oSDC1fPUPycaHgZoM7iVhnjPAE3nN2spjE07ji2z3whPP72ADS/B3jX7lbhr4y+bS28h2rw6ns5kWMfe8nrz5TcvajI+ZwU8mYK5dBhQHZR5cIC0X3NHlbFrYfuStU5tSPQ1M6y8yGhrYsDTyKHEqklhK6OgwnncVVgqPuldjpqpM9tl0NHgSDQJYL9U+seJDIPJD4abVdfZSPvNzOjjJ2NqMWMMNTYZvPUmLmnPtaa2oTILD/9PGVliz7vdHqFpuAOBkqNLFDUrMU8zLSZaVGsN5KaGoEldkYiDUGoTv7Oc27fJPWTNOIKBsAEvvUL6ww7bX2jlBpNl9x0CmGS/R5WFRIVbgZ459PpTFQQK5tI40ckB3psyWjtGRo+OOaIrqAGf9Uf76uc+hV8hJt2nZnVfsWdH/RCdRXHHVZr1JjLcrJD63E088IU6Woe6dWmGEcDrefak6l4Xu3cX/o+55L/O4GaGrXrxYMsPaXIt5gN/tAnTZK3wReY8FSs3wxpx9hrfqJnZXnOGglY/On8bdl/m1400WGsZ+w4J/DXKV1E7u99UJtwNc4AjQ3uou4AgSN7nUj8Sm5/64fQ5+JcIKCV8UawF8RF5+POd8OvxDPn15VBiblTkg2Aa/5RxKBPZKx01mJXVko6nJFAdUoYA1CpziCoCag6zBMBHHaoAQP8KWJ7uX9THJ/YGKGIwVtH9hENcKcKpAbD6MyAVQdB97RGSFMOW5NS8yhvUKv55LNmFNL9ry7fRWMvnOVSygUxARCk9lo2zoCWJIZt8Dlixu3tdx0Rnis5tIIzTtOgA2rL1QIwUKjQ6Fw5bwl2IoRr6gf1MEh/Ew6p4SQnbvHkKP5lW/9787a5clkH3kojpMxwxDsfx6AzTwga0Kp7O9t+zJm68paF8tDlzTQ0oaXbBQykzzN5waVy7RML4GL8fXmTDuZEKR18XtJHbpX3kj40itFqGPz6mtCnHtA==';const _IH='eafff503093e4d298373c0b9d1a5467a9e95001ca129c2a845046d270c0069da';let _src;

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
