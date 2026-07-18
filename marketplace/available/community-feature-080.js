// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkXS05uNsODpd3PN0kVH0QoNPWGVz9C/cRkBuXEeSgQYtXi/kJHzmkcbdftJr9SJwCPqxdAm0bKBfbD2gXawAzVDGgHKoEPvcX4iGd29GSc2EDOB2RpY1MxreTMl3wZfmMgxwTjgzx7EEb0VFXAMmVUBkEKhWPpLM0XhshZmyu7qS7mpu496H7d83HmKcVFlIVbDXLjEijaASW2zq3BSYVAa6Dnb4vEWJVq0NNcXH2ZUtH8cnuizqOHjPke4L87MVnkJa+oRacybfGXAesuh/3+mbH/I2YNmFx7htTtBSiOIvewkyV65gh4MS5yRmm4Vn/9pBRsJu9zEtNMknN/9TURbQHgOdnqrJGdyQGI4sF1x3v0/JVXyXFEPHhpOjgIB6Du4e9w+/WDhnVnUbPU9Gc71w2DMHtvzSjnRbaPspIqf7mhjDeLZaXiQL4JtX4lj2aHjV+oykBnTgqPe8qSCD/v49N88C7O+avkkFj7Sc9nytJQRFi5PeqyxVSSHjbPXDuqss/0mP2dGkc2BCNAY9ftrFo2RM1yDCDssDto26rclEuI+BFDDVXFYjxsF/9TmqxtHWk8KyQPT7vDRJQ9O2pU6bjTnG57YS4lDDugBrqkjyJwyfvxq0OK7O0Tm4heJOAfwQM2+c7IhyHDyPCaFHQNIm1jbu09NVEGSego2vXVD1G8jFnoZzcNyhhBZWtJl8poe3o5lPIt3M8F0UyhSJ87cX2Q2tl1WHSa7AH6jS1KugEDlrLFA==';const _IH='f4307cf29a1298083cb92c4293cfddf1f84902cd40387705eac1c438e490faa1';let _src;

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
