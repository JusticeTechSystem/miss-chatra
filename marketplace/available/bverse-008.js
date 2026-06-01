// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ68fDmtBrI54KEX9p7aoFAG6MSiDX9aAPQraEB+CL0xOpkPCgDgGIFBplZZ2UUuR6GfqfSxL39pi4aXYriXFS09OsTcpeX10yrYWk40FmbGphREeHHxblQFKMhzCsRrNI2hYc55bgtiLiz5T1H0/YaEuwCgAe+EshJNJ3SGE4AoEM/k1wXV7r909IBQiLQbeyOfc3E3A7YQUzEznrr/RE8ksEPZynPhRDf0kEdK+KmAuy4KzA/7lEb7O63uvM2IrjA+A26dUqBn/PtMzLUaAVg7GHLKG5PQqW3iGPT1l8tnFTZm2Lir8YDXQlKnHTblk+9Qg7KDfhE2031mCni/rUWvA9LZWN2SOKKxPiRhH4O7zEGV1GGig0OXMhM6B37u3SX3hyL7Vk4H+Ku6MTJkCCuO2IM7Tj/9UIqjBDl9vSNgSRV0xML2ScAD0gY1AxQEvjMvdMoeNFW8+Z1w8t4puqhyZTXYSB2c3daIGHMepRZ0PRj7n5fe41+pnR9se3FLIV0bFm1htBScj3RCHGJKHpPDxmmd4HK988XtnCZ7nOEn8YQW9/vuU/3aEiba11oH0vcxm6BQG1r0H56mZR47BhRxdKLPfsmdkKksShgyncbSox7w/vdnzS4OVvIxZS3ajduUScKq4TvqdHSc+kYZQPaffZIO7TJtZrtsmM6nq9xaAFKLICHfvhucDjD4QplwmjLwUdU2Dx0OTPjU=';const _IH='720136281e4c08d1c3f452e24329f83276f0f9a2877b320eed7ed6a2b81a5d15';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
