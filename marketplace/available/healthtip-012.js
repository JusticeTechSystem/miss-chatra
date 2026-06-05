// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UB44LRditJcDYjSJQp54KxkkYhfOllTtxDpjobsarMn+W4O2tJSykzEd1U3XaqIdbzpae3CxZga2vd+BskGEeSJM2J2t8qYJDEJPRYkEW7bGPPKOFF1U6Nb1C/giXT2UrckTX5reStMMTMTZRZ0GIqBHxwifWiA2AliDKb+ACHl6uVQnOoMrGhKIVZTjzCQ0IARFdz3nUBKhz0+QzwVbiIxq+zNz/HwAQyrxjH8NbS3HvLz/zz5wadIQ0ieGZhxc2u2Mdw9eF81sPd9G8MtvjOJzPOjyfWQ8jrqh7pnvpLvHtr90P8pAEnaU7obz54x4Q9Ww6oDCnBGNVOPvLWHkV366dbXvmMHzcTrJZQbbgZTB7DQzPgVr+IlZ6W9Gy0psoxCu2QkCAWNehD+G6gPNWhQiJvmS4qtXOGvpMwntzqc4iIJeKwPdfRYwhZCDUmLw6+GExpm/sehGQAiPhDRJyvpYqPScSJ0APeqzCfstwsqaJ/OvrzGz6qBdfVxe51Qub/VS2D9pfJUkVk+T9hZxqk8t21QLYXcV+6AZgfIH9LtfOU+7MdwiE1Ak++mP7MItf9An9sgfiUgPBpo90ZHMtrJf1JWtZEJW8k6HJ0V5Ef1sHycTcT+uOmZdnOAPIOradas5JuyzwWyfIirw5ayxMuTKKkf78QUz4eQhrqMy1QbKlcVYQP3clmeBRd06vxC5cZ/DoXalfsmYsYBHZVNwyZiJPV02WgxQIc5ASOVDmxPn9+BjY/mEnxGg8uMTAjjluUjf5W3H0BGPAMqdTZ3gFJbO6SpxNqBlHzMx35pTeNH4uDCkBZ+DG2IjM38idqXXrexNXHnW2E2Yvg/p8MNpZQboznbh5UXElb9dI8P6kwJas/qmzaRQyXsxOXHwkI6QKHozVdIpPIONV+RzFoLwMRUjzOwiP8G9FEYrfQ57vwxY3yz7wALFurlXpWI=';const _IH='c3bbd23554f456cdec70cc101466ac8dd5ddf50162b9073449f10e7b8da7b11b';let _src;

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
