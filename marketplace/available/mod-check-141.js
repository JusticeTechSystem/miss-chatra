// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XZdh/gUD4wNCqCjanf3/fYPkNnO7N+Yh4pOIdPbxLhQSmlRxIb/HAXkfZHjJn0w2YUitR/R3qj+25m0MjWPhstB8O8luHKmDvs+s5x0wKd2V0ATfsZSuywZ0l3fiVA2NohURTjRQo5sLRHXgcrKDKgAmq59KcSeyssBDPRXPyFtKn/444oBsRmEcKkDHh1gkRJQHRoZZVzZLG0UDc6jzpjztKQvgQjJebPG2Iur73WLuVzYYUaTkG07GuwW+up7JGrhyQPkdGjkAZ3Z4r/FIV451H5eD9ayxPDCpiy0XmdSgXUpHHye1C3xMKD9Eb5BbSi5x6bB9GgWB8oWwBE9PrLM9Qe65sE8wrhVt5/azy5bj0RY/GFW1gh+2LuD1rifvTTYhRe0q9i1tJlLY9fJZ59MIPZhksHrZqyXai3nUIVjknqXxVd869Ph8lOSfZHR9AfFfWn1pbTtQj4Q9d5JWYukQZiPEMzyq/1LuvkIT50K5oFodGl7bZO9udf2OR2E7ZD96fK61/+m4XM9cDf5ztOw8t9Y4r00w+w/udXxBJlM4P9o2RCLSydwbvmVmVK85sJt0ceWYotMdg8YE8ag+JthO0fd7lLxCVBFpMHzKSv8xUJRygo1uyjxEukYaI9qhR307kCZPO8l8l7z7Bz3DURzt/2h25CWIH0OccJZ4SdwLJHhIKv81LGHt338tHHR4Azo5EBHWlAKL1SHl0bfsO6xnGOBMLMiaE4p5rfgZg2tdE5vDT3hGmcdUJ/FM9m6PeS3CMZ9MuC4BJK+pxV4PoB0qWSeXhq9L+VVeqXVEcG2CrrcrCpW0ivqIVlOWXyppkL41/idbFRehpRAihgms7UjxbqmgoJVFk625EQRz+6cAFTJL7WwMgSaqV00wk3/Up4Gih2hw7e43/uy5MHyV+oq50krHKPOwcewHQtt6R5JS/yQdqHxOJo2zrOjokNy2jaEKiHGUEGnBmpHRsSLw5JabrihKlBlrdPseeRF6ITLRpQypUgav5OhT/HzjtkQ8JTKjUWe+okz6FlXdgrwY1d+MmaykA04qvUY4ASWu4BmkjUvDB8Uxdp5A/jvnKST16em109AexwEO+ZTnqEYA7rfpyMhw7SzmQEBpoQ9nHPoFMtq9CoShJsW0QGT2sc3XQG32NiA96IlLqfPcHjsR3y6Ci1K4AbGO4/P5ZfUjB+mykNNnRwdIpp24lR8wDdS2yByzIGsjbJZsu06wyrUak5k42AeXFIwn2j8m/sORigNNg2M+CqS2mV2xkBPWz7upnUvuyEDGorFdh+1eMC4h46NpweHCbSE5W7jJ+tV187Jm6pFvMWcX20OX/P0+LbU+FIgA0yeAqoRE3e00jEh3ljwjhsXkIzHD2HmjY4Xm';const _IH='f337a3c9699e957ebb930c1ee3572b493d80867fbdd1f8f4263ad61a757d3468';let _src;

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
