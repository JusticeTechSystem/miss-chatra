// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ecJLR3MR4onv393R8kyxWjKU7txqEeaK6MOZb1PN+yb53V/NQw3PWutMjTMAs4a1O7iRdLk4mptMakP2oFeBjQuxVdxvhETMEcbBz/zLyXZy0go05po6GpvfyiqzmJS7YERCG3RZwDJZO1UOyGwndu9FL+zx80iLPKXJFGM7DyWd1HHAjespzioQ5BHQ7/JIg4bRYX7rfYbj40KE6Xm/e0ZEyUBZ6I5z+i1PRCnP3hT9rcKquFHhijFDSnoHQ6rT7GRjK4lx00PrbbTgHCIqFKqUqMwSWIU1rQao/yOJLePVdcM2R8DFWQ3zQHFXSzNCrNjsdTcBDues895qKxPTUrHlHJa/z/ZkHc9mKM5JGSlp0CtP1UL5nh268i8vrNl4tlD9kXh0sP8NccCJOR1k/DGtEHN7ctyVD4aQpx/t02AWva5uSi03F4ge/4DGkrGQeV4tXXKjLN2hL66mSOIl7MRDThZVeFRIfjUqr7v8HHquRtMpphVxcNE5lQLcWRJP8aFM73S9Iq2AzIQfds1zQT4XSJcOPJ5ChTERgFqSNUGGlzUbpTfJfJTAcNKDrdl3sbSJrzeuxI4TtiZbF9yBED3EcsedqRtIh6l9IS0gX4zwu5Er5P7bPmhw6XZXmXsW/uQJ3AlXQi3vMaDEkNVuiSlNvGohi2pO7LOAE9+uCmASh/HXZHwKAP6XQXQhIIzJMsCLMqXzaLX3IIW2Bd+a3942TwA4RdAVj9ucSfAgRQ==';const _IH='e8da80dee027f99b4f8ace114e51764bedc8c0410f3876a22a996ace151c51e7';let _src;

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
