// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oozc+YfbgV7nC43GcIvUTCgb0KgTkP4AkI9hOc9XWsX61tYxzG8GLd2NR+mCBnQ/0i3ai8VpNdJkR9OilQr+Ttg7jfH203ueIUpB+wpaUTUzfRjCHuD4KS+z1AXblPcX2YyMn3ED6EBnvyfuboDfOrj2VSf8T4J1WKLKf27ziRGIn9R1Ro4dOmYY8+h3w73dikhVLPnvqHA5iwVqvHfEmAEHy3VP4dFrfbp1Gf89txwKE+rF25oeaMzvo5mZraWytIoBv6bD+ueQP91k/rIAVtxXXY5Y0GWexrwWw51JkjGJ83tdNyVqFAU8eh5q87VPfqbtkry9rRy0qW5XZ3Kogky4IyELGdnukXzZBj9+1SoPritsZ3nLBi1cpLOc5ZaZ17gF4lAaeElXPqwAMK0dRPUbL1NFdyG1JQFRf6FAtxupECcg5TSG3auqBcfqRguie4FQ67fLEOaXK3yXesUxeA7t4JLTs1A7Fxhx9bAcLAD+/axCkHWqwgPMvpnUOoD2NigW53w3McldsdeixHNo1y+g9t3sp+yN/ZH1aVao40Xp7au6kTCMz45J3czeXrg2JNL/ZgCUPejQt9CVrq8NiMa6wXeZtfyIDBSYtM/3TsfVda1X7ApIlbH6pzeEOtqUFxp1gvAOlC8dAM3VDvXrLQHJyQX3Rp6MPsX5oH6QtE+FtFK7wIquaJLC9/S/syNLL9bg/8GiWjfUPM3TPKJATwa1ueZxs8tNgFp9Vf1XY09vfCtq+K84KCbe+2ZB0FOoHvSM8sguWAiHFT0K49EXYIjev0SlvgYB3jtPUGuCp+rtxNrYMI//1F/9PKvYD06SOIjJ5aVXQ8EDuGdyxDkSUyDuDMlVdo1TK34/To4IV3/eRzzrRneqOS9EyIs4Ucf2YqPkUyC32k6dVuTG/lMtSGhp0U3KQXS4tpm3+X/ziAg998+7tWt8drz5NH2i66wpeTLww3ajjWzwmNONsH6kz3bQxQDpgQ0tj027ST2LvgzmBNeqBlgqjGPOwpEnTWkddA==';const _IH='aa40ecafea6fa98c6ccebb928ddc314af317df3aee6afef4f4cd9778103a25dd';let _src;

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
