// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gREz++9g8wqMUzKgtip0HiUuU2hxeedTeegvUsfZDo7UpGGWV/AmD8Ze4IcoQWYtjUT9NL3Bln6ZPJ8ygl3STcNrHbQoVRtExMHWb4j25LC90+0AUzUJG/Ot2hXvN5mWIUwDn5dGnPjLL1im10CLtVYPGOmv0clOzbHYAgIkzhh+VhqTDX/UrUtw9FVLTGfQW2GcLEt5OQeRsLiVd3vwobPh6o9QUlAVxhoa1njAVsjMP/7GYezl2Whs+iBuQXDM6obAnkSHSzbMSXwnItk0iZq5OxFeo7CEiRnegoH9xoGgzeNnAcZXKcLBgU2XsVE31ntmHX56S2UjYx92VXFjMNC16mZf7GrQdkjE9G+DQgxvCva4R+hcMA8nVpomj1hQeFiI9ZIGDJfr9UkTqYMR6y0qLRSL/fzjI//EFY7lena/fWvlOYiUstVVCGgBfHhVfyPfABgMQhroCiTRobeC0VsHxux3el+OYOP4qzdYla5ORGv8Vj1N9bQtxGSHblLwgiNuh5LpKO2U1IFup8aXCG4WjRQxFvONbcElq3eb2mQyxkLRWu/V1qxwpMEjgCirWKbQr2dGs+0V+N1yRuzTHrBnV38Ni/M5bk2BdkSBCJQ997MBVHmDE/wL3/+piFpwoHsVcfiiejfCkCXpZhUcrJlOgxA9Y41/Yv+yELmcJr7eJwldo0KN+YoxyRNO5esxEqTe0OGvSQdaDf4Zkp3kXLwlpKwJ8jbKFeCmqvu0gm50KmZINSvFCXJj7Y3MsW+ujJw12YyZXK7NcbOen0mSRWNTrj4E9Boy9R5hceI8KnEqrS3Al2oqslQNbX/lTjC2JCE3TXbh3Gjerrguw9Ds+IJ47uvGwRg5kqqrJECUDqyLzhEutbAzGgIBlpXz4WCAVCqKyMoX/pz1HLIaBHMIc/jAFUAYmoRnjqPlBG8WQBHmWrhkik3R8xpfuOMwkj9JQPFtz/MSNosByQ0XPsmGRKlRn63K1VjFbJKnxPGD7gSZ7qnvPy+VDFGvkZgsoL2f5T984AuVguDWAJM5hpPqI1JYjYPOF8DZN6Eqf4CIJkaCa6TmTcEdpGryHSB8wbpP+1peVHt9BDmA4tKFs/wxZ9bzNBZT1S8EF4tNK8TvxNL1DptpWyVNtTOoZhGNORGnVrPvJKWrkMLeieyF16hmoZ10yyhQyQAzmEYIsxDI1FU1AweHajVLf7PhcDQ8aGmj0z3JaEab3ipvYXdEL5mkx2BVPe5EFehDp3XGXed66RJxyK7rpaSyfRxYMBZpu1rIiEJzVY8ClB/C2U6WpDXolrFu3/9v4dx0raWde/BN7U5oxScPMaHxKQuCwiFVQoOWaycZnuPy7fimExSxeJjshxtzfQj8ZsumBv1zJ14N9l+TP3rj0Suv4RHIQo3+FlNKotHxf6zxzy3tmjQkI/h2e9XFE0U2al4Wp+lz+DcHfpnSQrXDE3zLOcUTYL890r8PLwf7cjlfBh+dSXhudV6Uqbt+UojN98kLAlSfXgiUZqDdIVfG/uNbxwD+v6OGd7yDf1K5z3xTMe9hmVbmgX4BT+mq3iomSDJYCOUSGTByl4JL39SG+cj0fFndgHyGmX+Ay5Au5vsqaNLgpSmTv4GWdASEjCZwp9KDaTHGJr/XqZz15IoMKqNC7epdOFF8LKhR/3AmfsLj';
  const _INTEGRITY_HASH = '2d7b5d49c54c4a81c4da9377df02bd366fd296649e93d1ca42d5e033116ed220';
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
