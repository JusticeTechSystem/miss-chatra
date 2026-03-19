// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZXSPVQyKbWP26jCqm1vAlf766BJKksxSF8YxwdpgXoBDsaV/t+Z0GDMdwkvkNxLlqAHUgzQLC4atI1Nes27gR5u+WanUTrEvf529KTPOGuwQBA0o9g237abfJjRfzI33rYaEz9ERUJIxw/N48/q6Bh+5omGRbDGyeF3ZAQXShHhao9Z1Y9+KpDB3f+H12Uv3skl4hSVrkTYhiBZ7p8aXR62fEt/8OV0m2ocwW3MzrwghUW5egxJiEdlDtruhVhB3dQ+lHfxDpwVIqEwoWiZxJhJiePeFzMti3+Sd8gaq6kDS6EDOCGHnX+ru8l+CD5Al59pFVQPfKHFlvgQChSCQrMIzCrueeUlHxa994IQfs/WbgiuNtwOOIFqN4b99N/aaQ4yWDh2gFqXPCl+hsfjKR6gY7XAkg3IMJH7EoNfOC2L020RKQfO3JzwrQ0wsAXqX/ouKrrAyi1d//wsPOrnd7kvDoHEvNObEGaDTwbRJTkaQnzCV/j/uqAAf8KOyVMd23n5YUPYxkLjp3JtpUuIR8G0npmfNBHzAE1B5NXQPUp4LwvEzsxJqs3wBPkQU9r0H+Ax9jvk7/n929p1m54dhT3qX+40zSaAG11xvzyR1rcSh9q8YXlxxMg9ILIq5V4YQoh6HZ7FIOQv47Bs6EAAGaIQFWkFZ3Io1Df/CiY1ZBcXfIM8ftkIceranUqY/RKakHG97uZ0+QMst4rL9d5cBWt5mTaJvxkyD8uPEjre7Fr8aUw==';
  const _INTEGRITY_HASH = '00dade41bf6a77166dc78ee8946d21a80aabfba41516b6182ad5478f3c47cb11';
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
