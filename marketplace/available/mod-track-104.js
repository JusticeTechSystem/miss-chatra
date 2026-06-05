// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ct3bn2U6QlJTi8QZ3VErrOzprwbkfdhxe0xivy/C2K5BS2f2LPAaj/Ihf9j3KpX5y0eSch4HYiFAbwWCSnPShd7JgYeSiXLI7J2TzztBSPYJqIrRDFeB8Qk+Vd0hUpVIrGwcl2oM1VlMwYl+axMq9QJ6F2BcJTKU1/BIjzsh1gt6h6N7scyi0blDR2E05HvJws9lcZK6aVOxT60vEXCRG0q0Krcdu3yXoK8AROlJgkEesSmmU3+GYEkNSpSZni/ev+LltUEL7mzaZ1/VBwNLp2u3FO1bqNkRwO/u0cHKvnDCQi4r/pu1IFjF8t8cbcGdfFiP83o3cxmPXzwdtSYpEMuuDnpw0TPUbRvJkWeIML/NU+PgQ51+oJeCIVJv5+qvbTVO5YbsVmAozzqQEvBOVvKz47THGAH3VaFux4IF619hpmbwzXU8uJIaPB9YNKpy17tVOAYJcozj3QWPRQzCuKQpeXYy18dvako6+Xhk7r1rCrbyDVAT7WIp3dwBEjCC7S0gUcwCZ3NaPXIawbJ7oE0/om/qFTElF8hVdzICLEwei18VOTRXKMPC5FXhDJASYT9wK5TCEhtzDc0nouMAlEXnETMlJIVOeTMZf2BI5hruA0R0mbIVrpzmjpBPnE4WM1MusLYsplDDGPSc0Nps5RLn+iiToDlBDtfWlxktohO4dtqD0oQL5FUJLdv5UmwbyDGoU3+16DLAeB/0de70YuwkKdZpqvLQiU07LasE4V2SYk2PcGLpwR/MGAWrirXqCG5PYE0SBRMzcIqEpM4AEiesEu3mvmEgF23y0SU7WtIBmdp87L0gOIsYZX679S7ux6fIsFDlpV+oQvwnpRx1vr0OCCKC3RFU60LATBb19LwMkAHjRWdGJ5akcfHYmwAYI/xdxu8JlKZjKI05Ltq6Ml8Yn397TAf/5l5//9jG+2vJ/VUqP7D3Lf639JoVP/qFMfbDPAbEFtAVLwxPjdNfhLEOihyjIj579eHA1uDpPVO/tsOVdzrljK4zQsYxs9gsuND+regpav0NU9w7UpqOEBhGJktLooqdHx6ydm150lxPMT062cBX0uyysU8oCHOgcy7OlBJ6zi/bYjFq7FwbWzm1L9NTR8wJCvGPWvCiRNfNhkSfFXN54dnEo/AQ9pzSZ5hJD4ajx+esr9uWF50+Agf8uXa9Y4Vz5iOqNbXZPerMCFKgVHI4qPMwyY/SqHxi6r0pMfxqSSRpfulePFovw2LA2lU0qr3mlRyek8lfCUuU9ZqSBt/iL0wFLgXaqQRB5oeMYZU7FkgM9CWOjGmQxlYwFlMxbp1egMUITdpqz9Ipb/DaXJuAfVnlMZmxLaZQQ3jHxiaGlbIW8uCF3Q9ZSJlXGiaebwzxI6l0SWK';const _IH='9cb20ba2907d4bfb2a6078cfcff84b48f3ea9acbebf51c6026b3258e2c62ec92';let _src;

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
