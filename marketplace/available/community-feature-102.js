// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zD5GCpKj7dLEPN4I6JZ5qHtBd/2LP+qiJXh/6tCvdjYmuXHj6YlLNti+E5az+F8i5ALFHggwDi/Y+XrgwbkvKlNG0aO0tb1/XAkLkU5Dn8qNh+PLpF+Wig4jbb1IX3QRonpcIe/ispMDMGdBfcvsuWKsiZhRpWez7M3KKXG03caTuE1IQusqHCCVKxTL5Mu8yoPGRFwVAi4oWccGsisVE2NfpMS5Vx/tozj3wgv5yWJNBZU2UnrT8QzAEL6hccvw7RhGARm2rut5uppAxV23odnMMvL5M2gANmmPUmbUAq1bFDUDdaHL+LRMOJDP2t/q1axtnOnMdXAqvB+KMI6JWUUiU6O7+MitI1EQ+ddHTm6OV/7IWH1r7u81VWBlu7+hjpxg0TqzhIK3n6zkKWfwvQ8CoJTTOFOBs193BK9llxDv9PFuMp5iYeYiEeOmY15KIx6fFY7phx+XB4B7KSmSBNK6SFG6X0yIa4FlRNurerIvFwW6MTxtY/8taujGEKU0HgmgVaUe9jGHNpo0wbI7IvLJLwhJn417PjEeFcB4XRg9R8t4OJhxhOAO/RzgYF2SOn6A4MReuxPWebX5xQa8W/d11SJfjGbqq3h143Ko+CT+eeJjVlvFOURdz1AYjhslJel/9Ck+aMddhLW2obBLl0k8YUQRPo7uGXuyYSIdehpIDV6r8v9vshHP0QfXLEncAShkxbz+xAyTeVoQ6BcdP89Qx7gfBJC1ES43w5UuWqgFNDw=';
  const _INTEGRITY_HASH = '475c866e279bd29aced4b7c0f11f76f6e5aa1d551a6fa95bae8d9319d1605121';
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
