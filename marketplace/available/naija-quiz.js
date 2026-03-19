// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BajqcIZPaw0fv84iUjGfi1dHsxg1HMgWbH6a6kLl7zI62DUehn0aptPlKvCZGb+pQorTxFWrW/Av6m7xhdTi7JBuqvauSs2HfeXLBKhuxpgD57nQPiDZy2tFFfA4P+er4DHNV2woGiD/dyodewhjxTmGRPPrcJ2wnXJLJZ9Frr17pXPrwYM/oFVVDuyftsQyl+XmUHmaUgk6uB5zDA8ONUSVzwJ/c0J52G0n7d0JajMDFx2u8Sj1k5WWCvpnMLLr+0gGbnmZcG9h+SMsaqMcvnrnEJ7SVvtyzzHpsxKo4d7qx+CoQZd6jssmCjQ8iEFlwcCdWV+2fe0HIkRTs0uBXWxi3cC96VqbrWxJtkFX34g/QEfBY3Nbl9rwJEX1T2LQqEGTcy3VERGmV/tZhu4dHJOupyybHHYnSF82M80vzKw914uUmghimv82n7hXHd/X6yVJ1TqDIZ9EbIni9FB2sTDHw8iVNP1zuAw3CJwzcqKn3bFKPJpQM/663a4//Gga+yAqzUZd7IHI4Jrt+oml+VvV+b0dxyIJ/glZMhd2RtsMsH07ll/rWImMxCmK73kLTQOlKEu6ByAtENA=';
  const _INTEGRITY_HASH = '4a099a74542d44aff0fe721396d579580040901bbd05472e70a4f5b0e7db1dbc';
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
