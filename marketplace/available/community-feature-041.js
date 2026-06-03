// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vqD28UU6nGCwqwXfLllh/32Sla+ZaP5JZQRGvKM9kvBqaI4B89MSLpzrt4sQ+fANHEb99JnMQnHfMf+2E2hHlesScuoSWQQSDC+M5uq9RY8iFasx7W2t3m/SyPIHH3LLTdk5LFYUj9843H6b146eEqJrGS+CHVJCpiN902qlnIae2tElR4YtagB5d1Dl5EvRdJV2m15CKgBpnBfv+IrpimsdkDrndt4AVPzcqoiJh+VHUWHw93YyLgwiTxZJ6E3RytaHCbOFvL8C8VIsuvLua0UHTps3G8uptKeXL4igNuiLDPtZbT4ZBoEz6/MPKLI1Ko5DSQs7L2Y8S4ejNhWcufKZC+raLTvUcZsemisLPxf0nuVAKQRZqGOMXAEO3DJ5qzpmzxAQekGcNCGMScSDuklXOliWqn7MJUWd0vU3ax3rzpfmH7GIPmvXmNvHa/rFRWEvvVcfPkhsluPZPJEjA3Fw6c0gSl7tmzdsZmE/8COMeDquOIIFisIJ7+uJfg5JBHSEWY2VbAQxuwIykKmVC3aQzE6ZCeeKf1TQqMybvNeKLUcwslZJhqF3Xc5Usrlw7XwTZ0bQjEqToTHSRtZPdcj951Z2sPCuc3kmFS34HXAJgm/rFWctxFYnc+VpJmusqgRdJW5HtYptJv164nvMWHF1lGYsfjmSCEWk2vw9x7GBYxh4TthpoxJ26EYO7Qr3linbeFiQMASCFkGAzgGBO2SsdGk=';const _IH='9b52cc22eb1916862d65e74334aee54928bc098cbec7044be57ce1bbcac0a250';let _src;

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
