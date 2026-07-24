// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThKR7UQFdXodiDdZY+WuOnoX+bpKFL0pUS6iTXiP0NH1+tPB8y/pad4V4h7cvuvgrePA9vFc1vlxY+JzHNZaS+zhKndH6tyTbFNQMa6UCdU8CbQ9KuzF+Fc0Bkh7S0AtA4S6l20Whgd3laEbg+V3n10WBm0POBLDnP1JHDUTznDmxdlpjN3/mgWvJ/bsVlBENx9YBEhWOPRtrlLkwzmOzz8oFpJsS3ajBn/S5+dHq/sTbQ/i6+nK3ICoohvB9T5JU+S+IDEqKN9Z0IjB42r4iQVh6DvZwTwxL7IO/tnPYgTYuAfTcfdjSxKIHBdaDphQmS4RwHSwh/8wdCVffrN89BnQezJCMp6uCvecakFR/LuI3NWo412aE8ZC+7GNfFI8NPKl3RPGwBHNQWU9s2TwoK79ErWY8qkdPdL1WR3rB2LJ5D50xGLTTIqRZ1Kp9+akAv54KqKmauyePh5USiZsug6ri7hDAR48w4z0NyzjHmCEfXS6AxiNEbEWl77+4lN+0Fi8hjjGvsVUCFb9lxC+8dTAiJoYtKSabFQ7bpfrjaDzhSbECSL5c1ShMdQpi9gTUksiwTtbuB74y8AIHoCixgmDCTezeYW3bAAxdBvmR2vFOiBTuMBITagGVbPdJhWfh6ShoeSzJpd6WYtNYkvN4tu0OqxVPPeN3Gg8jqH/3YgnQpcC8TagPhAhkVzuE24VsaWPSBzGDrz+aSZ4JhDvTcTu2ioDlWqpcRGK4GyBE9WGHaohHkLOQiHApjLAdILfSNsvEpC/nC9q/K08EwZLMi9yh935ACBVw//uMpN2RyALemqbrCQiEMghNWPGWYsp06i/WGO5TlNyPe34AZBZHmYif6UdEe3lJJwHpsrAN46f97fkbqE0jwAGdCVea6ajEJvorB7sHWxw1sSv5bS6dPh8HGY0VTZ2dd8S4r9FvOfMoA9Nck+5XTPxZ70uesYgyZxSixyzbLPtsg4Ny301JJGLdstqCRBD4TfnYL6kvWvg/ONy2ox8Vb9j1ovRYpfiZ81RuSTto4jNTOgpZY1QLAcgU=';const _IH='b44f659579e495afd1f27b0d85a5cb63325fb136267b7e494ece808eb719a421';let _src;

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
