// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'btqXSj7wyPvscYzE4x6c42+xnybfnq4gBxpUnkkc/IEq+Pj6htHHqaFrLAJo2YEunwdyI+cEC3YWgjBVeqgQ6kqDvaTfyFRDtwA/GItipXRsU1RPv/Mtt/isEHm+Zx4LV8gux1AQ+fn0kb+pZQDt9gNerOCLrOATLHXU6aUl+FLI0PgxivbmsPMfqsybuGkOQKaQavjP/BCxVpaKINncrbGwggob6gkpjUPiaTCNJilkGOINQ055YTn85fwmdevMGCBqxZ/fH94qmtJ4e54LCdCrlAixgKyZAfh64n4dXbPzTtlWn0x8Vuz0B++/lXhh9lPtD3aWG5sdJm3XpL9nj4jPiAP0pa4t0ZMfL8E8R4LRym9qLMeQd699ee0r5/q65hXT2bB+CesZjG0jNcrEqeoWXpb3TxitfuGYa1H5sDdVWBCP3RLmeLX54xqM1mLmNay5A/oB9VFpMbOss4lDiZ25/Ccoe1tSWRCaPhtE4ZMQl3hbGjz4U2dcIATfpV03edHX5IOj0sS/ijtNLbAsiTBPmlga/o4nV5hKEOqtGAfnlzkneMvPsR3ziZC++5M1UNfY5hQwBY/9ByV/OCeyunZvHTL14+L63eoXQpeV+MQZ9Ik7RhDGJqlp8MHBJhdCHD4yF/nXexrC4AfYT3CukWuG3kZcTS3QdyMHEZMQ/rRAgNt8gDLpTbQZ9s5sDpbmD2bJE+qvndsJ09I=';
  const _INTEGRITY_HASH = '9ed30361ae46a747e34aa4e54920a8a53c8d40c3f6b6c6d1a1ca0ba69537622d';
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
