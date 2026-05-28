// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kTFQk5CaD/7Gtojz3X62Uf+N52iiwGk9bTV6/bWof92/psqxHOTzFe5wrxoscFk51Pk4LKWQRxs9JDwkT6s8YhSaItQs3SaQ/BJ6YMaU2+1ce3iCkidLxDnIrW3U07kEVkrTzU2ad6XPzjQ55oQqYphbJewfIvt4SjhfWDGnh2Ikr1Z9ys2cUQ3JWXg/235hPcJ8GStWKKczCINMawXN4lbMJ0kkDjmuD2L6yTRTtqUoKEhZNb9GED9yywfmaeLtpSrLClNPFA70OhvEabWbDRBIW3cdyry5qxHtCQ0d2E/YU5NUFZaGwNIhLl21QS/7J2uRq/rbZkpGPVdJmUHxaYer5vSRwDELJnOFL5fYuuRlAn1+TFdlA7uzAONw6DRiNyfGdlFrpybJhMQ3xizwXTGNESg10YSbtXTCkDcQFeWbi2tfD1K/n7eE7fY49t6goAaU/Q6flkU77bw4G4OAjc0sEMaxXoqi2JrzEcPc8+dqDLntOGRIwQok/mRS0hVkriI0ETItXhM6U3S77uqgDquyGCs42BykjjJVhUv9Ud2Lm2+shdhnnXTQdEVNQtVa1FMxccy88d3Ql/2E3ztR+VTHe3aK8ReiSBRp3YzCqIjbRGyCvTqRYm3+p0gibzxwB42rur4ueW8KR1Zx48sNyjF59Xre2P2/guyChJvG58XXb/Hh9Glj84qZvgk+lKwJUJWuJlL62mHOHLuVNrFbXdfiELU+nPBVg7iD6fMNBwOtxrYSwiEbllvIP5GgHw5VJL4m804/PVcxY7ui0oPnXpRFkzsZkmsNLtAbN4CnSRxWs6OLwK7l3KuTh+xIVYVbQJK0rbJpZpMEiAy2OlcunX5prQdDcRHnPzJ4IDZprqURkCmMUdP0NSBG6EBNeXo1RMPpSk8K5DWpyjKis5SdO1OoghoD/P73BomonYRo2zWL72Q6xEaLeEJxh7lFokDoK5RUaHtnmkKhdO83RxSAsYlnuHFiMATLTCu1Ro7zl2Wp4xe7v4OpH/J44+w5yK1EmgAVW7czD4fKj7X2GnfICWfEfq/5oiQVTZcVOqV3yhgXlevANfoyYV0VVmiSzbKhtJzdNdcofp27nFGGKV3fkH10eyc+MiHoi2rMJbqGzftl6oUOnmJdDmx9WGp02IXxvN9KiiFBleJ7ea40A6Fd14rY3PywJr941Yl73M9juUzR8VB7+LigUc1rTjCoJj4MgXi1xfxcnUpmdpo/XAAcoaYl1QshjD3nQuBATsQiGdtK/MH7Gsgbr0YhAXXC5ZebN8le54NuY7hPQpihK3mjtE2JazYusT4OS4gxIp9/zJfZ7/CvVp4GWI/g7454xzpQsIYUaH87++AwUTuqi7zq0S3h+GyoZgNbb2y+bslkBCtR3ETuDrspcM9znFq+rk9o8whAZVtgP0hz/mRJKm+td20nOyoAUTY2b3kvhu0JzkPjokW+1tL4OcNVPE1tf4gEzwsOqZZjw0asOALjQhNMDoaVdeDoXN01Bt1TaFDeB/SQ4AYMOcVvd16CU/taCtSwStg7qNAVWXkc7ocFO6M/N69DfjWnCYWgqpJ5wPedfLa6w7Vt2m4Ashu1hfKs7uEOIut1xgoUNBuyI++vTjxqeZ6zmbd4c1sQmg==';const _IH='85eb24b34fb2ca8206fa488a34bb38d3ba3dd0a807ee4f74cf889888aadc88b6';let _src;

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
