// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='08/cNpIyFbGOsxOYIKnEZjGdyJ6HXcdyA3xrHG/hGkOUjzURRmZlQRqX/DFm4byMZEOpM5cGnM8Y2DhSfrFXOwhzG8cTEpiR44FuD/EIBM8sqObCyp5dPCvDITaTsdBx5BXIbcuCdMLeuekUkIW4PNaVfNUpssfBTL2WslcJxFEQPy1HVRNbJbytim+xo4MGfoerovDCmyGbJVhJJwMvv8Yglsaesb1SNbpvjCHEbuSVggkBwT2ZjjA2CF7GvdR66TNlC79xnGZFjJpMKTDY6PtdfWy9O2L8t7VrD6UA9e24wMOZXxpY4pKYM0Cl0gX2sedR+kaNzEzb4Tcz8T6tf43bAz91rIOc39A1tjnn8Fy4Ev9XbeAD1n8tKCgkbqw0pZND3Pamtoo5GJjPYGRx7mgR9fHIkfYrhlpMlw3Lj/pisgyTd2lgExihRyuhJmWwzVMSfWppzXVCZh4OYPoV7Db5OfUgiekgsvitLMPQ34Xkmb6NSGe7f9ZCSH6YUsDmT8rFY9NrVI2Wy8oudf/UPSgRirPtoHjti4dX0Ii0Ve9Y4IGMeI3tmDlxwT6AiTDupHUvFiF4KElzVJjXGsW+fkHXEhcrg9XcIrgmEvaHSm3hsXe1yMUsdg4fS60xAcQ/a6GHjWaDB9SEmvn8CQROkJ4u1wI88l3T1U+tgNCUKHc6JcMWeoyhMEtD4BXXIeV13w9e7U16geEkisQ=';const _IH='57b958f68769d05450b06bab103dfaaa2195157e10bd211ba4628e22e440388f';let _src;

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
