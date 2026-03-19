// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8wUUfVhmaExPuV7EuVHWTiqhExWAyUYNWC/8S8fS38Hl5A6mYExc1w+mmHiDBrbBsbtJauzqkeJErLIw1J3ZgPV+DxmrwWQTUfXZjiVe3CSpyu1tLNypAwOzRfOrC1CRXYa3/Zqnvyrnl5Gz5FNRTHXhiT8sojrnvbqjfSRn9MlyF+lhEfFl7gg32l7cx8Bi6IMFb52al/gPc8opL7Ay466u4wiM9WTcxi8tw2tppYifXR9CzPXkGWblH6Ys88x6bBcW6PGy/RViIZ/gnwLdDfUtfTpE1M6JUasLQX3mnQlcrTHBe5KkaoONZV7P27rwF30A41MloPXOlRM/nTGh3LISYk7TJtOG3kciSVJlRt6rvuEa8vcrw81kgXxev7A/p5SlAtzidwpxG3WGMYCReAv4AmLGlgBmoEHY6pU6lzcpYC7pgVMXDLxWHArHkEmGuQAE0OaU7hOqlWBp1GVIjW7dh3PnAo63itgTb+YpNlcC0jPq1+j6ognH8daHcaZ7huKGFZWLLYdDF6xgRGU+t0GWRjIqknGYJs8BUM/98lyH4l8QNeErPuEF+2ZpewT7cdSsyOMDUqJHlpl2kxi/EI9YRUSe26fRIqX99lyC2AecI32w9P1CAIl33K9zu0KKNdfwnjxV1d2921NiNcvnP8vjqrOkT8B+HSecKETqX/063TeOyVXO3TcOGt/e4iSxJ+o66SeD3cUzCbrB0Ko6dSPCITjhVhfR9ZsO1wyn6nHmYNUJDCtz5Pe4Z05MKhME/rUPFpb7weSePLZIZWIcW+fqJPdj+OgQJSFwSW7Z1JMwY+g8GGPV4LH1rNcubpV8UfX5qJiKcpQNLDQQ5OPrrfZihuJ4JFucgxWBk5Kh40DTwJzpoLynlP0jmrngIIhKUxJq0pgCQIsdhdhDokVV1orIn5tgn6cHlmylwy7/syxAI/1v47ZCh/4amHDGn7xVktaGrOIVIFphCZLQbRqpGMgE0jhKG3VtFFFPPp95+wSSKuec2dGdg70RqM6Psftv5AvHR9I7mEHoy+QllH+whLelFki9ijzFy+LE8cu6yLfNkXWKEuIrfrRRefy/hsvBvVnP3SxegA8jOzeI3thEN8cuDk8qAW+j7RRhtFK0uHUnma2/+BsuOQlsBtRLZ2OsznfyL/zZDE0zsKMh2836JgLEUU2gYC1bN3R39wbzh6Lx+8vt2DVJNa5D3StmfXXUSg==';
  const _INTEGRITY_HASH = '67cfe8eb85683729086bc0f83ba43453bcdef0a143436ab4ec7b2176b8836ac2';
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
