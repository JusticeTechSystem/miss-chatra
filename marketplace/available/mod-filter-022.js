// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ6yKTB1hsDNPfQHAR9VOP4FnYOwwkOuYkD7vobVuAwd/10GEvDpV+kATPX4KnocpvgGDMwY5vVm++oy3n35UUU11DGGpS8Anqv6fNPERdRth2fxMRUYCbYGTECPuICu+hiHrtafdjgKok8a69B+6Uk/0LtHdp6JC1dE26+OIoOPH/actnaho6ynPHg8CvLT1AmEBVwOYlPStJpdjgSe0DPq9gOlTqqQYKeZQegxFsCtgzB5rAhLZlC6tbmcs4FDTz7qTx7/BijE/3mkNTYn77hnyyHUMlEmo1OnQp8Wjn6MXMiYtL7W7lVhMLrLrwy43I0BfsreK6zGXXQkoBjyM0nxSU5nwBNogT8WfjxxTdjijimgiTWc+pl4aeQPoFGNJeUa6LM4oJxrCveiYQadKgqL9Hcse/3Jp6IWSWL7QbjQ9KRuVKIt/VMwNnks9AB6xMA/2Mqgt8nMhWRyWwyloazKzwfi7K1SKnGSul8KB9mUucuOcv6+0qNW9JYL3Js06fLFBuQ1EH9LNbMGCBLpfo9fcQ6ngQrtL3K/y0P/naFetkj6QQdGvi04R6gempmWbQz9RL4VgBqb7V3ElJ/GnKBbpYg30YiL0m4oqErccv/VwgmY8PgUVPi93B2NE+pdXTTN+oWYZXmuSk3eBLYSbPQSJyNH5E9wq30mlx2sDyYRStmNTPAP4ViooIr+gULNQLAshhkNcR4GbQIfaUK+Y3wEhePuwWacwpyBWIskumNpcf6jJylnQruUbAVIMUfvClSS1jEhbo1G96BjTGDOihd7NtzuIJuUiAUKQIDecqB5ezDu4CaVoaUuAoAwqeRMtwVLj8AOE8koL1/p/lrDN7RE7+nZqUu1f7tLwq0E60Pi5QEPfT+HjCV4oF+IXsXWT9ZXGMyvdCO+3b7LC3WYhAfhkEOg7Ga3aSjY29sztWa8Mg2Ff6ztTHJYskvqDTEInzZgUjr4HUbhifT5fJWD/K9WvTNtqMMBLPQxAL3j1/9ELGJeFy7SZH9bZUl3GwnLiQ1blKoJAz3jq8DJa7zpqSQvcIYygXI8P5VPxVrHM0St5H3h1909P/m9LJYGNG9SjGYAVYjT7NKnXvkxdxeJmGBBLXbTIetClbWTZTi0H6XEHWpHrUUYzEyUFwShXsIA1XzFAtj+0qLB023zwEHG8RGpFme/BpSkEQuhAcyZSBdRTZs6pG2gQVh6++o0tBTDf2P/1doIdvJ3YXX7Y7Eq+dqXfj+luQxZ6Cf9Eq8kP8pdqctZcycILx0K52zx+ceKl7C9iDYp8VRs0AHeo1lp9QlIcGthoYqvyZTtoq3meIpFHLCBSIgTRmZJFqbzztOw9pFhAHG5z7+zY2ACmIg9/O+S2T9boDLDvQWsIA+cvaBg==';const _IH='9c17b8c140f16fb7e4df7f726f1527004f009a21925514d02661dededfbb23c0';let _src;

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
