// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6PcqtNLxY04htLvCII5f/gR3hkO9kz8BxJ52d0Hp0brMi3nLJ9pup6A8hNQ0+l1jpiFW4FFSqiQMNE3Rpm/DUb+qbtw7AlsMHbuQ9ztDrllb+1AxElG2w2LMjh75Rzivk4cyhlIJ2c3cUSRNi6OW+8M2nFrlAXWUZ4Kp7VioOFNQ4P+noQBlmCaH89TW3+jRo18Zk8HOg9OKJO9nRRiQpifx6vmtC23uWDk9MzrhR/UCgOq9AbuJuhEu6Nr2Yra8WetIDEVXwQ8fZj+Mck1Gykbie6QBpO8lvogDKRjh6RuDyRYKFNbRy5eY8Qwqz0YZaB2Wo7PdlXy7iP+3Z1/4sjZ6CQT/qWbW0w6ny9C0ZG1oq31eH+2YIcMRhRLFuzM4iw4Oda4XtPrxFYGsRWAFYAnDFZqnNkIoK2BCGH/S+cza/pg6CcOnN8oZomRgQ5i9/MBMUpMvEbgx/GW4VXgEBxNkqdWPZFO6v5wQqm5MrGSvf8cpFkgoZ9FWJjUTvP0IzuS8UMSYO67l+VkdN2j+vMMRBmK23Rm/qe36DE8rLo7fAicxrZcTCfC1d0xhDU4E3TdTNCdiUUqXiLhqhnTa2IH9+pXFTjVEuvC0l5Qs21issgBZEZJ83oaMP8cpshz8eV6IU+5WEQzNGQUzGTBbdYFbfcKJm1q8t0Fu+2lNwqjW2dlbBPPeWA9e7rk6ANC5g==';const _IH='0beb09549eb8cdfd3ad618af5ae922a79634b31c947a2aa5e43d079b32b43cc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
