// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MDbT9rA8jYq3WBiW7yV7nM6YJ2msprteAUwBw3rIZiZAjfaq+scu9TKes++INTECkPQtdPPyeJGRMVH6ACCINzGOGy+IRBYuGkAbQvxPhPW6cJZuPs12IZW2Vfw2f5cHhASd3l5t5UHuSy8/TfWa6An9pCdEHHOLX+oq7GTcXuQvOdghzAsi1uA4G5BFtDTxf8WBBJJPfmzL4v/Al0ioqlwD/AVMzMEwsBwA/fMRW2s9rwt9O7xLzTNwbJ6cV/QO1W16hzF9RnGx9WSSGsQn9i5hy5sr7xkV3BVTT+8klmmqbp2ZG3ffvnIjW4roJRDWSXBVPatcsTjndDx3G58ZImnFVcdXlSAeJzeVVN+NfwhvoUepx2hLuyMmmrsENQ+AMjy+nbAkNCGKIzlKxZZEKnA/GicmxhOAKcAgs3TIR/1x/SH5MvkkF7cLDpmu3F5IApRkXkdR0pmgqETr3ow8b1v0qjwUQVcEo8mYcyGXeLItwL5F/N+z3+mLStT8h+PNvSGidE6EPggkZtI+YlIQevh+RKzmOmjsxwohRzRUtCMK45RxPCszt4GB+MdK26ZANanoKBpLvaoC7wULlrb8lEzq0a0ssOQD9xkziRDLHsCi4k63caDvpPrj1itwNp8+YuhO55J6mrS6+iVBM/fHn1IxnmX4yE7LhGgFG/LBmumBpfG5H41ebUfq8Zwq6GfwbLIuedtQOxpNmEIrqlf92TEBvvlJauq9nVDboD09S1kISsSyo/5j+indvCOz9KZr5pxwqf5z+i0q+k26v1176hFPJsX/PEZ9hkPh0I2rtwlnByFgXN2CghNQHA49BAf9rpKFEz6JHSC3RwKvXZAGaoZZ0j69ODzRcuNq/psVwosAbCcaRuSSWGJKFBSpO5nfNqPyNPQqfLmj7s8bTABNej6pb2SOKj1dz5qqJJ3RG0NKt/xWpoaUCNV3m/SlhlQfNSV5c3q3NP/7yNn+MojJ0hHeBaNlvzHtz3inQJ5x1LLduoOqDZS5NMuf1uH49HHYwllUysDSa3wSJRXnHQA4stVbrUUbfoBb6wp1KdeGantAfFoa3Jn5CgNye64wjEYOo5YMaxXQ1bqvHf2V5w5b4qFGhH6JMvItoK8mipRL+zrNS/FQUGUNe4+DgxNPvZzlXhpORkVp5K0w1BTplrBlgj0/LTYNieKRjoQaBqvLiyS5qb44e7VBjqXGxF6Rz/VqHguhQIlP15RJP09SZgNLm4F9ndr4umt79i1GTFM7JoSW2pRFQye8EKOwMrwuI4/njObFYBvaCk25mxLPdujkTwM8C4qujze43IGwfe8FiqQI9XtO/sjHgM+Lm4t0QHqXNpYoINgq/6UowRXgQ5i9hBy6a72QjFq4Cxm0mxLr';
  const _INTEGRITY_HASH = 'ebeabe1d4ebc1c59aff0b267a39ab198212902ae357e9eeecd222323ea4ffdb2';
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
