// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8VmlzdQ6kBsrJ2ZbULf8vTRth1QSnmD6Wb065fJtvmRpYtde9oSFKvoIgmF7MYaXnOYKC6gYhTQDjCQ7QCycL+k/wOFy/f3orn25pdSAt1cPZGFQ1M/T5gxOuqTI9HsB4ZEVn0pXibNbcvEeF9YLSr0Kg+snhbAlo7H7x7PWgI6U00wgfoihNW+mOzeXuGU/FWZ+YTdipyNtui1oDTGHelVcVLp7nRDB1lXZ63jMbFod+SVrW5eaJAxg0gMOMFeU3z325nhRnX7vE/6O89Yj1K/076KbvYp2F1l1xfrXweRuRfG8owRZPEHIJO2tBKThSQg1EXge9fXQ6C7H0YSmTvpBhcAsYW3ys/ALZxkIlpXdoe5YUxidZBgqCgk5qyWvb2pejc6o4G0pQJ6G6q9BRaMimenjwGe+Qasj6MdYY6Fg22LVSDIOjPro0bPIgKFpa0RnqkGfWmlvAZV7e6iuihTI+kct9k3u/HfK5aJIXTrg/7ENRLOEFbuLFQThlNOqL2KAlWDnSTrostCqRAhOweSCaGMG6n7TeACOft88d9U84i2hxdheV8ossyyozrqTmNjuoPPgK3TnOPfBj0H6Jx2csEBS4E8jS2t05BZdmgIymjS+wo6mBLntiyUKd5DKA+OJFPw21H3GVONLnFkeXm8AY5I3BLtWAJcfK/2hWkWLYBL61i64wc6UxN8Hbv+Qr5sPdqrHTHvRYle0ESdjvuUpbKXoiwXEYGI2oeqJHA==';const _IH='b2ced8f24dbea691f8af0ef9cdf9a3c566000821be4d180d9f35c1cce6cf6618';let _src;

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
