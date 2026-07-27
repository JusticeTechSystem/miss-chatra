// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhzFCfNw2EKGQ6zHh7R6dDwtHMi7xMW27+vQUl6h8j7Gx/ORqoaPkuOKYL57XbfHUD1pv5/om7JkewmuBk/1/LGFjiafSQDxiOXebdetwwLHn7wHGcNOZtsLuDqGeBU4F4LObujuH5xAi9BK1RIGzqia9lemQ9HB44Ik29TpdhrY7ZrMQilKjK51jsIsVB9hLGVLZv3jw7wXSt7XOhDHhho97/v32ssRhmDkzcd4kV5p/t2kbakQLg0sfz0maVAwDV1DZleu/YSziWa+kookULyRJ62DFBXwK5jKDEeO5q+oCW9eQ8r+ycfVc3AhVLKyVvCWqeZNADMATfOdJdD3xb3bODRykno1Hzs/qAnj4m6t5cD76Er0g7/wBjRcnRBS8rgNSMc4IIEwgLPX1tVFlg9eXWCJgrI2hoktbV9lScyFUEwXJB21BLZLat595k/GJ98wdYC+fMR+3klm6AIUn3hN5KwWfLPPsOVnP//aqgh0HEx/JiMwi01BLhcWNxD5bc+aY0siRa6+KOo4iALgJtZvU51H/KQAN6zpNB7+Oi1c3z+TJ2McevCaxXe92Ug4BNLt7wABpp4c1I5/1cIpBAyjCjh2xnsrkUdkz/jUjDtJxJwKUWdbPoeDK/SQ8X0uDFGWZaA5XCgpyT8o6hAjHB3jNqldCBUIYG9B3CesEPsMx0p1RwUiRrR3c/sXZaj3DF1xoi76zdefNIY7hNs76TIIPECqO2yWl0pSKR/NJ5VrK3wyRUAGxmY0I2GtAPnVb9Xkw/sfB2Rqte9HYSTSdasuSqJ9uwWwhTLmO/WacqjA9ZM1yaHGkIRC06GtnjTMaiHdP5UvyGgaXr37sU3qKLyDrfQ+6nK9aie80eDqcrBGgp4+qMNHtmaurdNAzaQDFRJ7LzM++p5HfWjVqw3mHwCsToYkRT3aixL139A7WHm9gOi/jpxW8onQzEyJn0L95sJeEiiCW76GzIc1NlJd6UBMbGObFIau6g5rSE/m/Eyglv61CcrsSjvrAxfn7ROd58NFqlYkXYVRvWu9/oLLWnX8l3gc1k1ZaR9YRAhdZos4zaLzNlxVNNMBZao0dJE+RIpKpBUh4bMYwU36P27hcCCDKt4MdZX96YwFpz7C8HpcW7z9PAttgt/Q41+bM+ECY/ZGtLfIzedVzqnjBdQlFnx5YiWg0WJJcLrkrOYAwFhWn5db8M12kDwwZgR3O8FbBFEYnmxkgQPzHpIO/XYIa44dqIMaA2Fd4IO4cCXXfJGXfSKXJ3MASIwZJ0lO/mBLV6lkeIiV4AKGLfHoKkzo6aRBqRw7xY3GMriY+X783KECK54ur0uFiNKxyGtPa4UXwJlSN9NIiLP4nIIZQcGbHqGQ6shTwuTWGu/wGM52i/l6vJb9DZXnH9';const _IH='c4f495901aef44ce20c644bb3b7a171b4606c52f56f842cdb5ec42a6b19dd4d7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
