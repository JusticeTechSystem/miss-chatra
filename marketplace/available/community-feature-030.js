// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cW33O4+Hk53PX69VIqG35zgphF9JC+aV3NctUPuyejaSFdib3dbDARtd4cdzllAFR65Pmf6HwQ3QnFfIBE+3OU/u184CMk6rhgKANq+mEdtrO0qlLgLZomv/JOBQuUAk5FNwFcvuiu6z2waGN3bhw2LAr4YwLNbx8Npp5ZdlE1TuDLd+T0Cf2zoM363U0xSnUZUYJox7AXRT5UZ+XdveDaLvjps+2uzkuoxZCxUbentLcbECWGyIXToi5nfmnLG0oXm1WDVn8c00Rti66Qx7Ngg/J8bZiMPTQf4KkJkZzJ1ns1JBbZX9scwfOVsTINcHaN+QxpdDkkNAEaLhhCkmEk5wBKvmRhIg4Rl0gWLHp7pMX3KLDamNusNf8Ri52ssdR7paQDftjwkRYulaGRMhSBIFIU1pO7jQA03BjdcXnDUEZNi9sysULAWX6Rm8tjRSCPsO3bPLbL5vLhTp+kp4VWMZ5X3S+1fUZHeunkDezb4HRXDryIexD5c1FfwVuaqgltzLfp4Oa/V3cEZkOSwXCqL49wqsBOt71EMXCXQYs0R199JSF/+FCIihFuQFxST4FDOIAe0z7oXbNj25HWJhgqvo82PxXA0bcMnk5aRzWZgEG8BPie/xH30SiJz77kLCfTweHSaKE/R/9FazQQ398MKSvNcJu5DoZ1FgfFSsQTr5tNN0zFe1NzkDwplucMtHGtkyRVokXyoFXoD7Wyg9lnZQYrEsGd0sOzufmoEkHIvlQaP6vmA=';const _IH='7e871ffbd0569576bad6ff1c35861b0454051cb4a07bc5f30455f68ffbff28fe';let _src;

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
