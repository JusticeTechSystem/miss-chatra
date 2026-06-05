// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QDKHr1J6NeZjBXIentqqnL4aamablkoK7XuggCBjs9MDFYnMm2T8v3AXUnzaATqt1lyStKWDD7ouD+sOVmbDdztr0E1XVum74BVPuGCMr/abA9gOemreF/nC5nMGpudswxUdOud+iMTLi7flGBzykFbsaImJLOFhaDf+jjQwmhKd43deIIjnD24A7AVR5cWlgEMbay8DizSCLSqbGQyImGFwPG8vHje6Eyx8ySRJqwm1pLo+mUkqAnqdVOTmsM3XM6MS/Tx+r9PwTKasUfaQJSfRWs/mcb3F145XVslF9nNr+TSBxoR4oaoOa9MJtNcyecMFs9i67TjBGVCS7AbCJ3p+LdRoy3QI4CldDBkp7tk9xwQDiCVoCdSyJvlcBP37iWKajFIdvbJF3B764TqXJFkMD/+UY7nfl3B3/bfm1wsAEIaDwticK39cUg7qLx5ob+fY1Rfln2e6mI5L5gdqg+rYAVERaoXbch27JVY6BuY5apz3Aiwys8pfCJM2lvw+4jgNSZOV97hp2cQxe63hGb9bt0dLkOcp4uGSkiZvQlVXDnLHIdUTNJZWN031VC5UohPcPf2LsEt7GxY3G35dB8K4ZNkSfLgjKzFMws9mP3T4HxJPK0t1bSD8Zqn9vA2VLsjs0NFEeNpPm/94dwt6Po7BrwiBedqEym6OeADoPd8HbcRE0DTieMZ90/TqRhxfm9shEFOSlq1CMu+wU2NJ4G4N0vzHm8d7uRiLrp/NCO6Qk94h8q7NUN86VARVd2JpaGzD2rjwTWx/RkZ5CCwKZdAsDqLsnReJfrL3Bz/edW8Byw0bSR2ynNvb8LCQvV0SJmEaNwINrUgTnCfjfnD3dycap4AyHVEZqdH+/dBhauO2HoVyOULEe/w3dteISACE7Up9A7ELoqw6jfD6nNCuuHRa0yFu81ikT2HAkwaSjey5fkmWYdUIvIsclz8rL3X/oFsC1+LGL2QoLfQyanD10piNemw6fyMJCF6M0AFPYCY+nWDq5jp3R0G2Hd8u1DFVV7DuUOD8I+CMyUZthxi65nZHhtmNIeKjjCjL9N9dTqT9pDyE/cyeU0e/O6+h6Nw+UFhlB3ksisSXhj70AIno2cGcmt7vX9Iza5Cz01x1Mqt0BMOumwHPTVzI+0wqGceRznTqCddnPpXCAPqiNtkaWN78kCP8l2bhPD/IF90uRlngh+kRjAbeKjtSstwT2LvGMgMOIgc=';const _IH='bc4345ba482eaac6e26920a8f40a5a4d0b1b7e968b55eea01d5264e98baceb36';let _src;

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
