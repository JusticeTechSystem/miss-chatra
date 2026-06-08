// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FJ7wr/WkfVwI4ctnqOUwwbo6fGaayeCQRFgWqGgNCjVu6CjSbpj3yD8rE/d4NxoBf5hzH7Bbgy1zklfKqzSWZCDOV3/RvGTtR4BtSBBH1u5jMuCWh6WTmpuK36xpKoFcbPypx78gCjeNZCsVrXURApLBMe8dOe9wJkXb3C9UqeD/HaDwV2DwAZp//geCHd3FMekgNa+XarKAC9wjfCAvG+xx+Nse0F0ynAxMY64snPCA14pTMva53IgHwJ7oaJ2RvVaxHpy4SL0vIO4S5I9L4jNM/BtB9MalscLtUXJDTtnSb1/NrKLafPGykWT+KSu3CLIQWnq74QwZY4PTG944+UQiQitfLrPaGYgZGxw3Tky4tWry22FbzL6q2Ar5RAUTXQy5ThVnLs2j8qQIef16tDxlQmuxEIohMgy17A33d6v3/Dmb0tICOzSYalxL5TUqwRJiWKRAXBx7qVe81dsYz0nWuQ2ia2GFUK8+jJ8iNJu6LcxVKhcQnB4ehip0RaAhiZJLdc+PbwOKUdahMa+l/+mZ5sMgbCa+B/2S/Y3arDKLA224CXi4+MFGlo50Z0zPETooQR+FaayiXbtcg+sFEyJrkskSBPYwcymBhxcwOd+RMaPZbEaKJaSrws63QcHLgtrgsiRXc7BLLVtPmmeAJDaYB3whY4ANE8jMFeuYcy0sqWzG1R47uHwEBf1nDikNMiNS32krrDpwAlrtxqj3bgurIEPs51+BrWFbnjonRjXTWt7WIgoeq5268TkS76mC9SoPAWEvNWv/Pjy2r7qI9FMIQnjNLGEZ+6iJoy0FhATnNswlWOhLZXX54v4wDNeusqtZxeM4QNxX6W1WC1FZgkLATBgF5MYtYeX9/kZu6xwdgb+R2fR/bhwRS7uodOP6avFCMD9RwPN0++tchD/ZzY8lrWx/0Ntu1HTRVXGmujbQfvzVYWax9MkVkskjD0PK9A5h4lfHxutugXhZF0LyYWHQ8G9Px7oHDMSPkFrwAgNzms31X5GRXROi0VRJVz1I78X00SBt812l3LZlrpY1mfNCQH4+gtN1iOKJN3WG4qncQjq9p6Swpp3/eiGX93e2MY3GvWy4YGStFVFWZ2T2h35vboXqER79r7UwDSrrDkwmJj+4yo/RjUxoMlkXKFm/HeTut8DbbECmObsbIUvuuRu92gVu/iz+0qHrWB2YrtjaQ6oDdygA7KMfZE0zFT0/ybHUKiUo8Hc76vNHWLgkpMIoQh92PQvEGzzwuVfJORnWlBkPiHJSXwBku0fVdgItAeIhhy6CaazjtSYzvu7Yks0EkLXFWqwCKo07Lj5rzQvHbICpzricCHgA7uvQspWoOw4CvNGYxMm/Fg==';const _IH='3239ec3b869a7905e4651a77eb77e19be8f0456d1d926964236518003f03aafe';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
