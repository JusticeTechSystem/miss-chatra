// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l+1ZTC7ruBaNdsb4UhhPchxB9U3Zsicf93krBcWBKnTaiasRb/4h6sRRercXAXNyhfkjQBHRnR5k4lDsr5zWWjWIpQcotIYByzbqs8ELKvsPMew59ZfqQ4riL/brIfJo866qitC6pFHlEJ/FkpWxta8R5w399v6DP0Vlbjc5plT3PrinSbHVFdbykR+PEKfm5M10n8oRWxwOcdiy8/UsDDw1NlATY7jRACxcX55IC8CTvG+Hwl+YwPjFIK+Koq3r0Gdbs9mCbdzIuJQMdem8ycL+1GKKCOMD/TWAcnhPGDej1BvcmlZ33pocz/qkIsJpjo1d35ya5j1FLKCGG6BVHFrSsE8nFOdGRBhB20yDOtVP6vgi4S8lJA/wpLiniaDFfVU1PHHsT58PRgbimudZy6PJND+mCq3Vz0t+GsFVrPZFtcTkNw8kSaaWYwxiU6AO3mlLmz48HIq/Ne/xLs8U4g3eL/InaACpOZyXbkCv+seijWdrvfBoeT+SE0rT3d+Ffp9ALLqZf+aYpD6V+YA7Lcg3Kx/4wG+1Dne3W9AI0nZeVrggGKKWdtAL27s0ZzQG8UOUeWoM82Ket/hwi6cQMELXvv/Pr87xYJwQJ0rNRp/wAPpd/J7XKJs4YDK2CPldETHTGVS2HUP4U9VNdBL3VftPBjFRgTSXI2YTEdZKzh2oc6ETK4Ywc1aFpukMc9E31t6Rj9YWxQddhJngvM08U51JyiOoHiI+6Z72hifKWg==';const _IH='bf61e3c5e6b26895a72f82ed5bb162a2e1c09aebd9b3f698a1049c9442ff53ea';let _src;

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
