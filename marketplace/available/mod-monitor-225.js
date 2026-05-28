// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5aidIT0spAGsJX+Fy9J/Vy37E4SspVLmJXq3sRnZI6bCkPNf4MR/8Fmjj9gPLpXCFhZ57DT2PzlN2QqDjjxoj13TOCuxBoJajcY6GVYaDaOpEjy9J6fAX9IHkdYXusLAKsq4f0CxPUwD4loZAUfWOgpZk5rsxQEfUGsVGjR2V6EkxeS8LE4DiVbWOY46ntO4MiT1GjugM4GZ58GjIjLCB0nEdhk+L30BRCcVL8Mv/6VpUOoLcwo1ago17fcFd5SI9LqjO6KUIjd7DFto+2jOdkiqU02tHacyvL+5+byrWmO4ANahPvCqOy5pDQ/xsSV9w1php79zT7BUvTr9Yc8mctl1zHmNu8Q0GboZampvjOSPKbh+F/CBp8ezb89WZAgbqBsoLSm5YHiaBR7ppnHt+nbTyKNr2PklY32d7ZyPf40Ni1Pag/2koVY+dei3lv+PQ/IKAWj5fd8vrz7aDwwkjUTqNOVDB2WtwnIgjM3tdGwCpvD3hWbTJLrwbewiTzPs4qeyoZRoWlmOJD9J/TWU5zIE93zH/5EEs7VzXdTECBzF2P+QiIeta3BjpdfZ2PC/c8xOR5ivlRRrEZ8+wOjiIpadG7Q5xUPG25CqFP0JeaT8JNvfqT1GoQPssfPVQND+YTeN3uOiZkeljjNbV6gDeA21Y4DYHFeQHIx95S6PAbn3tUcVKQB/GCGW8mL0NJexMWCiiI7pGjyqfW7v8T1YZu4knC9wqC4xJDmVquelA4KCr59oV1PK2wpQY94D16tpdwCS1RDloiF8dxPlj05geEEIj9kiLPE6qa+ne8qFz2+x6Vf5dVAJ41C5XRp8ZRfuMkWIotMl/Cz4Oc9xzswDbonX83XPq3N8FBnk/UfmFxyNsskiQRGRB5pKKgn1HxD6mO477LDhEm11gyZQB7Qyu2RsV4eLTGemHNi+DnwjrtbAp8yI+ZnULl6IQHZu431PSgVAfxsU9xkm6qS0eiDBlWl64ePpqQbS5CaU3HziPHOQZV4tuJtMNyOkJ0JL9PEw2YmowqJX8l7zmZp3EZyzumdVJWpk/c0ZiKiLOQb14L248FUqPQeRfK7AEN0Qjn/7OJI4jD7dhfCc5Zw9eM043pkNrSgfJNslWJwCUbf8GKzmMcHg/Cxq3yfdyALy7SqMOhK72P5a2m2XaO4+o0Paap/SAl08mS9xx2e3ABSnUjqUYOjw/0Gax4mpfG+w/kDerM0KxcyzkmNPd+BIq+NbfIEuhaPfknGbJUsOFJ54Slhz162t114SALa8D1myXyr4zLWO1bTfyCxB0QAR80TIftg4EwU3zSCCAe2dviFW90cxtVXrdbrTo+Txjp7wcNf1jeh/xsftLFmyv8CIblndSY2GE/vYYXlwqvihj4Wzce3RDYUzewzMCQJXkFmO4IMk1Ck=';const _IH='7540dbfbeb40fa8e6eb363436ce460b421ef619c4462abbfb14019507e5eccad';let _src;

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
