// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VQS7RYz0U+wbDY8UphM62ehFxKvV3FcYm9YXaf91ixpU4Wd1zYtUSi8j0svfrYIyW6AP9gLtvbnIq8EAGJAokuRDhBymnqYpYgwdMTOcK/zcxJHnM0UY+bkIJGuP4PJgOFgC5V++3ATE4oICzOA2gOkQ84IfkUOvAI5llhtBURk816ut4FS9EZmd+NtvpTw3DOikdH+yCAjI7Gx7p3CMqCvGKFtWko1bvfN9BNbVhUuz97CNCDRXamKiorPE8ipdsEmhrY9KTJxsqXtdHIIl3wtatrLYm7hswVu9OTGAQKnJ2N3/uy68VtXDN19/xUmoTRqDOxCvGz4pFTXS0CZ0+admxSQTK4eQwZYxYjqfj2cJv4uWTs/wHikwQSEfRhMFQoMUduEdkBs6TuJMbfIpkR62PpXj06hOAA2K56Vv/nchtGAWDusRoF/NrzKoAjncfzaCQpOexRTE+5Q3kN8EOE5yXGr92GU+BBss4xA8UNLX8dCYUWomLwGv/HYNYcbeEI5s7lnjTAyUcO7BcgyNaFcpVIU9F81SnF14sAGnuoRJd1svzWVJZP2sW613LtUnsfLKrJam8jlWDURpSikbiPHuiAZ+jFh9I7A3X00t60NI3NRAxSfOWDhVxaqimEiWTfTfeCol+fEwDE/yZ4wG82k1G4QbkY8PN5QefqnFxQxqa/l+IuREsJPozi2Qi4BcE5ulufnngoC0Im64qlJbeJXr7Vqz6t5hzTMkQmQ=';
  const _INTEGRITY_HASH = '873f2b8c092575a95be9ed2b45e8d05c145eb2d3aef6beed7f1137a03a60dc90';
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
