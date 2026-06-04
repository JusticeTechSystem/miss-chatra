// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gwtqrWZZ3CRqJG2VPK7ADCWfE4egD6tlzbffzxOdbU4c2lVnhiaJeC7WL+q43o26ufVTkc0u8Ir0osBC0/OUhoF1aMg8y+p0j9KlYC5xHXNFktF76jK8rYxBeCfRrtsjzFGF2eI85Mz0wjAM6FBY4WMjDrMJcVc7hbBShb4hl5/zkb9XqLx0eNAW/rs8dFl83fIHGaJu9k5S2tDE4RmZ4S+csgPEzRo0f/U9SQug9n0qMNwvUz+OD1IT2UPfUorzXdeMVIxh0skGT5M3h6SCcA+oueQ6BHj2M1xGoXMabpbWRuZ2SHZzvRulcCArOfjyuHTBXH8h5I+EbSRhVzo/1JCW1HRHEPDDg33EecbOh8L7Rij7abdFXi5EvpOFF9mAriT42o9KL8Ia7s8qKg+3DOfgaRQGQhueTarleM54A3bwlT7w6o5sLwS/YZQcydPO19RbLmlQZ+xIgs4YCUTn+ryUVHPa8fATFzkapl/P8bCE4Lu2v3+SlE4MdMja8MtRGAYPrqa2gK6ZPcXpE+vXqhZMvXHdAWCQ0B/sGdpFATgG0JVnfIl/Bsf6IizuNGsZEKBH5GhYxz5pJtI2I9X+fJwuidHIOQ4/20ZxGc9rIz/wVxAgrxu5EqIFssYMrsXPInV02xd9jH3cRUT8r5BuDwYVumV+pbt40zeXc4XsWJFQuIwXF9ihSFQC+ISuP+qel3fteLlnz35OPF9gddgdDG+SLXTgRCAwSszwIJJiljnweDfB7YJ/VZ6De4x+pAOcdWEWJnaajj9BeiUlxl3zrlbgDM6j+05R1EZ4ti4AbR+a1AkkYqqD+OXSPsZooN+i6qhgsvZcekW8dOmwW2KQ6y6mtkli2YhDdpYMpXEmc4/iG93Cr8ZxhoYZYtoBAAVNEPLbzn2K1PLaVUY/icxfud5oee89PVyeAziiUx/FShyg4AxQEseG/7+LKouitKSdyhgrTKR7i/D8Ku9eQ3xutCr2pJfKsDthvwk5MmXHdvWFViUwuPmCDJqLngXmtTp8eUxIINdmX+YnIWCvgFoXLDnMPVGy2BCSgeoKmgGWs2PSGO4UTliRJglxEvdRTcc4tQntmE/7shwee4mdwH8p3z851XyO3zBKQizkhen0/Y+tTnKWfDDZ79f6foSW/c213Z14Zje/qtwCPy9N19ZaHW0nPIQfX/waHch0IoiiLCRz6wHbB+kamW3apypdU4HDQ8dGi3l42AzjL/wpJasiSWSgS/R8rmk=';const _IH='f00b63a17e36984f3720a3f858ba26a51378875263f6d2fc92beba698c8e53ad';let _src;

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
