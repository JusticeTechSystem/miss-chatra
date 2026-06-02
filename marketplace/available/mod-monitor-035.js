// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zo/YyVCCcdqKHxkkJd7YZAjiWq2TYo5ZpZqYwcKT1HlGxXtr7SJRgDdv299m/Y0db6wm4u6FsK79YSuhx7TcjhyV68tJzOtfoHzQsGMU88PxrkObp4gKDgMdphEBmwxfPLfOmcWPu8pg7b5aVNhAZhSxjkb7/E7luscrNYo5F8gardEAzwbWxf6lrOAF8iq23P8cak3GiF/9n3F1YcOvaJF2kfG/XIP704E/m1Oedrf4ayJb8vZBi+RwlfeS8duunvwOvAh50POphgx805StCiPCKcwmVuWe1Yveps/Pp5Tf7XjWYMsXORh55aMaxShWzrIRsy8k3DAUJgG9Mh0JVjE27ZOmXH34iTtSjuccPZQzZ3DdvJ37vNHSPZ953TqciqGD/D2ukFRSHBR4n6j34RcGamI08jeaPfTTKDbMef8kn1ghc+e5HkI7KsmB8bEGzDj3+MlUCvDMfvv7ut7qmbY0i0JJYfYRo5Dr7IhBr4RxWvUKYwnuwvNs9fb52ImGIwGFFPae5l2GCog810iAFvRFsZmWMAS5rmGNP1MC07l34Z7OsLAt8cJP1ODHpMIDyqvaa2f/23vEkJHslz/pMmkWYcl4Yu3wIoqk9opd7YH9SL9j/tHsMgZf3LJRFjCpcuSSc6Iu/YVG2eos8a1uJHZhNwJbHTuLyHhwsEZZaPC+s6+mdtk1WuuCTim/nxdvumS3ObbAR6uxg/D3RgIhDCkgVw9wfmid+d+oWw6PZyI+QxA9bavHjDLZAGYtOoDnFTb07EvxJp0qrFLbKGcvbDVDi9uq/kkEXzTdYrmoycKFb7NSBwR/reiMT1JzDeHP86NzVo6rGaU+9ATLkaOwYfyH0XsJu5Y9MCrydrD7/Hxmc+m70rkbL7E1f9WBAcsd0/VH7irScY9vYdQq3Qu2WUx5SzdxFWShfcc3oOPRtWUkaPxuxlk9jc743xKFOXUB4A4bAHmpwsxbWJkwVpuUmoq4p/lrOeFcF2aNFc0JTV4hW4MdnVUWk0WwTLBnk6btesXqJjkrS8dSMB9RUdY4pK0bE2iWH7Lno+GXf3xCYXNMcLA3Ziu/bZZajqnGjPvGnHOorxeb5vLXWlOOzBmIL7hJ3mJ7a9j8HYAUFhBNXOsVEPAQE5r5It2Yy7MtuOwQl1TUfdPAKyxAEtpjpJK+3kEe3vvbtmu54Dhi3eDUWOJJhaBxHf2wFZM6tLpIyYwV+YxT2Xs6fEpNXD+rCLV7cPXFafXC+0IJOTVb/3DUtChU71cuGJxpxXm4fddPa+s+rBdgJicpAm4idC3eFVCXVvBupFnWoSuWQc/TKZR9/Qs36QEmG0ffH76b67mufPdp7cmsAKPUoC+QzTfX/sgKO9VhBOU18JyAbYl7gHxP425LVLE9XFkBMq26WfMK';const _IH='4012fdd8283c883b56f00dc8b7d4755457c57ba998c2263181d14902d06cae05';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
