// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm60n4M7jObBR3THUdLtWb6XSdCTE1AlwBi5fKM4Uah2DzxOfDnUN0pjKtIv36zCRLkxy4lpGN6Dfp8//fK/02LQzEQLRaS1FS8FmPBZbnEiDVCehtPpxi025ZZywAW3qm1PNXgV3L/QOpU/WmUjCDtfjqQCbyMlhXtBm8M0m3erSQpIdPBeQhtku2hdBOD/cpk+dJrzwAcY0zUlbp3FKxrS/Dfutq2XHApzG2As2WNRvSN5j6glCUk3RtX1Z1qLJareIrQ5m1vCJ1oxdRW3IyWKQ7Oi2z4c9hesoGiG7zQvFaDIUmoP225aLZWblT4tLsK9/GvaI8iuSkd3w14EoNtr4OgTsICuFb/MyHU13f3GfJrXwflKJ8w0dexXZCkDWcVcxo/8ftgz9I3wGffoUvmXzeodN6u+fk8oiZUBWsYC27u8nvGg43A3lnwat02UeWVgxhtJH/4sRvyA3rA/H3JbsXUQSdDuKi8TzaKdAHO7qaVMKiSM9ChQ/v1/3bjWt4orlLlerOMM8sr0XFKrfUhg/GMsknzspnB25eeWBWvPeFLNDaXcd+VRZK7Tp9yXP/cGm7XnpSlcpoYPiXYlmz4l6UVQr4Tj2i1ES3iS4pIl4pAKZE47q0qqhZU4lyhBngietk0lnlenHhCfIn3A7w6PH8He2wCnT9mR9Caqs2Qvh9wG01rlQA5meEJvNwu7wuqtoGp3z6XqELGI97MMRCt9QTQ4CevNC';
  const _INTEGRITY_HASH = '9c7c00b590583194d09e55033e6b1aedfaf3fa257c20a809afe189815f0cc110';
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
