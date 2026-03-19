// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iYzWYwVPVdUZOkuB3jLLrIjRQbpLjXHIo3xMIsxqUZFwXopyHEJPtmCOX9UhlmVIzsMmEhvRBNFXoR9VN/Nj2ZywG4vNTI7VQFTi8g+VfctH/N3sbct+tRJy7NSYfZw7asZI0v3DUIQLe1wjvtXnGYlZoET6hcRDHXxhnfoyRzLtPs+uBIZGYI9sQE5VSJGj/hip2bLdgeotU/zusAxsXgqpgS70bJB88oytLUTaQCSuf3COXHYcPA+ZYarzOjrfjX9KDDNuh1Eq1G2raIplJiZ3KLn2/mNmld1KMaCL6rxoHnOtq1V/2TkEyi87P4ENh6oVikVHJWW14B93MFrwiPHr+qadwEnHgpctrlnn8ChzT9p+bAhzI3W0Zci+Yp7oc2V/KhfdG8kGqVbNn2MePgQkd/yoxnJ+21KpTpcJOje1Bf4Nc31UwkO8VUEL1E8A5kose6UtAYDbF1KubCz8AEBnB8iUb4Qi5HAv1ygKVgTlQK3p3C4jkmio7MN22TARzDuxnsWIQTzqwxNy8xKX3pm2AeP8fuy/8JEl8c0eZ7Ouwd7zshnt+wSqI5YSQoZ+1+DwDYKKdDj83A+Zcs0SpKn+0bZoiVgPZ65Aq2PlrDd8OMRKLgVTIwHqgB5dTw0dy/omAKOKIVLeaxxrRg9nZ92yCbj8ih3zPWdh4NSdeAw5Do1sqLEnRv1kOSLvBdARvMwX8lVsV6VVt2Bu4A33bQp7ZUSJjWuLYtfL9lpoRGHJOLvZusQ=';
  const _INTEGRITY_HASH = '05552f90d0d6153e2551d42d32331b6bb88b5b8a9cb3ace24d3b3c21d3cd0005';
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
