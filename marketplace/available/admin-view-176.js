// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zrU6AP7agQmFd066yFZphSEvUdHCuJcdupUr9E9Ir6gLbP3v9ZJ0P4lQYrNz+mr0SxJaTVs5lD+GdYUIeOg4LgYMniPh+arRjbkJxV+uvrwR6fJIQsqTOyQLLCzvOUXRqHAla8g9596Oz10LLiy4ryOo35zpT8R57L5Y1xUbZ5JzOUbuyNZXYFnA2EjnM1nkyU7QT6UCXEbyKN4omL3o2gz+EnS2pjylTm07o0rk85GU/JQS8BvVAaqcqq1KAnN9dU3d1eMoc1+egDdn4xNg6z+YHKCFryR5gktH2/B2rLZiOSZ4pkE6Oeolj598i8uuxInSgkEYBjoexctIILOr9taAFH0qO3BoqNSELc1zxHMGi0Mddz83mmSDJ37I7JplebFuLT1P7DuA/MVde3nbF7x5BifSMFI2XU9qFpsYHZynfnU8atqf9mxUhQacb5997S9tOi61lvWmZibGhd8Ae4mM8lzsq1ntks0+F10McQxL8k9qjjkndfUNLBOIT97j0BBbLDVUStdV1A0kgfL9yX8XlaitMexLToZ+J8IJ1XMkhONdB3vWQ1sOR7FjwHv6Gn6D+GExuvVcZAiK8wkPlK8OrQv1gTSCw0SIm04nF4M5py/xVVqKUUpl1wVud0TdlyzucJs8JFJm3KbyBbVkpCCG0IlBHQIgmTPvhULB7+x1HDsWoGbB2SGdWkC6XmErzYuyVZZ9PJsV7dSetMP94joH5j42n1XxfEhnz04w2TLtgdeQbXovKzObc8IZ+Ak1CQnOXQQuqKGLEr0kR9K3kWAbjIk55RMOh3r1ufs903TBbRRL/0apUDBC6+a0u8wcHcOofo/3szssKw7pWDfZUyL996Vc3q1gdk1yKZpzb42d+jCxbgqpJVohHNX2plX3vpMkBpXfDdEoQrkbhHhyLN84mr6Yk9MOPDRQxsT/p+yo/u/f6pg+TLvYNGMh9rsdDa9IlorINWu7EXhdOLrfzi3Co5qtORABGr9FFFKpkvUOxfs=';
  const _INTEGRITY_HASH = '9f07fc7b516c8716eefef6bcb3c5b07da5525e46b4d591722a32e4facf65d129';
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
