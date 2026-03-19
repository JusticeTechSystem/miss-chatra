// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pGQLNHifC7avVi5nJUw6VthN0UmqdzBcYFpXIdzIh0nEQVGf8FLYYZ/aHgrIQvEYFXonkaFqh4wcJYD5kfgdChKPwHakL9lpMnUuddMyEn5v44ItjZ6mrUkwLJzQ15qKVdAi0I/+gOAAF/9OqHDvB1WKzNHDhDTazaRBAdtbRBg+T5fi0RWftQX2GSn4C9K+Uc2izILD9cUxUQJUMK98u+VAbQ6lhV8x0WLPT2meA/mgx0Nb6NcZBGQpqOVPrXotnDXMWeYZgQ8S+unqMdXJW8UC+NwF3IavyYzbpGMycs1XYIyk4R6evb0MeI0e3zBjCZMzpsiAGDDL755OjaIEVL4wlojZi2NGKhyB9CSWpq47Y75Ar9T5cP7touNtz7SwGa+olaaZ+WjeXLk5MsoKHLMB4HN722t7IMWQglZ0/HtxvTo0vXQEAFIC2T6xzds2tjTla38dsVCho2HYTBN/cLVuj+CR8geWsIDjTk1Qj3M/0igeK/zqIm8WNpiOwVnTXCL/XSWGE+v9WP7/6fK+LebG+Ha2h5mt0NGchIFedAk3fYqCjAYCACspTs1VTdneNGi8iHM1fJrjm/MO9rMvlsLm1cZmzIKoXKTbqrc/ILgnamIm4wmSURi1fJALF9EtRDYdASb0EVzez/e8VJJrICEfSsEnfPT80+5Vhd3AJymi/PQxzJxlYeSFHZQY1UP5oSaf9ajhIxcYGMiYJ6SYD4hLdYmTn55GdmS0SGVbXiY1HRLIhS9OkC+58RtM5efAuuV9pAPp4W6AOa5HUfEH8boB37x9xGPBpFuuVispzPYX4HFx1Tvgk3Nh0owgW1qN4RzMW28ZyhQwbxdw6jw7vYiiyRbjrK/HXz4xH/Z5TUVtTFqFQln1owRMKOfZv6dVGeO1N3YT8LgGpVAfcVQQEJSiStDKJ5ZlQ/D0HJO/H4HeM01hIh51EoeuZrlvAB7NP1YD65ao2/4WfUajaXaqO14US9w/UBAVc69n71NwmFP4WCgNjo2U2lJNkOjLCbkGphNgUBNYoYMZ8TjK66e2DjtRIg3IsowwS3P28gYA9WIfOwIYYqnClAqy4QvbVxaGbtSFcjRPilgiSfZyeh8AEv4539CYXc3ALfgEJkMqa+tXrZDFHzBFF4im6M66HFbN6J36I8647uKuholItJXYaMK4RabioM3fN1R9JRxCUpO+LXRlaWr2qKH30eD6SJ+kUtiP5OrW+qvuf/8OHITvdJidPOUjzRNRVNaROoFRHHTzBpaiNEoWsRxK4O5iU2gX0n6VFa/ZL0e7o0qX+QyJFrm8QNjQkrmbaa4dsXGJvAhzLowE/0/1hUXR5sSvOyCqzo9k0t6tRpGYz+NYiU/Dv0e2TM1LJj+SsrfVWNOh';
  const _INTEGRITY_HASH = 'af7c34c7607ad545eec4f3ea01a443b684d0af6068f84e3dc7d6c00a0d1f507b';
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
