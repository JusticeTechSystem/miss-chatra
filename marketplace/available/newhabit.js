// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GNSB6i8dMs22DaWKgo8diLAzWnQERS4h3PYoUrvtag2tfdOKiy7Ik9kLIg52WEBME4w0e8rupAXFdboBtQdZVFnmZeK3tuQX4rPeRYF3tX2yDLNsZf+DiJsP/Pcb2HmOL7Y1ebag5EEiZiUc5aNt/YuOcIzi8Quctn86Mpzx+MrZlResqD1wfIFqEH/ssEP7PLbv8y5XLs2+MHE/GaobHEG44WVyg6YvidubA714a2+0WT4XN/9MAIGRTV7lQCmoDHRGHOygfdlJUgZbADiVJLHXS8hOtwRkypUKsn+VCHR2YQkIQ/yewgHh2l5OYz6bTdcY6bKOJO7QY8/LwLhHnYS/1VB8Iv1ZAZUzbARX7352yqDxI5VmkCsm6iKH00tnBEgOM1dVi66eHF1636hoB5KYlb6kCEkXI5YbGTveSDAHlGQKZjFek77EqYmTpa2uHg/jSuNoSyKu4DdxSGpiDANW0o7XI8jApku3xBRo1FRsR97v9HJyn2sTaii5xQ/zcm4/l6f+BGYMtEjpsiBwyzG0K0PE0x2H1foCNDmHHvwAK+jtm2wtU715VZgskP8Fd2Jz9r/fiCci8t5hFQOoeY+3RTTBVNuaZDFBDBkPUxDuRd8iYlW2EKpDb99NG65M0/+6FIL+0SPo4nt6BW2wER/YuBC69+H8DJoKHhEL84W/+ds08mKaF4RVI1GEFQs3kX4VdbDFcvc7HAWpJjygZwvyNfFN57WvsM+F2DHJ5svCFQhSiqI7i7jPKJqPhZfsDoINkp0P0YXTiTqk2bsILEP7vhlhb7ILqA6itJei/20sQUdEiTYLYq/O2UYwFY4EifdJH+kOYOJVqpsiU0oHxrBrjKcaZ4GZLbi4D9zX9gy2CkuKUcl4gJFOokr7Vj05n5IK0c9Nwf6vyuhjLXApfp3h36cdqzBNY9EXYSJF/Y18crYw7O1gE6MJotJnrzaOpW0rvYgT4o+cvH1rHoXeRfwhK5W1kq33SeWvWTfPe7p8KMpvTIrkow/zCpQGFOOKwUTtwUQobJRa2npHJQ5VYnfBSlf9LvG0yq6HfPrIeWkjvV/MoA6L0rRqMVMdo8rAsKUFnhy1ICDOtWEWnJkVUfzaaN/Q/Mb0QY06rQPHH9rDZAdmaMBdGPX2pamrTZM/oRLgzXxjX85SiJjs0ioJc/LzmXYEbcc1xC7XQY85ZTnMznmrl1ylOUge5Rig3l49';
  const _INTEGRITY_HASH = 'c37eec44e8d27e77d82b51e9da1cb6ef0adcd7bde2244deab467247c30cf1270';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
