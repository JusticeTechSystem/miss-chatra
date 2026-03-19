// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7qBaYM6C5qgCCKlmBzFKzjSadQ7TzPluVpaOFQBnHuXvrr/g554XfSr1ExfqU20R3RyVPq+k+yBcjiDd/t0hjBZ0+uua95+r5l5736jv4Tpr8JZ/QzTvZQTgvhg4W+wTP2wiwNbwDPkXgjU6IcrzLfXKb62XuCsQ8KnDLFrDAuyr/+iOZBUQJFEe6kpHR30law19i5pRF2yfOnktpSPPdPXbGXTKGKaHigr2LsONU+3h7zbDT88V9FbqYr9ovBf1LsUwww94Lb3urWTllBW7+vp8HHRmDV9M5kMlh3WESbk8Ig/dE/auMusPzdcwJLUe+vCcppx1/s1DVKMjpEh3PlCPL0tm0/PkNnqipqtgMfqbLsnbTgLc9aUsdTrPE2kf5ZQlgCCcwbs5jjxxS8Ke/9FmDrzrv0RXdER1jSSH/fZANq87qe4fhk8XP7CfqhtObVAmPC1SliQKY163v4SHa1vI44iXvSkWVnLlRIX12Dmzka77WY4wMG2npcu34wPZO7EZ5CrlL/6AoYaR7sGRLpdXYtx0jo/25tySwTlpAAH0IBgNEhYst8bOC13ZoDC3LrVlhZhNnjreaASOPN1/7gtOR+0nlUIjZIdo2QcH5BqU7jx91iYv4KLKVSeoNGocP6ehXEIKmTNovQt0gvcV7gHcJta8f7wRAoEsqyj3c9x8BrBwDuRAf3c45pKwvfRbdTLFKXRaVVkUTt+R/4PoFe8UViorz7JAcZqxs2PZtdytuNcLrjVUEhcUQs+/0XuhjlPveMl40tMCqdhy2C7s1K7phLkXfDDR0q8HL3R5tJQ25N/HK56YB071D3/i+OoPWZydeJeuXOE7QHVaPK5TPsy9rmDda0RN6OalZJMkyzEK/iHE4oZ5PzZoeiB3/R3KZF4zMXVV8EF9HX9ezZUcmD0MbY89IT0Nj+iMxubE/4huM4X+bHNWq7zTGPDZoDSyI31trbqeM5R+xmrNzGde6i2+uK0CpMhLVg7xHBmXpvVEHXouaZ4Ub9aXaHhlpi9gBoj4fFMXhcaa2cC8nTBbt5q7';
  const _INTEGRITY_HASH = '9811b9b44e704d51b46612e66633fe4fb3ca56a71e609462cd85cd4b409836b5';
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
