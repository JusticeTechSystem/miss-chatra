// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3Q7IE9CV+1L2F8K8BQnHE6sVKTlluek3dhLtkFZj4twkKw/bXrc3rLRzagn7h9t+Gjip5qgEEM/zRcqEFxJdkN9h0S8ZmzJ1O5lBoYchr6x7QAXOPe2HInBwZEcV6me94HoYgodJa3yBx/VIonbCvretgQRjIyKOTGfnUg7NAkTIfpuFma/V0VAqR4odOxHmm/dz+RJSs2ggE5h9RqPdcIwhJDD/WNqibMJUvorUA5hvGuZwhsIly5GZyLUfjV6ugJ03LhGPZGOjDl+pp7H5sDd+8cYITsCMGP7C8GJVw///WtWNm+W1GSu0HnpWp4QR3jirnXx4jU1EilLHNhCbM5iYCQ9gDRR9EiUllco+ZVElOWlMQ7Ui5aYqAnshB/ML67vbgSTWG2u/53m3MImr69DdpkkfIBqOTxZp0Kj+uvHYXvIHbxFg4wuuE2DzmrFmDZRNh9TrKpLMkq0KXSOBWsF8VBw91GU//LzfnWLG6VxNLArOxDCh3cvQNnUr3uBpoyiLC9Sf7T92XX7YhyGI4w9+s5vlAIZ6SG68XQP+7CW6ldMjxFVLKaotYNw8VJ/PX4Aes26lvX1lx3wEXFS+AVEyKLtKwVX3jThTwVhMlmdr7shpBUhHe4Pdgxn7GnWSipSoAQuv/TGdM6JOcVbcUqpfEY+9QpOKK3PxshxiMMO3QyVJ/8bkerik/02EtdeTs29vvxBLOH9lfUX7o1jdxvT/hDqOWZJE/lYd3h+BLUrzATWTMWv+9S4TTQmbk4u50Ymw0qIN14SeD/GSJ1XqHf0P+4Q/DuPjW89WCpnsnYuvbgyuwXbZ/z9kxZFqnbuqnXp+jXCcpGIT+jQPHBDnwC2/e0pa01MAtf/P1sJj/6tI2X7XQDTvmJUpNg2LXCueEo0g4cJrEdVwXyVmGFop1Zc/zB7GOJtuhaxhjx2rtHT8NQaDAUweJsavGGEejFQXRfsBq0ycd++NZL2dZqSju9WI7I9aPwQc9fgJlxFDbU0H2dm3JxdhmGphMtRr5+R3Ug==';
  const _INTEGRITY_HASH = '288cc71216c3b711b846257cdc5e7e7bf8130c54d47965281a28cd5834a6c798';
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
