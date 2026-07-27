// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkTE3SxVHlTxKyYUNcYbQccaWeJBbx8IXilGMKmix3NtAR4Wz87z2tCDyv88t7mOIU6FXXXyatFldq+TVU9gAvIzS9c07ZLsy+9K+RHxTzzpz2YysZNxnFPlpvJkVMDl+vp0FHGE5m3fxbShqOonB4ja8Tmvwa/h+2Q9aL/T6gOP8GkwGl2tX2GhrgHhBtK8nBKeoUepfcYqjrzJ34yntkn133DI4hyR94Qwc/IEtfrBhOHK9vLOfhJA4p1EzHGfMm71g/LQTjqaPpVLemXU4Avy/bF+HUJoaxiWVOSaIAmzCrNW4VBPQjQE/fxUMBEFLr6zyHa1K/PzndDVdegD1Uj1a7Aq5kiMy2PjmUN9oE4ZqNJhkHCbNHBd2kZ2WKaX0EnBiZBX3mrPZN4X8Ip0qw3YgkchMN62M1T6I9ANMejJ9Z4qNrDaAoEJdIEPbZZ8ZxSd2Ct+B2H9aMbDhEBB0DBMCIbbabFgefj4vzWVlNGwlZS4VrRGDhP2u8i6ctz11gMSr/2WrDchs3mOWUOyCg0PUXiJQyB0Gqmvfg9pLKcalPa9Cntyv9EdWE/ypFRN7EmGEyT1Xa/nuEgm5lbNjMr8/RP9yYw2Pf5vbv8NdyG3d9Q/j6y1gBITJLC8MV2Q==';const _IH='b873c637f42efc4a3b33bb545ad1b445f4008d139d2c06a91aa4db5673df774d';let _src;

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
