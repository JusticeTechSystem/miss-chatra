// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l9Ek0yIUQNaAIhUTwy6B8zhA5Z/Td8sxzTYb5toJG4xqOqj2Noz0wi0jlcImXV9ORCVPaN+LK0Vvj6CuMwCtVdXwMrf6bQLuzyU5ngte7FQmOHCtclnH5D3ctOMP6ZzwXuEKTKieyZZEueVtYrag0toP45R8GTne/o6JB8bhNhPIa+UT55kJxW+aEcUpzN5s6ey31TqGRCGmollHGW9vB2IifihyTsKD4ydsTGnWGpDQSIdWvVM9YUMvsUQnXGrwYqMV30dFUk/UW0A7DhUXx6wY77hLad2IiuKxUOyEn9guW8vKNKuCyWcQ5Xe2s9+ovMdW8Qi1Lz4rnHzgrGsFuRjBBGGufZZO1j0Y9gCdlD3J0mbDkAr5V6GVfL94yX3kKAKi8W3TS+rtrB+5lBb2XzVPkhRePzlHGMMJI92TWUqrbV5enf8DEtQ1DVear+X9i0OD+l5i4LJNBcI9YXBK6iNl3S2233Qm1/Nyktfyrx+2iNKQqhiRiOZFX+lWnyImuoiXyIBAVefHdGY8BukLvf9wCzq3ZI89GsObyqNVBnRTikIUe2NQx4fzr8YeMx9JNQf8NyqTtzoLTejjWzc96u37R1VnhqCV+Z1OtXl23bBaM5RbINDjn92kqpdDmbi7qdbc/vWLBgBnU7Jz2kXKffUa1k3nbBy78T/dIXB8GG/oi0hG+l32lD9QzJmECVZds8WV83S0wd5gE7IgmhYBMmPMOAxqIIigGV7P1hvLQzZHHHpmae5QT9TPTqkjwPSoX5aZFpYhO1bkUYxDFuzcFPdh+bb+V4H8WA760Ye2gC3m/6JdUfndWH8rw/RKWzjXMrqFIMftdQvfjoYvaqF9VmnZqv9BZyd8OdBlQvr/UeeuckDOSn/JP1/ZUlJQ+bXHUodjGtz/xt7RtSWjxonu0zbYHxrehbsi88MXx7hKo4CKMCB+vlnXMU/Bc1stZ6O0S96Vz9NGNZEE2/9nKVaH8rMaqT6/kQn78VWewQ7YB7zCL1IBl01SmZXy+egOMV5+EA==';const _IH='65547822da4eaf3ed1da64e9594c6fa11ce923c1937542b69af11376db39e91c';let _src;

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
