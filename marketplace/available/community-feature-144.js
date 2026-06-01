// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9AoXTO2gF4FvOkSV/ttzOhIsdLQ2+YkaRnj6/bOia4kk8rWzxZ7MRqo9RQvfSmlrIFjUEWXXDD+BurxIpj4bUotHt4MdMD5PwqYK/Vl/FDAaqsMjU5RPOAxpSoQ6ZdN0KDJDxyLnJ5y0Z8RrJF9T5CplNBUFYG2OiLiJw+VDlM3GejEpmJD6I+kdtbtfIwdauU49xwn0Op1mDfhZNjRwcol3YW0IAS1p2Bt1wkv4P/5gblhlGIBtPsKkhnA7lUgTyZNvN8Z1u3fjJL0fPUUHII6rJNEUODETEEdNvF5W2fJoze4+UphFrXP4CPu95leVRjT78L89+7er7V2lWGumNWmS/hRgz9rph9OxLn+UgtBtTMvakF5e1clDZjBr7GTzHdOqClEoOe0GKyiszgjTcG4lYKZwKkxHxNeOjpMLpqEVbdUcjP8oMjpCaNCuDMda+D985oxD+OGo4vOpwu371GuMza1/raK0nUV41mRlgcdEWFipxq5VRuvp/7cbsLVxPHbDfTqh4zKV420yBw6/xUoLPNrL+oyOZnOwVjYos7F9DjWcqCPlHVtCfEYv0XUWUjx52xa91OG98IU5X318Cw2kGyYXQKSc5LENyUSFE62Uih9nVj7cqKB2nOs+JUEY5oqUUX0HU2K5hCBA5ITPlD1b7o/dwtfj8c+0AkhiB6VEzIzW2PsyHz6+/1qdcotEiBjSQwmvyWx7iCgmxfrPqni5JoogLKU7pV2YXKrhh+OTe2TqlcG';const _IH='41e0bf24d6b9412faab9ce871b4b85869f92597db34589c50bba9f0b9f551d9b';let _src;

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
