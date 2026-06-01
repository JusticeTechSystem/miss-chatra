// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxhgWv4TT4tZ0Ico43udMA8rQ7PxDEjCt8DmAdyjx9fRYSKtiSf0EcmG86W+l6GjEL3qYLoYBC+XYtfMF+Wz7WqaVAiFYCFpnh5XaMbbXtbgbQDWbCu5ig8q/ezh/iz0o8YcT3yIfDvOwLijJ3W7hzCRXnvNi/MCZw+s1AxrvH//udXutnCMfM65YCRshfeyfOeEpxrcy7wGwIP1VwDHnRzRtU9jCGcx8bMv96kdeeKH4ZdPbLxeLUNs6kYkVXLF4R2+0OWEYM0qbxX5QVLzp44TN6UaDtVa+WOz58RwtxjIh1TcNF0rH45GkCXZBnz6ObzF524O6iZZUzthPyUOJldUyVwjga7WjHuFMB4Glw9GDyz4hC0lp4nej7SW71oQU4GdfvL+iosHA6nWqDM7Aq5v2y6oN9yv55PxvG+qTV0Lcll1kyscIdS/2oVfpMtVHF3cjOjydRJ6Km/S8Zf7lzIqZQ/YdqtmoPqBNYZlYR4ACXowVrGoqIXUy+P4YAOJna+BOF98BSvNh3lgsQk+GmcXJevVFnomY8EaDauAcfzFGEc6ZEFkAEJ/ct49L1HD6y6V0/nwTHnBW35pkMHdEnfbES/qGHXyQvAy9/mpdW6R7f6MLkJKUg3e6BiP7iqxXz2gwc+EyLRz8qFuUzljOcTVAPQq+tDyi90PzdrHP1LJCwLipnZpzLiM4yzO1LWR6TGAJ7v+M5fvy21pAkLDEE0oqv9oAoio7RvX7pFi2bFFZ5wR8pUcl3rXgMsRlVMFpKV6M88bdM27962MLkLGzYQw4gXgql0TirWuYFLy4EP3wl/3qLf5q7dW+g8MdYthJ+DHWn5H3vxvVfPSFg3zXEFat1TE4m8FyX7bUdCrQDQE9irWYjEnst/gs76rl1y0PoUHCMZefs+5Y1otX1wpdibHFEkrTVBJbh2DsJhcAxbXCkKkmmV0EgmZsIoAPMkLiTJ5Fgv5rWisQk6KYgL3KnuV6iiX5pebzKCLIae3uBiLnlbHXaine+7T7rU92wE7RiBcsTa3Tw34ktlHHCBK0tOa6SdvrCfFZkJozCjp55mFoyRavLA5uGB/KvHK4/KKaj8uPHDZecWCHukFnFqHtP4qTmUz7FMwEfP5Y78WNbfOVjKUQX+6/PHWTyTMijTjgz2iqJIKVEF5D3c2h8Kk4cnVgPwVfAqwyVQEJIzhTLfJhbkulHI9e+9X+qKmUyKirc07D6uksOLj55rZRAS1fJjqFpgQJaT/+zbjrp3SNW85Y3O09ikwJM08XRmxmCRHCwBf7SOfLTCLycKKSC6abzY3LudER2yESJ0IFkHatuiXH2DS6bQDS5wt6q3bUsT2uaKDANbYarDMWe1qciIHAylgyQmkDgWIrnWn7IybfwmsDrf5mf3eUu64UJHO2A==';const _IH='07c5c225900bb894026dab8d2ab4cf467380e9e2efe19d4482bbf1ea5b6b7a5b';let _src;

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
