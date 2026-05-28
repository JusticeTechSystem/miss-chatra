// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0PjrDu23dTnfsqPb0F7MFLdqnq/OobVA2hw4LwDtnUUf7rvQO1yJp2eCnuPpYLHNELSuSCyPE5QCf1LwTw1Dh7d+hMY4lobYvrjfocE88Q7VNj7//sY1EfFIb5ReiS6U8N3NEeso4aFqGBgIkvduEvpWyl6RYdyuVF/NOQR73aXHLwNrTd1lLgJWEw+OQmrFFUPARrqAJBRMh3376EBK7aGw8YQY2ASRn7EdcVISY+w65EPflDx5q9c697BFI5NeDj1marsOIzctXtLjgtveXDjzVYLwmCsJhrzAg3bglXAwbzg32CzyrYHMBPRyO1Pnliw/ipxNmQ4Z37P02eW6Gqd3jvAhXlwHzzJbQ+SzNYuXm0sg1rdHBvVRlHpedQkfX9mfA+wAWjwIknj3OwGE6OQuOjhHpQsK7XaSne6cS5vOpLIkXfBliWjxXuSdzgK7qWOHc/vieachf7o8cCEyQ/alT5Bxz9djVV7AwwV5LPb25vs=';const _IH='89693a64cd8e6682988691696489acead2cf46abf40ba795223ef14c822471ae';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
