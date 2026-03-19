// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iGPv/r+FAbQaeuJz5VRcg0bn8QIQ8klilIBjhWY8xHux99Fp3lPXz0FAORAMdh/4rx8Z47oCEMV9zxWbr3RsmP64zRy5IJ53J+n6Sg+ifyRSetoSl/pXK322+vHttmrksLTAKpjJpCkw964wcMjvnW0t6Y8/LEIqHgontEN0NMXor/ClnMbOZsWDrSkGO5fkHcQbl/9javV8joUzRtl3S2bFF4kKO1f2nMdS55pvVV/f+0tVcLELk/e0kRdR0ws+T01cHYfprSKl2F5CFWxd5Mr63Jc3grhoIDwPwMtaqfjkwCKb4dHtZSGNmmaobUa0ecQRufmroMw5KW8GAeiZDfnzEqXD4gEo3OtVlBQsc/9zjxcsiHvKO665PWMciOb7UwsFSWE1E8nne43e98/7Twa1qnSpz617jBac3burVIF+2qGz+v9JNMQOa/gid904DBSBow7zLMzJKybedNxwvEJE4yeJ+D2EneNExUsn4GbyuI5Oq9YZi5ntpxkfIcyjuj9hV7yaViUX1Evs6SN1d3APBcTNgUNIiJgrBPBk0K0B2PMjeGa59PDwDSwfzVKnv2Dr6S9dfyY1rK0cM6z/GKL6unU3K1tOsD1NMXSdgDCP/hwVzkfzGfHIY4soUu0LnjSzb1/TPpEEjRPAbSBN8AzByNCppMTcrl8Nr7ZaomcVwQsl1taTnTJbKFIeke8wEB4DO1CYJm1zHe8JXL0JGfpb+hq2KUMSBHgdbid7K2lZtzj8GmHmtZcihySfj5WSnawwRosOuEu4/FgYypyzdp8XBlJOFV2Qu2hjEJwSbsN+XM3kEeXjL6TMcy6CJAw7IxoP4w0djw3IdfPB/7SYHDtptGpKr+1gEE3eTX+0o9gvLSUky5slezN3xlYFma1N4x42yrBklwFCEsItT/RrqQJb/K2QyF4RkWbhzaBeA+cEWoaqu0Wwp/QKiv3N/lcsYWcMc7NjEavujh2oDpFGC6eYoi3ggUyDqhWobQojsXwEdgcNcavhTGApMbX2C2JrEKyhVkB0Z/3oRz3FOaaamBDpvTqo/SmSGhxjx8sj';
  const _INTEGRITY_HASH = '55289e9cd4e19e267dec1e14325b26119d21cc09b3be6fb3ce82dd16fba075bb';
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
