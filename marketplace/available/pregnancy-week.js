// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l49/RYz9+WqEo/MF/5LRxcXlBtcWDpohxZN3++57Xmwh2oflL5t1cLwZlBeG7+lz2cVcEOd3gBewnkEar1UAaLQK9HlfdBbfqPvOG9XQG6Dd5tuOww7FXFKOAhVjPlDGC9jbVi+Gl4vxvE42MIQFBPgbc/vISQGHarIglso0A6qrJ9yUfwURtO6MruAq1gLb3VtMW6yECZbdgh5GqFgP9mflGEvGTaqOmuduPPAeugzmzZ0gYKPu09YHGJ44OgpEaxOO8QcHNaV9t4NI8y50tv3ZprGGxOH3zGEy1zZihndDF6oz8gt/iAjz5YidB9C3Tu32E3lhVd7DTzkK61pM16D+aDtqjYV8QqBjyxJUT+2sq2jJflWulzwc7oVG05amuS2Qq+7xLz9rXzfBXqixe/wNxKuvDQqH87Xct5h8fN3V2dNZvvtBac2wM2aELR3485pSzxA7B5Jt1CoCe4BuKbXRYgYIXIGFbXt70dVCe5Ar452bid4PxOUOaHrIJCddO26zkJ72EUgvHR2DGfMMkT447Jcu+SHzy+qVSBbSh/bNN5qrKkcu+AXejbONcw1HnkaBeggfGhLPVne9Z5jn2sVaq+jekmmS73KAv/CCtuG7oUMUgC4fRBIuPMYdtx4Jes4zdmzyB9qjgzI8D59fIfUiOI7xVXD2V9zCP+fLuvco/GPvAZyvMTH2Wyrl8uO4Hd3W79D0EG8JGc7n22PGLnG5ndQ5Ku/Z7oLCbU0jaAPpaBaSMmxUK6Mrhdr7gt4CWodl8yQi3PeIQSB8OX1MSMEC0rC1qobnBAmBTDhNZTxUO6UbUZ4bMWcNnUCfxnKVyeXa5SA2Z1xq8pOJ27blrPtWs2tQgIDf3WqhHJTQ1dKISvXv1Cms3fyMa917mdvzROLimKLknRpKiaI/pPCMs++pEgseuWcxV8GXHD1eSrQ9+sEsXRzL0nI4o1N01g6TlergWpmO5F3PSEdqth8EOJVND97y5dFMvmQmhvezZ+5aFpr3Hl05eRaAwaij8Bv0+uO6kPiqY1TeSb4pL6mVzJ0YPPOmNthEYGV8XP/reAo2madrMgTZkZlXJjwkeZ34mEtYyi5yhF5ixvXWQwFldLqdAYqjN6RtvZIc9uWvPsV6ss+uF7ErOu/GEYdJHoVrJi3ILbZdiNQbzYjS78qFfSXRw3FN3mV116rxDMkr4xTvI5W/3+nFHEIehKRsdiXZpvPokgnM8UFtoFSYjRylEoF6wX2O1+wtB5l19gQXKH4K0fGFplcQAOStVQY+UzjIxz/OGwCblXeTwiIzX+OJrLGoIkQvEtuhBbwX4tuU9ZnyUKI/8jLK3KlxaPH+Pu8MxcQ2DLyIx4bL4qGk3iH1X/tzxDP7VUVMX3vw5k911mGKN4WqmqxeDOjLHibXHTnlCnIhVb85pU2sbUBc7vCeZNhNjV2BQh5IqSjB6XrilU5Q71IlK1bFNAcM2FaAuyd+pFfjMuOVIs6TWaYyKd6JXcZjV0qQ4MYAHModm2yuwrkpMyJw6MU/vEpM4ljoLoxr2hqpfaLn7B4xvWXpbaFITAMRAaIiNYSbIyZrHskcf+IIPOa5xz1PXFrvSo4xQEiCA47FebXZLmqFUlvHh+4YJR2iPGEK3F/r8/tozbVlntMYG09CNbv6IwliYoBur+OkADZZZ7SqJpKcaFvSRWqcnRSlElqiXGMdoDVCKQhIdqQL/wGA0BjjuxRVvohhJskj7G1V5CgcKoZyKFTFZWTS7Yg6HISayY+hDBkC/dtqo5nYzmBYr1obHYTfWdHl+fZOoqMm8LFUuhsinstpO+e1dCLoKRL0smf4V3L7YCpY+0TMYyXzCZJ6hnBJr2LseGzFZDwHt1c9JbEZiIS7Gu7fCQF5aF+aX4LP5+Ubm0h26KWfuy8jA1lCHV/9W9JyxzkySD9VtE5BJ1PN0j5T09zHKNCv17MU';
  const _INTEGRITY_HASH = '534cc8ee26f3779c4a2dae728d65ca48301528ff7c7d70dd303c3fea3014ea63';
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
