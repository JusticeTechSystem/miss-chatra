// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwuECN2KuMMxLQjJcYWG8OCi7/TOHvnOLQKZVL9ymv5vrLBeNezxXPe0vK91DlBzbMOm7QAf4xFp2m0QsQCngbSFdVeJtcPxhBUJxFZAtkbi/bJit3pwFLrDSU+ZdyyH29DAbjrsmUNEBcTgzxwCCJIIL23NkSxHV3vVX7D4WlkA017g7kFvta9FixEFOKs4JTFqCJEfjSnrHaY5xDVEjgBbTR781LkgxgjwWZ6eevW/5hn9UvrLgNcEKL+NO8fIL99kbtfGNCvKJ5taNardmQmP7w61+9hiip70ueeWiHdw7LJkVUean8+NtxlybTNDXHc+8g6A5Ksew6j2RhxJCPAbuGRMOHjA7dqUzbIvD1mrEm7S1K/E2/KKzylM3AUfF2SpGjVCrmnk1+lt9gbQvaC6gLpvuBZwUOW6Li1H5RCFQLUg7v1spyZUgloDlsQ9itfvIXV06fFo7wCJCf+mZo0mrAuhAu2I9aFvGtOIL+hkb9k6bnd900qKbvav/EgMlerJZqQHa6ZMuhA9wZi3/Cef2Lj5o7c40dDfv7mrsWm78qvTw20sn5Srl/9G1GLldA7BlfyNoRbxtq7CRqcGJaqM1DI2dV6y9+gTI1dtyfkhMQ+owDOvjZQ0GRvQxHYAPmMuA4KVu3HnhJBV75/kEUPsg6ul0eGcka8Xs7D7K4sSmp+KdSw971j38xLJ/RXOcx7ioX61ZSVb/AN/0xo1OEhtlmzov5ActUm65mP75qNvwDIQ8J2oQCdKG5tX+B+hJOAWi8Dx9m8MDjVyMm2JBtn618+teA+cw5YXkS8FEw+sbT3LIUBAg/K6FGV2VmRSTsD5i/vFg9ntEBLBP1/cTquU3RpvcL6UwQ/4YPZ4MF81RxjHUdFmqiO91y9fEPPgIQJUpWv1TUsD9rdgiv3HOzKg0Uk1lkox0zzqPe9pdHBGfRF4ttjcXLkCuMJNXy+dIfLxOjWkiLtNEjmWZeH7gl9S9/RarMKiqH+8TPeh/B5f8g/0090tBuxCiELeRr65hpRxLmShEyk9e/IZhGL+UJTwd8LAlk/Wx84xaeAyULXW23DhM1RehZ4Jn/WvqYSHMeLYvb6HDAh9i3ccNFy6HP5wv+IMus1LRmCKJLYmZqHirzT/Lx1fWrc+beNAqceEah3jQNFkgN8p/1ZqqqhpvT3GdGHf/tYQdaqZ0mcAxqyl8p8UoLlkP9wy8iRBcZZXtSsC/lKnjuogZng5gvJpoZgPEmBCFcrrinsD1wQSrUEM/fJKpMzLStbJEI10Lkk4f2IfUnOpf3KklGOZncqpqLvQfFt7uUH4n+4/uw8mCtIxcnqOGUEKXJnFWsJvJ6sXy5++LlecPrCcDszpI94yaGVxHmPffH1kSF+yVO34MDqNjF2TzRlekx';const _IH='1dea88d989f83963025f67cd2395964befc39fe6b7801a824a8d4fbce0cd5c60';let _src;

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
