// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wmzEfjVDEQleHH+iR8DYZIFldlhpnkXJnnp65c9j9PlkX9916RAL5Wdrsj5h/kKAXaEqLWzr14OmKUbRq0wRpRB9vre684y9HAbJNYT1D9wqAMzuvwKCgFcXfMXuLe7sGwpSJ4t6kgaMQZlaErhcmd4685JJghvqjl++TDc2OCvAgC+Pudo8gc+6dxQlxfYqzrqbhfJ1g1gPimfuCT7KiVgeLBEiFoNwyo3VZiYfou4Bao62jolwdfqYK/xZi3MmRreIweSKDMBN0VYT68HfbxmjFL5+4u8sc++uoObRE10YfAAEJXYLvUWQfonLW2Z/pe4b6WR1OPiMYaujkYYXxxkFD9wyhiT+lmiLw+WZcIWPaYK34lNJZnFmZoM+DzV6u5mstnwz+JeX1FUDd/rAroCcZttEp1OhH6RbtHO89A3mMK4dG/n5345qV4CQgmOpxyJHDzNxEZnKqwNVN8d1Ot1TykjmoZ+vT8YUkCtXRvr3FdYL+A3Xi6x8a/x4A1fDkkCqcVHfVixkUkqP6JjQqy5J+hS9GUW91IJtm1Y/NSo26mpoKONArhh9MYr7uNoRqwlO1GNXY8tWu6+NLTt8byBoWfDIFgsOzfieyQ84oixX+qSfQwuTUQoS9W461MNeHWFI5/4OwY240xwsgXmivfXQRg3kmcFeLaq+Jsnftdq6ac/2Bd+09ChHMPJgyAg=';const _IH='69346f63c1b27951a613731d44d0d578844a3202ead78d43bca865b1ceaa2bc6';let _src;

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
