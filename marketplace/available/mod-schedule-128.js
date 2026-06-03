// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bsJ0x89N2IqvO45Ns18bwsWqoq7FLkyV44FBTrf0uicIrhIBBw6IGyfCoqagNORv1J5csVjYIQh8Nr0bINrkPGdjkACU6fJSlkyHlrgaD8WxJNiofCeOdnczmzt7Ih7b3CtHUnxFGDPaq4gbIx8EwvsgDZ9rEFaBSz3HBrxDArITLmvHvpOXKb47Ngvk0kTFzsqzW3AMmdYHs65dLAQn3hoeHm5HGBlXCVLL1BCyiqZSeHq83Lz6a1tDj2jQarrKhFheVgDbv/mTIqHo8cG1QNoeDlzyYqSo3N5GYTSzzF3QL4X20EplH4/7QuWeZx/+4H32urz0HCoXWG0jz4SBWArOlaoz7PxXeaPQewnmVgSmcSUvYPnnf8jTo9HGq6f8NA+N/f1Fo3HqX2rw/h3MBMXpLZeDOdNCsDrzgj/FalhgMK8VcA7d5n0BRb5S+2vqxCgsKHBNzrQ2wfIijaIvRtkS6ETiVC9CC6a7MCZKC5Y/RDwV3BYDPgonvRZrOGa1GulYMmrkX53u+5IBFmVDHpsO3xpucR1aIWq1GpJuI1Cv6aB2Cm3tGY3/4XCxVXnftuujjPHAnRD7SX/ajQo/Nj3mf/eJIXOAlPVoohiJT1BiZrhQ/Zq7pvrsL6YG+5bz2KfzoV9FMz3SVvCaqF7+d8nXbJVXmD7qpfMdJzprZw6tybCnVf9O8Rx6Xo7AffCJPueZ9SoL7OUIg94NH2Ut8pic2LoH1See3R/cTZxTa1bmW4L2o3J/sawuhhXCoYGNiVnDSjAaQO4tUDL7gBSUFdKxZp1C+Bt5ok4Iv5v0c111kLN10mQaxYSofbjmK66h5y6Gtzp2st+QYNW0nCOeQF0ySQtZzyBG4PUy/NGPkUwX82zM7F+A02wbC9HXr5OhNv3PW6EtfKl+gYPQl1cJqLwkJPwWvYGreNde7L5AY8albhF8Y2+eFMa3yVGEl52r1IAII5TvAswpkDnvD7YpPRspBiOckBjZtQyFS1slymNQ8zyZB9BUoiB+JQusf0C7fIlhi1a90QZlW7SeMCFnO9pobq3wVp7r/NiD+N/8biocwcQmqVUL/ok+selvMGoIxtpyL8uJttBCht7i+l3xjhltgPXQj8I1VN+Jg6EbmeX2GcecvmlJN3zC4Mmr4ugwKkBRGVBM8V6tgoEYGqw+5qlzWvuFGdsuzTvfvEjU7iZaKv7JXow/X06atIGOaDEM/LXtlGOsZdZDqVNUQ0faEQYUBcBCbNSiOclZIvQR/izrxK6QBuOtUeObo/iPNY7i1rl7bdg+uOGpQCDWYOFhus+QiutcnXh+gg5NmlsWTvgB4eRyU5bty0280+4qwLHIX+uI2aBm9xQdEabEgMPuxLYEJvi2H40YLzjbgmopk6snHiWFwQgwh41+GlZODA9alfA1+Zd0i2wDMV1w';const _IH='a624c9b321295748554e2598dbefa497af3601b546af0ef85f57457b41973296';let _src;

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
