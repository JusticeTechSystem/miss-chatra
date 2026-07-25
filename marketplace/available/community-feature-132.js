// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpFJfD5Ipn+iX3OsGlzjmC6jMRF68VNSWgxVS/NOdTAJAVfMlBbNaw6mgViYVXH5m6cyrwBH4Bgz6RawKxB1C0sU8lvOE91mk8VoPDFsem0EqOlrPkgeh1xcKRCSWXW5kOmBkva+0KTiMPNuKG1NOvmkSdp7wIxclbIBzPgFDxdV+Xr2R4I25XO6Vct8QIA3DjcElwiktqih0XHEb7QhinutGPP5yqKuVJeMG1fX6rpIb8JLaX+bDiUG5G0fXzwLOhhtDYCUa8WJ0kv+JNGEruPtCsVhh4pPGVi7dRqfdCbhzFWmHQ0YDGNLPJ2KDIl20fEu2usZkeEf2fGpUIeg4jJKFiO6WZGt3r1ucvp/N64pg7MNctbCa9LJyLEWQnxOuuAMm5wJLAxXrlZPUUINd0rQunsuq80Kbd+TSGsQNq+74/6kRffa981kVihrULczWXQsndgl8NEautUZqRutNLBD3iFkOePrFUnQKn+6SyeHWSkPZfS7QB4j5NOsbxo3eML/OMikj4/+WCvPy7JcYCqDHu3tAsFlwQ8lzhiGk+ltl+krrAUu8TTCbL/gv9nj0mEM0Xuc4L4p4wBfB6lWcMdjFsg7ZCuN7ERKwOQgERkwFMoHFTKeFrTIe12IfTb1TJX/dPFaVlDbi4Xq+OiHOTbmbdWizBW15P0VFjik0gg4t2c9w2/FLAaVKGPLNisFBcZDfA202/93Qe74JCYA6VOuBrzRxnXA7Jt/3XEF3N6wWR2A==';const _IH='137ef1b87cfb632b39c5cf6263c78d22756b0a40e643e48ff31c4931547ad323';let _src;

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
