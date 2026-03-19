// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OmHlAOxAdw/mGKAalANcgvvfXvFpOwY0s1VRlpYuMrMzPjbQepl4BuhdayNt4JRNZUD96WT2y16D9nCgl64j2IRGZCGldhkZstCbAlab3PnG/CTjYcgqnvuc8/lnoZc+/9tFG02Ukvw1feiRzJQKzfrkoEaF4MxvKOx/8ESF7A/Cgs9g8O+9qzWp0qfakMO7HUPOQ1UBUAuW3qNEeFFt1YZpESA/6Oi57XLIhQZvrJoWeJwoCZqwgu3QuNW6vdQ4FhSasWICU4jBTxYtR8ORBmeOrm8rj/sRpXDW62R0N8z+TkfPizlX5ptGiyg0YnPsD9PRUccHZOPK/RosMLo04P/0YlWBFXuFIpAckpnQ1NDw5p7ffhgyxIHZ5fY2VEX06tNQLqjHRRoXmu4cdTvl3FGxp8VFV+iRHDJ/mz5hQtDIADfc0QwXinCAnI/tvFInVvQE+dNyBT6j0J8jK6KfhtpI2OAmSRiwYqTnTlncjM0aDu4hhvRoQ5UnHGZkoBnon48b5HzwO86Po5U1lqxgG6xjy6200j+QT+ahOXSYI49vi2ddqunZATLx0VBgKTTO7/wCElUm82TD9lxr0CTfIZBd7RNbaedF2nh+acGUadUYb31umsMh01CLOeSa/SN/6gZWZZoK/xIkzbBMxEdFfC9tT40t8oJjBGf/fMBYLYQINsx+v9P1+Ag0XOJRpUtYtuTcERC1lLgNWfa/O7qRMT0Ru0qWz/Jciu8CrnjJS5HFIKDAK1dqX4efVYF8tx9zKFfkqtl1CxbFZwqOehPSeUhszlCw2mdA+EMpu2g1yNx+Sh/ihsf80iLYoyF4myY0TlFoKDWu7O+FgbeQ7TTYkot1EkSDZINNGMknKtXlNq4FxZVxk7ahMAWrIktY2i/jc05NPu+0NxlvL6nLux5nYDwkPbzvhOXyI5gm1+jUd6lDbAwBpfsEEgMkZB9ak0vfnsMUAOdCez7IV4z9XwfrlciLWvRJ7VHJ25HX0qRIhwS0sE0O2SAvoeSlHFaOmrMNxgcnhDzSKh5y3vuwdN3nFWLkqc8bsKjNuWXdR5BepnXRIhgtM8yIoV90x2wcv+KxZ4qLgLVbNDZg1fHwilMHgskq8L45NV4KS5gtBdBWgoR1t+fa39W9/9CAWG8b7xhkVaOkG04tNt4NU1+Mu6O9PJQ6Wqfb0PBbVA4h7EhySPhdUAulUFBiGbfWdN7hQjHoVcYwdPYITiaD73mxC9AFeOkiBDMVYefL69wVAzcxpp3ergE7TsPg6gMas0Ba';
  const _INTEGRITY_HASH = 'a3efe39d55cd01f261525cc07c41d3a14d082e6c97777f5914a094e0c23cd573';
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
