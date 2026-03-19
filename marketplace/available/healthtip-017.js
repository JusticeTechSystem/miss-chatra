// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q0VSZp4fGSNJOVWrY5pF1Ql989WOWyluYau/d/MvLodgY36dpjojP4rOzGp6CkbqkXpxkmPr4dsb4eLIV8AidqPFXu6YCGR4qBV4hHWyUBFEf6g1yXEBrQBF6sdXSjah3nsMXHRr92ucAmRSH69lE0RX5R9mRWyLMjN8kzPAskaN0JwMFrG9UaKqMG++e7SyX3pSnNnGMGi/Ptb79vC1q9nfB3klVym5mtdOk4dqMuxFsPp0SUsemy6FDgDtjmPe7IVmMVETyfwj2319bLfLsjMq0q8xzCHRr0TTVQDFibZMPnrJnt0msQc9GM3P7ZGGb5KtrjjuTAZdcHb5H2krFEopAU0u82QJX4cohf1vMatWhzGNiNlgSg8waLXoRisIFR+QXDuPWLRI0GnfK/1dzcHD8s1p+9yQiTNb3nflxpwBbxJfFkcHQlyiZri/1xBvO5/YVrQv09i9jsZ89tnxmgitjnGROn1jQZvzK0+vg3yCeC+eSCFy1fcfTMy2THavliOrhGGiCa5okoFNeDhAZxOEqUBN9iRyYIjbf2/MzMosudONZv9H90AYBj4HpM+sWCf6VbjkCnCOVMAkeLnETWwv5KqgjdvtMncCoTF9dnEBUXNpv0r673YCCq69phgkFCNnLvku7HRUEK/a51gkoRxHUhfGWms1QgYm69E+caB2q4HyLigssnzOmxGs8heKFvvMu1WIIGhPBgMsIANnWhJUQkV6UBpphBbeTwoqJV0OzQm9Y6IWs6B+jpuoWqNY9rvuQjZepKMQEA+j4DRS2UL7yxEVBfl1D1NPerlbefkbyqnFK902PoUGkuV0pi0IzyybZ50U8M7hBivrQcE/j9b19LBJUHn45auETyj7JIAP39hW4098YA2bP0jItntwtLm3M9hwCbUa+eRU8axAE4vr4mt2wgnYgMA4uk+VXgjT7AVt+KLUVY00Gts=';
  const _INTEGRITY_HASH = '4fb8d8fd7e32e40bbe408a836313ee479092e66c4d09e0a7d043ebe2aedb6330';
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
