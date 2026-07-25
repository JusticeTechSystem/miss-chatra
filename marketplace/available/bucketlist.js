// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsB1AHg+cDza/blCzgqk8QlK0xQjsGqmPHWBMftrXh50EQ8RdlwvIEkkl8Vo5mUM+MlYrmX7s6JyreYZh/9KdHDqlJ+eA1lJNjIYGJTXPRlLlwi0MWgg3Bu0lorZCMgpdbxcDD/YDUB3IuiA3YbWck4dPmkGKOf+32+kjVm4TF2MAXG3j03bVIJwI3/AfedzoZ2lORt5a2kP7BETnXUm8lEvSCixCFAYut806XTSuw3Xnksm5LyS06ogbzZpI2pQFKR51PRNyCqAIa2/Vx7mwyQPs9WNWnaPzDTa6sZ9MCKENPaLox8r1BeJ20s+KoONuP/Dx9IsQCFb+SzsHkoBxE1icLdJxvHl6S/yLhptVXYf3LwUt4e7R0vwgAhL1S1fYVTiHsLdAmhK67B8pyKh64Ax6bcDNzdShGbaiqV8kacLCkksdKtlZky/CulX6PpzxGuuDb8WG5NwmqqNPJj39/+Q/qErWqmcQ1j4Oe0VstXQ8e/80t7ry7BHFvCHzWsBpgv+eswNriyoZRmS4sUm+sAqtiiZ03V6wGFZmgPLr+AC1EM8rfforMyUiSC1NUDAim5n8SFOVPK0t4RL0BlY2Mn+ZAbHWyQG3fcVgQYx2OK1FWgTUDIJK8fwfHTHlSxtXGZ+cwhWBrYztqi7auiRyGWLi8l6i7lVQmSHSNkAiPxiyFwh/48WpgJ2/4YQnYm5qtTgqpnv0xbGOCPkoZz+1nDVmXq/3A6wLOmBQB3waZxAbykqs5JVzrlCzvx2kwd7Zpx+SA5ESaRcNj0unI2378Dy3qC20EVCzo0wtY44HCZGsBUOghrcUdw6R3sSbbdq11dTOst7EsSPMsGt4F4ERDwYlQ492Yrq+236cf3y8RfJKsaR4iH4EyhDtDbERe8QHqP9Z5K6GqKDVLHY6r9hDKUE6ZjND371cH7an9Y/0bTSbPqmI2vIt7YuF40Dikqv1NVuxVwifRSKmAK0DlAfmXTbH4yy/CCNGNTuxRHOCf6QHYt7LZpuAiSFE9bPGjA/INu863BIdo2h/EdUdyOo5lTKhL9QSzqGG8QGv20yZoVF4mtuy/A8Prat9Yk5KBohyV/jFX/5AFy/FMDtVKhcI8xNbylCco0CnQPNfH1dRnboT3wA4RicBAy4Cjbn1ADvZ7rYHUYiYEeO2FluxVgeGRW3SkE3jhZ4A4BJFkt/ngLc/huoHW2UMI3sha0KcG5PrxKzr8t19Y';const _IH='08be3c4fe90cf5b32162642826e3799e886869702f7876b94fa08b9b4d483a20';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
