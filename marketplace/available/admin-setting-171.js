// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='354g38qIGhOIHGX0ocPvxFiCCvT3MWhtUkMxDEbuw1y4Yxmf6Uy3vcSZw+7BmP+/d+wOTKZNaLpgL63bI8pKN+tNLbDwxPdHDOipwgSNkRt47ieQa/Mbz7LSiTaUbv6QrJdEGGtoXVKTdCLVBXjS33MScrt5uMb6mP06oeQVvle7AU4pI1lOr+Aw7vVJ0kHo2Fd13gKP63ZDEuCDKOZiGO8movrwNPRRe0/yUNv0/b0BqwPluIiQ8hYbyzCJ7vvPAqyCgidu3SDhL6b/cfDSId0j8gVkA1UINGKSJ3a+UVYH3NCNP7DGlfgXucVeTeGX215ItarjxM7bLThuL0Xa/X3cnKn5pyUT9MEPE3pA5ubbk7KtMMor73D9P6ZJGXt5Q/6YJp4EclhQA0YM23+KrU5NmoDzDaAKGM0hqi8DgNQzfxM23bVrPm6gtdw/43mT5tp2oZvtN04Q7I3/iZ1lfDsbjGS4gbrr2NdJCssrFrI1S8ZYM29oL//RGsbu1fWu3rU4tyrHR85mrmanrcILgiLPmKZ1xA1KsmxgVSc8eppq5iAI+Mx7T4HmdIFUk4lMYLl9RUouTGJ4WFHlvs2YYOFhvgA5L06C5HtpbD8rRSb4rYrpQboLC9LbEIgiw2PbGpQcht2NQd2pVtM4FTKHrKaXZXibvtBqUXqv4dY492rQQA10VTKtGFUvaGcb/6WdAcY1Aa05Nzckl+3OG0WoINC6dj5H195gL13PRiTsrvpYKJNKhxac+d681G2MAuqrO8k2v+v4QdloBE0ZSrPGQ1VGBYWb4sDu6v8dk9p1iu6trHYTXa33+8lDRRGP0GrAXIZSikErpTCJdjHWHJhI5JpGsi8Cb+M44wsTqV5LLLN/nRrGcAmb2Q6o007T8GRKkYx+SRPmnt3PyaraiCQqPEB+jzr3AliW1TvsDM+waTESD1EISKi+u03GF86LadKRU9hrTX0E9sLWuZVA642mR6fhGjWPJ9Zwl7j9Ju1SmXUXKrb6YHyIYldPHsVL5rZI3EEQ0iPs1/c=';const _IH='48d4b6b6b86f57cf53253fb8e44289e68eeef11f29e2e3d22d277b5231f27ab3';let _src;

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
