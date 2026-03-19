// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UZYq374iN/zA+jBv6afa+T1JAdnfqULy/cXub+bnG1ELtsNiVKHccg0cbty37Jd+qpH5iMj9Vkgqxka6RdZxCQB7QbZuSgQ764gOAUpusfCDArIVjRcUJZAMtz70eafCPnklQGsJtjI/WkwL2kL5o954lrVfhmEmAP20hm9LgtFQFcTb8G9tVq5Sd4srLiW56VN4zQDjkf/hscR9vZan72QcrLSQau1w0XJmcigwwXHtvC7F3yPSQOr3Z+IvtYK/y7G4FU0+diUcdphrujKyvg7NszMwbnM0Xu2wpC5Ox+JN2QL1ezQZc6WXVQi3KAzyB+njLxdUXHiQXlrRYARt/Z5zwtAV9qCWj71nxTLQGBx2ynKReReR973fbR3v3WdKxCVq/Bt8ZD15hHz73J9C8uk5umIS9VbwSArC/GFBXI01Kn30Xx+xK1F0Zj9ZjDlleqePxh29cki9s4CkpD+hFiAojywNwNsOOR4OUJW/R7sanRsKtdRDEcpxC70Q9gNg+TSDBpkqsNqHAJUcTn99wRr+zOg/BhlO9AdntxaI88A5+zDMpNmXbaqicp7JZBQEdbMksh6AujLtXOf0PBaamEaLC5IKQJUnPOHzb8bzXR1ClVHCk7L38dokzDIW3LHcdjqTAMB6cFnPxWmH3EAuu017rSSgpnIORf/NA5J0g/b29kezixnWNskNiWRssDmsxLZZJGV78MRcVheEdm36xg40QXkEMeQkLw==';
  const _INTEGRITY_HASH = '0b884135a03f5226828bbcf889ed364f90c1fe51acae400743e00a57f06ce9cd';
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
