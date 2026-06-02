// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/dZYpspzP4nzWn+Y1Ux0fDUh1geAeKRojDpy1ORajxUuqBSCNA8f0mH3n/BnoruPy+kxwjpHSCthJkHip2jfx2HMod7BPvUG/YvI7UGgZQ1G/FYNBGdMU2bhWYVpUWMYtpIaUAHpytfUYnPKzIJsg6zpT3pg3LB97uHxHhfDNUEA72MJ8Yb4WIrdc4XChX/T4r+Hcl3yfaFa4mxDzq8BuOi8q1Q95ybWAAYc4OfMb1acvdIMnD+cmFSq2KBwcWHaSPWtqVB5BnePsk/3a1gpQN1odgZ0JCU5IvD6nAdPM5pm+sokI0s4DiQ4QBBSyC7cuhzWrAmaBtnsD5HN16xhKBD+1oUEFFAac26Xv11qDrTzahD0B3biDB+TlSmv/pbdu5e41NZ4yCns5Pbhttr+3ztSyp3O1HKrPiRObzmwthdKzyoS9SQ1ikMLq5QoG48iKCrm8BI2MJl+mG6XJ8bWgQcIItnh03a67W+3J/Y8+PCYEfV1w390IC8QU00Qs8xowqYIGYC4zZInTX+pCCWB5cokpRPzkog4CwVm2ENuqaEY1GPHZldSNYfsfrpKEF8qH2DwyPzXcBi8WpByCMJEVwS1/zWH4FGgjw6ecGJuPAYXEjtMNMuUvwlbU3lp9seVedxsTcIJACi8NrEpJLTho43UtEnCuAp1gNodp35IJNjRTrHv9yxy9Q5Xa+gr4t8vBegvbP0HMVsqxX3gLFDI4i8O9yhVr4DtdYBnfZ7KYAwSOKS9mBhA1jA3UcgBnsxQ4ESNEL008xOvTbZ9STfsmOcehXGu5q77uEtZZHV/WbZJWBL2dnyFJWvrZZShsuvdKA3T83CU3QotIlU5bXKQ/rRVcMehaJkG3Z3IcokcsFO4Qi7yWgXWI0R685l4/JJfVYB9K7l9WT3BIhRdZVZPklcyslLTrkSxQwyqlWDezg7FRiWmCrnq3Lpgy21nw71uVH1I4gAfGYt6Km56m+Ne/0hGVIa6IIMYeHwxKUR0H6G1Ez/Swk2n4XHz0MowGS19o0vtYrUBvQqj/mF0QKBGMhptpArhwJQOXyLJTlvWIWGWN5OwhngN22zts0Mo/p8UmhE0CrZiv0Ngrtdlx3pyZUc1YZngac+aOr1wNbdSsAYktSfwksh71kqIlHarNa/cdU592pd5UJVyAiRYhjLttEdwVXufnRrdgljnp2rJ30ygEANBhGCmQvNJBcVtomcWsMXh3cLjKepHpj+/kZnMgmHwZsoNa80412Z2LA==';const _IH='1f08429794f028b2bc0babc560677b0cd46027725cda30074d482412917e2573';let _src;

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
