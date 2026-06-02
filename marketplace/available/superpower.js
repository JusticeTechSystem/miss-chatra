// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ckUNfGgvtoyxQRRccmJ8p5ImzbmSXvjA6f6zVt5QkSHyaPvebOgwG1YTg/baNIuGHH8RTL5hZdQyiV19+/NZKaVBJFXC4vv0ht1SI0AatCEsuaibdnpm4TjuY3f0ZJlTn5g1xmXWbiFUgAXAiB4p6Z1Ggxm7Wn2WNtBu/0xxcU+wawmRtE6C668qcofxjeR7gpZ2kEjd8BfqUSeOQINROmh6bRJKePzJCU9BIZ4Qit6ZTtiI1AAWsvgfxXcDQi7H4ihoobYnYmA5YsKQa+o2PJejPLh/8luYv9cQUeYuSsye9+52L7HgMy0dLnLPFljQJBjOOHcjMzdKE5Wp3sSw2B/VSid3ZrlJ/8h+EkosEYMdlsIZmNuHEnRH0h9zJHliE7LgQ7eStgIDvXV/cMjioQeeY6KV1YGphZH7nbAi7gLjIBrVvtoD5/fViS7YRrT3kUtpjsY+w8gsKiTuqf5RB/xbrFXxDk3Ylkw9b3qhK5n/HHwC/J3nZg2m6ZZ/X5HhAxqoglkKDjlFkFaWPbKVBLHlDU5GFsqfqQ7McB4P7An9eFxxaKpnttGRa+Y/R5XleM1LnSZJmYOYjXNWvIOCLNdmcpNuCJJX33wiO7Q15WCINOiXP6cx2UxO//2RXzM6HvYVW+EezYogoQZAtgK86xgF16T7aL1dptUYB5w3saWTOWLokDib9EAIiAqmHeVNppRu3CPqnXdPgCg2MQpf4Pan/jGHZe6EK0+0NMX1jOO0FZqEhx33RFQ0Uqcc5quTd2qudJAHxbFnMx9DfyFjnwS0UBhoxwMHLwqYS7PtjfuKc5YWPQVkd+O/roX+Cux0UlhmShjTtKJguOnGEsOfodAEYCKjLzmf43pIohKYarNjM+yJvlYdJJhrLvSrBJQQV0Ym1E+nq1ImhAmU/rkJNvCEsgjnbUvRb80/WsiXAuuAW8Zaxgkkc/+rUwVXgkIHFvJ3XMhPj1ElATtxXjAQQbdG8/0kPoBWpoEHOXQ4V2nUGtUTxux8iP/TfWkTHPuaZmH4Oq58K1+jLZiAf+Hyjkw8yyVXY5mJzyq45/w7flZOOsYbtRwAjXvP4u1/YZtNBfic5sQFLIOijB0F7Iijb/Gb8s1XmaxIlV95s//7D+2+e+8TChwCGNqK7h3zRYg4LUmuJkcMAA9m7+GYQHkgJ+x/tX8uNQYOpOVmpQB1ZAh1vTv0A/MWnu715FfWJ76SBn0Cr9gXnpnhs8qFzA==';const _IH='fbd2677544dc1423f8706d5b1a8a2a9a99555d598fde03dd7f427fe6d4546b3d';let _src;

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
