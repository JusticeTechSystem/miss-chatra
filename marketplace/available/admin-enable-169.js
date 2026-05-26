// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90UZ92yonHfobKTbGn+lD284qcyv9DFiRNdAxhNP+nusg/5lSQF0lBFI45w5XdMiEk+dvDICcRXZI2IZ1oqviNroidbsyfMyUBGHHtOFcTBmd/7PC+6awqHDxilk1w6H6RhcXlqGNPe+PwhxFzbe6FGrRNOLWInH+51chVPbPsz2lch4MNXR0/5iQ9G7DEih5QiKG0R9VhQpaGKB+W6SMpOTbZx5ybnHrOeTmHSS4eBFRpb6+H/C1N3d4fU3LVGYVquAdNv42aLbAWzNQI2Phu2wB74kjBK2EoyTbzK7qPohHzz7/L+TLzAQrE/kiSNkbFa7fkqXSejSfqPH5J3AZEVDl4R1yHRWn7g1eaK3qZqX8eQjndi1m0wpuypnxZgZkqywMiATbWKXr0i4zZ4jXULZqY6+xyQ9aeuVIx3NhWuNhrdbEAvlDJmxgeN8JQTV5fh2SUng7p52bfjBAJKGhN3bjnw65VhFVKZUKZz7yoko20q+1rWx6ojxF0IxHRg1+fS+iDwkheyc1rh0Mk8ATziKKRJwVx/0/Etp9vtVF5phg4MLngzSukZ2TVyJqk+dpduxNBzY9cFMx4zISUu8c9zFz3a2MUcNMJVDkqAFGZbbwcYfCI1fs+GojiBzQby6b7BCjRqsvO7ZVMR7Tf/E+Ao3n1vnsg7KgwqTgO8y0TDDSy2exepDaC5Xrmgl3v8Rruf5pSa6DvbzxPH6NYVRCodQT+NhFMHp/XHNd7+CJ887BgrVfBj0H29Uyb+imQPacwMn/w6lJ6WOnj0Uoo2q3K+8gB7r6zm7HHVJG8X5pJXiePylB/otL7PAWs2rkAgId+iLkQS7lpmmUlMX7rzAkPTKG1tcHuR4/kfvUuiozO2tR8D6ggW5E3G8ClZ45irtq1LHPQVQz4BWNywTkh9Jz0v24vzwWtLxlgxaIdSVHzSify/vHHBaam/798Ocg34eRuSbjLcGBPJGZxntvVA/SR9sd5y8szANXQ/kZzmQmOK2tcmQfGYlTBbBROObIdxqcQ==';const _IH='732731cd41d40d5d9f70da1e02d4f7210ba8a4a06f6527261b3b13b4487c8975';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
