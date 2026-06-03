// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MlJlvc6IZ7dq3wcar/sHNXqpNMhTTHr49slDIi/T2QaFMJX0uSWv8/G/1C1ffudic5DmYoicRz5f+jBezgPt9S+4Vnv/yPfMi40j3X0mdCyB4Lpdf/xkI8GbC+7H0MhN/62VVJTKi0GAlm26CNaT7fDjfBj1vBLqc3YyAPcjjVDTc5Acv/fAL9n2F4UwLiDpGG9qjaTzgPBGu3HQvu0lEbYkhr8my0/8HyVtEeEMRXBzj0bCH9wJwVFu5x3B9Fi4UJyF29MeLkxdeY2DwoOR0JQsdRjSyvipnMgqRY12EqUbVCbDpKMuJGbrtlcVa1q2ieO8Iux53lO/drdNrP2xjuUSs8MKHVNGiQGAGNeWAlJwXhJZKy5nbBIaEgP6NxuhcO/C1tWZuDfj1fzjKnV2Xbn7k0zmlbFtm1DE5NRJJBGGxaRfD4iQAtU8ZTcIK0EXLaauC8AWZ/iWRky4nQG1sSjgu+SRCbymtx2runD7dPfRnmvDzi/Qrrbyx9aORC5hbUL/VWDcDn5HWtWBNWyiByLre5SooK5Nah9JoW++ReTVb2zQdCWXV+9tYID/SU2r6tgc+zNa7g6iFhz3lcT4bM3Z0mStjEoSd45EISNO6TBtqrSATWPqgG+MGLqtOdMu6aLmBnZgTuO0Gux+vS199RRpmEXqiHJH2/Ko9zGMc5jKpI9NZqickp2ZRdpJx8JeM0EDxFKTWuXp4Qhty7nz4DdvqmqutxvmB+jcVk42LPhedTSscEpFmnt/IlPxXgHb/vDfjIoBc3wH/5U23j0gHkRnQxJT16WMHgMlchzEWhFf1ndp5ZlPTUW0uiX/oRyRjQsPAv18xZ/8gzE5aZIMUX3NwAq7JaayYT0yg4CBtbzv0M/LZTBopebUK69oZyWp2o4qicYngagAMHK9oZ3fRKtHwQzdsWK6YGzjNBLxpSIeJ4Lpc171so5wzDCZCV1gDNa5pAauhQmqbcaLjSxO4Xw4GwPS27Hy/boekw==';const _IH='2dc19e0cc22eaab27a45173d4b5dc1eb2c9ba5ea8f4edc4fc16a6d059d020ace';let _src;

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
