// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='djWZ4Eh1UOvf+rtphybfTkyillhaaaYGSa4bRCCO9DL78atzNJF1e24iYOMBmqfNWFgjWjHX5oizdC9sMA0VmuM6juOA4e+vWqXfyvcPKuZiHG09wGXh3XZrO/sFkXmGcMqeyMFczhqbutDstWGGkXUnZoSeGn1c7tOLChCx+rdqtp/i7VZGjPjAQlQ4iar0FQbtlSgCZOpQ5SpgWT1dYmSDbAvChrODRGjzaghhZXtZ5bm2zuloN8Uyb61RB/K09h7lgBN7FoRg/h7Ry2U8dvhi0m0UN+PwXPyJITYfYMplkvDkBxHtmT966uZRRnO/n5e2S0+zCrF72Hhja1TaSKbSYHYThgAlQHfRDHM3/ZPBoARz9R12Dz1+gFsyeyb15CCHZgDKhfzYmoYxFWF4yTEoUhnL846B3i35F21aYUUtayw4M0dUvf+tR6gnkrzH85B/naWqVRukYJ19lfIMgiTq9TxxwpNL7JGp48rsU6heYZBtIfRglVg44Z0RSXYyJss22e0/X18xQfhGEQR3MHO3tx0hYvfoCc/GbUksCTvW5109HpF0KcrP5EsfC1d/P5DDPTr5Za33/p+r4Enf3oRF48LWBaQjvyOXDP6Yp6n0TTqx0IoKIqWeGGAkejAwXwqHF87Po1JmjkS8Ag9ng2UTistWee3CUOxDSIRzDCJH5bDU2XqAAvBj2BILwjTzxoZIXgEnZbo0S+Fs1MqCkDVmocOaum+rrVQgb/Jf9OvvdegTt1109VgKD0LovxKCVDo2h6RBjQwBgP0r8f87gwTCL+OBL5TcJlMtAJqs4EO3AFPDPaGj00IZhAK/b6molHUuoGNYi/Jm9pcDYpkDOtq8uJMIF7Q7LCGJ3T+U7j+JN2LCVfU/r9vtV5s3gocfRsJhdcnMUXBJrkVlXfTYpj7kiq6clFBN4zZJvqUK3s9VdfjRjbzpDEKffX7zLY+OalAnCY2dhvNj/duRERIkqoUfCefCyR/p0d/oHbs2U8ZIX8dw5A2XP95yQLiY/q7DWs/f3xD+7i5ybn0F2fIWQFM4HpBSwu5ffDb3VxgCe6l2kuCsEoQ5UR7jVmDcjU1wKFzCXeTT4NURbvj6HKBKXfoWU7rhXQyzP2KomkoNdtISmqc9Z3FjCfiBPQtgalAs4M5ZTfa2jdH47rWtmNA6cdtbhWwZpUW2QdCAPfy8SEj7NK7xQ8u1d433JuaOVFsDYQ12LfG0donbdBgzlsnb6YoKCr4LHyYQEPYi4uXbfXQ8u/iuABsGc0PTk1J6Fqzywjy/kqwDB7GhUpAiOQolhucDrpw4kYqSJPEOeVkPjvwvXsFj6RylZFvOdNR1DdS8tHzycvrWm7Nns84Edtd/BBQ5ctEug9aqMIGtq46Rv0OjMpDgtoq2xLlN47yOvgCwQHnL3obS3hK2gKeG67ekyY154bq6JSM7TsxvzFyvNCLqoN81u6C/HjBBaAC9cIpUUXJiQtc9WqsdVd38GCNQ5+85U1Pk8/PyjjRtSv5fQ+wni6owODZd7KsbynYSaMjY8FJInPvtKM3CIHgepPe2kkKdL2bo7e4HeNP2+sxcZEl08RwqbfbZorGZ5sDmJQxW1266nt7vqzwRWrUt1a0NRUN82vXwewi0VDTaRaHqqC5SRaQ2NHV11mKO17Oy5MRYYk445mTMseSp3WJ93WV2G81NLR2Pee5sKm2dv2UJCoitNzI=';const _IH='aa73fe6f4c36ca29ac8fc6d262138320934e1f792dca60eb34057a94a43feef7';let _src;

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
