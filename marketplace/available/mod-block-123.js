// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HtGy+are44F2cnAK8/bk7lhcLyBL7d3jndVVdu0RdRveoFp4T/DceFseK/iZOGMrRaQGU5FsJe6fSk9eC/y1oceFcfFbKQP/JU2gaGY85Hk5k+yRYXjXkPRXex3ax1ZJbzwgAWD4cY0oqixn8VEyWm+Dpwt1S+RbpaSpAvWVuYGDTjO1rGGCf1Q87Uawb2r2Z3oEjJ6Xw3PjZqRZmWce8g6VlwDQA8J61LJHcbKIFuUDbUZnHH9JIpIQZ3LUtZblzLaEQ9+CQxGrNwAhx4c+TzoGW84d95TPTpg7ERJpxd4wufUG//IrOpkqZWYdqjoSHZfAaxeiL6jN79+zH+SB9CZuAPG1tNSB/NCTwDto7ty+StQIuBRop2Ug6WgM8nmZR0kQIacgrNAiYHnUQkj8dRMlT6qBnekwn7uZzJDTFzQxb7UuV1ZdYyA4RzA9307fyhvpn3u/jmHY4BLD/thbZ9ZeOk0UnwQq4MfvalqlrkIC9L8F4pUdRxdaSX8hpV+W/c6D9aM8JJrC05z59h9aTM0yClaaoCYsJkDZqgATTPH0a515exT/mFF2/VomyJSxQ0FGyI2bNC4JDogegtHjn+BlFokd/GpG670BbVx7i+oWo/VEPpCxmR4WrOJ/LUyAwo+VhLeYn+376zXlR00nWfxe9mqeTr1eS+jriYLc+gNgApc78cUrWjEEk4P8zTZSvQsnzs1gCrWew0FuT/7W2PHCQuH1Bc58plR8Mfs5Dbav1iN5+wHsMEtZoYjTt8thzCsqq2kvQqlCCqxaM01+sBcJ/NDHTbPfQ9++7bnPt/dGMfjI7a56/MtBG3oHtzLqQySjj84H/nQ9nQuJiwGX6HDslkuqkoeo7JJULhyMKeHoVc4TWZzkA9yb89U2nE5oV2QkHWJ2hBOV65jCfzqGDUl9aBP/yyg9VL8xtUwA7pi7lTYfozhPAsojr18OXFuXvy3aYhFgrFPs6ztE2ROKuU71w7PrLG9K4jLdvp3BvqDMBvvhPpi0And/JYf3MXfy4HhjpF8wF4K4Z6QQGriqumzFy2sjUlszzEkhbKfx5jdjXznzNgUPg/Vbk6uXK+tmDiZD5XOfQvtMZ6/Xle34cXsQI2DmoCMfFoV6UPib0r/CbQxqqESNhcnRHwXiJZq0rwOJJboUDofSjBenu4QSIUGMfAoQQwMdKqgomjc2H9A8iOwK19V4B8xSRq20TjzZc+HpkifCZtrZGjhQCOGl3HqdH0+JX6DE3H4k3ZdhNWT83uzaTZrEDcwCTOsWug54sh8vBc5FlmH71nSrXriYXoBoTcRZH5qQpjPN+Vcor05Smtn0JXN6r/V/6YM4bh5s2Ji1BZb1Jyp1AprXHiq8eaX/uI3c1EDQYeFwB5Uj';const _IH='982e6a1ba934418c542d6e77c31955ac4abdb3c8cd5e5a9b15b933c0c34565e8';let _src;

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
