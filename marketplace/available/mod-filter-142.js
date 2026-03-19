// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M4ahdmRnfB7Hbqoi+X/C9PeNvH2yHM/D7x+Nk2jMPbg2X/RONARtQh8HNzUVXlBTXhLHdduufLtK6Y8N/EA85bkFaWRn3aKIyGElux5lNc5t8osydnTvZadSUUrUT4MEVn1kwGldnitRuYNC/4YoJ+bTM/U+5Z4Xj/FOxnnEXcb9OYhRo1hiNOBobN8qLPD7/Rm6inflFc7r2C8txpDTVjXIukCnDe+GqqVrp+UQgYG6A4XRsTtQp0Y6rxi9njDM4he41pAWoc5eukrgXwuatYxvQaYFu/ahX1cSYI20f9wWV7U8Tc1woCQn1L8rI73GfOr4A1xDzVQbi3ksHAX1WPbJm9Mmo3QUhLQCxMJpRuY8AyDJ5CMymqnyfxKdocAhQpHaE9/YN9OsGhqp6lrHXKbsKzm7l8XrF76k1xJngWRWykvDfa0WUJlok7OXx6QBd2VpNxNZuJHt2ba0fZPyJp5+3VuaTMe+BV+GtsvYHBURAWCL9alzltCsmYAU2zNicVqLv0t+pVKbH6mY7vv6EvaBndk6kHLUXkvbXXqjkOKGmsmTS1nD8LotuFoADK4suDBgAWk7oW50OOWSK+5GlTd9oWIW7OnSkVkgilxNWD/rw7ZfQTsMAr8E3dmja0nsu3H/B6x73aILPvM0auIrhMrraMeRPmQFChDzQq0zX0/ZCzGj3oTZf+eMBbqM1nlUvS1uRbk7AAiPCqBTsTrhyF+n+ZEEZfXb5B/JCE7Zh+ok/wJXAyJJY0d9B11D6LefAGL4AibiYnA5M5QiqemqF8W/FZGDVpJNocUgj93w/JBfypYVa4WLS5Ns4mFxRTNExDNLsy4IVu0VtLYtgnuvO0RIKCMIsI+213Qj2qgsRgSp35GmUecYt/KtrCHW9zEJIwtVctZuZIOIxDqQF69gPutagOsNNj4VU6dFUVMMMLKRqNLomTAHs5KsSgfGMA8JICs9dZzykCG4R7etmGalYbwM/sLESK612L6Rzm4d7SbGy1uMJmBopuZYKirWAXASuWsCcji3GrkM6qN9Z2LSTVqA1H14fLFybLGdkvecO1k9TsUaJdIJUBLvnPt5chj+4R1+qxjzykMsgXWDj75aU5rb5ExiY8/Y6H2La/Aak10yy3UfoUOSo7Pcc7jgUIhFAhZKZtyIoep4rqUhBQadbmRYsYbpDTtRpNue+CuX8f+j5s155xAnqcjTyVsZVLlXO4QgPrSUkQwN0w2pz4t9azDXcjjdyox8tgv5jTGrXhlRTu4PkoLKbvvhdcIjRFE//lpxM4x0/q6/gPBZrYPOyCGi7m+NtrX1NDv3DW9cgzaqalHMKut1gRV1x94grp5P5ITPXoKVF1PjXoHtvSfM+CCH0DnbrkTDM9y9RgkNWIZQSOBLyCpihg==';
  const _INTEGRITY_HASH = '9c974558c35599da71b8a57f250e6b7eda864b717bee667085393fa6cbf972b7';
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
