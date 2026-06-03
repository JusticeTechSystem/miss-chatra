// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='APqdfdPt3JLYdgLrCXZFxpsUJdxOnefQQBtbH9rDK4nVFxOjhKs+wI9Xp58LIlTqQs0xHLVtNHl7mJEim/PDoKWgaggTk4MFP7oNiMnPQqh7kxxWc01ILdjIk8YpOuH9K5G5YWzB0mCUC0+xC+3qjP7KKL7rAN71uIYfURzXJYRvl8UHHZ99D5VPq82wSGeHykh2zPh+uWrUFzHvfogaR2cjS1MfS/OfQHZPxbSWu0IJjua7nL7ESY+qP1D+aTqrmVBIhh3b7iB2ntrQJdN2N3DNAkdOZbAV44jp5g3WBR5EjshFIfB+ub3E4wBGJN10f3saNY2L/BBBqWGAzanQpGr38Ir7vnOEdgHXn4nt2ZUsnGTyng0qyhRa5mDc3hNwgj3zJsczH+LstkZO9+aU0nIhD2jpbTovvI9vy6qZPj7bQFXxY2NEvzKF2HjpDDrbNI/lacT6y7qsQMU319OMmc2uQEEMv7Iy4AGageFPdcy2skgdRKqSWqqlDwc2VfPv3aZKEL4u/Si/JeX+6kyqhD9M3y/y2zqBd85hSvNdb1otuHPCnRWugzPCNM1I6Azzpua/Yv34St7bvod9z+Oh1iVhPtEL6DZLbDZYMjBMbZ3cGiUDmWJaOkbP9+M72699bi6LLZCw5PXLyp36ds1cVjpZMH1prKjFIHLMw4IXc0jGYWP/WJkGP2doiP1m+Rrwfjg5KugE44y0DAmbXx0G+sTUA34gAUs4AbBk4PKbwQPTHjbKVmpFf4qPVg48rVGSU6x3OQvSn6K+GalUn9mlhjzQJRJqvudUC7KK+ICmlq/E4PfptOqucYc7XTHvK6d7/pHsWgn0MA11YQ1IeVSdUTWuhDZbhMx0XP7iYz6tIq0BXpyyAcKbnRuZBieI7r29T3sQpCntnr3iOOKbMg9Nk5CWg2LEJWnfAFJZVB1WGO4pUQJ1Io3YofCJ1QceZQnqBhLjkLys5Rqwr1mEtW0jG3/4TwrADBBv8Ldn6dRe7zML/mcWOhvYT3lgPTsdlKohnO0UNmYzUF0GzzJaI7JyIuzZXOc67sPJs2hnop/pTA+UeV8CQXzdT7Zq8nTY0vDGJAekdfkVrXGagyCd4io3FnaRpfzTK8rIdVxoMnXlHpwV1ladhSVlHD4CYEmrzKpzWnAW9XSIT7rI7zLFJ956v/U8n+Ms74okiCIl0lVqke7oj6FoH59uA6msUWIgdhpIf1vOnaxyTHgdpHvY2LEo5y2giCnwUEHvlcP/FrjbVUpM7jL6JBTnLRGv5J3JLD9t8/7+pS3l8Ef505CpfKkHzGNWf7+QcI7P9LDOJItVfvPsSpBYxdjM5sVFUscGNPSp7EAME9FPXPmVXg==';const _IH='ca908a31384a374d70eabfa38e74dfbfe811ad7a965a74fda0a170a8f4c6c7ec';let _src;

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
