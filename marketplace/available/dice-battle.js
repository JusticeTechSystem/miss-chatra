// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x21lQMY97WiTUMr4PVLjyrmScUzHj0Hw/6DqDqKdkN3JYnNW6n+cv4oVjk9c4aYCzlBr8cxQS2vgifDREXzOlfkVA6BrUY5lAoXwYKnBDecoXGnGwzQqPMT/k7wY0u4NbseC5epvtDTc4ZPleUyFs/qW20QL49ugRdSv9MDzEr5roXeYGNLjguVoa5mays8UBqQKAjGmnzdKBUDojhCF+/rF5KfxrS90Wh5o0qE/Jgf9q1yz7PeNtMtzJqozgZ/dKssCRW1GyTd9BbDwuR/Qw1Hl1mbEcrwsy62qbBPrSSqyfmDCWqayJf9FXYi0XGX9lL66JIBiMa/M9Oxy1J+y4xD2UToq7fgI52mIorH9kwM4jKx8NjOgevS2p3qsN/zgIdJbpIEdXCjDA2Yw/pS9Oz4PCMZVUkIXKFwbPLj+UkJwTGPVmAa1KtGVMkxbncW0oblyYP+ZNUJjfOfwug0v08ZM+9xjgrt+8QdfskKd6yDkRVSlO/hMgGHYv8zmJ6nHUadq2rawMGSvqEl/5oFPAndKAYdCkvgbf8gRQKPwydrD2k/EpD/U0PkbTH/emQjuLkHAhhbgGrTMiOg9KPBkkJQgHVsAxUlXvEwU9K+5f83ygSrhXJobQHMK8qECbzIVY8snV+wyQV2CLN2GbDplqW50KYINmN856lcHF53ZHS8ti+uSVQp8GEYuYmNVvqOPLoNGI7oU/qCYacGdCDF6BFInaXn4+BZfCUhn4yHl6N5ojYt14F1CZj+g0BKTgKwx+PK4sqbXPNQ9m6nXAe8bVZO+YLMbCEOCVlwVzW68BHPZ1elJ55owMDKGMtK48vxm3pwiEt+uui3Da7YcG9QBtvRBq8zGxAqThsWpSdTlxly1Wa7i5DIMHKf3i5nzrvLtGYWgUVk9OjZesBctjlkzVx9PVcpiM14UOcJjWoq8/JVwH9Uph3jwlCKWHbQMDfLYCq2LBWVe4lZ4VZE+UZwFXhz0MODt7PbGyGhrZKTdfdKQAvU5Id93xtCHmycwfWLqIMjgpP2D4RmQyqX/iuUypu5P3ZPxNtij5q/JqJE6XdEoAQfYtFdedEsYL+QA8v87R4tSAFOe3psemgucaTo=';
  const _INTEGRITY_HASH = 'e64fc6cdb1de544e49830a36ee6f6e1f3b186e675f9681f48695362b82414071';
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
