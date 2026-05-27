// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMoiyWo/UmmtFqVyfy8KOYNBS6LkreED7WvIuHaXLrPEct9TtQB2LLz+6MPLTOEMv1ck9IhG0x7xER2AQOTaQ+0mop1kR0+UR+v6letrZE/mBoV1lco52TFOETN5P35OGPqDaJf1m82IRT4bO8uupjsbbd6ThCGxyCLLb6Rr8cn2vHtGFunWTKx8H9jRfEumFXjB+X4UVD5CEQwxX28lKFlrk8I1p8XPJzka7y4v2tRJGgM/M1g512XbK0sdL+dDJ3lUuh2h2gpBuw5snwVOmtq4M5mtYmyPE0oxejNqBMSz4YAqxLQNsJCWHYy3OR2Flx7QFykBaQ8eKy/T04NUFNPyTL6SQkAbdidf/Q7B6nss8qYliiY9qK3r3JCBR+hajJSUoY89F1ADtz7xDQXmISf1A0p88nB3oWW+qqrmDiH4VLMLpvQ9IIPMZea9MZoMOlpsHkKMBFkEaT1o7cwexwnS/PK1f3LAJ06KTTBcHCLRa5myk97y39XoMfv81RcXP4Ro7shO/5pareF86IORP9NrdjaWI+MqOeYdauh3obcqBI0kze6GejfVDrWT3m5RFWLEKvLnMjG8bD4FnNR2kqkMyULlgrxJ/RVhg3aW03rj6lYqwTGeybqk6i652DJNid2BZF/5GvKRZhp7u/4p8a/BWe+I6uWP69shgjuql03a3zBRzRjrHWhH/I7FBqoTRjvubR9RIwkhd5voxU8aROThT+M9JQ==';const _IH='d43ba99e9a25d9706b349ea7563a60db6d303b8f54d7b4844c32ee5aa45b5f05';let _src;

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
