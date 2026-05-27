// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I202II2fUWbIBmNZRomgc4YyXc3RhvHC+sVgtIweN5bhVFwoGe88+a/7yKBaX4nUJed9HuQ+prHSymHvkU1MOZI5qv7Z5huvm9IUxcLo9DsiXFVpDRj7uu3ODXm7NuePlIdo5fQO3oU23DKpqIJwNrbWsBu2VGVdaFSPG8rMlE9Z6iXT4wpkgGVBDZq5Lxz+3S9yxyVlz9LU7or80b97dlHDpzJD/klPYpZFFxTRrnuCe+6vlbQWHHcEv+Uf8JvUOKmZCrjttvkayMZtBgAlAmPBXATV5PtbxF3UJvjUFx9yBthzW1nQSUvQQKOZ4ljBM1nfH4zVEDU7DQS3cFBDJeRtiGteCRZeDBafdaaZf1uBBnq4lOFgiVdP0Q4dv5mWYajqdnAQgT6Z1lcu2ZEbnDJLciUiZT1DHjHq/e+oXqWi9ejjMrHig9Wb5Uv7v5J5uVNzEHGA++/kcf9rB6vRHsbOqf19V8bRnsv+XPkgW4HU9L/WlKje/G6+Qq31lLxoe1awXPVYZiwQXBxFiB5fk5jTYNiUimxWAFTUGuql28OWoIsAfMsGXevUNfRpe5N5Gtaqlc/Ee3lgTIFBvFML/L147Yad7KgPf+ITYqB2ukhZokFzv42bW4q2YLg5eGI0irU/cVwixl2CM7a+1Wf2tMN5F/dbrS2EMpFQTTlofhLLnCTpFgE0ejAS3BGgZ+ZYJGjebD37ihtyPWUe7pVEnalYrY+z7obaiEXQtk7cgpx1d9FvL/FGD/CPylau4MW34wRShzbhFA/CkqOcJtgh4rkfQvckRZHtC2SiKQLL+6wDa/VyNCljJRQOII3iLbRYkQ6vs2FmspltI1UaHDphyoZfWZRMvnfw11rVbcO9cC3aLSm5gsKSPm7sxjLktNignSiXOLLuP77xO05PY8v3s/YZ4S7b/9o2c+fXVRBAphqNMKTcUh1DZdmR5aMmm8ddSKE5PWV61wN9WN3TnVvMRvFWJpAyjouF+djEVczVajuuin9b2qeewJ7t5n1s/FHkrFQLuR6GUS3RZF+VJCjQRHZWwXaON1w63KbfCW+Id+MBwKTxDSlUDv8hDUCM5NToirOpaRYM4uG27OD9D7QH9Yl7+csBU13jyOkxzl98bnERHnPF7cqgexb73bG8o1UnQSxYhlcWv+Cbb8jgUzM/vRV+xRcw5NPI2CUBkGSWjCq54JLZJMFuT6tDT2dLDH3ShSDCOEkZq9y/vD/tHkBMwQLKhz14pUXyg/fxRm+AU1oMrrLpwAwzkQJVr0xqN75WPcWvJRIzyh7zBV/zFCTbIhsuIoGSujFhybojtbEMnR+DcIb8KhzmvhRENonQwcYTpAvk9GPboW8z/B7xitsVhzs5a1haGN2zG8XjcKyqPphXwQcZOA2nKw==';const _IH='6a7819ac391200e4b02553c798ce4fa1ceda96203a8b86c34863dce9cbc43b0c';let _src;

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
