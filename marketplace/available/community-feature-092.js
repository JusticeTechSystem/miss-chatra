// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ewu4+ty7xksMbwqMW910FihOEywiLInfU8Gy25WKZIJnT++thMbdUboXKh0xYkNQ0wbtuUT5EC9y5ex9Z7kz7wjkf69avY5pugdE1qAocMIKGx65vzk0dY3J5FyDl0H5Qce9trMG6JkdVexY44l3E8hXcsjzSbyb+gYVgFfW0dgTWCHJh8q+wM82+MWuov/A0Av+KQL+hyWNdHbsdqhXj4MlCVmPMAiMDyo84ubqgKtqVFU4ZTNYiMs+NacnAVHYkkEjg69CsB4x5qtArlyd4WtGlQd3Y0MwVdlyc7gL5Icv9n7mViSaHAIV1GyJiB2nffRhHjRafvFEAFoM+pZUYkuSqCzzguew3QyCMo9zaYgLUOAXe/k4vH6WHhqLMksqmMN8Bd1iRu10Nd1S9xYfi3x+SgfeTIz9tiyduRdmBNks0/pbmuEu8GlDL6+xTpcwdXbRIJMTu/Ud+fwvFF0Yc1sPMXxJad2bh+8ZFbfNvh0wtwWjlopzRcbpiXEMo5zmFYH+4cO/wd7DG5ZFssJ3b/lkcz+BtNRXKHmfOu49riM0o+iHXkd2pQB+meka1iGfwPdsC2iLln8Xqm62J/MR5a6sWQgtLb5zc7YGsb3qzo5DiXa9M8Y/ThH8p04Nq4SGsZ1RDF1O8sPrOyPFBRERa5gXK/oeSal430M4cyRNNCuGgG4n01PmFohdfxt50aDlFa2oEXOIv8WcWiIbYM28kekurLNCb9w39kn0sxQGXA==';
  const _INTEGRITY_HASH = '21118c38a110fb3bd9d82605c27842ed6a4a6e3f4d7121bec6562970336f2dde';
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
