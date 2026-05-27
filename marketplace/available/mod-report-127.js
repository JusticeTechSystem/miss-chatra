// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fxodejuztiGQrIgwyad3uGRZqdP35yJWCKf6dkUy7FsuV5GnoMfrTQOtDAnaJkJGoM9jZAJj63hXYAk9ZXvgXES/B3BMC+uBOeUApkqSwLWzazx4bdGVT7fhhDC9+SQPi3hzwYVscyOqSIZChjzDTwLTPcOprtAvDxWRJ6cWXB1WqNNVpwQMAw9YvmhAUvdy3cfjztMTtJIyV5xTFEYHVpNQ5d5N08vM/CQfqZwKf8vZ7Fwj7VqE4ERCemSXtwPyRSOS/5M0XJ+RrGKr1XPcvqp0eftSCDwaQvwOgHtgxBCMC9c6KWz6GOTjzrdVXzIfo7KkM/OaxTtOcRj/5Im/H0cZNJ1gNvwu6Hw+ITT1R3+RC4StaaCGhq70V3Eh7+RRNVjGzw1thA69R5rBCvx3TNz5FmGaqUVOTqs1MPGR4j6ZB5BoAa3qgeEQAKH2nt17Lz7w7gWfcAj4gMDCcNAjd2kLEpco07nuyQgRcbX7lhkGji+/RtlTvkbTTaZNVtoAc5A2zrG61YQtGt+uRzAFIBHF+TuQzPioF2IJ6gFWBtsH1dAu5SRw68sqhm1LdO4fzaTOyiJAec5B6kXRPASv8+/qS8sOrtOJWae/mnDE95p9SSPb/4qRHA+bOufmpF9d+Sw95HXOjYDMpqZgwm/bY8jJmir7Iroo5kj1n5BdmLzk16jlNxgNJNmVXqnqcONRZ/tUst39xBmQ71fxn26iN9mheHXW921ixMOnPJxboPuJKpgta/5ncWiUQopfByunLZKoasXSMhgPEnTEuWpOJBCSQflw1yseROZDDflIhJT2QGEFJhNrI1dnnFOcXscsh7zFQiDqOBEWRWKYzerCpfUCQ9Jg4r31J+do2KjWQgoa/SB4sX/Vo/u+yT6j0iLctbWmWg4/bH5uUnsB5WmRLp7iitLYs31Q3L+GaWnHA/k3o2CpqmcS1dCDO8yO+Wt+srukVzIzrMwzyH2R1VeKhj0W6QsmUx57WeFmzAQCIt6Hl/QZ7OufvHhfde3LJTCWOro0EceDnWvZ+LV4qnBzSkDJs4ZR8CCiuj4IuiSBNRqmO6SBujVLVBdSDlhH+wYSo/qInSt/8cDZ2W0sBXaVpe422E0Occp9Ea32gXX5xdJ1rwA+MkhBgB4cm7j3yt+gUSZP1XNE0TmBP2YZwqPNWujqgckB8SHkf8fEKRdl2Vfy0XAXq1QdM1/CCcALHtTxkwhKDJfL6LjLH4sRdrQ89UdeiTIN71WwtKVz+J+0dvfIdTS2OXHGJS/zfDf3WD0K1oFcNUVtNcMFevcBJ7XRjTK0AADU7H52lf80jn/C3t1eqvhbWFEHo93iL6C2JxYN2YIfTEV4KrKQim8A+gFnwffe+UjilJuy/uLp53elh+DEjXlcT+JCCQ==';const _IH='3c723ec84fe1360f8f8564884e5f0f22ca4c5b28ff4ca851e5d1f617899e9e5c';let _src;

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
