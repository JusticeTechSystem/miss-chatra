// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='upSt+VVG5po/fF0GrZLwAp1ab63M5e1m3/ODY0m/8FNx3aLwAfspBe0Ns9/IrwNt2RxEkkYb87Cj2ekV19pMXgn6IE5fj1kHOam0uj7kqn+FAnNL3llMKf94VbAJy9dlXTxEv3cj2yvOZ4ax1uKB9I2+fEL5UbD+mbrhLltMZpcc47YM3RP3KEzCZrfiOFcBwq13MfRTWXdXXR1I5E9VXSolhOroQDYLurAy8WwJ4HlapQv8t0qTSfwRTliF82kqJEO/t9DCAeGhbS8xXQXOVQDih5N1NRs1L0q37tmFkKAOZszNvDzkvCCc5KXFY7VKOJtMqSb7aYF871ggDCPPmemshqMuzSCinVN7AVg7XGqsQWulrOEjO3Odfg8GYXdXsoEpT0EnwzbX4LQwtCV1wNzvV72MrL9YhJQYc4m90nj6i2A0QsDC6EQh5PODM/fkM8HgLSWBmdu/eTdkc4kG7qR8rPrDA2o1HlVuPDQKaFW4ZoShw/xDyY4mVx7aYfnkT9tFxKtjYc5HXzTYF1UwIK/PtL6kiU2QjxWk5dorWBrgwJbW5RW63a7X9txHDyVeymq/7S/GfIRuarG75qeBSe0GPCSwhEmte7x4XuQFtxZ9Ng0zaLH/yshMDJY2/KpGfyB3cbnlEvWc0hjoDKtv43OPA4RrY/cZmdNGfC4e2n6GNyfNSyiNpAImRzhRbSDybiXz/FRBBpQrDOGmOwnobsh/nesK2wOTKetHdG6juszEr3IgtIPXa8+CSy+qjAgEbqt8cQkO5nSdUCRJbraYnKoASNlTwyL9vmH0LiRwBRT8D00KUp69RtQwF+OjXvlW/OGFvEeUIJRfg0lkIxMwwfiawPqgw4fIQDcvQE5SAuVpE8ufJLFmc6kSqd7marLN6V6cMWayF6RMqoDS+tXeSf5LujNX3AoiqAbDQ3svuetzKsKgku+miHoOwfYK6Sl2UsRFmEy2YN5QuW5IuOMZj+yuRKN0u/mpgc4pGKjobPB4H0nIPqVgxer2pgA+pVTQserpyOBVsnksocyf2aICwlfPiERiMyXHZbwKSEq+ywdkNKu+0dKHg8jY4OFDEA2Eh6wwj8PzG8HT9DvVTXqzlwAxcTgY47n8h9Uh9SNW+veSJixpK6/W07U/sT5SOQt65I1P1MU8+FA74cuvTiLhuUW0bN0+LOFilFp9wdlVkVfabow+9g6sCIuzXybIaB/CjvSGYmMy3/ZVOjhStgCGk8W1Hw24JuTYrRJHhM5CCB7kCsrb4a+bkrKBl1BW08kG4nqY/cif+puUcKN7L/U2fj0w/h+zUFoYQMzyJSkUJwI/yvA1MFYc5CqLEfCYro/zE8KU7W6x5fcrrfX5Un55GVawRKzZMTUNOetQCfoIJg==';const _IH='ef864a3e9c48c626a2c9d3c827a9dfc3e6d76bb9a1a64e58f0d065bdbf2d9d93';let _src;

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
