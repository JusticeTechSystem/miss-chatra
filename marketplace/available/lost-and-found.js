// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D+De8lSPYXdVwgNsx+cKRycw4o5R1xygyNT03t8yuZjNP78npmkDyglI4YSZtS4CBdSGJHnmVk8v+nGaifa7D57ytjQQbDxz/ny1PXJXVJpSjzMX1Z92v8K9YRya6pLlymI8W3N2ZBbJWsK5ivrJNZdEoJo0G6ogDouWaWvoLeGyjPlK2srHUKZL9p4Oo71ALhrO622ntprKMTv9rjiCphHabWfxl++gsoheEAMveIV25KmcoEeIvuU/ApE7YM6sE7hm4m/vmTxvaXSOGOrT1O/71A4HeaTUKCCvOHsu7TZ8Z9mntuo68/qxwM8erp8JVRrkE6OKvrMYBWDdSLtXRxeDzl4pXM5IB5v4Voo7ZhBMm74LkWIhUIWFKm3shMCwf9v5aKd50YGugeZcQ+xV/Bmdtoj8/nmzoae2EJQ1YyOBm/C7axGzvNcqOk+R9Nx5XRQQQLlGiZEUgF4gyfr7S5vvw7swk9nDIQiWFVh5U6TZsi+vTS/lNol3JszTUyMbHVfHTnWtdxnF88b047Elr2m9KK10+eLMLdlUuCdTPk0YKhIunRJF42tzEclb2ccB6cqUQKILYytW';const _IH='c4ca5d5f743acc064d355cc29a9065c6a37f8855684e4ecb8f56dd4dfc39be5e';let _src;

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
