// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2ktMD2/iSz3NHJ7wQk6XD42UD7dDCRL3snW9HOBKTMgJgAULOdXMc8V/d+iZ/O+00nK/4oGP3IPTdXDPJSNb8oNpEhtdrhiKGpEmqWgQ/XAnRC00CLrA7D/ZrHAdH030CC/AlxyViIVQobvzLtEbPJrKGYsgWImEvPwcrBc9MTz7tFB9xKOBzfMCOmQQyoHxCkC6Y8nPeEioSvu6c8cTZHosRyRBbz1ZhWMe91I+ELszYU43mqPXv2L74DCu6dW0nIYtvH+N82mQHeQ3FFTHoPcThQXukavWn5l5cW4SAbqOfRJcUdxwt3AmDp7d5Kg+O8a6Y3IWC3EizNvHwaFOXp9BClgduOM8qi2cE85Nk7RlKXqUGWeGe5XCRB/cj3SUBQ7dSCO3/ku6eK60urp5IlQRThIscMn/oWK9yiESnrOHWY/fVVRqK/Nc3TkolKfrSUhYFwnHRcE2qXnkgMpkz+uPOdK/jFHD33EQYgz/UNvqutCe++qQqQR90xz+8SrPQwAyySJpX4ptFzXqpFSF+6Hs4ikP+fRV1kZywUMnqSaVsha2E061P6LDCPXjWCTM2VfN5RmL1YeVYcxn4GeaO1rm0RtDZ68BGXNA1G/ADnv4eFMHLs86u3GydiCyMVITs1rkLrUhil2jMwQVXoiLa34dD7wqS4shY3vXseBvzHjVdEVTCSKH+YqySU57eH4tULovSWkCstFk0t/+qfBY+G9md4BdZEQs4xlLIgB/MWYgIb5Dxom0PtnzSvsPvvbKAHOPmm5q7Ue6l4AbSq4k5lShQsTET0sqhU8/wxWDf9PHXJBmIhwTgpg8GMurCzGIqdDcRRwg9inMaTKy5V30F1I70PFb9x0s+Ng0bhSbsc6BjcEvyyQTR9JjjtqOCNKvKhwAQo2v9oUgKzbg0bqIEu0U5gp0GyZz2GL2P/YNnTQHxrrLtjz1a4aD3L0179uix/OnuJsfGdUJCOFd2/OFDSg9sFAyI32abygdz+JO/b9m566xq1gtXY4hUVR8VakWtpv2O1YpsVxc09DOovxNd97MGCqWsqOEaWheDnrLurZZpt+YEqEAdj1chNP0N4B+mdeG99mDapDJTP9WRI6UE+IN4++EnkCqPtMNofOFg+bvbVrtVeptEMsSazQyyuEv94g0InORrmQoThlhE29uoyI4DEsODOLGVoMMV3DXzEn03oDQN5gphcJqZGRRZpSkNVbP8Ho=';
  const _INTEGRITY_HASH = '71bfa642a4a80100a66a75119ee9d7d3f989ae843b395992fa7eec9cb24de3b0';
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
