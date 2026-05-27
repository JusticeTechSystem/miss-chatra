// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5qWa41FgUQ9mZmonfi6/KZYG/JeumY72FX3bobZUHHAnc8UY09QnFniZVnFGztD6fOpIMUA1SUfDy9lTntyoFl5g/wriAoZ9EbhpWORO0pmljeJzsK8PwHZ6FzSVCgJxkmHgZfbtGB02CaZ7XfKVFYtfftvvQD/ie6GVbRNiij69Po4EyMPIOd8tGH6pZRxBXgrrp+tsh2pZgFe32CpJqq1pnZSXmIg88S8UBOI0u+9kprBxr5s2FTzrqcpNBfX+0QinO8B36cVdaA576EEqtpXkmC6Bs0R2OYlO1bpfnxHG4ctTei2bfhy9na3B4wbVi5pO265mYZqUgQa/uo37TxNItOnZZY/x8F40mTnrF3rOt4Erv2/F1sMm8YG6x6y122z8D9z2b/qOkr1SAlnDHwoX4YCYCMrCVv4ZWIlwd1+ti9Vhjk8ooThIIYbvcD3QlQMR9c23z/neCun7FZHYM4T5uy8IbjCsEoKhUcILaQtsLnhshilvCVrOBr+Sa2Xr/4XZUGscJwzPimLqpHtxsxrMqqSbmXALl51lH97uEM4GNqJfB6aFx+zUPfGI+++NCbSpVqrDUDgqbYvVKVGxTQ1nDOIDtJc/1CzitMcpzSBChAOYfpLyHyYJURFhpjkIE1AbAxl2YzPYpNyTLNAnF33RkXvy+FoCJmF/IMYy3/4C175labsqxNgyfD9xVQb9tEyKY3KlLJNiI9f+n1mtGvXxX3uG4QpRsQrwQacPtFM5Ig==';const _IH='1b0e874c9e5de7bfea6f7b3386fa5c640c4de01aa6f3043d2ab826fb39a2c0a9';let _src;

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
