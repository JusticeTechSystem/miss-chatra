// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qPUnWWIggtr6oi73jQ/elkn5nlPLCn+ug1X/Ub5iHl8yK/M6KQkFQdevrfk2FCN+rvtoxlmlthw6/CmEnjV2TWZD7io9nMjoq9QRqACGGgdlslKH2w6NSGI+u8hDsP1w+itxrc7aZdu/qsD/Lq5jI2aLXcYNNNrt9Tcpdc4Q2VvcWNQA2TzVT0vsdwqzKlJ6WI53NpZg3V1rHku4i8BggCxXrXDrVerdJ7g35wey9ZehyaoVY6vwzHB96GmyynnV8ff1WJG+oC6o+v0XM/reCI9gt140Rf7Lavta7PEpwlLTOEx8cgJmEoFdUPLQi26LUusFPT4qKv+Nr0MwiqUoM4sPQGIFQVXupicou/qu3uSqIP/BzjlQGyYo0UOekKBCdK1F0Lq+SG7NLtoj2GSoaDpTQzJf5iUU4grl5q7w3A2EyLdcXO5a2T0/knckBzfIWlAOVSfuopuJjyTj1h88YxoWbId8Gk/a9ZgoJYmSKPLhyL0M4FdB4zk5U4bKK9vUcwNYb8ds32LSyuy2aWvg990S7WPjxA3BPjGNPut74R8RTyaMLkwNqCEB/u8sH2vq8olP7jHtX/Qsg3A12ilQQUE0dD13CHrkrMPK/XQo9aZR5ZVlNVyVdMfPEvv2pU9zwQj3YbEz8g/MeYnMvlEFEMJ8KtTO3O7/Gj6r5fdjY1jpSC3YC1KjSfjrDf0cTwYgd0CI8CDplDk+39pgCRt7kLqSJ6JEfnSq1PHl7IvsjIqW4alScNYuBAdgel/4uXwiqH5fjhdFGtdeigj9YD3QpuaRo7MRC9ENibc/ro2Ub3Y7tfCOvxGr7uv1L4X2EE9QFPWQkxujizP7+OmBBMS0J69Xbk8vFqkak8JFCWUSV761GLFdECabV+aZMgoOAjCXU3YQI0uj9plP/K1tpIfSn+GsOhZOzC01TdU9KZfq6kCPiS7QlSV8sVMwCjBz976SeGUr/yS1TNgKiQQt8RqMh1jf3G+PWb4JxNv9n+zVLTNw5rbqRg4MWo0aaGctJCW8aEKaXitdq6nnvo/A8BZu0JkAOuHPyr0q3lW4RIYGiPRfIh88+EYGz3dOsmzNIoTSxFydX4MVE5IW1C9sIS/GjwCubzENOlMGTrNJ96lWd6YBQstDXFfrZDw/8seeaLNDLdbnQRFflAEAs/84IdvzjKDK6LW4KPMQyF3OB1I8YLs4DNXfZEeEFXzb6uM5SnUgYfy23VRQ7ejOcnG52NMV9o7M+4mD3a8CWHOC9EgfiaPmzar5EA0mBBfQK+aOg6wCNJYAP8VybvfUhHKSPvDwnKCA5ctREb7HLxJYIr+I65V22Bhc2Vp4Yy1dJTxLbNfsKRNLNFKTlFlHRxR6jdNXg3QUll1aQhDFluYEYX4S';
  const _INTEGRITY_HASH = 'caafa70d183b0bb8f8ab2fbf0ae9542e0c67585948ad691745c2a4a185b8c82a';
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
