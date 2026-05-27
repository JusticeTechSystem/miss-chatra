// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ct5mjEcp2BcgaeiQuvt1uV8G6pptS0yUMxTaS0bNy8KXA0BJpnFMJA8RqFex7Eamt+aXClPUbPxL6ewV27EICNlDQ8qayCwXs/x6s9eJCTmfIsmaR6j12J8Ox1U/B4iLBksJfzBv6bSzapB1lkXU4flW+mRUkvY0ROKFo/FIfjgIit+jn+C1VftgOHN9KVLkWpEQbNElkCTPPECMCEsEDbWj0JsU210WE+KMaET8a4QPvnuC5LTeaduJ8kvDA2KWRtTMN5X+nSx8lT6xQFkbI3Z4H2Z8WR0hWituyg5tDTtUT+wWwVaY65CHxqsZ+7egyIga2lq8sAm5U2w0PyhLJ4Qg6bbAKvF3kFd0i4unHdG+ZZoP+/xaaHXTsj0C5PE/MYcdvkw7gkAbBuHPOVqQPAYv97UUaMhZRwi5SGcHFWXQb6Zv6i8N/hPIUqftWZffTJY5kxeOr5R+sdqOKLOfl7apekt6OJzZKtYbUCEJR7ArlOUgmFv5XJ0dQnVfA81ln4YdC0gQjZBhdte3Tu5IPpr7t8rNSb8Ne+lGyZBsV2CiGDJcvKnPCyBDuY7aNR7n7PnqQD95zGrBRGxms8UpVVcDjWHrY9ubuie0EwBg27WNUoWN2Zjl7JqCpEBhJoyV0egCBz4ynu639LOjAXiM2GAVdICaXamRhM8SvQw/DDRF5KT1fheasyTYYHlSfn4zsLcJtlrGP2ZAnv3CDjFPaXMqVq52zz0RFYxlr0WEk3fPcobsQP5UXtYP';const _IH='12547a38160f5fa092579267fe235a33c77136920a6dd4c269a2075fa6bdcc94';let _src;

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
