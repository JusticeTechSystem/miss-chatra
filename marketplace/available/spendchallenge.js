// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RxaNZP9z9P3QNj0cLWkLfpeTYrNcVVsnWiftiXmXb32I0LxCF0MK0LBEi6h04qECXIQbOPxkOhp9j6Il/Ix3H/V/6eOjDUhaWm9EEK+Vkqhoe+TI4dLXZQO0m5+tF830dIIs+QVqHF8pZt/MyhUinLjx6DLNj5WvdJQd0UTih3JwYE1UTF6XPdAZw12tw+iSfw/HkqpB229jkDNzPLNfqnU/rQ3Gl8F6uQnyfq+aKU9KlOP6nNtu4z1Uv426JkG6M7OhjtYp4UR1+wPW8obBwPkjP4OOl3LttU/ZaL8FKi2BS4272gqxxoJIRPko8Fhlzuscdn56V7uTbjPhS0lqXb3EU3LvMutGw+KuFgNaBfEcNGLKshaR+dZ7JZwvfmjsdHRZA4P3LYkEfDh595FWN1kdfKo8JUQdh7rkWnAepJQawm+38g7K0/NpzmlL42fgdPeNh5AC9dqHAL/QYzfzfLJhOxyPq3Ze16miSWPWbpsBEc6yNiwFDIpPcTvi8Whro3n6iayWV1VQqfPYM2ED1XDID9WBYCA+2lKDSUOcxD0UcGTzjY3ErdWtK4eyV2Kz+aHMmraPGAFMnGNUObGfwL/6rJuNCfj/x2PbW49MyZxl7bYBIRgALaM3A40PWxy786q8PXwrKknXzBdOqeG3LKY5DJtSF37CVFJe67+5N9f43VT9HistftjsgwhxwbW4X7M3Y0WC2Isf28lBF8wKqNs2/6KLaEBhrobBeXq7+jUU1wenROqXYmxa7t0/AI8aIuUsc6NgudcV74Kv6G+ShX3RuneCR4vHq2X57VcIJM1ouTr5ledjms0TWR9/VJ1QWuTJmGXpvkRH/GAHZrevmNrKFlMfskTFCra5ZV9Xw9zleC7zIOCfFuFAq2vrDUHNr9TyKhm5xewfYUOlHLoSgiuv+362a+aoexObwJN++mD1RqbEAEqaC80HUw+PoyZ8lBJzu2p0UoT6sHJfzn5U3OnL0n5DAZRTLVsUUiVBvRlWAbut7OvDEJ5fX0JAkWKTKGLXaEZPd2GEEsRUli91A3KAsBqWIo7eKBLHUAmRReNGSNRRCmmg2TZ//AueivyHL9Sb3NK7CMMNFKTzCLjKD6YZb7C48u1M3OGj1r+2pRt3dG7Lw54KO9cUKMx7kF7fYhXBjk2HOpVfha4t8ftGc2jAaBwhPBAhUEf4Ac4gJGKx4AavQnTVuaWJ55Lgvj8ngshkAbFhs4eA';
  const _INTEGRITY_HASH = '4cbad227d089595cf126de33dff37fb8ff47e844794621d1f0f4b0a4f6cb169a';
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
