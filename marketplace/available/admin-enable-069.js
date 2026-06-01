// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5EzoQnyyHYQNgIfuYAxwrqs01Y8UAR4tRetIF5rIABVzREWZhOTmrNojKHZXF+ml2CiG8KkXPu4kAwa3y32mxVCKtrD7h5z7Y1MWLXdclpbJg/oOXBS4gLZPQMTCy0NW56dJeEJVpo7gHmOa8pUXM5OFwn6UeiLjuF2aABe0P21ME5JftsCy5GOf5+RnVKNiUCX3O7J8LqbWlK+wsJXYuJcOiYBo9xy0iXS667nal37KBWoiOVFT0Nn71Li6ahIuXARXM+18HK4iO/XvxNvqTpoi4ul6r99vl/0brk4dYclTqKCkwEftjZPHBBGlk74+PhlZBoMdLoZZB4Iu+hodYOxy4WyoRY3PuHpmZMXlqxiZ6v1hbDMYeqmbaBmQUDMdAzJhrwn8jaE8qc5liT+VepRLKmz+jKgxV2G3Ludsz15LDnqJygp5Adme1AiToQAlu+KW2xVgGg/aEV9yl0zWCSd4tkZVNhZz6cvHjFf1Tyj8wAYNWJ5lyYqoZBVgWVMcNJoatSxgrihAr0xnrRY/eFMx1+4ExTaYZ2ynxQHds3jUxfb96DPam0Z0VNLRwsXO1q4SFklTEWxHQCTkZ/UIVWukDPI2s/rqYZnkmbvwhZgyuVA0I1MrFvptccS1v6UTDTMF9+eoIAMMoFpjJfkzAUkIOSNgfj9nd048+yWrVPmelfMhr7bjAn4TdV15a6z7+Py3L6rel8KbW41aA/oj/vxQJs7+O/LZgyq0rv4VIdIZbFBO5zOY9er0QJ3+A9MxAKm0hEXyoMZSPC/6BePtYHA+5tNtKDWUuKx7jlEwFHM+1mlzBlY414XLD1cqomyOz++PiJxL6Fwa1yEemuWikX4njwOcTFI2+RiNUNBTXPurVNC2mgscBV+JUNcJbo74y7srmiAzSz3dZP1f/alv+uzXFgF0xMbw8QpHKcBc6Z5xorG1o5iDbbMEPsjhAtBK8lgZodXuP/IftDkHeIzrr/uziGGc+bIQR8fCjDzZ5mSAxk4a6MrTM401IgBQQ==';const _IH='f3e2e8171e74e9147c02e487db373a30850949d7be331f7961e207e0c77e60ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
