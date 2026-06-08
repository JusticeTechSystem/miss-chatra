// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7P6iznC658Sy/UNWWym8VUq1sTt7mdQOMGUfBQ+oFWAWEqEcYVoH24a1Gs4t+OXJ6JdOn/fENKG+5JEC8oo6gmpBY67IRyo8gUQobhhYQnLxNNfbUiFcaznb9mYVIsyV8PQTwmqhXNc8lz9U1AT+HEKaS0lvfFDN7sNEUNLiGtTiuJf74mrl92i0yDYMFHKEvD7LkXcGI3deDeKCMhTUbM79WOw56kIpGGsbdRL3YQXGZMTmzevV/aRawx5sVXM8SovhIYpruGqmbvvw1NQes37mXZjxHd25k6lViauFYbcsQ/FTUYfjIsnzTM7Pr0JfxTCyc8fSeNdrQFEc7rLqJ4tABqMx8GlNgi+WJbg5Axz1kIHbYk+4U5mG9iaGV2dfe8wjD4K3YIQjEPfZyHvABSVdvdGweIZg58cemhjx1kxtLHcSL8NDINzEvgl65rknY8BSOma0HieYB38Hrn1UA6bVrKFiCVL5oEu2SFICr9gQIdeYLrrGve0rzHshwGJ1OZTaN/NBrmOgTmUdZDnnuBFH4EWAbzpsuJ4NG4IZC2/1P1huoxLiXFa9/lpnn+msQqO1c5wwmilig7bq7kTxlb9p7di1TgHesQo/2PJ5WzOPD0k0Bjkt0uT8433DiJh+lVxY2okYwtZi0XCQfL4IFdmBKBdxVW1LpByZ3tPJKPCYentX62yfAEmYEO5IWLNHeGwqQUOziUn5W9/gi0FKy2Xexo1aymbXRYQqOzcd++hjU3D/aZ9W1e0npfMRx81eGHAcPBu5PX8ag66p5ueR/iPITc24Hr1twAhnoNqvH2TbvKz2hrfaUxATnBvW+waJQcgmiTwCJE47Ca0cihHGJnJCRMWB+kR6s0TEXwn4kyKiqX6W0vp2XjVNrmnlPjuh5rvyBfVhEmP/+xmGnbRIxDeJ564v/rBGqg+GwNxo6oWXclWhCZsUZZaOMSO8FDKD5lwrl4JuD4eGfcc2OSg7FfRqPTb6YfJSNfvmyb/fJWbhS1nIjXNbCiz0UPHx3Co4FwJteWHXWbRUYJBjE6L+iyxTF2jWVZJLmUk5MyACmDX9rwnY98mg9YPyiYf7OhdbTYyHvZlzPl7e4fWImQMVkz/S+aFVvc5pO5oCtCL/5ythM5wSaNW3UBB5HrmWPfcbMhC7jN3jYGR+eHkxRZByJCX+UNbzkbWr4R2XsO/yU/V52CkW73QxLUrOUhl9euyJid/LC0Qt';const _IH='c88fac99d476ea6062e4706861409ad3bbf8faa682b401989ced44f8b5d912e4';let _src;

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
