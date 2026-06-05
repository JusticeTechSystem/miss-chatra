// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJHu0HH4dexD2OHYnBMlWDiojKJ4qECX1B4ID+DhDvTsuKbKs1LY/FUPMP2XbcjEhGrdQIW95cROAXn3At4EzEuOtL1swHb+KZhDMQmu1CwDwu/a3rSW8vWVfo3eR5uBG30pnCj9raiUH1+xFeY9Wm1VinQxc1GieRhsP3V9pBBXQm8fUjTvlPa6u9UsLFcYhJ6Nj963QJ7I67gkpcv2DFXUxNd7HTCGMunN9ImayzT7XGBH+dp9UYFmWwIQ0hZMavo5J6oTF3MSjWHZGXWwMnhKkpW0iaeZ5tdODb4k7ruX/lml3Y0Ny2amWiXuiJu4QMrWeLYVxOLexBWhphha+glwWFV+KdmEpCchZsBJhx59KQGtKfZk4avkQ2TyTTNSmPU2hbyOkMGGCHcMtcQ1QN0sJWDuD1XNK7EdP2IRe/Bqj7F+gexLmIPA27Cv9sqf35WyVdEgrxfOEF2tD0uSvszATkNTB9Gz6w6sz92NsSDjjuSgV2TQ2LKY+kiThCCSMNXevxwkgFEaCq6KfhgpaAhyY3J70iU8X51B1nTl8hx3du/PMIZvnPkhPupQT/4wINBcXkKGARbearBU4HAN4WO8kSXdxbUguZFG/hPxEtqh4N19bgHBl4Dyah9ArPZz4jt28v2VWbCjRtsY+z0EgUcnqnfgt5QO03NeJdqNo0VzN3e5YhZLoU0XUrQc+FSPVu8Pq+OfJcUFgut23BGDAkZLHTRDebWJGOLYJB1Ip01XQHPBZO3aJ0EtXwCon1P0vJaXprOqIjmdAKsyNUTe2wI2t4dWJtKdXv2K4846N3T4lEawVayg/xIzBHJd7FLxQ9u9FYWRSyBsoNwMxUifhZSeZOU5fVJ9oDqmy/v7ZxSXcP3c5+ds/sqT5gf/X4JjKGeKbri/tZiemSFAiouS3uQfrrUW4ZvPZX5FlhhLh8qNZ6RnwsfFghR8rn0PGFIYwZbugrCGzeQnZlPy17cYiAUQPzTFGxiEvmieo36jEA7yOtZppjoJ+2jdOEscqwY2U/yOSQGDL1TG1MwRQX+xmm+oljALunUWqTJju1FpfOvwgbUIwI51Iavpms8FmX5RV5SZDdVuzLf+pDW8nTFSrbebc4k1FecLpupIQLSc4IHQPHUMwuGrZnTe4/Lob/NLLQA0UmuMXob3SxPpqEOI8zlS6QdNnKJJFQROWX6J0Rwe2dBkEhlsYK9gCjAmICFNcKmPTFkwsL6UUwZNGMlpEpZtJt7La6Ce+e8J2KCK0Fzo61r9ETfn77SctyvdZZ9D5xt5AH5GII3YVTSyIRLn1n+l7hNGlTjBY7FceKuEnkybJpQE0snc93R08mkJDwtSzEoU9UcTTrb01O4z4DOWJo7u7Y2Gc8+PzQp9VHzSEkJ2+ASDe2BFZw==';const _IH='f0e1c75f230743e65ae594944b0db6d845fab2d7b595396beb064dcb152a6c07';let _src;

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
