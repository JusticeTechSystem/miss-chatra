// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0CcdPC7JNEb9a/+gYtYrFIND8fK8VCJKD6SsSxVPn/Gc0k3il4Wsp8m50kbjZ2NcO9yIyknzTD7hZ+lfpEVtLXj/uz4+fVQqDaxXK8wfSurdTC9wSA8aHnB0HPSwgPeXKmzjL4flZkMs4gqzkkBjH95MvocKBblnFI97UbmXgZpz2ZxymxkZkKKqMNQCwdH/y+VNUKm9gFwCTZUYNn5Yaw8CYw4sOMrbz7saSYdCsE8NvOBcT5uWrplYT4SJJCo0tUkFFg8uGyEIQMiH2aHe+8Plt3fDzG4546tVLlzC8lgyrPaEgyEtkr04ZX1QLTRn0U1BqK/kS1RUI4u+/3CSuBqBeYyo2AuQWqg5gBcKDlSZ7MTm+eZUbAF6Z20ULOyqVZXnUavP0hwIp6gKubXRvehQsGOVdO72oBC1MHfFsVuiFLt8GOMsxPrY5cvV2XPN4vsqDXDsZEMkgV+VTZFrynGEfCAF0I14/RpgUtXS/2/26YzzAUe2qAbc6TqT4Ea5bMxhOJzw1VEKuChP/TvrCUIyWdJka0BCRsPfDODAVrog6LAWjTVhfpZGMIoahw67Mnt3jBIkcYP6pBa71xd84/xzaiKfsQp2tmXYxYlrwc9MJBIfYCVDPpkrgA8zRMAqYGG50vE=';
  const _INTEGRITY_HASH = 'c8bd64e616ef6c8ef7051c1a63ce33c157700422b4539764c97d878fe2e412e6';
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
