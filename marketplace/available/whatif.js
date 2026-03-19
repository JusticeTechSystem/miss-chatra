// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LukLDZ4y+5yFpMTU2bxHHlAYeykcPKXQ3oQ1q5oms5QWsY+beuc8hMuv3Y4sT+D7uSvvVIaOtzQwhp4L52sdWzKvesqnZjuvqrT11age8io5y7tGzS/2WcLF+USXNOxjXVauo2m/yNScYwg2pEP5w+tumytZ+RhErkZlq73uTn/+Q5VFLxltdjWPN6pLUuwpxqHBjjqT2ldcqSKvBz0Q2qIK3JsIYokJQ+JFREAxn7BYmKgmcF5f6lOo0Jyh/EoE2qPo3hYzVhMAg5tCPprTEAkjaB8NGU/QrhK5p9ZGvSRSG5OifBRPJBE0GexGxlDhReUMMyVijF8fFIR/U/hw0m7Wg0K7GzdW+N6KIGHIOydKS6z5dvVDZqwVdP3a0AbvCPU3ktPElGGp+BBcOzFy6aSEQqcFxNArv2N8n22rljv5JxlEKiayOyvdV9ykxdsKeltYmns8S56+XZWlBDOax38vVzB980KvvKnq0ETbn8YLPuD6Wff0cI51NHdRVWJZSEWUxMd2aTYQ5favO1SJacboqXQPbUUfMIETm9S44rl+RfYijsYLUJrwMy4vU6AL5cXHkyRd0YbCyUdNzhsE+ra+hD7qh4LRAlVa+xpCo6fE1qPbhJT5GB7owuNss9tjWXP+PA7KkVpCcBLBmZsE1SGIUKrwLwhCwy7CV1dVgJ1BhJJr4jcKqpRTe7RPe4UITgq73uCW7N4mg8OZMCHWm/0nnxA7Z+V5Wwlju6gNCH27YHjPtjHJnTWImxGHeiNBxe/v/Cryr+8VlRXJ91LZMqWdANqf1urrqOvzfZlmKfVacsSjFg2RJNrDFjUaBvHH44PLkiubhT7k5x43TyadCUXnQjssof59FB1dGu6tmJ9EfFeV6uePi2gP59HZsof3S9lMi7cSl63YX3RcDjM7sryASj1xNbU2e6c7MUxGjXuldixbsisq/1y1AlGBeErpTfcyBl7K7aQIXwfUsOSjSGE1bZOHoGkzxZPUI47zR90WoknB/ZTnQSwM6Uf/7pAO78/JLjR8J6QoZa9lDZ/P1eTeEeIWBpEgPqe/yXRBs2jbJ4CCoI0L8/krYY3Ec/5iyaEQxZHV/9hXSu09acFVu4v8CrC9jQfgeFEAwPJS8/SINo8dDUsKKk76PGrP3eyWelBr5lc9WPjV/ZqCSdNeR0lKcANWfj5Fwq5cUNkoDu8nXPS3QmvUnaRcdy0X288ZIAs=';
  const _INTEGRITY_HASH = '256ecce9cc7e5257843e969bbb1371eb01456d67049efe35e3b360164bdb2003';
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
