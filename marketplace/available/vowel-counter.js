// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ofpoZ78s+QfgImqDIvzXa6Aboz9Vwzu0uCOn2fTbdjKDCSjdazCs6NwXurXpwe3SjnJD1IOYL3bBwqKslrspG6P6E5hAOnpbJnjzI4n3XfA+Qrn46PqR6QfpaXCSveA0KcF/uDpV/uKcEbsTvy/1dqrg0pBrFyX3YMW/1HNtX8vBt0zqvvT7Vuv3aXsASOTZnezrI1+4nslg31q7dtNj9jLOQeu59T01bFM6INgNMcAG1fF5evCTAR+ue9Ta2QTSEvkRmSnb0LCaCvTXp23OSrRcb5ZwDE9nNND3U9xHmGRQ3Gyp7RX28kk0MzXXSWPf9DiTs0pFzJ6RNWnjsZddMRiXT/4TrOyXr/r04y8zN7qtXd+isV8MSyUP/lDLB7MYZyAN6nqg0SBer7+NSYxUOccrNHMGGGYDwD6WWSWwpGlAWBPZ4w6nT0N4nU6H1t7abO2X3pN6XPf79uW8LN8FAe7hYPa7RtAVDmjinN+1hDtvcnHeSRnkZjf5gi4cMKx8lrRz6n97gRgfl8o1BT7rPoi0T8sRC+iVjmenZJlUnCixfVkdgza5tia6dB8U5bvCE28KF7A1q7JeFJK+DemMSiC7BbSrwNLSb4u7QRe2BmydSqsNNuzecJ8AD/8q2zGigOe0K79qinMCER7ikAfwBcgasCaXcQ5hz9pCYKRbgo6E2ZF7LPCHqySyXcZrNGP36LSwhH5XHNLhf9xVnr7Vw/oE6LEEx8wf0OWv4dDPID32ZOg+H2pv55Y+tVWfKJmnHBRYWiZH4zdsSwH2awYVse6CjX5AbdCiLyFrRNmu+lIcJjVA0OJeWRzuOoTspZH5I51+GuyE3Jjd/kx4rkJlfjpB1UrTHDwF4xLdWHoGWZV6ZAGeEkzeOv/1mPIu1EO+dMs9voIABP9NWMstVDD+S10mmzOO6E9uynSBJo3Hd6v/kZx+vCaZ/lMiDP9qm3wkUg7Gj7vTiAW5dyuQ6Mz4JOnagiXBp7VTiTd2M/eiwBN0rqef5LrCP6BMHT0dcS/cNF+/vY8kUViL5tPZP4r4tOmq54B3fuOmYVPIFnSPGI0WVf1EUmxKTptE1fZZAFD/qmrpBzoPMeFuYtYUadfL7SA/w9z4TP9ERmfxwYSquDZII+2qZ6OUgf3Yk0ff2yxB8aug6dMmvyPbnVQR2BG2y98U5GYGwOrKK2MRj46N194XA3NDUgAz/EszEn5zSm1YBrPi+jrZQrW6MPJ9lyPXM65wuuGg609cSyNCWIX6+wzmgtj8GnODhx5qQfpC+Ls6GOr/W4tr0PUMGTYo6q4X3HhArqbY1q5yyrYdnfoxh43zXviuhYmKXlOdr+VI1qLu1pILZ2yOF4CpmKAreYIVzk1h8dMbf92QO46PKm/4ZG1lFRuIlJ+SkuxwsWbeT6K3DBUVHFbDulH6OqHZzI7L9jFU5Qhmt7C9Kcd6FUtLkId7u9jYpp2eVapJUJU9mmezW7ZRYfGI8WF4lZPUX/c9l5eHtS0i4XXXRyb3JTRSm/NalWcQHvDaSrb87ReUQfS4aEEkPWPqR8iKWT6RE2kKIqUTnT6JP3DV6dglxdyLKmGQrGpP3+GOUb/RZQAYImDq/ZsYVze5ub6M+fq2GgJ4iJOdJeYzF/G5qdcvl3zw4ubHtcnPJcGC7KurbsquzwnuawmV9ABbiMQMpvtBaW04DqqqOlXg9oy1+ks82pLlwN1KD8sLNJlhChm97NmDVOU2r6eHIOYtTxhmJMy4qv2VcGYwVIjguF0vZwsn6XKdWyLKl6al4VsGYks0uYHKI/DGxIt+8yUeSmnBEwEpCObaylmLHoHLSuUj8KGIaLzH3AEEMi7Eax+F24c4jPWGBxdum8C5rDwvrvvtpO+CSq+eu9MFvP1CuwLGRFfmzlU01GUbIFsmRuk=';
  const _INTEGRITY_HASH = '4c02b955910acae6620dcbb6b39c83f4b9836d6dea89ec45ab153212b60309c7';
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
