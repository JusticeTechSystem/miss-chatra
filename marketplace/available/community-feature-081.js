// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hQxvOE+85gu3V/rHx7COoLYob7bYjWADYq0WpUgjT2QRIaVxH6JLj6lbx3CfnaCKrrTjOgxeslr1uNKDTZy85jdqp7pl7c0ArR0SzMcV42DFghxdF5kYq9z+LlciqDENGSJq838x6tI+H3x2Ov+W5qaictins7hFjz++zLQa+DlQmmRrHnIbH5klQ1JXIrfKYF07nui0JXe1pll41G41g1bGmltqe/cNZ2u4vLSuosIXT/hzvN145hLS6QphJqMnYXyG4a/ZBZIP/Gyk1uNtCm8RtP3XITxhq2jxZx0rgzSO7X9qhL3blxMfobh+27o8p9GMSYUumKwZqa0osVmfjV2RoURd7qzWgNs1GTl5EHcYIToI4QnbOwOSHKMUzOW0TShxfzSjCQraPgz76oomPDkuKCO3aR3ipi9BfvxvW59UQmoPYkWcJPVXbGOsPzj/7dV63WNpTCmJMM+tEnZo5X25a/7lBWTi+Rt9JwHpe/+vJidW9uU7dY+IEP7ilpPNhQs24BfShWfrGjFH1jOhUQ+7vt2j6coj5xtosThEuQ56dhI4AsQiBTclh+DUPVd81hVtI+uQ/f2oXeSUtpmuPLR3YTRQy3siwPHpxoTEcV2+pEhePcztL0M3YxxakeAQMM4WIGUbmDV4g7gY+22dgWemshtXKjonM7GAdwGA9Zv/j2RWPRZ02fTIvVtKQNwJseV9XTyxGeCO6yk4MfRk89Tjr0s=';
  const _INTEGRITY_HASH = 'c7aa018d0fdf8e13d55a73022882b8021447a2d0ba0efa2c7c2c98be3c7810a8';
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
