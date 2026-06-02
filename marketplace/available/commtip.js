// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGcplnvrKCP/BbaR6fH/LB3a9eD7MsNs9wGYh93F4RKpuf3+CJHh0gR0m3DOj2uB9Bxnrul9mlh4YOH2Y1+q81BAALTDSF7Hk3Id43BCw3EWuvetY+viDfDyTBUiXTpLsicKyDEfOFz9sZVjyCsvJ/R0vVZgdOrrTe0w2Vh1NUkBhB+2jP/PQg6lpmwcPUpPdosihs2EnqeOAnJjTG37EZduVnNLlzlAeBSqNa28Rk31BhzOAZ5Cqa3oAALVKib36tFtDUfdhrQNvCNtATzL7jV/qXnU8UtGD7epw2pmiHQV6s+AUSivvLnxNylPgB7UA+4RCOsoUXR37QoQ3tjDqEXgUEtB5I6W5dTxTPKOyyO65oLpNnGhRR1un4DX32UYdqu3/at0TxZ3yhLLvq1cmu4SrqLti7U5elZ90yDaIWK3Lo8pCKUsrUpEssMnd/D5IcioU3AD7OVMWd4VoRwsga6CPndbqT4jNaJbwalCaUv1tMOKKwPGGEMwyvGRdtmUp/JyFqFQQAl6lGrixV7csylRlLennRyFOawMVORetvx2tYrZfgWK3chnj2EQumUcvtPCqpr0Bw9dfnMfs7xSo87+5Cn6Kv/8zrA4cRt934uxNgcIXpgEjSKQSmPce7WIOksvTm3UGPD4D5cQBIyef7f7SEHRe8Y5ukYpKE2+6t68GNYEALEi7wEWYNHiq06CAgfkMpaAPfjIGZlUTzfBx9UpQAMl+EgzE+MyW+r1Mez+Q4ej1p6V/xv6LK3It8AJSihlzvyp2e2WdThHP7A/rVDDs0vkawH7JHo16ZTKtWpTjdwysHyqR9TExe/f+d1uULeySG2yofdO65/YPvNf7X1+SFD8iupybt0+3PuQayqDIJ+KaS7N24VWuVjlzpIDAm+ZImLYswF8nQqXDBdtuHeqwMs+1m9g19J6UVxhNBFDaWv9FQvkJGN94uFKdff1+Aq2wCODUoLgydwyfWVyIYt3HMlU9k0RN+sZuqGHSDXUrdXeTKfFkuJG2EidltthLfhWby5ZPzkUEsCNiEm66KHjwGZGdJgAXOkwFDJ4c9Pv8qesCMXgo8SXOOELpicvQt7rdXh1U9LW2SjjGHRcIGb84m4RD7rjGmq7hWlP980ORG8JaiJcPZpksHkXmeHMVJFKZXXT+ToVzW6N2/92JVYjV/56HWwaPQ7aUItd7uukRbQd3RHZnztuy4YMcnbz7w==';const _IH='19836a39e7f2ee685e9c3a0023794741f125704762073d959a9e6f80793d5a1c';let _src;

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
