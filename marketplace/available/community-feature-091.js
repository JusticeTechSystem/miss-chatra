// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/5UDw8GlXSOr5x53aTvuH8oIdvPQdT4j18hj73CBGmXrvSG3eLjq56L//nzaXYLyOBZZ9EwSx9NMPpcw5fc1LYYRCvovpHlItv2h4sgekxeq2ix/7ncAwoniCQWyNa5DRX3hJk0FxOXncwMDL2vUPF9VPBeRx9yawtKWqersIiLgdIqzqu+klsJf85rD9Ajqddsqa4jx03xJRTPSYP8BATEcK70N2d84I0c2bywu1/JkcoKLrdFjUrmP2tLkauiqgkTs6j/CUjtP0b9gE4Uty3AfdPKvlOUN49wTnnDlG5rgRZZNG73x7JVKKNHv9gijFS1klVSWIDMPz+K6NC5/HX7kjA8VfnEuctw3Krscw1dllmrGqDTMOvV6GalaMmGZDRVJJ8lONhb1Y7Hg+npKCJfkPPrYDO2pqGQOy7d9lTnfz3bzQq8OUdw5Ys8hLgg4Uy7R102PZh7vkgm6zZdrzmiKSPfCcsJuTUvBtbuhxwEpv0ekxw1wmY+Yb+33Ye71LNskcX/zqkN9Q9ohAQZ9iohG/+jsSfBg741A66i237WHvZ4cOZd1NlVZIR3mrylaXPR0c2LLi+Rijp49EC6kFwMQvQHmhggT5svox61naWfZQW0ezRyIc6BwCI745mvVLXR5hIa7tJDW9ui+uaw+qy1jJVY222G+34z2+4AuOpZmrKgIkBrTdvhrMxO4DikA4VrZwBZjfP+JkoP7Xw0OfLNcsE=';const _IH='c4b6393907f07653d2bd2e9cad9c0c6ae069ee53dd75f90e632a5a4c27d0b5b9';let _src;

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
