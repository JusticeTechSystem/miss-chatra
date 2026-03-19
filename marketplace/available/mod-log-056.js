// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cc90MWpFpJjYyJMdKUKqX1k/MhS1KehcTy4zaoNQq2uGla2ntrTuid2UkcfLEEoPXllCULdnJBQF3yY+n6SSivubxzad89GjqFrz384ojW2Ucne5PTw/5A+MSxiOZjlukd56WUAIzyIo2NmybWmIH68nmEKUyCh4kprPDykgMj+o2mtxDnkMNmpq9y/06Qxs7pTEYqhfw/scLZD7l1tH5fMLywytDWe19ee028nbVf3W/TgI3GS3wP8Z56IREVKHF4vYf4GjtNUs8JvG6Xz9L8PVkk7AoPDvBIQppbuGvw3QEHfmuhhOvbT67shAM98npG9c2CpwJFhklDhOGqRID8QG4zlv9RZEERyQsL45JLjxmdLEjmLTqCPIOY8oWbi4p/aJE1HeOsXvlucH9aHmAKVhxMe5xE+2ueWi1GuWbNZOIwI0y5VEEOoFNV8F7xwaZx/ntQa/kqrgPCuVEjbSPbMYVi8i3ZTs/9r2CeE0IMlArtPX50RJHUQDgjvmT0i29evAQFaX4vBZBLGq+ZK1MTTwHB+hvHSNNJNAbddKUzSEmVV7oyqbqSeQKWJy7M0X1wMlafXKxUQY3pUWoD7aOjN+oU4XpN3md8zTdZGDT9EZPGlWKeb2QotjJ4tlw+YsoarLFuvXcKa2tdQrDPld71C5GeFSwiSIatqedJoOQ5jS8D3fGPT+D7flEXKuuaMoiXLh98W6r5ux/M5HszLaaGNwS4LW38qa1D+PwbbSKtR2sCru6ivJlr1d8AuvUBQ40emX55y0LTnd7MneHmQMniImHHladh8wZ8TP6e4Qn49jN+c2vjCu+e05WdFIMvT6UPQBLqHNy8AxSqOF37OcpS2uwgVFvdGQEjI3WRgMtcO//sTXEyAfVFM6WcRk1hJEb4KI5u2D3dslrdSUO3mwz2T50qCIFTxUZ8dgeJPYUnGVkrLQkhv/rwuB7cFtcA/ifz3Ys2szERbY+pc2dAFpMFu/A1DjRPL64kxc7K/uNYzvWq6w6SFuC+oCcihEMffiTpA9rIr6mOAcf3bC3j6ewIEawpiumKxiKhE5bUtpOy88IzIXlk+H+VMmtFwkysyXd2hpqljuaxIentMZyk/wNuIyZrBmpX484GO8r+zgAt1WDzxnO8lAkbm8UjDb8IDOMH2KHRhm+/Vq4vg9k3GILjUIkod2IjPBASgGY+/Y5Z542rV77HSJBmOygzd71y1skftklUy70NBaFH/UsCl2EPASz5Nx9OU7DbIGVd10GUQiFZIrKJnNWyG3W74TB8i3pjyLl7ODhungd8EDx07HNeX4Kl3H0JETEuTbuX3m4bfLDO1bjONSRN+Ddp7XTAEXx5iXX4M=';
  const _INTEGRITY_HASH = '0069dd521f11bcfb387e618ead60c38429f9a26c7c77a9ba6f03e036ec78aa38';
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
