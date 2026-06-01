// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6mpJkRFSxk3NInbEk0ZTdJmByEXEvb6SV/4EXnbt1C+EkZC2X0PPkBrOC8x49deuv5R6oEGm3fWalCD5aBbVAHB2zvpH7v3R85iOrH61tH/U01ZeqfvXW3EPH5xvIMogugEcxVykmUf8fy69tjpfykv3TIeIM3PK11GODuVR9JLHjrW2tK1G9RmXhJ37ZW8bYmcFV9nTxbtW8HJcRbH6xVpcqXQ9fShlcEHFi5qQUdKt99bF/hW3qAcAUHatelFoK6Anx9PN93s7NAzcQTd5NeP3d8ja6H9XmxKJYSiLnAoyKIHz4A804cgCXvPA1yDf4EoTv/Eqv+IEh1Ud3YBcWPqTJbnn8swBLv6rMpN8i2tGB4TQxDsOWThw0XsTgoa1lUFq/u0UaTu8hFeWQ4CrC1VqqUg9cQ4GaNP+hZFCsiO6FLRNQNXZI7bVCGqUTYGnjBZhhz+VQXYMqi+wKYYdwLVjmXILGcgUI1g+JCxYmClHRWfxPSBKNyGZXFA8CRTKGXsmIBZDUWmqDIC7o4AMYQ+gyD9oS3SpLiQBMIlxm/DEbsEv9SlysaSpwFg4RahRCAu6cr/VOU5+O47bebnkBtNobG8JbQgW91k2WTptQbv5ziLMbLUEQrch9KMrvUUCmOdAJqe75WZT1TOWFTBI+T/wR02Q8iqCGc/aMzr7lbNIvTeoYzyHfoEq37td36AhM96gkLyMeRZgk/SIDus71p3Tl1ZXACKzNQ=';const _IH='04157ad17207dd63b5ab9dbeeb1aee0f86486aa3fd0d7fb10d9cf0dfab52ce3d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
