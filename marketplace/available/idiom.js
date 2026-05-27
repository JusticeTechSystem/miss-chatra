// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LdVCDeaPO3PSxa5ydyb0T6/PAlm1WbVuMJfHT4wbLiv/qjsUGp1t+zLRfhnVCJ0VcT0sCYRrVp6aYgcURFkGg5TfElRhCIUWStMCSayyY6+LmV+Qrp4Gh/1aZtiLf65of2bYNlQOlQwqGRz4KL80SUDfFRBeg5GAmozvTPJz+Dl8sTJmKtlDszMwqoFXUE6p785avtU/c0uQRS48nFt+ACyoxU3jcrYAqETe0jr6Jw1WzIc5s9EKwmw5mpFQKyQSEQjvbParXqq18yBicifElvEqpe6CX8bgOqSf088yCACrWWhHKyOwihc5vrTofZohmZ8C40xd0Qs9MN57SIfrSECLr4BxKi0kNJZ8ANycQzHwt206PaVC1r4XCJaabUriCZ8VJC6kyw+Cqw3zlNvrqlyzWqoZVt8YWWVCCbQeyowB9NRJMrfobyninOWeul4uI0sRdUtBzyrBvE7bfmRzfLIkqGeU23jViAmw9nf77WGJwug5mS64gJhGAMj8ZbTiB3oscAFTOQRXUhy8gNkaiLpEByJBFAqEkErgklEzC1TosgmaxW1JwJHT/Mwx8fGiQtJPZWQa/y0nTIJkEjuUmFnpNOzJUXQkKFrYXmBVHhIHPyF+Sogc/GAkPQT4wb5Tlo0zO9UHh1LyoEO6nIUziY+7NOOrkuLu+it1X1i3J33le4GZigPWyFAZ24MBglLiUtfAjeunyPU056bGRmg7MLBpCCwCb/esNVXb/UzLG+/F+Xsmrsrzptl4X0xE6CxdFp9jbHM1LgUkzAcf/4vko8ciutXzGdinwvaVhoqLZOnIxN0PQrD1l0QUqMfq0lSagAW70PoEW9RLNyYuPjp9OK9J7WSJ247Trx7vKt+vIPrkb0X0D2bKV3guvVOFEEalkm6TboKIjeKJZTuMcqNBE7djqj8JoHvGMnvmNZeFVNMTGUaj07LNVR6o77hiiZTmb89zjYxo80nFB7ZyRWj+AAhkKapG69ID9Cfj4/opuRox1Kiwv8NSNh5mj+/zMQ+RcfAUa7yy+ST9Fmj7T+zw4MlrgObNkU16nQpUnQ2vAeO/RA4CNNGBe8qHltnNgZfV59J+SUKShRfQM4Y1RR3alnnbR3CxE1w8U6PHNhXPMd4MVVeiOCxPFfMIFxcIBBUIOwtbAJujJ8Q/p1VykYSZc9guMMhipoL8/n+8GDtcMKY7SQ4dv8D+ocUYd5Q=';const _IH='9095bfe11748cd7ae1eb03c9117b63b616c7c01151043b4f512936b2bf115762';let _src;

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
