// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iF0i2XdhfAgAKOE0n96B5oHZgS73ff1Ypv913GziCZGlq6i1W05CuFJYNzofklbk+mB0uBojUsY0s7v3m4YPmsmmBKOLaiKCxhXAXys/4eBmRDPhWko+5swJbDkWu8GOJgjpsy4b0V3ope82ZoDYFVK6ckM/5CbeEOtvk+og+V3VI4Ob3UWyuErq3UBqYMzpyeOCOXVcIYfVbVTlYlZJ2HrtCc4b+blPpZcPg6J1UqcgQtK0f9wKQHXXpAHliF3/4ZH1bdXPDzbxRt4pnBqAS3jIg2zih7xRRmEHFisp5veDLu0qEskX5mUZoZ3fKJ8rnUKiPDC55JtDMhZ/iYccjfaahyoAp5vwGc+obzI8o+5P+7YQFZHnAzf1KFHi/Hlro2wQ7XgRPp/d1g+8erRxKVmn9XdQWew9VsUZE+lMThoZXEtSB5CVp+yJnOM0RKGqg3R3FIbWjYWqCbxSoSwGWjzwgqYskDOZb92jgaOq3+qx52ayZyo6sjUS/MnHCYENcyn60rVKIF71foEfQyVukMiLgZCrglFc/EOxXA9EfKim5C0mCfr0E09fTNj/NNTQLgjwCmBdutKImG6Io9xEGZVcDiW6yNNN0ieN8kvx8pqKoARX5hrou9aoHyvnghRbworUX9HJcLSSAo33/ia2qx9mZxzNQ7WE8bve1vMxSOgGq5VOmDBeh6P6zKCt4eODI/xPrSYdaBP7ySaBUz7f07BVRmQtkaQDnGFNeriztycDMc4cVEAMqIxMYnexMy3YnYz/khldKgrtxLU46sF8SZNDD2/3Xsx8H51lIIb35E0jdAHwS2EQNv/Ou9mylvXPtHBLGMyLNSilB2U5KBca+nt/a+CwDngsKamsbr6sZ0/3XnwkuSzk4DyXAg8Y1myI6wm6+OvW4ofDnn97Vk1z4f8wL5vjQVZ4thxZHrdje4dS+tlsmG9icvvA92AARTfhEouv9idAOLDYcjb8Jnoas15Sf6XGNdgJjgI0YXLi29ikDWUaRGjzDxOPydKDPYcWXBq2XB+seJl5YSKxmbe1V7BY+k6qVuIPD2j+UXy/+c23RbV/YpDHroA7lO/vy7f9n3Vpg8cQUIngtT9LjZBWuYVeBbsBKqXH0HxTzHq6T0NCbHh99/+aw9g/KIwKqTSrQ68RqbFoA1O8pJziOUliIR0Z7NRzsiIPfySj5MFiY7cyMsyC9O2iHLMToRdkPXu3XGXcU0LcuBFygAfvD7B/Wd7+dFSGyiqfBGDHzqlE80yOb/cAojNWQ27feFHLKRz7vE81LX7YpHfpd8vEn6/vjdo3qAjvLdl/YYfgUBiVIc2KhXx3aGP44qFq9uc44qLUXgwLYS/J9lSrErqqwAXkIjIPsl8V5Xj9qVjTIN+DtRUKuRSLacHUsg==';const _IH='b228bc267e137fcf52e4291c48fccdd44f882cfe9214c9ccd78ad6ccf217213e';let _src;

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
