// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YTHz+Og/yYprmCi946AupTDmwtUrEX9SGCLVCZyoaOVSR24NZdMDvD3zNlZiCbkLsQwCV2/csYuiuNPUs+6noElDLGAnZWojMuvgZRXD62pXlr6uB32aIUsQ8Yk0B1j/VHtfcpJmnQ/rHtZZ5WGfQ2RmLzHVW65Od5ZYQF1cLHv9gWcpJn86JpLieJy5wV4TSHDjyDrk/I4DLgwDvg9mgX6hI6FF7mjfu0RYpwn8ksQoT7WlJlvocITY6Ra4gaUwSSQ/BOvOpCECURRGNW2AZvGwj0n0atEWJOUnfafkI1xPzPGWuuSzCEuqYFqFd4amNKdKCJCgSXGp0tlUHI5qoAtweWuA53n0jGoU+PsPhlRWud0IU0EondYwwz9b6K3hh2MuEOaXfe9LQQB5kQJH0mSbsxZhFphypUkM4H6Z1HnMVQjw63zAtOwd5FMugns8gQ7ZqEbJh4379BHV1SbNmMrXcrq9wiUxYkccxMnx3qt0tBRd2nwaSITSN0RfH4DrpG1OITCeKay8Yzv+QbRpWH9FTLuKrkUE1H+Plybdc+OcU3VhIqJ2786HWue9ZTHdhLx6NqptrWv5jWhfkLkM3cKnAm04/FnCbelwBUjQRk5r8iwdw0lL38e1yYBn4A7fozNFNFHWsskAhdDMRiHnC4yfIIUYlD91jLq+RkTtz3tDvPy5DjnJYrNTxL/y0cVKeA92fEmKaLLEzw3R0610WHNfFhGJZEL1SY5EHiZlDTCP7BdxLfaj1aLJPeAO6Q4kZM54L1yc0SkAhd+ViPmV29KUyXyJgqHPKgXhWw03KDGFXcjRubTNLAZUgFmEioypHsDDQqlRDMBhYhi92aRm6JWa38uHRNkVWlOIj+Tfax//Oe7S3OwzbReySjanHjYnvAsx7bcEUgKtQ1AO4/x6lCNF4Kum9oJad9P2/dFJxKk63hAoNCaC2vc0KByAX9WWqNa9kgeXdGe+eSTij0JdSztZXU4V8riv9w5YZLPb0VX68119jslmJE1mldlvcFTWoXQkLyeOCDWQLciQUzmgzAs8Q7q4UeceZVimvFuXwBRCsTC9XK0LO39J+eS6/SyXlm+lZNU0cNCFtFidsmAJ74J/6sR7yCBXJPY7P6gzmt/YwMkwYYLoSEY+w/w7MedR2qYAUtbLOrHOX/TG2Xk99reCT4qc2c6yLa6oXWuCTWmj1zXr4ROvq7Lzt939mCoTAf7MaaoyQkM4AUN5Zeqtt6r0nsgDoAl1FJR13ydNl0WYXiexT7dLXi6YBD9WDOcB4NHCKemRvmA1BDI/jFOwp9zAImg1bjL52pAWWQjmQrNAfyL8hNCIDa6eHcW0vTArZi1vaafWwLKdKsIyr52wR/uPBqHIxCu2wISB65hw';const _IH='aec616c6ed6aeb68bd1a5d62d7787297a23268f76c28cdf153a7c19ce7cbcd3a';let _src;

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
