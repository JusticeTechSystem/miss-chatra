// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'osP2HbdXzW9XNy8fJTmeUmc1L1fZBd6XhvnQGE7zzgQlfwLddkl/Vp3n5YbGqxF27XbRRel7wCtoNmXdJ6leTcRTs5r5p4TQ16fYHElCVCZtMI6RIFmwEnCtp5B/oZ0SwcuuFhvxZHC4HWNZUQZLZHY12QOItXpWAq2P+9fyU/bcHnz6K3fQyKZ7uvRUxKqjLiTdVT82SbS8Vx2kUu/d7epneYBc3SLtZ27AWbb8EB/L9Bmtmri9x3suhEwa9zDrWvuzTGW6qJK9dLlqc2myJTItvspOJtrcqWo5n/p2WTYPw5h/YV0nVdWbdz5MfGcUd8Ztb3jaJbUXZmpiNlYJ+zWP91q8zwz0YiLN/CtqeLFKF9dsG0gjPSSJR5RgiLFzV9k6MSxVK/EWGhR0lcbNUgqLsT5pKa1gqiHc93fTnL4ZxBHLKRmhvcxeRt4ybtskA0sRrpfSrhSHtf+0tvnYAz3qQq2FDWm73zPBEtZI+mw7C9vUdEqTjFfAO8A+EmTbM20L9XCR2U3E7XVWg/EtKJvbIL8GyKuai4pz4A9cU+6TqYE0yI9Zx1l4hFSws6+GKLHl/EraYlBZqb1fWrQK492/iaEx9Cd4hfWI6IA53koxQDx2Zy/mXNO0boauemLENi5oPSpRTm+q3lNIEIDoajgTl5dBLwLYi6Re8Kig80GPt2wqDlJVuc00ouYLRtU8aVmzWL6oGJjFpQr/4KY4d1kvB5JNEvrw9nRJNoWoftxPBcFjhqUw+X+BGyNZNPXI1y4sgEPsrMwx+KggNnyL0AwvnbnXMb5aEmV9j0JPFW1k1E/SQUHClFpg8Z7ZkdDuzpcmNJf+N3s4mjFTQnXCMNsSxWXKGhoaf9gEroc0ItdrFBicC5z65GS/+cUM6/1GdttmZWnOkhbEbZiT5wlcq6Rh04XTp5LVlNTrMBWm2YeIhKDOP8Vbd2TxDV2nM4z9Q9DMETeuKaN8QkEOMYKyf1y7+FNLM7CHWTpH1zuDIButbIU=';
  const _INTEGRITY_HASH = 'c5f54e6fe8c529e57fcf6c121a3c7b04ef11eb2a8a745c6fe4989db1676fd2b0';
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
