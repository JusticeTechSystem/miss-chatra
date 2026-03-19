// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '24ZrybxqHSu4qeL6e6TyQncXzgiKLHS7Hcmi2DXmzVC+ZQUAGDez8AvQtHzI8LF5E5lVRirxQSWjitbOhB0dnTJvu96Hxp/uf1qcZOE/iVA5bWyeK8doDBqljikIU0Io2VVq6gxv5vyxIQ6+8tIxbYB8hFJGarxAR5ThtUQqAZ0ogihxItejt2Rk/Qfvop0k2Q2iMWBbDccEZOo69oUW7gqYGNxCk6bMYlCiu3NAOV6eQ5wsl66gKMR09zVKjdOVDAFEXuiDN4tfTBeAZ6OQ2VnalH6cRWID9h79RV/jMFOXS+OueA66pp+yY/vkFTe/eLcTJfuChzNb1uyI0wxV4VaFxhMuhAFBf823kA8h7+XV7PwWeyOo/RDFYgi25zjcUF3utqf79ZjDIGaSXNhDPStsr01D1Y+S1EXCwWK9Hx3Dp/9vQSzNq2ktd0Y2vsCDUjrQKd1lHtMF52c+9mOUYnqurqApuvV2V9dc5MyxgpywIBywFhhVYQH2mjmcJJJuH39RpNBJ6KlMHE/GvD7KQIVDqq744tm26+zhU9clB2hMzwx9Y4NAQMsSlQjWCi+LQSToxK718FGkeMUXO5yy9mpH3PrR8Yn/qpr5TVHxqCUNMhi2NgYVNQBbgEfo5CqFXAhAPd6wqMYXFUI2CctE/2Pnbn9laF/t+/stiaOgOZL1mNbVkoga5kPs9x283AJS/ZoM7H5XuiqdwLrK+TFahh4tB+hU/WW7OmPZnUdwE/yMqTDKzsfJuIMBJiOnZNAu7VrtxHriYa7LURIY6M3kwUAF4AlVfOC6xZxa6cxsWbszgu+WiNMQSexedhM9tcKqQg7RDW8uscUsvwdWfHFM9Dcj3qD/yRaxgXoshxf49jTtdw+hBfMfzj63TBATsmySVyMk+H2y9mFuD1yLP6QbMI9dXQGl7W1C1FozSClsBHBFqm0wVKMhY9+Woh7H/kx0Jtd8RsW1wIECSLvJGwcv3XYT0eiSVWnmHpZsyb4tRu/eXw4bVDDnionMX6P6hEqhiol7Ctpmz1Pm5TBjdXRcZ3lSk2CgRxR0MZDdbNN1c6Plq8BG29pXNEHc5Yr6DMb4gEXXPWxwKfpnpMo5kj93yv/InSi/QJHM3uCRALa0onVdSTWHhTrc4PcgVjTdMkpNy2rLFPgPIMrv4sz1taXiW+8b3W6eKagkQw4/7y6GF9EApzrg5yn5XOiQ+nK66fcswKRXTnxDw/T4TpaGIsUUrr8Z5CGwSJIdsRt2A6vlNWdZg6OmQAuR8vVEboRbNtLflyuj0UGWAvuAD91mzO1hpVi0YfK11pmO7QCh4KMf6tstTmDvoQFKYB3VfwGr2+OApsO3ZUnEq/DLEy/VMy2TeBTHEW44DJ691/v7CB5RhlTEYpivJknJBw==';
  const _INTEGRITY_HASH = 'f32d7ca5247e52541d19ba60580abb06a657114784a9a6906985f3f347541ec0';
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
