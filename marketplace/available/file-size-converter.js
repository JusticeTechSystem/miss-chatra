// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HJmfY/BlRn427FT9TY2O40R6an0Pw/HwK2yFiIa45pj0EL4LaWusEy5DCwrnYk9nEwAq3+67COi2+GacIwX9OEsBUumn6BVuY0bqIBkotkFop6et7LRgQh+MHATX2DEei6XXsuTlS5DJJ91ni3B+8FEZFfGOHjT8NNFC+9dfws266lg2HdJuwYH8KhYb+1BP+BYr2StlNYJFnmMwQCPCSwXazLdon6Ci2tiGXpk1HdYrI6zcPTjOKOMcZeCefw3vd+sIRcb8i/awSolblhhueKJqig3DZo8/dChn3XoP9vRkajy4pe7S9B9HVQXCJVUSSrBG8DWa8uip3J3+qRXLSECSzHtPu1KtFDo7RwKnVVg3GrmCj3QadCfhxMIZ/ly3Abq++RhIs52ZogF9XrDHdjt/Y8FMItdIRhaI4/dZ9s+JhNeK0tFxdsOnqNcypirqjx4EtnPRkfhq+JGQZMsmNRMz4BYWQVsJTlmDBKbBv3I5dGoTL1jtCJ5Go62xFSa1ss0i1Iilpsh0zfFPVYw96hOY/ZWJE2CvOkF/HAsZ7AJDxIGq0MhZPREnf3MRWsDs/w1gtQvo9z8YHzB9cXBvMlUno8FbAOsq6ybNU8vaTnYda22WcG+izlLX9m6qVShwRpBXTrcI1lRIEtJhShz05U4FR3vcbWmNeRe89uJmBIMMV3CB+42R+ExBaT+cNMTOdLD3SDYpL8p9d8z9QTfzevbC84wD1FbEduEbQKFE2tuPCb/8PC+ATA/+lJQrOrnkpKUmmoCIWI6ZZ54WFA4VjjZlOjWW/nrDdHkFr8ADCA6jV7c8BgWqf022h0w2v6aFakbByxuIRVN5YGEXJRRxT9ogUa3YVST+6EJwUsCk5XK2aPUy6erc7FdysnipQE/Jb9sCGrTcj3zOM9HGeBSJC3i7t9xYP0u1uJL5bYVa2OpIfPjvIs0ftN9Kr3NIYJlBhD9MUTS3fo6EB2ZECQrepYqJuLetG1IwQK0YaAnW9SCyC15FZgcejgUGWXbljX90LI8XZBQuBDhXDkrome90vgr/0QS8Qw1cprnh0NJsQCJ4X8BHt5V46wWGsj/0A155Ohx7Q9KZBWpBIh6hyrjZJl3jhY5kQTHL5b/YOQg784l0cuCYxXV5AGzMRkF+4unZYSthku7XviatPDFdCTOrz+yEBr3vzjfEOBP/SOknOC0V8o62qq9TyswYDPVVH2ygQJDYaYLDI2rGmyLJ0Qqw+p4XP+ChZvxNKvuQyjlPzaI13BNCSY1nnPkKgcEH0UitFXhZ3SGOF4wzpcYfd4TaGAxdUCMLTUNnRq+eL+rgFuTYfor+eakiD52xpqD+I9jUc8MJSMO15O3Z2G250bduwiBG5y693ZxUUaBqAK6ZrMM0IU2pYX5/OJkN9Sz9/10iQRvRxGUag4B9V5KB68aKmJiRrYV5YMq751imFykIgOb0H4yT136kAM8YNVvWUZiqRK0EDKt5v4zYlB1ItolaXou997IWotw+i0BTMbt3MQn7XaXiAju/9WRe9VwuBGcAGyueW81eHfz2LFuGD1X0YDEPdFzC1dRaNpkj+KvB4ru+m5tLPfsnXABZrLQxwPz3uYT4GjUrpVj9DnL3vgozB0Vjzefi825MyXi07oXC3WSpjYplqp57vQX+Fvd50uN1hxtJjcPIMx4L0Z7oFPSFFBK4Qv4Ag+Y9wxTJusfzuPwbYERpylWPdGkgFfzfMs22quSxbh+Mv5PfTZFwy7D1aI8WcYKq9JHkYSEZvhDO1U8C7IuxPlG9OB4fqoHWN+BV6vpd0XBs+kOY7zcOgtkrLPqskXQ5JFA/vFNAcU365AkqxQ==';
  const _INTEGRITY_HASH = '75ca964e6eb76c7f4086ed3f1d9e54859f2b4d0be80c58f7302fc6507361799e';
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
