// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fygojK2kSB45J0CYZawkrYynE7mjx97N3XY2NyT1UrKQ53m9sglGukKHT1L9JVmKbfIE9RggZ1v1sQWKT4Bn6uRKFfvhkx2RkNxYEJpPFk4akyUjwzhi+4m0NDISfzx2TcI8oYgJ3Q+7Kn9nV4hVi0IKKN0N3+ZHRa8Ss6emPRNpr54y72J4NEqvJDE2dexVo85E6tA0vE6xIUHqyyGCtNyI+BXz9ulXuTTjRs7K9Y4Pz2mClke36F2psfIZ2JHO33+vuVlYEIMuW7pT7BSooYY4pT/TbvqRnVlFeAFTC4y3PGZiivn4+oNEn0dypIxrmvrAosphsZLI391SgvfQChM9dSSopEYAqxG4EUfI3LNwOA4Ab0ODCpXdRAk15GlFEkyCIIiY372Dh1i/DSBqQtLuTME7hzZ7P7wuGvt3/V1xs6ijySOddxwyaQMPMY6NSkx3j9OaJfK2LxosGMfydxnkZZiybJYPWsPvj5jekk9IYqr1uOtkOz6W7vxle5ueh9F3jmdf1QAWPGCfaEi87u8OyM47bveQOJ1UdlS++dH0j/E3hd7taypng14UMySeMYBngwJehBz1z+fLrJcvXw/+wlkh05cTTyEgl564NNOYgcQLoxl/hPC+kA46WJTxSM8ncmwbPTh2dneMvjt8sbPlkiZEXCoUNMuZUq9WHJCnxICwtsLPnBy7DYDAsRKNKSNWrUJDlm9kjZRI3mHzIJeqeBJMmUPJJtnOv5Nbb8oN4mgreSgFiqYPJ4wvQbMm2RBKeqxYkj/dFYGUIvFv43yEXgfOzbp6lSDrAekO/6in/r0SExiYPRcgylQrFLplEeK9/nXEFTxkqa9KFp27FEbXbITyRK8rwxUFiOK/7ZLZUbwbCR2Fy28bR25gwJyQlSts+sczyWOzQYIjW9ECwMMTLRktHE173Rj4d7K+IvxTKmwiph72P5HT4Ht1cNquADvIvuNIvMZo536N3kPlpAj88CmBNjtUQrRd';const _IH='820d5949af36b4494c916a10718235aef75b2d459ae709a7f16c6126ae455bd3';let _src;

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
