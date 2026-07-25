// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7zCW1ogG26n0BPoBvla7BTKleNRfxUE4bWhW96dbm/5NDUvoccFZEqavH89zdBD4zyLUBWdzgUwMoUXcFfZBwnYcwVgx8D2hVq0XcEWMf6gr+z0nJXAMEwj140hfpyQhgiRjOl6LGS2Y9kcfy70ZGSVbdoKv2lV6EvPzpalAdx8DSkKZ0YGN4A6vvPbvyUBllDrI3jmiu28CNTiXIQqCEWYh46CgnVTQHFlDy9BrP3YVZxwr/fpZU+AiJkEll1cGy0ZXRY0/APzGK/q1Qe4n5T+dba3dqeyrDXPF1BIhwsfxp+bkAueEO0Qot8nDzkuSIoOzafOfFpSnsmQYneF4AMpRM5crypdwGYboCf0kN6s2CzZa8Pic43Hih2J1PzTUhSuQJbGSxIKuQJSS9leAe4tKYu3mrn00L111VVMHF+aW2pvKg1PgT5jkrzazum41DZSWTA52plmEwHJP30Wlk67ofj2Cmrr0sxWEQS6gqUwd28v6ScDTHyeRVvmm5f3gRkhEZytf4BPLfui99CDgS9a0cdTSVrC6rWNANmG1isiCg/0yVSTpVuy1qeB5cK1/ATIjWp5PmwJsXkeMSDp5hnIQvcr274szpqYEVTBKk7u0zd0kJYVE=';const _IH='1cca3420c4a4ddea48051b7d7b7ab9269a841c545d33e85aec8c37a80e781a5f';let _src;

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
