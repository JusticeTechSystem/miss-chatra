// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'slY3C/eTfkOb/3a3OOXbP6umLylXDR9ObfnRka0+7Zun0ejbGjQtqf5kbwbuxzHtk3LkCBP+gB7ul82kHEdW/jYu2v1/K1uX2+P88h80KWhclKVSgAckZGO2FdV8A+nG+c9+IN/geI6UrixBvbz19BTKG4FSPvqAGXdQYFJ2vBAUAs612z/ReplqjI1nDuLkM1cpNESgKx7Amaxt63hOfJSCKgCs62ChL8SmAXpCghOA60oEXyj3haUKD211M8PTDnVwFP3MW1bmiMWfqLEa02Xv2st0n5a4xsoY5yzdhHMhoCFW2WRJq0CecQNLKN2pJgYTOKcVrHRUaK02ah/y5igRd1pz8Rk0vQVs9hI7yewAI+CZy7+ATCRZs/eaC/SKEKiM9x1jqpGZP/+Xllr54PeR8EHCjF/JYqlWcPEnCEc/SAMMuwFW6KT83qV4LH8c3yafd5tXIp9Mk+p6IwKzYvztvndQNAT10kx3kuMwVm8g9NtgmTEe9Goc9WQ8ZoaI1SNPFyPyWCdWJYIWS9JoB59V5jAfrAPoK7GOMmpVXuLYUgeh64+ETKRdebJg0Wl3LaqDHEeyyBnrf51wCaRVXd1G/VSpoE2f/tRz+qgv6bmHVCygzgeqJnKanIwMCQh/8YOhtkL/TAKjCWji2sTR91acL9WsQolbGgz+2kWizvx4rqvEHvaViXMfIw324nY9/tsYj2WBrqy+OA7btMNLboluATFQoIjdA1q0GWf7otK5qfLFTOX3qbalzCErf5vnve0fTPYiYyi6l3hQYsqGX/LW2B1ovblzlwcEI/BBj+4H4TDQ7nlfPrnT6tal6otZEXD6l9Hw+6fbCvz0vDmAG6uEYYkV1lzs+7zZTW0RjY1FlTE+R7JsdIJ0WDALXzdvcWLj4qpaTCsqW88lJZhhIgqIf8TR4A7j5NeCCM9UmJVp+IRfemFr3Bm/r/1yjIwJjKJaouYaHU/9bg68j0cNm4vbPeJc4LMXRTZbMu04NlIzyuTtvPSC9EbdYgQXm/mZEQ9jFzxe3bt1nlJPQ/OP2LwlzIyiX3l0P3g1AW7+7706PSEnyJsCu2j/FnF6oH6gVZinL+OGHwvtTkzvaGHy5CovwLoQ7XG8bAdUej12HRnHF8cGQtxHg/aAE5yu4CDeZfvZmpnxxuI08RuJuXpnV7D4OLthRbmf3sn4Wx4gHm4iu2rHgxUO8TOptjW1wu8kNFR9TpzWMi5GskgIL7or0PluEfgqXARA6chTnA==';
  const _INTEGRITY_HASH = '63bef6274a060beef234c0a80de2f47152a268aced983c5443a2279f6c61378a';
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
