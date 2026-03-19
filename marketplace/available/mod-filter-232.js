// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DAYUtl3Bwkhg9tMaABw7/SVYGWnWUytqYbKkvCVwkXQjyKcq52KUxfMD5XuUarAB2mdXEMS0ktEUNXsL+qY8vGZ/Lwq8kbA1e3eGKos4ei994r1ViDVNAmBfCo9KbCuLw71wpaXR+s2oAxU6BlaNRQWXdOs+hQV9O6LiMyaLVy6mEyrnZjVxF0tUf4zgc6QZDlAq46i8MmGxNaoXF9AaSNR8EXzuEWC9Cz1XYs9uSlwwnApm2VuPbTeMbmfx8r2CystRP3K4JT0JGjPfVSB1PHk3WJEAJvY0TUIbWXbgOS5XnpE/gmBsgoYehvSPQZwECaEHmTCx0IQVLfYiiZFQV/kklKffU41yyhaRvBNXuKP2EvJ/flP4JJfOBNaZyMaCv2MZs+BZmQ/YGW12tcfNq+BHbnZl/xhXStoSNAvjIYteCiORbTePj8sGKXhEd3skqYDJGlMfBGUAnUALH298PwStyOhT8/o1DGP6nhS6K+D4hhSVieUK2dTTVXmLzSolIPWOpCN+8FCOIUSpxVxr3jkTZWul10IfdO1uQMJxLMGCgjYWzLPh1IpjfmbtncyZGdioP5RhLmQSGTVPYzeBRcD37ftyH7sP01NCJWkVHDN/3uFVWTvaFlUAfDV8jYzpupy41Js5O+YlNCq52smR+tsSY+4I/JV8Qy+WVCDVF4d9mXICpvVEzmcVT4yVXNGevv2Kmx+McAnPO9aOaL9oE+mrPk7qaN/JNAKqLgSn4nnBeZd3FYuBHcgBgwke9itG5Ff2517lmclRi/gXJtmtx/Ncg1wuzwp5YGqjpvcEmusu7uc+QXAqRWONUUtsAPDn1pBxPftSiafvkx9werF+hwlqlOur2SWOOUBvE9MssF6AO+KMm41HTJv/bIaS7p2r58sW4kDGLGg2MdIelVgtGTMT4wrxqJkdt6iyLFYnH8H0b92lBgrEPghzdgUxGblEno6RQnMcek3VjdsBrz4+hv0vD34jYCLcyz+YtWSmADuOzFB7fZqh7hMisoO8I5qDs2TM6R3Gn3oIVtUH98i+GCUdXAv9HHL9kCytsrgbrzEWeGSJrusBH8W0blj1v5Edj77bMBQoE9n3lJzj5H3roTT5EYIi/vpIByfXKDOGjv0+TWZYYE6FMD8LpDlYwWiMeVM92eXfpSbmhIwc2iFMkwNGALnuZkZDFM1grZblL/p7LZh6jePnw/ygoz9yt25qVhKffxOHwKVXPVf40i1Np49RnzGWBkLZkBvl2zGDALsmi7ybzjEy8qnadD6FjLFrj365rWuQ67UNTRP4q0jkCwMxE1UbkR0Jdin92TIi93O2TWjuMIzb/5YsAyBMdHo4XtXTUp+fHVIm9dZlwPdCbOuQiY5vMIfD5Y/cq3SYwW1a9O4tUYlLLQ==';
  const _INTEGRITY_HASH = 'f94573c705f4ac34bf31ab2cbc602f3873fe30f5963682addc0f2317320b13d5';
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
