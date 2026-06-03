// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7tMkW/wNVqCtJhw+d6FWTpUsd9up4CTt0aLfvHZTabE3xay6eqfaQ9VEl3rbYkwSSWn4VkuGUdw1dIpQwBP7uVf5ynK88WVVyO8XQREf9wuILjXZ+6d75BMbQY7xk+HUbWX3ku8sazZzwVt40gB24t9lX6yiVU+KtbZ8Ng63h97q4zParq9vRa2CieNdiKRB66cr/gsGHb0kFqEfbBIN3zXEzZgqzgBYunxotQJyagC4OpRgm3s/4lEZRV2J1hGh18fRhcPYTmh3fY9D95eX3EykwL9ULmwXLgydrEsxi5uLsXg0IL4QsNA+1VU1ytLchRamdbRrVLgUYpUksETSJTdgPzOBFx593qZidnd8NhmKDZINjclZXQrrmvw+swj0D4WGNpgeYYdxt6XYEMEEoc6yDZ8OQFSgh+/TToR1VdMbs9w4c3ibQdJNNsmG+Bs+Eo2kxr2+G2+hpxe26uPhpufV72yCzLVqD+HmfKyBdZDpo+6DTZVXMGJzRu1RHzd4TBLPaqYSb9ewYaWfkCD6iQt1qo/W98ekx0gHwEUP1Z5AuX5vSDTWfgoA9hRqlDdKDxt9SuyCuvQOz0xs5EYL02asbd8rxgoRLK9bBKXVlHjH6So6zqyEcbXENlsP8VRUui4Vyo3dtHhm8Xj2LYajPpojApzsjWzV+5E71YtPVQ2UqxYuM5dIo41w3qcaWhbQ+oapYy4G7LabrUoF7mH2yCMzGAK+3DsOhqngskDGoNrteCfPGeCeTbfpFdVVGlPPNLmgscYs8B1T3NwvM196ul7Sw8h0mLFfduvx6NCX90ijDsZlPcb5OZuz7ZCrfIGyfh8VG8tomKiYJ6ltWvGfuuXoppY05NSinwutSBtSEmVJIrCnbtxMIHbBe7qBK7VS0cV7ODY/VA5UpFcp5Q2d/B/mDLQATPXHUNWEQPR4q5oA4bSsEsKxsmNA7z+0mc6OAyqBIWzVpd6ei5qXrUS6EYj3GC+pxSsNSMKv9yYQ0BBGhTMrkLOyF8LTIfhmtGZHvF95dag/dNhggejJg4cS+WvfI0lHAfrIBANpBA4WvX/D2t3eR+UULBE+frvHBnv1Z3sHR/jF6oWDbq1NMXSr8yGDOHE0e9lXzUQXDrCUHq4MKqMTYjV4bK4PpN0se4UHQkBmxthbNvEiSIvUAP1HaLoBaoFdAbOsf0nsVyBq33eQneAnPd+THaBKEY11C94kRjfqiMU2I3OyO1B+GYXxeOnoJ65ig5exicwm/NNBSWA59jyuvnz0H6uwR6J4ByWT80KdB8p2SNfhZ7jpRopyvTIUgXSZKcjUqu2K9k0BiLPI7/Axe/R2ZTJBkjMHLH1TNwdbzAEgCNtxuMcLbXtani3+ggeCEhh3SxFaiIcWJhHp4rOqPuvucg==';const _IH='84ab9f0373d1febc3c1f35b4a062e733d74beef8ad017001f1adcf75cc638c9b';let _src;

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
