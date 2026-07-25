// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8uYRAuUYr5oN2zjhwsbV/gMTSQi9pZPznHX2POoEIv/KVytWiYWjz6cXQ+jqF1grxdZ1379jm7mNbZv2LiwsVbEPKPk633TRRu9bIWczzphV9jVv1XXTtAJz2X4lSapTleQzAiUtyha6YAGXKo/T3/Nc1GY22s2cc5NJn0CapcbYiulgCG8a4XAmOIvLen4vvhZdAHAzYBNq6bfe2zP68E7RjtP6KkW3V8X91SoCdncTlPEqoz5a5g8NFA2hpF8/wlM4Iylf5LbpCnLouPhw0XpBip/BcwiaNG3XM1thEHC5E+8OK73pxAMZ3MQ2EZ8OW2u7qfJOIPq8zUeKGuOgaFI/7tGRKHjNmn2cU2QQTagfAvrRoQvVG3U94hAefa2LZQ51m1KKPjOCFO4w0GEJoE1TY1Ppmz8AHEkgtdEOEed5E71FGyRE+YUICHe59BrGomEp4RMCHza+fhhUzpTPDeDlj+OBdygICP94p+VwQ/XISRqkRLSuoBSNYrnXDhhz/YJDaYzwueEy4rLByuXLpiUNeidhCSH/IQi4o3j24kDg2Zq16HPfq6+v1ivqKLXCaRn8AxbKpZ76iRT1RlLM2+1DkiTYfPUZ0QWiGMz3LpXxGBqW5i3UyQ0tR7LqTfNYKCw05+t857/mkOhL0xdZI2dcgXnjPl1CC/fzgrSvrK9kgE6zY2bxBA4xTCXnvf8zK5W4gZvwKgD5bfn8HzwwgrufT1bhQGdR6dRLczVdaqEa/UmR4im46CSV1t/KAsWcI6ew3tdKLueKBrYuJnadSKzx1aQwkZQx27xpk0P3T+YHhAt+UQZDHAW4Te8Lk88P6oD5++E/b2aku8qbODFQRKhsWzoA5nYBzMOr8HjleoSEXEmeOcuQu8CfRp927dow6H47ZXUNIA7sg82OWebVpvg6IrzkNpp06I7Vq3bALh9+tIdpegzprXe0uk9xmhKCpWIS/bTaYxpraOtcAJkO0Z+sFi4Tl8zh5dt9bgWGtRvuB4YSYsbi3bHsMbCJHVOd06M09WGXL2ZurdWT03JDxk26FJOuG3coTT/3LfKv8NZI/oM0SwQd/2TgDllE6/9Sa0+q43dBdZOPDcsaXuqCDekfnKF2y4pTW7O2oHw++Zc1lBvE4B6CqoD4pU9rQomxJQSicq7ZjX9/kyd2DrmtwZXdMGgBOIhab+ciBAZiLaEATy6w3/TszHUL4/ruIC4kth+9j+3ESpoWBhDNPgJE1OKKHUbJViBL3sakC28sgK6oklUCPeBWODY4qoUK+PeFojmcewHxU3CFVlAgHHFiJBsEgIDujHoyIla9ljzRjqgKQGS/OhiZepOPE1PeX41lnOgfiifQEgm4GFTDbifSievfXvNqxM5IBApDubwU7jhlGZQ==';const _IH='eb62eb83ca8204757ad9adca9fb2f7ca46c84e6eb34d5e78a4204e5cf0d20c9f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
