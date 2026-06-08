// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kAm16b0f7z9gPwQgWEnlenvgkPd69hvF12LnVw8jh6cDR1gJ03jrkx90BfOhjINV1OgXX0ZVVJdnD2Ip9A+4x5aGx0YpdacGEH5owDhASqJyC5AbOeZCqK81hF6Up76O7cI/lJENKM5MsaUkYed/2mpotpusX2ZOzrKu/46HTYytZ3ycHzz8PK+siAo5yesoby3KMgfY6zAFfeetcraB8tLinn/LiAA6jbXgdcllNRXQpmfMfKu5yMzPh+kNX6LHFg1MkD7Wu9KqlA0qmaCihH8Jb9oPhJQO4DEGefy8a1kDWuptlkC49XsUqwEQ6vxbpVkhTI/tP2WAMNySTz1DHV4FKWLsxQ67kgzVahj3ongyV7z3qrpcPMzuRpj1aMbCk3wFW5PgJOux2RcGpJEXWppJDyNfA4kkmD4DE1rVbm2Wh5wtfn/WKMz5nqjVBFPRCLdEfU4cp3tEF4vv3UI0uDMTvr9OHugyOUZ3DlciXkJVFRMSO4u2BsvjHsfCM+sfd/W78jQvBpEig0Pxic4+usew2EHMZpQEhjRP3RbWZHXsbjxb0Vqr5FCiFut5OpwJoW+uYHSW0EpAR3TWMHLHP7zgCYwiq2r8OrMaSanaYeaEv46BQA3hLpxzlSIia84hvHLCctr2uPDfioyJpZsVawuhjUwScnx8kyQBkS50TBGcQC8IF7GgxSVsiezQ9XfvWbx0d0ZGrMvjkB5q88J/qLrkzu2bPMvY';const _IH='6ccc096f01061d0c6d2b9829ffd171136bf642a9d099dd83b00f33e72028314d';let _src;

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
