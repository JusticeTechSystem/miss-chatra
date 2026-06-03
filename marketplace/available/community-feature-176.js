// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SzQMJdKRGVWSVGsOZJ8h/DOYlXOewBISkbYN4ziOgAE5cC4vEqxDs/bpKL1ZNKJjow8EZ9P2cmZvv7V+GdCiV3M5Lk713DDfzQpfEmc5eiz9lY87A04bhYlA+bQ9Oa193a953qI07OPV+JHcnIif5ihhFeiFFyoAgXUbsxpXoi3nPYsbhLeTD/b5yH6VyZnu233oc1cIr125faQFfdQ8fpTxBSdzJlYCzO0gfTMQ/CDl/WzK8FjvnJvtIfj5bMXg8VgXuJmuGjQ/lmWLY/1WBcHytJ2UrxQYEVIiojtwrfr/j/Rv5PIhUA4lIB7lv4WNRBPVAzOM3NStYIvmn6pM2mqa/cI0RTRwT0BbPNUw2yDUhSFdvrFFVom4o9zfY6j3JM8+d2forjXFe2KXO9ywt62jJdMJfnthEGoYs3M+P4ZyomgUcilLifj5CqiLb9kc8YJc/jbfLr5pU9Ud2tHN1nfVDYbEwQ6mvpiiTiydojJxzgQ2QuqnxTBa18t/cp6wOtlLR/bKkLavFw1wFs/GQGPo+1FMbbCJQFlnJRVvDk1I6FqeE+zYbrAAZZbYtasXFntJ5sawREN+aDfiGZCN60MxyGlJ328fhBqNLCJZi0PM84m3VoUOiP/37k06HazjPBNS+RU/OFk56GICsBR7f9Emauv8oWSEIDClpKP5br4vxCE4tMPM0j3RHHX/z1tSCxO3dUWI0bMVGCmG16zkdnuReM7khZdt';const _IH='45e127293b5175926543afd1c6350a87d03f7feab3b7302072400afc769158ee';let _src;

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
