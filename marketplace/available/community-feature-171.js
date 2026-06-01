// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8X4XytFTppze6ws4d9HEPZttIKJVEBJO7JLMwcg22sV1Ik/p9YwzdQYeyfX1WjXww4q1Aolby4ViMJSIc8eHNB606WVqpy/wBxLQYnEIebTA3o0iu+bmzr89+38Zi41WDrtqPTH7AiGDsqV4x7IShrG3zseHohP7NVfyTMj8tzvXId3H0kAzv/WyPY08onE210aayfNbnPGL761vfU0nNcB2yildGtS97aM35mAQS0y5yalRBveb/iOqw7WuZLFNqaDFSOzpAbEQwzuwIel/TZ8koaWLhItk7BeDiUPKcGsHU8WsaP3AnE7Ta75pyjyySHB8IMcZ9bKm/0edgbmIB1KO5ZedGFJbxKqar4sWTHXgF8Bq3+5hIOd8mDojBWBVPLd6tqu/N2VXXyM+gTnwQ6F20s8GqBdJd4VHNAlE/zHrI+fjlMH77Xw6LnYGcrwBywvcRy4vmmMI3yQ8FG3SMWgAedsp7ehXFs34aWwjULiwGf1WQkDz/SP7EKQpkfMXl40T0EDYZMgh2DiE+ARiZiqrSpPjXO/hQfpf9jXoM52Xusa8qP7+bIImszdVNbsDT0jqfyg1DhIomUa4B/ygCcvfRumUrK53sIBV225UrpokSIDTE2g37XdZNVSMSo9xyMRp6EvdS4sfQv3W39iKm+4m0EY8nAtwtcs5RAklYN96mQXTjbt2DlT014LcvDkRiFQssI2UpogHEjzUgVLQ7yy/WpJewf+OA==';const _IH='b8b2e95c793d4b316ad6f30a14ec6fa3251f0498c80b48997580ba2cf7e9a29f';let _src;

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
