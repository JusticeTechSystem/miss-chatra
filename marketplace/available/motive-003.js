// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SpDL7jAjkCT6DQhxbL0MgoD+eTiyyDysI1kBU0pf/mRKfS4HJheUhetGl+HI6qi2B9tx8HXsm2A/ljOB+V3PFBlUEpEOTLSB4/ebRs7FnDUY+fxy2xiwH/XD9Q0bYY5uH5JKRF3/zNX2c2tl1BicK4wVyxWsgKSnES39DRvj3qma7YNIfKXS2nY+5SuR5hZIpC4qlS0WHigzFAMyIJzjYfYVAReeQ5yCC++g0MLILPhklh5Tpn0mjFRMWTQoliLRyf6yTB3k8JfSh5ETQ4Aw/ocF9qv4or6qKeqpXE53kIJf6wzmVB0oepLTtL/7N46bDWDCLRH/peoLv+iscbHjka1bU2jhM6HxSHW00R3Pjym2A1yRA1iBh+Df6skZp/a4ZRhBAgza+mihYiIixKzdgzxm3eeS7vGpb+sfPnpfL9SfhFsuwhfYnVR7GMQwnBc6f/QdQMqDr7u6k2NK9CTrptVY7ddz1jtC0yCOJVOygpC8MChKpxCflcr/2sxYYqq3tdLS0RWGrUZ665EIrY7QfAQ7yaG9u9542DZbad3Mkh/PNRNkTAA7f6bpLr6njW+70LqjX9J5ZqO90KTpi9Sx189uuCFPl9b4XIwb/fZx9QwAuPJsBDaFu/AaaW0r6nds3S24rse+Ze8snGt2GD7E5t7gGzVau4aPVchFWX28eFrzUZzN0bIkDYFT9yhYyrhZVZKBWqvOtN/Tf+UV07oUMciJ1HR3ngsHPGFTlmw3fL7fyMIlXhAQHj8QMLaLAIsnj1oqGcnnDF588KUwwgAhcN28/b+7euhzLe9Y/pzNboW3PfTNZOX1X/R42cZN7+8bwzKaK4huD41lS4X32LNtNf0XCRIa8XYL7mydCbgvx8bAJYRYB6zxu7v/DNnJ3O48GL0964HNBalPfMIpOtahuaATftaZ0kciMgbAe6D30c2y27waEbf6e8emO/mS8WBr85TnW002SnzfPOD2o+/3clNuDvO705Y5cc8RcC71SSXtjSLo8P3mcPdR3MhZE2EwqC7laLwCZTiET4an4/g=';
  const _INTEGRITY_HASH = '0d007360c867c8366536a0dac33e9fe30eccf3fe8dfa1c5bce0308dc6b91c763';
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
