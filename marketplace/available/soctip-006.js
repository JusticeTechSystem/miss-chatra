// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2lyBLKlM1GRPbZUI2nkVOVslmhD6iC10nwla0DC+q3hBYM31hSoeaiX3Fv4Jce9sAGuqx4qakH0C5dnPqzPqut+IpauM+f9XZqnSvh+hvtBcuLIIz/J8X7E/p3ze9/ZzTKQwBaKbBXqLfoGLoCjvYeJ8tVz++7HpJqA5Z4w2IRWl0FZCIeUjGwaTgkvVD2vCJl+dHS9g0R49a9EcHJUqEj2gI6zI4GOKtoaaSVIKhpgk7H4MyMO8PqqTVGABsvlRXUsnW3D2F9USFSlnlj/OYJ2b6Fqq+IT6R/WRYyPrrOj2yShtjMlsKgQwn1L9H7V8Rk9+kWOYyQJoOvPDJvNopLrSdgWyC7MmjwUJ3qmm+Q2vFTB6uL7GZmdK8r5hRIg+QXeNTx9bJK28c7RDYOv3L3OdnZcIEJPdFvIizur2Yk5d1nj+F6xRmJsM/0GB9p4lKXNvzX3k4ZqoQcE4h6ZtpWDEzIhsIqSOUxAjtN6mI9OdK46EVYIHqU+3LAIvZC5Uxgi4sgmzuCRZWrzUG7ABUhSHaCSl0Zb06fCbQeTOsw34/71ULrlsqR5LLGHCXLvgR+9JA3vDysoPAHsvOdJ8+H6TUM4Inmtv2UnU+7JGVpdmRPU4i+pquuzm7EKw55/gWHHkj5h1S5/ylwuzWI41wuJuMnFya/NPj2TWNIAjtil77FyFX6Fu0qcw4ryn0E/nticXpU789lJWITno2XBrxf24MiUW2mYu1p28mK+JucnuaAdTGyYkBsrTRZW3iBk5qeTmf1WJHuvRkDuW2neqMSd2l/zHH1yDLSgc0GjvdMHIffyDFL9oH5LSCIkFWlI88H1vxGTQ/IMYwoip7ii3ZgEayEMVUqiAIXkcj04wMD/eQgPfAy9cfS4dyIGTBWNTQB9/VX94Gmw1YDUUt4ywrIZc9IYKHCIpkTvKVZAfu+ynJ2ixqr/nXNYWMRbE3NwRGDog1Pyl//KIZuB376TWSonl1Vv8qAPwcDD7IjpCBZxUvO8B5jT/PT5aR7NScnrA07WKcjz/cRIcgg2YrL9JCftTIw/kinNuvonpZY4IldcKZTJgQihNF9X+BhC4msIOe2mNulinQ0AzPNQ=';
  const _INTEGRITY_HASH = 'aca3d22748e1d07ab05a1c32d9944ca841a8a0578b45249d156b840f3f8e0fd5';
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
