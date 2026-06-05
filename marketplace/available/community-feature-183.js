// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MpKZDMNow40WK0ZfQzxnr10hUm2NqHXkFstPDjNBFjEDTL8eb8ib/CYzwt8GwqbUfMEEfTsC7a7R70oHg17p8LpUY8QyIxVF8LjeWglpLUFC0W2ozmR75NTF1JpwSvLOwEmtVTjBTdrBg5QGVlV5mRcYA7GsTTYoR90eSckh2CTnMD4XdtR9lwoLo23sSziFX17IiNszfnLemqpkghX+GNBXSno7mFuCpC4fH9G7sfAtyrn470WndI55DTYVANPFDkjEFT7XLmQqQBMHF5p8Qh+0nPvRYVZYG6FQS2/NAvGbM16gjQSPoUEPJ0kOrSZUWR8aqUlz4x9fdzBts+Va+Ey02Aw1cY7/4lk+78FpMP+vQ/87X9yiAadh7++/IQUy9KzpoBO9MV5EHM6PUVc9WuxELHwXRH426y+z78T+KFdRZVdXKw48SRvrBKgKM1VKZgYQsi1RmrY1VqyMDzpy62534tOwmk3PPSMjcylWFtVjp3dXWuz7JcXtAtjGAmZeykXVTlR8xJNnb7osUXXrvO6r/pZVDvXU6QnvFH4Y0gkPcYIkgOzAAumv1Xqq2YWKogrAyiwwdThUdU7sJfAT/0yZaLHfWwa9/uEzSGgxtMnZvloMvyQchh/XtEPc8PM3ugXQ7hmPWBSaJan7mdrQGTJ4ZP0GookOgj1r2A954Vqr368Gk94dZMT+NRNfcnHQW/RvjOJiCsX0VmZxDnJpPuc5oZJudLRtJexY4xQ=';const _IH='c0ff281f41bd486de454b482b07cca041cb8df902e17192d4eee2de9963bb9d2';let _src;

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
