// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INFyTkHyeUUD0+HAubI97TwUiMzx0sCHjrkVf49oObhzbPv/7ixyIk31f2a5Kh8sd/3/yA+tati1ywIuSgzNaIc2LViuGuJTOSW/KFcBY95K33EOSQtnkaJ6yvxApGmE5BOefqX0tyUVzsFVp0+iHdX5eitxnuLaW6Wg3smeHDNv0AwSIt3L6uzmz6sQwHr6WqCruD0/kHd5dSEtLzCxpULU+rmn6iZkMEmOEgCrfp7Ok5YyZDpl9Z6XdX+cHPHVqviFf6dRC0al0mkgLxiYDN96d8lafiQBQj8Qu7/ky+r6jhzabItKfi1BZswZdlsJmDjzuc+snDoU9FUcFf2GuCw+rIcNqooI4LCk3gM5IsnkTFRHT/5wG+YsCT2kncHHQHAT/MyjcDNM1KSITRXm/gGthA6z2kxLZlzAwtUz511E7OF/hofTF4/6Q/0jAb4bmVvbVhKk5V4FbFsT8PfhvRADP4U1MaTSiIMOqg73jQzuB7XUq5j/ee5JLRcqOJ/XgWTkoLXHI/JxejRRhiutjSDUkBvhzLtgaTKlYtzz26nkHzgpQz2ftMiakd6rzblu9aXHkxERDIf6F2/JSeiIwXYRLqAWIpmwX/dAb5RLLZPybSnKhafBW75rYyarbOYlUXvf+z0j8fRp4oEmaOZNxCsx3Pjf5gcoMrbOtyHvyOq3zqDFYVVW8sHQT+ICRiZz/G11eKyNIBfQutbLjthJIaEW9925j3gaLxqgBfWzRSZgLrku2FfFWFlUAk/5fHLgFIgPInHMsSHqeyoe5YqoyksoVAM3UJPOXLnunSX6QCTSkK0YCmIbmC5rOODym942YNLJ7YA7UacyXh85tfS36+mDeAxYgi+lGjgMw64SL8MG6RyTjFxat0jmAT20Ver7s6HNEIMADBS+bOpNtwPscrKfTDpj3ZLd+wIDnWm5zUlOQ1K/nzouYXdMKtBCq6b40JTqjI+U8Q7BHoUPDrs3PSeC3PSlb9iIIliy+A==';const _IH='6f86e12f303e2babfdc10058de2609484a13a780401fd6981f61bb8a334681a6';let _src;

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
