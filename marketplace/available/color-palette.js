// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3fdI8ACs1sZ1KcGvI3CQRlHn91iazs6Qc3IaRyYyAtSWmMetB/U4u0FR4DXUR2HnmbHvQ8KqlpsW/ksV1EQCDJCn1d1Hr7yFviAjXd5HDS+kEBdacw10b0OMT9BoRtOmkf83zUjusZdIpu+ErSSRdqsz+mOT3B4QKuoSNZSeMjP1CpA7Ph/E5SheD4cLKUTVleCKm7vJOV6Us65YY44NEUlFifGwToVdPVj0eWqNphwtaXK7Ww6xtZ1O0hlRkSAM3pnNfCtzoWQPbh42m27dUZ8AX0+7G+MUnc3dcwKbc9wJe6jajaQDuFDih9UymcaPhYExSRq1BZGKVUCAb6B7h5tARPLbGEjGFMlwDTl2bGY2fUpKxm0eywB4KCI12Uq4onoGkYAiRc3oXKyoqGv6QJgSZSSJOvzwaIovZ1Ygk7Q3RlGdbnj6W6R08tbKuLtHuKDuZKetMp9rA/JbecXG97lOzEV/Ekp1BJzQi1EoQyUEr0SAKgx1dAhF07G1gIc9O9+CpoKfxh4Ezmf4sg2nF4NeanjUlK8P9JauxuvVeiuFWNvJ8DRpm2h99bEKw3Tx90CuvrIJiczlUnZQQ9PmejuSF0ZqOTykMVCGQ6c0M7a1CXNevELMMGy6XJ9N5BXGvTFOo1yZM88lFKI+f1ijOKic3idj7lOSp0F+sirr6nkYKlm0AVCvDW03augSMnBeCCVfLD4J1uhBYCi4axdjgEQap+zupsn8icle8Bd8CQacaHZDK9WJC0NT0NHwo4398nf3sYWABihFJ0MtAGwQgRSPqQkcJXtlzgjM4vQ5E6cUnR83d2zLhS8X2gH2h7yz9qbsZAUz9H4xQgLzEPUmkjgaOhQO6gg8KCTBW4fnCzU28wIK7k+dyGDvxMJF+QYheMqqCRmn4OatM41Oap6zui+MGL75KY9E3VW27DL8KChOhNxtRbLyyT5ckvmgMy8W5S8mR1OEB8lWVTZZyOsUSVZQdPa5NJtqK8Ws97r3QXTs02c36GyxHXyNSIySiU9Dz0MedcnfbhQX7SRguAadHvzYcnMANLiFduWkxHdQ41GBq1tXGUOpB9Yl7RB9bKK6vIV5ez1+TdbJe7x2Z9C5gWocXXnmP/lWyZFmeh3WRNQUhd156CYhfDV1fs/ddtjBGOOe0W3ltcQYfWRogW0R+45k+iy2kgyhjsAH6I7IfEMu3AOMW4eq2ckTpY8z5H7dNByqZ1GWGtWuV4PPdmGbQyO0BjJ4HIT5bF5/tHu8oScHi6KEVEcxmO40tBf0khqZFQKOH4gxTZQ/sQCu7ns8lX1KqdGqVWS0JokcC103vpzIbZWS9ljK+mKU653IZpA+DUriXZPjxfO9WeSf0Um7c4UWqFrzG5Q/kVeB0QVqi5hPyvVNd2yphPGFF9VQYA6RhXzzwo73CA0amevioPB64MOrwqQXeXTRr2V5zK7DTHN72LJGBQoLLq3SUnFXy0ioZFdOe6YG3HOhitWT+T1tfZC31JtzGzq29ly+ydszlUZSxYlCHlN6idNzTqj43yQ7N9YmzltNdiOSM1YnRTiNouLCPT/uNHFc68AggW4h4kl3XfU3aYQQgdnvqmLNRBC/ITOB';
  const _INTEGRITY_HASH = '8244c509721475e20dc34589c62f0a0d9a23be25ec07f3fef4204373834e262a';
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
