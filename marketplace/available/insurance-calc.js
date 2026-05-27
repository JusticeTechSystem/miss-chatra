// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tSj/hbCLpokFQHjyDxZEPvrVj/r6ZDgRmxIqzYErBDZBsFNdUwdkekIz9mHtyv2Kg/3a6ouZUApFJ7M5v8Rv79MhFdzYHN9rBWi7q40ysBCB8Zz4RUuvfuYKWua847hDPoFXk5feOOVCssPhJ0cjERKqPpxciNNATUZOeePxR8l1KPb+wIY3Q7ULHkbX8VGapuafCeG5uWOa9VbQQxuUrZsvPrKK+6QyMCFwhE7iGFK4TTUO4DaX/wt+JwzAhk/Q+eovj2Z1u2/SQ3WKDMiQv06NZeeyolcs/NXfR+sSvrHBeNNeSoaUydIxPxwXqoPM4RuQplqHBAGD0R6Ubabe4GkTWB7aS8CdRoF+5We4qhyEcU7YjfMCQAcTGLrNeLf+dXIFaM4NLWj+PPPdGoYsTrirDH6O1WwinZ8mYgA4BFadaVgqT3ms9zd541Idy/K6+09W3WJYTehC9o/SG8IFGn0IW/7L9xD1K1th6LVvweJ62xNf6Zsz0+wZDI4g5uzzuCmCvCWCedi09Rf3VBasc1i25JNSjGrurrF4rx+s2TQfehg3bn3qoTY3wne+NFEQNxTbENeMwUVJVNUtvXp8NYdc3QBJDiL2W+4x5q6utyhIzvjnM3R6cweKSMvOIADIcQp9gR/S4i9qymCozi1/1J23PIz1wi7SFUZvtQo+Q5ACdVVrBvg0draUM34ysOc+rU5gnBaKlEjtKFASJQkgUyfT6nyXFYcuT9sWdHydv9tVxBq8Ku0fe49eUG1gxiDyoLKu4ZOivWGPm2TDQw5CzavxcSNWC18o3mc4eDe+VwnhI2I/m171678uIo9FTzzjGIqwQw4QUJZVu9q+np70EaBv52BKLHmv88Ce8U/kcrQYCHddMsCjnhTWmqLf43/9MlH5lfRnlpxs+aMmRMn5UQuuucqNUfSzDoDgCuvyjpt3ON1kDlHoxTW1FBT1VVy3a6Yh1twvR6CkvlxiRDgyhxDqdv73Dv3LGyYZ9bhzQY223UuvUzjTJa1tXCUwkmAEJriDkYVph7NcHoDnam/QR1w7dUum361AD4t82zUHgSoG3t+NCWci+ffH5OWpDq1CVt8kCGCiMWtNehVG3lunBDrIzoQPpFIy7eqblZEgm37vt+/gfTpnpMBsybJ4QC9mb4asxPe6UtHMoJkt16n/zYyouvLGJtA0MomxwOR04O9gq1W22sYFvLDqHE8gVemNpM2wXgZcAOqKAucad6jQqWnWAXLqS9jucnc8Uc/4lnzzLSZm5Cdg4rMBOovWMi+XRDYb7ph3+boF/M4sCfotHhdGKx0g4xyEUFah0js0SsdtHohoaLmPfrU+HDWDcSRYuYl/68s6oE+duq/TZiO0WeeMIIMjIVNNC3e5p1l0hGZt+HebPERpbyG7JNWit50Li3RSA6xln4pYeeWcGYQ5pEqpYKGXzf7LB8Oop6mInkmHNAHOKB0HYA==';const _IH='73e23e6fa30262c7037449fa2c5daba0f7957b0c1906acb8997b4a8121a36152';let _src;

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
