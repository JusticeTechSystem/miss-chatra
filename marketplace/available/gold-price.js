// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JB/X6oHpnDXFIV+iq71XJgoN/jMchUseVb6FXOxu9PEWy9NYacrdytYmX50FtaKRyzXbuvaDtxpKqSFgYFe6gOau6jdXVHxNaB99J0dI1OK/WwXNDv59+AeJFYdPfYELYZh6UHNd7TOkP/qqukOUMP2ilFFXWQJ+OGtDwqxdz9t/7s0nxp4IdCUNL6lpepug0UydRxjMxocDTVoduGe4ArX2LfPC2TFLiTu2gdoW3EGgW89ODiy025oeS0rUcUfkVJYEKM/Cac00GxAM4lnBoIXL0qxA67bDTJLAhAvVfTp2hPWwZbNjHKGSEwTeCjQ2r8N9jfGVAbWayB1JzprG6OuURFBse8lDC+cdXqzP7BsTRpbMh09bwHbdiWvSDUOJGTl5INzclWkG7gBce3vJbFKsSDuvK8xv59fzFdpqq566ZwhsM4uqFE94Bn+4ddidS/TD3yVjR1a4kG5TGQfScNT7Tqg6oEKn/wPzOBJdHvmwaA+wD2MZhMcOgKBbuRDRprHP3KesIHIhtwSM8GKDkkK5VkUvqKediMQcS6Qrlq/Ia9Q6KhhrjBft4xdgFlqAlaQ=';const _IH='5f04511744effe1f4e56e7b45756eea390d3c2015540b10042117ca5b342efe0';let _src;

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
