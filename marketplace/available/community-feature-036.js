// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K0RRLurR2aBgBb7kKS4R5Kux0yM+XaABDsy61fcQjYb4EWTQEbofA+WoVCLEuUq8pb77S9EU6o6zuiCUeqvnizECsQgDNjP+FDXlxUEMufCkTVe22UiInBlMlH1uIPpk5FStE7dyMkOU2cwxtB8W+PF6WF0Q4Ey0Ps6n1x234+vnkkIOaRCRnlhkADXWf9bvCzujFcvx9bTYrQT2cSQO5QXMRJ0XVhWQrFxrUNpDn0K7aOTXCs5KJprTwU2GfthyIjqhUa5D8IhxOiINaUDT+34Y7Vz4mb1A3LeOfXHPECODMiSi+vWBeRqwjSt/VNaZeKG/9DRGx0KcRzoH9FsEjAuM/3WcSRBSlYuE+AxNXHiHQ90vA103mgCE1sNU12ku0VV0DbkiW75SfQ6gmJGE3yDYzkRlsH6GOS7Xr0URDjRRsSH6LvbUF8bovjjzovOElv+LCk1r2yDuZLykh1IyLmHuaL52QwPFmY/d2XiCDlG/1GUdCzBvjDY8n5I9PEnNImKZX5TRh3wEJT4E3N2yaNiRRTtnYiuFFPYGLBGTIyl6mPGys2SWBIDFKb1XOBJHBtpJO68tW/r2EsoJmjUSZ62ZF41AULOFesiXd7326s3VpbqQAUmCYW89o0H40i71a5eSaL0yH4llDiIrLNnPS7uCrfzoQ3DP136KZC2EFTARUgEH47H+9dB0RmyjRLE0W3kf3qnlKQN0aB5dISKdX1MK5qc=';const _IH='f9076dcb8aa4413ae524686d269cffb3fcbfba54bd775cb9ab9422564376d26b';let _src;

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
