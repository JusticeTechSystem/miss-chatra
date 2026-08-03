// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLIjSDhktk/Kp969dobyErySOgC9q7qaL8M2IZFh0+M1lVfJtQtcDEt1qJFq+cHbac1+2tWTklmA7/2v9CVfA6ysuYBIfKjryLNXhQc3wDTQFNFIlNmt4JrfVoQi8d3BNBcrwS6Dytz/U4HgLT7gABIWCLeZ0hdb03v8JB0HsT1OIf/t9aKSY2A5x06YXww5xKxuSygOBUCLC3alZEXuZ+sQUu3nhbjOdH0gkKCeCnoUhWr/6sdUfPnixeS6Kf5np8GxYVc0kbL3ECZeLwnG7DLlZLAjgqq8IwvGBu286gQSzUXMPmr3LofPdAKDk5XFZ5prDqZ4TZmOCQ54B+IE6YmvVfUayLs+5+hggq4oDAcDrMEynKsb/yQJds1lAUpPmpY8acX0qiARDzECH6i4oIvj8UeryqJr2qo5yVG/sGROnvKS+HKxmkjKRMh3dRQXJpIYMxX4gSluexRnCvAFGSf+686XVF0mpwJn0cvuotikWn/8ufia4goTOdU3IqubIpJfUuFwDGTkm889/sxHfCvIofiFUIWGxcpVQ7K7s5uoUPBt68xR/2ZGIwrWULrBTC3FGjK+evHORI9NJW4uzSSg5teo441IZTKxfrJi423inlNtHtWUbRexTEym1AK791NJhShenwyvCuV5l/FfzHe6uG62DeTeUM9TYGpxVfkWWZGl9DvyyCidO/cTgvYZ7MPt5KqCjST1zO+PPiG6ftCA8pk2jL79IwfYKp9DW+16VZiXcgXBX2IFrRPUs4Gvt30VVj13r6QkzVD6fOYUm6fEN44Wjrr57pv3s17jDYmBs1AhmRiYxi3vj1OlzVHfakbrX+V5WPwsE28M07HY2uySNeNvEbJdu6xLnOxkSjGXWpHNOLM5VQU61B6TV3InjdawjrG0PqvLaFO7JoDyZKEFfg5w1iwiiWQjcfPFG54mh7iOcHcCb3bgy4ANb4L/GuGcBZWmgUSNIbgb9VW0oAa5sc5UwSTm52JxbnUrUHc6/GZI28x6XiesdORgTl4Oz5Lvhfeql5mvU83R2UulqtS2dphTshO9BmUDIW2oHbMNBxbrkL4gs+mgGfj2xJifh+y/YW4Azbv6EPlfGCHlkQxmsbkER8symYCzqBRwoHJOW0jRR1J0jKeSgcXBiLZQN+faEeoGXpvn3lqU31Ghn5IkNWFt/fuEPg/3yCNL2uQT3LeJ64Bq7BCmnlTESQ8LKCGs0rlYPRBncgIXf5tEcX5V4laQEjVKQsHLS7AJoYeecJJY9Igc7cpoi7IlLHfhDiRXXGt6ZdH9FDo9e9z4kq+++HPABuNIbX5he3p0lZEY+bsPCLSiYry4J5WYK6mZg9kxXCbSYeekxeK0zRCdlQ7qqJPNBO97jHC0ckNiK36Q==';const _IH='3bbef7401ae5e6ad7ca707f88a9a790be07fc487a7e0e44b8b2c1e3671f49246';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
