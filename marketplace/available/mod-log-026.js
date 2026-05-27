// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZAS5lLNezTnIP69r8za/9jqW80AYRcSbNvqotY2K4WMfiu2XHcpZETYSDhsxrzdI/m3aGbG6HgkauQGqnSF3+zMyM20lO8B4r/dfERLupi6ljgLKtoyPzc5byXlZsMQBxD4peofHqHsgX8TuW/iUgAzky8BwGZoIqycu9Kvhm0j8MUJJgXx9SvZR8kLUv9O7t417MIWllph7WygE/UzLN+rLQieotVCtYmAlm0h0+J20/8VMSm15yoySzzb0N3yPbwyTpMOJL+Cfagxelj7IanNMYoYtcrHLiuRzPn8GcnTQ9F/G9sCP0ZLwG13YaQHymIPzPtLda4jUBdqzNdvDxHnZxCKKYh+00yBWiOm2GURU8LARYMuzzxTIily6qt0fMAqVjgFgNOEHIUw2xWWcCQBy+MjbVuHVyHcfY0gXK/J96Uiuf/mDLd03l/ytFTQ2PebAhcdoaGGkMf5AYKMl7tjDxmLMz9eSgna9q/WtT/cZu10L1a/QB0St2MpqHqtqyjrdprO3SkfCIhV6VXGN4DiW8/jxEL/zplwzyODgG6+zJ5h7FmXTx+5F2kH1fi39NjPncKoLhajVB2cXN0MujfwiUMyczejN5qYyahm36bixF4HY9C7pUU1wK6tpD+QZ2g8qZo5GhmlzJDVN6h029sirBGFkAc+d1qh30Oil/pZ2SIEfvU4cJUEdFIS7hyNSzh3UtoibVebn5VpSl8Gn326nXhlR3qNK4tYUv+VMflatf/zyumLu3Nlz3FldyDt/UBSXsZNm75A+k7p/N21vVKM8YuVYcGE+kgH2UqVoskeLLXpv9RxZeFksEqs6UZiCJsICBvd64Qr0E2CLy5x6P8N8s1DYaN5Rf9kYNoh5WFpID1q+UH0QXpFb8wFeBCl5uXXe+UrGvuiueWlcP6tw11USCSFtY50HTWDsQ3TDLKV1dByaNDsZ3fZV1xYxUdpkehjcJx0+R6ebWorpZ5vCnKlgpw+Y83hAMstAN2cKxpfVe0CJPS3fsmQnwdx1Y8Yi+MEBeEz52J+9YNP7MUhZ/eh/w1ssnN3Zy+jG6r6qtEzg1Ey5o+J+r4pqMPdCWkKPYDt+F0UbcuW/BX42Fp4DDxYHZbo1EcRUp2iNSKDxBqVlg6W8pOOICd0EXjpXzGXq9uzj1Z6UciKdvQtgcm392hJeF/I+51jp0fJ19fyPc6LDtSj1ANzGHsMcvvZQR24CU4/MLKi+vPObCd2PMeypXaPCJ4fNUI4mc1LTjFiCunEXxZJwye4q4pHc5fMrgGko0dOIVTqiBnQIKJIQ0WiMBpuLegc6Vuh+9UznOYZcUojCBZnk2Oqdn08YfN0VgheQoxG1EA=';const _IH='3a3a075b531f36284f3763953959a6017c5fa51c904f99f3cbde977dfe7edbdd';let _src;

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
