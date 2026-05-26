// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PHw+513KqvTQWIa67pI92y264C5DN+Menng/2k7kessx12QIlvNvpLsOM16Sg4stqdBQqfB0HBXvXFlb0RE7Yuf1PVazzEIl9E68MJ98iICPHUx/y9gFugVfjLydL1iYvlOoCh2iVifNpDUuT+jGgVF9T9hXj67aH0rGb+A6ZAFMXiaJqbXNq9HuZeODITHMjQZ1oYVpI2LpWo7GXJlUgwW+/eaR89JZLmsKBuaoEJWMbRQxT3kpyVGgkoCtIi1mtT2yETTBEpTQ3tfwjXZn8c9BAQz0ZZ1O6Ivf6RANruxwtsZ3V504Q+5WMlNtdacZDomdqrtnkejAPdhAUCEMlJTUc8dHOk1Y1sM0RQkYrFSKQUdxVg89owtl5ZbSAS2TrLVvP8+nMkwO7unfCW+K0LwUs+ojPmtwFBFAJUYHgy7KsHnXkVMg8A72CG7v0Whj1tU/HhrvNn3Em5GbFRYkO2h3O9npUW/xTtVFO3VMQjjVU0Tx2OfyGK3aFN8cKwOIuaD7rJ3pvn5BRUR3hjSmFikAQHbvVc1Xo7EKODGbC50lZd2j6mNkd9nc5FWGH5IZkLWuRQepXh7ag5/E/EyGEgd7U8FEpI9N4CHYpeqzBSvDUku4l2FJJlJWC6vYVxMRzGt90NOkmWOQAo5EtDrPHSK6vylUvlnlwGtrEpVJi1CNEJ2vv0/XXaJCP6Vkg05yTemljy54r9My5fwFXEgdNk0rvUk8N9HKYQSEbPoZKSLxDifm/q7KeO9GmEvrJVx5Lia9NtZJchZsqZYiCvuESXtk9IFXikTzcYYtD8xIVbKVia40nKm1mhJE+Qbx/3GJCgEPj49sdNrz2tUEzNWSyK7J2RG7KfZOdwGRzm3qX9T6ZC0TD8Is9Rm/1dZ2RCkXXS7vDMOsusC58Z1JcOKbb6UWJoV7T4+mMEi0bq/gXA2H7+D4dtuRzoTtr6UJEXRXnlohTsb5hQTJ4na4PFDzWybkVFP0QB39cTu24Ii3HEHQqeQ5kYxNF+Iv8pwV2Sv8ksnoR9sbr9s=';const _IH='fa4bb789abdee7ac6589f920d5222a500665742d00e3c1484b35207e05e56295';let _src;

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
