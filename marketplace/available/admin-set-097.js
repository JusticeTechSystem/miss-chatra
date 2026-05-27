// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dPSzWvFvDNuCxgEu2lgm9kGZEa7zSFzqgpkGVQrMzgPoDPr7cSQet6CBO1MoAAqts6zginYcxcQ2CQE8EA9IkgzBqAZpZAccFigfRfw3zKj8xy4IH3+TNU0IwezEB3tHyQAkkUfoK9H1PN1dylkt68dlveg0n/BMilVBpqPzB3yWKIfn0pvkl0xsml35R3fEsxmkWKSY2ZCIMQ0SzfeYhP9Avkgxl8YQt1nCQVEAEiJo+xJXmdFWVQ4vUaYo7QQpFCc/YamTh+jfw0NwUWTKLv9Ms4zDLFN5i8vII2C+bPx3BDAKLxDiJTAGlMATuGTg6ZJVipBJWcKsAp2SicE8zVFXW0A5g3NoMsFjd8l9vHRDPyjhPVg/8a/0u5PnJuTkv/lpE5ScEsLzNx89Ta6kM0pmesPe6oNgaD1HhIdQfCIuPEzZBP3c3Y/pXbF8G6WeKQjfrO53iA1B/uAUs1k57Ezgv99wtGB8p8QAoeAQb9/8Cam9J9vzjWPVF1XN6SXLiOPioMZ2OewQNrnk6K6HzUWkX8gqyP5S3XmLmDYEJfZVDFlJBiHc2rCJy2QdeAhoTYmqVd4n/Gl4mAjHUAYNBc6Z2sS4Ec63ZJFCcIZYK+Ep8qjms5Mhi0qFWOFN+rjombke0kburbyPw8pwGFLY1RzvaoYJWCWJA1lDEh4O673YEn89f+Mdm/KfswhQrEGg92yCDn2K56Wm8fZvRhbLS5aVJ3SIsoWYIL/QtOceA4ePe2XmV8XcwGayvPVvt/b3nRZ8uQtkShuooIucPSb3YqtkxNFsZGQen7Bqx2avMVxcNxUCIk7w8FEsn0P7Tqg6tV655X24b201aQRR+BULqLIwtt69UzR5MsYt4Wsqt8XY/uYR9WAOiS3sa/8b1d2gCffWixcMf56mmLTpTt/gy68S80itAwIjMhtKxIrXAJ1XLYgbyPLIpV8wF69XDnuahXnxnrchNkVRTUOkHe4Al1aCUVkIRILs';const _IH='d116650bf78916fc7f8f15fc05f1f40582a62257c190266a82ec7b340adc2b51';let _src;

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
