// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6MKBuA5bY5MO6vAY8DskYkwALiYostw6YYCXOWE7nBMJi4taAN4lAvAL3zxpc02rF7txbZnSUoHq61AtUOFru4Y4hSbLxa0qFuSUJD9NJDCB5tkeOP3T0NqkWwSl/cSpaa+VqKLeClbZ3D/4Zbu/Ekv82uhsKfIyNihcnSuE6QN9qJFm4xM4NATPCFSM+s/I8orzGzlHFuv+tYw3T169/4IfIrh9C1C0BcMFyLnQMMmW5nTuh2NKJXh3dGB3Yk7v6zqLLFy4PTW4vYODiVnx6WU5p5ST+NdPDySzVkqSjUoVj9oC9AKZn2B3IVAgctgWHHmjyGEQnlrBfxQEpSGro2j0wtJgc/kZXcKP7EfjG/Hug4dFvCztu3SwgPViUVoUs75XIKuBY6rMXyTb9ijIxyR3VAlgNcOmsPM/txg7Hav+nNu4dZGkA0GHG40R6UESg5c4r06FYNf8LH2TwO7wMr7Wcsm+DuF0Rci7w3buALdqlDCm3sVwvAFsG+DmC+KDvGjgAOsUDrLrtzzRn9gNn5Fpf8GpDRJkyO+TOykstIewcIr5iE/08yCSNQn6kd2zbs1gb7xDOO7IGlXzgPpk42b6xfTjLsjDh/DFWZ0teI49HQzHWeFrtxAuRhxa88hoCgp6dBFZcSpvF1wNiATQITWYIxoEG73ikTG222qe7pKW8QPpHDYSOeyfqTiRUQTS6ZixKTqtv1QvapV/7v2scF6iBrb5d3/P19begHFKUA==';const _IH='bcad9fdb5daf5a2636cf6712117593410cbcc5b77e7c8e08a1b32b1504aeddab';let _src;

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
