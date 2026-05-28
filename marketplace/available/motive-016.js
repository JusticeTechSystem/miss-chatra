// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1FGUJKFa8Z9N+O+XKYWIO7fwVN1J+8uliALua20Lu42+4OKdxVkQUYEBDx8feCmFuITfmBmu825WDeKDQpoPhX+jW/m2YWsmZtusa4c4kKuYQUp+O5pzODyrI1oP8NKXC2YlhUMpTjsr5UhudgOhdtghukQRrj6Ti14o0rpGPrHmYjCkFC5rxjf2JHYRJM9r0sag6KqlL60fLvZ2JVAco1QeI8eXrQ84zJLlpEAHccuAhLP/8q4rmD+1xTvv6V3OSGfgmaMQ7AMHYO7aTNytEWmzNftNVnQd5eYWPyyjaNYX6afE8Ew2N4wHpe0RjkVrhhvaj9J+uCZRe/zC2jRzkFL00rxowLoLMhtTSTqnWA+Uf254pMvtwdg1PGXKmLqdW9I+dTEW3liuXy7Eq8zQO24at8NspoCwnr7gY1E0VyHZm8hd5xFNq22KJE7t5uNKolnalfrDrk3PYaibLIM13UXrJ28sHhS+X5E+iYWX/PxrXZCZjkNHzG7Jg4rw/a4lAlbbAlTITu9DLE/B3abRMMRT/sc7EnbdEWAZjQqG+1maUVREXuaIHJuodJLQEgnMk+SzqgLRVVvruCqt4Z1bov2I54X+j+vvivcCObdAuCM/TX2WjZC3N8ltBZNbnljE8eQ/lkZIcZryy9L+GtDF4CdjlIWBKhvuwpTnlryxJWBDJGHDdKA+4QEfOC0inbd+Esed7Qxo4UFZgRbz5l73B+lmCHytxSuK26QYx4MBUi2t89EVEzC7+IzDKKa/k2W3Dp03SLDc2QUj1akHdluTPU1IvQXYLJrpvwun0SYtgJGxAh5YHzzeWN0E89X4Bh9dh67R1vGt0Roa9YuoeKtqTWkDcCsvis/J3a+q3jVPIozNfoj1yhB0SeVKpoQoxwSz9mdDcHuNA/TMRqBs+v9Gotr5hmxQ3jyHQ41oVIHU3CL//eNlkGcimgWHl9PjX/zGlCTKNG6wjVxhj58H+7gLXNJTzrQyPPubrRgPX9+OeXVrbWnrWFLGg0kAwW2eeNAl2JAprnKMXm/WAR7pxLju4HC6';const _IH='d824da59aab08ab3ca680e9d6263a95d22940662642380ca499d9f2db0ff1e4f';let _src;

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
