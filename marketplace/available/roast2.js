// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ln3fcaWTLlBHYthrPBioBtgHEb13pjtgsMi1THDry7DR38A67YlvqtF+QpmJ37t8T7UL9UiT1KMGQbEstO740OGtEZdD1AxQlgM/jY42crhoKmUURPg2It9WUrZ4M0JQyDEtudI2/LSoVlia7xCmeI/mFTiZ0yPIFbWKaHFLRA6M60LtSav8XtbPR3lwhLN7jN8vXVnsl83iI/hfc9X1Knu17muI2S3ETHsANy5oUCzLjcEr1Vk3jWjlNrwqbZ64hBY9tcHPdHrg5fqgpsdjAR8IYL7tm+ZiOWkfAHbFk/mAvb52kktqv2Wt2VoKM4LcXml9mnqD6Cm8MLZP3o6Pp+tjlNbHKeKO7b70vMTAeNghL+6F61U3WMvUvMDPQ9gUTaNgjW7dY/YKqMuWZHCGnPSrxAhW5nN1NXjhWa2FmNLVRlbbTw+HIqoPkrj+1MmNxGH0g04D9jhuyjZHjLTRPVSUqnU3cpQ91d2FZhcLdVD3fQ1ZP8g2Dy+UGu5CTp9qDjZmS+14PAQvNh+9JpSzE/s73uZlitxgEgZA0UKgAuDTiy5TfeTXt5yZwWlbIPcuXvkm0IieRwfDP1FSWv2GRp7slSC7YQXm5cb54U0ABrTU9JYYr3av+l1DNfPysuLpWO5cDvEgbFQ26LciHoFZOqc/I6gD9TQT2fqVUdMJcnlpAJULBHj3LPHQx5KFK13bJIqpOP39OOLZvetkdhG2tBVbhHPVsivdVsvr94iIyjXM7+zQx8nWMKvgNd8SLgUmzaXOVIdkNlzpNZpeqV5EFxiOuQm4W1JY/ZpXOXsMEMv2rtFceKol+RX+yAUQMIN93v5ZPJdJkRmXQFNzoSoiy4ZQiHbtLXhsw2Jc72Xxdi+TDHKFaRpcYhzT3bqjqDGYS+qlfkhwFn2674BPhvkGxPptrdine4TnFVB1HQcpWXORE/EVigLW+v05/MBuUhEPDvXeUaOnqiLGgCrdCWSC0ObyCqxdwU5pfaZt/AAU6SM4doZI+RA6pAXvqQsY4HqPuxQgQfFY1m+/6CgzSv6tbnI9N/+SFZ/bHbr+0fjDqeimV2G5b9G6DNBB4q3E3yzpWQn62OyvhWBuFatp8kH3+qvoTAt8K/933m1F3VyflzCvGacK0c61ujphZgrIKAqPhMapeoBft9goGEKUQIoxhqHnXloEU/WKO4A7ZrFhvG3hwtpwC5+ySCPXryA=';
  const _INTEGRITY_HASH = 'e48ecd289a31642184688753ddaf011926b5b14d7ad8fa809319d6a5331411a6';
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
