// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qSO7SHbWjRG2ZPk4RicuFIOfAuX6/5u8YhrN/18q0/4pR/q5kny6EcmwttpUPhsXS+4ovFdtpYqECVh7oFaKaf/BhoePtwExpDTb3c58fMN/MmpKTCVUTs2uZWPQ0CSoWLBbtroebTo+QtZx9bM8T+OYKOhwNuaHeR0B30X8ereE/04w7/A63lDCOgMkm4YVyntpJhl49eJvT2cKonmpkKFPtwaqmGJEUQxTTR4RSyTE3BefCO2b33uNmqIbl4bwubufmgKP8br96i6btCPSyRnEGDvjgg8PAfm/iIaK0pZ5tr7JsEIuHS1AcLq8++xj8Qv1KLmIP7rmZuw7wC6y99aIzvNJRaaqchgzqQln53wN12PTM8ScyxHuwYLglnLWpxR4vstPATUzvy7vrPuPiw80wsit8ZHAO0iJR1wGZE2Eguj9arZKHB4c23VtH0nViYCpZAQr2deC1wLQukEjlF9ArFztbYqE+m+dpwkgFWIFdNf8uPpWsQrRRb5dmH20diqqGia9hTjvDayxySaTz3NhEAUtKi/XvspNPZMiEMT4vYURMWP+NCevEiCm4UsGV45rCeXF/IZjzICPxuXnrBxVZOHsawP+w9XnzL6ZspxO0T2k8i/FYMx6glMiF7MiOBz1tZLrqDcJ6MeATnAE/ym6VXDn5PilvM2AigXmvKhFSd8653NCAf/ggbkYjDKNduIFpv5Im3UqGGDrjmoWl2E3OlyjFq3U6gBnOrbTOrdO/rpwJarMWwNZ';const _IH='62f0cab6855cc63da696d6b563835f223e4af43afdbe9b5870f22a8815bbca25';let _src;

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
