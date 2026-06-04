// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S8XzwddKX9M1jJgMM7NCNhD98sNiVduNNSLT7E0Mfi16jI78pKura6LtN47KFskgxKm15UXA9ICi3UCjZAij8c7VTL+jKk6pjGWNK/2w7mvniKfoLKhEGBw55gIppHhQqdlUUO83WqS6EKTzEnZ3XSsqvO7C7Zp6QGzs4iWV1COoNt9I3I5hEm7XtxvLCfIloido6H5ST1N71U73k59hSdiv3uEEuYTs1stOXSzoGV7BDy7uj47Jp0wWwddprYDulaB4t8yc5OLH68TT/taL3KrUpBs3N35jH67xbpXo1kHOo18e8MZ8Go5KoSyQtFOS2TQcz0uPVrUQ8MtbHTaft9JOShJxtkY/AyNOO0sIkJNVoPRknv8r+EkWAcnkKtwdD5pGEPFEoomXDlSrxh0ddPkwGka1oVkVooFU//i58zFotJqNR0t4rctyvAAH90Ele/56aEkMXLrEMzQMuWeExlOorIcB6J+dqk1A8ZjZSQIkhr20KyK8rRD6o7Ls67Njfx921jSVI8h6i6ufWmEPRSmPUPvwxQ3gzx7Ihf6IcyoeEuKBuSK5GAXjw8OrNfjM4SxKzGQWaoLXVnqPWnoanGdPJQxywDOoZAwx8ml2psH220UIms2DxrtBgZzeZO/A9p0A0m/kyqezNgABxWAO4yEeJO0RRBCZa9FOdHd8VXNpELdxSlFcDoxktVbbDNHGVNrREzQ7HkV2oYxwo1bW+vYA1S1CwzAqerRchoJ45j624JwQ9UuwF9rT+2agsF/4YMhkcFBykgOO9+J4MvLK/yS2DiwHmTFo3nsrAn2f1OEQhvZ5l/7DFPdoQ75JIn9xr7k3opyTM14w4SZ3Tg0xWTe4qu610o+wEyxigL60q3xV2mJ3Q7mGzUEc4USGScX/GYf4LMT8uq+1JBFPkn12XrLI2GELbbPL0QLk3SbpafWx2ptJko5draILBuk=';const _IH='fcdfd397b719ee1f417a4f7fde3bdc10d89b2c1fe87b702fbd09bdfe129c2f12';let _src;

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
