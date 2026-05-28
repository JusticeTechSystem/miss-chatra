// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xbp4aJQpmJsr+yf5tKCXBjVEFnyw8MmqR0VHvOvPrkDCzEB09XOVwNHjH0b8I4J5KI6Vykt/9iUG/GnlxVkF8XtJUUF/vO/jRpYk1N3LObdtqZKdxkU9kfVtrjujdG/dcgr6lwwty+6y9bUzZH4Wh9UXwLFA2x28eQ0QRyTcekNNqHq/roypPNTCCoBVUD+jjNsLOlnYuxHO7ykaUcn+8TMsELWTIXb6CFdBMpXgJXw96IA5a40M7bEOR2A3Xc5gNgTZiz7utwyWqYC/zepUW52SO2B33MVTR7+E8GDHc+tfqM/XpVsq+JsxAGACmqBMhfpaZJZQ6anz3x534fs41VI4Oinc5+w5H1e/klvjwJE1e4gcfpBsPxWs4TTYJb5V6ny3sfb5m+7HU0vEjDC7XHmhzJh4H8X/kSoCX5mpvYDxn6sR0hwtNf6J8/ZXBXQ52e5ZeeG8epXAjne4zltrp7nUfMP8fHp+SI7fupeQw3eAod89iKIreTTnPOhheKobZoHaKRsSLdr8pfcl3TmBNUUT3MzwEIeOWghCGC5gIugLdt8AdkQFRojBy2tMVPdKrfTfa69U7KRacY1jzvgHwrMfdPLqfDVDUBkmce2Oq7mAoXusap5CIVUey4YwEZhGhykZyFuPHtPxVFlqtvapQcx1KXDq8ckGXSg2crQCI+K75RqO+X4/mSUhbCgxcguBq9jStNnK+hNuqr6us7HW+J/Fifk7E9VOQTfk6x4rVg==';const _IH='331a4dcfe5bb3cb8ea164a611b1459dc768b7c8f08eb1ff71701c6c41b6512a8';let _src;

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
