// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VPb3EQYGcIAJ73TXO32JdUfHIjFLDxcHRUghgZ8elM7ADaMho/Zrpuf7dDxeqSvYO8sCgjKDBU2Zvj5wZ60hY7Gx70arBx4dT9lYbWI2jYeHfkalHsgAosy/cahFi8UxetCKOn62WAVZcAcWLNT1r04UzwGFTXq6HuIBSa4XuDpO4/bvOGvjB9X0lj2i6OraZUiS+PYWllXPjUW8bXrHn9jGJ/aIY2bWGOq+nN/30iyvx08482PRnNyWNbWgBM9yLCId/Ve5Id8fn/G7uPxhMkimdcOsPPM2c4BNJtHE60gIMWc02RnLpxfwbRhE5f2T0xuDtKxHASvAiQc6EZ2C9pDf+QL9gOuA5Q9ScUDcxG5RqysOaZrjnFwgz59+Ka48bH2Kqp7dyiceKl78SWpodjN4bGSNEuKlUmr84AeyhWva78mn9ZTRMyfchStA17rSt51+NymreSPwvDVoa8Na8t2RwWNOPqIPSmh+sTWfoOtpo7l+48u3PPvB0thVc+nhwkhMGFpZv8UtrDqHZFH2Es3C3A1eTfcmOv91bUAjViYGdBF6jyMxnQk6s8TLOXqPj0d95DUGyrPsCJLsVDEmrjSiqva010W5d2RXTGRY9gLJvCp7/jbTCcZ7xv30opZSbv3luOpbaShGwFjYlJgC6Ql3axPKnOGC1QvkI9ypFBy/pymdMYBR2mVfk/ShZF++uTuqnsltv0H1H8Guy2gTfPDXprDrfIALQFlyG8jcuBZVO/SbaM0l6U7UdWEUEBFJ3QEmvYgNyo3NW4NwCrAGf46GkTeC+RP323/8A9sf1L0lwopE0IBtV3d2YJE2flNmP9zMKvTqA4KorbQa+V9jNPVJCvlIm1zK6u0JPbAIRFVOjLhC8CuGzuxwl5l9Jl5S/Z1wULRxi/STLl9CHsF0Ayzfay6MWqEBJC68zBChIjcngobe/ijDSs4EzXIe3XzYjjaoTxSFoz9rRDcWi4w6e5BrBOC6SklqRICYaIRs9PO+qhYADVueD0Se8KqemG2d2cC81PGYQHdKatsRWboy4KxrDnIfVvRmN+z+6h2UI7SjUVH7x+WUns4NXqaiKIM8WD+vAC2qd7htNfpdkQ+6ca0RaKMKcxZbhfm/EYHgHvEWjS5ARP6LXgpMjChLctkB4W+S8b2i8RLVInHSo2NIKf3d8Vxob6NVzNEIx6CGINxjX2C2DXtCximVziHqj6ksxk7co0Upyw==';const _IH='18b25c05b2238d4f24b3b5722cf5caf0c10822b9bd76e6f427562d2beca84a2c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
