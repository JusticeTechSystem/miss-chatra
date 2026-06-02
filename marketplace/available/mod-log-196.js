// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3vFBgTboY4MqT/M7ojhdHJYDNWqrDKurNSEYdvW9UD365sWAW6hn6TaG7UixZUiN834kl5vgN6y2TeuKAGwIcWqWaR9XMUdfAnbFh41jvvnPo88kY5KRNpHqbuSHosZ8Tmz/+JhqMCd2QXDRz8y7XvF0t2tihjl8JLOGbjHvLAZ1UfHAC607UrDT7pcJ8h7KhdYs4qPM/PpDCDn2KOK/jLFw4DawJSeqGWNM6aCOxLWyTbeSM8dTpFcAV5fxFOxehQSAAALdRXoEYS2Gk2owLnlTwe4T/PQDlX0Y3sr/79Hh+/bZz4Kw0TZCUyfaA6OKXS0qdX/I3J0Lin08kqI7EHnvrc/9Td7Rd3lLkf4lvX2oZpk4pl9XP2X63YGE6m7oryvSAi5IIWnQQT1T5tzuRAGetP+n5CARqVDsMbtAfdA8n3sgffuw2gFd8KkdGHR3uii3mfqFJPxZO45RocQzDdvpN+rNeVcZSWTC+/4H9PKirDCdk4uifANuDQkYjwrcADrWfRHgt671ZFI3ybFLqVjJGSOS6mxMWeiX/ISumPKJWf6wH0N+JUnQR2uspwNk0WdyWK44yz87iTuBddVAZ/BlGE59Z/2Jr+PC1LD9Tgu/lcf5orrjQDGZNxr4wZ/hujYL2nSA7gRpe7liZx+NCcpWCtC8PCUl66TsbrH2fZCXp8ei/JxMsPwPne202mdinijKhuvCNWbFsUzzmGZJ6oR1xjmPC77D0f8AHdbeT0J6DcH5JHeO7fYQx5C5awKX/qrYEgtTvNPq6p8T9Fu7Lg+Ph9qdb/ygHiHp0W/4zLaM+h7TLhg1VfjbiEmZDLCK84g58c50vFXcmyH5WbkEwuWqsvObDu9dgPGThJqloYlhjMO7WvP0a8xwIduvNLPhP70WRxYY/t3HmKD+sC4i2Jai9/FX6fq22+ZNxAe624Mh4UN1VMdlEs/RP2w0U/5JPYIYCZl43nAYRckS/4jbyAZEF1nZ1zYQKDQ8ppP2A3y/uiARDujUKx9otOFuhB8ahL7uuRhY8rZTMLb5YgQ1UYjCkwDAa+RJdMRFWaVrB7Q3yw9/IPypTZ/cNCh/NABfm46+OlnWl+aQgVbRnki7dhZYqGPnhyFEPdjQehCV0MbY356gMskAXvZMNxwZliVAjUpU6azprB1DMGnaJ8CyvB3balqNYiWuaTUDSFAoA3BhIVUoqac+on6RSLIr9xlXDHTfTG9m3/D/8FypDzBZ44JUPXvm/JWKMh8EIBOPKXgtM0yVOCuZhDruxKvPtBIKmjb4hjModVm6OES3znCKhtHdCkcwTMT4IPixSJPUTX0TFxvSSbLJeE3ViLVYwDMJsyXGvSBV3ISCbA==';const _IH='cc9fc585b43cdfc7431b91ace1bb92e403e7f8ded84aff8e6a8f6bfbb7bd9256';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
