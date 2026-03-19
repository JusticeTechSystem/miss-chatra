// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HaNYC6XZioqRmQxSvgkWOT7C3L8HtjPTY52X4mD8ZLdk/mBeS2D7ZqO55ooSYkfrVyBbtSOmjOgIta/I6tf07UYIGElcWKxLuRsQ1ciJXWVvxDnvFXMF0ekzrqBD2NLutOKkU92sjHJdZvgsZKuF4pX/8FSiW12jHQR6chCOggA09yxFjyXAO7HnkOFwyRf8t5u45FbGOqaN6To5QCPyuD5RSI8ntyF4oDqEPXJnFAFPCS0o9TDIfqcnQ2DcJgrgK3jtcBfo3nVnYgRWR/sNkRfD+v5Bv4DfRH7mvVvs9qnt72a1jTIUxhRq7DvYhmcMCTuvKgjuwuKCB7pk6bvfkg+VdYROc+5Ynccndv+8j0XBziIPrhtuh/hgCih5iFTKfLziDzPeYCU9Qr2dnVDdyxVpCO/Epn42//72G9y4Y2CVaA32VmOOHkxbgftstKKLCno41ujpZXTah1YhgVRBzYzAbz6ctbt3OFXBLkhRPaVThW5FKcAsnaxUtQJNl0KYMdRYVJtFs2aXyxwgVI8AgCEnUCzdtWzjH1iR+yOSjzFHkXqspfzmq0Y5eSUIFMq4Z77pKn+JMXxWTPPt9ufHJkFD6GPJ7Dzmb2EU0CQUHb7mJfhDxYZGKiq2z82+OZ4BQx1CcMESzeqDfd74YFdGbH3Ij0fL9YGyNa0trq8CChRnUyee7jK35aSeLX0ScWl4WvSr/pUJzhRUGhUFA9P9gM8m1daG3ypC2em1knPdPreKbvMUjmVYvPnzwk+effr6wfL35N+7jyIb2TUtk5iw0x4f6iQxbbxcSqtW7MmaxeO1o01sktVb2oWdxzSrlxr9cOT+4Ue3A9SDVtImeBJfjUXxe50ZGDCkrrrCYlP9gy2onIkAZ08fQXwYkNGkGIY9HkoaQkAoBAejtALUmTbVZRdrVPKcXgrRs6VHPupAKJOJdVN/UFl4ZjC4qMFs79MXswM6nLx+JUcryjKMpxgBYN8ktvaF7acaPXubitXejxcsghCK1gIB625IKKwEOHwP5GLKc+JrlLxfcWkrSlvCE5azTPtz2D766lh6xECT9//qQzLTcecA0nkr7YR0L2DAIEZcBz92vssjOJYYceEgUQkDWyXqYKTDRTfUeyhiAur64yZEP9GF4cctm7VNkQH5dYyVXI/rNhWxgz/KHsoTcMdZe/5LNyWWQOwAsnZewWWDTKuAD5MEPoSZUj1CN0RS3zUw/jJt0MUSzMDWHnCHcpYkGONCohv5Jvz0+fGVGKEGhBI3V39I7feVo6NeJb6j33PBbZhbbvb1YOJY7O83x4Z8bRbboIMW79VAcnV62pmEVwtMHqAcWfgKl7Rkhgi94Vdp2iIv+MkTuXoYcIsfmXs7urd1YU59+NAj6WxQrqCTS1x4c2388cOz8ASvoVE23y203K7fbcuDbK29VuxwIOZkaX4htGdcBly4za3ANYjajdnBspzv7Z0lICVCHbCgmbIDJoNF7dPf82xTmdMfqn+9TVfTyfV4wJLuc9jUVpgePsDy4YsdbVoWWaf9TQTjxhH/uw8L7cE=';
  const _INTEGRITY_HASH = '3e9e02fd30b01c2fe1f5434f7f33d65b7c5d6d79a515e172f350cc85b088549c';
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
