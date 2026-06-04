// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5QnSNDCiOdpthx7qJrXywfwQcwPfVwRkOHDuUJbJBX6OIdZWhLyiQ027W3dWDWsmi8RdTB3dQ0SfoHrZZwDSpTsEtoavPNw/K/oS9HnMvx55fUaZGEHX9C3cHSUMIMt3HVjb8sKbqRnXzWctRPO+//esY90OgL2tmaQkCTplHGqrwClvPJmvSP7ruIQWoPyF0Fj+gixxy3Js6BqJDODwl78SwkCAs2tM4o5wqGuPCEciJLvm1/hAMvVo/lL2yjrS4BJZtSdoiyUZ+sCYDX1bfyZjdM/MvDgBeNwXEGGyzHqqaSGe2VPldsVjTfqGF31n/ERN9cyfvePvtn4S5sonXY/Gxx0iHMi6GBcgc+/Ve+KDffWI6yP2dmGozCvUUGnz49bUBLF38PHvUVvYxK/h8syFmG+ixIJYtuzN95bdPAYE8EnwOPxe7K9hTRuncYIzndTyk79Uvu0ghvHLiLQRcKAC+XJDOsgiSJUP1NNuCYdHb1PTXhZO0uel/QgEbsA6x0tB5HNqJsqyyW49UZTUz0dNk7kZA6IEnPUfz0S0GP1pN+GYclsM+2pO5xpjf8q7Z6JyZSn+zw0kLjH4ad7f/IarrSpSZMgEajde7VwFyrWuRwOvSDG1doPwLeCoGxwAB+A0SVq2x7tB8Ycat2a+hh4LcOFPG2dXL4Xpzt7EfoKHmg7mRJ4T7buGQTP/AgYDJp3UP1GSxOz8i6SZNhIzW8tjDdOrh7bumNHVDH2SD9d2ozsp/DX73pOvwaYiE5js5ihakeI1kBG8x5p+m3Sb0jBl11L7Epln7zjLo4iHSF/DA7dxiM4ZCVJXHNnrTCIKz4p/pv6JK2Qyk6B5biJVtKOplB4qEBbyqCFMwm1ThvfZpHIikMPornpIblJ2F2cR67buJBLiMJh1KiTLvLcKUNVJTBbPBBWLphH1vUsDzAO0IJG1Br3Cw238U3QNTlSUBfbAnYOveCJ2zogxr68+9BwrN5sDSayzdds83ccHq+EISU/7R4+n4FP/Gm8QOZ7s';const _IH='db93b8ff16e9f7f3b2edf6cd343983af777fb9ce1fa6776e55593d561f908db7';let _src;

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
