// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Il+PoKmAvIMt99bGReYpbV0bQfNp3/QDeuRqrCNEvk7RoS6syCFssyQZAtdUt0OipPCS9NKlzyCrxQ7W7LdeGw1K+/xYh7fQzRjUXBMph+hbeUH14krwRCFxDj6dZiWBgEG1QibI7yySIF7W22qKAgcGQGuXvodhiMSutzIoCcgQk5AGx2h1sli6ObNTRZ7cRDlpI4oL4UvQ6U+QRKb/D1PVXdSihdxV8f+WXuD8x76m6QHlb2QQEflcxPqknmXxXVnHJysZvZELv/w+yP8FyG7RMarrahJdOHsO0UnFz9RnRX8M6YXr2tti4C3dS50OU+soo/5n1+DHX9h+oq+JDpl//aae886uU9z6AwhRe21AV/WA8gEeUCWGeCl8fZdzZkK0nTMnVjLLg5MDkYCTYub9OyFGHIMkQz6n1+6Zg+CbM+S7fnvpdKXCzKmj9ULI1aJhxNB7KBV52E/7h3+06c/PJ99TI8O10P1U+cSvYPO3MJdvdnkesNVJXY/NutVyOHDdmmO0AfL3ss+7DNC5cRELV4PM7XocxIij7zKRmiAAdWHxFGHLKg0bukuE+7JgAeAkIdixTFtwaRgsrJ9FA01IQOEig8erKIECgVhdJYngAfM5ZEZBwsC5KJWBwxKAnRdoF4Et5R87ePcLD3RVTbNM0ebLdTguzmZiWg9P7fdb/H7fc8ZyG+/HN9NTIJ7IKhbN7KyzFM76CC5PVb0XNFuPMRnxyGEDEj+/Y0TL+7mzBLimD2eUy455U44vjCxQD5JKnSTCu+I/KUymQvkcYF2r8SdG+S/e7hjDCwEDGADK+KtYCWiPJgPnM4MkynYChrQ2sktAsfigj7Wbqi5pBNVXVmyv0Ei8JvNnLvtb/DllFaf7d+uR7awbG+5Y+4ss0wXJb/4L7vPWo0A4dkGB35QlDS/g9TJb6pfO8LJJJfqfS9FzU8TjwW2p38XTYPmLhBuAbuXJ00J5OdSxNCW51L2gLJJVW5H/IjUO5oTZW2KIGNFaBGqWvL1kcQwjsxIs1vi8oc8pXGhH0peox1LXr5d7X7zcZKBkG1V0N5b5bUH4kfHqkDMQwOdR3ylscYh1dDh2i8r+fyLpjjHtn7gjcDpMR/svfPgLHyFEy2iYmDfgPH9g4NplWtYo/eOTujaHk/Qqz+9ceiL5L4WdGrOFUWzf3S4zF4bJl5XEeEkkIUrkbFELfuHP97XQNewPBV696AFWhqhrH7iQDj0eRiZmUXx55xUgvuuD3IPfnJV3gn3IQuuh4FNISIRa26BnSm3W5bhFFEItt3CzrFnkBkWxFTxCO5Ub26fvYK2TunqE5CrRXdwgAhlhHKA3AoY5+l9pGliniSUVdKzU0g==';const _IH='02dd450d42e74c7539098610e8632e0854420ed4b105106fe5f87a254869bc5c';let _src;

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
