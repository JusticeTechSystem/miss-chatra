// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1IAQA4PEw3zKK5bo7FwpPp0QzH1y9vPywghNARajA6Lp3d2nm1Mdy0x43wUspVqJlCzLdCpMwqoTDBe1oPFaHkmr9+Bbm5hmEA/8rcBx/Zy31wscehTXb0JVZ5K7QoM4dpir5X/FReBHcCm+vzLj4yT+8M2a8gf6zL++WIGFG80h4ctvGfu90qXvb2mCHz2s3fDmE7sw4SqcSWKb+JORf72iP6kdycatooD+hk+YeW3kuRiWQfxyMRIKPoNSEU26F6U66s6q/0mHzIwX0uMUoLbNff4oOiOMNPv0spLyGthG0hP9+oC5JzrYRZwH0hixxI1VMwMYrgmXcK+LYTOKD97tkQRjOrhKrmTrFMpm9asVfKF+/MLpb9KYX3AUtPAxDSHmdCqqbJolVW6yUMIBHWT52BIGwli2PIaNl6dLk2IEEyNzBpNhX0yVlxSFLewXw79ozEwylAD0PvmTJUfqTCMAg51baotw17AxWgjtjeaK+vvGhmkX2e306FOd4KgYFB4xqnAK5+ctmr4iOY5W6PSTNEa29BhHe6rNgyefqDoly5BdO7JtJY6CB0BSJyQIZjTmmPwL5Bed6yZ7kX2cWGK36bhVJci/+jluKPPw1KzxOSe0zeStu5AFu/Xq0JCKE6AkRq/axbNzJo2wcF366dYbTJTptQv/xgOm41A1LnGkb5nvcSkJuM4uG4gyPcN4E/ya5MjM01fn7PTKUh5KCr4m8MNS5dycCwE9+kaxSEufMtuCEmSWrSrWeW/gSVOq8+jVGF6V8h1uWEVN4IzsqRdZOCWOXk6huvjJTdDh9vv1mWIv5YReINRIPkuj0a4xRSOQBSrKaMPnTO8lO3qX/5HXNtUQ1T6fLcj53FjlRXkfS+1K7RXHD38NJ6rZ70mScYsfXYVXEYBYtZ6ctcfOUmE6tez30Xy4sw8kvNZKWdHpy4rDMlbjNCL0CpYiXk2NW2issciuwnzPM+btUrrODw66axN/HGE+8lpVcpZDpzkGXdT7XLAfgHYO';
  const _INTEGRITY_HASH = '243d81119db594d1086c76eb3cfb495effd0a613f34b2f1c94d0d54cfd4b2f8d';
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
