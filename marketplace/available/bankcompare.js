// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cNifO0kmCR67mCcceRkKTdWrxM8yZeIV1xY21dGhlb4cElrKIV3yyZQ8u16ILicQFQs4FlbdVCfmmEY8hjeKFeTkexF1hPb5NB0KU6EptYF9oWGlPTBznZOCHDvGxsUiYJ6YLBq97euymNwrNtBz7MLB2XbGwqewBKkZ8dwlO3XExBByj/7EG43VFpEDFgDyI6ZOgSDxDcVylM2rL/aX1dExhfJYoD+18ckQJiF4EwNdzGZJ2WKvAmJeddrOte2+E/njDpEpwJHBVxKgv3ga7zA7M7WjRA4K6pYlq6H7F2t6dT2h4H/NsI4IlMmPu5vLY9om07hVAuLbdMcGRQN1aEG3ohwo+3UqVmf+2RPnTUnMlEVg7+RmCOzkWkHmMVj4X+G/q3wDYfaoR0k5nPN1QrHhzraXeoRNkJjCwuorQaN18QVQkr6BnY1YZzV5QHJ1t0xcFVipdbma4O+Oy5kP6/aKd2YM+e99lOZujjNLoP9xjvpGVAgPDomNBb9Cs5pbduM/NUYIObFGEKSIXvIQeJc1QRoKNkGtPAp8UROcizFYO4kUqRTXJhFXue7fw2ujKag0modeoiqpg3qx9YDfRc+O45EMflRphgyB5p0/bqcavsCKcI+nGlDSu8Ab5qTyKEcey6jjT9yDb4j17U0qkfuvuDOdDlCH0UqplVEI+p4ymMLQ9ahkBK/70eOQ5hpsHiPtvdd4GX6djwpBTpR8zSnydOCCnbOXXdq4vNJJejKF4aTjiWIN9mB9MzbqjPo+CEJxJ1lgh+FEddTSC58kzzNVPRMED2Hn0AqYTHV1VGo+TH6Jhr5+ti2R8qF1UCfnL0L/ZCkvXrWNKHqkmBB1nlWbmSV3kX7qv1IDbdpze4WBOHpA+1tlctWPFPY7OIp+Cfwr517nFqaUtgsTqmKq0UcicP6YkciCoxOt2Gm3ZeJWjIuCxRh06+MPChT+AgGs8PSSYh5gNrPOGhI/92+vv+MjePWPPxXj5OwRkQF0Dha/0eM9VTL2Ov/76Wqcz6IFl19r5xypy6pMgcz/9fupqfNo6/IsKyW+dx6hElfglDmAryVp5cZmQJPQTYsjVCbKxuO/Ujr07K6KCS/T95/NChI3VgJNtMr3nivW3EeJ7/OP3g2pzd7DomgQp0iSICpkH0TD9ZoaEwUy3TfNkzegJ/jvxsbKQM/Lk0VvezH5QkezrQ3Wpg82dn2yeA/a4ErTwWQU5bA=';const _IH='19aecab05e179ae0afd164874787cbc787c19dbcb6227e679a280b0d0ad8eaf1';let _src;

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
