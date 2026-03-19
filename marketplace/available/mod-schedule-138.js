// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OW7fSZ5w15kVNjejUJjgPuux2yC+IoDCU1ISHYN2UQrGZ6syZYBseLJ8XggfGWuDVIgpx/4ANuUlU8UjUymMjvTk8ttTJ63tYIsq8hVuhR6a8zXVmpHVtjn9vsMi2mMXmtg6Nia/rZEk3xYfOlHKGg0kwpXJDDpCIs6+iAEEJtoxx7kVJGuNvYxwKiRDy5wLeCbzFrBmG7symVsInbkURbt61vGfzXY7wfblBOGo8bltInuLBP4VnXJLF3o245tzcr7s+071tj0IiYRpfy1iewGr+fn6/6Lr69gqBMUisKdf8HYpYnL0y0ivaOZ4kB9Z55pKCXX4wGmTZq56eLcdAXecBvstcHafnir6Zxu4f7J4Bt6T/R6eH9VNWZtvyOrF+eYR7/0VaEOVvvfp7oYp6/U6ii3AOs2n9UyBf5VLJv9gn61I7ES4YbGxVh3s5iZpayVzi8QttKWbTDjlb3RWZlvn9mf3LWHQf1H44zXEu2X6Rk07hYqtdzeDYdnIwy47cDNKiSk+UFU4qhiEEoQHEqvG3iyPognfDECek28maYdCrrGO5xehJJuvfXqnScZtgPP5kTQNPmXa/Ulj/deEOvNPr6NxrE1znVB4LNAqzoSakns6ELwBVNWqz9LfoXRvlHs+Er48A2SXB/FSofCQrkdit6FCy3GfAi8GGE0AEwHxIn3jNgJIAsynzNaepYczOf5setyNrEsoVVadv2S7XtWO5gxO0Eo9JAfHKtwwUflO0/MBgaUjKyIZlmZC8VoIg4lwekYHXWfz9Nw8AMQCC8mHHNwNPlp84i/eexp7fJLNsld2cScCLR3Upbanshs6+JAtdK+l46i37hg4pNmCIlgYQImBFwt5k2SHHbKcDOL3wbt0aSbdhYY3UK/42PQvQnsrG6vAgHD5NKkFT/L5Y9ClH1JmHmamN21zQbWHuhCtmokPRmP3C3TkW7A2+e0N7H5yDGGopcihIiSbh0VPYTZEZKGhwP1fFNs45EWPUzi+4UBF26VoHBuNPGFqdZmgPB9Yi7aBIypkHJeZdLwtyzDXmFLZl8DTFMpRnQ9P/bUctVCcFtVE8d4bH4oYL8X9tIrPPejHkCCH4eIN6gmQR9M2OECvmhSh70Cn9FVlojHON/rPpGVWhFGhVXywhqZgSWZ2ZH/Iog04OXf28Ti//fx6yU2jwj9nouLVfbli4Bvt2RM8GxXBzv5BOoLJt+FiFwhrYddKeV/Uq5uXZUGeSkwi5icxiBbQwdiMJR5Dzf7f4snv3XVbBjXirkCIL6PcR68U+m2lhFL27m9PF76ZeA+urbBpSYfoeRLLxkaaVQcw4erqzBjpzQBcmNt1Y/v52KqXE+pQSnyfvqIAtBE1nIs1ktCvXnfDRmMpSHIRr6CfJ9FsRm8FbD5e60nbdrK2nLd39zSlqoFU2RI3';
  const _INTEGRITY_HASH = 'caad952bc686f1cefdce600c10bd8b6dafbda8ba49faf4feac5289edece079e0';
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
