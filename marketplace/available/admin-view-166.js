// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eUwkZNjnCXP9FOshHyGVX5Hnx9Dy4lsztzErk2SgN9l5ET8KVjNMoVGVyBAFxCt6fsJrerSOcBVc2gM7CCfVwpLNVJZpfMgJ0o4SS6Aqy9jHcvVWsOmH5ptZLmYSiiQ6sDW9Bdj0p32AORhGq7q2sM/OurdLysrl3nc0yOOHfLTpnNg4XToAo15vZNMae7qhItfm+hFkZPmNix8aNb/YB0mrQnioF09SjHDkfG/NyRYdg8Dl3cVeakezPLGU/FdKvCL7ZXGBVmjiEvCfNi9DnzYEMon1Uah2xpvrbAY6kgcgF4CPp25bpZAOyQMazsNS9u8TV01GIh7q1dS2SjXRuXuhPyocGabkFBVfMq7EBzUy4XbK5yg2IyxR84eXOzCt44eXJXpZG8Wk4KymJK3yPxepSz2Q196a49trUGJtf4rmfreymJJE/XZeldkDjpIAeVD3LlbupnJldRX4aWDquufKrr8VuZQUd6rP3AEvyV8alAy6YGFZSAoJm/d6efpDMCt/e4aV2zZyvoyIsXHy9yA+yGESxcIQG/5jvTHgGLcAUKFBs2UiHn5Y1yPY0DugfinKk+nQT4G4ImaZ+hlWlKg0E5KiuyZVnRAp0t+AfzzkkKsMudauAEkRWEIVIHtNNmAYztj0diuF2kXCC8uAFUjORrS2l9eyVUSArmZp4XRqZAQ1R2a0b5aTzRdrJbpYw8MihUqNbi94hkRdSYpPovt/tTFT8GgYAfqC0f8XPn7BrOUxRF5M70ukQ7Kkb/dDzhk3Wh2S+TcacnBCcRVBDSu1WwaxvKhBg6Kcqh1qDvQ0KxfsYbtX32qcCRf/iN6kDEQpyIy/R4Kx+UkXPbKEqDL/VtH9CksHmqWgubW5uMSYYTL7PXBxEQ17TTgQ3+V5BVdrsLtOk59nmxWM+QM+4bryLsLVr9KBRURq7r0Bo3NWSMijvj0M3DA2N0cqopaBsZgsDOc2u//b//fAMilF2OzJWqEPdOB+CVCc96rXy0jKhjU=';
  const _INTEGRITY_HASH = 'e1c52829984a115f85096d55ced6a6ca37532df4295ce1e561127c4f736874b4';
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
