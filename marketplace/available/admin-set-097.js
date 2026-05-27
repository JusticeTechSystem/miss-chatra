// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uNjVpw4ZwC7W6dofanhWj2VGYGftd4LB1Y/OZ0dzWWjB+E6xAEjz6ds+KPkOVYE9anQhGWuxt0ZNMawK9OQ+99xAEw+AD9NZws8wPHemgFv0fqtD8J3ouWHDSd/BSEyJyndYRxzi4CZkcH/Ru8jbs8qGsNfzJPf1GmFGUybe8Bj09S2g61XbDIgIuXS36iaAXpBX434XYKfC5gR+1v42JjhStICSocd8g4onT/0o2RQjv6SrxEvfJHWVb/+sTZBv63akKqVE4bShhe055o2C8kAUO7sLI867DwxC3oAgA9UNRHtFdgPrVCNJRF2HE0dYYUXqhHgJtw9tn8muIsYHWgJfQ3QhSdwxPu/RxK/NtJVCWcoZtKcgyjB04pjYh/oys4Pu9Iv7C8MonwtGUr5i2rR6QFtpPfP+IkfQaY8H2P6NkEoVMReVvcoLsMSgsZbe9wd/ArkKVu8tQYqAnARQ33gth6pYrd30aYdUtfFUetVcabVOKsvt0kk0aDJAHRd40XH/QtmU9ZSCtPvMOwg7QQnjNt4kmAvRwI/C9rw/eDfc3nm+uYngKuZxor1m3C6ISQuwgzSh7Kp+QmwM2hFlv39wl+NnDlBhx1nWz0B/FnzTpopU5rWBti9NUL8sqbv3aOSqr5a6QsrWv7F+cXdagFuy8pYRQe+9CRgkzp7x75DypCEh7aMgQJfyJIj6+lPtDZdgVL4rnjzMHxuajiPKOKiIJzK2+VWCjrcXe1DgGQ5xOmHmpHdgL/+bZXuz9savVX44qefJqpckwkKt4X/ut0NQlp+KkxwY6ZCsiGnhi0GGGMSef48/5IetzgiE9lCNXAv0tUyPFyFkkiE4Jy46XGz3PSnaRiCyOhKHKl3/QO+0f0h51/UkDTGLKanMQWMb/lemOtJjddzm4EwFaP4ucO2hDfop6Zm51IR76cCVL6wJnU/y8EFzeinRgNpRKtga4hxYJfJVVkMA8owAeGoxQ/5GD4ybC2tn';const _IH='8d21e3f6e098cf8fd0e7fbd3fee6271f4b934a21034d947a3575b25bd9b549a8';let _src;

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
