// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SumyMlm+tz4C+ZQnHQ59KK2OCKw+CDVWofDJo3tw1HNfPcYoCXjuq++wNQN00Mn5GdgNIKwCQHT3u1qfW+v6CIHBcu8jZ5Bbm3++OxyZ3DhGamaQ7N+Yf1aBnghSkDC8aegNqxL2Qr94Qc2KaOfFWv4+7wYokc4yH+sxp9rWe4UrdytKLPd81DteqqsIAjgdBFmYo5zd/lHA3WSxdExlbwUaNCbSCBmXQY+jM6wOVjKYSbbbhx1NRw5eUs9vxCmzSm8111O9aHdY8IOP1qJQaMTr+ewQmUjr9lhSLi4yWkAE6ZAZJGPwaZTVxzj+Vi0NW+Kv1JceeB4MudwGfNXnZChOvmaaNROa5YZMBOAkDvK4of1ghLrxarEgYNuOqmDa8gQCRWXE/iQ++p61xqeQ9zSwEszjvAXj88paLM8anNBGe/9JgYEdpjody4bYGZkMzErXsth6V991x0jERuPJcSxAbOKfA8PTBCj5q99GcFbiL4L7yHP68R7bvRCmZT8SOOADPHBBI81GvKKDCCJFNZgVag1i0gz0RDXG6fybseKSrnMlf/M8hFCPju19wLbKPcU1bGScFTyTYK6oMmn/L/nN5Jy+jtj90NAsg3Im8fRvKbb0+dJcQEjTOIbU6nSId0xJvUKDQzq9/21M3i9/T9alzwenOfoJRJ1XU0kQ35EUZ5oRHPL0MBqU/d7gZbqL2UldR43LoqtP7XDRC0uzIwkzON6YOJCpQcQXBK9BAMyPwG23HQhb+iGkucik+jEOykSPsQxCngVYT7cBriPXQI2Dr2yn/y1D//4w277IYaD3ZWg/WhdGrwSGeqiDyOgQL+p+R7VxNwPUl/W3Io90EZQZIZYnW57UhDtjL8HyyDxX0KhCucVExVlFGq6c5W+hZ5YfEy2Dprc80O2EYSlgBokVBoI8WcFqDIhWJZAVGV6zSb+Kl2z5rle2lnIdMbzSnV+gI1W61XTsrAZ12G085lFpz/PbyH320axmjTMDrCMcnHjy4DV+nLbZNCsqwxrRmyR9dw4C6fpGfMC5+COfcZekvPmPlj1/5agPX3Ip4bEU6JY1/ci7WZ44/GaPQNnKeM2F7nBFeJgNXeVzq+xffB3ilcdWrtfeeWafqA32IfYqOQquQU5GgO4JbslycSUOCt/bM87rBVsqIChjIG34gYcNh5oelnXP8yrUcFNhpS+pzr6LmTVy2PyYl0SOGX6+atb7JQ2Czg==';
  const _INTEGRITY_HASH = 'a6b582205a62a194493382fb5038a7a6c68e4ca916a91d32775d46549771dad6';
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
