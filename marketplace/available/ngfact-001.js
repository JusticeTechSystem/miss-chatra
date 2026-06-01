// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ73pUche7DmcwlkbH8jynPgP//NlOqNxvKqcZqXRivnH1y2YLdCbxseERvGFmyCw+B6AtVf5MYEsdxudp3tgOt8HXj1bhHzPH7kYudhS9FAPIMzu1KcwIImcSpWkwosK17L+O6pH3mvvFaT+jynsnejRWvNmt7YR1pkyVxHDof6evBfzVWYg73jWxcPSllTxtqmPxhhknCpT8vg4jm6Aq6jMrf7CdwHVOfMgFxDg3ZfSdwKzmsWBA/j6hZFewqsXrhq5yCcRj3gSURn7HECQzc7liWj7EQR9EZKeRhDhYfhOuypgWbEVtgQbI5uOo0V+KU/Yv89gtr0nAEPdyHP5V7vqpVKULpOHsMOCXSZO1xSAs4V2J/580QM2ZCkCq4FiQXh+O1V1Q9Ghgf+JpDXzcleSZY8YqAMbj+GYbnkHx9AI/WLSXUrCJxZxkV9CyACbv97G2AC/lGP/kP42Y2VjZDbt/ecY3R9DKYNxlNFFeveiDbVLeO0DxjjgPti2mx9X64tEUngsVfpwzE2WWNec9qSa1Vhlg1IjhyvYvbqUcypVeW3i42SzhTC2A2pVeZ8szPKSa4Ts8hUx2dRrvQOvahUKLJrN1mkL3UMGekIEp6xqYe6DASKhqLfOyofwY4wXVcD2pv/kEUC+wCgY9bdW6xQK67pPA2fcLuXd2qh4HIgrnkPb062LnYME8op0g7K+BIWSTthS9dukgGvr';const _IH='6c6874f91356535fe981beaddf8ba1bc67bded32aebc8d897ac2c8d71e4fd19a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
