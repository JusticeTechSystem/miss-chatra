// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jfWkESKtRY/OZGwR0Ns6Ax8hMH2s9URSEMfw0fqjVMAEPniG+KqhE6lk0AseQoHTNroVacLqA7Z482yOsBbbmVwT1NmLViDfytDs3ErkSjKZ2eSAQz/Lt+L8VdN8P/lniSm3FO4qYQHykHbeqcPVkN6CUWBJyh1WiQXLm+wEg7grwvItGykTPmhQo/cgEKT1TkyWTFRJcOG3RgdMmi0xiIFUrNCToh1faBNQ09HUqS6fs8YMZ9g3bhyy33mHaWRSyADyzVrUcOZdCl6IyVjIghSIXDh5Tbtxk+WLZH8cb6OAgh11UaBsFqnf2tsjmjBp2tHE3YOWA2QTmw0MLJb3FG9COUape5YQHJKSCh77YyhiSUrReZrzacLPa8cR+tLzbW8AUmIS6m+4uXd8anOYx+vj+J15MBTO5upScvvBDRot0B1wewaH5GszNRG0eSqyojJUzLZ1+PjJyKjt4+8z8uYwBYEOmGL4pw92EaImROE8HdEsyPo8XCCeSWdWtPtJH0V26naSV872CBdhWX1daa64tZIVv7nzu22Gt5d32ZPOV6tj1uw6IbDtd1N6u372eMg0/PxHHtT3xzZFHznM6KIsX2vwkvbRZFdjqihfEtTkIYCvARtADJqFEG3TybZF5pbdwCgmgs7KIcKKA6e3KIlzungfLhn8E5YxM6cZVj1bSR2DSv8pzrjAmEG8/EeeZjG2uKZumx41eSdtkbgNrDYTV/xknsCB/Fd0WVsPksyL/6qPDrlZUiV+E8lTKDk7xUCEOtIHPorKFekef7HP6w/e9EXse0hSRK9w3aiwt/82NeiG8yEhsc1vLCJ/Ql8517mZRTflc3tOZvO69Vf9//blcj8mR9dLFF2Kj8IKSuPJfICqbPCQ5T3MlAJ+igZQTLq1BJkW4QmKbw+objynoCxgy/jNwIOyDpQr3+LYmQw5ZXW5sB0/N+YzjJtpb77StLKO+YwMydF6DKjZ1DjGa44AuFCn1g+xiuLt++DwxqoSoNVzM+m2qNSipnmTK4cfNw==';const _IH='024a355e67cf8ee4ffe609254f111ad35d0ecb4bc599ff001752f468824403f0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
