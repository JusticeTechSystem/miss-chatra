// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FJWpFC310HDvotexZ6DUahv9fAWO/8GHfuUCt7htNczuUqLq1nLH0zlcDWByBbH7WBEynxT8EXEC2Xq9R1/aJBHtK4oTUDA0eUs1ePZPJZdVrsh6raa7sT7gg1WVfa0psjN/iAxwFZPl8vEVZFBIc9iyqCXiXdOOWnxdIkyYaDkYd3gpVgLgRSgudwd/+mhSCzDfWX5aMfi0v+WxQMykilKhoYbt8koNralvITuN1Revq9v0rQs48FOKYJX+9S0imO9Fk4njA67a/jUIISW9sMqyYn+PHiiUwQ0Zh3hthTEYE3Q/t8PsZIp9CVtoBwrdLeRyoJg6v3/R/YF3s4CbyHeElB0O2naCWfuwkCZOHvBkzQbtLuPKA72Ws4FcoxOo/hZcLkCXAx7IwSgftym2xfmykcyG8f2ucIJ1XdadCAVXAdERIFsdR6hLpaR99U2rltkJK4uUkJ3lx1ZYFf76DtW93JO49hPeMkPyykz8XSazI0Ut2YzGcMppBK+NLtpPuSlxZo0+wiG3olC5kYn3ufIQSkyLVes7Atip8J+RGHkJ5SY8+z0jeFdwdoh2aWBoaMD34l/PJ1WqYnVZZeIj3gbL1V6DoKSArPHD4FBcorFHtHZfg2573CjWJ/hfErcK3W+kNtMOCWlLJwlrDGm9hVgSqqglFfnAnuzYIbwK5PfxN73G+cBRt8l1O0JWoGgtbGgiqmjukaQyUQXSwWmr+qi3Owr7u4EtdW9v7DRq+s5uMpvjrqzIgFeGL7SWLGIVEvr511PuVTgpLlap8RdhUHvsPQGn2lYsvfgptry6k9eMjbXjUevEC9Vg8xJXXsubW/vEXzn+y3IMF/azSZn+UyH24xXTQUoacBebS/ItIPzzq35ry478p1cn7CiAXIcPC9ihsrDXE1dxmi2NZZfmygM+WkrKXxoiA8Sku0HsT6Nfpa4xXNjOZUwvDIcxA6IsxX3WkZDTqH1b49bozrWF1LhpXPAc8NYRTRhW5KjeB24H1GzHSu4=';const _IH='19cbbbd399cc4d7744cddca83337f66aa342e8897c09851abc8a09f8d17816da';let _src;

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
