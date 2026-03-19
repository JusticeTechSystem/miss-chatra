// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4uOKc4+qoPuXkY/E6dLFa3GceSxl/PX6wckIzE1fLo1OPC1awmKk/QE7btcyisYftjEyu523vM5WmTVDVw0E+abbXpP1b84MbnDZ3hN0d6JdAjKZ3Gbh+H7l40ApRHOBuPM9FMleiXyawFtu98jz5H10H+17EJUZTfqfWrU905EBF/zKF+977O+SpcLS/YckUciVLlWm8KJJaUK22zRbV3FD4tnXTlLzm9fYyKBMX96MHHGFjHKlh9nBZmr9fuDV/9XwU1IjSl38H6GFRUzSRJHTE3i98uAtvdZMP1SupKdxU6gv3Yw4kJGIQ1NepjIMz8BZmuO0Two6nksid8PxvBP7RvC13uxefzzym3rKOcBsbOTlv/vm22Vy7c2Y+/pPw9bM2l28ZK35Cu7rOWyU2iCFD7KzCxuR1heLfxrRHJ4wiSYAvslUcaE7BZvoU9LhSGWnJI4rc0ic0FJKcvQKEzzt9Nx+nwey3v0YbUDToF+eKYABsnZsuOnxmX50MfmBzuDcdsCscfXzP0ForckccuRgT9WOPfP0Zjx42jOMloDsKy8gS4c+5zONJ02DCIeamimzoIPX/TckRu58/KGfrZk9zWLMiF7VAGOzpKBM1T88Bso2a/03yKmlyFPoZsek8Jw/R7X8+3rBJTbF/7dIt3uEjAgnlIxgy1SZM/DKUi6aMYHgIa6ZH1ioUvmxXbSVtOGZIPg05f3L+VVKuGH+0lg2HbHD7TKiGs3S148=';
  const _INTEGRITY_HASH = 'e35bc8b8c143180925928e07427643a75aaa15f5221c4b23ed26e283f73cc8e8';
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
