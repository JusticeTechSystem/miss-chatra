// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aAUHxRVN2bNRgckcSN/xZIOWP5MWDx8V3Q0boKbEhT+LOX0zZCXU1NEERyxABpaS1jVUqtH3ViGcCJbuh3cTwwpU0vxOugJTdy2cRQJ8SGgMR2ofhS4YfGvpiVoKa0YG3m8s5eoa0yeDnGl6jZICwhUz6VgATUMZ3fhuOvd254ovPgWkTdFzXatpxDNK+LdB3Dif0uxpCBJBUCeAF4NLarIY14kFW9+2gfZpsaMO7EMV19HEdR4t9cj3L+ujUj7CsxqiYekVjvOjJswvo96wBqKkJqLNt66FZ6R2cc+AdnIVJP9JJd97CUEpVs3WcfyP8/oI9I+UvWo6lqLGO1XG5Zl1zYsPyf39cwbtMfp1CVwh2X802HSeqrTfDVddZJ/HpaczAXlz7+PunLwadbQ5oCEqk1DnmubIAMLDL1qYO+GhbudGanQ7ck961Qq9hIqtTNufzUXWoceT0bJdGpqm6Vxd1QC92GNYPi2yYaWjQ6ltIz8V3VcB/YjNVjtVMggU0pO2ofDznlWdkCGayHy2zptEh3cZFmSUlcvuP3JFn6gL6mdEdP9IHgxHs9jPLDB/Fq0t38YXCu/6FU50Xee1YPDK9RtaZJHlsgJKVF/6F59/hGigkGvGdewvL8poi0Y0NiBKKYPbCLNKwLmJQP/KdUGqQ+icioujlECo7jkNyP+Kg137XZ07l1ejRHh7Uf3IHszoKWoCYsnOh0jkLXH40Q==';
  const _INTEGRITY_HASH = '7fae01472261ea68a0cfdd48b1ccb5bc97e2b02c14e6abd07592d8ec05918885';
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
