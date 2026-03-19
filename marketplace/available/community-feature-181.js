// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KmvfRd46ZSwHajGU+UiIoX+GyaoP6ldepZROypCastCxHujtUDExPplqRawQyTnQYP/bgW9qEBEvxBxChltwIQojz8hkUi7XYowjBrbr4GWlF/9N/0EaN6ZsjQ4ereAYLx7CKDiOt9qjeWXEoTrgADBiQfQ4K52HJue+/XZKkrDPjvieUOMYNuU3iVA3l1zrccMel9bXO2uYAiBLn0Pdqvy60MXAMiEmi0WjcusJ8UUrCPyyxXC0nuDLOnI+EBhv3sOFXDtqDQjhUNxDNIsyQi/Baj4lilkwxE0pU7uPxLOYne/fkHaN9+pOWP3WJKytQVoEydcNXft4l4oJ2+Pay2orOyorSQwRDtB6t6RH/3KQdaVE82CrDWp4YJiEAKrqCJ2lD3OSWFlwvltkHi02V43NCpDJnZiRo8pJy5NQZBcmb6hOgBLYNx14TDZkbFYhWubQaXMR1n9hcpTNoEMQ3HXZNpvAlIr7tKNOmMs+JdYo+Qc7BXQrpJvvyfEDVWuV2ZfW40ju7P5QXP2y4OHBut48N9UPvYhHHd0IIe/NXoRaw/9D8R07t5U1pSJ0oLnOncR7pDrdqZXXhLqgbAwWaV0fz7UsjUA7QJdvESIg4VOm9ZDK5yPgdZXisJq5zgGVX0N5OcbBzgbyJ130l9BoFVz1DU30e+ljgRgUBxuw/ghd2iYvgq9WhT0SEvut9DHSkOpGD/oTALyZlFmxxLUAGq+4SOes9Fr4';
  const _INTEGRITY_HASH = '6ca48349e5851b5271ecb751d45ac44ddea7ceb0023e2866d6081b161c79c963';
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
