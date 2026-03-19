// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OebGrfq7ED0MHkDZDbef6UPcqRaAlj9BMY0SApfO0TZLqsHmBQwfQC/yfcK/Ek+mzHEp6C46XS2MI9LPZG+ysACrAiaMYDZYk/mNTUNPX1Z+JzBI3i7sFzpoChdIH0ZXsrC9ixfHhf5uTNTdhR7ItpuFaml90AW146GRo9A1WD+4bqhsp34olmPyFVOg7CMhhFmwykPo4fxkAT3qVaXTbbd+wyMr55S2qjjYd/+JTPfgYPkwkZ6lenlFur+X/w/kGm/T+0QyCS9P4bkANmq9aE89BXkZ5PRMflf5X9f/JqVOHGQ4TO1ObJVYC85/ixZckC6xsaU+aUHZXL/ftyAoBIDiw2CKNyZpqM18ngqmnmebKbeIuFgR0Oe5ao8O6P4v15zFmaZ0I3r6vmbp1H0ou1RS95VzQVnjkqvJwQZjSmHn6b9V1p8hl6O0gVxBt6yyNa4dj8NaLhXLEvEmBJNbQkh5rMFEHVhMwQCPL92pmipfJmgIgMxKVvJz1Ojmw3TJaQ7D0igCUzTUmdRuBN9+GeOr5vPtjzf74+aQ1juqPpnhEDIRmlkgYyiRsrjhjrajvUeNmhNyOs3c2ogsGR7gedu4WvVws0BuyrYR8k0ghh2EA4AAN7nQwao+/9bd2iYhtkun8a8VTn8hZjBwJ73NSg7K6yp3QmbKxMIZfUpGLU1Izk0iayM//gYDNTW72einv3CkS93H1vTm188Y3/qB3wOlHhz6VBtbmrnrooxhRGak12560DkY78c1fR2ANnoulEWTxVUM4kdBZuCU0iELqlZiZV0tyfMEo+QvJH/He/W1HnhwF3mv+4YBl5XWnVPWpxa0IEEGAEq1HpDH+2B+Ox8yc5OKU0EWLmYTfOXYN5iAkBk+kaWdgpAPQJWDpOe6+ywSB8EDu0TZQ1OHWdRYX+Lvf/AqxJcSCtWKCsazplUp9bfpaYjARA==';
  const _INTEGRITY_HASH = '5bb6389eb473df21f54c1dd8853c3db471d218e4ac170d4728a89f2147917844';
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
