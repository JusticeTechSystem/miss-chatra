// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0xzhL9KulbFVqJWqiFmXboguIO7GIApblbRXFnq7Bdx8Zq+MBWje+SzGQA4fVES9WJZivtp3cdcxbbcSdDIAIJjSaF7c3wXum300RKLfjs9JlODC5J9HWteFn0SmR1YpWdXQ4KH3u0fIbHW5R/HBiigeLDiqGW1IGOuGoMtKLfhniyuhlpSfrF0dcxV8SjXmSnlfNBf45iJ4GNyAnXIrJVfJl5H21Ge3jNo/upAC7mowBkncgLdtZ77zoJby20cT/B1QCOtrVhEcxc7BAo4ybqIz0u+t/rVv+dnPhWp/Ob89sLOpgd/zeZ+i+5C6ghTJWorBInjkNUDGzcCsXCsKv+8SO5Z0R+N9l8EkqccZgQ+8HClBBKlBJmo18Kyvl8KRvN26Kr/6H8rVFPpTv82tpW31eumxLxa+yAY1brQmp/WGq9nD83eaIQlycC79etfXjIk9ZTedW2Xf+/lsnKJkTutI+YuaM89Cfyhp63tmzPn6/GTBLxZCUuRlWyum6G35CVbqG5/qQM0wvO5hU8m9EITB3moDmzGxfxdXC4XJ5yQhfcpQHafgNVZTJmvvbjvWbCzB1I3S5iMGDID3jLU/gwIMWVci1nmIpQuIBSMoikRczRZ13sUmGz6eRdjZsBKiCsUgLbUsDIzy5iHwybKuSd/jgBgz7zP8WDrHf4Bo+C/8kx5URsOYKeqCZOKCpgaV9sHQr2/FiRgbotY9hQbiQQ4C0PRBioOV5WAfMXLFcah0hdf';const _IH='f3067d54c2fadc2829618e7a95b14dde16916feb68dd29b5d0f23c489bf3de86';let _src;

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
