// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UPcHhYD9yCjYiLd9cTYaNKFJPm2IKbDOSHec9ING+YLXD2nkYOTCgEhwd8OyQ26FZ27FwTtTKEm4jynsfpvdX52MQJVpKncqxJhJTROL3uzHwUMlBgK4lmYUqqav6RVpc1IOSUM3vEW/FgYHAk9ooHKinJsIpsQchaQnaDLUJkuc1tqlizc4i3wAOIV9v7GXQjRdrD/JoWybD/+XUep3smIws2rRZaoOylOcZw2DlaRubToxgTY/fI96ot6hwl9R51ZE0iM5xya+q0EohxOT44/77STRCVuzgXQMd5W95AToZkKWU9lcwooEQtikyCEmqF4nHAoxCofeKie20FgclL6GqrnLqK5WEXePSiwmmSVqHwuS5Phr68Ag41+w9ln48xJWj4X78uweKzK43aEWOJt/9gxL18Uupqo8JZbYm6lX2UfjLe0MUUiCMHv4UikXXiuVteINwgGwicLQmucPrCzr9PGLris2mAnMhrL2XHr/4s2pEsxWFfUyaAKU5Ya1XYH6g5H4Cmc29CkBVLYGYeXtR6PxkkzJWbF318IUW8JQsSsHgwD9ut9fz5LXLwK3dZRxge7Zqu1G5ZZX4RNVmg42LLpYL/kDomjlpQd02gkBpn8HAlMIWKkNt7aPWp2PfGfhsVvhrQg/DAB3auoE17b+wkNMwyQ1zqbZSIrHN02Soq5eE7R7uZCpw5+1altYPWKgfenC27huz0s+ummxDQEX8ZvTUg+YkbLWwo97yHUhyBX/FHsRtnWWQvIehxYvBdBY8d/Htedai5XWIb4DslInDR7eMVBTaDn6ifLYg+BLuOkOfM6X3x+1BMaByZyXDADZV/oz/zbnIyGshjkPEvZ9lFkW3pJ+2qtsE/z3n9/Jm/32d3vE7fZ9h6l11DIogZ3x2ERyZJJFWR4JjqTPhjuxvgVq+rXZycDlVMKHBKdxwQ1fY74aNdVq4qiEt3V/Df3jnKg4V+PwhndGym987UAp1z5k2/7dTVZjmhVjcN+G4pL9H69I/pqvLrUv';
  const _INTEGRITY_HASH = '65448e5beda0d5f02fa1393af9177b139c4e4213dc15628a23844aa4b8cb19c1';
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
