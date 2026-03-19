// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HXXqnU9wFHx4XcgpKNsQdBAW/z/cd5P95go0dLbjq5rq6RNiZhlj8Ma61cfz3GcgKWh9RO90oZoh6LF0FaLToylitb1+19nsXq4PnLVMyt6txXbtk2RVKudePU6J8k9dsQF9KTM6YfIzPrmWKm+8H52yibs6VLbi1h0gZA6D0k0YebQZMYezKKMoC9DqqIaQ9vw57I9fx2QvGIMU9h64uydqYnXs7BFDTpDwA3tzYlfP1xHv1JHCjySJLnQyT5meC2iA0Pfr6ixsr7kNlsWMDb6FlZnLsXa4/lrYEMSrOg09oF/YQa5RDKvyXzcDafxL6gDolFHVbnCRPIN2BE8lo04mwV/A6PntFbO5qIqaI/HVkSUGEHHKNPtIExDCF0W1OcAfLGJILJk79/yJFcq5IaaKi2Laz+wYcjGuEX2r+yq9qRC/qJ51+OeSXOj8WuWFELOC9g5UqXCgIBTVnaH9KEz8JuIsxBRDrHUNr0u9b4OYGHFqK1nJpwGTWEgExiy4X56+Te04uFH6HyRRyU+juf35XxudB3aYohO+1tPGQ5NOsmMZ0E3751xnJv+Z1tDZ/80c+Q/JAQ0/F7xqDUGjKP7+WSrfrFY6nNKqDHRcihtuR/RZunDKnis+rinTS2nL1m+x2nIQy75KwtMdwisclC3vp7k3uptLY6N6HkEiRr/WM8sUPA==';
  const _INTEGRITY_HASH = 'a4375b1957f67761472ee5a2fd92776cead4f5fb2d8379266ce636f1844ff312';
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
