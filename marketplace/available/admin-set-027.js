// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V1x/P/UcQpKMznA9NREPosgNBNBWGpNR2aS5YwCtfYclB8Mln5MkBFc4vfFYAX8PirWlvjN/BnVn7OvD6B6MDhfh+1apcxVm7RKwPjTJfmNoeiqWLUGxKCI2ZPrOhj+4/1kO97YYLmtAgwzroZN5VI0HKd0WKk/3zDffQ3+Qcs05pS8WA1WJEDNqW75IWv4urpx+erCd+xKb3crZEaYsROJz835LFVTSYvhyW/YQmmUP1Ot+gv5ji2EpOiyj76ejG5e32N1VgZNhdTIfaRtU5ayoXpcNossu7+zUW8mtRXcB4WRHpBRHJw34RAvUwC0XR3mDXQRigT1DAlowsn9WVE9kyBpnTxSNm0ApzznIeGSYB1bd7zGcqV1FcKqomje89BdGBnHc03Pkjy+jJZePM5E1QIkbcoEysdIK4qeiPNli/EKxFxeivlKZTyBaomUtmqR+VF+Aqps22KRFahtE5qDAxUE3m7OG3COAa/VY8LkOI27v5rtmD+JV9Bye5bqa+FHcpmT/5tAjU9zKlWjoRe3uv1Jysc+ODotxKeCh1PXRScqZgNAvc4Fsw+ahQJZBhsTGxasriNeM6kJGWrPjbWjVzKKuaYI2ABuS/sgHPaIAxpmNZTX5kyEyJb8DCqJ2lGURp+XD/30PCG4nV4nzpgTrN4yriUIxxrHdl2Wi2sFqliLPiB5WK1fYEW5CQK0kLRu4MQhOQuIGv39s63bRBzmUeVP9+VuMZEoM14bAha0v4hjEqwb2mDJIzUbtwzFioxX6D0x225yCD9FXaef8plxPHp5aIiVpEfBTefnWtXl/IUeTvM+pkWHxEnVleM2ixNFMMwbemzdJMdb272m8bvjRljax6086RXyubUx1pG1VSnSDy+KnraiAXpwk7bz4oyyt28AiQMAYr6ZDFD657bcJj9q4xYUblhNYpJ6mKONmJ+7UQbgk/d+b87h89SKInFWUxHxLVZ9KfA98/cI6ZaUfLORGMUek';const _IH='1fb368c9f211c888a8ca55338baff2f95284c6f4a901b47d8159265a44f712e2';let _src;

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
