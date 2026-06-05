// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2vgwT7toIaLxtp9WLBECFWMu541Q3J9wOLs4E+jWutNkdLStYE9Bwk64IMeTxQvoNpGcUeeIAwF65gXucnjvGkKamuMbbXZvFvORKw21dR6N5/1/UXHKw7JxL9W63iXLu8zoURVYBANIDBbsewLqW0lCna+FSAYpbjeWNLa58rFFWEzHY7a2frXw1mzMGlnMqu6QutWy16y3oG2wyCHzdMtQ8MQRI71hKKdTczXKc5yf9PHwX1qltyHt1JdvyxNtAbJtPgATp/IYCxtsqBZSIPGeW6SKJNlua/WSeGUfUOF8LHx/7bsrkXfZm0Rn3c0wyHR2v7LocKjmksk5Tpj5KAYH53t9Q3wrFgE85FH1WJZgWaF/z8fx2UzpcILHr3JPLABzuz9Nh6gdfbo1n/8zFcfpHfks7a/6pE6jVFW6Y0nC3GFYHq4rwVvc+wzSJ9CMXsuAiAjGOQOf8BJx34+3VC6TFIdHDvL9PAlJawY3e2gBcS+woYRTr0wmqvYw6IZrRUoD5nOxkMvzlZZLWjXZgfhStpQXt3CF21NXtSgNfb0glk9oWP6u7mfLvlzMbX8p8WcXJ7NeUKS8Lkh8Xi38xgItGSySk7iuhuuen/gOoJ5Af1x/WPIlJrCzLdZhlTNa2Cai7sUjpcScuETDd7baQ9qXI8zU0+fXqSFaB6XPHPw8+/M97ZpAPJMehMCpGZr3bQ5oeAzObUHk49CzPnp9SP674W70zPk1clEqc4yksbBgkpRMFKzWjTiqAhTCaS9aV2f0P4s1ozFEQ8BAnNXoS549FOdoPLEWQVX1BCEIWdSdndvEXiAccYqYKcC0PFeWAp1LOJuzfLueR5DeZNkk/nZv82RjX9jaxTBepjxNCjQLdjXY3LTiciic20s1lHfANy/3G8oLHALUT3HzcL1Ee10pF+Nlj7tHru+ziX9arXifsHBI2goUF5nCZRvcPAkCTefzhxYl7DeEZSAanPrSz7xie3j3D41q4Q5LcQQ0P1omVLf3TvAeitz2kKAr0Qyl+/FQh2S0OXwkCjUvzT2By6c8Y+hRLOR/NdqOVNeTQnhr4yTCYtTw+CTJJBBYwCysGjpDS6MmWgkQr5zggWE3PBK3dlSrOEAgz9k+fk62L/Q8ibCr3AR97NhMgz+7YJ3FgoIAKV4H0CFa3mDZgmCZF9QALxhbTl/a6JPLDKGpzTQClCs8oJyYruUamMNFr43fR2co0PqV7LKL48r02VrYDPOC+PzjcWvJaZMvAytw0zbzxUtEgoFrsZwrb34EsSprsZf1ITkE/EgkvCXtcYtQriY6g5F08wlkZxPHSgrQz7p0NOCLN5IOT0iXgI8vEryl43uNAcYfUNTIZTP1mjU9yfo0D9A6Vy778Gq6WUaI';const _IH='ef5e1dc3d6d5031b3a1ba9681135d16d2a3c2c8787747d94013af67fb8ce50c3';let _src;

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
