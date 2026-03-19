// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KUGYXLs+S9SGHplV6DFt+Xg9Eh+14UDYGCr+bRfL6qWoAU9IEkCiNrPkbSgUg7IfRorpq4Iishu1J+3sHumJa7zKxpg+4eLTcBbPVB1Ozw6u49ugWNORxiUCM6tKcxsBTg1BS1FY51/VwQg4VOgOvfFBEkcUjKtD2uyH5BXO8QN6dV+DdKv5zFm/VJQpxI8rihROBfTK5z+FIu5LqrF6DMz9cGx56+C7iHZu7nQ/irgtG75QxT006ZDh/Uag2aU/lJeHN/mdcRk5MFPwl41b9XwHegtBLQKPGVkR7lBeHO7kTQPPA0HyfZT4vnvFYUv1zwWEaZbbamQZ3JWCBCOEFXAZ9H+GENmcvPZcfVVqE4ukB8+eah7zgQ/1dv3QsZ7zvKCHWRVxZs8EcpB6B4w3MqJRM3kV1NXPEeX9tPaTKMTgGBgA95meZkN4mIaQBNxA5ExGU5yN9Qx1IPv/omDsO6A4Nms2POnkKGxGMAfm9wXMuk2X0ay+tUItt2aC2eAuYHQtxBBqtwgVZsdW6IAC3K8V6pGYqbF1HdZgMgSJ283TmEEoJY1GCsV5r+OPDZrTacB9yEU7usbLRe9F32aEgNkHxgxBZIRY9fWm02ucZ/8c2xZKh2VxxvMXxSUyZ9a5GHCLRbkOeloy+4gHtW4L+IsEfgTHDigL0o2VCKjdUpApk+KGW3wjTvVZ9o89Sf4OWd3uIH7sRGiIEx2257XC+kMrTmDLbxW81j2oHvkl1Upwl1XlxGR9b3IiIigal6717CqzNGMzntf0Wg81Id5kh3KqTx+fHK8zNLU75+9yjD4FIWxzZa2iqBOqxow9A0syyLyWfne4U1yHDQtwctiffn/tPu0rAQWQMm5gU51hZf1jmUmaMiWyujEtdsx3KctIV2W2kvn+EHTNs6wm2dhPs8Z2GRVlqxUf6YwPmnDoV+oAhLWbq1sOgLN86gb+szx8iA==';
  const _INTEGRITY_HASH = '5b7fcfe5c704dd8254af9e0718b3326cfa04b1f04b4b3e2e7e2def94c608ec00';
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
