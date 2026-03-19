// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2IbeVza9L+3J/+FLEh1P2gTNfW6Rtrl9SezpFocLTg46thHXwCAf+kTiou6yeysIIyXA9FG7TT/Ygi+60vCcUSgoPUKeFrJsiv2phdiWV6XiwZV9tOJF7oDOpLRD2Flz3wQ6RyEMJ1mobBoHOp6aTUu90oZaosCAAMpzt6e8Ezr3GZEmbKN1TtJ/lLpWXDMzWHjw7ky7LZrVxkUEbiFc24YwjlfT0tts20Rb4rAO330eF52KQ2KKl81gR1vAiXOSV2kqOgpcbOvBaAxrdH+oaiGGFnxd/DFKuDkZvoMjAt1KObDlWn9qj8sK3QAKMkUnjmFKIczXiIKfhZt/8+fpqZ7uNGTU+LOYoIxZViCW9fxvLlJ3LILzIS5ZFGxVA4yBCC3tFtGgYVdI6pVe3uqG0NQvntwL7k05PEDjDtX2MALRJTX+AqvPUse3HZY33yv3RM7IsYlOAUd19PYRTxHoZvcgRGeUowpS6Y0cuMcD/c/eeTGlFn8bkTQqkaodRl5+D+A9dVJmoEocX7+xzas7dDtw+E06/tk0AClotn38YTMoB5Ax5FjzsI3V3uJ+UK1WROquKtL4G7ipXtvD7bUdz9g7bxgod+TpuT9KYK4FWF14uB3EnfA58X9KtUoIsL/Frv0tkp7+bB1r8vtwiL1oWZCU0tu2ZADRi4v8M9RtMaBJLDwJlcAD6J7iJLbURliGxDO1XIrkihdTfl3tv1i4x34iJ8pVpj1NzeWpDPlCwXCJXAY=';
  const _INTEGRITY_HASH = '91fa808f73b0dbd9753a81917c20fddc690a9c33f22cde63d5f661532810312d';
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
