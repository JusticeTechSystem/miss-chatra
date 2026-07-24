// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx0tF0LLVxVTxchNjW6oMO4EVObqeeTUOOAdT8ty6dkjFbQkC1lvFpuTiVDW5n27m9MLPXwci7xPoQk2xtfKo6XBLq8g/gKpmMCeWtBKZP0aFUMAuX23TcwQ66pNPHXRgB7ed10gFUhjViTy0ozNAJMKZcD4fK+xDwKv86OyJR6wKfuVwZHl0b5qW/W8OFLG1nUtmvbxdM/gSdevc/c2kyTZtWDjHGUJWUA3FQzEVXrRAgzkRWswZrjSN0WirdH2u47lrQfNTGriWBYmC9Zl25C2+mmc+zjI2BrU0Nmf5NnFxC3mhIvQgr6K9qDTsPOtTxfzf9RPS2a4FGxz0mkihMAAJdoc8wCvDAc47Yc5EinB27u9VLbdveYHvdBxcatPQGdmjBJQZwPcP86SM+PckyPQbt18q9yEgtIGg8AW2Dv2plXJvt/NZIF+NVoPsLausLwTiHPUWRQYmg7qCueBb1J1ntiEyd9ipgh3Auzwvu/KXcBOM+bF4mAm9pRe92IGAA7AXqv675N60IUBVy4hkDPQmf01uJ29nUEzI18MFPe3ZSuZl5D958qGIDcXvb6vptXjRd0ZyE2qU67ag1gTgVqEFv86uQxeu7vMXMC/fLZXT+bBbnZ+qkjnl4C7ViMRmPg1I+zc1Xk45/ehzezGUjXOvHehi1f3sIcGoF7W5RGUofeVjqTzmNGh6u0XFIameHwCRif0XALBB9gFQmGdHlK5v3fKVtiDP9Y0ApFKhJxFO8i7AbrRpoCHoAURfXfc4X+V5p+htwVrvpVf7MVco0aIipuObryGXMOPd+uGgr+35r9EzUKkcQwYAcdytlWgHloe30koh30pSx2Zi/JjjbUSLyQ3Me2un9bbeOVlwbj/cP9RWeasclSH2BzdQsjZg3hNxQKqxctLAWc60UxXJmBpcVOFhuFPdl5f9LHcxbo85isZTzf5g+bLWxNHVVRbcsqoOgcVSZNLm77dUepfGZ1NmS5x36tQFwaHvHQ1IIBD+p7I15HL8SnNQqFJ+aQnOGP8TwyEHJVhaPAhAFEtOmp4XC+oCET2fW4xbKYylLTtVOJLkwFu7g1fdABLUE44HR5qn04bFoGlyJMpdPbcpYSEoKq9cCi7PlZRSzgPyFy3jVy+8/s7F3v9A78hIcnUUHXxm+AM6LVPlDykzFRnaVbVTJr7bOrmYWSUbJ5R0dmJazYC2aX4jj3RF3bYB+oQ44xkJ5YruhrW8sRcF3k3+C9mqUYkRu0omRiGUrlHd00AepwYCTsmc5MUplKChqf/C5y3DszpaplH9toJuuUB4y8hlXOKuoNrT1fWkaPqEpwXLanDvOQJ/kXiQq6R16pARzIcW+pT8F20nG37NoUoECDaX/fC5f1pQnytDCR7erZLUA38kLvB/5HvW3qeW+hPK17KebNshuVs8sR224Tsb/SkyUT8lxuEWee4WKoVFj++x2erwEUf4dTkU/LjH/xCkBKwwfGlpxdbQ673w4v7idkYtwC5kXaKyiqKFR57NtQZqT9y8tX49QGqovQZxCvpC27+OoopiJs2jY4bWE+tCHjBx0qFwDknGwlqwyBHTjkhDcBatMG3L5+YH66lQ7lianNfaWVhe15qVSnNfXKltJHR0L5o9VUUd9kC7lyFdXqrCUpA3DGn6XVM/8gc69wtnfHnU1qqyOFbd9DyAaHj75fi8++CLLaFk2VcMhHkDI8E7L9Tktq6jXZUauEDWxNJa6CWhRlj34JuiJ75eJqh4/+TlO7MVP6CCB4HZDjGhetmqjF1v5KHDZMNyP4YWP1rFYnU+SnVMIpd1izg7/QTXif8BN';const _IH='aca369bb697958adc65f109ee1cefb8f204cdbdde8fc369eb7c8714df954aed0';let _src;

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
