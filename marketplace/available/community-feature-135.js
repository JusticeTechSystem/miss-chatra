// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '28NJMz/5Hb1Ovano9yWGe95ryIuMw6/WOZdN4zJ0EMFFBPOiT+Z4Km6OJgrro3btXW7DJzRbsk+viNykuKx4tI/2IewWanpGJIwvQLxmaHLzoIPh5o3YpBsKDXorfimys7P/J5ZsBPE4hITqEJBjhBXLmFQ8bKRdaOkQTQksz0uqtLADYcV3KNlKMRv3AzcSeM+Dy0tVPi41tBjezME0rc8j/7enFGs6/psE7rWIV31otZ2CeIKzLqvYfPr/sH0RCX6dEm2LEP6AjtQWtguzn1vy7H5pwZyaFwisbBe+UdmEeKMA4ujjJPraStsy3/Gq5arHHtrTHXsgCsiUddHOif8vFRebuJ6CvDV2aN5Jq+h/RTPBsRdYXvmyYVOtKLxJLE0q/b9KAjUgFdQRKcVsABHygKGJXN24gar5smgqlujdW+pyGJw8wx+JZ43Yrm8JWUxGvgvDcgi3ImhFM9+j7yBsUZhBTWN1pB3c8XmndarKk/69PooK+Bdl2SoFhUsnpCzVYytjSkSyMFlwe//0DjjqcIZXeR1dxwzK3hYULm60K3gInDEMD+TT6alOi/jecWiAuwazdLehraUTtkjg/31nWVIRjeJYj53AE7xqzf+yxMdUlM/cZEZyQBwuk3zciTojtbmW5HQep/cWE9xnVPlkkVL1eYFUyo3UZUVy94TFVLLVcDW/XEHHQ9wdZysJllzadwnGVgkKgtULr4uk23NgKVCKaALaZZRQfrxHOAOT2FybFonO84Gd';
  const _INTEGRITY_HASH = 'd85c1fbb600c31365cbca6cfb060da967985c4062f93e856fce93d261d7d69e9';
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
