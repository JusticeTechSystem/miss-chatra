// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8zI4vYSRteqtS2Vzn7EVx693RCjNfxS8lpwwXcJHzUYNwFFB5+6kZYaiWWa3V5f/ItXsMfoH1bztBjOTf98/4oLcSjRMpJCKVMabPND+yG6C2wbcuDxOaq3mpto0XymPRjLZlRTIPZOsyBcUdlxFsZiBelFdVnHkxWVDOR1eHoFzsxDJ3Foudy6UTfdEWMOaIHj4rAtW6iQ9VTtrywQ6kWy+uceDTRRtTf4NpPj/fXK0gt3KDq/OqCuL1UbZE9IGH1K/FhrNakTLyFgQmoCkP2iULbrle+1hmT+vscAmFixNQPMEgXmXSH5RVFkpc4fMtX62cH53tbB4R1Tj85Pm7EDVfp4NlqDcS5x4kr3GcAT7QsHEbibq3Ubz3O70Vg5WFtCYl/EwUSC9Ti2jDzY85hwXWll5MtFMEQQl0jt9IpLuc4k4X2bp4EhasyVQel1TUTdnutqu8oCo+Q097RGxZE+IkZc/DnUS4dsvT31YmO6Wp+KD5BbvYqUpYmwZkYTO+TjFuvAYHAjLSPMAL57IMThV2wI1tdHdaVYXipDIX4Fke6c4zFV2B1RShv7wZBpNm2VvGHcNesZVJIyVAqJZKDoJeWmlAQttrNV0A8k6wSrYK7Ive7SDY7V64alryFrTBCtgQIs9RkfO07c+LQmyEK6IEknaXfvOqbDIH3k28xkpzoy95hifG1R/fA3PEI5NFmTuQ4JaAisKfln45tqJK0bPEXQhXQG7dutUxcfMfLuTymZUgX1bsZV5hnIZeH8HpoVgvO7I4yKWlrdr+rbK2M5ZRwaSIY/QbyzpM2Bk7xVUZ2cxGvn4zolcbXdNrMK8sRelia6JO42VQFTabfudJ2IrD/E0ynKMjCbNwkBoOVEqv4Bae2UB7Zk21P1cHzJWnAfy76rNF0rvSvX5ENnkTvFyST445gnW5R7t9eVCYs5QsKMcLAuk2BgLTx4z7fl0X9ybOvPDF0P7ApPdI1MZTiYrNn5uDN1Wcf2zklPJhqzYKw2QALL+9puC5zJAT+ys5L+lGEgt4NYalBPeS6aQR4w3QWJSY7fuThE98dE1HdVBU/YDF72oWvDjWZfAQF0jmJd8r9SCpuX0HVAcPA3cUig2ve9o0gsv3FefOEXslF094PPIwwlttPP5p77QNFBqxDHC14C6nbKBYTttyphSb/zqXQzl3MhdLeNMT55gNIzt0D7c911S208N8cKXeHudBfgFgqFAjDhvUUtJkFIiA0FZ5A1BC6yMuWHaa4ElwjouywuOmMimNPtGufZgKt2kla8MOiSblYuOjJOWsOsbbgpdcVpi5MAjnuvA9VLl22Yd/9jUsxf2mzHQ0cG/tKtmHbH98qj9gk2Yv/q83uWEuUfsiMopuqxOCWBtwAbmJGlBKIOCgr4mN+jLR3elOSVW0qAvjwiTF8vc4EMm4qYa0uhVR32UqXVN0AXvMyUmc0dPxRC5x6WWGPD5KoITGM69bduHVQiiWGWNu4k9kfikf+KvRk6b+WyeIZHZ53zU/FXgjJqtjDkep3qEzpH67TbJ4IUlQrL/MXCWTq1KKKKwcOx0yT48we2QA2PV79a5Lxs0om9qWF8nrDyeilYPRmFHuDTtc00f4CSCNIUonv/Dq8zISIsRE0M7ukx6uDEMjlARUPe6oEr6bdYkCwrKJgRsPWr7lXSACSfT+/Ufs8z3IyGaZGRrpHJKMMy3B8LvscY9YCfS1d9RC6AmVfb8N+7X3IouuEVk6X2fx90Vjh+t58m01OV7M/QShycrSZiLtcqFOcteSmWKLQ==';
  const _INTEGRITY_HASH = '3ce612dfd565fc7ec7d3ab9e237b20f1737c79b7969009874d170e7512e5d881';
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
