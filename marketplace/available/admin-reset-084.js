// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UBRJOFvcPzN2DYG9+cax1t+L/aePVa0K8xFfz2TMoSXxB9Y4e2xtU/ft/NKLt4eYW5qWgnMorbfKeK/SUwH7BRQOG9O2CaIfcvq8FOjqggZTUbJL2Ua163xR/gX6Tg5kAwyruojbwKAJMZ1Nhv8FZxm1Ie6bNI3DNojue5fColzAYk1aey5/FSXbekkWYizP2Rziai1+LfOd/bTpWiGH7i+HAmkfJgXilzuDUu9z4+o4GS07Jus2P+oSvHT0n0+KZ4jHsUQyKjmO6N7Biz6wV2/DKB7oydPER0+DHOoFNyjOcln467ua0zFwdxNsAOiKBaSJmj/q9+nQrU/Ur8h/PqKd+RWt/c9wUUxBdyN1FnuFaaMJ0j+l1yvtDnCUpfiLYRSPJIpHR8CuJT8wBLPG2ZjevchssGuQykU8Y0XlunToOrcwNXdYWreJrxrR7JFghXSJ42wR3RdNh0GT92q2GvLgJo3SZyTC87jTTkuHcNC2sCQAa4hFVEa/GAPHKVBfbTfLN/lVf8krr76jOtVvZaNEbJ+lN8xFt6BUbc1tGKDGQacwphp0h3uNuHCNQA7XqpLP9d81TW3xxjSXr6/Lq9UJyOFQbyY4VlRsCim8zWODIuq9K3RH6Ir4M7Ycx34M25yUFXL1CtfZwa+jzsVdo/L3qkA5LFCTdNqbnBOrZ7nGjQeVLC1ffddWAX6hWfC8O6cpRN72XhOwbuiOpVliQVyOldg4nXtgE9ozKjveDI1jRxQv4dOVLmbp6K9Z0bUg/HtzczQy+XqcL2nzIU1MRsoJo08i16f669bXHb5+QdY0tsKav/NVpZlUMdgyeqDAmUIwjMQQ3Cjv8AJZ+E/qEIQGzskeHVhYpfpA622bkF+RgLMOJttWN5sIXu06zhW4ZIa4kLCArS40B04On/eL1T7Y7O+Kv6H8QQCrU5J5C3LNaJIh8AJqfn+tzDrgutmxBoRIkZr53i5ToMlLa8PRI6zwaebsTpcHEuOqVxXHO2neH2CwF64=';const _IH='08a3860b11f919a0773ff9efe25efc3d0d81a4d61539d052b17edcc1732c2ab4';let _src;

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
