// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C6zgoBwEWyYicc6HtlYQTOvrPs3iEKTBWLuo9Tf1fyY+scGUe3UMbYiyQtboLojHxa0g5GRGWioPiwHoGQU2GIdHkj7jfBTvy1C64HM5Mh/fsjcDFdyaTymsf+sG0HT9LInA0iAvrhTLFltnX1fle15WvlKOTLFkz7xGnMKzhd3TQgqjTult3xvsQvoma89HU0ii9875jyWKzaV0M0o3btebAA7iB0zPmT2RIqK57RmO5r8E0HjV4Y8FjNcDrZldvSfnhIN7kGeD08f2+X558hUkDVPbxvWAvz7wTSLYJbxV1hIbySOVPS4817P/eSqE6rDzK4q5erIt47cYV6w0KkvN+Vi1lHbJhlpGMtuybJbCTGoaBT+rbtbPG2ltaFOMoo3tnXRW+tz9xV8y/Y3rWHecZr06vkZu7v8VsA7TvvJeanfd2nP5XouAglFCKApW9LWDkmfQcYud3uJ+ODJfuCfhqnQV9tSCVSz+GhmT0B60OgE1KgyhGaTjz914Y49fDgvahlVW69Td29FdCicobJfCEG21Co0v3gPrnFUq5mJSvFkWyS8OQy6ev3+7/erxwE5y+0PPo0KUHtfxXtE5jf0=';
  const _INTEGRITY_HASH = '6c6c06c8d24654e6330d8e8ba13d91152f9f794ffe4f97676a96ab63ee8139b4';
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
