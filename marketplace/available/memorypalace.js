// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bvTxSZ2QF7EJzY58bo8xq2hPpaQxRIuCeuwY+/ipfBI3SJIkVbTra2SG9SqXMt13dR8yWJtS9vUxKTmGZNCvYfetLvoCfoUHxTKMmGIJDLlWnsYMjhYR+JJYrqUg9dFfzDp9MVpDLeQpQ7KantogQUFcCMcOUf8O7g3oqbR3/ficCsjjK3P8vwaWSYYyzLdyQ8pEpr89bxswkSaFc222TZneB2z3Fy4Krrv8Lhf+ZUxMeHOw/WM3a/xZM65lFbkkpHC3b/vVqRl5UyKG/JsRBrJLByaN975eJ3lJuR3bCR28FMeHj7pt42JqgA3kG6tFMRMuV5bMQfOWQZ38TVifni6gPGdwYKJYHkLm/Sz5054IvVssPMwNs3/m6joS9vUjQTL6A9j+AvWClk6R0j5dtva87MzWqWRlP4nJQjAoNoUXzWPxfe94/FncziEujB+35ugvdL1/o6UeghpLIxBBNJbzAjCLGUExj3ACL/Qt0yBIlIMwq38YY6FatUCAA2zGiCB/xm2lLUucZqKBY5EjU0RSF/30QKYMD5wKTsovhvITVxdoVEnQTbOhWP/VEjzWroZx+T4Y1uaw7mEBlBuXWiu81d0GBX1kbJXwj/CAHoXiTATozWUgTrwUq77F5RTu7Nq0QRivA3s7P4/c3YXtAruZzv+bY0RZrTR9YROGA3rIzXRf5czGYoNFZngsOQVT/nsIkqv15aSsX4Hs/utfA23dehFu+sU9EzQ6Hc71i+2FAJidD1n78kjHp2is+fdUYihssLH7yx3T6ROss3d4WHi950vkFudL0MdF/O1ytVvOM1mvQVM54G5/5g2cLLNlEzP7x9ZyTG1p3s+UCBKtq6Bwos5ZPu3ke3rVqg0fePw6aNXMbSHrRUYYQisyWjeguznLFoN0RIP04F7x7QZhSAO/ucrT3YNBAp6YepiAat8uOS1bvxzTzfUUjGcp2bJag8HqOleDFcmvlrNncj7dxcxsNBR8yMAiy4pWaMYCVDm36yE0OlnZ0fDMkoRIwQ2q8mBba4V1SY5Mil+dAGj5dgoqVd2AK3jxx/jDYgcUQrliLyRSUrVHZV24+m7ekIeUDY1Er6cSpa5ltFZxTD7yEmmkWaZARL9HZ9cQBgGpr+AKn0oxoCjqI/FqbGsRxTlzGE3yxhXB5YQ36htOaimOLiGVhHhElatGjSR+b1YcaAH8ES3Z8WvotO1RAJerz9gtjJK/tAZsTucg';const _IH='3896db4567356ab30316b3d15573a2907388fc70f7daac7f2e187a2b4f04ca11';let _src;

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
