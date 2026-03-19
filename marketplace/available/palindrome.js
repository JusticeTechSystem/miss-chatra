// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+xh1xL4rSfGLEMPPshiVd9hLZC3vai8DeW0d7Jo3JaacEAlYSthsxXOt0hiaPsnPR3BeFIN5GsT5ZnKB+arxhdchyhrBysTo7n5VIOHmoScyNPWlpg0ANKIrtDGLKznNGOuXieooCQdjevN8XJQ8FMc+y46WkdT2VLQ2vfa21VTsBlj1KNNKGPSpAJepZdCJnSy4/MdVAGAEc3m/dFsOIXwCu8A78TbxAFt7jAXh4IluviQwkybeZmiycqIak+wKhZnke2SyyUHCcfVWMUd5L0HyL4EUpx3tLAUecMirEOLGS9Qjy4zBvAk+h4ByRvvwDKEiQ6ZLqWCmUaO6hgT7uOTAyLdic8RTSA51mB79aqNrDufX+dPr+gXZbZH2UW6KYQZtIJCjCJJlGhmRndhJ6i8c4i7PUF2aw3KKpwvDeuA/n6y52EKZsnN/1WHjxT0Dxh5bnLdgYtOFNXbklRNtKMy99xYrcE+RaDeY1hnkvvcz6Mf9ZSPbQrjjLX6ceP//VYFgj5I6tP0972WtbqJaqNPevPeZlUYAImB/H/fa39ITGRpqU+G0hW4ffQMHRvXIZibZMbG5xORCCB6ipEXM+6Bi5oJ9MnT7r00s50h7OolKtcI92NEFZcIBGL2M+AiedPAXVSrFxCf7OH++m3zFK2T/8FdMHXsZ4UqBLd4AWyGn6wmFYXg8E80TSTzwvaB8OjGvauYjs+zSzP2axXhoQwoiWePN78liGCyxn0onI4DfnKwoiP0atoeixsH31ErW3P3Hn95xQZaA9+jJ1C2Drviu3Lxvi12c3HE04+QeE+Jjj112v5LCJdN6XHepjRUhEGXWSm3saG1Zx3MLdzcfh9nTzoYonqph51FSOjIO6J2bfHMv7qGIf7pi1XHa9tReAxu8t+puilafXLs7a07URhsjdAV9zvnZAeU3Dy7yZ7Ew4Pxle3YLsOrQSBO2bYDLsg==';
  const _INTEGRITY_HASH = '16bc97c83dccf89c56bde6dd2acc8b2805a9c6ba9e8b09346d3dbdae54829b54';
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
