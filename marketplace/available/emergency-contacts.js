// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Otlv3+yiFZNdtb6FtLlkgOwskiq/quqRhEI+d8xUvAmXav3t+4BrGb0jF7vi3s7AlDKcxaYyMUwfBf71+v0spp4bsWhG+hYLjlM9vK8DqaVGmZnQ3mBeWFFIOaUTaVBJXCwL350TFbxe66BURqwVApq1muKZ9Luu2Y6yQp+OKiwVsPJuU/x9mt/a6rokKktZSfuAGVYT0aS7fRRbfbCo8USH+mCODV3/q+b/ftpTpt57iXJr4OJkhpQL7WvFb1nyy8tj7vw3IjANhEgTcq5woNeY40xACR26k4Zkvhbi00m0CfzbFSFJhuHdOeuVlSDS/fx+GEZu/yi4lRwStwUPDytaglKGgTeGyA/ruiXn4kcwD+CozpMDxZw79Rgj1olClV8dDL/laD7B+bOpL6VlnhknItPFuBrnWxtFwdZzmp/W7IeZCENrC9iB5YlzbEWn6IBAujM/Or2finqg2+rP9//VpWguBA+JUiFvIu36KtDNifUT3+sH0ulgAogiGN6kD7yEkWJJDMOS2p5/9elHvIpjlGXRa12mggUYM7ZTrxdodXzOnG3BCqS4jCM6bZIV5wfpoBOxR8PiIlxKo0Li41DrReqCw2wCEq63yBnzDzoW';
  const _INTEGRITY_HASH = 'ad1005fd4723729a92214c9bf23f69c67b84c3553b591230ce9e96d2ac23b33f';
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
