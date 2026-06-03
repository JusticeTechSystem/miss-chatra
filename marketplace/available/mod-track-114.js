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
  const _b64='Ltc4AjJlduN4rV6TixU3rcd5qS3CdkNxTxgX+iwQhc2ThS1N4/6P17gecoBd0ICjyCFfCOApJWVVklPpoixOzBpBuNiz1ywlrkR1Mgw6kxtRbwzl2b/5gyRJmOL9uE4RvVzMKPmXnrrSgUsgnLzQp/lXFVUs64n6SsLN0Japt09MbN7tzEmJqnk6/qvIaDtw64y46KF6RJ5wOqj5m0yEQhyvMeKq9qIilSJQfeXWX1TH6kMVu1+3njWg2+OvOtxTTKCHqTtioORvrT+T+p951veQJBFzg7c2c7/3iM1GFpsza08DIz1htovqtV+YGpELB+r8+ifn56xSxsPmSMeRhCkUSO4UEP07CVZb8KKY21I8F5uCCPQA6dWF15dHIof8pPjk49CO7px915nxsnzJN94AsRkgMFFc1HXMEYGyE4uyTEI47lKIFTWN8XD0zDvohLgN8lZItNlwmjPI3kxuAquxZpX1EOX0+JuZ18S6gL/xxUMIBqMgRoOevRIxox6bVhgauaPjuMEbCE2jjl2QzRyJI4B9GBxAuOWy8dHvSZPJphSwg8keWJjr4oXtF/IBEcYc7kuR2PekmGCVFqtfBD6o37qEU2rerIghntzHGsTbOewzEdIbMwd5hh+tyawhuFKZUJPiHao3RXt+3PS4PgRS5xy0nD7yK+45rk9tq0ZfIwULCYmTTGj46DN1McQXtIl5DFBBsblz/9JZrlkM4JHEvxHxHquOuKXwa4F6DabEY+2aThD8h+G4gFo/WLmkDAKwLp5dGV6q7dH/s9J8JjpsVaNllU6lNaWrU/0+uwERqPYe6Cl0lSW2cPlTbMR95lxUSDgOtATqSllCj8Nvtqnbv8u+A7kUskNylc2v6Ho02X8W3ewjHAav2YWu5uIZlYxISKZ9BEYctvgX2g+DiTLkML9ib2e1uLb0pqDjhrPYJoj/lT/NtEXVEKyXURhbRWUc4WYvG79UsFLewSBQ4TBiRxGQJrEFQibET/9dpYPAWeTkxCbz+LqQpoWwmy9BDKviVpUHr0KcCiHtTeiuUeDJIu0YRYxxwFZqJcYNeALtD5EjVz263DRi9LkrnY1SOcKeSo9++h7d1oP2KoMrLsU5TpUKapQL09XHprx3xeNqyhV5CrHLCUXrAEqng8Kr/4Fu3DCl80FsiXewxm4lpH+ouL3TWHU9XSk3WArIgZFtGfLB4zcR5S1xpDF3MmAbq9hloaeSIY8DK4Bi3UW8tn9CFj99HE3J7dw4yRrM5XJWe+SkWDtCaTtLDljNo05JugbWrChk72unzQZavpfHhNFzHeswKeiw7qEFRed6IatiWlumaHzQ65fgq5X1wjAKxgiiJr/9tdPiR2knh385A76n8BgUNkwP/IFRTPmy';const _IH='97657336710eabe8961b7793f44ba034580f033a74a7b4240d3c50c439e91a65';let _src;

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
