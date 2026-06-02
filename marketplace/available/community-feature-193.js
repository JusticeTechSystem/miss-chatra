// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TjSWaT0cCxQUUxv6318iOFQfx+r1R24BHG1h/xRcb9Sh24VitSXuZTVxWEQthwzaFw2ibk7m7lJ1ntNO1cF4djEUkhvNVAvUAnQPLNaqNzCtdLEdmTFzMlVuAjU52EfiXP9kd1ro0j+g4SSEPUBfPPAEcJyLKNqmeRGGa3A3rJqqvUxxpWByiHHm4m1gDk6jyYPgfpJti/I1cZxuT+9vUhaW6TzafWQNRxK+uRKgDWjapgvCJ/uuu3mwX9gGO31Qfj7BLFtKBZKtUnVBXaoVZpoU80Txu+OhW0gYHTohnWDoUy3/FBx2kRTVnacvAObsy+63OEI5ZUzlWTlTXQmb1cmvbEj+FA2QSvfdK9q3tv+SFwxoMoz+fUcmDcC5gSXVOGaA8gWms3NBPxJQMtFRpKzgBGc1ValHlh/iDrqTJPbtotAjGcuaDKtVJPUt52mOJ3XEhIYsMWBBp0Gx4t0en5iDpCQ2iX7nM1gpWT+zIc5PdwUsN7IzWOGIh9UyoGuvDkvuwixbKtiyPDHSHuh3J68Ss0OL0O/R+CY2zwdwPWvTf6MMrX9JeyCR5o+O/CYGFdPiO9IMJYalgz6kzdEDV2ZR1cwkBlZtrG7KfBXsWpL2g8XHPj5Xwu077qdF/S1NoiCzk/Boxj85Fz8lrjj3E4OS5x9VnWKP1GCgwV1toCTBUSKph8vy8lQrkr8EajqWgUm5dEeP4p0yFrJSLVO7wv9kHG3I6ZYW7SdXn1U=';const _IH='c1a4304d0b164f661d9061c3d51c85e97064ea641bcd80ec247b991d0d5ef6b4';let _src;

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
