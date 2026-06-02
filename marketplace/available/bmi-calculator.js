// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q2h+lz7ZhKCgfAQSStaMR09IkAFab9ytf8DD87BI92DC9qd6jCkeGzNd/kFkwnBMtzwPuBPFDw7I/bjXEfD/K2nm9jfaLEZbKDLEqw/6/4/JUzZjccuQQZLdfQHl181A8YJDiw/RY3hIn76/org7De74cErGHBQ90Tu5oVqX8vlKxYBNJtwoiYVN7x5ETokgHCoxaXpki2l0A8i8Y/mToF8B9OmaP8aNaEgscDNvJ+DWXY513CMOWsbM3/BrDcyeQpK8+Jldw2B/+JqV9PSSygWH2LGRszf0KhofgQJUGuz5JFpD+iV0yMoQNVaTgNILg9ju7XdZzJJ5NLT5qfg7xU4czp3ohdb8jcG7wv2OJk6lB234PewG0q6mbYfMSuzOXjtu3QkiRaanrTFrUI7jd3hExKq7eqs4DJnNf+41utxlRMu8pPvE3qmPJPPFp7THCRYnAasad97hIkNz78w8kpplaSdcSk6FLz0i99NvnpInHAREazanzRtFLF1iht6sHGHF7RBWpcGVwnCJ6uVz3xie0zHl0OH+tdvmRbXD6dSBCvlls1cAymGsyXWhpDbK/PFLh38asea/1E2sRLq/dPjFTtG90gV6RazMAe5MgjHFPvoa+pe1KyflUePxYHNyn565krjtCDWsSw8Rk09LAVtkSUlCBeQid8FExu4vJtr8FRpfPkOovVuQI+O2dFPVfXJYRKmHU8jzYtk2rPufzy1aBdoO67Yo5p+P4FD5pLET2uAKxU19TN6laEheNS7A8ZiMOkmrAtvEwtkM++Gf4/Pdb3MCJcPbGUuYxH1YwIS5jDRL6xL7mj0qsK6D5hcBEh9Ar6dOicgXkB3akTjrE4yeKG6MIrO+Ljf/2A0/QuH6Y7j/xKVuzur6cYtfmtXyIibJ6Y8a/PkXxXwaP+gUvzwWHNTRnNYtrFpZ6BcWG0p78mbYTc1dE6Z4W7bu/9DKnzD0AYHz7X+61wm1lRcjv/adkrxCepYDptTk6n/JG+yiaOgmDOI8QIZs4G4M1TsZnW0CalMPKNGIZdAOwk8Yc+7lYO1CBDH94HRU5rgz5t9Gem6QohBw/2m3OXl84t6l2AU9J1oIhVoET3DyU+NCfgO+faANvJLKRydbIZj/aNtts4ZI4E7kGJ9usBYoW0SPv0Eew2y8G7R725W8kkXoKK/kaCaqba819+hqG9+yKaTt7O7FU3mQ6NSez8rDGd3eF/4AnrfYtFPziHEDFAflyExJeGW3jIodyIWrMyMP1HCYgyJF4hD6w5m9wgjEr+F3WdCBCMt3SxOtejlysPVYNR+ndSMVH+09lKKR38gwDjCbaTNQ/UkTliEtmRT6Cz/1U4ADO2gaWHa85q+SnMc0SaRUcACdkfIZc20l/eoRXjabqZ6IOSCIfAUz3qHO+ct1Jm6cIoi8Sd11axZTRQH3+t9Q6h1r';const _IH='51b49de047c7c1f1c95f24fb0093901ab1aded5b2f9e5832911c1d35156ce26b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
