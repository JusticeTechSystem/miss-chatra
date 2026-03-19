// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aV3c9AVggzIlppKCsNO6O16YerQBeEyk+vP8GxoJ1hCqA2n4gNuNTcbCxRuHc+2SycqECCTHZquvGEBHpeS95fJmb/5Nyk6VNNe9cI4Q30zhQP1z0rvnvOP31UtcNUJqW/6AJWEWb+UCYD92I9t7SgZdDb/e6pfh7Srgcu/8TcM7cNRKKd2T6TXyyPPJaq+4X6Pe20lqhRPgZz9nssxqhBf05zl8PeECGbhw2QY81i9fYuELq9+F8egX+uCGc5Ga1r/SglUtIDsFkYTfLga8O9M1MuBSg3hKzrRg9mW6/kHubEB7QtW7FajJ9Ce8UFy1rSnfnnljg/qr7LKCafxbJOV8qJwwk58nRtcVdCOdh6vtn066Qon3K9SZovVcTtKxkiM9PWP6n1Gws/WjIWXVlw4IFYzagb1/0Ry+pDq+Dq5svT0XeC+z7WbSUnFp724xO6yee+0oxVkOuMiqJoPRps6uQPYWFr71SycsgpmNChzUPUW9GZclWuk0SRUo/ciIVntFk4zdWv/8WuBUtNktYJZLSUMZI3PdNgPWysfTc/XMbQqYkFphleCblkfs/erEeJOb5v8eMUNXMLtyDLZ0dBEDZ1D25vLqNGhbb5tKWG44+YCyeTWiZKoJxVY9VP6ql9PIT7v7hkpPho25mPrtobNPPABJBnGUFEQ0gqGti3YdRWHtti9iT0IqfWLUXBCzABDGR4mTVMxb5emHnhNQxICvfdzfhy6oNPtzd7F4GYdvrk3UTseMOC92fl+ggmnFUZnv9dbV/IR0VukfrUhCNFZyytIChkCRQ2AF4vdrV34+5X6NTthZhDTUUCv4wtt+JUKwSUmFcmfoNFMyNQ9rn3jQCypnyX6Z8tUXCGTZFLXAA+uUfUrIPWhVxbw0FA8mAZl4DiX2MLkDallQsgJvlpFac3L1uuMq7/QA7jNWachMfNsZsgkhwoqh4iFf0K8vZC7H0pS1KiXyaTo/tDJsQJ1elFjuie8BCRDCBhJzKe+E0/oH7yIk5u6c';
  const _INTEGRITY_HASH = 'de70a24319577d6b6604e3f424e412f73e76837494d9b9eb1854553418474528';
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
