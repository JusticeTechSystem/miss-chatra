// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dGZl8o/+i6GjJ8Le3J7hJwQHn2dj0jCN2+4EbbqG5rhEGFwkH9Bf3Rq4qhKatTdrsePmwbXA31Y1+NuFsbgiky36W41+z9A5FtgLWB89y8nIRSGPfGKJiRrw7O2iXq8SkyqP3bKH7VmgvNe73sROGHma3PA1+txhoWz6jnqK7OlCMIV7gY5fjHSwBWU5R0CGjkrqy84jmIGrzXnH/R/i1pouv8vGCBhFtzURHsS7P5zS9s4zvSQ05k+8foKyFAVV9pmBW60n6o7xoYC30J0IvrAmh52Cd60f8sQdc8+7lPY5IC+3HRKXetcny5pAuvehtfdQpVfg07vxlxHGXpLQFH560HASiQ08Tj93uL16D/nhEgDlMxEDWjHfSlnopqg2k0ixa2a6P1OSbt/pc875Mp8iCO9IF7xO8QSpmm33l6VldVIy2BKFXaSCnLAAxZ19e9rqPeNDUsrBOlXqZDHZ2OBBecZjm6jDNIJk80Y6iEzF52S6Kwn0bCjfmCVYLgSTteJQNPAOxd9R5wYlAVCTRxO8uvuf+FZF3OtZLvB6ByfcjXCIJTIdqDzdferAwcQwti7n/80PItcGQwGz7aawpo6NAcdhJPUUGV9Z2whJe2n/PcnfOlY+lWtlPMgc5X7ipMJ1ZyANTjocuJArEQ4y88eMUxYKq/hakDI1LKXepdwvgxUZNruaigScW/W18fuL5zpe0yq2/9/xijbfYWOvtxlhPUhJL4tnSdMD+clqckFV0PcblCyMb5aTYn9Ojez3KS9z1O8sQUNBW4UDfiiYngGkM0R/NpDNidzPAL3UMmZASa46spGa3yELJdPIw+fgBDHlO+50tnNjw3zbVfq560X83R05hYkQd6gmSqQpiGzFiWR1aNa+TA2MKkpw21MKeo6jV0NraIPvO6M9mEe7oEehWGjJcqoY2kz34uo9hX+gddvh9idGKuMSzpOUqFO01zAzN4vZK4zOFrqLop5l8G3ksDotPSRyUXbhkvVAdmODtWB759AvXY/6VbbmZJvUYml0P4HkDEh/s3tLWUDm+wxAdm882HCCjZwr4mSXRZA4PbJykCjshNNOXE9q3yK1pNk2+8aEOI3S81zp11e2LXeAooNCGc/OVYYgiSLDA6XT515QdChrmP2rPNb0VrlKgrpcG0uKcb1+FHB6C3uOMYwBv01GYIBGzieXEr4XN+JpnMMyoWrGkt3s2lPvPDii3KeZUQf0+oOf7QS19e+AEj9hBvvpoiWhoy8UWmnSv4kjtc8OiN86uyx4jASshecohUk65qnVDStc+/6QePsnMU9RN2nYuUIvaPnCy+nAEYzu1YrIl0INTUP2v8xou4q6xp739B2/GdpNXm7aF82K6sFf9FCu8Z74dUnFrK4qsm/mOpzTqq85NwrpKkB66AicCR8=';const _IH='66ccaf8e9c37185db8414912722490fd8f8a2e3a2c85f28817a129bff1035b07';let _src;

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
