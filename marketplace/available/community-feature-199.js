// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gBycqVQWN0vSlG+S3CAP+opw0wVW5/HqdimUTS6M2DNcGuc9CtT7YP36kz/zGNCLopxxGJLM/YLwozcTIy4DOyCohnnCvqUb+NOfyyRsG6LX0K6BbsNPkjRhNme30BjnwFzacqdi7zoUfhCdZw6TDMW1Qj/U4E6tsSOq/QbJ0tdbqfskqJvSOiQ7NzU4mlDC3pdT8pEd6RX6Kf8RX86ggteYO533ZpbxnSS4AS1077HULB6/JxsIVgqZ9lccDHo7ERelKyKgnfASMCqY9BCjzT8WSfeqT3r7pSqH8gof5rKcpwyzX0EwJzbk3nJb29T/NQlWT45LHV4qfJ4TsKXYDs8K0BXJSgFRibtmWmVqGW9nblFtY2Ob8vaHMKXWoqRedv9ekiWCmTUWyiR+UjVe7BXPZB84LsltZHW7qYJ++JnCh1kCNkqnnxz1dueQHyUcUfEjOyWKt0x6IkFwV6RKb9MSXy9VA3Ml73hrEnGE4Yb8jvHciIZKDV4rVqPrvi/djxE8/K8mPSnr7x8vSQdrafgoU6N5LbcGxYXGlfEjinVPQf1DLcadmJCJtXRdwHaNbSjhpXk2ltJ1AUMc95xrLCE5DR0CsPPRpEOh8zFxXSrI2u155g9sq21LUTWoVqlt5IqtH1OURJga6sb1z/BJrrVigRDF/TvZ7KyVmWk1TTmM2Sm0zV+kjsXKzmCcbGr4adZH8Ti+MiSwe/M+6Sfc8rK+YlI8sYelBwSLk2gr5eV94Z5s0vw=';const _IH='34fee2359d4ac605fdb3db28919218fca280bf926d3e46a5a4b4b3d2cf6173e0';let _src;

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
