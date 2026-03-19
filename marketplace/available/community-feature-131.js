// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RtRzn6rcb0mZxUrawiLdPHin8++xCLs8QbNW3xoR2ZwbkL5dDXfi+h53Zeb9ZppCj4K2yIV7e6woPUJn5Pt6FHIOJlDdZzJ1PMGLH0JGkP9YZr2TVwBuvYt149pMvNMtRyWGggQfYHvvZ5UxX8GRMkDC+JDuSy0UMYzNmbZ6qxoboOfyeECz4RnKsvv5xkOh3M5p9sBn/TS9vnBbas7iCMUL6BbFZK7848z5L1/ckmkD/T3OlKZE+wbJKveu8STBWYPE7Ch0kv4ewvGW4IMk9w8UuphCsSETHHfYT2V6QQ8cj0r2NCgrbqtTHUMJOWKtbusyTci0rMcltyfRzbrumMSXbrObCO/WLXA9nPGTVU3oex5FlQ/gmSboBD00f0g7losHdeEsbST+1dXaKjBxxIQJ7EgoOKVei6gWTdDnKK6vMn+9SPTND+E/DMArUdhd8lDdS9Hrn+ITVrJedVXv72wLkLacEVDbB42dKVS/TYmUIQqev9qQsbA85Pq+Q8/sTKX0AdaGxi6KZnXYzC6WL0OrrlXDxDXG4eQwR7d2/Lx1Hjb0gBgTfBHn2qoCOm/SBLCk4biJNuwg8M4+cSVOjN6yp65oPOU+OE42UmYJK6eBQIybVQDovVQd98poLj7vBDE6YPx9VqaFseyvhDKlQVdTga3191HUkYS0LGG3pjTS6gt5FIZNaR9oF84oQp545l9LeWQrpOrtuxTXwsajR0jK8dr/RqME';
  const _INTEGRITY_HASH = '7f3633d195234f86671b524d24e6d259e656588f3aefbd0a3901c5a1671724e8';
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
