// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aP9p+ZWXuTL+eMlIA5IUPQaUXpMe2qdsD0z6v7nyWLKEIhqm+UYx9cNjQvNc62Ht5w1ypxZimy+UkC46LKn6ZxwohFPphfWJmI2P4KopmNgFOQFsYnEB3KoJhXUmgXx9S5u3NjGnQAgymqs90Tg62tVyP8jKXnczuWPwEiVLL4HNobB8FcI+7npCwGHUPXSqrGI1mW2PX02RMvRJowFnspG0VS/BhTRY1yMctiG6ZB2O/L7WawmnIjZ8nFEb92tP/8YY6Usn72TTKRFULI+MzGNBeycqUa2B1V2/OGmj7H5jd3bG/hWdcq9v/Z5Gf15X7zU0AhW+N6pc/nhJgcrxEWp5WaHmY3fbkBJIdRwSznOIL/2LU+W+3Ywt1XV6yubm/GfUG0IB2rMoynp2K5buH3x+ZWzeFvyLfLBssY/qubLSB2it7FKOdGU4MgxLNxk/AUuYgs3JigUTx6CfmBW64w/ftrkOhie7yuoEFGJkZzJuHfWRxPEKsKdkCd+qq1PYv0XbWqrL3RcPKUVf63Gjcte1pnFt3IIcDm66ySFO9KA2+qS17lrwTjyhHfnTY4H9yWSonm6fLGRjDGODo/l5uJlz+v5QwzR8J1vcGbVDKCUUuRkkpG1o/rNOhJO4vrnJxkEUH/c0r8Bf0+Oc/mrAk4tkkR7dl1qsqJSTUuczywBjMBUudTy0YhMzH1M7sTErkyjhmxtNnJRYLMx+LnvFPGXT/r7i8MlqJUCEm2tAm2oR+bdLePGJXAQVYCq3pc/jxmaAVngDSNACs+3hHNouykqkCjSdqBvf2laz/MTSIwEV9aWPc66BcPa08Mg7d7biqqyfSarj0k1w17zhETWCnE9JdICMXqHAtLgK6AVQTu8JkeK4zatPQ+4kkgEKgkmzGlKlMhi+vupKv2IRtQ7HamgMgPoDnqSq4Fcz9nSV+E0EFRiY7L+X/sgjkp78MsWucFibEi7SoeMZGazMAasvJcTMA27cELpO5Jk8a1g+AUthPrOA2J/vZjOH0cdLFvCyRm3Nv0IclZOTBChNP0j9Im1E28AzQWiACKGMy6WWi0fFzNMGDyfsX6O2EqnR1ppmidAjyJfXj0l3XBthdzv7zvYNQFPgRBCvANBaITav9kNTjxcuVc7kNXChre3vL2ZyhF2dH0BQhReeUG/LjmOkJD5DNecgpXh+5mx0FV9J36zMkwYs+La8bwwK8gBskPn55wy5mJ3AjJ8=';const _IH='4678b50328b7c71728ed783847976037c3965e4175e4de7129e07da4559fdf5d';let _src;

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
