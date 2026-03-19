// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pO0zjiuRCEZLndqubnqc3aLqZQDVyq2BXFEUwOybAXqmH6O46xmcPNNB5eZr+O6WiSF1M7d4HGr1jZHqOBbvJuyL9L63WLSLzRM4aloAU/GFwVlgB/Xj56sH4AHKLzOpQ+P/XLzdMA76x5eXb0lFCiuc5krXCsqLsaMX3LxU+92yh5SfqXh5Fl80uSwGjDKtKr0o8UjJLoIWK4u9I/piRZRwU1JWH9s8sKJrvpP7p3daRhmpLmtW4+azXrXd3TtuU8bh2TL8xJ7iAjGrAsSFsVLr1bFhVy3Il+UVm0gA426VKTCTJ9ngSwotb+GcIJxn5Nw00FtIo1w10OrKWJdjCXYYWLdkaVXkjo8Jb5QBpylBfIjwKiNMz3CBMs29Owr9aALctWJ7f486rP+MzT8G0uIf1d6WPpmuQgZ/xCkdgi00MRzzN0ZKPFd0kh6o81yRirzJ/GXprve0baUA3uWyw9Fb2DuK5feL13GRUKOnjNKtRZGubtQlkUxR0S0oTuSbsvrxf/OE0ZnOahijxEapCvAfCW9v+cBcfhFnJO24UZdciG/uNoMLES8N3j+Cfog2fWzi9Be76VKosPmvWT+FkV8/Lw1r0GG0gF4EETv9fvYE2bePN8wWYF40xaQb/dhwJ/S0OeBKZhHBrwCCXLXMzkNcYfRQ1QDI7gHD+huLjuA3evXMtnNufNVwbuk/q+kumrFTMZBge8ZbtSCc3CdY8/1SBcV/c0gZYyJlIxXFaRa+Cb20T4EBDKWtFGg34sQG/yRG6Zyj9opJZ0d6I3UYj59KOnDRZ8JKo8Nnqzxe4Ug51cgRqq13O0lyb7/mTHZGRL7pWHlawUWePsuEDkUl9UxSWgqSn4chzXBXtkmu4PNiMqE+KQVL7f3l8Nltm6YB3hyJkWc6wD7Ht7kjVjmmzGpvexI2XJzXBBNzZgUlICEohv3AVbEvpXWPbmlU0CCblJy3Lw6iO5hrwQXpUiZrOw0rKCEH+lO1UbAUU2958rRlG+FnJYzUDhNIThakH4agdptKblTMo7XY8GZdx7YPzb+T/Aik9nTkMJDoXWraYplZBQ==';
  const _INTEGRITY_HASH = '922ca2c559dbfed9b86b75b6d2e18c9dae62dbfe140db8268f67164dbf35152c';
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
