// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Gp/GDcGs3cPtyiJn1/h9EfWXgOHAshxDiQ8XxLLqG164qDSPJawANZ2wuxZRWOtc5KBX0TFed9bwhQNGUDabtIkvafIhxDH457mNF3pQg9WFq/upj1rAUWK0fvZsuJZTpa+iCkSSykbO3kLEJmIvWc0DnS4O4SkEPQgZ3f+wJAXZP05OxMezp7TgvKKfz6AV1Qeyx+3rDxXx09Xvg72yujsYjZKU8N7y1KzzMxjWhQ/zfI7hA3q5aQ6JQlV/KHwEeeK0OuqwyVzaAAAmJ0QOpnYl/jYugVxsrwqTo70I7hh2hELRHqyhNppmw/MSIVTx2Y9RxcCqA2Rp7W25Tyxp6TNjuIMGNUiL5oWxO9wmp2bTD1FNTjossx2TgJkAT6XowaUQs/AFE2xFijzstXr5jBqpvfuK7rmLYr1q6EemBJ7EhwMQi/SHpuGBEw6a4TfmF6rseFzJTVnagR0McYxI43iiAewdsrSfJsejZsQGv5Q1/lkKSlzjrNMBpMp5peohs8qb+i5rgthApw5EyXuQx2xU66W7kUBT35NJtlToxUHEz0EvYvnUK32vMIKhrZGRdb6gQGVJs/Gj75dHFWAZdNqNXYyVPdRkT8jTivniq9qRBPl37lJt61s+7CVRMpY2k1IztvTJGyPSblWJHfEwkOKWUusuAuPtubd7c8RURID7iBqPogKPrZwb3LnbuLARvJNUdb5AW2bwsM0+bPQgIWnzB4Ykkyj+HSm9xaURVhmgx1RHMmClszaYwcpPD0JSnBZ/FBJGCkei2Hkrs1gSP19hkGGMPO5qP5ft5IgKuHqWMT9jaHQePEW7aO8iwBgn0THgcFcKW7wXtx64Qveeaf68X8tN6pHSB0Qt3tkayC7nh1npUNmw4tsLjakWWss4UM27L2Im5IX/sXN6P1QWsDumlqUMfBdelcTtrbOFvRikEk/lf348Hx4v1obGCxwzaR2829b2h2t3+A/SylBqQvUhQBy8QHBXsM/7X7ZZJ4AE3plmAuI0MQtN6kD80LI4lxVRlDTLg9UCp4gegXQQCWO3uoIu1vaR33/gwlOt7lYgXPWA+mNa3WQk2RexC70zHMK/CzGGWVa6BIev/6pPrKdHkwywsr5Wz3OApg1uCcHMKEpFnP8ilCBUbaAs3IbRCCLgAqnNLaHAdxTPAyyOd/fJqRrvapwGVYCHiM7bRtTn+91Ypph1UClOVUnHkP9qaLvnOsLklYnVclzlUlH2LhU';const _IH='8ccb5d673244a4e890fd28e1e2b88df095d63fde13ecb3f3494992539f7122d5';let _src;

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
