// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uzwbj01zZtTRp4xPWZOcR9TEWXCVQjM0kQeb1POqtJ1+isovB5z0rXdspCuQyANm9b15PR3MUT62ySz6uMzd1VoIyKyR2aKjX6ryysv3RUvnyusDMhVELJ3HD10qBkpjXE767uBOLEjg3ZSZnaKh5HYek8NDp8so2UEUYczTFkUkBJlbHRgIvSwiPkafc90S1Jg+x8DNLSCBkiHklo+36fZtjs74CZcwLGLyqAEGH0bYy1T6LsKYRvauOdSaQoowzZj9SvleNHjL/YlSxXk9Hl0Xxx46I365QBg+dYpBFBmZ/GdriIi9DYTiDUzg/7Hw9hO2vOWysb3s2zD5MtpRJaUa9scfDz3LG2+yvRRK+JDIBXy1lVMYHCsBcSzMQj/Hk/z6YpEKigOBXHia6HK5UQD//KHS4E0XJTJN8jniDk+VJ7Y9P8SH1GPct03sg/9VvmX00xU20Nu+LihMib9IwAx/3To/uXi6JxQd1+uoTAZj8x5GmTog/2/R5yt8+HZrlMpac0Rh8Xqv4q/mB4WQqwq+3GZ+PEdwqUEgQSomLyZwRcLNzFEjOravWUeNnZ0nPGtgRkmeMQwZWtGJyeFqjUdtTJbnaUMTVKYYT58TmlAQE/4w5EH2yejqeayLhikE14etr90qNoFsPqAVnm4Mrp0pN0J1v8hAWn5bojs/55yr0t3fttBG1DRtHoL1azSRN/mAZ/WSVamLKAs3ltcFh25jexlHuKGZuSfRq1sTtDrd7DuShw26X9/hshW3LhvFOnZSoBailo7QBM66qD21vOoqbQG4IHItPDdY/HYHYsXGsDYzEfHyX1agJdFbSgCkqsT8IRJOLeYPayRYHz0P8aeoDWagSIKAVn7mkPOFpk+ARrbeJbr0PRvPSNpUzGWd6ly5Cl9Ihh+IO4kzHrTnuGPhg0acMf/h8TnvwX+8cj98EEwP5WCuykgB47eFetF+giSAeMH6Ul7ocgVJGmbSxbxRKtfwGmGTo7A5yIdPKD0epgBWfal3njoQgdnTRHv0BWu/B6hL2NAHR1jvoRLzxH5rK3vXJmQnEcuYYUKogslGAtePc3at9hfIXB1HZfnafyWR/7zySzpD1YU=';const _IH='b376860681598b6bfff478e32553aca5be0e73642e25d3fdee16359b09514219';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
