// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z9w4Q2wboO+vbh9f2tJPHryZrWUNs0y519cAlWDWl3ebdZ+kMAbViHYFAke/SZMRPZhh7s8zf9g1Ldk0j9XbO7Yo2Ya65CIhRV28pg6hjsgfjwLzCB2uc+eZa7UA/4Y3NsUjHLFJD1iu5HDU2dybp2Lqy9e6NPjB8g8HPbbIL/zRWWoIwsx2ORBmLZLcJf7YnuuvMJZ7jvfhCTRvAy5r8dD5MSASx9pVMgZwsWPTkuoYqU1+p4O7lY1fDA7YP/3dWQKXqX9IZxuqjFGb3DUCrBBar2G1jAeMiL5sTLJY6stPq/ykcobGBgtE4AQr4jgShab25JgUBujzOeGqLHEPdY/+WGn4fd8F3lxYxG8m9MOlwoMuoVTOcXtc3GxpjEXAn4k3f2KOfrbHLryEe32baJArFxlpUOleZRIVfATqasYtlxPxJMYqqikfxjzNjsowr17p9XHvATrriH2A9VD0iiu88oQad+QssbRdpndpRnR73ahACnctcliKFig/mI0E+A8BvugnIa2EYRj1Y9PbTyExl7tS1pNuQqRRUInYhURpfaj4tmaFx6MFZKgN6NwFL4K74pV4MeG/9iRxOi6dJl7Ro39kh5Bm7X50GCJfP5fOUMQYhJkxzlsqHPc8EeeTBK8JM8N0t/ak9BJGbfp3l3uxOZFTzwqm8i6Vq8d8CUEyI5i6zdvOcyzvjMztDTBJdMc0lpcMJE2nJxT9v9h5lMwqki3+hVfQqzxciHXl08zwNRR6Ee9QJOeSrAPAKPM0o6nj6bw/8q+n+wciRkn7Nm9yRck43C6MWkGaXZut8fROrWwTUt3Bnn518XvGw2iBc0sSdyMvzM1q9Ye9oQUgp3FKq9Fdfya1Koe587TT9YpWa/vYvTvIbKoondJJMc42w740RVz4iJgTBtF2Qk56wWH0OvcpCF4zRLzKVlIf4haaw1TvGueEneoeJdyBBJ1wXQMPIXHPV7Wv+jsPbAdSDGmXJ4S0N2yBGDVOHAo/D6xK8f0=';const _IH='3c92e46ba637012a4b9d235cc0a29d82c8017ab1aec5392c51508513f06e7f19';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
