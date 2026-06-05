// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hloYwv8AnbvT5lJdZWDHEjq/8qNDb78GrqYZPOFFrnA23IDnZC/Z9g0bjWEi46g/VZXcNEPk2KC/MYAp/1wlj3slNTFDkZ7Lhx7MvNCJIhsvdjT/nAvAA055UZpgcnoywn3Cwm5U4aNm9kX4xzAGBwv55mIB+n1luCqJQyyp7q+r32Ev4Mtv1vIWWILNrZJw6rOzl5dVJk74oGRcK4YTjbDwlTwlzSh/uEjNhkoEMZadCJktTdzR2QtKx0WhfS2a/MjQsFvXPnrXPxLPsOi/Pm4Sqx4T5hzcrkxL3ytYPKvRm9EjF5Om39qFBl3tOeKWQ7XZg3gIk3aP2gI+/uVFgparvFOMp8UMk9RasGHB3cEMuXrNIVZuY27czg9ek3+lao3SAHe7ymih3peKe60N0Xy1CEsfK0lJwMUWCOGp+4PXFs2dsUA7Yh/VCDRRjwq1phAuz15i14m2eFdUparuM4uIBqMke2/O5SBT1NnudPVIO7i0rfCtWhL0/Xqed2BG51SEp6WLfKEdCDQKBdFVL8QLOgO56P26UPCOWv8I5G7PsQRMmXcpaHPQuReE5YMzqU+Vh8aave9aDmgMcdDDD6DX0EXCL+t7i2kzZJovOWiVTKHMJ1v3GhErM89MgF6hk/IAvdPFcw0EBQXooc84PNAZKPdEliHcPWFk08LGZ4YPmCfmcN6LlJLhOsnrAw95rLBGb4cyPFr8N1mh/TZPn1CvdQt4DL6ajV6t2ZvpvW5VPY/z4P0=';const _IH='c83002968ebace1d7b0e381ee1bb4370d9366a7dfbe264153e827f2c6566812c';let _src;

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
