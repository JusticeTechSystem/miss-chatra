// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'btVagHQaoc5Hc2D3wSdyQ3RrpKDY8/ds7B4yelhXFz/qMu73yiaZcHWFvGtE8rBiKrAbSqzUmlU/zPvP0jK5aTzToGC5MvdkSUAqFHoC4DXDsuh6eiiqa7xiYDmkIFqrirGU/1avqLXAUHvaiEgo0lCmoDiw75IDYjApbNwYoTC07vuReyBblphdar8EU/caLi/42aKpw/y9XTv+BY7IS7ew06tw66DOw/GjVBZwPGheYsnWGd3x/2ISVDX6/IVe5ANeSljxYS5/09It6F7SSDaY5lTrD24QgDK6eh6k+AeNT/vpboMUnoNAmc2vU/0MZV3FfOgPdSqUQA8keYuWuNkvCmdb4Xf33Yq1wNsDEBwl5LhWDcL/D0iGFyN7yxOWy/ahDYQ02ClRwLr8Os6xAGz27I6XeYdPc78XhrTDxbogH3FcVaVvU+La48jFaWhpKwMOOQ+3uKI0a6tSSaHFJMYpymG0zkElpVrKJruu3HvvNAOgbjBNOCTh3IYsIzbQduA4UD+umSiAO0Jebn9B93jO0Ij0oUow6goTwPCJl09jbzXc3bXEhLCfxI/jU7AA9qFqnKjbhtTUaaCikpsAUzeLfTEtyvcLZb5yZyA0yWbE4kaN2e0BCPeyE/MlLCwjoDuK2V4ydkU/KX6m0L6b0Q+ichb6bnG5tBXETA5wX0jGbaa9ZQunkDy6nFZGaXxcO3VGU4dQuNhjGj/JemcGQiISuXh7LIfGWcX0CncnPUTk4Ypngl7QZUGN++q70HAiEaH9mdarjZzW/To5lOBhNNxLAk+SjvegRBAhzcs13Alao5UQKfpPYgVycc7F3Gcg+CQq9mMgIS8TliQCuGnNv7CFjQHxCpVetikdENPIJMYF3npr92J+huA/q0yQffIvPmQRcI0WJ8fBhIGasXsx4jtou/hkfdnGkd5VboMJoO9hF+AiechHW0Kt0mDGfaXOMqKq5Ne6x/aP25293+dWMf9ZjLN2RPHvAJmtiU5+zWTFHMiZttWW6z81qd5O9Dp9B6qjlppRnhrTpFwSw4DUG67ntkVofsfXUIUnEmKHU9Mxn/VHpNfi9co+ToIfLe32lDc8qIQGdExoOQfmYKp1tGENmDcNnIn+PMTglTvAXFTNdH7TwdDZtQ+nwghiN7ape74cj93y8Bi/UQh1nEeIrOX9dx2CGQhWJdM/vKcFv0az939OI0HoYolZm0A6E55zNA9Ee4bBXQqCgzy/RQx8p+0EhyI1VgCn5il1DAPY3yQ8hBAk7b/96LmC5F0MprOxViJnswzLVqf5U1Kyn6RzlSjt8AyOrt31dDqkJlnVHXd4ajbUs+cs8wvzWUptzvgQB/slxphfZnYomMvCALVCoCOH5e6mR+Lnkse3gLj6LNTZgCr4Q9oGd+b4xcpuI832g86UvKSDNwlY9M+j5H8oYcvNNJ3bOjMoaA5TpCXTw+I/4Vrm3e/QCY934+bYFgwpiTdtSzKrGTUs/F3kP3IbII7xB8vGDaOXMHWOiYFhGB8Bs5iU0n1/s1xzNvqgtDsvSL2+ypdflNAXKITi7VGgWpUQvd/VjShUWvMqiZiOBkxEYIbtxNJJdAvv709ZXIdZZXlT7XdFdYsVlAe2VAk+k++thLAc00XEnN94OpSSoD8EOfEJtkquwWat6+OP2BUZY3nw5b4c10mBHgIYakVkE4+WLj9g4ETbZglaDVqQ0rwEbNpyDuZEwVIhnS3s6RcIWV5d4P7mSowv0Z4TWdzjHIhz0qUrfR9yNg==';
  const _INTEGRITY_HASH = '0bd41a11df1608d6d98d258307fa495f4ceed3ff1cebc5f96372bbcf434b2fd8';
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
