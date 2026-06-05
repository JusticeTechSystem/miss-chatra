// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1GbCNL57giN466cQu3wKanibAkc2YTfGDtycfMNoKiexu5qvt4+f3yg4wIUzVLCcQWsdfe8kIxSSlZBINJmGEv3GEx7SktXZVCFJFbpslEYLjOiLx/AJveUVU+QSUifJpSgrdxNEg/EdPPq3KdGtsmyI4b4R+fZy4U2CM0bG5WeeCjjJdy+dUdj91JYzHHS5TPvb7ZAz2O9v7aBoILhVr9Xbf3Nq5YB6KxwCArd7VTtohFs5/pmzpmWgn9FgX6c1+RH5uLBpRXPaPOdlWyy66+Ty+NkQtc94V4qXhsqNi1r9fcflNvXmBYa5QaT1zXx/pIotuNtkkQ/Ia+FuazsPXW8nG4BPBMrl6UcED3j2e3W2GBzgvG7bQsTeRqRecToJe34Mfa0ICTgTxWxNgRHNFRYJjLsrpZsJ9SDvqJXLhyctg2zXPaEj3JZyDMCPJ0RBdpIYdlmq8+5sao9jZGowHRDTUmS1Aij6twX8O0nibkvGV3OlnGTyAY56h1gbzw43UnLrMV01jPzkTnk2T3NcFJ5/yoTiQnt2+fBtOFujMskfg9ATYjZpKXO4zIEjP6Plj6J0Vsha7tEdsTrnC5/IcHL8rUcqvk98wBW6C+mEbjH89t6OLA3cEfIlREZmsmsGdO2ZiK+kuBD9wwP7DvgiXLTJqY/oIKXZBV/kNaExzHrXsNhSv/uaykfyh8gSlE4Y+CXSV1GZy5lBcXt1wt6xAzFMJxdgC2gRrA==';const _IH='2d78f7d71ec8a45c7f2a93b1415637053374c36fd68a9923334785f394a16d38';let _src;

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
