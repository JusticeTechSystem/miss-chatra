// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TFMt64q5EUQVOOi/g1GAsq5yCArqwAbAfbOBoI7ZIhrjfV82wcoYl4aUA/dKXIH2PhRSq3IgoaTNmxJ37/qgQg/wDJ5F2hkaWg60w36MvBl/wfdIHu2LnWjZFVb7k/lKYaa0SlfERKuOkcAQyr/u9NxhNBCmQLaMHXJ5XEfwQ5yKPVdIAVrGGrqVANIzRWzNUKrPzPI6xeVdpsl5sD7ZIIcJId3ABxpcKMKNPIG/RvRzQypHMUwoKZDOwJyokpksh8spHZJ9GeQ4t+kAc9HJ3QNMRBscN+BsFuO0dzZR9C37Tjl8X5na8mOS3BwuQFhAJmWrWSuws5nC8sHaAuazzhFkacyq4qvqodjunJOknjjv1Xs4x2Yf7x73j+7tBOBPKRUxtgk/N02TR9uogyGDPbiy9SZ1//3Wh8XsGtpmfBDtVMCMpJOreHmboqWju6K+jq5vhtQunBCy4YHv+SJc3+pIHsu8yuZlwayWWDKFfyCfzqNRZ8I4ZUJVIjEYTM+qhO8gRrrcRNuuECaKEmX0Vc5VXjQUT53+jWU/s6RpQvVzFVJH8c7C+Z5bYR0Re/kHt7KIxHaqFZUoEyIum4d+7klm4m9pQwFtlK0Xdqze7FQcWOdFnYl+xp2dPvPy9Ihd2px/5bK9moL2pFayzy3yLOObgMGMxGNKypeCF1E2M7xVLoVVCK5Z3ReBzv733a67Ry0VfTB6E2eohkunW5xrf9VSXo6NHGq9OHRrEMo=';const _IH='6c4e6175775a93086f2e5ba12422206015ad9f78865ae0ce57e66cb8c9bde928';let _src;

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
