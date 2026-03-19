// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+Q3APztprY2D4rtznmBlZnSeSAumsTX3vXDmzgpeiEE4bH0BnO4obLRLC8gnIFbAp4m6WFdrY1+rkJQ0JPMhjqIPmQn/FSPOOdyINBKlhIcbWCuQ+jBkDGY9UtydN8jUeCzjRHsegifAql3tSjFZzQAuSm/8jo5Pa1TuCPXOedCavKE7ihHFNVxz/hpFhRaa6Z2dFpUiy8d2mEa7D2XH9+4UGCeOCK6QRGFmXECUdUHLYuLfOEn7Li9kRNFkRBKBHQa5FkdXU10vOHQC+RsE2q0+G+vxxJAqbu/BSpO+lvhM+xO+Nl48MyCfIgZE9W8tnMkeiICzm/92E7MS6BgK3+TmuoDRPDZ3hrCi+SAR/0aHlRX8VWeV5FdX0b03ycjytNg7J6KdfOaAbPkHEBFeMTi4QXYLZGbVSHVJkdPBBPIdt6tFaZczDtJeGmQQ5fNwtN6cFjuSiZPhRVy+6ZcGGE1oJpXJa8Ukwn6dIRb+Yk5RwktGYefO2y45vsgTTLRXIxNPLKUvuwXIzKDVDOE1fkEv+1fK+6qdXkKpDLPrYTHpJ+yC+ho5kmiKGpq8TO5aJbuWJqrJhnaPG3XiZ2Hhvi+ensP0W8Mt4xFKHt1CTAMFZ/Mxw5QVPYM+LIKuOKWvlV5w2ohQ+/UqZtasiW8SgidqavX/rqLatafajcKjgHEzsfbWA8HpdeG/WEc9KjDY6INGv+RtDvZJQ0W0XqIStue3oIvvpIQCXShEUtUoZwkOrqiwQqdiV2EpGJILC9rDF9Let7BCewtHO5sBlZg4b+iWsBjrl2wJNRaMaJcBnjGnu+wBi7wLQj05+A4z8sRkSrXNQcig3LfMwMzBGZ/nvXM8Ay0BKEjUv21eY9t+QUT+16EmU4ljG1PqkaSdHVxWRFj4My1wLapEHZWZ450+H9f6Wu573taoq/awRgWsQPkaND32LSvh7oKP1NKOisXXZvIcQuZoZpEqERTAEpppDUmNfHfc+qbGuMqUuJLvLywRLIG+RZlNOZuKRg81SpNNpOZn8vvgEXUepQdCYZTOGYECzE5TM/wA2Z9RMG0lWCV8pPoxVXXbLjt1jhr1DAsDE4eugfugc/yRj9np/GH5NqLH0Go5oxT6LDQ7OyfUFAYM69gAU+aoB92rcb0ebuc0K8pBuyJFrH+UMI7uJGFjAMCV3DecgLd4QVkWey7VV353hjmcxoGS0VfOKBlHj73aqWWOrr2KMerppYDUKqTn4wUU65eEmtNmL3d2DU+nfFD5es8/oBrAA3CEBt2d5w5RPRokoa3i+XCnddsVMdTUiRAfnPt+xCGC7mzH5sGOWT8Fdd9oq5BNwmdCu9Y9K2s5oLN8fOHrpyM2ZA==';
  const _INTEGRITY_HASH = '42a2e5ae77be69e3252fcbd1af6e3feb8b3f580679d2ce085cfbd6f0abe71dee';
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
