// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0bWvweeLAdhuOk4Itn8VysdtE1vNAjNC0pH1qoBuwOeyi/DCHCpfYOWMgPupg8bBKh6+whAVpPQNoxP3X+aaxg4Nq0VgDpbkpWp4CjpO2l8mjVV110Ys5ZA8VN44vB9CHidINOnPmuWTkLXXyb/w8Z6N4uuVSu61Kr522hMDfBlX8AMVhRyB/lhupaF+S0wsSTJqDr6xeHEum95+kt77voTQ5MXU6Uu9FpMNWme54Hl+sOxfxQNAswaz9AHKnQHF+2Xt3QLEDNz9ZZH5hJAQgsNAcc0fQ21uGMstybRCrmSs7fyhE2kX1TvaStfmnPjs3wHGOnSVz0MIhz6cQg4xNKF0Hbb1ZeH9dtgRLbkeq26myQB/e6/zRCfNwvLf6puc2cyTMEnINf4QU2fXMG5HdWXCh3DCI4IwaFtDeHbuTeYOu2heHT53naWV/uM4hlEQ1+KxNiKc228ihbtBNt08/AIKfZZ3sSls1xxDe4Y7++bDoAoIF50WirxaeH8qMdqbqsh3GQdLKpcH8YrN1KzDI2btFgz3R27RbNwxs2g5Rj2Y3K94lW+B31gZxfvXUxu0HBISODlGX0+Vttwp0FP8W+2yTW6ZKCswWbtlKSkSDvbX1Qkt1DNQTxXt8Iw0WQc0wWc/zHrHqQq2dlbKrYajVLkEefu/NX8Q97Kuh7qcHlK3XYvardKoydzBXGemGcj5G+PTALwLCmmVklufHJYpRrC1y0aCm/MaJF73IwZu73jgSCdBvb0ZvRtTIzPTh2gAVYKtnBQMDPPFcXj3bInRutYt67TZi58rBJow0gfUKvlZEmVkSTCdvVIDk7kuXm3LHgwUBJqwhTsyLxEeBQ3e2oXAS2f2OIwHIylxVgZd4rbwEQfNPgO21Tx8e4+v4nKaWtXYowCjr9dCEBAOmOAS1ZCXeHOGDcBbk7X+D0fNvMwgfz8T36cbu/gwb2mlpk5sWMPguCkR5/Pj93Ch5q6h+nQ8b5B2HJFFEE4IxZSSwUi+NJIPSHTha3OwL7PeJBpHitOxnw5VBAN+kF3UCNKrn65fjbijJMgkm35KHqpThKgTfFqAqn3C/4CLxYR7gb8XpjasarWQdlNrHGYGxqHedgVfC1Apfzp96Z7fFlpXoasHf3o/0evArhsSabKfvogVy+6QtpzuhGH4T4Z2/mdqEHrS4mrslEfPBBrkdL1WfajnLREiaUT5asbpMfjT6Ulpf2Pj4FUM39G3lIC6hdqgvea0UtpBZuZnK7d+N040X+tXOI3y2bWl8/2E6SQPghGSZSae9dIWdxIhEZAg/4pKIvKQsNHaJvDPzVhi9EcJTwWhmPjrHCzLL8g71KUJuq8fJCttziZuETQEe8Lui5gqW7l8zm3v8/qFJuPXpYzB/tjxt9vrRjxHmpq6JWBbFEvaFFY=';
  const _INTEGRITY_HASH = 'a1f2e96d6476a28576d57cdc59eb2116f8942be53ca00048c8a03751b49d2bf0';
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
