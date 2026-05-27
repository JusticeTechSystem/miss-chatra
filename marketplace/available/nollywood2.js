// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='57TFtUUAh8bS03oSIg1sP8jCLmeDW9apGsjfQ/2F4CFmYt1giBWUvNSmw5uElMCtVqH9Adp2tR0Tq5Easr6+pgPWXMSaHxHirNa5FUW6Wvj7F3ieJ21hykjGkjZV7yrwAfHSgh76ka23gSgT6bVHyY8SlP+otWfdTME/1qxwqAUdn8dj3eXJwE6D5h52gyVndsJcFPJ/r7WpsnKNvrDdnqaHEd4qmUcY4QFxJ/1ZmZ0P6rd2qKsy2cziPyqTuDEFrKj6lNlqzKKOeRkuh06Li2yLxx7rXwMhIF+Ww/9kqw+W3XI6B6XKMF6Bif5zGRLiJ+EQMoHgEWfKNP1Q6tbmt12eCrybqGXgpcM1oarMSuG+WBKpkSCvu7GlvFel03CeK+eyTZCU44O0uYxb2x57QaAW/7HqXouOJuoa0qEjlKlvss3j60+jIaRWmAElEtu17QkJ/ghliKoZXKn1Vtrul5c7nV3IlDtvCRk+0bxMc6iz+g8CbySQTLb7obr41TOnEnVIJJeQ6lueEeH0keJJSB1cY3X8lW+MwVw0PnVGgQek5xNjsffA7gP0dam0mLID9WYkCyRy7b+e5ZyXv7UE95jDDDYHG/U9DTxvYfIN19gii+FhbkiBK6G3e8LRUrRxUN51tMMgC9npFw7tlz1C5u0celfYv9xcRKw4xJrRlYADBp2AEPn/EafjkdXFaK8lxYs5pi5b9L9QgER70lYAPC9BLPVLmfKlJUBW2vzNzfuTwmM05OWah+ZX2nep2qqDAeHLiBZQh+dX+o3c6XmnhDhHcLw/1y8DiorbyVpsEF3nAmD31EOnquwT6QVt+9YGuPX2nArGI/oW2sgbB1c51Qu3bFhdaqUm5MnmWU0HfGY2449TdNda9sh511IvuSKVRRmCyHnU7xpjTe/XAN0e2oZehZ5wliIjivWgDt+HMVp4SjBs579aDmbCf+7l92NDbSv68ip+lgX6pY3P5+9nS/NVMLeRHzcUdylNGMyzr7NtBxHTXBxWL+V6lsKxN32jHVlFktQ3mRt6+uXoHoaJ+Rmx2nJxDhgWYy9zequg3YA3cmiOqqc2SxPOM6abWEq/6ZtSUCAReY2YnelMzOG2EiGJtzou1B7BtaBQKoFEOscFt4o6YqFWAfI7KUYLsfEMKogKjwRHR4vNjOpS10HK/U4iz+9oCygy0Y7B0/+rAeSq2vusgy685HrcOQYj5y82fdFF5b0Z0QXPCaWmAzw=';const _IH='20b2b7ae05c7134e11cf3d28a869e4f3ac108098862c99e65b5c3b16dff154b9';let _src;

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
