// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P2BcV1guY29KRMwBtT3GBOYVjo04XAUC5GZV8lnq2xaai8imQmdstNATLoUgtWw7fHixov+m6ON2+RRVBG4Qhf/X7Wa1rdnIOihlsyWgLsQunxC7+gsdKU1Wqn1PLF+SwHdLhkDOZjwZZF6/IMn1P+zjms1hRbi8/aXlLGHvY6Am2+u8cRK2aUyxRmcmpkx9IQx3/NkvPtZ+KOgVhAPQY7J+LnK82pGxCOgwRCQUP3Ht2Pd6Vdpn4Nn2TDiKbjiGFbKcBiSIMT3FKOi7JwbMnA4qTw++xNt7uZb7FDWEh6RMiApZxoMCncMvdDkcIU+moeT2TUtsHCN2nfGjrEVW4CE7b98bbRJXlhlh8gzynouPm2gcFgHHgkcuLt7H1MQq07IvT6A0xk1ONZl9jMoYxwJkPHPQ0o7wFQ3w/AD5Ltd3794GFIoadK6LlT4PNOtJixYpxwfEi9F/vF4w8IovrkSYWNBz+a5W9iRyAML/1ASwk1tNWvioOv3ooJYM1+01GTqxvt92IL/dKWNOoIQ2gqXJYU8Wha8GiNg2bYwAcPnZzfSlDJ6cXsYPGiS/phjT3gxx0B4PLJgnMi5fGT/oHimbQy+pBF0bzZY8yP83jBP3y+7+YjE8vqOQew9006zSFm3OlB1hWALqLlyOhFQrOm8TuSdj2AutaB9aJSfaO1csvJ/SoRX/xAG3Q8K119Ly5tV/PeLsuUkmFln3LJOi7ksUDCXEF0dJZJskBmwNDOHCwH2z1rjtwLViIunStbkBXSosAC55ZD/NQSdV2EGmr23kl4KdOzbq6zPbz3ayXjN+5DBVmpVbQTnnpy/Bvw2StxglSKecRkVUTnSyf2yJi2QCLD/QX2A25puFHEnz9PRs1r3fS8bmRdTgl8zgdMauXZ1YvZpntCY1J/CGOiSylW+KBClFF9oTcugGEk7JRD0vLCdNSL/mgcBgXYaVXNBfo1DUJFDUJuEIRwsA7EbTlyXwhZr+ecCY+1TibRdOdXnMzkoMZbxUlBGqU0lhHzpkgJ6eCrnw4+h/ktIDvRBWp5kZFizxDa+iG+ITZtY+SaQC//3BjCgJfcbiCvznfZ5qtw0RjWQbRtH2o1C7zk7TwqD7XYi70UtwM4Lk2ZU1f2h9KnJFzAhDZP2wZAC/2DHCUln0/1zgn8uifSz+Fk2sf5iWMdDP/iW2yXkoKcM0EqVrnbBWbiaJ0C9ki48RXwZdrgLrdwThOMOiUT69BPo6hkNQybf0pL+iO7xpASYFQgLMWuY/6V2z4YxiSAIuouyYdOj1OqQyRDxjkm1JC6tN857nI6cElCuRUpnPrsMKIomBNQeZXN4Ahgn3GCHVqy7Z1NQv1RfCwuS+3rV7FzKm1PVjRyjT2tVyzzPqsbEoAu0st/iH/OhPjZo59QDy1V5q3QjbumAimjkGi+G5MuHwoZ3cpk55Bp0dRSuk1X+4yGg=';
  const _INTEGRITY_HASH = '2ec1aa73c386f3491a5a86071f12df776a42c1950835972c97937f63000ab29d';
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
