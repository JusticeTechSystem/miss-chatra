// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s8+IUgf90PL8WsTBW0H72in0QJ4rZgM3X+Z/A44Z6PtsI191Zs0XxEMwta+NJWb3ZrmGg82k1lsj+L+prJOUo0K2o2iHjrRJJTkC2gw/BLHNbe4fCt6fDZVIoNszIrubCKKrpZ2tcQay4j8wUwIeBRKMgz62s8HzE+XWVf9znPo5E9JXAERpct0CRf+BxPyPMQRtJjrt8J7ymBfsXixrU0rI/zD33SJXG8PoYME2cVO3KWguqlgbcyVzURB81Z258ROYwysmPFrOt459NEHZQ6USxZd7uzgRMADFw3C+CwbNPZbtWbEc5Gh8HQonO/T2/KnwXheihp3lXkHkK/Q0A2nQYQ34krn1A9PTwpNtqV+4IvIEp6JxjdxCvcWU7LkE5LNnE7nOakNpWlVtEdaRXMSRf3p+trEMqAktZh5sURhOoI8XrUCsu0fJ+RDj0WNFMxtBlNI3afI7ZdXZBF3z51tAdFMMM/YNSNw37pyK6iYzpt8HJwULpgXjUBvKI/qqMahTMXVLEVuhNBg1iEFg4nnE9A6cY1jnrpB8fSGXcRzTKkx4vcG7+YLSY6gyqh8XopY3tCV4RB6bRvXgcnjC1I4/HuHa7uTwaW1bGrc2l5EEcvwGZNHBsaEFPfIl3ZHDi6fPv2Ot2pwHj6HUYcHfm39TjXlulyrGnE1yoOMDLoL6JgUeZKLJeudt7SgKx0wTnLCJ0zCwCnjxIdIbKEDpoomSYkiwlmuH+A==';const _IH='1d3700838d6487600daa41b8a99eb9ea425d35118b06bdfe48e719be452befba';let _src;

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
