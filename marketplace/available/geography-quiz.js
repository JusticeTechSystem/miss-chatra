// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PFI8sEvA6NyFp3Ip5EtvJ0lb8SnH/mYEBn2ufetFbs9yuILcSpgIY4zARYR/+eStGCGjPqIRAVjbK9v2/6hwyK0zh4VmbDR5/7zcHOz5k233Xj0M9zq9vmdWuJd8gJQAhZB0hL0qhiPwxnRzUB7mS+Z/s3djosUAraZvtQktAs5XjHKYDURoAfCBSFUBC3aX70Gb1JfBF7IgZboObgt51AoqBFPTQOUnV1KcWWF80gSuQJHiiw8Xp1KScnE6dWW93OtwU/yabXQ3ZM0NX0G4dlCDCTVNLNB7akb+IiUVyO+f5WnqufgfglQ1URtQhKdXzft5bq0fJxnSLvpHD8QsA3G0Jyff8160LT67Yy4XR2xMsJX/FNMRhPfvV/dTLg1FImTAODDnkFmNN3uN4VQx3X7S38eidqhWDIDqk2qUTpHjYm04EDczVFp56zXeVnx2796jc7D0M+/48E3Pj7NK6BGQMjOLForGAcMjjpx072KLoGsCTrV/nmo67nIoCe+RJgfjEi77mpdVLwviQSnkJCKYJsYpgGj8e5GbxTHl0PyOrpdqREDspY8hSS4hpDknFbULtQxPOzLSE1lZavzboyxt5VVAdU/UhtgHkB8A6QLFA4BF5sf6jM2Wm8NZYUU/ZELupQrYrm3ObtlWKa0lAhCXtvhSSdMJ+HPD2lQM8adMk665aiw+26EBCWm2X+cUSVgfjVqwjeeTMTaEJwjDxf1qdPGX8rPUH1SahUVE6N0uKPzWP7i7PwuNIWs/IrN/z/fPUugnHJ65xhO8U5mhGKW3pU2xratvkptKHtsDgrF75CurDVgtKw8Z96bWYut5ehxLM52iHj1iXtoo62klFSmB0YyZXPeCI0z+dE/4Y0sQuIQhRPr/N12WpXjoEAdMqlOU0t7uKkEXr8o6rakBEZmNl1ZdHyWzh/OXDVId9WknmsQX/w20ZUIAABdNnupoinqf08SvsqrfJkdEiOOnOFsrBZaNqpBUJZUA+F+V1//YBdvNyoeAzlf2VRvs5p/SLuetLcgPZHQ6uFwA9zCCDSfHajBM7KLoIvpquF4OlLM8XVGUkmnbiXZoYD/0FfHAPgwTxhRPSEtP0aG7evnmWC51C4my/VCkpHKRcshApZCpQ1eiNJV4xgkI96oYwDqXC+dP2Qg2O7BLiDqJC32Em/8yJseenFW3uG8e0pjpA/p7Y680mIwddnlBLeuHnCXRrv0UXUq0y5NSa4GQ2e6DRRFsjlysjV0fgKYmpjoSkxkpvTAlBlmzEqKfBbjY6x+F/7NECC90bCEiosCJ5oO0t29GV4pesQnJWFRH22HLI6o+MzaAxdxTeAMXNdjMKXOznJ4nMuFh67Os3CX0JqJ4kpZS07bkZX0PmlItpfQkJznlreGSDSV5+0TxsNg64ZfpuiON/wa/RUOZQTJrcSxhogkTbxTlKN3qisZXBR6CgjL6hnl/OqPvh+KSIINJxgnacPGKMXQY7z382g5DlOvikM3mJ2Rk40ymO5TqYvaLheBBbYWuyS4xQE9Rusf9taLMv11dDEYvJ2PhLBZMTHXQ4nGHCPKK1SVfucIIWAo8mGgzmizTc1t8FwOzpHopElq+YXrdFnw=';const _IH='59643f51055d692bac0f3d040dca4d204cec64afbca4fddbe257a93c08de33ed';let _src;

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
