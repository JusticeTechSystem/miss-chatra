// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C2mfvkwq/fpmENb3BzRijv3sYg2LNo11ApSDnZc2Lc7NgrR36KKraMdzj8RpoAlJyyuVGSJLUXkVfC4TKeLyYpVZ1Z1HTcnxzG81pljsvS+M2QECckIOitdde3gKn5PvBbRNvZpXG2Yg0u1LPEISg1FAOJwA3C6y4mc75ymFGEnMUm9ezd8c6Doa95v0vU/7IO9SMUM1jO4K/c97eEza/U806TMrELjtAG85yhidK53zH6mQTTIQ1XSE1XMJJ3Lh2XxRpKrQpFSunxdEKCjdoBCXB8A3p7s3PhTucUrRR9B3sBMAa7qv8pUR0MPvgJP5oH2XLc5h5OfgloQfEWu8ecmFavOz9Zbp8hHqPfp+tPwlNoZnR9p1pLD4d2gER8ROizBsqabmKEE2Wm/0j+VCKYyZOLcUcm6HcD8A551UBNf5gxv6JD1s4o/Itdv0ghBSecioMkXwBxbsnIVMIOA7PUFPGHkpjSNfXg9kjHjOinkl5tuqJ0BAc+IJNCaKswr0H9+G9cLnOb1AyuZeeEkYB9y2DY1M3peaYkBXLBBDlvyfqhsNc03wbeYNqVVFljzcmYSFUP+OuLBf1glmk69zWrSFRkcg2nHjgy2ljF1gtQKK2ZMCMNzOtqoWf5Yo2H7WSt1rpbpi0L1LupxNT2amzrkssp9T+nYzbK4FbyFVtBHkG29CZhvKoes0gabL4a9mNx0mmOdZ92tZ6HckXa/f9UHpDHBIguk+3/Ugzn1IQkErG/fOD3BOSYwHIuCQCy4WAIa2zLEEhmjB/Oi4E7YQaaj3teAUkNK9pSUXKhrqvLOwoHkGFMPI3pdGDZX7h62fCdO1CtlrPMbMK3R/YNBHFvb0ownDL0aAilbftT3KL5jIKSvXXbMzN/G0kY/txbsaYqvMwN2X7Xm50rbQZQEP5QUx9oSgkWFmIQ1NkP1aChjNRvnoi6gjSOtYFmFxHrC7E8Ymfh+xcodiy864zp4nifQSSAVB6LHWioclTH/2lxLUNCBT4HQqSBUC9lb844KVt1FSFaVooyXG7n2TTi4q6N/ixkpuseM1xtfs72UBJHrs4v4rVRtt3FPXfTR4ypJEmHvkiQ91VpDVjuGTf6LHyUkTrdJpyVF0k6ttydaEagIi2LcMnKHnS1XPRHUcyM7Ul+ALJZRZa4UfImdq5PQjp39CQcZAV0gma0uPtOEMHw50nff+9hZo/9kn3i2Frd89LgkLt8FLG13NdOcejAUh0cZAgoffDgGBRPJBchcuPyuw3XSh/G8zE2cYz06wijBXJjhWNCCY4AJdDLvDQa7ZU1VTlK3sM5x9JzpsiBCpu7rtCs3JVYjb6HdIU4NOtdHeJ1aBcZu3aeMRiduV3pj4dFfmRmQ1475fua65MgY3';const _IH='14917ad0a112eedff7b206f123195861a90124b125b1a6f306a6f3f48f1a70d6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
