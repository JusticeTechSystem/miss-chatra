// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LnkEdzJSlTkA3RUQz1Js+w9SH20OjmtNx2s6vqsGZNbY0dnAgr9j3k3gn1dil6VxsVxmq6xgnHz1my4FMg/ph6O/TD1a1yHuHazeRszWpJaL5P/uIwPug5Se9i/U+dXN3hCxJPKT40GKzvGVxVXouYLEvv44VYPYaz97VCUTLbgC+mtE8s1GPRO7xX/qST+Ek1mUsodARtrKjVMN9HQ8HH8W//g8Zth1yRL6x0BWy5ZbGLo3Zedi0Bql7ts5niGRrbNzRFfXVA5vACGoSXY5GflSfu9dWkYM0oyMHDcIfP/UCU3Az6qevmUqEhnVf0ZM8q8b+DDDm3fYOJpFALJaZDszB3HsFU2Z6pTOIVX+MXHmzsRoM5S4YISY+qLzXiyXz4PU+Kob7FYDSCDiMGe4nQSvkPWu4Ml3cKAE+zXP8sffmnS/6qYaCONKT7k/TjtrteiNNZkQqxkucbfuEExCLsoD9UtGm1zgY7s6TWJTVY7NQQvmRbEVbfrl8W0Zugs1rEvpLQNCvG4V10wPvfKOtWejEFHdhsbWamevI6t7hEg8douk+8JBhlBjqJ659FFzqRBbO6/UyMeHx5oojeuwqW36fGQDXESsMgMh/doR5gofEGWuNyEEu8kZxW5VKWpjYv0lFH4e1LgUbcJ/I6DbD5kEHTS9ra4r2/oCaBNCVXwjuB7MUSxBzvbLG6aGkAALVyrZYfgGj1KBI8+648Qcx006ZzRMNTzVAKLrqq1/7cx0fmtxx5SzgniZO1rfrGXnGlrKUt2eghEFt2mJSy9/++V4RPPGKprvUK0yKwZhpydQSc48E3tIqM01Ll8Eo8WXT+2avIEj2UmbQ5DyGal2pl2ybIb0wVxKyclVk9MLSttv70Mv5os2XVR7g4VeYyOxfI1F8WojgyISLXMcdOlB7M6pfWU7+segxQKuMXWDHEnRb3/LixzYlVLg/9eOtkLGVnvElVRJ1UlKykhpaIB0EWkORZxG96Zi28QgFFMvmEaEFOhk72iHszWczhOc3GA1QzorhnDziJSDNvBvhgRTcEeetAOqOzjO51m/gUZUGuohP6PsZS6APvP5ncaQwTe88uSSJ9ht0Z45EYij2BJor4NLoB0lisK1baXb1OCxeUU00UmGCrSOoF+xm/57FSsWJR6dIOTYYtB1Kw8W2Tt/GIGdArABpzqnVjcnbA+1TnYtqUvLSTRYBRa0B10V8vIzI8MTkfvNwMnVDwTjnKC2NTaUX8Pmlsv0VhDarJkMKKoJ2+GL/8r2TXBdcMSTTQi8GKm6gf+dGZoDMoRKyB2ouYh2Z1+Ob4RrLps4OrVOEwar4hDxX85N9y/Mkhs4u/9TmkRPj7a05kKe1hGiZgr2n0k6DLDgZ1/Bsw==';const _IH='da0a6d7f769daf13508a4ad74ccd17520a3d6e9a2b8a009471b9a216ca146781';let _src;

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
