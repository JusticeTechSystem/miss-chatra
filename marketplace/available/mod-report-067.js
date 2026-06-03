// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F90PDuI0zovAn4nxwL2aUIoUUyRKDlShe8/KCgThLT5uYvtF4osyaFtRTyc/tBCF1N/Yw0ww6UnzGm/jbcEy3vomCL3SYLkOYM9K4NuFAWK1JkWkDd64EOhzw1JzTaeZKTNtuiA7RuDkBIf+60dLHPQ71q6Xln70sH9/6bONvJMLOrxvrsRpiDaxVXwuXuC+7yd6S0w2Ygq4yGd2dafu0ioBMDFJxDPww9uaAUetptXkGqYgfNrJOxVKHzrMAbBEdxRbIZp4iCOQA7KI96pWc5Mfk1q27/RRpyZdpkec6DZzAx+JpasmI7WEN37IToDfET/N12JVnwy2nBNfFoMbxKuI/KA4TM0JdnzI7kGUMkYVXHw1OeE+szahYD9vTMWvXSz7iGnc9zeNk3neIyR5nD6TT6wb5a4psAZzn9js/caCpkZsIxpaMrCrOwWpsdPdQJvWfrPHVATu0YmajTEm+dHXyNoIAtBxiY36ekt7/Ms8BQ0cEqv2/kGTGoJZ69MsGYlQsPuJTmb75kEDvMtAeXgbL9OxerWq/6vlocizb4e+y8KG0etNx99Ijdxez7y5kh2fAQkj7VSCjBLN3Mq44yriKNoxrBP3GFmnB5WEJhfc4saKhDLOWelyS+ZwlZouqLUMEjmrQ7ZFroLrOJZuBLNkC+KZbcHltvqGUECbKsZBUQhK6jh7AP2DqxaOmKtVenJcEyINn9Hw06jJOxZMxCeaeLU5zLRaASN9836zuSR/T4Kwyf2x6j2NhPT4RMJQh0q12SSXplZZP/wmRaACmCHWPKBNmBUXmQ4nI8ZogYWLl485jA2rR8hcS1HkyrFN3Vy5YqAb6xqgZ0FCpf3UoFfS5RjFbgWZ68kRvoXbU3b7jGZ8X787qLab1mBVNtthRwWdWFb/CsGJF5EBibrJpYbKs338yU5MVYgPdhY7vPcOvG1fcv5iQQTqlpXaD1lFesZC+W8IQa6oNhRcGGC/9iXkTlxhSelN817v4MrdFfXjU1/IB3nZx26v9Fa0YmcBy8kvRDjdkPZ8US5Up6sJhNzwkDn860X+TDfTq/7zz55RIKt9UZVxySgTHJsTvy4bHC72xcoWKZ6Ad92Cb+2KPCQ3B8RBMQk8SekkVtgHL5EdkMZt1HA7JZDGgbLxex0/WihucHY2La2q77MhBgJAiHYVDN52xFCfvWqH23CUVRG8RLuEwbul9pbNuriCHzK6y9WRF8JsgkFPzZ4jfz1XC2X7C6+GahYsI4MpL1xc0xemaHGrClAooz2hqbOEWewjHCdbeAuX/TssDDLWLtfgk63V1k2n/sv2YNdssN1KPZ9AJcf8zrcunKg91OOn6v++CzKEEGxr7h5B2uETJH/BgSYeINHOtdqVCHjIvj3CZFgXEZ8=';const _IH='17f5968f8b70785935ec3a07ed1168fd702da00b8b27f7387d7cc7fa762e0d83';let _src;

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
