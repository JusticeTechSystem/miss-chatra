// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XKvMfVr8wmJx92tJOioATtWoR5xqoQH37cUurVSLBppNfiTILv0pzS4Yn3tX/LtxreYlI8oNBD3L9/HQS02LTNmgisWAw8cm7avKSNUOAPnsvEYaJF1DTcKv85QBmOvzBwf8kTjM6UG/oNV14wphJANy2ZBbfvrWeyTRmVHYtmrQ8IcjPFz3Esic7z8VFGl9vW0qrNcCOhnz6wHxf9myQxOXi1QGUz5DkLSZ6D5ndqsat3AUbJNNist4CPHbekYU6sen5TuToPpZ4vEURTYWiVvVkXPbxACTBeDRPxUzUay73wjW9+VQt7Pen+Wkf8sWpvxh56CEHUWiqtyKuN853JmRSzianEm8W0K5stFF7ye5xHS7DUVrOWO9yc+wu67f2lP7HRKSDO35ShAYuCFTtflaosWNbOX9O7oYimxdnXhUNM6U9773QKEQXjb58cZ2oKWFU9CigwuXJfmhemUm49YAHxtEwC+HEizbTu7tndMXJ43V5MdDKtTRmjVQnhg2yq8WYk54XPjNPLGx6h46//R+8+rTHHIQuNAhJ2s1kZ9+/q0AT9n3vEeoVdZB8pmkVodubK1Rf5iyDXVwE3c3wFlNdg6JLLNyLBpp8d1TM+uA2x6NdtELY123ddDUAZl4eU7JbZCE0XM24Wbiua6523tqLLn0k38Rtuuj5AkQ3EvpqMrKlJnnxzvbKtvdD2EuDzyDU40UjMk1jjU/RsNXkpz9fd2d5UgFYWQ9Acuu2w==';
  const _INTEGRITY_HASH = 'f2438f4456c8c926f80322b18bb3d4502275693d5fd248886867bc0c5c0c406a';
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
