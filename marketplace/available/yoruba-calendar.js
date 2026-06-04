// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jrnKLHYqyyEPANdDjfBAe2IYx/IhcNK1H7KVLNYJMDI7lpAnebpD8SjXNkj71/XgLS/AKk5+TXtScJ6bMv9vX1nEsaBkkpbYCE98mfA/w6l+s1DHFw6MJf9BBhbLS39KKSfbzXbvtPA1xmBJWm3T1aH82JwczhAsmwspWCFOvJoCqBiucBo0y1iTgn9OheiaTGQvdlZnF0HWHSRoI75ZzjE7vNK69HM+IyChuDqXagZQMw5oMva2CUJK42ens+N0onupd6o7Smlr9SnAARBENXC16BvTMRHR6xHMhaVdvrtyPrnSgyxGEcudq4dBO/zyTSkzK6lPgKiziA1V+gWnes3uGYqArePm2CaMXJrd7/ZWOSo377I1itqidxy+ULhMnxkZULIPP1LT0PPaVmerWYCO/LxUJDkkqacYHREH3n33SBvV19MPd3G0kJhXhAc2sB2gj2UqNG5TLvNu3uiR2VReGM6QuYhDcP0m+LMfEg5YINmtxM3xUkNGUYNPVW1O7/dQyJ29EP7VCWNES4hcABa306dy3gxJaRTHuEUNJn9XY921ydAW5QFAffeMCv07HPQJmhDUFUuFdfsZi3kLwB/pFXBFVd7XHdDolyr+thckK1DhkJiwdp0gJ0TlS6UhdREF/yN3SvPmz1v+35p+ccUPtMoNLnPXYtrI9mnbmyeXJKlryr+H7XxWAV6njtBzZCKeR7VSlxJKX4p7da2SY7pMvBYiiF75GuveTNXN4Z35tnon2h/7YP0Tyv7jYTB5Kiiqyi85C54BNKKJ3NVgq9NcULjrFH8VYhvfagD42Q76xxVrupi90HdBXqChUtqEmT6jGQnSuZ3CwK3JNvvfl8rYnhkRb8juFfc/OQESM0TyaznPsHyz1Qq04S2PpYoyZaUkiMS2V/uUVSr/Nahzudcuqc2TH7Yy8elxgLhS5AF4ZuMsqqBuRBOX1DVwni1zq+dyOOWSuOfCre8fbv+OKn55r9E2zkLTWM5mdKYTjPHrfa+/I8V811GX4bAEsTUb+pIUDRyJHp8oIT9J6A4+SQqeOE1iBuD9e43lfgVs+PgX0LcpKanV2LopTI3Tj10sSyxF/MmLm5sOWg28sRyottJxVIKlXCFwlNQmdtooLacHi4ke4V4U+NhZVhVlxsDyd0dIHAF+glr5kq4vMdI/GKvFUW5t73NLwxmdH0GwyH58xoMkRyGMBtd6OKWbH0s3qqO/D5GgHBfisbfRSA7kLKUsGP/8RdKmFDt1XmPfKJ7+uALt0r7VdI3CTbVhsmVdui/CvTfkO2RNgyHaVDbC';const _IH='0fa6332b9b629bbe5ba61f67c1a6de0d0d29680d512b674fabed6c342b2c1731';let _src;

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
