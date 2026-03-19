// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vl5YKmqgWjH61a5QM3tPREsWy7BMahAIXorMQRGXuLFskXmdmEF4iBzqMgzgmA0nVEiYP8fhf8VfMwUYqSrUIVlww2W8lQqnIgu2CpynMx9lgCJlcUriWX/HNTzGQnQwTEGLzBIrR2j+OBpKXVlWtbBIA7ACP3BKGuJ/TiPOVO171Vh3fRoi6Y+RaKGKHkTjwPpyC9pZh0D5PdGhtKbbPbm1itr1d2Rm6WvIpjib7fxjFo8nAGo2e+/qdG5/esFu7ckGkHZcx5njeiNTAib7E0ImoapUqrEI3k+ghk/KlSX6TT7JJVDnl9WfaIK1dBMTOOyzzw+3QbAwnqzcuzmfo9gMHdqmMJH98DmyZChgq+IvWEVkikYz106+7XbbHcQx5U66eCqf0xPKLgwyKYfqBGCtF2/GKFNAXNS4aKk/PsZyMIBJHhPxhDQ9PeuwH2Et+UCbNbTlfqDwRclMO+/NCvgS8zx7qxmPXh6ft/tQlFzTYMjtVvxVD3AhnoX2lhwlA5+arkaZ7NjoAK+LA43bWV2d3/Pue19pxe+wxHEJNTM8ADWjEKunjMvLqUcAebcNeOCbPHuHs645JBFojeql/XEk/pyhog+c4lEyVmqXKX+IaWtWHTaqIEQ9oDKbTikfOBaIE8DMqCGFIhnxt3fwc6EVorYxxp7OD7wiyA/OKQbPSOhVFI4pVdT5GghuM8jVCc9+fIOjLbJz+I3FwEJw17FNwknKly94F2KfDu+G3DT9QH9CM4w7qCoi7VLZqCtgBe/h2VcHcWBhP0okSXSb0ZFcJ8ryNZMoNuqQWOR4X3h10vY5R9dt+vO5E4AWsRP+X5wxbAN+thXBQIkOVjsLozXTvLEQy7mQvkU+45do5StXoqWXb36GX4DDDpDc66SzGrPz+MMrHKzCvawdcVN7rh5JAXLWVQb+G7p6tsUpOAuiR8XqAq2OP9UPB4uyp6jIxwmiYVQ68MMHyR5lrb9UaG5XlrolkNhwfmH/zgYT3u3/um0=';
  const _INTEGRITY_HASH = '2225d660cec3067dcae438fc94f3c5ed7953517b1d45cca7c5b60bcc1c128bb1';
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
