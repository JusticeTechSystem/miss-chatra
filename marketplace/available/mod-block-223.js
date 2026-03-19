// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cUSfpXeXhuD40JQjoUIJRS31xDwd2nrC3mSZxdUUN1mopA4URCdeO6yLhehP7FloN9Dhew6DW7MptuIu4YVQFkKALVM/oMozO9T7lfOvNpmPJHxfBR0pPyqQJzeLR6xqUVW8chThVH3FoRcV823IYkCY1Lf+NR4VEkedFxwJZ8rzDMvs3H/XyY9E6EajZuvmYW1ubmGgW4u3Y2FcVaqo9xso9jJMiygxtKSfY6qaOZHmm31tB88d00lDfAA/YntZEsIg1ud63Xz3hytbTmQPYQjTw3k2UXF02ubBfljZAU9JlkM/tQe5KN9O+NdGju07SAfkWAEUMDqTr1ZpIcHLx/e7Px1K8mvceJsahlJWmuLf+t78HYp1MAQDIDwiOV6PcnhmDiDXCyfXuejdcZlFfVwe/yRtVuA4PD5k1uZdroqT7cnFtawxAYWfqvL8jIopo2othLNzLwR+bcTCAB/2rEO3t7rxlg4d3QBNW20bLezNWneXDcCDJV7nDG0xOxavp3kNdY+YNi/e8CNzX16nCZ9YLhqouc3iHr4hTQyOIJmqbBl3JpBjCdSljuUeJ23ipflOOHRo/R339vh7+6UQ3ZE/DwqGvY8wO7b4Yj3cRdBUQVyT1hD9KzN3DtXBD2TMRML95nSPbxEubj3AlpFqnaiTohxcBUDG+JW5HmZ1pCjKfLDlo1Ee0kHe2u3Fv50c88DeMPRhGLFSzBsiPO7y7JFw0+xURCL30NPirISxGjX3s5Vwf+RctyA08SpScWn/h4OUVL8chfeFiPVSRpj7VdKfbGdXXprCuw8x68psAVIim9hmvSrItBmlSlSKKKcjxNZsJldbCHfSEAkgc9QbmEV7q9aVcgMrlk25EAxQIzJuUZuxX4ELHOjKZy80WNNms8xLqEvx4uHWxzsvxuRtmelJSHNvZ6Fr7Lku6o2fieP8perARMrJfLcslxjwTQJwtNo1aMI8PCbY3kVCbAxRdodgbFxTltgRBlm+ZyHOpOhniAV5EDPU/oaF4CRlZGK8KoeIrjPjWhh6sAZZF91wxlalmtzS93NKGNsfcrvF3nf0XPEmN9QFM8PeiKdxKz2L4B2hATRg5MUGEDsc+w3PNmgZXW6Pq0xJ/fTMrCxx5DLXdm8yOF7ZSDK3viXgn+QtfNEp/XdHwDkeXxCWuEqPcW7Rs0bsbmml2hm5eKGz2BPckOECikciOgkIZKs22lJxFpYsXMiim/aOLUv8W5AiTxmm+0VWgdPXn88CmkriDdZPyRQNl1s5IvjVpeDXypmfqixPjvcZvXsmnzzSjsjwR7KOinVxRZwVIVDsfEit4kDJabxNFb45Fr1hdmudelvYcmRRZntDfyAKSbvfQpqbAG36/oAtUvUP6GkanYpc';
  const _INTEGRITY_HASH = '1b00bfa80531562c18e0adc8c96bf8c193a161d89174a7749602c506b7e93bbd';
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
