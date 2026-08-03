// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmSjv6ubupgQMdyy0hdOMM/FG7PvMr5JpEbYSorj2G6/7NnLqolbEKv/MdmrZ9lx6o8P+/3QZliSYHEHKRw+T977wEBC0GQM2Q7GUA39WAQue94EKDDI6itnSIPL1pphsIwHhZ6h0wUyuD4tECeXfM623EjXAa7X3Sw6d8OtfQL+3TmGRmViViHDcD4Vu5PKpdb3yfs1UckX3n/gS+58/9NZmXFgviXOSXN2qyv4mVR02BgTvYIYlGGHXvGJ9IpN01YWHYL579Q3EGZxFBdsAL6XHeaeMs+s+clOM4XrQeEL3SJT2FC1VZhSvQTVaI1MUkfKP+b9XYQ4LkNbIEiolxQtOoK42tNG6zcXY5G4fYA5gbkfMjBJVLBfJAv9Csc+aNL0k59wyqTgXrqW6Zx2oklfCJmmE+DILS9pws1JkZOynvrd+kyvlCwCzzLXWbPf3qRBk8ruOsJgqmYK4tl+uUq4pisdGnb4nBqzmthn2C64/osTMlv+sIjG/JOD7j/0t0YIffbv6XAWnr4ozGO0b+yBWtRVBlAx7kAHtIWbHLOf0VRht6fENrHHRRIcEdAiSVhqF4pp2ifjYdwrrxKrjQvztyde1rZtktdICaSsmoHMcI7NLnYd3YSQ+myV6qUoJ4jO568Bv3ICbMydAEFOmUlXJ2e5fPAPzExxzqVygVU3ULqAx7n0nY6M1lbuAOxSzJrFIOLK56ysBhZRlhEzCMLOV5Cw==';const _IH='8fac75c26ccb3e50cab04bb50f2ab21aff7b6ba10762af96b1fdbc8e9ef2604c';let _src;

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
