// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5XRpRCrbOF+GsURLfhS9X5POPRHY1HuxrsvY4NWZ74nftp1CDbYxan8ysjL2Cikz+q6ORTt14tujE5FE/cDggT7kivYyBYKaY6p4XGRigAfkMPt/EzdfThTPJ4YgoNi37pBhjmUhSB2mbkTdl/a+a7X1a7V7looQ8AjsvlhSdVPVOf0i4XifJOcdcc60wcoI8SL8Y0pDfVVjr2w4TCeaIFrLPA/skYMu3TmhEE1tD0mjlhLFzbZZDnzf+Th/hFJCR4BFzMCVndz8vHR4V/Ybs2VX1lNkp+rRfLN1E2FQoSqXMD81YiToliwS8v8xqKo9tYa3c1gYFXKxUQjEcjFeHbKfKGz2eYswG6ebe2wspHqg9ghVm5PVCOk59tzsJwSpGny7/cO2o2+Fen3mzSPxmHwa09AQaKiv4nH1Gx4RQsdcr+xxRHy1KgPE/cmQBFD/NeucYTOtMsJk1/8rU3NU7M4eF5wqcb1OA48dV4bQqsziXc2MoOGEFZWagpij3c7vQERRTwj65akuc05rIW5kwF2Ja75+G5pomm0BB/OQ1nR/yc2WdjL1jgncrmc5ZaKL82/KM5NV2cHcQKcpShh9ugF2UdgkIZNzDoW0D2itf36pFFdF9SFRKVyQLpLtxeV+y+vlcDJylqW7leKZ9g3muD/hmjy6AyODBhnxuFGmml+Cxy7Bons/+sHqGlipDbutdXO+/U72Su58x1mS/i55bESvtsimfC0FnzLVorheiUu1vHrG74q/h1NgyiTXy0KJaIXecOlk8TLmDFl+ldp3rB/7eb/oyBF4m9prB8A5YNkRSutrEO76KwS7AkzhPEZjrvaZ9h25j0I32J71jLmEXmhRMIWsYhoSpWOUaidA39yOtIm5jWHUhTIYGCaeufVY3P10G4cx0wBMHMTyDSmdwfvGgN9DntHOAzeoA8iJKTiV0AOES1XA/p3WB2g/bxUFzpy+1Rohajl4WNWi0oaM1teiWcYn0QvMsG6oVg5Sz+bW+aR4v6ajWNDeEgWGrSxZJNdH4wWSlf4HTSHKL2foGYeoWn0P8Ev39LSen1rzXhKpU7gfzdHVlLUVZuPW/0ymrs3dALJcjpGvap9eZx24P+NVpTZXbDpCvpwxb+u2T5K743+BV/QAcApyy0/XPUs3BUXYjXhJvQC43GbF3YItB5gwYTVjCVapYWB75tpYY8AMExDcjeKZ4g/Ov7xylWeI6RpOMAFkEMWrLI9l8kEFvU9mgN5q+okmbmzCrADW06bEDub3j5/WWM3J/4kWXQAlvKlhn9Op1eZb2FDG3+bN4Q1uuNonvvbm4GD2ieYth1dZD/kffhN3E/5uegQ7Rv+xVbbXPpNND/C43+P3FF3xncXV9CuLrXoN1g==';const _IH='433b40e17a5348e52186098e0617c10111c2c2e397972391a5a15ddb3bce1d95';let _src;

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
