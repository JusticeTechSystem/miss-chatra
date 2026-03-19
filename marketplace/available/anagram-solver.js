// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sZoYhFojxjGMVqMtuSskIdJm5jHfpb2TT8evQvj6XQqAl3T2b/hWcI77FyMnS4ouqb0AVDKfFHjtV3lT0e6m+FvXrb+D6qqHn4LrNKlYH0ab68TtWyfolZkcEoj4uHNVnU7YPrJ8Q7Z7eqJLa3IT72m0K7extjYmau9ufPrTatssoq+yPosF2NfEKAsPRbormGLolIN1Eee15435DREh43ADEo/PbIwZsl/7I92lA9etL5ROTbeBruju035q0jtZZRTnXpVvnSWbXCWkgJggVp73Ld30b1no+a9n4DrS1OfW8kLAbt6l2NkvxejVI8xzd+T8YTYbOm5jO+5NM416zgrsSk7KEoo25t6gb5T26AUBjN3sV8NUPCJgsG+1yzoHcYHtWi7KVV8LSRkxQiovf0Ub1HU2LhAATDiEo9gbLeq6RnTPxYD/EBMFjucGoc4XPAmp+DG7jtBGAGT89AJqsl9iKToLe3OSOhJr7CMwGbGmuZX15tetb1np7oZ+3m4ow4oZCQYwBHkqaMP692ziuljJrUuzdZSuNzlOsNaz3D9iDD/BUKmbrMXQfz+EcEqaz7PZoxJmw26kn+yNtQ5NMRtg44PCyXkn5ijpSq8DnPksq4FLJuH4BzkwO3pYM4GanaDSzvV1YcPeGTK4cFS1yXFUETAihknLl7Z0NzEVAJ7DJ4Yxcm7HaPt5NpuG+iNPZeQczIKEL5dFz6EcoJpV4rQv0r3ql7BWMhOejazO9AC5FCYA5SI9wQIxBhgn835ZQ5qNXVmeCjmo80x39klNLXj18l/Kqx6dw/1/cJKI/0KI66Q2EFdMLACoyKwuCvU0UN23zVq/muRSGDLmI+QOoVJr20OhLRN+efKSBOe5B+2p2ygbY6DFF2vvLcPRhgHAHzabIyc0itZ+IngFJLj9yoXVGsbBNTGuKP0bhIkZ57BniRn9WO314q0F+W9XaDDzbj7xjVdN+0cFARuCRbgfnl5OV1nv3bTvCSloser0';
  const _INTEGRITY_HASH = '2a4eeaf3d063c181157e43da3cf2c7861ab6a9c4eee4426c6a155e0e709e4dfa';
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
