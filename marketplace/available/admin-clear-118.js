// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzdLTUi1x8SdP/OTIaQSuw+pTw8RfgAxFYBkKjEaQ2T+PmgSAzQbPqlbOWAEBr71hCP14f+ceOSCZ5Tx28k2BfPsdeV47MEeOmjRPPqy9FGz6I8mWmDtd5iGGzaRamaEVJCdLe0/6J73isBc8yxKQYXRVnt7hiYRP8WQVlT8FCvcUwWa7TVD5T3y2qldtXiW4EamkhIhfDdMg5UxLkWXo7ejWZC4Me56nVHX+RXEYbk8U5tZ5N3dv8u2tIEBUUkWzVaWV/5P7pSaOXf9/TtWHiIp3J0tNnkPeCBr0Uha7iTkQyIz/v/fAQaOtmZcqD/WLVnnaxADR06RpCYNWKyhQYKGaN1ZN8fxo/jhf9ZYpI70g6/b0YpF+RkwoQpCVgKgnkR4YGa84p9GJDZKWTyMYid7JUm2nVFsw4B3AUlRia+z8YBTRJamnDu2tiWsMGfllwIMsXBh05KFAdXAJQPYTHoR9rPcl7+RlAOgCyUp85yzp0HR6Y5d+Il5eYNLFJRqwFeuhVLFb0G5PbSHWZTc3kQZW9WvMSF2Y0SljqCkDbc3LZbh8zj9Qi+pXrRqOWUhcl+CjTvHnFFUWgUevSRfq2TXa1WeYUcMHwGOE/J/KSq0/2e+bJeAPzBSwysQPPnW40A1kNXzT939Pz6K3u0SvmzY8138f1z3qMpJGu22UncIGIaG3CW97o7wTZJHjT2nv9Y/mtr7kgXDSd2wQMBkXKEa/+cEMLtBrsbljJiR4qyiMqzQGzjTsQk8+5aRbLPHN3czPpEva4+izgvStPz0TQs8Lf34ltZMHWyO57EjsmaI+9Twj6teXn9+nH6MFySghmkA1i7Kk3TSAOXix/v+8sZODRz1W17N/ECOCy73XzS5W+564EG2J4jYIYfTsmHYpup2BsJcLlJjQoagwNRZ7TIvXit3XZwcfzi/ZJcZFtJ+X6/OUQJWuRQqBgZ9cgm0uu4KmAHUrNt9QhhCVe/6f2Lqr5IYKWwStJjYUxGXAzaLt7oQ59/L5fyg3A==';const _IH='f7a1342f1bdfdd34943475c296e0186694e270cd23e70f92468b8b0d8ef0d495';let _src;

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
