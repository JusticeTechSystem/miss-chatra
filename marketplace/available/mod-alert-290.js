// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OAr9GoEZEA7pT6Agwb83UtFpC97YNh108Wg+I6h0xU/GrDMLeU1qSW3cZT8lZZVQQE9Vc9oBjCc1p9e0miqDEXkYCkTK1GdJPjrhBPY3u9IEfcqe8+H4WZvCDvpw3v/1gmX+D985Ut9QfTrBnuo5FdN4Cza3obI8x1fmKGbvWNvbgcBFwqlZhcKImTE/Kqx/b/nUS0UbcLl1JaCq6hWo7fMTT26pDj07lKjqYY7yGAZYxRwEeeS5X/DXfzqQfjaqwXdPlL4sppNXQaA/TLW8xXThT7Zb2ZK7r3gFMduZ2AVoWApUoIEeNAKMe0OE6ObD29CNoAq7OrvD+qSb/Yx5nDgs0RXA0AVTGmRQ1i6AZutQK4P4JXcOXOD8k5k7zKdCFfkbLYCQLTAMu0LJa/aah3g/bqKEyhazknvI1mdSjixEPrpHo+WfRV6SjisauM6a8nWozjNNOds9lxuFg8sYbdxHlOW7qirep6RdRJcXpLGX8M0Z1PBMvj/0SRgZ5rQMJRjrOAxZtWLDSArevsRAGbdS1Wxvj9s9A51kec2/6paNpdo3NS5bYznP6HnQTL8xuEe8kPJMVIBLW6KLOC5N5tbHLN3jgKxXOg5R2/aVS8+69BPcxMLi99PVb/7JgZHpozYLytS98pazFCtpSRSpKVGw3wrkQEHdXvmUe/6BPkhohyDB7AbyzF+7SDQfmvPU7av6I0deVi4oPWtVYll93fdsloN7LYcqUCr5/I6yD/k9P4g6Pgr2VO+1upfhdthDVEh3TYIM3/ZUf4k/XStg/YOzMJwePNAJfuyzeVu1wKq/LpxTjl6qwil8BYSgBOs1GIkTqZuS15yTcDf5AQ41gnxAorr6AEtvtISeKRbhZH/0iflf4Pl8PmBn79UzIAihLsO+wNiMhSbhEzDBcvWmnVzMMLspJMt2z36x4vgtE8kuxs9FJJ9h/YdRh3O65lTuIvgNRUg058oyHeNZyTpKJbuy8DEWb7aEwhSuusgjBYt2y2PcIryEkoFm849BR2hHEzD1icuOEO1u4rerrHiCbxH6yPQGimQiuf8ZpMFlc0uLRx9hLQsaEKkmSxlhingJwdFcU60596eo2C1hk7GMMcBkYxMDP+26k6kx7LU5hA3BzRGyzFLz1uIi5ZrHdBNk4RnaFByLRq7xN/TymfCj+OoBToiC4MWU0gLKPHr+pPug1BGvYERuKK8bZ71B1CAWjKw2wNmnrXkTCYVLFzmHRMP38MAZtJHh2nwBU/oQcrPCGAyAZXdknsE/9fc4vraoRVb6M+v3EeaMTxOQDi9xQuNTAiYSL5XIHt+2sm+kolHoyS1bWtDboQHUS5pBA2r2uskkiOX4QB/y8jhGgNWEh2bwimvQofNhaLqnUXQW';
  const _INTEGRITY_HASH = '3f3199213f54740037f1b8ce622e26a38ad8442830e009e5be074d747eaf73fa';
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
