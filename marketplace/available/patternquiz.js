// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UhYpebBaVsYm3vLHrZuVzlX3K58vTuRb/TSzX8ptie4dhm0EfJtTK5G/QLoOKBgsKDywsGn96jXC+15vMU3BezmVcZhB7YYcVln/7RQ9EjYjWemY4NCQdR4YHE9CCDYh9Ge4B3S+7N+kNe3EfIsccvhBkn5mfzxV/UFaHFI9bWchL3hTrTrYKynpFR+nneowwfe16X/eTRR/47/LPrLr71mHftBwZjafHung62LzDX157s9M3Pwl61EExGLkuC5Yiy3nbJ4a+pF5QUJiYrDCakfg5gdAdUA6hKSAFqbsx0KQqX0ZgFVgDf8Aof3wwxDCzZuaGj1igq8e2N3cI3u0rZC42BIAWExw8kFInH5uMf2ZC5vYLA4QLn0SN+elNZsg50QrAbb6skryZs3csJkZQJo75k3PEtW0AgfxoI5gmFDus3rT5+QQGrYheSOnnP54Uol5HCVjVgmAC3ptQ7e0sj6ENPDjHTYUMv+G4zyrRdbYc1rCnZtm13LiFMFye/8FUqUDkl2v0JcDinokc0myBNFeYoLOPuzIdBPakh2NWZvlyu5LjppNyC0flg1TVng74okxU1VPF4drLvUUtkhAS9ylQRByWGhhf1oc2BGOcpNqQ1qtBq4JRjJP/fZDwTdBYGGFbzKywFnUnt2WTPIxhPFnjFo0hIp0KFLFCdmAHVkMNp0QRKau6mGLb8tbVh6CqoQBdz2rAgUkGlxXjZPBq+1SImP0qfB/zPf0hziRhniD1SuqAFcNucSByGolMzpzoZcmQK4SLS7EZtY5lkyqubASVQ8dekxbfmv/+stFXhBvoFWDs+wKKDpyu6Xeh64YZLaSA6e+qdehdbQs7VhBQ3l8miZ4SnsyKrWGWNqrsYDl1ukHILmqIawKIwca8wvoYOtuWgAgsdX1gss/WRuYrfEO5UVNhgxABF9aPCEKPe+XbHJPmC9Fet3mBCwscsm8a7p9V02ppE7tW6tgH2Qih4fW0CgXtZgo0qY5rd4zqMBlBsFVOai1Rm/8dBDXOvENT7/5w8c85ACgiWQ9PgryTPJVXjz6KdkfX6SRJFfjZguef5MJcHMRgBAFfL2/6An5e3UEa67OdFeU4XrJdCU0eCK2Zxa0/u5q2ZDA5QCoGTaCteOsiVA8o4bxiFAJU7uupEBozjAZYOVPIDgAWZQK2aXZWvJN+AIxO+3/tru3soDnnH9IDdGzLeySKuWDj43m57B0CUKpejid';const _IH='9096bd55a2c7dbd76cbc45731770276045616b100d8eee859546d24b0464de48';let _src;

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
