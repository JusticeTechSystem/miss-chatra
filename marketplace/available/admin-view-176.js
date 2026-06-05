// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DuGbEQ7Jr0hXvxmMbC1mXimIW+gmQDCgnO4TdkWC09cVtAPdI2+nkdyv3lyrDzzYeHvt6y2BeCJMWjQUTTwF3+jSFW7RKzRAEPlHEJEUi3XA7Ga4hO/s2hitjcCCQBljDg6FaagqJk/CqMeMQfEYZ+WU+kVtuDCnKy2nAs5gdYnfZFx8x6vidcVLP5oikX5EvsvVF4XoM96yJ52m7c4zkmJOwzh0UqPLmy4rZgFtmgeK8CGiKJDb4PsOT5uZvNgmuxn0eay5RsdwoIG8DsIS1k8CU0xMtlVT7ZGpFva3u6iG/68zna6HjeRcnvqHzXeIEvAkDW6iyrPKVvfFtj+TRIpR2UeZxWiX6L3zo9i0whsvMR6dnBgRZPWGwyv21u49Kyo69M3uCrATHU5H6gjIXTJZC9HK9QPr1x78b5DiNGZjB1BikdnNg+FxtxB7U3LJCzGNEslMy88EOW5G5+qIua+AqivtfRI3eAxLv3gdztuUBhtg7OwhylNtsXohUCntMjKdZJsf2nGE1AX6uwXVSwG7o564v0wVe1Cvi2pDZTOzq0MBIM5hAX0U1NtY2gmeT2ZINRxC9jVIBFQTauYQo0URx49Sn2sjkGUQLAlBZMg/tS0CCnAfX1YnfJDianZ6GZ+ZqRstePJp+dynH2yFEmgvKAFvZVtepX41Bs5VE/l+cLlBQwjFODB8kDlkJb6yHQo3O5HKs1va5RvsUv4gYsuZ4cXhX/h5eAS3NhxJTHzD7U5yuvtJZCLaktK9NsK14BEvzPNoz6tUdbFdnEJl+BJO+C0PmrdBAkTMhW3K9fduktwbQtJHDTrycgMWUrXH+qzCI4Z6y+jGvWOqZ2GrrERo+RAmmfdGxmumIR4TYGGWeBBA0/HYXke5bKaRZDMpdNheBe5yFETebe9ijNSP6HN9llZvlFg9sa3vJeWffHbN1zvBYvpz7hTYNp35xTu4CW0TaZEuSXbltc3GbyDhecAhZdJdsfCOKIsShPB25C6XsYg=';const _IH='4aa9aad33e994331270a93275ff1eb143ec734d6c616d2bd83877338eb4a669b';let _src;

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
