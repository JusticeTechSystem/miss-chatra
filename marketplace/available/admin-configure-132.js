// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2V6dLfx7YNnQIzJVqLufskQ5WoFDqbsl38mj+VpOY2fFsg1am8RYn5cE93EWD6nrRbIyAajMP0Fr4HZ8BtpYsevZjU/hrYunBM631BeFRhoiIk5lJMDFgSIjNGTQC7rayaON471LRUZuvpLt7/O/g0KmONoNbeupu6MNrDJkrqt78r7SjRN0M4nVJ8UYrG1UVrgXb4g/itpXsAFM+h/tf5k8IQrFyicX/+9/80Xgi0Ship9ULfICQabR1EpM54ZPckPB/4QR8lz0R59IlCuI5jAwqrLYRDqWHTmzwASz+NypIRDQGS5McVgs7ASwGxvbB8qLgY0bw90QkGK32rgN3wmXnxEBZYtFqvkgd8r5xrRKb3gbHSP+/EtuJIgy6tJmk18P+unrHgqh+FPvwephx74me7F30gMWWU/W2sugxFoHa40ZypavwyN8caWAozE2KnVoQgIaIxOR1fcgfwRP+SnH7OlIOQLvKtj9Y3tTCPHHH4eIrxYClkiEEgZG5wo2R3Dd1F4M8AdoXepTvbFYHrhfSt+R9dADu5QY5b9u8l+x0ucY/g+zeJ6571uQE/BUN46QOpcheXOPsI0Me81lTCJZH+7tE7W7AIMrL4VXBOz7BFWEVbojb+zUjDn4lDcOSRn+UUqxcz8XtYwToy6HzJkAhJ21CNfLx0Hx22upU/5LOIxQMZl/qWAX0gcIO7NscdW5gqKV7RdeFJAymskJNN1oeHvgxCd2ZQ4iz29zgZot2iUWtvFNSMo91CBBW+YKElI/N81UAZuMHenIktdr2e/vNOiXIT3oWRxs0nqaB2gsEJ9FPCY9e5OHqL/JfhxYI0rchoopSkF3PVL/gqZcKRBwkz9N8DHQj5ebGNEhRy2KQqgKkUa7fZWGoVqZelUZ0QhsCcGGS0g3q5GUa+OM7O4wCHGUwwSYhnlLSl07m8JDWFm0F24axkfGOnFIMZsfGzh//TzVrYAuW9A/IJ8qZ6QVhcMi8/sO2nKHHCetQYmv8OPcKBzw6FVCRQKiEoL5RW8dfJ6RE88/+vp8NYaChPOLkzZlTg==';
  const _INTEGRITY_HASH = '9a69f09510386d162098db22584d6c1833982e337f7f005a6826f89e041ead64';
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
