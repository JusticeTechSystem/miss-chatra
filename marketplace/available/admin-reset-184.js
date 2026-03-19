// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pAI1LkdzVEnKDecrqv+fT/7Nc5sKd/3ogTPHxjHqGOOUOOEggqE4RqctKfU7C2PYLf9q7c9f6CY8rVQkuRyOOEaXmce6ZcIg2gUYv/Y3+6c8gXo2wd6KSWnFMA/YMWR4dh9ov6W49BSKzdH2LEdKC2aO59A8W/pViIfoxVpldXmqy6MfN1/f48PxKbjtqnZTmkakkYxcqtOT2D3A1aJ1NYJdQZvHHlQgGF72+BZej1ofJoyp2NHSydoBk5IZoVLji3SF7bLj0+2bC2ijzkOXrMGOC76+EIRvazVWlAlbfn+CqXJ+wAZ+IdifNs8N+YFsqTYKMXgrI2e09k3rDlF62cKWPRXrPCdh+72FBcc0MHe8r/LDP5Y6IwUUG43DLZhmMHV9W1ey3naYJnPyKW5LCDBXDUbBLDldoJtBZ6HA8EJE9kSLoXpt76d0hr7QvBbTAg63LRIUbEKONair+jhnrZwIBT20tpifX3wWwKChgCa7Gq7Q6mOLD2SkNTfIoXiYuuWVD0Ss5sJHhWFvymJQl0fZ0ap28/3+pV5dHJ7UHRDMSOq+U3MzKTGSAL+1v9/+dfxAGjoIqMzRdRNHaAAEqtpFQbS8AiVqxtFRdjvSYMPW7/Y1beJRaiVC0m6qRg6ea3PkUGFlQPKbmyVEC2JxKGRqfmLOTgKU1ImSpbOq0NngQKD+acC3jeiHFl2pioVdFJ9i1f3jRFXhSSIUp3L5DBKwX55QlaLWcce/vkNUf0X6vwIt5yT2iFmNjzpijbQXwUbkJonhW0oB3ZWpCeZXMn5099TXzyiC7ofYzFFocwDV9tRzd+vZH2ZB9d1g4NMyQvM2xZ1YZba5QRQm58XiIv8GCERv2sHFW0ONlkcFmk5WH0jB9+EvDaDA4UmvUTfQLkqvwlylLuvWsmmT2NLtbemxGi8Hwq1aC2MUbbK0NEYE4B2dFBu7zwKu2XaJNLucJp3vBv88MC7D6rVbL4gtfSxyBLB8Dds6NmQ5vL7TBQVemCaKyXLQooRR';
  const _INTEGRITY_HASH = '47b47e5e5148053ef391b478fab3320b98ffb0a905a657b2628f727cd2582982';
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
