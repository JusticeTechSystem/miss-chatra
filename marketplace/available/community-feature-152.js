// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51nRKNrrNMOjXx/CyYEqFbSQ89NQrXHtIDbkPWii46pil2ZEfkIN8iCL/1z0487n8mnn64JkeNuZnMN08n1FMmxlgjfNVFSnGYpym9iNrNBaqVNkRhfEbbWtPgeK6IZIUln0G6/s9pbLfbHT+xWKiJyBichPyZdxVuGBpXBSE59v/YPi7HCnU1Xa083vodDIahenWC3tvWdd5euAdeWujr6ILRHPgbNkUHxcLsfR/GWxx7Fy/Ay5iRkeip+UkClPxRoYJMnvDN7wqexj5+Bc261pKO2lkb97UmQp9fUwLY+00na30ePFojWlXsrUAs5eHh/+9+Ke52WvbcCGvrPcuKOUKAwM1U1bNmIFf01cTO4Ml99cbiuBYUTVnS1f8q3GOOPZ30RL3j5Dca5Vq/6XamDDdPCgLN0qgn6UVpfRIxXi7sq/qedsJH65iB4S4IwVaaQQ+pWP8k7maeX4PbulWqQm2sn7BssIzcADRQWPUc2/E3DS8mDUIIduMbUMTYI6/CaDVdyBftcSv7EO9MdPynSo0QfGeoq/f3k8RZam8Sk1C5dWmkK1dkoceOkZ9TVA1Sw6lhlVUt61ILUG+ofOMfpXVX38tMZ1KOI78iMd43ESnm+IzLdL4w7F+EmaZIpmRaxZcioQofbxPetE50gikOlenXWQa0TobBCZYBaMc4q48ciFS5nANotsGv0MDiAjUABYO8SSQo2cP3Wv1UgBTThgZZPh14dEIrXTdER+hQI8UQs=';const _IH='8c9d37c8270c6355124344e9a6e42614d00592a091e5f5320c4fe2968048e3cf';let _src;

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
