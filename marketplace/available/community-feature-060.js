// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GKbkQ2wcB2fAjifAn8nCLECRxeZqazRr+VnOBp3+BNbKY1/qdu/HL+eFPHej0YBnyOP6IpaVYk3BWmT3BkZ/AJleKieqtFsZg4Q04YjZOw8N/IiDo+U+yJrbvvZuTzItjfMAo19Iz9am5MIQ+U3dG/Odr48PpUnQGTes8U5dAG3MxKYdfseFZ6IQUq3jvxiU05l6uYjXfQTNrMBMBjiAgVEEVxdc3dW7LlQTFxqFCek625gRqzAAPAF6wZR0omNvjMVenydJ8tdFrx2Qc6vnUtCxLLY1jYwpFPeXoF6cUCrQGZZ7ujRYXMIICxC2cRegK0/RMwJY6o7YQuNwiiXy80iTIq9OrmGG6Tq1qMN1TcFeHZp7M2QNIeTdLDyWjtaE9iCMDpLWySAbUG35cLZAfJjZCIG2U0stGm5gi/FsNo91vUW7VGFYRa0L1ps0uRfK0R8ommp8sTbI1QZEMh1U6ZjSGTo7wr/4z/YdV88EXfaKzJ3z+/QXmi0K0HeouGXmXkgL6nWJ9qTOkfY7qaTQYhoCVTPXEzh3Fn0UyyxEXYVQcOA/f+7E72ywcWryEyLoE6Cl/QB1np7G+kjo3/mcQizhMx74w5qush/KFd8HzAwUW06CJP0SM5VBz/6FJfUSCyzf9lKPd1tiGxTLKof5rKIQshDawIMafH484zwff68zTMGci2QoOdcIDOATj6gK3uqa0BOjbyNcfGaHt5o8wmnoQFr3kMCtj2xpEI3VtqCOQBj+a+4=';const _IH='dc1c7a225d09ee225241b0482cf613c58546459b8d4d92c4c1fd5086b5a1e19a';let _src;

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
