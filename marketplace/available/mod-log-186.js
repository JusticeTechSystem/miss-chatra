// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IoTnIUvZGy6ocMjlREyhAE+j904VBDA/b2osURxIil6ecRwb2WinYIG4smHn1tQAiK4VHDBKkqtCVSPV3bjayAEBRcGUB4C10MkTxwZEosWyjqJk3BdXylP+U669KG3WHu5bIplHqo1MqHZGSqakWK2oG2xwwUzcScUNKWDRLx5n+IhANXdQ07bzjycsQ/bypsOJcU3p8MDN5IJdZ38+rOe+OmUb71Tdbj+YwUQXJly9jjFVi3rEGxfQ75AXZkoi8sK11FOPYSpNmmawRLGfVGJqteHrNJAlGltZo/bt4HRauA32WNIkmt8oMGJO38sSMvJ6xJvMIOUnUeEoemvFmgTk+zjcsETu8wEgethCioesKWBuZmgtXG4+k8T7Ns11CGCYDWMFm8fqx750OdSvHzNmjGtU2l5Jdybw1sXCsNDTxBxLqvcTnqJCa7K/Oa3JEPuwVSBj6iG77/ZRKp6gQLOLZ5wyyfYR4dP34ShI+SSwzQ3XLjv4djG6SM4SGr1n495JjP7Ae9Ri0RBWlOswC4XowvjUnYOteRUhLVyj9oJXm6MJYg0N2UugOqpIbN5Y4KVzpZIIIvxxdB6dgXsUgdp6WM0kSW3VhbRy4jTdcC7AK5STRl5fpj9NP14bCeWl8w3ZDzRbEp7GahCJLd4CBZ/b7t9FW7P9ih1yrhXDNMkE+9RhjTtIM6g6jiiks6K5b3lCRd/qv2gJ40B21/R7nxlc9qZrtTKU/JOIKeke6HjD8DH9o+9F34wCKOXsRfPwSyHDZW2BXYAI6BMsS6s4GnMgQ3kKibxcqChnoI2JiKUDbCFJJkN3fegXYAO+cmWFWCdI4LReNafpuZQLObp99q4DEDsmwwPp6LUZKPeCd0XGz8tSty4M14dkJeopKusj6+QlNoEdHdkO8mpjZAaRJmvn/Iv+6GY2eA7AteiUIEzgqTktw2Jiq2X3LNc9bFuA9YwvpfnmxKUQm7G2muLJNb+H7Nzb5JSUeaTmwQz4daLcQ/gm07V2sG1DPvGAwQ34D+asyzxwg1fNAqqEJpTQhkR6NbzOnx384YzzavlwYpi5YoGcytwxVX2QR7rrPrgqVU3mJhAFL5kZD0Sz+uAxrVU6OwIzRiHZZ0D2SrlQo3QwFfYmQn96CfF2fvY/WferTzX792AyvgTZPOMaO7Ud8luuG9aYZDviHB0nL0WpLLQpwTmFYfix4VYScQBHM4hdPMtP6f3aaahwxnFROh6v3ujIsuQ3eoMhzQQj9JGJouBt6WAXDlo3rEr9T1c7a3NRBHRZ9IzKGublBXA5mwymq5YFRe7eJO/KcRgdAUvaKvx5uPeheJAjwX0CfMQ0wbkWyGHPIr67N1uW5g==';
  const _INTEGRITY_HASH = 'afa4141870edcdf53050aabb964a59713399579cdec83e534e24e8a0d742e734';
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
