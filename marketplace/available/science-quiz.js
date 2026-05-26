// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='evs7mPXQvl8qFVVzS06pWhhf6iilh+O9SoNW6mFNUBIo80afrpuNogaFNhnuKv+dIZ2IvIU65mn5dkJQOM1YHXXbiXrQB3HT6xprCbgOGGG5tm2RKTYCLPXJ7DPq4kVuMlBgEHg7fvHwglbLO9jUww0RXfxlzRLwyUq6qCPm81N0nWuKep8HPfoWdtwTGZJJBQbivl+48Eu1gHg3+KfY0/5BWPZoGnktA7BGVaAUcyN745+Ko0pjM17/FcOMMQ5KruW+n0OPEvvt9SwkvEkNOtCaaiAW0UKPXPZ2uHhpHw7jsmXTFl8CMbTUr5/s3RASpG9KVm4KiCzxZiMEcWltnPmLvXUPdX7VWSn2ruG+yWD2b/JNaXOfDg+4j7GhtCVIBGWI4zCLn4bVWCDzld/p5YtHP5aeTNsJpDFDeNpwhuGG+wgb2/XIXcVFqVukJouSBViXuR12UqFY3njhqltoTXfHE9+ynJORHEVBH+puN/ZFFiZDwGaRA7ChcJfyyvPiQoGJ7BBg4422tZRx9Tt2lEPg5ezq8MJM3GRyWEzMCGQ1jsCKGM/NFBTrbcmZ70fiH3kh80jKJR3uXlSQwCNDa8xbEla78L4QDhd9Mw/dEDjns6p1n1fzl2PSyFvVVIBSqhJFhdiy5HDaZ38RqmKcWLz1SCIJf0uPH3YiEBN0yUFRcXDUK7Hbu4w14s5LxXYrH7OHk3SSDq+8DIL5jDAdtUYUhF5wgJcDa33Gs3MeVjXfvIOXo35eOIGHBj12XuVk99highd9Z5figxuJHBxAkTu63FUZDkXxBo2/7aXgbzhuQe1HZBdHlPPMM6memT0qPZwaXrSH6s3eXtFRryb6hYdpR5A5DzzMxLaAHlO9D/p43jjaaBB3uQpZ+XWSMZj9lC1GpLFlBnIXCirqrwhEhkuiOPGzU5EbditFtKnSMwhYiuY91BQii9cslstNacCpySvKeQLLmz4MoEWl4hqPn97qDAahiQ/8IoW8NkUNe1UZnfWNir3GfRyBPoTYaWkKBtIFge5Qc4uOSS4yzI2SwTbUD65wqFAJgfIEX+aZKq5t76Kpmqf/LqIFiLPDyQUsrqHfokScUxYjLzLAOi6J+EkQe/Np6wEkDicT27pwoDIxNiksXjNidp1RfddnPeOMfxJjUHHgsAORhiCfKPMU/pN8ovnRbtDwGPsNsfKmPRy4huGUaDIZJD0YJ5E6DzOGb1bWSCy7aIUr9zhZ+YsVuQ5ZU6zj1BWgTB6HMWr/pwgC9lyaJ5kOo9t6mdc9hqL2hmZCXWxHnkGFz7YvQjVvoq6drJacbwuNGxhd1ZiN+LNoyWtBcAfTJF3/b2zMTXnT0Tw47tbUH3y5KD5lKbYXWXrER06Kk2ULOu+mojSWRnpKX7AlmKua61z2+GOUgVfdxlt9A0hp8LEi5kinqb3XqxvYWLSy6pTqsONVKy/6sw==';const _IH='055cb79df18cbf51008991700438e6018ad09a04d5fdd6eb594c5dd67081b6f8';let _src;

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
