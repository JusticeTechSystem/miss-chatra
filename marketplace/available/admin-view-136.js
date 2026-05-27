// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aC50IBxZ9abt0DOUDYl7UFp68LvQ5IXVIK594tR1czl60neY7cPX9yJmRkVBz4J17kXXFVZIG+mSnsn4bPBLIhH2M+ksZnjGtDOgAFFNiO5FW7Wv0ZoGLddABDQ+hUKD3flCeIAK/7f2UgqbzQpbq2E5tRfhgNi9yLC8t/tX2YwJ9nxzmRM/7HxCmoL3x296zvf2Kw/3x387IdZDFQMy+497KWcfViYhTKPYmHzIq5KIhZaunVW23+MzG76d8Gop9BnT1rieb4RegYhqq83sDqajO/lYUudwPn75dFakgWXN7VKUjbh0pXHyijGqZdaGoPLqu9dCH2RMSWpWsdAQ7Qzu4ZX0oVPAkxSNy/TXQ+3ofXB+jmuv+uS76hSnz//3kp/x7UVcY0Y5W6i/CdCeN43OBnyeKQ+wpo3WeuqNB3wWgNGQ309T9Y7R5kab8+ffrfqGxxdctD14ysXbC8MFEMXHTSz26bHqxE9CnoZMIeX46JGzWLibE/O4CCjozs7IfP82356JYRLXddbB5LwfOI5HsyQePgxNU5oZSRgHnBpAQlapkcV8D+aN2Qy4xzxMmK/IIajVY9fG8kSS1EVxAJM3JIo2Z8zhzVbCfaWRdbpj/dmVybJew+BZHZY/hk3apjRqfu4qia9bdyTu25ytzMY/ffK7GfLEIXWkh5ZGE/sjqTPiQJL/7e1xORPlImUcWCS8jDyqeXWCwdZ+Ik7ASrDk5WtGhW29jEyxnwPpRS9IuC6SY0vPt9PWxP8SYcp1rIvMM51HIKX9h46v7SOfZJTWoK2VJ2ZQIuZKzaXiNOgQDM/17wjmTikRHjL8/VV2ZxuOI//HiSTOxKLLNa4Vki97IDwDdJxmpUmMwFN6tciOhvOw4iu5FlZaWOTdXp3rUYxcfzOW10ipTsxs3uSYW2K4qn9xzNwgNo78fSbw8RxzkrxGvIRuB8siFfWJ57MmL9+vATUBROOZCkXPe+JybHwOaekNpZVcQk/IsGmWk8q4NLo=';const _IH='29276c8d8e7a5e517b9214b791ecba5acc29b82342bc3c52b8c5be41544ceff3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
