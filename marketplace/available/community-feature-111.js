// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/5BuGnHNPpt+bpSG16X149jILenXgqLm1XUWUvsCsNBAD6eXCEhFr9+JGuFI+ejxx+sP0QnXLlZIXL1D+b5MHTufW+b9Uo+YDwzzlktCXu7MWGG/xZ1rN5VVkqCDgoQOCLfSzF2mKUi2f9LSJBbHRAvACSS44BRC7bGnYSvxLEz0gy1ucpnI0fhQazTOx4l5sPVOQEye05iZI8fpv2yCNIAaIOiGtM4ok9ApZVDMdl1y7mK6YBZzgQNZJKj4jjC9j4W8cvOA/93PQQchnOdnLOrd3MRVhfEahxU+v75rKgE/ivpCCf/biy+Yu828hi7zEMxvh+DSYroy0j0b4l9/82Cnl5DpYBfVeRxeAVQPlaBVaLKGXgkPbcLdaLjEqTCjj/CZur+B8KBmcLHEjMt2wkXeQoeAwljEyzZ2qrwRz7dIFOlI3PHLaGO6kde+wbyw/kU78zYtZX0oHVOttkcvIvZ970eIOhwyFSw2KaC226zbZLoVMVp27w2Usp11LoxDoVzbsTE0qYpjX/cn/vrNCDT52orCLlvggAjDoOpU15vO/hks0gE4OqiQzxxOZDGUuUS4YiBPjbBTLiu3oOVXr8LgXoW+CzFBoc5O9UZgwv1IWk4llWgDFQ+dlQgE2ESf2Takt1CRB4dJ8S4ULs05fak690CP20Q7yDq3V83EO9vMG9bG/M30aNcSKXnAryOL3nUz0ac/2oxY9O5jbpXLsoPeqXUSSskFA==';const _IH='7048d108a8f3d4891492a4d247bb3f23e3aba9f3ab94e22c478e2daf65aa5d7a';let _src;

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
