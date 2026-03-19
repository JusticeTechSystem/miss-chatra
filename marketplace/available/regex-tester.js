// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K0D5oB0evAgx1foUwlGOUeKJpCn1J/3lWPjI53G9oGwh2dwtjwMi62NTcAd9k7adQRg+MrZpxGuvZMdbCz8ao1QyITEFzIQ1H5iWJ2rEEWfvOb1q7Wv+fbAGoiBzg0n+MllQPMoWgApBVQVI2vHrhXyoeMMKjN46LV8ls6h7Ag4vJQI1ZoTVYaIa3qms3s5HByRce2F46kFW0ujNux1V1jCi5JKEZ8g2g6JvMDd+ilHVo/6ZmuWMqpwzMMtF3QU8opHU1j+uhErLjyMRCTtADBx5Tqk2iGUC055GXWGmLAFpB2dB/T1SNp/+3aOdMUvHSDgfZYw83HeEQC43Cvk28N/QRbz2kEVjJSj5feXQCYKE4lVP7bI/c/4FLk42E9YyZ/3r5vb6XIkBI6He2B/L2Ghkapdtip50OwclhzFfUsMyZiwftsKSLgsEW41tmHuCUSJ3/RFUf3z3WU64BfroNDzmspKDI1MbS3n4IQ+8h5p4Vn9VOeOZ9Z7CTJQy6hkWU/d35dBZM0ja4eHdwEw3KhfHgn3w/ICzWP3YBOekGWG+WM5a4UiGsyuj6+J9bmL9vgjfLM2DUEMZnRJKODtA0J6TXyBa0Y0R3PoLDjJsiBLwDpxJta/mKH10XjtzSh4TGMoXX3rd1gPXor0GW8bM639U4aYsQyre7B6mBVC0SXqHNEW07O9s9rhiYKKruSVhDhMEU6oOKEZoYzv1Z9y4Gx9DGZxBejYWFmgN5Tng6+FyySGErpyHAFD/AJr7I0aQgrrrPYF91bY1Cj9K8746WeC9waMSH/bjy9JiT2FW2+2zcxoZFAFqe1Zbzaowo4eH2sKu1qEpKtd8cCcE5WsoO+jG0ab9/MJTaCfPiCrqtOMjfWxtwKSlGE5AM+Jrqafh9kz+IdgSWJSJhMIL5Gm3IHcVednM57dUv4+MBsW1FFYEGSowG8/Iwez7XSz2IMjszJ2lPoCU+Mc4c4ljgKJktg47R++umC8iWljC6OVE415+9O7/lw0vChAlddQXjx2otr+oxH0izIZbfsNRlQLReU7NZDRC1KfRNcqzp4X5PrufCT+n01E5Ai84+ABZps/GVgIz+X3O8I+cKq9e49Gltaq+g2uoEysXn3uxSvzxZIlpufFAOx+GUgL89R8+O9euYlFkHqtgxOqDh9nePgzs7yIxDjvrU+tglVxtAyFTMU89lozQQD6LFd1tLJSgwmTn1kUNIwgghjOmPPGmg5FxvPbky0fbvdZfYZtCddZMKUeCUfEnXTAbaFW8TuXLzQ2k7Qw81pKVyJxVytsdibAD6bHdgAhuA+fHgDRIJpy+q9tLPKX1Z0eiXD8ja2RJuFU5SnB8DSdhI8L21zTD7pDl34edGRxVz1AMlTmswCnBPA==';
  const _INTEGRITY_HASH = '8e94f5f34e6651688a98079f687060856f2ff4088954796dab7cd8424975bc0d';
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
