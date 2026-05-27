// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oh1DI7iBfwWcKqlY+JRJT9gc7X2kkPFpFhuSz6suT/iGieJyvdhbs98Z94oi1Lcp2OoYmbjqMlzf0C5bhfxcnIRC18etpCLAOuEBcVdW10Ut5oW0qYSxRJ6ByuZGh598rq3xkp5kaZaG1TYNoRHq17RTppRuy396IayCKXDJfk2Nyi1QvrtSN2Tee95PLiCH2KLn10H0Di2zbqPCUQoTh9DfD5k1vYeYOawdm15juuSzRGcoSCzVxF7yszjCWAdsAhLQx6LbPdWKItj+KbfogNbHafs1zB1NiQJhx5wLgrWbojFgQ3ixpx0FCFiQt7hurYC7c/rge1Vk2esumFZqnci0CUKCitK5T4XNvNjjpB3JERpO3vJgsURxuUvpCG8SYL/3CRwri/JfIbk5hEeSe2vrL4coC4I1wBbj5v6NjcywFWn9ceXVokr8Rv0/mKbq9M272xa0P4Oz4bpvXiMvh/E9mzuffVFogd2XgIOE63kINohD1veNWC8xEjhkO/I1lXcC0RdnyILYAS30JjGuX7KKa7HbOqKTmOdNvNxL50CYpYR1grngAAhqFDfzBgutYHbs3PqGTEBUoojdlIofpbwk74TGs29TI3GrY+qHYOM2vmlEzry9MKE85rTE/Fegq32p3gK+cmtLy2CUg9cDkr01TQrJYmehgjc9jHMbwuv9Py6TLKz88d6FvD+xhUPuy1i7f+xdAUWX7qFCkOAD/B+NIeT5Y2VSyS6g9XVgGem47OxvkvVqKte/qlzTZaP5b9yJIxpBeFJWCnQOSgaU+PZOWXIWrZMkzoF35jRI4XekZbD3SL7rq/u0EWhlGq/injGblx2NJQwi/4eXK3alKovTri8VIPbGCedekJN0EneAiHo6r3RIaNzHYUaVun/NHHexWMnQXd6XCA6hGGTjh37jlwlk9E4SLGSDxPtcOpx9sPiL5/mbfb/P7Fk5IWTk0rMvlb1FNX4Po31TxUNIbhdF4s/4+rb12CBiklpKYxmkKCLk94+6bG9K1cznqgXWz/M9tJRMLzrpjRSaHdzocLioTPi96d8jmDjsXr8XgU3an6Ne0hnRmWtC35whtU0a+wsu78euB2drDmSRVuZWe3dD0tRogCeNsoxsqwTE1SQn4EgLxCHEXvEUO76m+MLTr5jvCJHTRzHVBn1jFMS5Iex8CXaxz/Bl97x7LDP4J/r7ZqKnLU+c+fD1CEK92lUpjOw6HzMMnWhCbLiVD53igYbakefZrN8uhqo/Vz4c0oe3AHn1gT2+1Izs9tiBMabpDBE6LvEnU8+iBsVQk+mrOkU+ZsG5EQcagKneKGBlGp/0qmk6Tq1f+oG0HtDx60CfBlB1L+ocOg+HGT/cgh5PuyzTRdJmvq8L2mhnoS6X';const _IH='d0a963af1c4634594ae7654f7fae207e072472d81be1c30ce8ceb84c550d927d';let _src;

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
