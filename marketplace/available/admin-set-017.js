// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+LWS3oKHakjmn0iOJRXAtVoKex6zI4RqSsxK4JwpDmNzGEtZaaNlnEScGos58BVCVm1IAqTyyxefoQRvZm4IgQRiJOspuF1mT7lAU7l6yiwM0mcjB7ESV65VsvV8DJakX+48zJtgmRU+qW0ez/g9a3PNBpPnyersV3SlwJskUAwHPglp9h5pwya6hWAL14xXXxbDJWjgNvCUqf+UYn+HL+bbxkft4KPn5lQRJXlrrCpELQzgbfciYtT6IX1fwleMquYZhVgq8Et72+wvcUIEM+H7npQDmSXYKTWU5lenR/576mw3F7WFAxahCpSWWBKixbJFps9ryO8XHDuhesPtSX4oyt7uCn2r3fFlbcCEqCyoZvLL1oapq19AYofDVowWjjZDEYcC8Armk9I1HpO4jEFnMtpCjyMtXlmm/xJJaj29b5BWxWZtID+LG8Xp53Z58G8BJxIXhLLp2joybf95RDAbgjelJ4WUFjvBpovI//b3Vb80ANcDvDuvcG5kINSn4vyNOZ/LpDVb1hFkVw00TpIW2JHxcKv3V+RHkgjuopx7dX7pca3OHjeeYQtNWhQk5tN2o+2TTXAXPw4VrR8TejM4oO9K4A6ZlT2qpnR5Oi/m8dbCb66r5beoHJV5IekiadAq3K+RlktEVD4VWd3EkyH0zp98fyiCbGZwAMYbgZ0+sLyDuMQjmQaraB9axcaZkSLZ+Q6VfKqtxamgGR9+dE+KBpkcB+izqNOtJFTBgSV0miYKnVuuufuSZffRYaaoi8gL09fK1HJfMklY0xAom0jHMhKCQsnCXngQEMtQF2xI8bRmM5gzsRvBzmyryjZhoOB6PIlPQQibDbp/Y30jLuh9i0t/l9ucri1Bz6K0q4xSoq6pfq9n8MaTuIGI586LO5tkZHSARPGa6gXQRmqNTu0OFI7cMnbJeK3KCti2nRiPq5i/7m+84JEXPXxRYzd/D5GCFwTMzLN1KuIt4ccI8Q3ATylVs7ZE=';const _IH='6fde49d41d6b49e33c40510ec0ae6a2c0d13bf50673ee80fae541825242819c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
