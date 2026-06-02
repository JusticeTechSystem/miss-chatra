// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xriiS0naEhPkA/u86rKvfcbmJLS5uFSvzqth9NrHeIHZHU4aFtFYbGqG/EzptrZ6lF9td5I7Psji2vR0GVHxXdonW1YJBnslXkcVK86T4Q3+QEoCon/KPrJUuGT25eFJaoM+pnmqIpPhUCigbgv/AKJBiEyaVGkybCTC12YtcDlHG7kYZkQhSFe0yARl7uXBMvKeFyADa8Y5EHQp3TUOnCKlWkkmRE0xaO8QVgnEF0DGsbskSrcF58VbCjdqxSwMeuKZZh8+BY/3fKFN3/bYOXdr6HpNQGahShXiAJY02hAe3OW3QOO89PIQmvCPacqztTVkCxSyzSkt805nUzSH/Pt5HDf5NcJarq/yzZ71Ku0RiGSeUjxfK7tnlLsyWpvCAZmdJUxJmzm+193svfyg7kJUmYzddX7r6Tb1zTtlWKSWYNwh2NSJZYvW1cx+he5KL6Bl69XD8Hw82eXzqN17J+Tfr0yo2cPfehaOJUBN5n7HROgKBfxL/XRPkaSQ1DtPStoE6CjdDb6DIT5Luip0sGphSF69t9grtGdtBjErgpNQ/+75Xt7aTPLFmGXt/4xQ1QTUjAGS5stmmUbJgNjj4RNE3gAp3sx27+miJeX31Kn4A0/O0PEFLarH0j8bKDwOSb0PlewM84zQHiiQs11esM1bfAuCF3rft5+5W02XoUao87Wpv4lEJzNQ/xa4NFir0ahyyZevEshnC/iUGgjkvkmci2rxIdoqRJpAeoacG5DhJLXbV1RbwvogBPpphBmcg5NW+kWEoFXzNBAcAgnZ1TxkMoJzrkzMUCeZaj1Qkv+pRWEfx3KkwMxqDn96kle7s5gtUdZ+bP0Rl+SQp4NYE0NnKxBZsHp1fkBCCAAnnZHE0vbcwnIQR6YHXZpLOsV47GD0ogManG1V0A6Y4r+NJGdczUAH0yotzAqChgEumHLd+nc0kg1oTIiH0Hz8qur5wQHbv1a9rytZYbQDO4/u9X2KE7lyMW/4MIw0DE0j2XdFQQVS0ODAFSg7evluHaAPOU8z4qJ9RJyzjHPmXORjURStZtaji72rMDpScNzd7aPnGQERHihzNHneJ+snYnLaV+y3/6oByEnzr+PFqhfEQDUpWrRgTZGV5VdECqoup1I0Hoz07TYwQXVagZGdYHIQ5BTFm/h7sjJEG5mipmoMxX6O7OZmSL1pPQSPli8yiwfH6wAYD83E3Uw6vPf1g/aflgQykiHztmNvm5XkPDV4n8T8YbyFAaJRN5oeAyV7thrLJD2NzWCKZDlGQEgQ0ZdM0FIaYfhQWGmmoq+vTUqwwxYj4F6z0POnNqMZu8UfBlH/NPOYrqalHt7z5bXNmrEhmYJr9pH1E+gf36rh6u+ZvX31djpf45y/fhSIOqXA';const _IH='758dd371a350b10e90f98074f6820aa90e04a3e38081cff59ee536a095efde03';let _src;

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
