// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vXP+9JRtruXpuFLouuEZ4naRvx6mTx8QMG4oFkolh6M4G4Zl79R1DOXMWaYVzuHw0CeBFv4kzA1EYlByrqwfm6nWBHR6No0lI6lP+dtMTr8DJLarG0bSp5sDsMxZ3eCngM7aSgk0C7WlE3Bvrqbf5lnhoGD65hU3bsV9iezIKn/QCk2FegICviHtP1HAspQ7sxsyo54jveXQcbKOTNKTkY14ov/pT4onJA9FUiilHMUq3HQF3SIL3Ant1xyt7WNiCYNk1Exwpcv39My+5LlcAhrU3/iW4hnfYw2d5XOkTZaht/vqVhCj6i78UDHO1A0SX4OwosEwdOSFwNmYjzI9G0dwPA0aKd2B2B3h10xFiEdM6GRkiB7mOpoCPuld4jW0mIDgpeQWVJd1NDfga2rUu3DolUZxauxNdYD2js509Gj5wJ4NVvcj1l4zBHL9/kjf369q6q6Rgj3MmnVK43TnybI4Dv3ilqWiaBtsp0/3D2Sq8sOUqbhgghlMqcvbnFuUWj2Y6bsmLww2u+JCfl2scuyn9qgJO6nSAfrOa4ZlSXYLVSQxr55D+IEKEuUDUaLZjVfSPtEqE1zG2pomWMem56Awjb0jQ+vz1GQpN8hwupm1ul0mgK2Abi/HRhI5EulnLnLYNLJIqJGpaz8dch+QHD0UrEosfo1YzI4SbsKbbvL/xfuUW7G6HqqeMUrNEZuhLDCUlsWDDux/qR5TEw5THroGSNQkEHlGNgWU5pWBg+4ro0crqLw+bUQKUfebOt48esFYjR2d/TQNrjH/9HxFyLZdovu5u0Hsq8uF/Vbdhd+HP5LQI4YOY0ulM7mY1KJVBaVP86qqbXzJdHl+ojX20+BJhf2sberpL7LpS5hpVa9NnqBbkV7JC13jSjLp2Y8Jb01NMHKSw3PlMnB3iZngJBn3vrnB5CKyRpJHE9ixFyNKRpI20qAKd5GnYxArfLBt4tm1VVkLx5krl9W0Ey4H8SQnesIwejccXy1RDma/Xg6KIrw=';const _IH='f13a6cdf9e59bd79c9d878065f136c1c25bbf8ccd44495da2bb93009ebb92711';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
