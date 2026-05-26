// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rVRkJ8su6uV1vcx2msrRJv6ILDXVeY5DGNCt1mhLTEKOxFxkbTBm+YoWbX4HDku5jxqBH/xiT0Dv/nmUU2IugSUIdrjP/Oq7vZQhHqZ+5XVSIIBuOizsGwk4R3Vvu4Xf5QljxV4yN78PF0qSFd3c79q2NdZlIdut0ydP+w9/y//JbNMD2Q2TelGxCyAZtmFgcnT1v5yM+BjvG8pRe2Y7bCuS1mKpg6WsTYGn/qQJJFLFIOZ5u28gcBq+lOKCSatBzbA6J+kJvVTDQvAyehluzhLQAH6pXV/Hqx8nSB14sKaqM/znWdRthUYhLOOupW8HhzhKt6Cghgqum4PTcIhcwlOmySy9R/T/VkfT0arrVzktTRksQ1jFGDE2Vcu85aQnVZyaQ6yRRVTMEQeNcP62lpMg7AasCewKp3mc4qs+13PQ0fuKt6/frTu7+ulMFhc26xgW3uYyLwY0KOPG52/oBMIqGxAhda3g86Qv8prvXnIfB4WLf9aClya65RNv/FMcYXE53Lyau5aMpvqVA8/BFa6lxPmlNgaRkIdIEFQr2y/a4XR/a1ElQbdd6nayAO4lhmlZL+HgzPO0xvTLuwwt26ChS4qpv8iD1/ngzHYwFBCC5jjV2oSjNskXRgLD0br+gu+h19Pa272YeRssDLd4VlypKMJe/vC1pBudnRmBpVZh+uuh45PVw6r7m7qaiqn9pJ/4I/O53J76QXilvs61iJIy3SFt7VrI0uD4vuyDRZaHdiBxmmJRaxdJBHGkB2i6sHLO+z/j26bl+wwQoQmYiOamtW8ZUVu+WH/T6PnFw6EB2AFLpFtoZW9SU9B/MJ4nVQT+QPFKQa0qE1krHISYYqipUbw8XuEKN6oN4+bXszUIHa2frLY5pS7VjRE+UUr0BX45VtM4tBWJ14xEQ7H+ZtQFf/pEbdstJmx3fQDRqJ3D6nsrv3pAPrJtGu9ke62aU18xeT+f2k8igNDHk8fWdRJJ8Hzpbi1hlrc7EDNXsMKVN3UzEBs=';const _IH='a762482307984167823cf2b34b74b9ab9b75dfe2c5778c9d64724a67f86db63d';let _src;

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
