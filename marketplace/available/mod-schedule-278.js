// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='psmsQgOnfs6iI+w2n5OhOeCC/m3299DvpwVAnio+publCns/xZipGwcu7eVLw/0xtStVrPfbe03sZbsL8qvHj0t2C84+usV2e2J95JQSi4IB+v8xc/418nVeLyjxjyTsJMma4/XLJwbDzWT+s1PWxkNkvsk/SRzQb0KxnYk/cG2WzSiIPKn5U4NGIf+Z/JIzSR7NLxgla28nFDMZtxY6gTTWFOaRMSQmjtyOmCMsciqSuUgDg8x0YiC67R7WzF7N+kuwFsUmnCTnm/7J+nLlbB3xOHOXYkSpq4dmvwpYBScPc+k9tUh2dUsboA7sRo/6xa80odwXsXDIfUoOb2DsHdY9bFyiF9dVnmZ209gTuvtb87ayjn3wWQEvgGJqgoMB13RpyS0VimO/g+DkEe4Tnqye3zDtxA9T743JlNdqYFr1AuGXubRQzlWupXLamz6/FeqWKn0/uIpi6cIpuU1dgtF87TNRxUp9pobes2GrEKi/HBb7voLVmYOKw2OS62TrayWCPpY1g6237k8f90AcJeo9F6t5xMAUe8BZrsxrOHvbaXCIqzWEoGjsGnyABGlCZ2f0NkDyRTu7mK4zxuGZLQcAgq3bVb+NEbxbD/OehDfP66LH93cgm0x7YXLWcneYNJRWL2zOo+5dqAq8euGcstxJIPu/DxfR62ei6Vb+nxD2yP1GP5lw60Qd6ClJgyMbIMXaCZuHz/eSLVDi+FUOWDFpUgEJAsF0r99F8B/QhycHQbeC3MvtTQtV/f6wCFWlZlxj7WRP1hE5iKwMgME1Qr3NE4s3KtY5AIlIlpk6ImFT6DON0fQL4IzSnUbbrCIZznCxDMQYdBMpkIN7O4gw+PSdXZZ1ds/JhYqJDh640Jl1f2zqu+si4LbG3pjMTqBoiKQRVtMEaDty6FhbIL00eXclkN75o2w9EfR7KByTBTaOuH7vnZmDrOMKST5a7HBD/FunQ3r/Zadda6Y3ZR6xnFhqMalIFX4a/apV0m0E31Ld3WRRUtJ5483LUHrEDhsnP1UUkXuFp6B0VO2k0V3Vs/S6R0acqAVbWxI01jGaBR5Snox0Ym4Fu8i1zGFK0L18YsEDhUxfc4qe2ZEMTW3MQz56nfBHUQkVyznp7GvmIpoKwKC+CDRYNb5CvDd03eelTYBhFoZshdfpZoygv14snfjbSF+PRLbqAKtbZAjWZ4YwKJ0NxcJ9pEG5p9fOKNyWBYpQcO4q+C20HXPPaeSVlTOFwdmUHLC3bDIKHF3rZFbdMUzvwuKZsONofB1HxqvEG9nhJuTuMNasU2GfFfraA3KQJx5bdpppQM+3UmXmbl/KDMgj+QQrSjK496qBz7iE5/lY4KZJoepEO3xWi6YeaNMW7A20dBssOTojSSw36nFyc54MLn5IOvXDLOwo+tTyBDF8eZDK/et9t5O7';const _IH='bd7f192fe55c37706d0ca799e5ea0922cf5054576b0fbb43e47f8b98ec24d1ba';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
