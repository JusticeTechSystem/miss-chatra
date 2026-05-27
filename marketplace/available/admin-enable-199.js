// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ffoGwG+ZqSQr/Eg+QQNw4o/0XWfo1BJ8olY7IF4Ww3i0LLDuU7EvOaRM4c5n8sXIrMlrIJg8Unf5r7hgRfhISZ7DqzSt9em1oxGdHp3xLvS44Zs5GtyzWu/6KLVBV06mmzOt5ztaviTkEg+5JxwcqoVLdfQQdv0950/g4bifYeGu2AV4WbKr8xj6PgHlnXhAotJv3MgUquhRwcbFHV5vepaVeqcOZM6h+HIjwIqlgIY3jVcFL9XDwYOg0rGotn1Em4UajWx2edft8KnpkD9KAo/2mHTJOPtbAMRn4Bnk/X8TJKkABK8AXl5hFqvALkZANQj4X1pe9EQc1ebFzeFia+LrrHgtqr241blBSYSRRLn5mzOS/NRJiBgo++8KGXuBWE0rcwN9LdIMX5hMB7OBul6ikQJzPfoYLq24YiH6eKlcslyj7usJ2xsvkSN96coNvkrgUWSLSOs+mCRKcCeYF+8JjaJkcMc99L02v6XLnFhg3WFxeUMf+13dIP3JlBwm8ikdSn1CE7df9v4WT+RD2doV+FyRDE3LOUnC9dWjjhgzecmhwFpTAzgqSMwGCDQwR+OImHHSDzaFIMEnam/KfzB0YM86xuVcylfjdq9Qci5NeLFB0Y36rRlQE7dd4eWlYwrviFM6ND+KtVP5gxx0nXQwaCfoKsg2BWpt2qR6PxiduS16XtTcNnwu5ZnpGhiS7XUUuSigPziey5f5CsqR5D/j1AlYoCKsv0pqubk6zfd+JaiExJZzP7C2rt2yRtkgTIMPahvlC7sQ67WuRIGJxzyqjYJRQ/yvScq1G8ZTUwE/uPgQgmc5KP4VQIlM6+wgv4scCW6u5K8wmP8TehNfYSFmXJ0IR2CtIV4TSDLAsKJFJBSlhPUhcZ/HHtpbsfkw8PNc/BYRdcOjeXU+A4++HHLeHtKOGrG744RdPFEDvBPFxPLDsxWSaBMAl26jXWJ2YQaYQqznW0W9mMecdrwBssRUUPW6NcrcZuIrxP5dfJPHIr1HxP46dPaBNozUpPNsA==';const _IH='9aac1fe544a5e2bba515369e57eb142f2dfc53fb9b27faf6f1b569ea915bf074';let _src;

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
