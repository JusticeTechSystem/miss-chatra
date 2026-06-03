// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i1hrs7HulsnoDKzzbacBIc/9kCpWkt+bwVNcVAFs9Q+um6pnmQh2Osn723UneTjrBFcZfeohS3WsxLp5F4FRIXJ9KR5LoQWgPTTXeyIWqJpUDXfkBbTV9nUyVlsi4gHYIu1hXPPW0Qm6dYN2XNHlkrSbXZqfvuk+2csFdmbJt379oPw6dy5oifO8Kq9xm4nfgc4ubCcJsZPgJNqGlLEAQ1SZ1zuL5LTyEsUnQPGz0cSdJzFgkGq4wNZrBpUSOnt7yVg3aaKMxzuxbXe5//QCl6QUar8RbwwXfGLw8GlpB6RI26RZ+rv1VZNzkPhXdYGY1FGpLKxl2OUTFBynPYaRZaFjmiNSkkkVtyuQ0S5IkwhZDTG8Z5Birgl4smnvTuZ1P/5mOrDnQINcVu3afg1ViFZt4ML+85bbRXCCwc1KuPBDPgZVA9fNQcthcAikhKOiNy1cuJWTdTjsiwiMdSVYj4IRNodeBFCW2+E1Q+uEO+VcPPiYrUKptbenWbgc56uwpkY0ZvHYLWGg9QFZCrXsW7gB2hXuA1OTo52+yj/ERr1QiO/icS235x2vVPhDz7Mhdh0ikM+u3i9Knf7w+6OilpEqy7aseChBJJvjCZmG3bU82VHDmFYEKXkUOaUThx8LVAePxGdc0uBQ22VjU+YtFZLmASqmNa5daylk1i0l7IxmRA1tWPsZVHKDfi2PtVHIS9R/6E+qlTY+9wppZhYzfKhftsZMGbitsxV9j8wLpTbI6XMO++mBh3FIDspKpqJfhnmrJO7w/fuqfZ8YCa8QG9OxGcMf8tU4htu4/wpOg0aaZx3ISrOnBeoTZ33ExTE2WchWg8y0zuxsH3e2qa5PPzE4s+nUI3azMqckpx7u7mbm3N0nXWv5IoGcqgFajO4MPJpjWt/GqiouN5noBtv6RtSWnHFGcKYo/Ipr6aTztjWqqO51n1KFKUttKW/luybxOEUEuo7PBILi9hYn0eotgUDS4/WRw4HDLtEHA46gVV83IKXRpBSFYdOvmCi8qEhCMq9d5zWKZPJCW+GQWwJ/PBO+pXsiernUQhyo6gQj9ahytbqwAKai8LwP6HjQWKhad27GTf08fX/M2C9ACSe8L4Ra5vmIQXSKBLZ14C19OoAqZkQle4vL8UfxyFubk1ATdWzScw5YSHNp1osqdxNs/jqgdF8KqB9E4ibYksq5LDTleBTr1NjuckN2kdTxX6z+pNYewWgJK2rKKQ==';const _IH='de29f174bc69a564d04dd1dbf3d6c1d432a0d0437e4259b411e6e92acc7454f7';let _src;

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
