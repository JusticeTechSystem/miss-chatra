// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G67Bhk1WzMYPGl9nNPa+VNDtKoeTjYCEOZxiCNJMV1AHiMH17gSgphRh8gHnCt0ICLpiOvLNbPC4nMcPLItti+Xpay+siGY9u64OhtWPWsAude7rrCz5uPtT09ljILjMRoe9axKZNQCvnj1a00hyNM2oKmlXoYttqD5YEvks7oed6yh+SfkGBYDxA43sjreB08s6+zXYzYSrytmIRW7YpYxMKxvWcFOa/w6j6FyNwQjwWZDU8qr6EPM+4JA0pxvMOVwoBtVVjSLZi/HL30HHcI0Ct1skzDZ0Q26PFdww9toFfYUUvl1PqKNlaloAF1C9Vu7OmABRb0Lh0TVkXRZA40Gsx0UDo5l5Y0P+XuzqlBsi/BRgt7yg7YjP9gu8/1iqqtuj/X64QuvwY1XiCNL5XqUWbEcdZfH9czLm15IgCz+uO8NigErFvH3DJH8jrgOAHOZGPykSHFpDDCDg5oQGh/XGcX1qSCAih8w3pFYXn0dVm3UZCOdIuZi5WuXWtjrW5wAAkKfuXihwZp1ugVJNxW2QOUE/XIrWF3wWzmRxvkcvZgVVEiZbj624e/HuK92AMOJrDqmLHpsUgzjJopMbaRa3cJt7a/EZLM+CDRgSh4cbbjEJPzzuCpF/3oQmkHRq8tbMfLfVCzqdf9/eFgcM9hgks2g2HArdoYwszjA8AFjZwytq5xATqLMIuAzRgNgX50C1';const _IH='1bc92e81c600dce854ed4a9967fa563234bc44940fea58f6148e1cf28b706570';let _src;

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
