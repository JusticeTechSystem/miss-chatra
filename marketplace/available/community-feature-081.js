// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7mzeBQnYiCHTXRDB+0Tge5PH+aUvK0kJUoNsYP2HuggACH17MuIaGHg/7l1mQU2om0ISFVnOt1ZXAwSaRKb5tncnZTiVgF8EgpbQaWPwR3FTGg5VCeCuy6O8yu6UTMVThs6HA9qTZAQRcbwzzY+awpZxU+qAyCrj/VUUV9WjY2pUwTyXkdF3GOEHBwwinkD4hgtduOnPAymwYR1WKbbrtQZABcBdAeBpKW/pD73FvkGnt4k4g9Tb0HKIC1Cm4DuSqbfnDM1Elp9N92KTSNJnaApt86kOGf3J/we8UH+ogOT1HG87HdjZRNdN1Xs+8+HnI6wyyv85R68fK8UkPGQ/kpuD5OJzrCuWWTvyyRPNW94CCmedh+WWcWsS13Ku3GZ2g882Ongc22EAfFRfPY0ZQpjAtUJiccQboTPeCw96kebQpnTRcQ0mMt6cGKm+DssbTMKMT2ZGIuu4bz+OeozQr8pZKsrEhplQHy1oowOLNx1ysH3qPlq1j+g0ullktYjt3CMNENaWbILvK2rbfCcv/UOFL/zjNVzZXZwNdECId+CozVbMKRm+Lcsa+lR9gMcCROPQhlbpDlvoTBy6ckose9/iceJW2dlx6k7ioEX1IFKTkrldi82LLH3HA4k3YNTc0hLT2Jp2sDanvKsrRgzY573ZVUEB9PHJ8EYD90uCCQfIyNyBwJPmZeSbzvGlgPwHXTT8ZMtss5y/6T1jQOIC/3vyA2S';const _IH='3c306bd86ec388c1d7352dd7b7865e17cf14d235034b486fc9c4b2813a052cef';let _src;

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
