// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TtXa4np71M9fETAgmAUNJ9mxnsSng9A/oKJ4EB+G5ZStaRIozGKGDW1Eg+2F8zMusPqceAOcgGJ+gI/9fNZ7G641SihlB+VwHiTCEYXZlnUxVkD5pqEoWLZaldc12fBhJIHgJ0o22sxO22e/qmFvKeGRTGCRcOJlZmracbaTj7a0Gr2b5FLXFuI5mL5OKe8gaSJyOoXw8FmEok/PI2V07B3f78n3Eltmx1VfQvn6t3KhMbYwkSCHQEu6RG8s6vozfN4aZDS2rU2dYyFAKJKyg4axdPWfsGbEcAn3R4CizkNKgxDezCmUCJnhmQp0nzps1lvJ9TzTf/VA2X8maPdl1VeEkYmFdc5T5SFwrf8h1QQkkhM2Qvb6lVWhDPl8gnshbBM5UpdzKI2lq2pVq6okoqyMN3zUXYj5UvGAhzDoyClDkfKTxlinZAWXcqzjR6YUoiJ2gliRbCXZMCEzwnW7bhQ9H2qzJZ2zPMxhC3LN/n4EJ4mcLYB+K09vNh2skSKTGJ13UrciIXpKQewTrteePQHpJtRVouplPuscXrKGeQRPlB24AKmMwLxV8njNIXRAG2uz/EzgtP0C3wFfLsXNbJ9EhbKfXEkULChFSQzd8JWVU0CMcnhMaLCwXlHJ8EW0TspkvtlJHjAppPF5arfoRB7hBL4CtKyrg1WJg2HjZmK7IP/+0+0jDjNLDOiMGTLn7f+5EHYhr78LXSkFt4gLRpIEBrTbXVGvaa4cHgjkV3CgwRU=';
  const _INTEGRITY_HASH = 'd0509259e996093977ac08ee0004ffde92808f262235f15b37148069f29ed970';
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
