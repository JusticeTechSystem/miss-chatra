// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T7Bdp0a3sOPlhKcJjRJSdI0E7+zfMsQd1R6DrSFI13aqxKbcyXNzylOC/hlnPowHhLea1yKERycIqm1Rzr/plzWuX0EUC3wEQlw1AK4DFcROXfjoRbECzSVNmXCOlqoqC+NBjz8sOiDCVAsw72pN4wpBDzw7AUJGnJZ9V8wVTbizEWLBOXl2apbWEn/ayKQTkQrTtyWczoh2mDjKVU4xJ3aUYqWCF16v/9sx7JOsxDLDJbgPEw81BFUl5a1xYKIOVLyqrLa5uFcFk9B9Nuoxjc3rUN0v3PMRBvpAV7KOcm44lnCeJmgRcQSUg/PyS4slbauk7eEmMleu/bOOWKxi+UzX5uike7qkh/hcIIV4WseD8n8YCmuTh+OHUg0ZQcQVYgrHFgHZ6OwyFFO0bLqTRXeD5UcWb/YMY4mrpyidTG6soTpFlHCuJJiOw9uuG0fZK9MbJAlcihtBxZ1tZjtfySBPRAJ45fqZU3wUCoIm9IJHQEPQ00WLdnCvAGfBbkAQJ0IToUd0Va/DsdYKn+X/yEL8X+O0Gtlnmw9OoHcMV7s0ZfDXsI1CBYa2m0SR5MRKtpyCsjo+VwMfE7KNBQQxhzjxAFDt9ZFwKoP8pQdTf4xW1qghZVdlqx4q89R6Na/t8VECDkeVCVTCfKwQ8gQ0RrKhHdsn1g29t3iJS4EQCFyMOts8EIgWFJi5/gFejgJ9U1WFKlxJezMEVl97SWtp6eO9mrqz5Hrw1HOMN0XVm7mN4NPMZ9fsU5hwQ3qPgThP2xPnCofuRrz39DvrxUG+Gz4wA/h+ytH8PeKQ6laSkUUryV8+mBsIctM7f1ZDxWrebSeAnbUQglXnZ4+X+QQW73iqDNj5j8SJNfvxxG6rTjerbblY0lxLQ91u/ymiJjHPJWmso+fdH50/JwF5775yYXebx9CrTn8qnU252VKU13jHLuSUymmxJCFgdJMsEqjLudTgXHsop26UkLpDSxUwbZqnU8KmH60QeNKPkvq/lUkhPjjsYqmSxNRrgDLEkymPTa1CDsZGKEOwknFDShiSMVzg9TzopfMWKVVO/RklFVGwkufEPWQFPp6f3YP8WlwcnCysKrg8W8CbMgFb/a9RcA0o7RitIftLppnnBBaLt/OLf2SqAI07xz2TDsFyFBcbgC3M8IE4JjAzi4N1xn9khd0kDmTSzxMu3wjp+X9mmNB8DhcYQ0d1ZIa2OBOYzaWO/3b/LDH948+UC8fI';const _IH='5c35a061cf5b461aef4c676173a4653b81c2cc82b06bca50a1d180cc75c632a4';let _src;

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
