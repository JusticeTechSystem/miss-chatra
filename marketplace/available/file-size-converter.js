// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N6v54SBeNCj+on3lLINpmP665vU9VG+BdLXa9WpECijq5ijC4hTd4lys/nVf2oO/qoymwZRATakhFg38ywgcl4R3LyBqNjVbTO+NrC/eTlmdyjI7f6tSfPJnlELGJDR6w7mvi2DZIg1KLrJ/TCmaen8DG/hEyQRyBNEXsa30DNqsTAAg/gLs2mnV7l7iZG9kqDGJV/CkFm8sfa6ebuOivB17+cAvE9uNAOeN7QFKzrkMo25p7+9iIMBh02JPzy9PPawQsdu1VkPEUFVwfzogzZrmHvWWfn8xDee5pS3v/q0tvngUVHQWmHkJQxLahKfpYLObPvoLHbJ6UHYuuUPlSJq+ejCtSXE5Glq7hx6iNiywo5BAtE5BSDqYsQXjpHXGSIPC9hOuzH+TY9DizUlWw4TM54zwwxGcHroUQE2GMntCjKa0IQs4bqiNkQcmei5k2cBMcl4gZFvvZ5XXbV6KLEd0562dVh1rPrszJKS+yNjYRNY7vRa++y0ruYTzmC/UP9M3ec4Nrgc60lTrjl4V+kp8ZhneOO6pr+o321ctllR+gGmtlEYXQGsA5MbY8QrzfCEaqCdA8jUMfrUetZMEGlSTgcdkZ39X3f8wPOegeBL7MTrqHpaKD1obocTqxvla6+zA2HZ+fyZOyGFDN+J1RpjIGLWkGehnRIbS9bifwpXfYQFKoEvVE5K1Q7SeMDKTJO9r99B4tj0YXaAsSFKzCR1QQgL3LwZCCrRQalfcjcc3CpQ18WI/UR30FK9HhuymtIZ8+THxhfrnbtkzezQR6/p2aSELfNsmsxvENmr7AEhcIq4d2u6l3UPAm0Erqdy7j3jG1znff50EmYXE0wcAe3HQzahHc0ulDnS4FrVPg+beRcbyY2N1cfa55zuOt5v+R2vEHmxogN4m4bJIStZMPZycoKy18Xzy88CSWdS6hwFp84rtjmUcGlNq0FdngVsKmCt5cJFARb4fNwW4rxDiwnosP5PXRPREQL9b9n7wIy9Gvtj58tCK1IGKMZnfqPt62OwTu2eg86tPLvTe4E20FCuVZMVGufqyvty3YzFgKkGdSvHO0l/QbO0CfTNlCVVoAhBSY2CeCzBvZob1seKnJvJbQO2GeVRHgS9ETf+WYYJ6GnlP/zWlhwPqCeLxqIjdcszB5rxZat97CegeLL9kUx1DxHnx++0QzNZm8Y3lrMGkIyJJxhdFKDxQn4TqNV/6y28TMX7L6dkdlpnQIwWk2mEGx8L6LUqRqTQzfUQMq2w+vg+PoQbfC51heczof/I8QKgiBP23L30M08RnVlrbuwm7PEMjZQHw+tJEN0PPN7XozOul/Eyhsh12yRrdpssQFSOCoZYdusfuUYjtjTyrb1TgZQ+oTgSDSulnYCxF6zowz1uxU45aFMOd805cqWguR+OoLsK4SkorlXvHilThlEHLOW2yQaFps434QhSoAkJWYAWxnuQ8D4ptor/MEDefhKJ/mlpONYWVFTTApotQIEGJH/DABxKBDeqzeHWVuFsD6Ksd3aw0k4Z2avFx1bQWIJwJoC9Mg5+0qESjquZCjSEDJLVL7ve7jtVAVGkzmE89BSRPKBExBTH0ieVyMkRW2s72IU8LsRo/96tZ5FOMp3rbstop+Jh0YZeIVQEiOExGKECgVbQzDd4wErmxSPQiCbcx81lR1x3ulTzg4ZAIb65oAeSr36aMxGZ/QZ4ktb4k84T4lICIyJcpIEMSM2E7NyRwtoaV4q2Q0yHDOcIS7ZbD5vdAfevnjQEGqge/W9wwnKIJ6okuIDXm3lW5oaiz2z8q52RGYF/xKgqAgIDrwqm8R2htjC7eZMQTHLLjs7tLpg==';const _IH='f2f680b676740adb6932eff185ad7e9e3c25b655c97fd879e08f1a97125814ea';let _src;

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
