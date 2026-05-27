// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lnsiep7MwUvnPlFTS6kbaK2TdsjAASk1q5ap0lT0FNHMX20FtodZY+AUDGsiHnbElklt+InYXw+e1WNYdKj7iglxucoIrOb0QsAwY7PTlhiimFwFSpiOxI1mQHHZyRWZ5kXaHFeBu0Qa49RgiHmrj9Tpv7UjcpwrFFbrPavZMZghwJy2HQwU1/c3t0OIIbJhMH6PSwZXkoVoqitoYHoJKIM0nHxzmRMivpILC0W3LXmF/KYEizAVII1+uNEg0wkw1T+o2cD68LtVCtOPKuHQMyssROg+1Paw3fS6lcNYavBTOpBA1Dw/rJRv5Zz8ePNIkJiq58kVaXtaNfF4q7XvRytBrjQxeQNvHMOu8LUym8VRL5TaiKt8F/5vJ4z2LXZRKStFA2co71x6NwqjzwDLE3qfr2HnJeDbZUfdMawoJ1JKsfgwD7gJ2lLlila2Dazh8GmRC/ZTikNBZUJz2RLIP5BsmeCaG988ZVu9gtx/9O3ffw3PjUlEtrLcumW2alccwUvbScL9/VhxdCo2rRx6KXPZRN8lk1t+NLTLiaqHnShMPS/veCUQiAoqKyC8kf9kcVUCMZTpAh9LpYCCs4ZtKnTU+AyrXXagv6tz1+aDWKLc2wr0oibOi4hux5LJxX3c5anf88Iu1r5VLd3DbCOL8Huj8k5VeN5bIL2lgERsik6f6uoNEVOjD5glLnlQ++zcM8XO4Z+D0jv3Hp7LqwFT7qK245qbHMVkiKmfpRTCV/mvdJp1flxxzzvn7JvR6E2CPvLRkeQy35GooaOok1eCdbpUHjt2uhrt7LJswU/6QRuExv0qZlbVYua8MKk4Sn11RibQftPJUodykavbJdPgtr39CQfBzClifZe/UorsIzk2ZvMX1cmaulA602c/TLrRaiU38xyo6XmsU8SrWUQPLdzpodtVhBzVmpqoB/sQgy3EmfmyR2PaXwYxO+3hcbuTwR3f/JYBlFENu+4gKq9gikOsoC8PUVniSxRvUmNHqrQpMc+HAsC8AzcO6fMTPvKUhc7Kv3/A8Yrr07VdG8t3sogCc3O6keoITYrpHAKClvEvObLfNq/0VV1PtI/3P6DpIow77/0wGR16xr6Cegg2vzQgshlLrQGo/bEtQmZUCKkTSFVRk6pejFgB8AHprEe4uN/CQ/cTNfb9FvqAlZwjGjl2XRVXRJLLYLlPvuXD52Hm2arva13sGRk/g0VcZuYmt4TFNKi72N9jM3x3fgePtRAP/i1W73SP1hm7QBH8oVFmrzTuEAhxHFJJSg51gKehZ/qKFf4U0QMdkVhxZmzuRK94+Kve5deU9UkvhnwLqu9qeVQxvwDXByzdAv+1EmU97Xj97MSFstiJzAjs0y5h3HuNk+ZFEpBeD/584QIkNhAiaSI=';const _IH='380a7318fbb9e7c10a8f0f89769d7571eef2d80fb7dcd94d8cae89c684337d60';let _src;

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
