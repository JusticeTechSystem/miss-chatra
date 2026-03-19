// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bJfAoc7Ko/ADtN1ZtXgtP/YJG22eTE8exp3/8XWXiERC3Hxo7YcbMj9D+iwN+9iaB70W36nklcacZjtDoQmAXVeYrOVRJ3GXTQfuip5xz6tPA1bB4KrQDwrguCInXk/I+I8BtoohiQxtuvbK8X53iPs+94yqYHsEZwGZ0AmFCiLYmMe5lBc0hr9cV9Ei5A5X3MZZiBS18B3s/xp8jrAnioy8gUFyOrYFl/imDJnARMlDd9ntwigkItHx8U6v4cV4pzmdtTWIbnybAZVoeZULR59h3RjdEsdhUhJpCwA/PggXeXDbeQpz/dpXafBTfLPnoeL5ofvgePvPUydYzwLviAjvoFhG+WCx2udZ0BI7eCIsBZoJi9gAphMeQZREyU/tEKVvcPnIdvv+NKsTMB0jkZEpV9aJ6606AAxhaZvkD6AKbXu9gz29KptF+4Zprla3lYw9VLWKELci+Mww1iJ3uC57M37DRMllFdQjmhLp3Jmima8hZ2FBnbubar8bruybuciEUwmLc6P7jNLwfuxcpCyY3TH+zqcrKI2tkimmPyG0Cjo1GzJnf4JYX/yShgJiMBPiwgWq6/hGGGPyqu5zhZgt8BpeeoEO1hBH5AFFXDL8gy20GU3bJQL1QzUkst1RjJL7a8IicKPwQNXcSUX5RUxVk/sq5arGP/dojinET0IUTNuzO/oRMRD969E/58jZZFJMarKuJH3gBgmnlJHKCeib3Nws+sic56fiQOkfMgTzWiG9yXvxMgHrrInu9ITE+MRj9p0GmOwFQ8vL/4csm1bUE0zfAVaEX5DuahI7+dnQ/exbGyaslGwwG99No9SAq7tlkCuISNuDDjiU5T0c3bgSAsfWNu0TvvXq7e5emEF4fr/PE6SLFuxrSsAawsEHkr7suGwicsUv7lwBpRhxYg0IzKoaSDIhngtdI7u5YV8CirUP6QucobCEKoVVgBKYBWecXMg3nFaJnMaJ/cRlGvNSPLaIKRlXkXjyT3Cb+f4SKF7r9kP678JCklJ/1W09g6Vlgj9/9dup4/UABJsIAtHaIaOuCWT/Sw3sqSxwTY+PBRDSwoknAvlrd+KBXVl91CCHYtnqqUhYx4tZ+q9SE/G4SwAwjsTvIml6fF2T4dO046atkBkBiW8fBy5DTC4bq6zYod+axdEZPKnRZ0tQ9wQnj+iUXXXs21GyFU2kkId719H2zqbfgHfBnzb74ZlqTbwSoJLpegAbQl31YjYNY+0kA6vzT6s30KlT/1qzg8ee1yIXd4WMcLXtoufk2d8KFjDjIn8ZAst9pYWoGf76xgt/lWkvhezViK+B53jtzCEQtv+Iiuqy3U6/XzOCtpK6CiBspis6RVXlqw3L+uZSJGQeoBPu5pqTTw==';
  const _INTEGRITY_HASH = 'af599ccf845f7aa25ad2b07876fc2db43fdf78c4ef77656587071d206fe95600';
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
