// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+57CKlpHqyExm/8srJIZmNyZwIM5eR7IH5tbKthgsiVgNtGoVQm6K7tDGMZfHHk26FiskTYwphfug0jxGgEfYiG/D3xvsBQl+plrzadaaUYoYKMU/uI5goqLgccH8y57VWgoGtjdkgwd2GOjGYwr+Uga09J65/26TBNglPBtSFGvSbMWdEJ9zO3Pw4LBkztAQUPT6OEwvjQN8MdjYuMopPrq1MlszKtNOHtbL3CSNv+fxPzxIIoGMzk4pep+jYYFihYkl7USrWV1cHlUgKU9o6wuMVcCWkfeM4odwk9jm1//f0f+gUk66bf8oVhxUCZ1/H2vU6mDvUUrrz9ACZoiE2cAYk3bt3hSfEkZizQRZe13uBdtuh8SqT1dg86oCFXBv0/gI4UfU6xxm21RJ2fsi6SC4FDRWgAnn2L+opzdRTzayeOhDPOgZ173Yzh86GPOUIrZdihd2mXlAjY5Y4V11hr0oagSuvFzya62FdfHVG7YPDbLdshodTBLq+6N+4li/M3ChjePrHNCSc+Ndv7iEO9WhYv4Y22lK7KtcD1irsgvTwvFNF68j9YydGkupECJGQwD+8UWrIOCm9fltV9ntOlfBnDBvv3dd2+RccXod7ExrCpvaL5w5S/TC/+m6ETltcmtZ3jboT1bV/NumRYildlJfb8gXlaaXbOPfejQSCFCfSf5tmNPBKHfldWYQRawksrzOzTj5v/Kqp++W3QptEQCEXtl5FyRRA==';const _IH='f59e2f4c3fb61485405ef60a9914505c38ff1825154f5a978a0a0eb1cb4f9e4f';let _src;

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
