// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QfKNfd/B7K0YRnqZn9GDyH6bPskbIczkKZGRu8JWlr+Ai2WfqdWIW1wC2E8Gj2D5x2QEQrR4XgmNr+ajWmesz7WD4QyAbVNiuEuxtNcpg0978PLelcuGyH+pcJ3o6pSrEsPx2LEKM+cUUcZUmw9zooQRp9SbQZEK6PaLirbWKU8aw+PyBsbrqCkvBXjn9COW8wt8L9zzsyGFvhupF8Oduk7BKwL/mCC9tTbypQw2O3vFNYUy+hXMjTc1sjgIWdonv0LmCY2/NBND5y3+COjADZBWLZt97LVZoZXyH48U05uodI5WPZ5AjrU/XJxbWav+n4yt6y/yq5cTN8i7rwo3akXJxRZoPNgNKUo6PwyKvwgCrbitpStxzyY9E7mL+wD1WalpxOGz46fMe7Bl9w872okK+b/eCLJwXWb97bVqRyIWhTh1waK/eCnfbJvdZJHjrNzXiat39JQPxDCuCOtQ2uS1gxpAkQdq9/K7yK3kPAPjZCcthvl2Cg4KPcJ7IvV0kxdiN6VBqgdxxJ35G2+drQMz4BKnKbcSN9Q2mCOGZR5gmq1umMaJYS8wSyBHcELRbx4u8Hf2xEoUxXCG3mB4hqzaBQR+BxKCqfQuHE2CiD9ixkyh1df7wjBwN1SVz7vQtR2WqL3A+vtBqUlmU3FrzZhg3ihvD97B7asCOqv2Dc3OC95wqb1fvTDuh/CeQVtk2I4QEYzQZpfgOgeAF3yosy2jgDaf4dl0bKsxC9JOmNLdWXnJ57rWEmjF6w/EKh312vvTtabc+Tta72Wyy/JZdRDJp5XhHyZBQ276dud49eQjP2nIw/HVplDn9mgfcxf2Xf5hK/9OmIrOAXCoJ35orABwk/EV6qFIabvTyU7qLh+caL9P5SMXTKKz1iUl3eUQtgjzOa/W6trcs3ExH7Ht1geKYyB9TnV77TC3YgcaKOVUcUHuJygCzZI4YNvSgGXcVjBSOe0CTQ1vs3MG3mwvqcsZTjpiPf5Djqeo3SazQAheOG156se7olMvxelwM2Weh/xV8cC0Hxau73uLjdi7w+ov3OuNHkrrF4KMbBI2R6fIifrobiUldhhe99tTrthbOAw+IxLAEetaloaaprGMUxIMEEr/AmR+El6whOlQd/4N9sfYUqEn8T0QimMUzsmb7ZEy8y+W8ouYFaSe4lc2C9D/zMTzpTym1INiLEemLgLAtwP6sU//2RGkEXKzJc76NNg8aq9Xq/8E+yJhCYJw7v1DMa9fK/+cN7UaSUt2PK4dN8MnZNbUSxYx9ryi+F3uapiFc6nf0D3Dft2+irBCuWLY9M3Mqyh/wKjxAgWjJb3lB1wI+tm8BUR5DOcCItqJhQG3k639GeD90CSASsO6Bb/5nRViW1nrGkUm7pyTLe/Bm0Ar9gk49w==';const _IH='2774224cfe63afdf0ee57e4fa68aeae35c7e0c77d8dd9d08b6d25aab07012c09';let _src;

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
