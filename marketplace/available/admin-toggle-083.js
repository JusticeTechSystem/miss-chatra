// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='74xfxuJo7DbXgU26pVNWFJYoflGSUahj+J0uAu26BaLa5+9tjQHMfS7GpyPIzuFHpFMaLvtxVxVRqKoVsgYQ2s4J0mmFNc5OrdIqY9nrKI9q1MWOCG/QzNRfUT4FrMUw42h6tDbHjPjU1VR5x14JAxdgPVG0GZuql7cvG+qTKx1u9aa/gMGnMedPLLrSZsb3HOg+27OWnclcBFLutZZC/FtPmMdf0pnzVw+S5Xb01VIVc2f++CeouPxNnlKwCAN8PHPEWQizViGgN9mBWUimIG/4tUOj5OGd5DLeVIki77MxOEY/KEBIsyqHmBVGjy52aOq0F4RGoAfzokFHYQFhWzU4ZPw3GMPtrhYFmXcoc73DZv+CBDrO8yAi8SyfeoOB2DNlG7chuy2oGB3aJV0VtqPsDaeNGHYIYl97Fa3sI0vKatKMK3ye4+kqtLFnujKcqnpziF7YLMYpBmMgiWd6YrlrdmisbQoNg4bKOd1BptrKSkw6ritNBi2bwP8klxHD/MjWUS/3sDqBQtnWZ5T1wTdYHspWIz7ME9AvTmsdl9PDRTUXDWzAPR/2bWlfInlz4J913qmt05d9UFFgROdDTaS4mURcywEzmcvJmIsM0A/DI0mu+2w82GJU7op97NX06yRqP5KspPs4pRg277c0IZVo/NyUxL6bbNj22kGGH9orQUbxEg1NHdooW1HOJHdS7WeqpVLywlEGzpjMAQCGen7vYHqec2lySTjqhXbXaDCn9ety1nxxF5W+QuUoHSzJIVWWzIkmrbDXv8SskzAIUMns9/9uzsVruqy9nAlpxre/fVvx0AZU2lRH0X9qUozhsizEkdscXlh0+0DSWWwC7w1aKMgVTIqTzAt5KzD4zxaYRscOEss+5pXOVxK/CQ/OHAHXfQP8YwPoICVooK3P6aaww6waaSk7JuK1j5NzfWuk1HZpkHQYWVkIsESdzBJa7pQx+354tvS/CN6r8Q8yy/cH9v9kfzwd1h3bO+0ZPjY8nhQQlw4BxfYiEO+E';const _IH='ea65c729f04e4b6bfa752376349a1ea9668132c384c15fd87b7f5d2d84387df5';let _src;

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
