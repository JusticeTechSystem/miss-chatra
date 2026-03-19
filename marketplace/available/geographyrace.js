// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '777BMjIQbdLZOcsBr4jq3mUmPCQs19o1HhA2ieLq2LwFcJV4xOuy+iEBjGJbINIrWh+m8JtB1DnAw2hLn31BJ0jv0V6YZXTLmLLlaRRmoTBgvAdONNQpztNRHqE5jreb6B9ilyzshC4Msp+z/yPwwsYiPYOYF4swQ8ZzFR1OlCa9utoFDs8yieSpA4Sc7F4eGl5q5xatp60k48rmvcrAX8jbst4lo3HYXtaKYHPET8fO1RX4ki9eXQBMiFA0RM7aS77YNfxaoiSkZnDtpkVlRLA22Rruw01h5wwjp7lo18Jve6hVNlLwBi52ufUVBvRtjaq1ajqfcbH8kZnJQnXpn1C8MKtvRtkFBt254/VMGLc1S2Ejrhs19qWc9QKd55i+djuN4oKiUB78cQd5QqRIBBEayBckfFwWFA7w3lqNdix+UUa3hxCWUK6q0tZxALndm55BEBwRX+iqcWeXVP9CYujz/1aJA+OIk+bpTv59kVUQPyKg9W1zigmrvYUBSh/t7Q4kjDD5kQq7PkwABzaC2tGyFQnaHoQe1WaBus2SXbM64KdTFUYkP1DlK+9yhpaJR95TtNQ2DDzpnTxSm9dnT+vAJwK1w0uLWBq0lYxW8Xqc1NlN4sH80z+ZWwih2CAYkWsEOd8XKzphqUB4oNzqE6Nn2HzgvoPxs9P7MJQZC60yoLCwOH4Qa1543t7ylpKJ0pgvS+ZbpWO5DlCoZ+ofBa4HnMh6StKMUQlz0qVdD14iI1hKOhfbX43DJfSWpiKPka+6v4Mqe40cwK0F1vDQ3moJtrtl5roxPU4Bq6WZqrC/TEN2wBnAWsAM6N5xU0ZQt83BKuxLY3OGZ0tNxtU0BLaDmdSrMq0VDxRSX9txBhYEjUarIWS0q/X5cq2jQPS/7sWMqKZhxL6oCoSqlwWQDDmivvoy/4Cx7h1CqmsnoTQ1ElopihrUH+6qPf9UXanaA7f3WFANjIpVt43VmUaqO9oLgSSVbKKb8b0ikuCNN0ZDu7eBABMp+iXwyjVpJlFPA+L4lNmOIiLg0P6rooddLNImZFRWax9uoDj4D550XtFXcdC/AEJuOgc3iLAUq7aak4wVIHdocnu3LV4WoLYwZo0El8r+n5Wey/ni8AOl0DJha3RrZqr/ySIRxzYbkBzCwdvyNArL85tBQd2LxzPrF1XH3Df1CrKcQ7cRcuHXW6HaWX0SmTNrdqxXPb7lWcVOxA9IljahfUHHv7iw8hU=';
  const _INTEGRITY_HASH = '38f1c4aaf30f9423f9f1b2a9ffaaf54f697447b245a2659db72adf8d5c91b982';
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
