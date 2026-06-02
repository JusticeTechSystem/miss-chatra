// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RgQhbcaoTJNEjbrMAXgz1Qs+TaGBbLZ1nscUvpVdBdKh953UzRyOwJn3EU3K6iRid24r1fua1gWDLsiA0JJpjwt/1tF9a7/sYzWcFYdqCvQ5BiETDZNySPQZLfaOtZ88y/Kuhf70FXBIJz5pK5cOcSgD8QwpkieqFZcBjQDatXYw1hhPfvx28l8dJswBO9r+PVi7SA5aMDjdurOpC0gsx5JQkLIO2u5W9B5ymZhH2FxdaNiTtUPpYLGwT3KlfG+y9ewtnnlCD/jJ7fO/JFOhzSioTHZAYX/2MDLBjlXbHfg9IuoSd1spd9dMM+d/qPC5n6UHJqlY1AfxO5zZsO+4E+4u1u+53g1gI/rNIeBhfOLBSa4yijusr9jKZSzBAKhj2faSFaQE+uAH4b03q4bHcrwcvvvarwfOeGl3kgIHTQ84qFBilbyEL3qD9DjJ+iscvQXA8DpYCaq7N4spduLRhKA2LN3uKkz0l5fFd1mWe/LKf3WMaxDgpCigd28nuULmUp2pb0tXO9PNDcxeikLAXG4o+mC4bcaZRVqetVjKk5nqIOyoIQxR4Yp6bnsPVUtkPLt9OOdBgSn4EqW9JzVeoJqSn2qZRaVHq1rrrHWk5XN7IdMUDT3+efa7w4yGcT298/sbOYs1+zjCLiWkw0TcpYPkL/SJlYWZ/GFZgjubt6ACpfQmED3KujjwYtLWbgEwAs+K/8u4mTwZgwjO1axCbjoziSoEwE6pD/xvYlcnbj/WqwMlgVzUK5fBJXWW9escmcXkA9VZzz5N5E0EtIbnjcId0HGuml21bmvnZl2gW1Zx+ad0V9LzFEaAMkqtaEaBNqy4SsUM+BIJevFAStJ7P5E89oqgMksMYID3MuhSx0/CmMge1UNFvRbc+4dtwZk/WYOey/wJ/Zkc+t6ZO148jtfWHMCCB1q9E29PfPpRobndFp/sBsisk85NG/b0eFbvYcDwETh7xhXV4/ccFqSurAfj6h/MEekPEZumHxYmu2FPLvYt2dyazCAXtMyIfGUtivTN3K9idTriWEVMxYh7X4tcbrj3pj59Rr0alriqzBGSzDQIRWRjJG2XvgjTq+Kj1W/nBZXNfRuX9kncN4tJQnYlIPs1iVGpN4rfh8UaMz1Wvq38b2Paf9Py0zSP2P1aP7nuHpzMQauHGlrNrWEKdU+KdwO5NfCEx8fCFHBXbB7UUkuK1orRpciPlfZ1ePVZ6gyRA9V9npJwE+FOLKXxxp3JwwWteZRPvNk8T7fMDgmsPnQJ4TTIFe6ukZa+ZHk4fRv77SPmYRumecsY3/5Xr84dT1ww/1bqr4s7bdAi8ThWWUxbN9pB0K6NQJHeaZrtG98cA88CWyAR40k67ay40Ggk8HFJAwmWQ07McK71ZbMHAiRsN2HlGobj6SxhwwohgRocweqysnH6AJ9u';const _IH='9efdfaf1f7f639f9d93943785757590ae282024ef099dd78c11d7821ed33a4d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
