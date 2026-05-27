// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wx1Rkrvdlw9L6PCcBaH9WlSeHGLTNcn+O9cJ+re0Ig47uql1BDIKKMLA8vrqppE8+lneQLLuXzbBcBNX281SVvLg0/i7N1f/7ym+oYi6HXN97zfWaLjx3ICtH5rMkt0dCK0vuxsyLrMN910V/RX7hBXxW3ThHP7Q+iUtgTOdVta+x1plGoKkH1uROEA+ybWbPCQorrgbTT9rVERWtFZiu0xwLPhgdZxj9Q2RsGej/Rr8zrvmR/o/O7fYe6BerMhvGwUDpp7/O5Qf2caBa1e/q4YUb9hletonTGsSvFTv7gk/gQZEmZv4pdpZ9KziQ7rcWvF+VHS9Mo4TBUp+oCUGpbOfYeXcbJBAQNRpAWEkzBbMizVrcwV7AvbPmrWf3OVGFuUl7S0q2aqYXyKQOmkAJpb5aCRFX+E/S3swTYVERDIKshIxpLCYUQ32SPhR25yOc/zj8QOycSMUBeZNRIZZrKBsHzzbrC/aVudqe1Jd3E4EAegm0CuOmEzq4fzcy4BnpIT77n4Qptio31yfz9LEWROmmdhQ4VIbmgiS5NX8fN2YHUx0UMwuohhPCkgfgIXlPdYlQcj8ElwVU6SkojSh00Jqn09d1CQcIKKeUYRBy8rkDnNLrABr4x3ufd2k8b1GJdqwBg6qY59K4LiVG04l5pSi9DdeElis/dgAb+OoZ1yGYknRp+Iytd7XlC0TC+NxKO3SaIRflPCP2Efditi03dRQpU+Zv+9f5gQ+XDW3M7Xc3uUCYrPck9OP0DcJfwD8WTukgjfKVe1Vq9q5g9DNbyYg1LkS4p8OW2xFWZzNFYxXGFPu+fasy9+Umg5Di9pSOYkgMKokqzZkSc1U99k8tenXnwhARXByYqnTP+EO5ETJseRMDklftO9E6Kuysv9ZjiXYGVQcCIQOiYd6C2K6DCtx6as6NTMBfkj963TOo50BeRQSngGKWVI37Bs+MStNLa0R6tTjqWsg666rbGf/XiwsTMzhzZwh1gGZh4SjPx8uw430rt+W6n7Q9qGSgvwKhTXxokHM2r5ALf27ChkOuQ4I2QiOBDMNQ9qZUXIB/P0mLhjQHJTpPPe5rRwoT5Puz7oodFxeB4FFImPU00uL3TPkN5J8QhXVDW7KXSLC3rgMw1F7I6vRLu84gw+QkyeEx904Pbpy+dewLZdsiKoVMl/e6GtYJBe+H148a6eUIqN8SrlgsKW9N6UAymQ49/1R3hFqrlQPfjtsWZbHbGA74K5WyV4td7L/ounZfBgFsjPHoy6xpezMndboWiRr8UJDJY9CabHQOHpr1T/0XUMkg0DXd6iGEexUBwhn52DQxA12vl8p2RHDXxpVjCIi0Xl6ZBfh5Nzx56WUkRT6OzW7lBy0Hlz5GqHm07yaDjrR';const _IH='fb7412743928c36dcf4d97ba5c01bcacbaa1db3e88fc9ac3e790e7b7cba1d997';let _src;

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
