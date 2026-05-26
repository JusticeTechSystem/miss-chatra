// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxMNpS2eMnsGAYrZH5IZ58DekeW3ecf+KuAqpSV5wuDL7bIGeUL0KX4N4EBAz4snlqLlr3FzYPnITeRRMsjq7HcrGlQrVRmzgweyywSrt4sZFoX2FGi/eRMbh7loMw2siqiNWS8QuWN1oTq/VvcXSakr8+lWlc4qZU7mlOa6OeSBg898/v+ZCeYhfj5OA+yfKY5N3gHRspIRarJzn4kYuYhAz3LYPnrkgBgVxr7+Jhk1tAZnxHJRrPCl5lFCj+vCTyx87a+QIsDB414gLCZs3iQNPoxxC1hZTJTKn6sz48kLoHl08vH1z1ZdOWttI0DmFFAdvwoEktGNn5j3PEqQ4ZSI4C8UXw3pBUPMh/7G8cf6aLIqVYKMMiOr+w7VZIdCIZr+N085kNli9tQ8Qlt0bzIMXSAti0eNx0Q5WDaTD8wRvK+wITgTk9kVNfRFos/2jQY8JbOuSmjm+cpeboKjMZdye92+oFQGbvLIYnHnEx47g7zrFuu3zOQ6aimt20XaRgR6jkZkLGhvtATspa7lacB5bAe2oo1+17i9N0R9Z4GBkGz5T4vSiMmmoPSREHClg7ysbt+6ukMtKrwownlNgsHVmESn6wN2oxc8F6kDv8K5K+eZidYJf4j1nMRkGedYm6YQ8muocOV8lzIv6EtHIkV1R+kacFGfar9bkd9aGNoUJH0DEZJ8GWvlFXiDDX+GHlz3ULX7j+DGTuWEGg40H3A+Vjg=';const _IH='3dd816a540fd9205be164c820ad8defc7bb31c497ae2211967b3faf10e3d4c42';let _src;

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
