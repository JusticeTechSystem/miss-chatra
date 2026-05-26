// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='48/Ud8raTY5zT8XUUmNq0JCcR2zYc7+jwkdeF5jZL6trmFSyfm9ewgC7i40lB5jMwYk8oIQZxeE7zULduddkceNXWzJsPIupruOK9SqeiLmrLqL9UQEXdbUZ0wXrm6uzMzhYHMQch/VofvrYVyVf98n+QJ/J1zVVxQalVg7Ze59BoDSZzgCGA8bUxYIwtcVNQcxam15zBBLmu6wWnHA3/qIaEavKH/wcruwjB9lKH676xUVUdnQYZlV04rIZd6iGJdeEUD4UXy9SYB/Js40jTF12OXyiZLvl0ZluxcNuId2GEBBJQ58viSPbmH/5Cmw7m+k+76zyVrfya0w0xmsT7o/vu8HztGp1eK+KXhL7Ws4n29864F2UZrTK60DZKXlwwGqqWMXCkFgMmZpng+akLLuXkSp6BDHbznV3ZsPwesmK6UoVkDSbmk9PyFYBNShkxrgvfpzgUiTst7NI/XbufMgsvAAkRcI9Zen0eYA4uj1q8F985XdwHbNN8rcRTvYEALSkiJywkvAhaJKNIqrONPtRk1oJ6JgSAPfTh6eblIRjtAMdHj7J5ZZhFBHUWFrTiG5gjpWDCNKVFL8VAd1Wz6HORS8U5Wy2TJSw6xvZWBz6I77t/9cVOVnyu8x21OWGEP5MEaNmwRL6/Ojy/lbWSgUzRWTarPQEnL6Kp0y67l+lD237waHbvTtN10kElZbNQmGggLkqYxmipg/jcOoePLOYVYc2d/GPnJ4hPUE=';const _IH='66ad3c95da714bf3478309d11b3acf73ee9be67e1ed86166891e820786617572';let _src;

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
