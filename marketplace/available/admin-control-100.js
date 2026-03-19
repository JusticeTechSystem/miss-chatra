// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JHT9Tc0du4TxUw4p+DZsys5x3hVXaEm7fhRISwRxp42L8EoTBZWDRmBz4YlF2QKr1NxNBxJbiLVIVIItIvs2sXBP0XhAiBAbkRNu+bmag9NyXgP3HIChjZVC4LE2geGb4+pEOGqZ7zai1eMqPv9v+EAELTYZkS/1r1O8J8NNeP0uB4M/m6h4Hb1sogoeghOBsrF5cQW9PU9ywhjJdOP0/P7u+Vp9cmyC6mS6Hv8KsbGhsu76DQz5i7nOBCLz8kwQko0FPztNpbHDtmajtfq4v5WNM2f1rflgoji3VJytSMsmNTnHKKNxqqVuHXRXwRjAaVJIpSvaEpXK9ePoJCxY5brYAEDn3DoWSpliwA1flxriED3MfIBd/4TE4bOh4iIs527w4TpGu2uXi3gNbSTqppgrsHXHlyEuXZ2ahOfYkYA7aSRx48O7Yd/pTEm852+F2+oUGKiYmpl/o6PJ+4i31YmwOZ2tLw/1V3jKvFAuQCQLEICQgkbJMydsQ0DNkBeLU28XkwKZLAOFpGaYWFSshjdEcN1Rl3cSpciHq1Ee4Oz22m+ubFkn1XD0Y43+9Ct8BOzNeU85cZfWMXta1VktYvOuM3qyqRzAJuHuCx09ZYyEpfnYbB7XiGvsePwoNDep7Vn4f+OKD/gQFRGvXsfLcPiU95mhldP7uZnSen+A+zmZWFXJ9Cj9GAjWKXUv8c3Lifgs2AZlAb9TdPfEdO+gTVSK0Gd4gKo75rwlvNrhuNvKa1mi7sSlvBSfgOX6RAKT+Yw5KmHS8eRd8gBC9W7XHSYm18CubgSFNp9Uj07C7ZyowXX/0tnQn2yIkJMnV/Dr8xyBa2PGvJgcbGmM4TUtpOc0mwKNGlZdmRqntd9ArkgQ52MppoJbikOFmQxFel3etVQ+3OyHJYRv3wnZknLSGgvagw3gXH6PEDGsyWg2yVdsLdHQe2HP36QW4yEzU8nLUxk65dgySqUymmAeVvD5P7PpnIBzpuD51YLV/+/rAwphFmg9nJlTrRCwrT/+vHP/FHAaip3lNMg=';
  const _INTEGRITY_HASH = '8cf2c63972d8f7c463af39735361a427a7e7a72377e3587df9fae45d574114a1';
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
