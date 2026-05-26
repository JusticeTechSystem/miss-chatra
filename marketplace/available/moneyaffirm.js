// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3plCvpvnXCj8jfmhQWryYACPC8K+4oPCj6IwHYxMPUovi46fXArmGxI4vdhwLhZOJgEj2zsaytd3/zQf3a6xNxidjsyYjHpwDBIFCz2SATtR7KuzpLfV+sFYXIRgBcZNBuo/OMcZLKK5mhWFI2MLHZ4boPQ+Kff0u1I2bCh/Ct2CMhGlVH0C9jxYgacMT8cnWHBGSvO1r04/QJkhcnSPyPk0qA7cGMe5l6yNcYmSA1UmKbrkwPUcDKJdSme+pFVBQOJFI0KHvRynfCPMVfVV23x3FRN3F9MzTtVnCjfOQDzH5sXOwiAagMfFykhZkHEgEwiQvIInH8EFOuaGyxJeI5dVIT9d+qM6esg6B9toJ71PCeEmrpK7jpoUJ2RVk6UQuQdeHUoUfWpryp84qppIp0gAeU3g5JvmiLrC7h+ce8V6mvS9bkW0fxjKIPhWRmAdDpVqhN5lCP2Y1CjZShJLxJhYzRv238zwFYGymDsnC5DgvSquK4KlyYbTdLYVu/ewNXg5o6iP3aImyrhdez+8cVamaziq3I3ZzUMOa2UFxAS1Zcltp9/PTDJswogdDY+ZD/jy+Ue5lxxycSgBsaEl5Q0WXNQNbBBHoscav7kE9K7qZs8CBaKoMrTlswLTy01V5jDZTWwcyIi7urmrUD5Rt85eesMksH0kKp+Ykc89zwAeYU3lLOetfE0BNgRgKnnq70sfDSnwE8dkq6W8XTtC2hgi34MESnoAaC2/rs75ZNsO3q7csLMiOnWt3jyUjWuNF8V/2dLDxsCIxVfy6M7ES5Kx6sKh2CrRUzBoUjoevx5vNMwqOrULwgTsrkv8K6KvvlFjbi6T5shjtEFpgQ24qgAMSSsSgYwSyZoNMS20iwPTkFM0INbwUr6YosW0SvMts+fZ9bpK+Ogag78g7gubn66/8endk6v573mhKZ/9Dr8VO5fwLOk35yUQEvpt4j0q7rpoq/QjWVu5wZGsLHG0r94BSveJ1xUja+vbeeKWhzpj4o62Gdugef0eGW4BrOGAJyRh4UWcn4/9YMtGbKGdCMWd981srgPqgmpvhqWBnrDtsdt+VuImczMjNirl9wzVdYtWuo7CcEcRUCrq92Gnw83d0mufg0huKWGEOKT3njbjubetEkvvO40JPueJZDh6+CUJEjgVzmOUog55fOspwgebibK6uAbpuFa/slSn2zn4HihY6qjxW+pkLxePv6s6eMpQv2Z70z0xFsawow==';const _IH='0de4254ba6a3806bcb2b5c0681bdecddac78402cb3d0e6d0feb7fb13dd6cb411';let _src;

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
