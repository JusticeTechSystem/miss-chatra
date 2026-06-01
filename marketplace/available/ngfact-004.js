// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3omB/4rp8DwaHTxVJNQTiNyHSMJYqiOg4BtfNHrfy+7n9Uo7afzpOxFrW4KTssSFLsUPqA5enAWZFDuKF8qyOdNHCUhvP5mYLha4KQ+VRRSeYC2inAVrxpl3A4hJwm6YtSlG27fcvCUn9Umz7us1eNxIgYKSBKRCdbrnx4ys9LWz7Htqr2a+J8cKS6i3rsM2yUvlX+t5amWMDbv9UVQrx0qxeiOsELf2q809hnGaoLkN6kbwuU7fMxwU3cuJXs6iCJHAXZp0KkBRz3n9cjSYBRD/gpsc0sDFzBcammfBBvUwhXgwGP5QyNG2NloZ51pNi1Q/NokCRJodxDboQLhvXU+5F60uCdN4fOeWr8TKeqCxHPv7dFkFsbiH0jHkMSEhm4su0mCoi7mXAI+rw9ohpP1kuV8Etm4rx3w8XFT5aUe6pH0V/CmtCzQ/Lza5Eeyk6fajRi1VstcgA6ISs2idOhRM/hiIElFKG9WdxQfyp+v/fKAPojZk6vFDT1+E5JZEhIW5dXPHEGIlPFzQFiOmyuizolukfHGSe+sJQD8reG1FOcstuRAiG9Rs1VEaTKH2FIQFAOqkPu3aD6BPGYjv15WdrnfBYCS1Js/sr9FjBHpsztqMHV1tRQ6nRTR0YdRVttqKbg4+kUxLUc2UF+0w19oeDhw8hXakvv4AO3jXGmfa2dcLO9tR152tXHSgDOt3p7kLjQFN+AdAJvHUkbAohSbGA70XXrlFDA=';const _IH='5eb21dd8c8c93a3968a9fc4de15d5d07fe2c203b8abec880bca15db38f3e05ef';let _src;

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
