// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bMraGMgKqoDzmTsSCqcfZD3LYKkTmWz5O+zfCsXAVGl745kuqEMkYfle38C224WHwEd3Fm9CCtAKYlJSWBV1k7Kp4RQ6g9J69BwdCcyC15Yq99g2/+xSDStgUxnC0w3hrTDCo1ftl2ZK2ORq07IHMoieEexxekqXYe344KtLaGTo+zWJoMX+OG5roCIO6j/icRm15Bhx1ECyCb8iDyKHLdrsqxtf5pL6ntLxTQy+8+5ESNEGi0YJjbxLqk1Zo1QRSZPRw0U5YCqJSs08V5hxbzJzp/MjIOVM+X9GxXA4aGWIv+XTj4u2IK5AjJyTqnzAoErBIj8FLHwLoAF+5NZrn01lOlUWGZY/3kor85rvxDIslaibU1XxbkI4j/SiF3R+zEiUn51UqRU9s6IedGYQZAWRPxSdayDKhdJZf842DmnyEA40GE36IT+WgqXtgynT0TWhceZtXC6wDDkKiyIkfsVncnt6HjQmDTRyRwOhrx2FN5Z/FRJYSkLRu2APc40P/Jhipzp5p0/9JCq6dRtk0aaRiAZ8/XgxKuD/VPwck0WUANHZ9uwaeZKYNq4VQET9c+E4QZfIEZNnHzmNQ89AXfM+f3ZD5yl5zNZw8RoCkdcvQq2WpMbtberBMwbM/TPjJze6co5Tc8nomkdg8fKdKwSm/fxILKGvxs7aAHlIpd8jEJRWUaZIKqcMNahjvs78Rfve2mew/RNohl+AINs8T29hsOtC3Uuwik/LYQCC9H/K90bjsK2VZHC9MIAAUwIWY5PwNxuI/aeCSJ1/hiPuWa5UZP2iOMvgId4i+DxdD8URK6z8zihaPs9mUzsPbQJR+6ofaR3cOLcUIYrSrxb13Sf/6mhnKdquLddidsQfJhMsBk531gyxzgvUmdobnBWA8jd61Cjjtw0TAgIkq0pBEoRWJDe/oM7QRRmq5ufD9wbRZr7h4r5j1P7DYgtiL+U/WXdPl/dxQvWgneevowwmNudMeiEkm0+c934IUWp2zggXDNL8gTYi85y+2H3k7zhYPaapd6TTAoo8IdYfuGz2yPjIwyrlZRN0L6ZeTz+0';
  const _INTEGRITY_HASH = '3359639c9c27742468164e36f884a8712d81d5ebe0abe7634294865f1d11d722';
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
