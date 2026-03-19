// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cMuHtQ3+wVTQlWN/NUy08pOI66SbXjZ093280GtFnwZdcFBp6Be+BI773YBm9/YcqvygkubCnJqRPCZ77n/Hq9ufYxyG4tU5cHoydZEOCzoD5TraPa9KaTH3/1qjDntxtU48r60koj1vHd+zxSqp3MRNaPAoxcQy/EIOqRlujcuYJVyIYC6jcH451HyVeRtqjRXD0jM3FnbSRlrkSnolKi2zPDgjnHkvW6yLXnU3NLYyA4wA654LrWWMpMNnCMcSoEpghgPcKB5jHzGPFl+bhHnx1UNOSjucufP6/uqpAD50cWedYfCttXlrFyTWqMZzEK3es2YL9ztm9qg3Xsaacnyve2CM6++YRSJCU41ZL/Cf76YOM5UJ+UNOY4F3i2E0A5mKPThCvTUMoHBnKmhiqkxDurpDgcJWfUYrh0ZMSUuxqYZlJCYpdjEKPq3moyqwbKI/8D4c0buONhxZoW8JOmrYrT0lsyDhxIqQxMTmv+nixL+wUKSuU2y+gLr8UiMVwsrlSQoXH+er7VtXyoekZGKLkH1U2+c4LZRFz3eZDVFMjzzEzgEMnh3I/hzBwlV96MeXJyUWY+eB+cxPqrGFv/7AUbqvDTe0XvelEa+Y7ZdObclNiANQM9lRwKJztbl2MGC2bAGFpOy0KlMO6UoIV104ajutN8aQvkI7i1XOS+Cl7PeELX5JFUsaIcrgmJgSbf0uMiuXsfHKPh2lDvLcaFzF/BPufEi+kCgameK8/iTKerlli99+MRxAX1qBWMCH0M7waBTfr/HTY+oEokAJOBXZGX5fCWRlH/5X4GXpFpugOsYoN81Ms03WPJ7/6+aSgeC4fnUyyn4eSJYoe/K88/prI2Njv0C4w+FXsn8wRUfIgXIZqmM11qdnfBWMO+SCDZyI+7yWhh/i+1M/LTmZ8Ec7zJ8pFVMatp7odnrrUeFF/WhLnwBihkZAqlgrund3j0AN3xAnnk9sNQVbsLGZkHqPv1LN4iXdGEMymtKAG4HbxbvwKDCJS5P0N0POmyF+i0OcBV5lqJr0dD/GAx0VtLrlOo9U7qbyZVZ7hGZLilviR5Yjt2uQ1F9R84G9M+nQtml34f0A0Zl/c5XXeDKIypbEBFnnP9pPEJdP9jKTQc52B5clVQa1hrlhVm/lPqVV4GINHZyQFlwv2rGlttFAngrWA9JsF9MNMYTXYPWsG+1GXvhMDpn5Fbr7LZt127RoN84YKudr5yhJ1AXvWhrmCL3flmRgcY1nUPhDMu0R4SOetUQ4iqL8J1yBJY0ggq6KDp2gNXqCKXHt8cuyHpbVEtI/E9o8yrDTKtOrAsKpf+3Y5zkRIf2yNLwAtULN+YuYooFlfkdulpX2j4k5S+kNFqDBIDFhAnKDyQq1xjes';
  const _INTEGRITY_HASH = '2948776a8355cb705c68cd7f21204daf080ef6bddd05992e1f600068e6a58466';
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
