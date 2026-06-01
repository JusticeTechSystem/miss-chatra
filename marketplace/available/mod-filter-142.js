// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx4vRfIA7vPqTHp+S0LAnPW2qr5sHdzf8YcWyXmyjMLju88UNd6IRYFr48W/x0nVx+EDU+fMV3byVz9hozUshPSLcKCAKBoLlElEzveRpEdXjm+TAO213bijqrVJct35tZhYqQds3i9A6i2RxP8ZMz6JvOZMUUS4H4ivH+WOhJJPQSkffbgHeV6ouxzorqjeIZv66FXOZvFlalUzo8aDKWXOoQSB30wBO5ldvOOdSb4AR/Gjowi9eK6+0KelsoLuH7uwT2ZyC437rxBP510OIAw+ACvS5kZfiQ7TK8U0pIaHVvY3CnZjGqsuFjovpy+yvqFLFkQ+UwnN7RVNYMRXrnK6VKbfWTFKcBclAnJfwSQAiJx7JDd/vVxzel79yGqIZAPz599fI3+H5gjpFoKMxVyor5viwIMpPAKcZXG4sAy/DmDfUf/xQ9Tgbt9SemJp0CST4/Ml6IprFYprqpDYL10o4w/mwaGYDbpeiZFZLaCTsNDTMvKQ6/mqtIlNna+0/E70d+y51pPgOR7tmVcL0uizcRJBjkeG+Xx3ihK3n0k8EvdB8qaBFiAyzFitBoAf11HX7Vks3aXrhMrqItWMBMZz+gLXyBIMhfRWixnxj+tB8zqNgLln7BNnqQa/Yl1s8et/kUGynFgkdqAqSqYtgy2OmtlZ8y77GQNYKVyLphectxdgkNFlpWu4DUj0+GFhh+BPwkdnroj3+iLF9ECIzkzakdvSaq8y5EHxFzXBwMjNE3zLxEZxsACI17px6RyUxZFfV3Rb9a9L6VcoLQRzirrmn0zW4CkGf2WbYQ8lFTrV72Iac3HIZ6AqtYcRIcpLVgv7FrMTuRCX7k5a4sNALUmbbcar5tIxLu3zfOas+y8ptzM9S7gUec3xHQJpX8fKBkXUZPOPaAWY4U2iY8NQOxBal9gR8Q3KN5oFoncGe6gCyjhv+k4WAPovECOmlN/8NQTCwbVJ+G06o0v/wDAxVyo0rdcT4ntHnuEqvqTZuc7t0J5x0cHh63yTsIZC/NVoePRGJWzOxWjOyTrcPBWSbSkqR4cCz8vp2G03oc71BEU3rKlYmLuNx4ReKMlzFzaPBk7cNXKQqH5IF86p5qPZXaExCLi0h4tw+xL40XV335LaGB4IeS9py5NI06kqrhpB1jo/38F/bRYKQgGXCL/XqE+h0d96PjVq6kkZ5cvtfiEoKG8eHx07btcw5YQyGLW3fh0zWXdFRCzP8uyYg+c9CV2MQWzPEztsS5Iy3COSPh1TgZoVTneTFKsoFooXzbfDcLIi9SUf2i2WGK7d05eigPT1Ni97Tbd4OrSWS+M5Zf6wn0VyfBKv5at4zgkrzFgyVCZPI77TWZ1f/+UH4GCTQffNZDinjemv7NysKKKS6GbSMSB80BGtJWU=';const _IH='78a706b6ea70d0edd5c53e2991fac7ab990d014e74de13bda7285f394cfbda6d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
