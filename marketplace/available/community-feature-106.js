// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c5Q9Qzr8ou1ox8UKhZ4GqL/KaYFkQNhYuX/N14yVWCV4KfwmcObtXLHgAeUAj7o/2ZwiR2CNGeOw7gZlAcGT0/+AJ/pf9tmSSVR01QYdYeMqnKESrjBVONIWycQ/lCa0ZohM/a2YQhkwD7/VpMq51LTjCs+Ve4RivmKRXJWsMlRHnWtP+bnnax24+dkcvsEor48+GWfqIu2gfoD8GGHRTf+Jnsl6FI17KDHXa9Vh3cQTuym8Z/BNC/EokqTCjgkLm7eDBf2FMEjqxRkXvbFJERDz82ywJhy292Pid12Qa6hNRGl6DAzq95FL6KiRdmTZFBGbWleUhsTvK70+vVZ4QcQGO9wOmGNeXDAV5+DDImkwW3dkxyDs8EMeT0EFzqB9KRm8m/ocCkDlQTS9BFHVT5aRy1qSJwL8Vliv3kdjGxpNNRku8BamP7C44//g+YRSIHw31u8wngp6GdQQtE8rbpXH3Uq3DZzsuMkfS6LOQsAC/VVQ4lrxawvIswjuP3JQu78m1QLzH7bCuv8ezTIn5NCb7FkiubX8TvqWh9p0/+6CeMFmEsNa2tasBj/QPz6yDgSKoTHZZQLjDKpzryYmxlY7J6z9esDqfTLELurnIpyGyLCBalnOqEQeDkXSQS1oNpDauWbXIprXDvHvi42k8yXPKHIpGR+mZy3hJZJLQNEHEZVg29z7YtgJLbeKwpbYJ93xSdcFCX21Cm7z76/AypxlaZOt3GLV';
  const _INTEGRITY_HASH = '3080243030ce28801166a91ccc15c528f75da44fb3b4992db60dbf4066ac823b';
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
