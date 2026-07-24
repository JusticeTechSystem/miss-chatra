// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLHQaEG4MeSNVL5uHoSok+jre6Efmd69xIj0+Szd50SIMZHMHjn0gLxX9E5TolNEnXelTAQaxre199jJOzXNY50uX8kZPgVMk8lJCGjoyCsYGto32yG03vtEl/z3kfQWsw1J/JzGJtvOd1Q/N8uV/UsCcDCc8s1tSIKTabbWCKIqup5/1Bg4VzWphZC1ApyVGvIXzEhpHb116WikZI4mV14Naln2lVNN7N9/dZeVKsvuEnkEr0dflfPnwsrh88djvfDf/tYhzYdNEdvuG3iRk8WR2p1hsZmCQEUimnXAlaGyWYEsx4uw2TZM5PpqaXNdwn8kYedK+p9eDxPIUeFTpdCp4g66s3LBKSRxUudCZXOk+f2c+uauXDX55SnkvkxOQiWXdjTUzN6y2FNEoKxwNiraIcxIPJB18ZzehQZxh63UWeG7oYN7LPZVn4tI3b8Sqyv9FAr6kfXCCUyyMunhsfpbtDNhZTwhn9uFqyDU+MQW49vRAALE4fH9oqC+ABXpUn5AxfmX6bKg4s/Z3tflH5AmzpgXcY5iS36nDJ/JAMolS6kMBtIt/UVSg7HDWZBktGSHAdCQWKoYsO0PvMzh2ZEXL+iStzES9jUOLyTMyZ2MFCn80Q4/qccJs0iFIGKq0QSJbOfW51SeSozjIwRo/f+YHYKGCSe4DoASXd5Al20eEQ4a7cmeZjQfgg2yU81QiHyckIfbFutyyI8Nvi+WUTHZEs+nYExXLBy8cXtdkBNxGytBP977fgRbWURn3WZZuCCVR9sEvL401Ak+mIh/IcqX7i+SSr65IVJkD+VI/9EaWKUmgGAb8Eo5fC9mGFtfSFcFgmJ1sP+yrzWIiTJ4eytKyn6Nb8itFSN5+wWEuT5KyEwNFbkFqDYPkC6DM2vNmgjECM8KjpE1lay6W92wkWzg2sQCOm01OadULIdmA5nvXOMzJ5EBCRNPVWdAt1ECGhXiTwR9971fZVHPNpBY0OsozDAIrwFr3a7+MbJ8W9lHXF0UaQGVypGv8zGacV96DpTfypzuiyVhZvpqOxxkX5ZIu5HTc+f1vK+G/99v1hVcRocUO+zNrYHZplzL7EjTy5EiZCaExVxtdMpynfbv2Mmpd1ViJ776XghWJ0dUHjizQ98niBGlx+M96U0JuD+uYpyv9P9l4fk3s6wmP/zaTsvpWlYKGooG+PJBuWgbKFJxcAhyHhzUi/dqiw83klqIxf/ZsG';const _IH='93391c1104dba7bcacd8404038e5d1c4b38795bf703381fa2798f0e0e9e27b51';let _src;

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
