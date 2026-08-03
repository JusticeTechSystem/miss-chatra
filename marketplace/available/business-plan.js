// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjsKCijHiN9MxvznWclcf5rQIHfe64biTnRCK951Aze36KjQRnEYYF+sev0JvovGfaBvdgXX1a15gJRK0Z+AYHk6L9XJUd6uq6lWxAoMM9tLOssFS703zFGEOexPwLTOHJd02AiaKc3vUF332PPzvnbzHqkkYu/ycIg0aqS0SZqn9/H4IOgSPn41Y9n5ZcZnrjf/9D8eHRMr6UA+smnKR0i9CDrfl1bjLhylQepThNCtmrhNwOSCi6l9f44jhjXnPljGnduscgTbzH5tExkIWSMkWnd9dtDgQijtSYQkK2vzUagz50xcTTE3q1QTS5dfG/8k/xk7cerfq6yUHwRA5xXDQ2OiGjkc+LnuU1it1OwDeYWthscKleus0bGzzqKa+maBCiwa66F0uDVI+E05wGSjqfNIRU/Wa7+csvkhyCyvyZN+Pb5x3XvDaQ2o9mveD2TeqilBWgB+1tXOvrF4yNnp523tVrCG3E9+OXkvSy+Czv2Pd/e1ycOrNrOKnXdGy2qnVvoHSfQ5rsyWkQhwIN37zZ4urMNA5SkBbLfsiTThC+Lr4+kDPy/zcorAL5b8j6WS6qHBn67Eihg722qjuiwEw6lksPiRuhH2m2Iw6MU5YI8M7cTFZS5E6Cw6LPD7galLgwbimEdvFgu5tySpFryaHcoSNirpNu1E+uJmrvugw3OVzf6RPFVCnStXqYLhNyXeEqWQ1Mad/xOFqJdhnHGz6WDbnCokoPZ/gVZ9nz4rnKtehQKqLt2Wm36X0KGeSAlNNQLs5Gtdizu7IxVBSqGdxgX0QG09B+eVUOhkcmaQFbV5JPDrJnriHbI2xz4M6HBG+K3u7kUSUWGnrTAbbLAAjm7veSTHfjR+YFU45wQ4JI3vj22vYjyHtNpHstzjE5O+AcazmJ+G4gIDnT0k4CubFH4v32WHfespBrWSQKbHYPl4gnxbR89zyz1NbzkL1o0xpOXGrxuG6kzMV9p/N0ApYAJwhyycFG1E7kWWXzx0tahb9OchuotI1dSMcXwYI41VBnKSdqW/j0mWI0PfZ5q5iFs7nzpwgcjrhG0+0a7/FxC91XiKB0+JwqbHhnKX0KyYvaoAx4ogGRp+KAYzgcBAkcmyc55hHKWEEdm/Mj7sIXfaepy/pxl+WCCUzdyJd3/LKnmsjnPezNUHAHhjspiPzWuAKLvbmdq2ADsaLx7QKXjEQuMCzJcRdsKJgoXu123hT5eQKJ6VgzQGAu/gOquU7NdRTOu4J0xG+W0wuhdLsHfh4M/hJkiKPYBHdojLMdNoedKJa3rApBs9gF//YJ/UDDB4wNe8IjjSAtnzImDquyKvD8GMRUkFC//Vwnka+GIeiZOXjbBjYxtqV/K6J2b0Lz6dOdYt2hDNK9PC0xI4LK8uH2HVJHFY2DMmf9cqpgctivdL1ROD6J5EgAVZJrTUehVCf2Hj5O6eyy/+1/h377uFYOSxFusftMD4iA1qHdMh1aNQYRMRPOM/PHIxoVwVrEoZnOqdPFMnhPttA4s36mPEToqJCLiplyQmYTRJvphcDillnxGG9BmCG9eL9kNRSi9Vow6b8ad4qrdm63Af4QtLIxKTlVfi8/xhwGEDN5oeQywPIdWNkYwkYtahXT92IteEbARjPaObok0sokRULt4PnR8AS0cdWhmhsfK9Ucpo6xROj/JfbCtD6QGA2skRSppGAzp+eARfgSMqN2Khgqw6aS2Q/yO3UEklH5UdL7eAscxuob3pY5hqfA5cE4kyWtLMqEclMlRfCh1uQEHhT0Op6vEDcfj16aM1FCxw==';const _IH='742f62baf21398ac53987bbff69803b5fb20196db03b87b7582e642755e56e3e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
