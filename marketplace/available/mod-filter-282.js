// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vK29z1UBX4ENok1h/SExRzKO33m+Ox+kArZM92tJYijn9oJI2H+mibb38bMip3QHKDFeZb6Xx5h9hVYeGWdma9G5RKlJjKrCMKU/dThX5dcV8B6PoiMjCBVoyjdjVngrDv1UCWw/FoQvjOiOuI+Q5yLW2sOgaQysTQmLpwYQP0lcydWNeANr9pudLGNc7IQAOilZj74DrBf/Z9LjSGZfE/jK4CyEMQdJ1OM4UpeOvyLCulQHggd7/3PP+wJd4pgqN76ILMw7cIVVgjqUws7J6SL0j0jidWvx89+RgDxZ6NX4KaB5DGBgC0fGycCdPAZM3RMhmynw0zdo+DYU6zdIPqpNA14Q4rcRkCCy5zrW6zM1gShVDvHbJsxJHsHYVCF/9hCpOV7QrNc4k0gdobpvpWWMoYc67KGodFSw9nYexmi11Q4LqdjsQkf9021wR3j7gqVgz/BsUpY5zmc9peGM7iRoGMO65OppJShcyMcfi2b3Ht9cSPeB9TDnohxN/zQK/WZJgnwLOsjTQcYIb4XA1HJYybhSmYgEgqIRCfit40MnI++SeKBPepP9ZMPZvzHAz43bffVAp0yPUYIRW/PDMJFekCknVYb8OFsnuG837yzKjZuRT9qMdrzYapNr0IiBMRL8d7xEs92JPXAzvop/KKy6ky2Ks9cUWGiVUL59Fq2m1yxtvGcqfXe0lmI++eGjsWGMtLZbB4BRTjzz3TSqCgTuEtT4ECT2drO4m4SVaMqJ4IEc31ZbtYVpvDBGK9vDRuQLQZEr6lXEMIW30aZpBiee/d27RH8Cr5a9y9F+yfVKDsC34uugHAQvigN1bthpC5ldW9qW8D9v8VRt9GACNyHlSu6f5SqOvaLYDjdGHU5hvzOpN+yMaM7ZmkN3xUyZujvuNVZi/K5ishsiR4GFmwiU+XoxeyUh9SO+EEUubt2661Dps7iOjzksvRl2CMvcSPnweiIlk7jdRCL7ORwpFlPBi/Ax1z6WrOfdfB/R3r18sMyaDc9JUOqMQzJ8pz4757j7fWoXNbsoTU+6v59SPAUEUMDZoLDX+zTc/6VSae8eEDJCmOjNCQO4Ypj9KKqg7yDFl9dW+QPYcdYYxRvqmRU8Eb4V06xitaIulwb+f1YD4p7tqpt90pnleNYgCsZjL6fA/QLdevzjQpOuBUvYitdb4j/h68oDt6QsgqKiimScFnWAUXrw3prnGU9N6u6hZq7Lh2PV0nuappFS2ZUppKIe4Ijw/VyoD1iQNfdC/FV12RAcn2bcTXVQj/6JRtqX2o/cVHPY/FxEitkOlHlIzbkDcKntkspiLYnRr1/iLpHPIlFh7w0r+GgkC995+4gDnWcI1N/wPw5PWUWh6OoNUcOeqzUXqVlr2/JSP+t1EoE0V96jrYBxrA==';const _IH='7907fe77d73b16021bce3d410b5c2092d68490c7b787d66678e2945d0bf0d26e';let _src;

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
