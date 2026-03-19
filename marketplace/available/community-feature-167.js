// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VPavwPgC9aWHwhj1ljnHIIkkE9aPmVy7vbkqcbVDyxFsVOabKIQhpoGlVd2NuRgLwfMeYsvnJRTmSaypREziz8NVgdfY2o3P5TbHjz7rhKl0blSQIcZheyBOCW9U28x9+rQkHTGDuovsHNAQ5SWxi8lKTpkKhAiUXzZAlQv7WE6RKN3xaoRzallpMc9IF2UMD/5IjPEOyKwoKU7VAkqjBC7vTpEOKdhNt8TpAsAxH9eczUS+I3RZAtjqZl0jmvFeaBU9iucT3SygQCzMXN2U+xldDf28RL/xDUIDMVkXHDwF5KIjz1/absziEJuS3vPJW5ZqL5A/lQD4UUePJlNKhN5xXgs6C2f+nNkTA72+NJoI1S2r3czDyU/Q7jGqZzPIErUD3y3z+w0NGYEH8cJpOmFi/X1PH/kgUAoT4IHWw3fun4q04Ri09u4mdnEZxc6HlazXibLrzL21xR5I4LXw/9EroIZ/RDa5jLOcE5qeZZyaYzpVMb7P71c6W6LTv1MVHFH+mFK6gHXY9761N/CKS66XsQd2BMx7sX4enxCl67eSF7Hnc388RuTFmf2EZVqPlxjPxAsj09JNV0e5ko8rynoHrftx6kL8vsgFzOXHftSwZAlNfadx8/SS105vLLOq+h4AJBKRR2YLL385tpeKVjP/1oypzYerCAG6mCWFPcAeOPZb8RfD+kRYauT4blfKAWkhKOuNz1kZG77+KuQlSEBEpggySCh81nGFOgCJWekEHp4=';
  const _INTEGRITY_HASH = '44ec6ed85e455129064d43901feb11f22a68deb7a05f89089bf8ddd2491868a3';
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
