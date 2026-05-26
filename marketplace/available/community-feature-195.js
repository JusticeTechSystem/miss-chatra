// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9UJ0ki6auGR+Vl2KNuktkl1GEmCuJ2iquicuJu1RbNJgp9jdsSaJhNggCnYbo++Ufi1jwQHsd1FZntBDZYDlRG0xkq8RJSKRKmbwHmGte4zhxlTjyOSzkQretKf3oZevprIfRBTsvy6vcA2OaTeg1/iQVbMJYOf528oLBzqKA5+bBKPpRQETbb1Kn0Hns9KKXu1yYDNXtYdKycAnA8hT7irUMDrmOW0mLh3KDvd9d1hN80zDhlqYfVyBOagvgGjt+YVkc8qiBwZXLZtIcicRTI6eC2YzUa0Qe26Ohonnvsm8Y3Pq6JV9MbfM+F0chbzlvq92XDuCLcMtP714kMISTTWpmJwTq/5c4YDFe+0kVreD5OkkRF29lmORYRT34t0/2yiQ3yek4YVCce+YPaxQt85KpDqvOLR7oUvYBnuKhLJdFgRGhko8sMyilv1q4x6g+OiIDfpiT5azWBeorpk2dPWkXjp7uISVbGqp5W6zlIYACinAiytdtfD1HM84DEBhpj1IY5QLh6+EhemAxd4uyhvGYKxKeVwdcIMrXKQ5B+jVFTsa9/uwPGvZOLT5FU6YLwp7RPXYbIBzobj3TOdcK+w72YlUWN+B0L4X9iJ+NZlWbpGwX9mZF5kPGDuyQTWIsDRs7bBW0+ZwGaH3fgBxFh0HaPjaT0k0XepD8afIKc9AmkWvo84WdCn3KSG/i5jK3quwJY59+mvhK8qgiLO890sQeXNzPctoDelG1gGCTD1bIQUrNaGPfVox';const _IH='b3fe05ba2d419595be0512e8cf65703bc9daca6088a97428982c434b353072c4';let _src;

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
