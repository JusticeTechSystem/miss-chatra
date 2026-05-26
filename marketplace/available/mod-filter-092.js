// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cq/RbJtZjYAlsK9pD52v26HrQPmlflbLpDccViaxuI98noPeSaJN9UvjGkfzM/LjeBusFpoa8xfaPeB7FG2v4RTYNAs1+9gqDMqy2n1kDwec97414Mzhgd2QkCCaBQflr3Ob8qsjDJwGQKXXAXKkyX2R1SFNgppV7eU5mHkzJ/5I4TrM364ZnJw+qW5A+YBJPqRyauGqwZ6jbFzDtSvcQeJhvLwfYMbKgW3WkoH8LK1SnLg1bSLjIEjwjpdTkoDgKpzS5G4gxh5tDGauiGAGH+3fo0inbOKCdXttCY0/kugO18VzYh4vnLn4fg4IQiWCzjYp5KRz24o3ZxzTDi7LLYLdDw68YodnqK6j8p+9D+62obZkclPo7/0iaM2M8b513kefNxIEmhV81SLzSD1ru4WvJTH54rErzsnL317LuwSCwGbK1t7LvVQJ23PYXfYNGMgD2ES3t2WM1NAnr2eznK3zXh1Y3pWTN9fKAW1Jdxg9P7WgP/LyyzDU8WYLCgx0qp7yvt+k3p7JjkaVVNxHWH0dyAgeHakw7P71D+wXNjiltqg8h6EFUTM0KyJhliZVAyUeqdKarYaxZYMiBhJRjgA0YScCvPT+Kzj6YQZC7WfNSVMKIzKyTFpYnbdCFx7YRT3uHv9TWSd2KxU9nh4nRqG3XGGTKsE4HaDwsOY4G1rsxaNgN2BAHuU+eCp5MhHQVPs7ht+AIVRWuN042RfcGu1xN/tMsjO2+amBWe07pnwygSv8YxA4bvyH73RZUlAFmCi//sSRceN8tO4DnoGzMl3hiPE8M8VK7U8UB0bWD8acC2AmfjXSgLAugafQ14dMIBwQ00GULNf1Em1NCbKGvhHJjVggX/NonJMBDklSoC9Be7JE/6vZYPIA96JcEX9Gf8KvLHByV9AtRpoo8Scrt7FAdLhByJIXWdsIXmWdqjzs9SIhGtreMFCDOyT2oLSMLbPseEYPBJiet0V+A/YKMI+PWmVT8cvpgQnwvlT7xiEqaHmFbYMyxoL9cWTyIQUACUaC95gnsRRed0GZoe7CElUBCniSTG5mWI7hCJXy0Nb9iz1bNrCciJL/aUSmvK+J8w9xUy8X9nlNN2nL1nkBm0c21kDOn3yFnyrYh2MUIzNSG/m6TIi57ksX44Wk7U1+TgCGs639y07I75zQ0Zn52WTSJ9ukpvpWtK3GR4z8goPTcCwcL32ORYFLraoM1Fm8QORVwokTmk1oczKuW2ZG9Qc7TnT/tdu1zua1NhP5nGa7nXyiHvJeI78Kz4EgEAOBhUbAdSjmqGlglgNbqml5WlQ3fy82NcEyIpv5+eiEbnaQvVJz3Ol+YEi/9nsN4ORH5gCNaeyuIH1nfkd+V4Olt0qkkV1aun1dekkIW0vbmFDKnr4=';const _IH='9fe28fbc668d4bf9abd58dac3a52576d03a6b850d44ffae20b14f13e16e4cec8';let _src;

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
