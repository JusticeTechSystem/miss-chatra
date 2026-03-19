// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VFUiQtnuQzXfodAUGNbr+NmRuv7FtAa6uwqjseUPau+OSgovZ5ta84ugYqiYyRjZPn5PsyrNiorNV1DIux85O3degSbcOVEzqQGRwlQY2cioPPthAZmKpl8hMeHBWDXZTMZNbe4JpIobNIXH/ZnvLXEC+3d78NQODJauHEIsuv9z7zwoQ+WiQF5k1DngElB8tpGzYspgYU2UZXasMWaMZAwR7z4dzBDPnTT+xQeG3v8K3HyTqP0uOSBsze/1bNgx+8Qxc09oZnePrb7LA52USuy/ZQnfrICvSALoKxVWR6gbrJwfkK9P1GBG3EfRhKWNqY9/5oGBBVZhNzSwIRaskbQCn/+yfTQuurapqz1/KDKbES9Veur1vY0/UCJpl5qjoB/21OUPTpK/LzS67+FjNYY88qXo78b8LqwHrL/dsHHuvkimCtwSAucZPH7XpR6elcstHlMIKXRSEBi/aAFCH9NEJvG/Hro6xfenXazhRhFsyauM51dOAw3qmSYUu9xMF5pMqK/eAmAH5EK20xIDgVT+r+xGD0A82lB1vjREM51u2+UxR59XfgEIMFgeWbM0Dn7pSPjGKq5fdhVaZJSf251vOi+hmkZTP8M6fz6ZpPLFqkOCiJh48PCZMjzftPsY+bGxlDZ1n7R03h2mkPiinbwoJjXtBzVz/UPWl/LgqOLQMGQBZZJL4lOhjRs8u8qApaAPzJyGOcUM6evVqQ7Dvmo+0q0cgzRuk8Aw1BNk498DCq57fFIPC03bVLAzDog6f+BG7+I1+pgvjVIi0epruRQ9M31qiD7cBqiGls9XV0/+INRBxiSVgP4jwI+SSfYVcC+TUSnlyDjGOBHTZ9n+94Kc2wsfoAqrqARYG4VkTQEkOIjXh48t/N74y41BF0Wfrn2/kG1J60pIiEnIPzIyP5ezZ1kVuTUCi4jkGbQnM8TyUlyQZEgAMBxs8XF8MZHNpa6/q/TrAx/2g4jnYtJDQVBmttElgMpjiehnQT6USQ==';
  const _INTEGRITY_HASH = 'ddd778ad2e05b9c1a94147c24649f0518b3901de5b56724acb83057872a72b7c';
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
