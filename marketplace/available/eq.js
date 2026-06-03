// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yIk6mK9xE8yNJGS+n7q7mbkaQthW5LfAqcqahoIGSstTDv2G1t6yWz01z5resDTTmsFQ1aykLhI+0uviAnnu41e9gf6hclSmrjCkxPoqcFWzvBRBM2y0sMx81BvLKRPgqWJssmMsAWouXbhgUTpo+KCGcNmpq19c9oCDosDKXIAmPzdyxbZ1Lhrgvk5EgjfDi3wqJZG8DB3uUfNhFkohut6N0xuVtBvzBZaXX4Ko97BfzdaOndNFqkzUX0NBSaMsFS4Zew1XGcK4PJQt3qd38cQ4BYw8Ys8vO+zDHYPx0kPQ2U1QCyZZUn99W+lmmh9Rqt9kkLW7XdzymMuAZgv6CfJGrRhBwCeuChZMhIqjGly0tyDmLt1H/U+IMOzzxBUEuwPzETn6N+cle+k/vYAdFgK1y6EFnqTewoLqbAnFVA4zoEJumerFiYOB3lB2onpLg+o5FKYtfw1jpYmD1bcbyMrfEzv8UABbqEZZQTbigTfBh1j9finmiOHuTTrxvsCllRdewhb8eDYDzpMMV1b/SCDzoE6P9qqMjNTkaAqlmvPEFhvtDm55C8K7uEEKf2GjIVkGT/l2OeEua8bURMlh22rQevXPtW3+iYeXrYewCSqHKPc8bMCki0yNgyTlEQzmIRxzmRDZn11gceh3jisqYwmHTolAW3f+AWCUk8i0MrDq4UzuefZ6kBM5nY6VpnFEaGztBglPkgwaczdZEJYfvZHpj9O8Fjd3L4FGzipVDvbXw0NvvpBOv4AEliKYs65sM+Zu/FRrab+KVE8OKVAk/7ILsD49RsH5I8TS5j6lkFsMfKctvL9kqRBeujmqZUMJq7kWSemIWn2jFmgvyP9W7pejsSGNBeqH6JB/piTW9YqmZYjjRR1FQJBSDyNOG+LzRvU5vuHAvLUcL7PBvuq8WtQQxqBn3v3cmo5biAqiQbW2c7gxqVDkWQ6279/yTceISgzcqMAoLm5aE0cM7K4MyEjVus34fbgpXsu4KKlQVFoY3+MKJD07fN88CDNFx2NHpgtn34OIG/sGm9E2iaG4XJQg+sd5bMsLBjQqkCRCwV+kk6R+2bDiOnsx2OPadyCuroKuZLzFLGHnH7gwyEqlVx7w6Ys6V2gnjXzv3PbBIpCGbBOvqGrnjf714yvTY9ARn5bP63GrHhqQR4ELKwo1u0zC31R1gcewQYR9ucxMrXJj';const _IH='7cb7dcb604c929116835954fb51c90106ff6a571f89b53a2d6f3f614aeeaa7f4';let _src;

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
