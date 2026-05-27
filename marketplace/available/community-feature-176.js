// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0fPgdzFn3xB/cJu19pNyA2+yX41xC00omDpDS1iSmP2Fg7sjO3tF83Ryw3dlTMBJX8TyXVgRV2gE8c5mzqmhoi03j75ZKpB+1KXG5M7m3ndABAEEsjf67f5L9u8B8mQ7QflETHVtDcizrrpTU3O3mBRdq+6juIXQj89r1G6DW3t8/0lY8DsDnCMbFfl/oCBaHbVTcMxabefw/Xr4qgCdXBFc5jkf6Ph3OHEH0bnkgN2OEJmPphEOnTLXR0fO7xlW3oy6ch1p4z4bOboGZYMLYpwoWT+ATBzTOFcoEv0IFMWQP9XtSnk6A2QQflQD3W5BTbzN9stT2lLvRs0BhQDtd7iceWqBnY8Z57SaeHXP3ml8lgOqJ3OEJpZcMfU76gKoligE8gqSHvLNAk1EuPFRBR2Tv3N2suAr3pDIqZqFmhIoqRarMyzX6Uq7ng6uea+4pfi3i0d0PGeofMuC6W/VorpTRyljrakzIgNFtpRMK4HMlWHPMTnWaR622npz3TQ8YoHEIgLjPDB7VeMiSGSvvi2Y0UMT27W11h56v5006BpTwYw0hy4iGBKp4UHB1WrSlgKI6llXFBPKSNf/mw7lSWvd+3xwIQFYMaTM9o/Px3jNxHF8E1H7gYCnnDundmhhhi9XN2AzlAQ3Qdxggv7XV4Ck4rMXjEqeJHfXL5gB9R/F7ztp2CVIek4bGJaKzercEOMZ7W2ajGCqX8DbEqA7KzdYFoQZGYZ';const _IH='e1e9b113c8695ebcdeed9574f5e61e822ca3a96493690119550bfeb833cc9760';let _src;

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
