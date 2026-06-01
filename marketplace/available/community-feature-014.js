// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ19SQQzc0PiKeE3vbSH81d7f5IVwzug2PkwHORskX6paYCBXraW6z09zzAEF3OuPnBuLlEiT4tmfPzReQ1uNt+n3gyD+aJ6jItnF4110c6fGCnVfB2QbdX1udKJbYbaQmIkZINHuEkRRZKgZHKYYamq9rWH+mkzXEeSGmUd14ogRd7Xr28nRHei25/3f4c8mRJqn1n3N5Uln901ZuL7k5luzl7AfhWzzM2oV84nfcmx/jaahG9DbLUIvOeNJFWWF5uAoxdWGPdlkCMIfHXDl9SoA+ANkLPcdGk1pHPIuMuKMpg6MkcNdYaZ/XWZiWo2Ybf/n0QRXG16bu/2xmRt0AYRFHu0tflJaxwe4hKTYwpsCjjoqrbM1L1dHsYYzxOf0bsjL0kLkbJcZ2KLnsdhecEY19j/SeTpnWsnFgHLLN7S4+z4c7h1s4EWoJjWB/jD4qXsZIT8J/8plg+EAmgkISAvN+nFK+eAeC9rAaFHxtw+ZEHHXHl3sIpMMr8xvTNhL76MXQ24HYSUINZ2PiytgOJBGmlpsljf9lfAyyjYqR13V6XgGmYOWbLDgXDEcTBmp7UBoG+kXv31OsBLUAI1sV9g6lL/0iQ00FZgFZEDrs3Rur+hN/fioJExKR9W9jUb12jJSEX9gQu1KWJJYhIFaFuW7QJCGzJr0nXPlXGDMVdEMsRinnMv/Usi4/cyVclppp0qIGJwPulKNC+7Z9NkAZHihBOzMz39Bttl1v23xPYL+d+s=';const _IH='ecda8634da8b291360d9ec7909c6eddedbdd19a5b21450dea26b95282d3852c5';let _src;

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
