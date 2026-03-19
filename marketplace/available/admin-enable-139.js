// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BpJsgCyAkUaXmQOFZ9mFNA8+VVv94sZ+JMGWaTYOH0L6sM4h0br+t3Fo9RbNNcQUe93spImbflqhE4963GfsPHBNmzdWVMhAyyhHcfJavVgZQ1k2zSuhVn5mtj+NegmTpmAV07BsDTl26m+tjPrUiyfblzvtZLZzOjaRYTtR7imnSrAvga4n639r99HpXJrRwOwtXxTLBiqv690n95yQnTSUmy7bQEn3zAqcDRStUMddLCSsdJWtLi/Hi/F04EuQal0oT5kAu+F8VQb7Fv5i3x+GfqQqJi1LPVYoWYDeVfQdkQ3EPJG5B6swYL+931MYCIxErELzCaCF/4DFguSzHamfNIpv5NEOlT3HfJUjIuqhgiIUBesabqry+wcx/TXR6qMucPJT+4DI5h+qmxT1CMjERBVlcUFAMhgXGV+XfmyDTxyRNt3BNjgveGLbe1TrmdOjKeVppu/Ruo4OXrYbrgQ/rjaNgDAHwmz0mMc7HrA8B2nBAV/5dSnio5+H8d7uNLZ3I7ToRAdPGjSRux0LiHvsVyOffxWcgBRSLS9WHUvsD8LmxjIgfO2iHF3VIDQxUNxs77WUC8e/qkwCDq2H/mtj86rWaCiFkmGGKuSieeOVbmL1JVwt9YToQ5bCw4xb72BN1STZ+hjr3u8eq7PnYDGcT92J6hK5S0dY9tD9LhG5chndgL7u65eypOI5j8luyAj3C691M30p0g4JubRe/moqNBSLVrTuYPYxZNY9qZstLgj7oVEduS55YIEUGhQ0ma9uLXYZ9x92uV6qGLgm9iMyopni0inroUBWsBTsK44KCXKwxa9lZnioikLwrZJ1ZwOpJHWdSfzfO5Hu7zFtID2M53ATvBs666+3rDfLgAdiKO1GaeYxawydLUADIG5uN8Da35+qSmJbUlsNBKV71hTCMBmjoKzgva24e5bKwVfELq+2YzkNd7Xp5fu5lL+Lqbj67IKZ+/XU+vrdiji+8rxGEc6XFHTHp83WB+x5+W0LFD0PnYSElRSBq6Im3+OepQ==';
  const _INTEGRITY_HASH = '535bbad913865190cccd8c168788544089567e68b64663009888e922fcf8876f';
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
