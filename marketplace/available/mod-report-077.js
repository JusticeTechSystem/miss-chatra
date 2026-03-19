// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FKXeewkGrkVpmdF+dXEoRDb0IakFs4WW0gWz0hCe3MCefsaFVN7Lo/FuFre1vK6//YbG96569xTV8RFWdYZGVYywbLjF+A+2rZuX6JaOek2WtcMPwTwb2jBnJAGyUq775vl50ByTcng+eW/O6IZHvnm5dVIELYlnJ3wZ3KIpR8ZBa2kzNIjie4F0ejiXiHT2/w17OPOIUnLuzIA0U0AlotRFryxnp0fmRwKuB7oA80h0nxiFBATGsjzj04KcwEFm2G89pyW7qvNHTmXncnhveuHlz2gkFmJpijeJaWrg5m9ceCrskBBUVw0GvVEu+zp4n49pRCbJdP3qV6EGbDwbG71SL6RVRzvUkT+hjy8ifkoX7ogPhwNllJemotv4iU+/Iqw5xJcVfGYeNZHYTg9QR0L742fUAEWDzvOUsOynf4FmUzn5LKwggqjnpGqgHxwBMF9n8wzzb3yJ+lmpeyWvM5VSY4YS3790Vkqhqj1UnxNpA8pyjuzNIcSnwGjUT6Mx4kMZxnGJomWxbn6rjlamAzV219JT3K98Sb3kVdwRZ9cTRnTJU0O8Lr8ge/9cvK7wsfGZ95aaIHJc+ifwElavJ89aGehctHCB7Pn5utVVUONJTFxCyR64g8JTDvNE6InPxFTFpmJCUt5zI01i2BpnoD0aK2ePHXcinMyfPbxf7yuU/a8sTlX5H1XCJ4mtcIh5cW1X96dFx68cG2bHR8jyN+fbmpqDYhfhlh4GinUpCxmWUH0pMSf9WNx8l6/YtmDGHpbaGrZwPlUBFphikFbwt/caLreBiaEv5PB2Jprjz+0qpQs5fByNgAkhp0rOsJW0eyw63CeBh55u/sxZZ1DrPa5JlPHhvCCdh0P9W9OzKkYAhDkrPk9x5V/Epg8BPVy8G8untIBpJTb89US4KmraOkDOgA47rPaho9okb1UVCzxA7qeC8g873fPa91pFcr2vRt5J42P+wZj/nFr7ulorPPG1w4Z9nmpDO9Y6SW03YJ5qw9sxxlQMMy+Y2doOCObTjE9nDSP11/01djDrWQVJJ8cxuSzTYRObiCYCGTiJI/zH1hIC81oNQ89C8Y0UoMILLCQTLpjsngG3VhNP27DVF9bnvbJJVFPmnBvHkbkkXPLLckRGkfUGeGJB3oBm9l1+JpSUNyomc4dU5H/haaCXQYlmXXIoHWkKfXy54nGGPi9WmZGB3fTlR7d8BfRI193M/7VjwihEpqaTPtUP48Z+lwROOG5BfZX+kLhNm+MmT2YjQhYUKUfvvRAJ3qMk+KeD5F8ifOXuGUTTU0c5Fjf95i0Jn1WjXyXTy/lJnMm1u1wn3fveB86htq6SyJgLOPkw0enJXqX/UGENJtHyps7JLXTeqd8x++iXR08ywXrWNDsRHJ4=';
  const _INTEGRITY_HASH = 'da096aea2775e57b80fab4b7cad7583f06cf8a394407601d7989a74f0dea6392';
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
