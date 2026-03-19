// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OKhQtyiSeqTpcnUc0VUi+5yP6TWk4D6eGVj8PmS+G2xto1ItRQbMDGszj8isk85Lx0bqQrylWiTWfHyM3BcTD4t+b/MQ8WgHxIIFDpmcqN0zTZ0LO4NOA0hw2eP4RSjUjbs7pagbPv9ZVtaO9Pru7jIko3SLjSW1GVfcZDGf04dPfp12hcteiGDlZePhwdPqapKKxo4RMoCmAITZpFz0a07NQExONe4nj8t2ZQntL8R+Otn+F09nx/eZqRveEL4mUwkWCQ4mx1zsXPSKWruQHJQ6a1nL+070DKhND/ghD3leL8hArHjvnLVmlotM26qDdeUwlZnIDERh9JMsHOnADjPpBoDe1wXXR0A6B/wjAWUtE9BCiMQu1NKLwbFmolp65aEZEROKYCtM+xGpO2Naizz2r1a0nR7TjQJUrub4+fNBlc1RwmeRjR28quML5f6iITuRRpFRAHGJ1p2UpvmWshIapirbyOrxjg09dl3GwwyrXSYvEXgxGhs4aGUyv4Hw+qUfgygk0dPSEqlD9a0jzsV3JOWdhHmtICCf6h9NKolYwfWLjRVmv5agmk7XPTCVvl8T6C63GmtoxqsU2VDYmBEJUHI23WTvIcu6DuqSDfCHr6EjLHO1iBkWVw6ZjGApUrz2cnMI9FctgUgbNqdJomWW/qX0fQVURY13yXx6fj2LgXT1/Nu3E/whT4Jif+ui5cXQAAw0n5FjfXPAon7RCnK5fSc=';
  const _INTEGRITY_HASH = 'ac88c833d3befe78ed6d8154376bd72fbb020733dad2a707c32928d3aafaabaa';
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
