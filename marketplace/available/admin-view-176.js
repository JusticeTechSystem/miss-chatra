// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hoWUCsuj00K9gE+Aw4L3IWByN8+X+MMS/njaHxNrIxstXbuxDlVbqqQi6+B0RIEsZQG65LBIS4vksfTFYr5L3niA6U100TgZ/1ANNJu60jEyqT8hODsoaW6WUATeo3LeE8tIDiRRaeJO2kLVpEsJM7yg161G4sjWE9lb0VGI2nEET/oqIYHf9nzNhlt7amEnvGsdmbj2P3EuYKxtypKHHUrZhIoNHXfNI6hiJglh1AicH4CsR7nQ12scDjBjoK/tVzKHd7wnRjpNbixXxRZApx9pDobzr+GOJ1VqVMtOQFE5B9Zzp2Snk4pUs0Q+s8LTay9Sjt7fNvG1d31g54BkeSpCTVOSxhj/xkJ2hwGFYrq0p1olYxo7e9Yv2DEWQuE4Tb2oKQbgYEYY6HNS6VszP/shRbBoZU8IfIvYTI3mgP7k9EQLBck2WSWaGB6dz38qhWlyaRNrSlj70vuXFyrjOJ0yCBKosr3LbucVMe7HsL9toRtYIAedNU7x+EKM+r+c1exoLICspNtpietJlvqllGBHv7NaMTABNirP/5vXPMLmt6bczYwct8rv9Z4ruhklbsTOkY4Z5+5eNqvrrhZfTVqY02ErOc2z0Qvz5F44Qvn9vBCl1fU+gz4aHcj0yrU0zl8tbnEi/O9Zg5VFUIt2TUszJuqAQj6HCMngrJYOg8sqSnRJ4fhoWQT8+EYgdjasbU0ke+InTQWFYSHjqguPuXysAiDRTue7X2FAZGr52LpHapowsQ+aMeniljQCB+BLsV5Re0IMGPFNbCRm9+73b73PbhXH4XxqDjoq1+wGwdYzw4GCcHVKPklNM5yL24F8r5OHTVHi89HnpJCdqyta5gyVFMhsRTtmQpy3Mt9hQ/NodeCfjHyGMCHl7zZiu+JhgkKwGI3pqNFRQbpj7jJEYfEZiWllNRSfr7NwAgYo6Sq+/88+HpclOevbNG7XexPo3cUPZZORSiXCxsCnlyRswO4t9KIvd1yQR9nsw4LBFJLNCU4=';const _IH='5019ec75a14f380f6e0aa6d68992517d950a73214d5ab09da83e5581410d2596';let _src;

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
