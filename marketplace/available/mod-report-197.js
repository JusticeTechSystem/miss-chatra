// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '75CHH+4qvp+X9dIhy3okqdOmr7/bhtyWZEw7riNqpClxsFibPSbUWkls8WawHlaBvrbyz6bPUu4ckjh4TImC+Y5XXIPR7PiqNiEgBYeVqi81yQWHjuYGGY5RbB8RLhp+gOLenbuYZdu586tPAga7eu3d67Na/ZkwL2Ot0KUS4oo1FHFC4rLXSIZfO5a5Ere9RlUq3AjluYyDVUzxh/Q5fuX5oq6mHoFQ5s5rvJNVwDOymcm0tBbI9iD278YiDgzVlCM+yfnxDNRSxYKOo8eoiLnRKHRMPTIme3Hgu6eTAmjH6jklAZiXyQY314K/iBK4AVHCKyJqOSxX46OZpx08zEfM4j0t/gAtwBG2OVg2fqlLQc3Ld4QI8970l5h2AsVFJYLwSE48K5vTRkTiw+tYuur721nPUKoGI1LJ42/A0spQjRckXWiksIziafZVNczE6/Ytr1QBgfzDHn4869N65gKxZpTbZc/1Tt9Bp0z0GnFh3nOiA78BcVSK65+eMYagQyoFczEbh1RY+krNRAGxZ+skQJ44DI80iTl/IFmT7vm4Ktkwdv617jWz6dO8mL+6Zq1ek/5Tmr19bVXLYqXWvD6CcD5WL0Ezb8P7UqNs9HF3yq6ykjAbAHVbdfkjqiKD/tGydMHV8WcrtM1R7TEL8AJuMrxKf7XcljNCagZHHRADdUxikFZK+VoM0ltM4E1c+ESZddXRhZujDxnH/oT0ChQbqlCllK38lHeaYS/Wg5mPlQVzTKkJZMCre9mC2u2f4IUN/tK5ViQQH+LiNID2sCQxL00iaJeHmEY1/ceT3L09Pj0cEEofDZg1mrDi9FaMs8lti+tGNPOjZrEcaPasJ42lOi0jvj241v4gzuYrMkozUP+U9AXbLFe8tArLTGl5HUcP+7NyS+NcNT000ANcPge9QdYVJcBJbFrN57ZWDbZOZ/CIsf6SoqP/ftd8K7ZOySFoTED7UtB5KV1BDYjNvfrOuWMS9suhXKHtj0E834r166dpzfvZEVZidC8LeQys7XMJprfRqS3AJgc3JTiiL3uWKREdsAdD0QgH+epd8eK82q4bvxB7h5pobSeBzEQkqv2DK1GO40BemcqYf7CzJfHheSHINOXf6Z/kHnnTX/ApCMvaO4DJAbCt+4azNNhvTfBbDoFxJ0HbljbVvG8BGfVLbedBELxXQBEMpNQQA9YNYOBDVf3Wb3I8hQjgQBNP/whBoWcULIN4zhUmouhD1uLJdCFr+Hs8MmPc3fK3ugV8L0VFbY5sju2gpmaREYRZgk75rhXowgUb+ToznBTXAcY2MEQWG0dxTVsm1jyWMH1xh7Sb3ePkPW8FkZxKae2u6wsAqFMi/eOrKbTKqoH121qWq/08InU4sQBuYSY06OZNKbOuLFi6Gg==';
  const _INTEGRITY_HASH = 'df3066d6f75cde5ea40914b061534603751790e5643a023ff3dfa374d17f5688';
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
